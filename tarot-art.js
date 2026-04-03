// Tarot artwork integration adapted from the open-source Resonator Voyant Tarot
// project: https://github.com/abetusk/ResonatorVoyantTarot
// Upstream source is CC0, with vocabulary artwork by Nina Paley under CC BY 4.0.

const TarotArt = (() => {
  const CARD_HEIGHT = 317;
  const RESCALE = CARD_HEIGHT / 720.0;

  const artState = {
    minorArcana: ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "page", "knight", "queen", "king"],
    minorArcanaSuit: ["key", "cup", "sword", "pentacle"],
    majorArcana: [
      { name: "THE FOOL", symbol: "fool", exclude: true, scale: 0.95, d: [0, -40] },
      { name: "THE MAGICIAN", symbol: "magician", exclude: true, scale: 0.95 },
      { name: "THE PRIESTESS", symbol: "priestess", exclude: true, scale: 0.85 },
      { name: "THE EMPRESS", symbol: "empress", exclude: true, scale: 0.95 },
      { name: "THE EMPEROR", symbol: "emperor", exclude: true, scale: 0.85 },
      { name: "THE HIEROPHANT", symbol: "hierophant", exclude: true, scale: 0.85 },
      { name: "THE LOVERS", symbol: "lovers_nestbox", exclude: false, scale: 0.9 },
      { name: "THE CHARIOT", symbol: "chariot", exclude: true, scale: 0.75 },
      { name: "STRENGTH", symbol: "strength", exclude: true, scale: 0.9 },
      { name: "THE HERMIT", symbol: "hermit", exclude: true, scale: 0.9 },
      { name: "WHEEL of FORTUNE", symbol: "wheel_of_fortune", exclude: true, scale: 0.75, d: [0, -20] },
      { name: "JUSTICE", symbol: "scales", exclude: false, scale: 0.85, d: [0, -40] },
      { name: "THE HANGED MAN", symbol: "sycophant", exclude: true, scale: 0.9 },
      { name: "DEATH", symbol: "death", exclude: true, scale: 0.9, d: [0, -20] },
      { name: "TEMPERANCE", symbol: "waterworks", exclude: true, scale: 0.75, d: [0, -40] },
      { name: "THE DEVIL", symbol: "goat_head", exclude: true, scale: 0.95, d: [0, -40] },
      { name: "THE TOWER", symbol: "castle_tower", exclude: true, scale: 0.9, d: [0, -20] },
      { name: "THE STAR", symbol: "starburst", exclude: true, scale: 0.75 },
      { name: "THE MOON", symbol: "moon", exclude: true, scale: 0.75 },
      { name: "THE SUN", symbol: "sun", exclude: true, scale: 0.75 },
      { name: "JUDGEMENT", symbol: "trumpet", exclude: true, scale: 0.9, d: [-50, -50] },
      { name: "THE WORLD", symbol: "globe", exclude: false, scale: 0.75, d: [0, -40] }
    ],
    aceChoice: [
      "window",
      "door",
      "wings_pair",
      "ring",
      "lotus",
      "hands_giving",
      "hands_pair",
      "hand_side",
      "hand_open_3_4",
      "hand_claddagh",
      "flower_8petal",
      "cloud",
      "circle",
      "scroll_double",
      "table",
      "chair",
      "box",
      "book_open",
      "arms_strong"
    ],
    backCreatureChoice: [
      "branch",
      "branch_curly",
      "bubbles",
      "cloud",
      "clouds",
      "eye",
      "eye_eyelashes",
      "eye_starburst",
      "eye_up",
      "eye_up_starburst",
      "eye_up_starburst_2",
      "eye_vertical",
      "eyeball",
      "flower_jacobean_smaller",
      "hourglass",
      "infinity",
      "lotus",
      "pills",
      "rain",
      "tree_rooted",
      "wave",
      "teardrop"
    ],
    excludeAll: [],
    excludeAllAndWing: []
  };

  postprocessArtState();

  function postprocessArtState() {
    artState.minorArcanaSuit.forEach((suit) => {
      artState.excludeAll.push(suit);
    });

    artState.majorArcana.forEach((card) => {
      if (card.exclude) {
        artState.excludeAll.push(card.symbol);
      }
    });

    sibyl.tarot_template.forEach((template) => {
      artState.excludeAll.push(template.name);
    });

    artState.excludeAll.push("knight", "bob", "rainbow_half", "angel", "lovers_nestbox", "empty");
    artState.excludeAllAndWing = [
      ...artState.excludeAll,
      "wing",
      "wing_angel",
      "wing_angel2",
      "wing_bat",
      "wing_butterfly",
      "wing_eagle",
      "wing_egypt",
      "empty"
    ];
  }

  function randomToken(length = 12) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABDCEFGHIJKLMNOPQRSTUVWXYZ01234567890";
    let token = "";

    for (let index = 0; index < length; index += 1) {
      token += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    return token;
  }

  function realizeTarotSchedule(seed) {
    const tarotSchedule = [];
    let cardNumber = 0;

    sibyl.reseed(seed);

    const minorArcanaTemplate = {};
    sibyl.tarot_template.forEach((template) => {
      const parts = template.name.split("_");
      if (!minorArcanaTemplate[parts[2]]) {
        minorArcanaTemplate[parts[2]] = [];
      }

      minorArcanaTemplate[parts[2]].push(template);
    });

    const suiteColors = sibyl.rand_color_n(8);
    const suiteBackgrounds = [];
    for (let index = 0; index < 4; index += 1) {
      const randomColor = sibyl.rand_color();
      suiteBackgrounds.push([
        { hex: randomColor.background.hex, hsv: randomColor.background.hsv },
        { hex: randomColor.background2.hex, hsv: randomColor.background2.hsv }
      ]);
    }

    const colors = {
      pentacle: [suiteColors[0], suiteColors[4], suiteBackgrounds[0]],
      key: [suiteColors[1], suiteColors[5], suiteBackgrounds[1]],
      sword: [suiteColors[2], suiteColors[6], suiteBackgrounds[2]],
      cup: [suiteColors[3], suiteColors[7], suiteBackgrounds[3]]
    };

    artState.majorArcana.forEach((majorCard, majorIndex) => {
      const tarotData = {
        fg: {},
        bg: {},
        colors: {},
        family: "major",
        designation: majorCard.name,
        familyIdx: majorIndex,
        cardIdx: cardNumber
      };

      const majorColors = sibyl.rand_color_n(8);
      const majorBackgrounds = [];
      for (let index = 0; index < 4; index += 1) {
        const randomColor = sibyl.rand_color();
        majorBackgrounds.push([
          { hex: randomColor.background.hex, hsv: randomColor.background.hsv },
          { hex: randomColor.background2.hex, hsv: randomColor.background2.hsv }
        ]);
      }

      tarotData.colors = [majorColors[0], majorColors[4], majorBackgrounds[0]];

      const originalSymbols = sibyl.preprocess_svgjson(sibyl.mystic_symbolic, undefined, undefined, false, {});
      const backgroundSymbols = sibyl.preprocess_svgjson(
        sibyl.bg_symbol,
        undefined,
        undefined,
        false,
        artState.excludeAll
      );

      sibyl.bg_ctx.choice = backgroundSymbols.choice;
      sibyl.bg_ctx.symbol = backgroundSymbols.symbol;
      sibyl.bg_ctx.data = backgroundSymbols.data;
      sibyl.bg_ctx.max_depth = 0;
      sibyl.bg_ctx.max_nest_depth = 1;
      sibyl.bg_ctx.complexity = 1;
      sibyl.mystic_symbolic_random(sibyl.bg_ctx);

      const backgroundBase = sibyl.bg_ctx.realized_child.base;
      let backgroundNest = "";
      if ("attach" in sibyl.bg_ctx.realized_child) {
        backgroundNest = sibyl.bg_ctx.realized_child.attach.nesting[0].base;
      }

      tarotData.bg.base =
        backgroundBase + tarotData.colors[2][0].hex + tarotData.colors[2][1].hex;
      if (backgroundNest.length > 0) {
        tarotData.bg.attach = {
          nesting: [
            {
              base: backgroundNest + tarotData.colors[2][1].hex + tarotData.colors[2][0].hex
            }
          ]
        };
      }

      const baseCreature = originalSymbols.symbol[majorCard.symbol];
      const foregroundSymbols = sibyl.preprocess_svgjson(
        sibyl.mystic_symbolic,
        undefined,
        undefined,
        false,
        artState.excludeAll
      );
      sibyl.fg_ctx.choice = foregroundSymbols.choice;
      sibyl.fg_ctx.symbol = foregroundSymbols.symbol;
      sibyl.fg_ctx.data = foregroundSymbols.data;
      sibyl.mystic_symbolic_random(sibyl.fg_ctx, baseCreature);

      const cardJson = sibyl.fg_ctx.realized_child;

      if (majorCard.symbol === "lovers_nestbox") {
        const palette = tarotData.colors[1][0].hex + tarotData.colors[1][1].hex;
        const existing = cardJson.attach.nesting[0];
        cardJson.attach.nesting = [
          { base: "woman_stand" + palette },
          { base: "man_stand" + palette },
          { base: existing.base + palette }
        ];
      } else if (majorCard.symbol === "scales") {
        sibyl.mystic_symbolic_random(sibyl.bg_ctx);
        cardJson.attach.nesting.push(sibyl.bg_ctx.realized_child);
      }

      tarotData.fg = cardJson;
      tarotSchedule.push(tarotData);
      cardNumber += 1;
    });

    artState.minorArcanaSuit.forEach((suit) => {
      artState.minorArcana.forEach((designation, designationIndex) => {
        const tarotData = {
          fg: {},
          bg: {},
          colors: colors[suit],
          family: suit,
          designation,
          familyIdx: designationIndex,
          cardIdx: cardNumber
        };

        const suitEntry = suit + colors[suit][0][0].hex + colors[suit][0][1].hex;
        const suitEntryColored = suitEntry + colors[suit][0][0].hex + colors[suit][0][1].hex;

        const backgroundSymbols = sibyl.preprocess_svgjson(
          sibyl.bg_symbol,
          undefined,
          undefined,
          false,
          artState.excludeAll
        );
        sibyl.bg_ctx.choice = backgroundSymbols.choice;
        sibyl.bg_ctx.symbol = backgroundSymbols.symbol;
        sibyl.bg_ctx.data = backgroundSymbols.data;
        sibyl.bg_ctx.max_depth = 0;
        sibyl.bg_ctx.max_nest_depth = 1;
        sibyl.bg_ctx.complexity = 1;
        sibyl.mystic_symbolic_random(sibyl.bg_ctx);

        const backgroundBase = sibyl.bg_ctx.realized_child.base;
        let backgroundNest = "";
        if ("attach" in sibyl.bg_ctx.realized_child) {
          backgroundNest = sibyl.bg_ctx.realized_child.attach.nesting[0].base;
        }

        tarotData.bg.base = backgroundBase + colors[suit][2][0].hex + colors[suit][2][1].hex;
        if (backgroundNest.length > 0) {
          tarotData.bg.attach = {
            nesting: [
              {
                base: backgroundNest + colors[suit][2][1].hex + colors[suit][2][0].hex
              }
            ]
          };
        }

        let cardJson = {
          base: "goat",
          attach: { nesting: [] }
        };

        tarotData.invertColorCreature = false;

        if (designationIndex > 0 && designationIndex < 10) {
          const baseSymbols = sibyl.preprocess_svgjson(
            sibyl.mystic_symbolic,
            undefined,
            undefined,
            false,
            artState.excludeAllAndWing
          );
          sibyl.fg_ctx.choice = baseSymbols.choice;
          sibyl.fg_ctx.symbol = baseSymbols.symbol;
          sibyl.fg_ctx.data = baseSymbols.data;
          const baseCreatureName = sibyl.random_creature(sibyl.fg_ctx, "base");
          const baseCreature = sibyl.fg_ctx.symbol[baseCreatureName];

          const foregroundSymbols = sibyl.preprocess_svgjson(
            sibyl.mystic_symbolic,
            undefined,
            undefined,
            false,
            artState.excludeAll
          );
          sibyl.fg_ctx.choice = foregroundSymbols.choice;
          sibyl.fg_ctx.symbol = foregroundSymbols.symbol;
          sibyl.fg_ctx.data = foregroundSymbols.data;
          sibyl.mystic_symbolic_random(sibyl.fg_ctx, baseCreature);

          const cardTemplate = sibyl.crnd(minorArcanaTemplate[designationIndex + 1]);
          cardJson = {
            base: cardTemplate.name,
            attach: { nesting: [] }
          };

          for (let index = 0; index <= designationIndex; index += 1) {
            cardJson.attach.nesting.push({ base: suitEntry });
          }
          cardJson.attach.nesting.push(sibyl.fg_ctx.realized_child);
          tarotData.invertColorCreature = true;
        } else if (designationIndex === 0) {
          cardJson = {
            base: sibyl.crnd(artState.aceChoice),
            attach: { nesting: [{ base: suitEntry }] }
          };
        } else if (designationIndex === 10) {
          const baseElement = sibyl.preprocess_svgjson(
            sibyl.mystic_symbolic,
            undefined,
            undefined,
            false,
            artState.excludeAll
          );
          sibyl.fg_ctx.choice = baseElement.choice;
          sibyl.fg_ctx.symbol = baseElement.symbol;
          sibyl.fg_ctx.data = baseElement.data;
          sibyl.mystic_symbolic_random(sibyl.fg_ctx, sibyl.fg_ctx.symbol.dog);
          cardJson = sibyl.fg_ctx.realized_child;
          cardJson.attach.crown = [{ base: suitEntry }];
        } else if (designationIndex === 11) {
          const baseElement = sibyl.preprocess_svgjson(
            sibyl.mystic_symbolic,
            undefined,
            undefined,
            false,
            artState.excludeAll
          );
          sibyl.fg_ctx.choice = baseElement.choice;
          sibyl.fg_ctx.symbol = baseElement.symbol;
          sibyl.fg_ctx.data = baseElement.data;
          sibyl.mystic_symbolic_random(sibyl.fg_ctx, sibyl.fg_ctx.symbol.horse);
          cardJson = sibyl.fg_ctx.realized_child;
          cardJson.attach.crown = [{ base: suitEntryColored }];
        } else if (designationIndex === 12) {
          const baseElement = sibyl.preprocess_svgjson(
            sibyl.mystic_symbolic,
            undefined,
            undefined,
            false,
            artState.excludeAll
          );
          sibyl.fg_ctx.choice = baseElement.choice;
          sibyl.fg_ctx.symbol = baseElement.symbol;
          sibyl.fg_ctx.data = baseElement.data;
          sibyl.mystic_symbolic_random(sibyl.fg_ctx, sibyl.fg_ctx.symbol.crown_5pt);
          cardJson = sibyl.fg_ctx.realized_child;
          cardJson.attach.tail = [{ base: suitEntryColored }];
        } else if (designationIndex === 13) {
          const baseElement = sibyl.preprocess_svgjson(
            sibyl.mystic_symbolic,
            undefined,
            undefined,
            false,
            artState.excludeAll
          );
          sibyl.fg_ctx.choice = baseElement.choice;
          sibyl.fg_ctx.symbol = baseElement.symbol;
          sibyl.fg_ctx.data = baseElement.data;
          sibyl.mystic_symbolic_random(sibyl.fg_ctx, sibyl.fg_ctx.symbol.crown_ornate);
          cardJson = sibyl.fg_ctx.realized_child;
          cardJson.attach.tail = [{ base: suitEntryColored }];
        }

        tarotData.fg = cardJson;
        tarotSchedule.push(tarotData);
        cardNumber += 1;
      });
    });

    const backCardColor = sibyl.rand_color();
    const backSchedule = {
      bg: {
        base:
          sibyl.crnd(artState.backCreatureChoice) +
          backCardColor.background.hex +
          backCardColor.background2.hex
      },
      fg: { base: "empty" },
      colors: [
        [{ hex: "#000" }, { hex: "#fff" }],
        [{ hex: "#000" }, { hex: "#fff" }],
        [
          { hex: backCardColor.background.hex, hsv: backCardColor.background.hsv },
          { hex: backCardColor.background2.hex, hsv: backCardColor.background2.hsv }
        ]
      ],
      cardIdx: 78
    };

    tarotSchedule.push(backSchedule);
    return tarotSchedule;
  }

  function renderCardSvg(tarotDataInput) {
    const tarotData = JSON.parse(JSON.stringify(tarotDataInput));
    let suiteSchedule = {};
    let hasSuit = false;

    sibyl.remap_fill_id(sibyl.mystic_symbolic);
    sibyl.remap_fill_id(sibyl.bg_symbol);

    let scale = 1.0;
    let offset = [0, 0];
    const suitScale = {
      ace: RESCALE * 1.0,
      page: RESCALE * 0.75,
      knight: RESCALE * 0.75,
      queen: RESCALE * 0.7,
      king: RESCALE * 0.7
    };
    const suitOffset = {
      ace: [0, 0],
      page: [9, -22],
      knight: [26, -5],
      queen: [0, -31],
      king: [0, -31]
    };

    if (tarotData.family !== "major") {
      if (
        tarotData.designation === "ace" ||
        tarotData.designation === "page" ||
        tarotData.designation === "knight" ||
        tarotData.designation === "queen" ||
        tarotData.designation === "king"
      ) {
        scale = RESCALE * 0.95;
        offset = [0, -10];
      } else {
        hasSuit = true;
        scale = RESCALE * 0.86;
        offset = [0, -8];
        const suitName =
          tarotData.family +
          tarotData.colors[0][0].hex +
          tarotData.colors[0][1].hex;

        suitSchedule = {
          base: "empty",
          attach: { nesting: [] }
        };

        for (let index = 0; index <= tarotData.familyIdx; index += 1) {
          suitSchedule.attach.nesting.push({ base: suitName });
        }

        sibyl.fg_ctx.global_scale = suitScale[tarotData.designation] || RESCALE * 0.82;
        if (suitOffset[tarotData.designation]) {
          offset = suitOffset[tarotData.designation];
        }
      }
    } else {
      scale = RESCALE * artState.majorArcana[tarotData.familyIdx].scale * 0.88;
      if ("d" in artState.majorArcana[tarotData.familyIdx]) {
        offset = [...artState.majorArcana[tarotData.familyIdx].d];
        offset[0] *= RESCALE;
        offset[1] *= RESCALE;
      }
    }

    const foregroundInfo = sibyl.preprocess_svgjson(sibyl.mystic_symbolic, "#000", "#fff");
    const backgroundInfo = sibyl.preprocess_svgjson(sibyl.mystic_symbolic, "#000", "#fff");

    sibyl.fg_ctx.choice = foregroundInfo.choice;
    sibyl.fg_ctx.symbol = foregroundInfo.symbol;
    sibyl.fg_ctx.data = foregroundInfo.data;
    sibyl.fg_ctx.create_svg_header = false;
    sibyl.fg_ctx.create_background_rect = false;
    sibyl.fg_ctx.global_scale = scale;
    sibyl.fg_ctx.svg_id = randomToken();

    sibyl.bg_ctx.choice = backgroundInfo.choice;
    sibyl.bg_ctx.symbol = backgroundInfo.symbol;
    sibyl.bg_ctx.data = backgroundInfo.data;
    sibyl.bg_ctx.create_background_rect = false;
    sibyl.bg_ctx.create_svg_header = false;
    sibyl.bg_ctx.scale = 0.2;
    sibyl.bg_ctx.global_scale = 0.5;
    sibyl.bg_ctx.svg_id = randomToken();

    let creaturePrimary = tarotData.colors[1][0].hex;
    let creatureSecondary = tarotData.colors[1][1].hex;
    if (tarotData.invertColorCreature) {
      creaturePrimary = tarotData.colors[1][1].hex;
      creatureSecondary = tarotData.colors[1][0].hex;
    }

    const creatureSvg =
      '<g transform="translate(' +
      offset[0] +
      " " +
      offset[1] +
      ')">' +
      sibyl.mystic_symbolic_sched(sibyl.fg_ctx, tarotData.fg, creaturePrimary, creatureSecondary) +
      "</g>";

    let suitSvg = "";
    if (hasSuit) {
      sibyl.fg_ctx.svg_id = randomToken();
      suitSvg = sibyl.mystic_symbolic_sched(sibyl.fg_ctx, suiteSchedule);
    }

    const backgroundId = "_background_" + tarotData.cardIdx;
    const backgroundPrimary = tarotData.colors[2][0].hex;
    const backgroundSecondary = tarotData.colors[2][1].hex;
    const singleBackground =
      '<g id="' +
      backgroundId +
      '">' +
      sibyl.mystic_symbolic_sched(
        sibyl.bg_ctx,
        tarotData.bg,
        backgroundPrimary,
        backgroundSecondary
      ) +
      "</g>";

    let tiledBackground = "";
    const dx = 175 * sibyl.bg_ctx.global_scale;
    const dy = 100 * sibyl.bg_ctx.global_scale;
    let firstBackground = true;
    for (let xIndex = 0; xIndex < 8; xIndex += 1) {
      for (let yIndex = 0; yIndex < 11; yIndex += 1) {
        let x = Math.floor(xIndex - 4) * dx;
        const y = Math.floor(yIndex - 5.5) * dy;
        if (yIndex % 2 === 1) {
          x += dx / 2;
        }

        tiledBackground +=
          '<g transform="translate(' +
          -x +
          " " +
          -y +
          ')">' +
          (firstBackground ? singleBackground : '<use xlink:href="#' + backgroundId + '"/>') +
          "</g>";
        firstBackground = false;
      }
    }

    return (
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="190px" height="317px" viewBox="0 0 190 317">' +
      '<rect x="-500" y="-500" width="1500" height="1500" fill="' +
      backgroundPrimary +
      '" />' +
      '<g transform="translate(-250 -250)">' +
      tiledBackground +
      "</g>" +
      (hasSuit ? '<g transform="translate(-264 -205)">' + suitSvg + "</g>" : "") +
      '<g transform="translate(-264 -205)">' +
      creatureSvg +
      "</g>" +
      "</svg>"
    );
  }

  function createDeck(seedInput) {
    const seed = seedInput || randomToken(32);
    const schedule = realizeTarotSchedule(seed);
    const svgCache = new Map();
    const urlCache = new Map();

    return {
      seed,
      getCardSvg(index) {
        if (!svgCache.has(index)) {
          svgCache.set(index, renderCardSvg(schedule[index]));
        }

        return svgCache.get(index);
      },
      getCardUrl(index) {
        if (!urlCache.has(index)) {
          const svg = this.getCardSvg(index);
          const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
          urlCache.set(index, url);
        }

        return urlCache.get(index);
      },
      dispose() {
        urlCache.forEach((url) => URL.revokeObjectURL(url));
        urlCache.clear();
        svgCache.clear();
      }
    };
  }

  return {
    createDeck
  };
})();
