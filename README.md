# Divine Chamber

Divine Chamber is a mobile-first, app-style divination web experience built with static front-end code.

It currently includes four modes:

- `Tarot`: symbolic spreads with card positions, upright/reversed draws, and written interpretations
- `Oracle`: short page-style guidance with 1-page, 2-page, and 3-page layouts
- `Archetype Mirror`: Jungian-inspired reflection spreads built around archetypes rather than prediction
- `Cleromancy`: a cast of one or two dice that turns numbers `1-12` into graded omen outcomes

The project is designed to feel like an iPhone-native ritual flow while still working as a web app in mobile Safari and desktop browsers.

## Current Status

Divine Chamber is currently a static, production-minded web app with:

- a guided homepage for choosing between the four modes
- mobile-focused ritual flows and result screens
- local tarot artwork generation
- predefined Oracle and Archetype content with no AI dependency
- a Cleromancy mode with random one-die or two-dice casting and a 12-step outcome scale
- optional local reading history saved only in the user's browser
- save, copy, and share actions on completed readings
- a privacy note before personalised readings are requested
- optional personalised interpretation support for Tarot, Oracle, and Archetype Mirror through a separate Cloudflare Worker AI endpoint
- install / Add to Home Screen support through a web manifest and service worker

## Repository Roles

- `PreProd2`: `github.com/kbekulov/tarot2` - active development branch and default push target
- `PreProd`: `github.com/kbekulov/tarot` - staged copy synced from `PreProd2` when needed
- `Prod`: `github.com/kbekulov/divinechamber` - production copy synced from `PreProd2` when needed

## Entry Pages

- [index.html](index.html): the main browser version, intended for real use in Safari or other browsers
- [iphone.html](iphone.html): the framed demo version with mocked iPhone chrome

## Current Mode Labels

- Landing screen: `Tarot`, `Oracle`, `Archetype Mirror`, `Cleromancy`
- Header navigation: `Tarot`, `Oracle`, `Mirror`, `Dice`

## Project Structure

- [app.js](app.js): shared app flow, mode logic, install flow, and rendering
- [styles.css](styles.css): shared visual system and responsive layout
- [oracle-phrases.js](oracle-phrases.js): Oracle phrase library
- [archetype-mirror-data.js](archetype-mirror-data.js): Archetype Mirror spreads and interpretation data
- [tarot-art.js](tarot-art.js): tarot artwork integration
- [manifest.webmanifest](manifest.webmanifest): installable app metadata
- [sw.js](sw.js): service worker
- [site-config.js](site-config.js): runtime config for the external AI endpoint used on GitHub Pages
- [cloudflare/divination-ai-handler.js](cloudflare/divination-ai-handler.js): shared Workers AI request handler
- [workers/divine-chamber-ai](workers/divine-chamber-ai): separate Cloudflare Worker for personalised interpretations

## Local History And Sharing

Users can manually save completed readings into browser `localStorage`. Saved readings stay on that device only and can be cleared from the `Recent readings` modal on the landing screen.

Completed readings also include lightweight actions for:

- saving the reading locally
- copying a text version
- opening the native share sheet when supported

Personal questions are only sent to the AI endpoint when the user presses `Submit`. Choosing `Skip` keeps the reading flow local and shows the static result.

## Run Locally

Serve the folder with a simple static server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

Using a local server is recommended over opening the files directly, because install behavior and service worker support depend on a browser-served context.

## Personalised Interpretations On GitHub Pages

This project is currently designed to stay on GitHub Pages for the frontend while using a separate Cloudflare Worker for AI-backed personalised interpretations.

### Current Live Setup

- Worker name: `divine-chamber-ai`
- Worker endpoint: `https://divine-chamber-ai.kiril-950.workers.dev/api/divination/interpret`
- Current model: `@cf/openai/gpt-oss-20b`
- Current browser origins allowed by the live Worker:
  - `https://tarot.bekulov.com`
  - `https://tarot2.bekulov.com`
  - `https://chamber.quest`

The frontend reads the Worker endpoint from [site-config.js](site-config.js):

```js
window.DIVINE_CHAMBER_CONFIG = {
  aiInterpretEndpoint: "https://divine-chamber-ai.kiril-950.workers.dev/api/divination/interpret"
};
```

### Important Deployment Note

The Cloudflare Worker is currently dashboard-managed.

That means:

- pushing this repo updates the frontend and the Worker source files stored in the repo
- but it does **not** automatically redeploy the live Worker code in Cloudflare

If the Worker logic changes, the Cloudflare dashboard code must also be updated and redeployed unless the Worker is later moved to a full Wrangler-based deploy flow.

The repo Worker source currently includes:

- explicit allowed origins for `tarot.bekulov.com`, `tarot2.bekulov.com`, and `chamber.quest`
- a simple in-memory per-origin/IP rate limit for personalised interpretation requests
- prompt and cleanup safeguards that avoid em dashes in AI responses

### Worker Files In This Repo

These files contain the Worker-side implementation tracked in Git:

- [cloudflare/divination-ai-handler.js](cloudflare/divination-ai-handler.js): shared prompt building, response parsing, and CORS logic
- [workers/divine-chamber-ai/src/index.js](workers/divine-chamber-ai/src/index.js): Worker entry point
- [workers/divine-chamber-ai/wrangler.toml](workers/divine-chamber-ai/wrangler.toml): Wrangler configuration, including the `AI` binding

### Minimum Cloudflare Requirements

- a Cloudflare Worker deployed at the configured endpoint
- a Workers AI binding named `AI`
- Worker code deployed with the same logic as the repo's current AI handler
- Worker code updated manually in the Cloudflare dashboard when AI backend changes are made in Git

### If Personalised Interpretations Fail

If the Worker URL is missing, the live Worker code is outdated, or the Workers AI binding is not working, the app will still reveal the original static divination result and fall back gracefully.

## Artwork And Notices

Divine Chamber uses locally generated tarot artwork based on the open-source [Resonator Voyant Tarot](https://github.com/abetusk/ResonatorVoyantTarot) project.

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for attribution and license details.
