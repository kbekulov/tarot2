window.DIVINE_CHAMBER_CONFIG = Object.assign(
  {
    // Set this to your deployed Cloudflare Worker URL once it exists.
    // Example:
    // aiInterpretEndpoint: "https://divine-chamber-ai.<your-subdomain>.workers.dev/api/divination/interpret"
    aiInterpretEndpoint: ""
  },
  window.DIVINE_CHAMBER_CONFIG || {}
);
