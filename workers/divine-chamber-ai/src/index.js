import { handleInterpretOptions, handleInterpretPost } from "../../../cloudflare/divination-ai-handler.js";

const ALLOWED_ORIGINS = new Set([
  "https://tarot.bekulov.com",
  "https://tarot2.bekulov.com",
  "https://chamber.quest"
]);

function corsHeaders(request) {
  const origin = request.headers.get("Origin");

  return {
    "access-control-allow-origin": origin && ALLOWED_ORIGINS.has(origin) ? origin : "*",
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
    Vary: "Origin"
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/divination/interpret") {
      if (request.method === "OPTIONS") {
        return handleInterpretOptions({ request, env });
      }

      if (request.method === "POST") {
        return handleInterpretPost({ request, env });
      }

      return new Response(JSON.stringify({ error: "Method not allowed." }), {
        status: 405,
        headers: {
          "content-type": "application/json; charset=UTF-8",
          ...corsHeaders(request)
        }
      });
    }

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Divine Chamber AI worker is running."
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json; charset=UTF-8",
          ...corsHeaders(request)
        }
      }
    );
  }
};
