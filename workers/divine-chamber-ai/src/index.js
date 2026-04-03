import { handleInterpretOptions, handleInterpretPost } from "../../../cloudflare/divination-ai-handler.js";

function corsHeaders(env) {
  return {
    "access-control-allow-origin":
      typeof env?.ALLOWED_ORIGIN === "string" && env.ALLOWED_ORIGIN.trim()
        ? env.ALLOWED_ORIGIN.trim()
        : "*",
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type"
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
          ...corsHeaders(env)
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
          ...corsHeaders(env)
        }
      }
    );
  }
};
