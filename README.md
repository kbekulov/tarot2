# Divine Chamber

Divine Chamber is a mobile-first, app-style divination web experience built with static front-end code.

It currently includes four modes:

- `Tarot`: symbolic spreads with card positions, upright/reversed draws, and written interpretations
- `Oracle`: short page-style guidance with 1-page, 2-page, and 3-page layouts
- `Archetype Mirror`: Jungian-inspired reflection spreads built around archetypes rather than prediction
- `Dice Cast`: a fast two-dice yes / maybe / no reading with the rolled total

The project is designed to feel like an iPhone-native ritual flow while still working as a web app in mobile Safari and desktop browsers.

## Current Status

Divine Chamber is currently a static, production-minded web app with:

- a guided homepage for choosing between the four modes
- mobile-focused ritual flows and result screens
- local tarot artwork generation
- predefined Oracle and Archetype content with no AI dependency
- install / Add to Home Screen support through a web manifest and service worker

## Entry Pages

- [index.html](index.html): the main browser version, intended for real use in Safari or other browsers
- [iphone.html](iphone.html): the framed demo version with mocked iPhone chrome

## Project Structure

- [app.js](app.js): shared app flow, mode logic, install flow, and rendering
- [styles.css](styles.css): shared visual system and responsive layout
- [oracle-phrases.js](oracle-phrases.js): Oracle phrase library
- [archetype-mirror-data.js](archetype-mirror-data.js): Archetype Mirror spreads and interpretation data
- [tarot-art.js](tarot-art.js): tarot artwork integration
- [manifest.webmanifest](manifest.webmanifest): installable app metadata
- [sw.js](sw.js): service worker

## Run Locally

Serve the folder with a simple static server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

Using a local server is recommended over opening the files directly, because install behavior and service worker support depend on a browser-served context.

## Artwork And Notices

Divine Chamber uses locally generated tarot artwork based on the open-source [Resonator Voyant Tarot](https://github.com/abetusk/ResonatorVoyantTarot) project.

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for attribution and license details.
