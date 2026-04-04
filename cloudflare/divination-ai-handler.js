const MODEL = "@cf/openai/gpt-oss-20b";
const JSON_HEADERS = {
  "content-type": "application/json; charset=UTF-8"
};
const ALLOWED_TYPES = new Set(["tarot", "mirror", "pages"]);

export function handleInterpretOptions(context) {
  return new Response(null, {
    status: 204,
    headers: buildResponseHeaders(context)
  });
}

export async function handleInterpretPost(context) {
  const { request, env } = context;

  if (!env?.AI || typeof env.AI.run !== "function") {
    return json(
      {
        error: "Cloudflare Workers AI is not configured for this deployment yet."
      },
      503,
      context
    );
  }

  let payload;

  try {
    payload = await request.json();
  } catch (error) {
    return json({ error: "The request body must be valid JSON." }, 400, context);
  }

  const type = typeof payload?.type === "string" ? payload.type.trim().toLowerCase() : "";
  const question = typeof payload?.question === "string" ? payload.question.trim() : "";
  const result = payload?.result;

  if (!ALLOWED_TYPES.has(type)) {
    return json({ error: "Unsupported divination type." }, 400, context);
  }

  if (!question) {
    return json({ error: "A question is required for AI interpretation." }, 400, context);
  }

  if (!result || typeof result !== "object") {
    return json({ error: "Result payload is required." }, 400, context);
  }

  const messages = buildPromptMessages({ type, question, result });

  try {
    const aiResult = await env.AI.run(MODEL, {
      messages,
      temperature: 0.7,
      max_tokens: 900
    });
    const interpretation = normalizeInterpretation(extractAiText(aiResult));

    if (!interpretation) {
      throw new Error("Empty AI response");
    }

    return json({ interpretation }, 200, context);
  } catch (error) {
    return json({ error: "The personalised interpretation could not be generated right now." }, 502, context);
  }
}

function buildPromptMessages({ type, question, result }) {
  const promptHeader = buildPromptHeader(type);
  const resultContext = buildResultContext(type, result);

  return [
    {
      role: "system",
      content:
        `${promptHeader}\n\n` +
        "Write a reflective interpretation in natural prose. Return between 2 and 5 paragraphs total. " +
        "Do not use bullet points. Keep the tone calm, clear, and meaningful. " +
        "Do not mention being an AI model. Do not apologize. Stay grounded in the provided divination data."
    },
    {
      role: "user",
      content:
        `User question:\n${question}\n\n` +
        `Divination result:\n${resultContext}\n\n` +
        "Interpret this divination in a way that directly responds to the user's question while respecting the specific divination type."
    }
  ];
}

function buildPromptHeader(type) {
  if (type === "mirror") {
    return (
      "You are interpreting a Jungian archetype mirror reading. " +
      "This is not fortune telling. It is a psychological reflection based on inner patterns, defenses, tensions, and integration, " +
      "using Carl Jung-inspired archetypes."
    );
  }

  if (type === "pages") {
    return (
      "You are interpreting an oracle pages reading. " +
      "This reading is based on short oracle-style pages or phrases that offer reflective guidance. " +
      "These are oracle pages, not Tarot cards and not Jungian archetypes."
    );
  }

  return (
    "You are interpreting a Tarot reading. " +
    "This reading is based on Tarot cards, their spread positions, and their upright or reversed orientation."
  );
}

function buildResultContext(type, result) {
  const spreadLabel = result?.spread ? `Spread: ${result.spread}\n` : "";
  const positions = Array.isArray(result?.positions)
    ? result.positions
        .map(
          (position, index) =>
            `${index + 1}. ${position.title}${position.summary ? ` — ${position.summary}` : ""}${
              position.purpose ? `\n   Purpose: ${position.purpose}` : ""
            }`
        )
        .join("\n")
    : "";

  if (type === "mirror") {
    const archetypes = Array.isArray(result?.archetypes)
      ? result.archetypes
          .map(
            (item, index) =>
              `${index + 1}. ${item.position}: ${item.name}\n` +
              `   Tone: ${item.tone}\n` +
              `   Core meaning: ${item.coreMeaning}\n` +
              `   Short description: ${item.shortDescription}\n` +
              `   Gift: ${item.gift}\n` +
              `   Risk: ${item.risk}\n` +
              `   Reflection prompt: ${item.reflectionPrompt}`
          )
          .join("\n")
      : "";

    return `${spreadLabel}${positions ? `Positions:\n${positions}\n\n` : ""}Archetypes:\n${archetypes}`;
  }

  if (type === "pages") {
    const pages = Array.isArray(result?.pages)
      ? result.pages
          .map(
            (item, index) =>
              `${index + 1}. ${item.position}: ${item.title}\n` +
              `   Theme: ${item.theme}\n` +
              `   Summary: ${item.summary}\n` +
              `   Phrase: ${item.phrase}`
          )
          .join("\n")
      : "";

    return `${spreadLabel}${positions ? `Positions:\n${positions}\n\n` : ""}Pages:\n${pages}`;
  }

  const cards = Array.isArray(result?.cards)
    ? result.cards
        .map(
          (item, index) =>
            `${index + 1}. ${item.position}: ${item.name}\n` +
            `   Orientation: ${item.orientation}\n` +
            `   Suit: ${item.suit}\n` +
            `   Summary: ${item.positionSummary}\n` +
            `   Keywords: ${Array.isArray(item.keywords) ? item.keywords.join(", ") : ""}`
        )
        .join("\n")
    : "";

  return `${spreadLabel}${positions ? `Positions:\n${positions}\n\n` : ""}Cards:\n${cards}`;
}

function extractAiText(aiResult) {
  if (typeof aiResult === "string") {
    return aiResult;
  }

  if (typeof aiResult?.response === "string") {
    return aiResult.response;
  }

  if (typeof aiResult?.result?.response === "string") {
    return aiResult.result.response;
  }

  if (typeof aiResult?.output_text === "string") {
    return aiResult.output_text;
  }

  return "";
}

function normalizeInterpretation(text) {
  const cleaned = String(text || "")
    .replace(/\r/g, "")
    .replace(/^\s*[-*•]\s+/gm, "")
    .replace(/^#{1,6}\s+/gm, "")
    .trim();

  if (!cleaned) {
    return "";
  }

  let paragraphs = cleaned
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.replace(/\n+/g, " ").trim())
    .filter(Boolean);

  if (paragraphs.length === 1) {
    const sentences = paragraphs[0].split(/(?<=[.!?])\s+/).filter(Boolean);

    if (sentences.length >= 4) {
      const midpoint = Math.ceil(sentences.length / 2);
      paragraphs = [
        sentences.slice(0, midpoint).join(" ").trim(),
        sentences.slice(midpoint).join(" ").trim()
      ].filter(Boolean);
    }
  }

  if (paragraphs.length > 5) {
    const firstFour = paragraphs.slice(0, 4);
    const remainder = paragraphs.slice(4).join(" ").trim();
    paragraphs = [...firstFour, remainder].filter(Boolean);
  }

  return paragraphs.join("\n\n");
}

function json(payload, status = 200, context) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...JSON_HEADERS,
      ...buildResponseHeaders(context)
    }
  });
}

function buildResponseHeaders(context) {
  const allowedOrigin =
    typeof context?.env?.ALLOWED_ORIGIN === "string" && context.env.ALLOWED_ORIGIN.trim()
      ? context.env.ALLOWED_ORIGIN.trim()
      : "*";

  return {
    "access-control-allow-origin": allowedOrigin,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type"
  };
}
