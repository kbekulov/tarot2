const spreadCatalog = [
  {
    id: "single",
    name: "Single Card Insight",
    shortLabel: "1 card",
    compactHint: "Quick answer",
    description: "A quick pulse check when you need one clean message.",
    layoutClass: "spread-layout-single",
    positions: [
      {
        title: "Core Message",
        summary: "The clearest energy around your question.",
        purpose: "This card names the main truth asking for your attention right now."
      }
    ]
  },
  {
    id: "three",
    name: "Past, Present, Future",
    shortLabel: "3 cards",
    compactHint: "Timeline",
    description: "A classic timeline spread for understanding how a situation is moving.",
    layoutClass: "spread-layout-three",
    positions: [
      {
        title: "Past",
        summary: "What has shaped the situation so far.",
        purpose: "This position shows the energy or history that led you into the current moment."
      },
      {
        title: "Present",
        summary: "What is most alive in the situation now.",
        purpose: "This position reveals what is active, visible, and ready to be acknowledged right now."
      },
      {
        title: "Future",
        summary: "Where the current path is pointing next.",
        purpose: "This position suggests the likely direction of the story if nothing essential changes."
      }
    ]
  },
  {
    id: "relationship",
    name: "Relationship Mirror",
    shortLabel: "4 cards",
    compactHint: "Two-person read",
    description: "Useful for partnerships, dating dynamics, and any two-person connection.",
    layoutClass: "spread-layout-relationship",
    positions: [
      {
        title: "You",
        summary: "What you are bringing into the connection.",
        purpose: "This position reveals your current stance, needs, or emotional posture."
      },
      {
        title: "Other Person",
        summary: "What the other side may be bringing.",
        purpose: "This position highlights the energy or perspective you are meeting across from you."
      },
      {
        title: "Dynamic",
        summary: "What the relationship between you is asking for.",
        purpose: "This position describes the heartbeat of the connection itself."
      },
      {
        title: "Growth Path",
        summary: "How the connection can move in a healthier direction.",
        purpose: "This position points toward the most useful next adjustment or invitation."
      }
    ]
  },
  {
    id: "decision",
    name: "Decision Compass",
    shortLabel: "5 cards",
    compactHint: "Compare paths",
    description: "Compares two paths and highlights what supports a wiser choice.",
    layoutClass: "spread-layout-decision",
    positions: [
      {
        title: "Option A",
        summary: "The feeling or promise of the first path.",
        purpose: "This position shows the energy that gathers when you lean toward one choice."
      },
      {
        title: "Option B",
        summary: "The feeling or promise of the second path.",
        purpose: "This position shows the energy that gathers when you lean toward the alternative choice."
      },
      {
        title: "Hidden Influence",
        summary: "What may be quietly steering the decision.",
        purpose: "This position uncovers motives, fears, or facts that may be harder to see."
      },
      {
        title: "Wise Choice",
        summary: "The posture that leads to the soundest decision.",
        purpose: "This position points toward the inner quality that will help you choose well."
      },
      {
        title: "Likely Outcome",
        summary: "The direction that becomes available when the lesson lands.",
        purpose: "This position offers the most probable result if you follow the reading honestly."
      }
    ]
  },
  {
    id: "celtic",
    name: "Celtic Cross Classic",
    shortLabel: "10 cards",
    compactHint: "Deep dive",
    description: "A fuller reading for layered questions, crossroads, and major life turns.",
    layoutClass: "spread-layout-celtic",
    positions: [
      {
        title: "Present Situation",
        summary: "Where you stand now.",
        purpose: "This card anchors the reading in the energy that is currently defining the situation."
      },
      {
        title: "Challenge",
        summary: "What crosses or complicates it.",
        purpose: "This position names the tension, block, or friction point in the story."
      },
      {
        title: "Foundation",
        summary: "What sits underneath the issue.",
        purpose: "This position reveals the root layer, past pattern, or emotional base underneath the question."
      },
      {
        title: "Recent Past",
        summary: "What is fading but still matters.",
        purpose: "This position shows what has just shaped the present and may still linger."
      },
      {
        title: "Conscious Aim",
        summary: "What you know, want, or are trying to reach.",
        purpose: "This position points to the thought, goal, or expectation at the top of your mind."
      },
      {
        title: "Near Future",
        summary: "What is arriving soon.",
        purpose: "This position reveals the next wave of movement if the present pattern keeps going."
      },
      {
        title: "Self",
        summary: "How you are positioned inside the matter.",
        purpose: "This position reflects your attitude, role, and current way of relating to the issue."
      },
      {
        title: "Environment",
        summary: "What surrounds you externally.",
        purpose: "This position highlights the people, pressures, or context around you."
      },
      {
        title: "Hopes and Fears",
        summary: "What you long for and worry about at once.",
        purpose: "This position reveals the emotional mix that can quietly shape your expectations."
      },
      {
        title: "Outcome",
        summary: "Where the reading resolves if its lesson is followed.",
        purpose: "This position gives the most likely landing point of the current energy."
      }
    ]
  }
];

const oracleCatalog = [
  {
    id: "answer",
    name: "Straight Answer",
    shortLabel: "1 page",
    compactHint: "Straight answer",
    description: "One clear oracle page when you want the simplest direct message.",
    layoutClass: "spread-layout-oracle",
    palette: {
      paper: "#fff7ed",
      ink: "#3b2f2d",
      accent: "#c58047",
      border: "#ead5be"
    },
    positions: [
      {
        title: "Direct Answer",
        summary: "The clearest page the oracle can open right now.",
        purpose: "This page offers one direct sentence to hold onto when you do not need anything more elaborate."
      }
    ]
  },
  {
    id: "now-then",
    name: "Now and Then",
    shortLabel: "2 pages",
    compactHint: "Shift in time",
    description: "Two pages for what is true now and what it may become next.",
    layoutClass: "spread-layout-oracle",
    palette: {
      paper: "#fbf7ef",
      ink: "#384144",
      accent: "#b58a5a",
      border: "#e4d8c9"
    },
    positions: [
      {
        title: "Now",
        summary: "What is most true in the present moment.",
        purpose: "This page names the clearest truth active around you right now."
      },
      {
        title: "Then",
        summary: "What the situation is becoming next.",
        purpose: "This page points to the next state, mood, or lesson that follows from the present one."
      }
    ]
  },
  {
    id: "ppf",
    name: "Past, Present, Future",
    shortLabel: "3 pages",
    compactHint: "Timeline",
    description: "Three pages for the story behind you, around you, and ahead of you.",
    layoutClass: "spread-layout-oracle",
    palette: {
      paper: "#f3f8fb",
      ink: "#304149",
      accent: "#63a0b3",
      border: "#d7e5ea"
    },
    positions: [
      {
        title: "Past",
        summary: "What shaped the path into this moment.",
        purpose: "This page reveals the influence that still echoes behind the present."
      },
      {
        title: "Present",
        summary: "What is most alive now.",
        purpose: "This page names the truest condition surrounding the situation in the present tense."
      },
      {
        title: "Future",
        summary: "Where the current story is pointing next.",
        purpose: "This page points toward the likely next direction if the present energy continues."
      }
    ]
  }
];

const diceCatalog = [
  {
    id: "cleromancy-cast",
    name: "Cleromancy",
    shortLabel: "1-2 dice",
    compactHint: "1-12 omens",
    description: "One or two dice reveal a numbered omen and the force behind it.",
    layoutClass: "spread-layout-dice",
    positions: [
      {
        id: "first-die",
        title: "First Die",
        summary: "The die that opens the cast.",
        purpose: "This die begins the number that shapes the omen."
      },
      {
        id: "second-die",
        title: "Second Die",
        summary: "The die that may complete the cast.",
        purpose: "If a second die appears, it completes the final number and omen."
      }
    ]
  }
];

const cleromancyOutcomeCatalog = {
  1: {
    primary: "Forbidden",
    secondary: "Abort immediately",
    tone: "danger"
  },
  2: {
    primary: "Disaster",
    secondary: "Absolute no",
    tone: "danger"
  },
  3: {
    primary: "Severe resistance",
    secondary: "High risk of failure",
    tone: "resistance"
  },
  4: {
    primary: "Resistance",
    secondary: "Proceed with caution",
    tone: "resistance"
  },
  5: {
    primary: "Weak uncertainty",
    secondary: "Unstable outcome",
    tone: "uncertain"
  },
  6: {
    primary: "Developing",
    secondary: "Could go either way",
    tone: "uncertain"
  },
  7: {
    primary: "Neutral",
    secondary: "Turning point",
    tone: "neutral"
  },
  8: {
    primary: "Mild progress",
    secondary: "Small advantage",
    tone: "progress"
  },
  9: {
    primary: "Strong progress",
    secondary: "Favorable momentum",
    tone: "progress"
  },
  10: {
    primary: "Success likely",
    secondary: "Clear yes",
    tone: "success"
  },
  11: {
    primary: "Strong success",
    secondary: "Dominant advantage",
    tone: "success"
  },
  12: {
    primary: "Peak success",
    secondary: "Fate-aligned outcome",
    tone: "success"
  }
};

const archetypeMirrorData = window.ARCHETYPE_MIRROR || { spreads: [], archetypes: [] };
const archetypeCatalog = Array.isArray(archetypeMirrorData.spreads)
  ? archetypeMirrorData.spreads
  : [];
const archetypeDefinitions = Array.isArray(archetypeMirrorData.archetypes)
  ? archetypeMirrorData.archetypes
  : [];

const majorArcana = [
  {
    number: 0,
    name: "The Fool",
    keywords: ["beginnings", "trust", "open road"],
    upright: "A new path wants your courage more than your certainty.",
    reversed: "Fear of the unknown or careless leaps can make the next step feel unsteady."
  },
  {
    number: 1,
    name: "The Magician",
    keywords: ["will", "resourcefulness", "focus"],
    upright: "You already hold the tools to shape this moment with intention.",
    reversed: "Scattered attention or doubt can weaken your ability to use what you have."
  },
  {
    number: 2,
    name: "The High Priestess",
    keywords: ["intuition", "mystery", "inner knowing"],
    upright: "Quiet wisdom is available when you stop forcing clarity and listen inward.",
    reversed: "Signals are being ignored, overthought, or buried beneath noise."
  },
  {
    number: 3,
    name: "The Empress",
    keywords: ["nurture", "abundance", "creation"],
    upright: "Growth comes through care, patience, and allowing something to fully develop.",
    reversed: "Overgiving, creative blocks, or neglecting your own needs can thin your energy."
  },
  {
    number: 4,
    name: "The Emperor",
    keywords: ["structure", "leadership", "authority"],
    upright: "Steady structure and clear boundaries create the safety needed for progress.",
    reversed: "Control issues, rigidity, or resistance to responsibility may be distorting the situation."
  },
  {
    number: 5,
    name: "The Hierophant",
    keywords: ["tradition", "guidance", "shared wisdom"],
    upright: "There is value in proven guidance, ritual, or learning from established paths.",
    reversed: "Question whether convention still serves you or is keeping you smaller than necessary."
  },
  {
    number: 6,
    name: "The Lovers",
    keywords: ["choice", "union", "alignment"],
    upright: "This is about wholehearted alignment, not just attraction or preference.",
    reversed: "Mixed motives or misalignment can weaken commitment and clarity."
  },
  {
    number: 7,
    name: "The Chariot",
    keywords: ["momentum", "direction", "discipline"],
    upright: "Focused movement succeeds when your will, emotion, and action pull together.",
    reversed: "A loss of direction, impatience, or inner conflict can stall forward movement."
  },
  {
    number: 8,
    name: "Strength",
    keywords: ["courage", "gentle power", "steadiness"],
    upright: "Quiet courage and self-trust can tame what force alone cannot.",
    reversed: "Self-doubt, exhaustion, or avoiding the harder feeling may weaken your stance."
  },
  {
    number: 9,
    name: "The Hermit",
    keywords: ["reflection", "solitude", "inner lantern"],
    upright: "A slower, more private search for truth is wiser than rushing for answers.",
    reversed: "Isolation, avoidance, or refusing reflection can keep insight out of reach."
  },
  {
    number: 10,
    name: "Wheel of Fortune",
    keywords: ["cycles", "change", "timing"],
    upright: "The wheel is turning, and timing now matters as much as effort.",
    reversed: "Resisting change or trying to control the uncontrollable can create extra friction."
  },
  {
    number: 11,
    name: "Justice",
    keywords: ["truth", "balance", "accountability"],
    upright: "Clear-eyed honesty and fair choices bring the strongest long-term outcome.",
    reversed: "Bias, avoidance, or imbalance may be asking for correction."
  },
  {
    number: 12,
    name: "The Hanged Man",
    keywords: ["pause", "surrender", "new perspective"],
    upright: "Meaning emerges when you stop pushing and allow your perspective to change.",
    reversed: "The pause may feel frustrating because you are resisting the shift it requires."
  },
  {
    number: 13,
    name: "Death",
    keywords: ["ending", "release", "transformation"],
    upright: "Something needs to end so the next chapter has room to begin.",
    reversed: "Clinging to what is over can make transition longer and heavier."
  },
  {
    number: 14,
    name: "Temperance",
    keywords: ["integration", "patience", "balance"],
    upright: "Healing happens through moderation, blending, and respectful pacing.",
    reversed: "Extremes, impatience, or poor timing can keep things from settling."
  },
  {
    number: 15,
    name: "The Devil",
    keywords: ["attachment", "temptation", "shadow"],
    upright: "Look closely at the habits, fears, or attachments that are quietly binding you.",
    reversed: "There is real potential to loosen a pattern that has held too much power."
  },
  {
    number: 16,
    name: "The Tower",
    keywords: ["disruption", "revelation", "breakthrough"],
    upright: "A destabilizing truth can clear what was unsound and make honesty possible.",
    reversed: "The shake-up may be happening inwardly first, or denial may be delaying a needed release."
  },
  {
    number: 17,
    name: "The Star",
    keywords: ["hope", "renewal", "guiding light"],
    upright: "Hope returns when you act from sincerity rather than performance.",
    reversed: "Discouragement may be temporary, but it still asks for gentle restoration."
  },
  {
    number: 18,
    name: "The Moon",
    keywords: ["uncertainty", "instinct", "hidden tides"],
    upright: "Not everything is fully visible yet, so intuition matters as much as logic.",
    reversed: "Confusion can begin to lift when hidden dynamics are named out loud."
  },
  {
    number: 19,
    name: "The Sun",
    keywords: ["clarity", "joy", "confidence"],
    upright: "Warmth, confidence, and clearer truth are available here.",
    reversed: "Light is present, but worry or self-protection may be muting it."
  },
  {
    number: 20,
    name: "Judgement",
    keywords: ["calling", "awakening", "reckoning"],
    upright: "A deeper call asks you to answer honestly and rise into the next version of yourself.",
    reversed: "Self-criticism or hesitation may be delaying a decision your spirit already recognizes."
  },
  {
    number: 21,
    name: "The World",
    keywords: ["completion", "wholeness", "arrival"],
    upright: "A cycle is ready to come full circle, bringing integration and earned closure.",
    reversed: "A final lesson or loose end may need attention before true completion lands."
  }
];

const suitDefinitions = {
  wands: {
    label: "Wands",
    icon: "bi-fire",
    realm: "action, courage, passion, and creative momentum",
    keywords: ["spark", "action"],
    color: "ember"
  },
  cups: {
    label: "Cups",
    icon: "bi-droplet",
    realm: "emotion, intuition, connection, and vulnerability",
    keywords: ["feeling", "relationship"],
    color: "tide"
  },
  swords: {
    label: "Swords",
    icon: "bi-wind",
    realm: "thought, truth, conflict, and mental clarity",
    keywords: ["mind", "truth"],
    color: "storm"
  },
  pentacles: {
    label: "Pentacles",
    icon: "bi-coin",
    realm: "work, resources, body, and long-term stability",
    keywords: ["grounding", "resources"],
    color: "earth"
  }
};

const rankDefinitions = [
  {
    rank: "Ace",
    keywords: ["potential", "opening"],
    upright: "A fresh beginning is available in the realm of",
    reversed: "Untapped potential or a delayed beginning is lingering in the realm of"
  },
  {
    rank: "Two",
    keywords: ["choice", "balance"],
    upright: "A choice, exchange, or balancing act is shaping the realm of",
    reversed: "Indecision or imbalance is making the realm of difficult to steady"
  },
  {
    rank: "Three",
    keywords: ["growth", "expansion"],
    upright: "Growth through collaboration, discovery, or first results is appearing in the realm of",
    reversed: "Scattered effort or delayed progress is slowing the realm of"
  },
  {
    rank: "Four",
    keywords: ["structure", "stability"],
    upright: "A need for rest, structure, or stronger foundations is present in the realm of",
    reversed: "Restlessness or shaky structure is unsettling the realm of"
  },
  {
    rank: "Five",
    keywords: ["friction", "disruption"],
    upright: "Challenge, contrast, or tension is pushing growth in the realm of",
    reversed: "Avoided conflict or lingering instability is complicating the realm of"
  },
  {
    rank: "Six",
    keywords: ["adjustment", "transition"],
    upright: "Movement, support, or rebalancing is available in the realm of",
    reversed: "Progress is possible, but old weight is still slowing the realm of"
  },
  {
    rank: "Seven",
    keywords: ["assessment", "testing"],
    upright: "Discernment, patience, or strategic effort is required in the realm of",
    reversed: "Impatience or defensiveness is clouding the realm of"
  },
  {
    rank: "Eight",
    keywords: ["momentum", "skill"],
    upright: "Momentum, repetition, or deeper mastery is developing in the realm of",
    reversed: "Stagnation or rushed effort is interrupting the realm of"
  },
  {
    rank: "Nine",
    keywords: ["culmination", "intensity"],
    upright: "The realm of is approaching a peak that asks for maturity and awareness",
    reversed: "Strain, overextension, or hard-to-shake worry is hovering around the realm of"
  },
  {
    rank: "Ten",
    keywords: ["completion", "full cycle"],
    upright: "A full cycle, result, or heavier responsibility is completing itself in the realm of",
    reversed: "An overloaded cycle or unfinished release is lingering in the realm of"
  },
  {
    rank: "Page",
    keywords: ["curiosity", "learning"],
    upright: "A message, beginner's mindset, or new sensitivity is entering the realm of",
    reversed: "Immaturity, avoidance, or mixed signals are blurring the realm of"
  },
  {
    rank: "Knight",
    keywords: ["drive", "motion"],
    upright: "Strong movement, pursuit, or focused drive is charging through the realm of",
    reversed: "Impulsiveness, hesitation, or misdirected force is disturbing the realm of"
  },
  {
    rank: "Queen",
    keywords: ["embodiment", "maturity"],
    upright: "An embodied, intuitive, or deeply practiced approach is strengthening the realm of",
    reversed: "Withheld wisdom or emotional imbalance is affecting the realm of"
  },
  {
    rank: "King",
    keywords: ["mastery", "authority"],
    upright: "Leadership, command, or mature stewardship is defining the realm of",
    reversed: "Control issues or misused authority are distorting the realm of"
  }
];

const elements = {
  appShell: document.querySelector(".app-shell"),
  appMain: document.querySelector(".app-main"),
  brandLink: document.querySelector(".brand-mark"),
  modeButtons: Array.from(document.querySelectorAll("[data-app-mode]")),
  modeChoiceButtons: Array.from(document.querySelectorAll("[data-select-mode]")),
  modeChoiceGrid: document.querySelector("#modeChoiceGrid"),
  setupStage: document.querySelector(".setup-stage"),
  mysteryCardButton: document.querySelector("#mysteryCardButton"),
  mysteryCardCrest: document.querySelector(".mystery-card__crest"),
  mysteryCardName: document.querySelector(".mystery-card__name"),
  mysteryCardPrompt: document.querySelector(".mystery-card__prompt"),
  setupStepLabel: document.querySelector("#setupStepLabel"),
  setupTitle: document.querySelector("#setupTitle"),
  setupBody: document.querySelector("#setupBody"),
  choiceSectionLabel: document.querySelector("#choiceSectionLabel"),
  spreadChoicePanel: document.querySelector("#spreadChoicePanel"),
  spreadPicker: document.querySelector("#spreadPicker"),
  focusPanel: document.querySelector("#focusPanel"),
  actionPanel: document.querySelector("#actionPanel"),
  questionPanel: document.querySelector("#questionPanel"),
  focusRing: document.querySelector("#focusRing"),
  focusTimerValue: document.querySelector("#focusTimerValue"),
  focusSpreadName: document.querySelector("#focusSpreadName"),
  focusCountdownText: document.querySelector("#focusCountdownText"),
  actionSpreadName: document.querySelector("#actionSpreadName"),
  actionSpreadBody: document.querySelector("#actionSpreadBody"),
  generateMirrorButton: document.querySelector("#generateMirrorButton"),
  questionPanelLabel: document.querySelector("#questionPanelLabel"),
  questionPanelTitle: document.querySelector("#questionPanelTitle"),
  questionPanelBody: document.querySelector("#questionPanelBody"),
  aiQuestionInput: document.querySelector("#aiQuestionInput"),
  questionPanelStatus: document.querySelector("#questionPanelStatus"),
  askAiButton: document.querySelector("#askAiButton"),
  skipQuestionButton: document.querySelector("#skipQuestionButton"),
  setupFootnote: document.querySelector("#setupFootnote"),
  historyButton: document.querySelector("#historyButton"),
  historyModal: document.querySelector("#historyModal"),
  historyList: document.querySelector("#historyList"),
  clearHistoryButton: document.querySelector("#clearHistoryButton"),
  installAppButton: document.querySelector("#installAppButton"),
  installModal: document.querySelector("#installModal"),
  installModalTitle: document.querySelector("#installModalTitle"),
  installModalBody: document.querySelector("#installModalBody"),
  installModalSteps: document.querySelector("#installModalSteps"),
  setupView: document.querySelector("#setupView"),
  readingView: document.querySelector("#readingView"),
  readingStage: document.querySelector(".reading-stage"),
  readingKicker: document.querySelector(".reading-stage .view-kicker"),
  readingTitle: document.querySelector("#readingTitle"),
  readingHeadline: document.querySelector("#readingHeadline"),
  readingSummary: document.querySelector("#readingSummary"),
  readingGuideText: document.querySelector("#readingGuideText"),
  readingMeta: document.querySelector("#readingMeta"),
  readingBoard: document.querySelector("#readingBoard"),
  readingSheet: document.querySelector("#readingSheet"),
  sheetToggle: document.querySelector("#sheetToggle"),
  sheetToggleLabel: document.querySelector("#sheetToggleLabel"),
  readingSheetInner: document.querySelector(".reading-sheet__inner"),
  readingSurfaceKicker: document.querySelector("#readingSurfaceKicker"),
  cardsAccordion: document.querySelector("#cardsAccordion"),
  readingTakeaways: document.querySelector("#readingTakeaways"),
  aiInterpretationPanel: document.querySelector("#aiInterpretationPanel"),
  aiInterpretationTitle: document.querySelector("#aiInterpretationTitle"),
  aiInterpretationQuestion: document.querySelector("#aiInterpretationQuestion"),
  aiInterpretationBody: document.querySelector("#aiInterpretationBody"),
  saveReadingButton: document.querySelector("#saveReadingButton"),
  copyReadingButton: document.querySelector("#copyReadingButton"),
  shareReadingButton: document.querySelector("#shareReadingButton"),
  readingActionStatus: document.querySelector("#readingActionStatus"),
  redrawButton: document.querySelector("#redrawButton"),
  redrawTopButton: document.querySelector("#redrawTopButton"),
  backButton: document.querySelector("#backButton"),
  resetButton: document.querySelector("#resetButton")
};

const tarotDeck = buildDeck();
const oracleDeck = buildOracleDeck();
const archetypeDeck = buildArchetypeDeck();
const appState = {
  currentMode: null,
  selectedSpreadId: null,
  currentView: "setup",
  currentStage: "mode",
  currentReading: null,
  aiRequestToken: 0,
  artworkDeck: null,
  artworkSeed: "",
  focusCountdown: 10,
  focusTimerId: null,
  readingScrollUnlocked: false,
  pendingQuestion: "",
  installPromptEvent: null,
  isInstalled: isAppInstalled()
};
const DEFAULT_AI_INTERPRET_ENDPOINT = "/api/divination/interpret";
const AI_ENABLED_MODES = new Set(["tarot", "oracle", "archetype"]);
const READING_HISTORY_KEY = "divine-chamber-reading-history-v1";
const MAX_READING_HISTORY_ITEMS = 18;
let readingActionStatusTimer = null;

initialize();

function initialize() {
  initializeInstallExperience();
  renderModeSwitch();
  renderSpreadPicker();
  renderSetupStage();
  showView("setup");

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchMode(button.dataset.appMode);
    });
  });
  elements.brandLink?.addEventListener("click", (event) => {
    event.preventDefault();
    resetExperience();
  });
  elements.modeChoiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      startModeFlow(button.dataset.selectMode);
    });
  });
  elements.historyButton?.addEventListener("click", openHistoryModal);
  elements.clearHistoryButton?.addEventListener("click", clearReadingHistory);
  elements.historyList?.addEventListener("click", handleHistoryListClick);
  elements.installAppButton?.addEventListener("click", handleInstallAppClick);
  elements.sheetToggle.addEventListener("click", toggleSheet);
  elements.saveReadingButton?.addEventListener("click", () => handleReadingUtilityAction("save"));
  elements.copyReadingButton?.addEventListener("click", () => handleReadingUtilityAction("copy"));
  elements.shareReadingButton?.addEventListener("click", () => handleReadingUtilityAction("share"));
  elements.redrawButton.addEventListener("click", redrawReading);
  elements.redrawTopButton.addEventListener("click", redrawReading);
  elements.generateMirrorButton?.addEventListener("click", revealReading);
  elements.aiQuestionInput?.addEventListener("input", handleQuestionInput);
  elements.askAiButton?.addEventListener("click", submitAiQuestion);
  elements.skipQuestionButton?.addEventListener("click", skipAiQuestion);
  elements.backButton.addEventListener("click", resetExperience);
  elements.resetButton.addEventListener("click", resetExperience);
}

function initializeInstallExperience() {
  updateInstallCta();

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    appState.installPromptEvent = event;
    updateInstallCta();
  });

  window.addEventListener("appinstalled", () => {
    appState.installPromptEvent = null;
    appState.isInstalled = true;
    updateInstallCta();
    getInstallModal()?.hide();
  });

  if (!("serviceWorker" in navigator)) {
    return;
  }

  const isLocalhost =
    window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

  if (!window.isSecureContext && !isLocalhost) {
    return;
  }

  window.addEventListener(
    "load",
    () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    },
    { once: true }
  );
}

function isAppInstalled() {
  return (
    window.matchMedia?.("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function updateInstallCta() {
  if (!elements.installAppButton) {
    updateHistoryCta();
    return;
  }

  const shouldShow =
    appState.currentView === "setup" && appState.currentStage === "mode" && !appState.isInstalled;

  elements.installAppButton.hidden = !shouldShow;
  updateHistoryCta();
}

function updateHistoryCta() {
  if (!elements.historyButton) {
    return;
  }

  elements.historyButton.hidden = !(appState.currentView === "setup" && appState.currentStage === "mode");
}

async function handleInstallAppClick() {
  if (appState.isInstalled) {
    showInstallModal({
      title: "Already on your Home Screen",
      body: "Divine Chamber is already installed on this device.",
      steps: []
    });
    return;
  }

  if (appState.installPromptEvent) {
    const promptEvent = appState.installPromptEvent;
    appState.installPromptEvent = null;
    updateInstallCta();

    try {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;

      if (choice?.outcome !== "accepted") {
        showInstallModal(buildInstallHelpContent());
      }
    } catch (error) {
      showInstallModal(buildInstallHelpContent());
    }

    return;
  }

  showInstallModal(buildInstallHelpContent());
}

function buildInstallHelpContent() {
  if (appState.isInstalled) {
    return {
      title: "Already on your Home Screen",
      body: "Divine Chamber is already installed on this device.",
      steps: []
    };
  }

  if (isIOSDevice()) {
    return {
      title: isSafariBrowser() ? "Add it to Home Screen" : "Open in Safari to add it",
      body: isSafariBrowser()
        ? "iPhone does not allow this step to run automatically, but it only takes a moment."
        : "On iPhone, the final Add to Home Screen step works best in Safari.",
      steps: isSafariBrowser()
        ? [
            "Tap the Share button in the browser toolbar.",
            "Choose Add to Home Screen.",
            "Tap Add to place Divine Chamber on your Home Screen."
          ]
        : [
            "Open this page in Safari.",
            "Tap the Share button.",
            "Choose Add to Home Screen, then tap Add."
          ]
    };
  }

  if (isAndroidDevice()) {
    return {
      title: "Add it on Android",
      body: "If your browser does not offer a one-tap install prompt, you can still place Divine Chamber on your app screen manually.",
      steps: [
        "Open the browser menu.",
        "Choose Install app or Add to Home screen.",
        "Confirm Add."
      ]
    };
  }

  return {
    title: "Install Divine Chamber",
    body: "If this browser does not open an install prompt here, use its menu to add Divine Chamber as an app or shortcut.",
    steps: [
      "Open the browser menu.",
      "Choose Install app, Add to Home Screen, or Create shortcut.",
      "Confirm the add."
    ]
  };
}

function showInstallModal(content) {
  if (!elements.installModal || !elements.installModalTitle || !elements.installModalBody) {
    return;
  }

  elements.installModalTitle.textContent = content.title;
  elements.installModalBody.textContent = content.body;

  if (elements.installModalSteps) {
    const steps = Array.isArray(content.steps) ? content.steps : [];
    elements.installModalSteps.hidden = steps.length === 0;
    elements.installModalSteps.innerHTML = steps.map((step) => `<li>${step}</li>`).join("");
  }

  getInstallModal()?.show();
}

function getInstallModal() {
  if (!elements.installModal || typeof bootstrap === "undefined") {
    return null;
  }

  return bootstrap.Modal.getOrCreateInstance(elements.installModal);
}

function getHistoryModal() {
  if (!elements.historyModal || typeof bootstrap === "undefined") {
    return null;
  }

  return bootstrap.Modal.getOrCreateInstance(elements.historyModal);
}

function openHistoryModal() {
  renderHistoryList();
  getHistoryModal()?.show();
}

function getStoredReadings() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(READING_HISTORY_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.filter((item) => item && typeof item === "object") : [];
  } catch (error) {
    return [];
  }
}

function storeReadings(readings) {
  try {
    window.localStorage.setItem(
      READING_HISTORY_KEY,
      JSON.stringify(readings.slice(0, MAX_READING_HISTORY_ITEMS))
    );
    return true;
  } catch (error) {
    return false;
  }
}

function clearReadingHistory() {
  storeReadings([]);
  renderHistoryList();
}

function renderHistoryList() {
  if (!elements.historyList) {
    return;
  }

  const readings = getStoredReadings();

  if (!readings.length) {
    elements.historyList.innerHTML = `
      <div class="history-empty">
        <i class="bi bi-bookmark" aria-hidden="true"></i>
        <p class="mb-0">No saved readings yet. Save one from a result screen when something feels worth keeping.</p>
      </div>
    `;

    if (elements.clearHistoryButton) {
      elements.clearHistoryButton.disabled = true;
    }
    return;
  }

  if (elements.clearHistoryButton) {
    elements.clearHistoryButton.disabled = false;
  }

  elements.historyList.innerHTML = readings
    .map(
      (reading) => `
        <article class="history-item">
          <div>
            <div class="history-item__meta">${escapeHtml(reading.meta || "")}</div>
            <h3 class="history-item__title">${escapeHtml(reading.title || "Saved reading")}</h3>
            <p class="history-item__preview mb-0">${escapeHtml(reading.preview || "")}</p>
          </div>
          <button
            class="history-item__copy"
            type="button"
            data-history-copy="${escapeHtml(reading.id || "")}"
            aria-label="Copy saved reading"
          >
            <i class="bi bi-copy" aria-hidden="true"></i>
          </button>
        </article>
      `
    )
    .join("");
}

function handleHistoryListClick(event) {
  const copyButton = event.target.closest("[data-history-copy]");

  if (!copyButton) {
    return;
  }

  const reading = getStoredReadings().find((item) => item.id === copyButton.dataset.historyCopy);

  if (!reading?.text) {
    return;
  }

  copyTextToClipboard(reading.text).then((didCopy) => {
    copyButton.classList.toggle("is-confirmed", didCopy);
    window.setTimeout(() => copyButton.classList.remove("is-confirmed"), 1200);
  });
}

function isIOSDevice() {
  const userAgent = window.navigator.userAgent;

  return (
    /iphone|ipad|ipod/i.test(userAgent) ||
    (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1)
  );
}

function isAndroidDevice() {
  return /android/i.test(window.navigator.userAgent);
}

function isSafariBrowser() {
  const userAgent = window.navigator.userAgent;

  return /safari/i.test(userAgent) && !/crios|fxios|edgios|opr\/|opios/i.test(userAgent);
}

function buildDeck() {
  const artIndexOffsets = {
    wands: 22,
    cups: 36,
    swords: 50,
    pentacles: 64
  };

  const majorCards = majorArcana.map((card) => ({
    id: `major-${card.number}`,
    kind: "major",
    suitKey: "major",
    suit: "Major Arcana",
    icon: "bi-stars",
    artIndex: card.number,
    ...card
  }));

  const minorCards = Object.entries(suitDefinitions).flatMap(([suitKey, suitConfig]) =>
    rankDefinitions.map((rankConfig, rankIndex) => ({
      id: `${rankConfig.rank.toLowerCase()}-${suitKey}`,
      kind: "minor",
      suitKey,
      suit: suitConfig.label,
      icon: suitConfig.icon,
      artIndex: artIndexOffsets[suitKey] + rankIndex,
      name: `${rankConfig.rank} of ${suitConfig.label}`,
      keywords: [...rankConfig.keywords, ...suitConfig.keywords],
      upright: `${rankConfig.upright} ${suitConfig.realm}.`,
      reversed: `${rankConfig.reversed} ${suitConfig.realm}.`
    }))
  );

  return [...majorCards, ...minorCards];
}

function buildOracleDeck() {
  const source = Array.isArray(window.ORACLE_PHRASES) ? window.ORACLE_PHRASES : [];

  return source.map((entry, index) => {
    const phrase = typeof entry === "string" ? entry : entry.phrase;
    const title = typeof entry === "string" ? `Oracle Page ${index + 1}` : entry.title;

    return {
      id: `oracle-${index + 1}`,
      kind: "oracle",
      name: title,
      title,
      phrase,
      theme: typeof entry === "string" ? "Oracle" : entry.theme
    };
  });
}

function buildArchetypeDeck() {
  return archetypeDefinitions.map((archetype) => ({
    kind: "archetype",
    ...archetype
  }));
}

function renderModeSwitch() {
  elements.modeButtons.forEach((button) => {
    const isActive = button.dataset.appMode === appState.currentMode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  elements.appShell.dataset.mode = appState.currentMode || "chooser";
  elements.appMain.dataset.mode = appState.currentMode || "chooser";
}

function switchMode(mode) {
  if (!mode || mode === appState.currentMode) {
    return;
  }

  startModeFlow(mode);
}

function startModeFlow(mode) {
  if (!mode) {
    return;
  }

  clearFocusCountdown();
  disposeArtworkDeck();
  clearReadingSurface();
  appState.currentMode = mode;
  appState.selectedSpreadId = mode === "dice" ? diceCatalog[0]?.id || null : null;
  appState.currentStage = mode === "dice" ? "result" : "spreads";
  appState.currentReading = null;
  appState.aiRequestToken += 1;
  appState.readingScrollUnlocked = false;
  appState.pendingQuestion = "";
  renderModeSwitch();

  if (mode === "dice") {
    showView("reading");
    createReading();
    setReadingScrollUnlocked(false);
    return;
  }

  renderSpreadPicker();
  renderSetupStage();
  showView("setup");
}

function renderSpreadPicker() {
  const catalog = getActiveCatalog();
  const choiceUnit = appState.currentMode === "oracle" ? "pages" : "positions";

  if (!catalog.length) {
    elements.spreadPicker.innerHTML = "";
    return;
  }

  elements.spreadPicker.innerHTML = catalog
    .map((spread) => {
      const secondaryCopy =
        appState.currentMode === "tarot"
          ? spread.compactHint
          : appState.currentMode === "archetype"
            ? spread.pickerHint || spread.compactHint || spread.description
            : spread.description;

      return `
        <button
          type="button"
          class="spread-choice"
          data-spread-id="${spread.id}"
          aria-label="${spread.name}, ${spread.positions.length} ${choiceUnit}"
        >
          <span class="spread-choice__meta">${spread.shortLabel}</span>
          <span class="spread-choice__title">${spread.name}</span>
          <span class="spread-choice__hint">${secondaryCopy}</span>
        </button>
      `
    })
    .join("");

  elements.spreadPicker.querySelectorAll("[data-spread-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectSpread(button.dataset.spreadId);
    });
  });
}

function selectSpread(spreadId) {
  appState.selectedSpreadId = spreadId;
  appState.currentReading = null;
  appState.aiRequestToken += 1;
  appState.pendingQuestion = "";

  if (shouldOfferAiStep()) {
    openQuestionGate();
    return;
  }

  continueAfterQuestionGate();
}

function prepareArchetypeReflection() {
  clearFocusCountdown();
  appState.currentStage = "action";
  renderSetupStage();
}

function continueAfterQuestionGate() {
  if (appState.currentMode === "archetype") {
    prepareArchetypeReflection();
    return;
  }

  startFocusCountdown();
}

function startFocusCountdown() {
  clearFocusCountdown();
  appState.currentStage = "focus";
  appState.focusCountdown = 10;
  renderSetupStage();

  appState.focusTimerId = window.setInterval(() => {
    appState.focusCountdown -= 1;
    updateFocusCountdown();

    if (appState.focusCountdown <= 0) {
      clearFocusCountdown();
      revealReading();
    }
  }, 1000);
}

function handleQuestionInput() {
  appState.pendingQuestion = elements.aiQuestionInput?.value || "";
  syncQuestionControls();
}

function shouldOfferAiStep(mode = appState.currentMode) {
  return AI_ENABLED_MODES.has(mode);
}

function syncQuestionControls() {
  if (!elements.aiQuestionInput || !elements.askAiButton || !elements.skipQuestionButton) {
    return;
  }

  const hasQuestion = (elements.aiQuestionInput.value || "").trim().split(/\s+/).filter(Boolean).length >= 1;

  elements.aiQuestionInput.disabled = false;
  elements.askAiButton.disabled = !hasQuestion;
  elements.skipQuestionButton.disabled = false;
  elements.askAiButton.textContent = "Submit";
  elements.skipQuestionButton.textContent = "Skip";
}

function setQuestionStatus(message = "", tone = "neutral") {
  if (!elements.questionPanelStatus) {
    return;
  }

  elements.questionPanelStatus.hidden = !message;
  elements.questionPanelStatus.textContent = message;
  elements.questionPanelStatus.classList.toggle("is-loading", tone === "loading");
  elements.questionPanelStatus.classList.toggle("is-error", tone === "error");
}

function openQuestionGate() {
  const selection = getSelectedReadingConfig();

  if (!selection) {
    return;
  }

  appState.currentStage = "question";
  appState.pendingQuestion = "";

  if (elements.aiQuestionInput) {
    elements.aiQuestionInput.value = "";
  }

  if (appState.currentReading?.ai) {
    appState.currentReading.ai = {
      question: "",
      status: "idle",
      interpretation: "",
      error: ""
    };
  }

  setQuestionStatus("");
  renderSetupStage();
  showView("setup");
  syncQuestionControls();
}

function revealPreparedReading() {
  renderReadingView();
  showView("reading");
  setReadingScrollUnlocked(false);
}

function beginAiInterpretationRequest() {
  const question = appState.pendingQuestion.trim();

  if (!appState.currentReading || !question) {
    return;
  }

  if (appState.currentReading.ai?.status === "loading" || appState.currentReading.ai?.status === "success") {
    return;
  }

  const requestToken = appState.aiRequestToken + 1;
  appState.aiRequestToken = requestToken;
  const reading = appState.currentReading;

  reading.ai = {
    question,
    status: "loading",
    interpretation: "",
    error: "",
    startedAt: Date.now()
  };

  requestAiInterpretation(reading)
    .then((interpretation) => {
      if (requestToken !== appState.aiRequestToken || appState.currentReading !== reading) {
        return;
      }

      reading.ai = {
        question,
        status: "success",
        interpretation,
        error: "",
        startedAt: reading.ai?.startedAt || Date.now()
      };
    })
    .catch((error) => {
      if (requestToken !== appState.aiRequestToken || appState.currentReading !== reading) {
        return;
      }

      reading.ai = {
        question,
        status: "error",
        interpretation: "",
        error: getAiFallbackMessage(error),
        startedAt: reading.ai?.startedAt || Date.now()
      };
    })
    .finally(() => {
      if (requestToken !== appState.aiRequestToken || appState.currentReading !== reading) {
        return;
      }

      if (appState.currentView === "reading") {
        revealPreparedReading();
      }
    });
}

function ensureReadingCreated() {
  if (
    appState.currentReading &&
    appState.currentReading.mode === appState.currentMode &&
    appState.currentReading.configId === appState.selectedSpreadId
  ) {
    return true;
  }

  return createReading();
}

function startAiInterpretationFlow() {
  if (!appState.currentReading) {
    return;
  }

  if (appState.currentReading.ai?.status === "idle" && appState.pendingQuestion.trim()) {
    beginAiInterpretationRequest();
  }

  if (appState.currentReading.ai?.status !== "loading") {
    revealPreparedReading();
    return;
  }

  renderReadingView();
  showView("reading");
  setReadingScrollUnlocked(false);
}

function submitAiQuestion() {
  const question = (elements.aiQuestionInput?.value || "").trim();

  if (!question) {
    syncQuestionControls();
    return;
  }

  appState.pendingQuestion = question;
  setQuestionStatus("");
  syncQuestionControls();

  if (ensureReadingCreated()) {
    beginAiInterpretationRequest();
  }

  continueAfterQuestionGate();
}

function skipAiQuestion() {
  appState.aiRequestToken += 1;
  appState.pendingQuestion = "";
  setQuestionStatus("");
  syncQuestionControls();
  continueAfterQuestionGate();
}

function clearFocusCountdown() {
  if (appState.focusTimerId) {
    window.clearInterval(appState.focusTimerId);
    appState.focusTimerId = null;
  }
}

function getAiLoadingProgress(reading) {
  const startedAt = Number(reading?.ai?.startedAt || 0);

  if (!startedAt) {
    return 0;
  }

  return Math.min(180, Math.max(0, (Date.now() - startedAt) / 1000));
}

function renderSetupStage() {
  const selection = getSelectedReadingConfig();
  const isModeStage = appState.currentStage === "mode";
  const isOracleMode = appState.currentMode === "oracle";
  const isArchetypeMode = appState.currentMode === "archetype";
  const shouldAnimate =
    appState.currentStage === "spreads" ||
    appState.currentStage === "focus" ||
    appState.currentStage === "action";

  elements.appMain.classList.toggle(
    "is-mode-select",
    appState.currentView === "setup" && appState.currentStage === "mode"
  );
  elements.setupStage.classList.toggle("setup-stage--mode", isModeStage);
  elements.setupStage.classList.toggle("setup-stage--spreads", appState.currentStage === "spreads");
  elements.setupStage.classList.toggle("setup-stage--focus", appState.currentStage === "focus");
  elements.setupStage.classList.toggle("setup-stage--action", appState.currentStage === "action");
  elements.setupStage.classList.toggle("setup-stage--question", appState.currentStage === "question");
  elements.setupStage.classList.toggle("setup-stage--oracle", isOracleMode);
  elements.setupStage.classList.toggle("setup-stage--archetype", isArchetypeMode);
  elements.mysteryCardButton.classList.toggle(
    "is-spinning",
    shouldAnimate && !isOracleMode && !isArchetypeMode
  );
  elements.mysteryCardButton.classList.toggle("is-flipping", shouldAnimate && isOracleMode);
  elements.mysteryCardButton.classList.toggle("is-mirroring", shouldAnimate && isArchetypeMode);
  elements.modeChoiceGrid.hidden = !isModeStage;
  elements.mysteryCardButton.hidden = isModeStage;
  elements.spreadChoicePanel.hidden = appState.currentStage !== "spreads";
  elements.focusPanel.hidden = appState.currentStage !== "focus";
  elements.actionPanel.hidden = appState.currentStage !== "action";
  elements.questionPanel.hidden = appState.currentStage !== "question";
  elements.choiceSectionLabel.textContent = isOracleMode
    ? "Choose the oracle form"
    : isArchetypeMode
      ? "Choose the mirror spread"
      : "Choose the reading type";
  elements.mysteryCardCrest.innerHTML = isOracleMode
    ? '<i class="bi bi-journal-bookmark-fill"></i>'
    : isArchetypeMode
      ? '<i class="bi bi-eye-fill"></i>'
      : '<i class="bi bi-stars"></i>';

  if (isModeStage) {
    elements.setupStepLabel.textContent = "Step 1";
    elements.setupTitle.textContent = "Choose your lens.";
    elements.setupBody.textContent =
      "Tarot reads symbols. Oracle opens pages. Archetype Mirror reflects inner patterns. Cleromancy casts one or two dice into a numbered omen.";
    elements.setupFootnote.textContent = "Choose one to begin.";
    updateInstallCta();
    return;
  }

  if (appState.currentStage === "spreads") {
    elements.setupStepLabel.textContent = "Step 2";
    elements.setupTitle.textContent = isOracleMode
      ? "Choose your pages."
      : isArchetypeMode
        ? "Choose the mirror spread."
        : "Choose your reading.";
    elements.setupBody.textContent = isOracleMode
      ? "While the book opens, choose a straight answer, a now-and-then pair, or a past-present-future path."
      : isArchetypeMode
        ? "Choose the spread that best matches the pattern you want to see clearly."
        : "Pick the shape of the reveal while the deck keeps turning.";
    elements.setupFootnote.textContent = isOracleMode
      ? "Choose between one, two, or three pages."
      : isArchetypeMode
        ? "Each spread reflects a different kind of inner structure."
        : "Five layouts. One tap chooses.";
    elements.mysteryCardName.textContent = isOracleMode
      ? "Pages whisper"
      : isArchetypeMode
        ? "The mirror is listening"
        : "The deck is turning";
    elements.mysteryCardPrompt.textContent = isOracleMode
      ? "Choose them"
      : isArchetypeMode
        ? "Pick a spread"
        : "Pick a layout";
    updateInstallCta();
    return;
  }

  if (appState.currentStage === "focus" && selection) {
    elements.setupStepLabel.textContent = shouldOfferAiStep() ? "Step 4" : "Step 3";
    elements.setupTitle.textContent = "Hold your question in mind for ten slow seconds.";
    elements.setupBody.textContent = isOracleMode
      ? "No typing now. Keep the feeling simple and let the right page rise from the book."
      : "No typing now. Keep the question private, stay with it quietly, and let the spread settle around it.";
    elements.setupFootnote.textContent = isOracleMode
      ? `Opening ${selection.positions.length} oracle page${selection.positions.length === 1 ? "" : "s"}.`
      : `Preparing a ${selection.name.toLowerCase()} reading.`;
    elements.mysteryCardName.textContent = isOracleMode
      ? "The book is opening"
      : "The question is settling";
    elements.mysteryCardPrompt.textContent = isOracleMode ? "The page is almost here" : "The reveal is close";
    updateFocusCountdown();
    updateInstallCta();
    return;
  }

  if (appState.currentStage === "action" && selection && isArchetypeMode) {
    elements.setupStepLabel.textContent = shouldOfferAiStep() ? "Step 4" : "Step 3";
    elements.setupTitle.textContent = "Generate the mirror.";
    elements.setupBody.textContent = "";
    elements.setupFootnote.textContent = `Preparing ${selection.name.toLowerCase()}.`;
    elements.mysteryCardName.textContent = "The mirror is ready";
    elements.mysteryCardPrompt.textContent = "Reveal the pattern";
    elements.actionSpreadName.textContent = selection.name;
    elements.actionSpreadBody.textContent = selection.intro || selection.description;
    elements.generateMirrorButton.textContent = "Reveal the mirror";
  }

  if (appState.currentStage === "question" && selection && shouldOfferAiStep()) {
    const label = getQuestionStepCopy(appState.currentMode, selection);
    elements.setupStepLabel.textContent = "Step 3";
    elements.setupTitle.textContent = label.title;
    elements.setupBody.textContent = label.body;
    elements.setupFootnote.textContent = label.footnote;
    elements.mysteryCardName.textContent = label.cardName;
    elements.mysteryCardPrompt.textContent = label.cardPrompt;
    elements.questionPanelLabel.textContent = label.panelLabel;
    elements.questionPanelTitle.textContent = label.panelTitle;
    elements.questionPanelBody.textContent = label.panelBody;
    if (elements.aiQuestionInput) {
      elements.aiQuestionInput.placeholder = label.placeholder;
      elements.aiQuestionInput.value = appState.pendingQuestion || "";
    }
    syncQuestionControls();
  }

  updateInstallCta();
}

function updateFocusCountdown() {
  const selection = getSelectedReadingConfig();
  const progress = (Math.max(appState.focusCountdown, 0) / 10) * 100;

  elements.focusRing.style.setProperty("--countdown-progress", progress);
  elements.focusTimerValue.textContent = String(Math.max(appState.focusCountdown, 0));
  elements.focusSpreadName.textContent = selection ? selection.name : "";

  if (appState.focusCountdown > 1) {
    elements.focusCountdownText.textContent =
      appState.currentMode === "oracle"
        ? `${appState.focusCountdown} seconds remaining. Let one clear feeling stay with you.`
        : `${appState.focusCountdown} seconds remaining. Keep the question quietly in mind.`;
    return;
  }

  if (appState.focusCountdown === 1) {
    elements.focusCountdownText.textContent =
      appState.currentMode === "oracle"
        ? "1 second remaining. Let the page settle."
        : "1 second remaining. Let the spread settle.";
    return;
  }

  elements.focusCountdownText.textContent =
    appState.currentMode === "oracle" ? "Opening the oracle now." : "Revealing the spread now.";
}

function revealReading() {
  if (!ensureReadingCreated()) {
    return;
  }

  if (shouldOfferAiStep() && appState.pendingQuestion.trim()) {
    startAiInterpretationFlow();
    return;
  }

  if (appState.currentReading?.ai) {
    appState.currentReading.ai = {
      question: "",
      status: "skipped",
      interpretation: "",
      error: "",
      startedAt: 0
    };
  }

  revealPreparedReading();
}

function createReading() {
  const selection = getSelectedReadingConfig();

  if (!selection) {
    return false;
  }

  if (appState.currentMode === "dice") {
    appState.currentReading = buildDiceReading(selection);
    renderReadingView();
    return true;
  }

  if (appState.currentMode === "oracle") {
    if (oracleDeck.length < selection.positions.length) {
      return false;
    }

    disposeArtworkDeck();
    appState.currentReading = {
      mode: "oracle",
      configId: selection.id,
      draws: drawOraclePages(selection.positions.length, selection),
      ai: {
        question: "",
        status: "idle",
        interpretation: "",
        error: "",
        startedAt: 0
      }
    };
    return true;
  }

  if (appState.currentMode === "archetype") {
    if (archetypeDeck.length < selection.positions.length) {
      return false;
    }

    disposeArtworkDeck();
    appState.currentReading = {
      mode: "archetype",
      configId: selection.id,
      draws: drawArchetypes(selection.positions.length, selection),
      ai: {
        question: "",
        status: "idle",
        interpretation: "",
        error: "",
        startedAt: 0
      }
    };
    return true;
  }

  const artworkDeck = getArtworkDeck(buildReadingSeed());
  const draws = drawCards(selection.positions.length).map((draw) => ({
    ...draw,
    artUri: artworkDeck.getCardUrl(draw.artIndex)
  }));

  appState.currentReading = {
    mode: "tarot",
    configId: selection.id,
    draws,
    ai: {
      question: "",
      status: "idle",
      interpretation: "",
      error: "",
      startedAt: 0
    }
  };

  return true;
}

function redrawReading() {
  if (!appState.selectedSpreadId) {
    showView("setup");
    return;
  }

  if (shouldOfferAiStep()) {
    appState.currentReading = null;
    appState.aiRequestToken += 1;
    appState.pendingQuestion = "";
    openQuestionGate();
    return;
  }

  appState.currentReading = null;
  revealReading();
}

function buildReadingSeed() {
  return `${appState.currentMode}-${appState.selectedSpreadId}-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

function drawCards(count) {
  const shuffled = [...tarotDeck];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled.slice(0, count).map((card) => ({
    ...card,
    isReversed: Math.random() < 0.35
  }));
}

function drawOraclePages(count, config) {
  const shuffled = [...oracleDeck];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled.slice(0, count).map((page, index) => ({
    ...page,
    artUri: buildOraclePageArt(page, config, index)
  }));
}

function drawArchetypes(count, config) {
  const pool = [...archetypeDeck];
  const draws = [];

  while (draws.length < count && pool.length) {
    const totalWeight = pool.reduce(
      (sum, archetype) => sum + (typeof archetype.rarityWeight === "number" ? archetype.rarityWeight : 1),
      0
    );
    let threshold = Math.random() * totalWeight;
    let selectedIndex = 0;

    for (let index = 0; index < pool.length; index += 1) {
      threshold -= typeof pool[index].rarityWeight === "number" ? pool[index].rarityWeight : 1;

      if (threshold <= 0) {
        selectedIndex = index;
        break;
      }
    }

    const [chosen] = pool.splice(selectedIndex, 1);
    draws.push({
      ...chosen,
      artUri: buildArchetypeCardArt(chosen, config, draws.length)
    });
  }

  return draws;
}

function buildDiceReading(config) {
  const shouldUseTwoDice = Math.random() < 0.5;
  const firstValue = rollDieValue();
  const secondValue = shouldUseTwoDice ? rollDieValue() : null;
  const total = shouldUseTwoDice ? firstValue + secondValue : firstValue;
  const omen = getCleromancyOmen(total);
  const draws = shouldUseTwoDice
    ? [
        {
          kind: "dice",
          id: "die-left",
          value: firstValue,
          angle: randomBetween(-8, -2),
          startX: "-4.6rem",
          startY: "-4.8rem",
          startRotate: `${randomBetween(-260, -170)}deg`,
          endX: "-4.35rem",
          endY: "0.12rem"
        },
        {
          kind: "dice",
          id: "die-right",
          value: secondValue,
          angle: randomBetween(2, 8),
          startX: "4.9rem",
          startY: "-4.2rem",
          startRotate: `${randomBetween(175, 255)}deg`,
          endX: "4.35rem",
          endY: "0.12rem"
        }
      ]
    : [
        {
          kind: "dice",
          id: "die-single",
          value: firstValue,
          angle: randomBetween(-4, 4),
          startX: "-0.1rem",
          startY: "-5.1rem",
          startRotate: `${randomBetween(-190, -120)}deg`,
          endX: "0rem",
          endY: "0.08rem"
        }
      ];

  return {
    mode: "dice",
    configId: config.id,
    draws,
    result: {
      total,
      primary: omen.primary,
      secondary: omen.secondary,
      answerTone: omen.tone,
      castLabel: shouldUseTwoDice ? "Two-dice cast" : "Single-die cast"
    }
  };
}

function rollDieValue() {
  return Math.floor(Math.random() * 6) + 1;
}

function getCleromancyOmen(total) {
  return cleromancyOutcomeCatalog[total] || cleromancyOutcomeCatalog[7];
}

function randomBetween(minimum, maximum) {
  return Math.round(Math.random() * (maximum - minimum) + minimum);
}

function renderReadingView() {
  const reading = appState.currentReading;

  if (!reading) {
    return;
  }

  const config = getCatalogForMode(reading.mode).find((item) => item.id === reading.configId);

  if (!config) {
    return;
  }

  const isOracle = reading.mode === "oracle";
  const isArchetype = reading.mode === "archetype";
  const isDice = reading.mode === "dice";
  const isAiLoading = reading.ai?.status === "loading";
  const overallInsight = isOracle ? null : buildOverallInsight(reading.mode, config, reading.draws);

  elements.readingKicker.textContent = isDice
    ? "Dice cast"
    : isArchetype
      ? "Mirror revealed"
      : "Reading revealed";
  elements.readingSurfaceKicker.textContent = isDice
    ? "Omen"
    : isOracle
      ? "Pages"
      : isArchetype
        ? "Reflection"
        : "Interpretation";
  elements.readingTitle.textContent = config.name;
  elements.readingStage.classList.toggle("reading-stage--oracle", isOracle);
  elements.readingStage.classList.toggle("reading-stage--archetype", isArchetype);
  elements.readingStage.classList.toggle("reading-stage--dice", isDice);
  elements.readingStage.classList.toggle("reading-stage--ai-loading", isAiLoading);
  elements.readingStage.classList.remove("is-scroll-unlocked");
  elements.readingSheet.hidden = isDice || isAiLoading;
  elements.redrawTopButton.hidden = isAiLoading || !(isOracle || isDice);
  elements.redrawTopButton.setAttribute(
    "aria-label",
    isDice ? "Cast again" : "Open a new oracle reading"
  );
  elements.readingHeadline.textContent = isOracle
    ? isAiLoading
      ? "Writing the oracle interpretation"
      : drawsLabel(reading.draws.length, "Opened page", "Opened pages")
    : isDice
      ? `Number ${reading.result.total}`
      : isAiLoading
        ? "Writing the interpretation"
      : overallInsight
        ? overallInsight.headline
        : "";
  elements.readingSummary.textContent = isOracle
    ? isAiLoading
      ? "The pages are open. Divine Chamber is shaping your question into a fuller response."
      : drawsLabel(reading.draws.length, "One oracle page is ready below.", `${reading.draws.length} oracle pages are ready below.`)
    : isDice
      ? `${reading.draws.length === 1 ? "A single die" : "Two dice"} prepared this omen. ${reading.result.secondary}.`
    : isAiLoading
        ? "The static reading is ready and will appear as soon as the personalised interpretation lands."
      : overallInsight
        ? overallInsight.summary
        : "";
  elements.readingGuideText.textContent = isDice || isAiLoading ? "" : buildReadingGuide(reading.mode, config);
  elements.readingMeta.textContent = isAiLoading
    ? "AI in progress"
    : isOracle
    ? `${config.positions.length} page${config.positions.length === 1 ? "" : "s"} · oracle`
    : isDice
      ? `${reading.draws.map((draw) => draw.value).join(" + ")} · ${reading.draws.length === 1 ? "1 die" : "2 dice"}`
    : isArchetype
      ? `${config.positions.length} positions · inner reflection`
      : `${config.positions.length} cards · ${countReversed(reading.draws)} reversed`;
  elements.redrawButton.textContent = isOracle
    ? "Open new pages"
    : isDice
      ? "Cast again"
      : isArchetype
      ? "Generate again"
      : "Draw again";
  elements.backButton.textContent = "Close chamber";

  renderReadingBoard(config, reading.draws, reading.mode);

  elements.cardsAccordion.innerHTML = isDice || isAiLoading
    ? ""
    : reading.draws
        .map((draw, index) => renderAccordionItem(draw, config.positions[index], index, config))
        .join("");

  elements.readingTakeaways.hidden = isOracle || isDice || isAiLoading;
  elements.readingTakeaways.innerHTML = isOracle
    ? ""
    : isDice
      ? ""
    : `
        <h2 class="takeaways-title">${isArchetype ? "Reflection Notes" : "Text Reading"}</h2>
        <ul>
          ${overallInsight.takeaways.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      `;

  renderAiInterpretation();
  updateReadingUtilityControls(reading);
}

function renderAiInterpretation() {
  if (!elements.aiInterpretationPanel || !elements.aiInterpretationBody || !elements.aiInterpretationQuestion) {
    return;
  }

  const ai = appState.currentReading?.ai;

  if (!ai || ai.status === "idle" || ai.status === "skipped") {
    elements.aiInterpretationPanel.hidden = true;
    elements.aiInterpretationBody.className = "ai-interpretation__body";
    elements.aiInterpretationBody.innerHTML = "";
    elements.aiInterpretationQuestion.textContent = "";
    return;
  }

  elements.aiInterpretationPanel.hidden = false;
  elements.aiInterpretationTitle.textContent = "Personalised Interpretation";
  elements.aiInterpretationQuestion.textContent = ai.question
    ? `Question: ${ai.question}`
    : "";

  if (ai.status === "error") {
    elements.aiInterpretationBody.className = "ai-interpretation__body ai-interpretation__body--error";
    elements.aiInterpretationBody.innerHTML = `
      <p><strong>The original reading is preserved below.</strong></p>
      <p>${escapeHtml(ai.error)}</p>
    `;
    return;
  }

  elements.aiInterpretationBody.className = "ai-interpretation__body";
  elements.aiInterpretationBody.innerHTML = splitIntoParagraphs(ai.interpretation)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}

function renderReadingBoard(config, draws, mode) {
  if (appState.currentReading?.ai?.status === "loading") {
    elements.readingBoard.className = "reading-board reading-board--ai-loading";
    elements.readingBoard.innerHTML = renderAiLoadingBoard(appState.currentReading);
    return;
  }

  if (mode === "dice") {
    elements.readingBoard.className = "reading-board reading-board--dice-stage";
    elements.readingBoard.innerHTML = renderDiceBoard(appState.currentReading);
    elements.readingBoard.querySelector("#diceRollButton")?.addEventListener("click", redrawReading);
    bindInlineReadingActions(elements.readingBoard);
  } else if (mode === "oracle") {
    elements.readingBoard.className = "reading-board reading-board--oracle-stage";
    elements.readingBoard.innerHTML = renderOracleBoard(config, draws);
  } else if (config.layoutClass === "spread-layout-celtic") {
    elements.readingBoard.className = `reading-board ${config.layoutClass}`;
    elements.readingBoard.innerHTML = renderCelticBoard(config, draws);
  } else {
    elements.readingBoard.className = `reading-board ${config.layoutClass}`;
    elements.readingBoard.innerHTML = draws
      .map((draw, index) =>
        renderReadingPosition(draw, config.positions[index], index, {
          extraClasses: mode === "archetype" ? "reading-position--archetype" : ""
        })
      )
      .join("");
  }

  elements.readingBoard.querySelectorAll("button[data-card-index]").forEach((button) => {
    button.addEventListener("click", () => {
      openReadingCard(Number(button.dataset.cardIndex));
    });
  });
}

function updateReadingUtilityControls(reading = appState.currentReading) {
  const isLoading = reading?.ai?.status === "loading";
  const buttons = [
    elements.saveReadingButton,
    elements.copyReadingButton,
    elements.shareReadingButton
  ].filter(Boolean);

  buttons.forEach((button) => {
    button.disabled = !reading || isLoading;
  });

  if (elements.saveReadingButton) {
    elements.saveReadingButton.innerHTML = reading?.savedHistoryId
      ? '<i class="bi bi-bookmark-check" aria-hidden="true"></i> Saved'
      : '<i class="bi bi-bookmark" aria-hidden="true"></i> Save';
  }
}

function bindInlineReadingActions(scope) {
  scope.querySelectorAll("[data-reading-action]").forEach((button) => {
    button.addEventListener("click", () => handleReadingUtilityAction(button.dataset.readingAction));
  });
}

async function handleReadingUtilityAction(action) {
  if (!appState.currentReading || appState.currentReading.ai?.status === "loading") {
    showReadingActionStatus("The reading is still preparing.");
    return;
  }

  if (action === "save") {
    const saved = saveCurrentReading();
    showReadingActionStatus(saved ? "Saved to recent readings." : "This browser could not save the reading.", saved ? "success" : "error");
    updateReadingUtilityControls();
    return;
  }

  if (action === "copy") {
    const didCopy = await copyTextToClipboard(formatReadingForSharing(appState.currentReading));
    showReadingActionStatus(didCopy ? "Reading copied." : "Copy was not available in this browser.", didCopy ? "success" : "error");
    return;
  }

  if (action === "share") {
    const shared = await shareCurrentReading();
    if (shared === "cancelled") {
      return;
    }
    showReadingActionStatus(
      shared === "copied"
        ? "Sharing was not available, so the reading was copied instead."
        : shared
          ? "Share sheet opened."
          : "Sharing was not available in this browser.",
      shared ? "success" : "error"
    );
  }
}

function saveCurrentReading() {
  const reading = appState.currentReading;

  if (!reading) {
    return false;
  }

  const readings = getStoredReadings();
  const snapshot = createHistorySnapshot(reading);
  const existingIndex = readings.findIndex((item) => item.id === snapshot.id);

  if (existingIndex >= 0) {
    readings.splice(existingIndex, 1);
  }

  const didStore = storeReadings([snapshot, ...readings]);

  if (didStore) {
    reading.savedHistoryId = snapshot.id;
  }

  return didStore;
}

function createHistorySnapshot(reading) {
  const config = getCatalogForMode(reading.mode).find((item) => item.id === reading.configId);
  const id = reading.savedHistoryId || `${reading.mode}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const date = new Date();
  const modeLabel = getReadingModeLabel(reading.mode);
  const title = reading.mode === "dice"
    ? `${modeLabel}: ${reading.result.primary}`
    : `${modeLabel}: ${config?.name || "Reading"}`;
  const preview = getReadingPreview(reading, config);

  return {
    id,
    mode: reading.mode,
    title,
    preview,
    meta: `${date.toLocaleDateString([], { month: "short", day: "numeric" })} · ${modeLabel}`,
    savedAt: date.toISOString(),
    text: formatReadingForSharing(reading)
  };
}

function getReadingPreview(reading, config) {
  if (reading.ai?.status === "success" && reading.ai.interpretation) {
    return splitIntoParagraphs(reading.ai.interpretation)[0] || "Personalised interpretation saved.";
  }

  if (reading.mode === "dice") {
    return `Number ${reading.result.total}: ${reading.result.primary}, ${reading.result.secondary}.`;
  }

  if (reading.mode === "oracle") {
    return reading.draws.map((draw) => draw.title).join(", ");
  }

  if (reading.mode === "archetype") {
    return reading.draws.map((draw, index) => `${config?.positions?.[index]?.title || index + 1}: ${draw.name}`).join("; ");
  }

  return reading.draws.map((draw, index) => `${config?.positions?.[index]?.title || index + 1}: ${draw.name}`).join("; ");
}

function getReadingModeLabel(mode) {
  if (mode === "oracle") {
    return "Oracle";
  }

  if (mode === "archetype") {
    return "Archetype Mirror";
  }

  if (mode === "dice") {
    return "Cleromancy";
  }

  return "Tarot";
}

function formatReadingForSharing(reading) {
  const config = getCatalogForMode(reading.mode).find((item) => item.id === reading.configId);
  const lines = [
    "Divine Chamber",
    `${getReadingModeLabel(reading.mode)}${config?.name ? ` · ${config.name}` : ""}`
  ];

  if (reading.ai?.question) {
    lines.push("", `Question: ${reading.ai.question}`);
  }

  if (reading.ai?.status === "success" && reading.ai.interpretation) {
    lines.push("", "Personalised Interpretation", reading.ai.interpretation);
  } else if (reading.ai?.status === "error") {
    lines.push("", "Personalised Interpretation", "The personalised reading could not be completed, so the original reading is preserved.");
  }

  lines.push("", "Original Reading", ...formatStaticReadingLines(reading, config));

  return lines.filter((line, index, source) => line || source[index - 1]).join("\n");
}

function formatStaticReadingLines(reading, config) {
  if (reading.mode === "dice") {
    return [
      `Number: ${reading.result.total}`,
      `Outcome: ${reading.result.primary}`,
      `Meaning: ${reading.result.secondary}`,
      `Cast: ${reading.result.castLabel}`
    ];
  }

  if (reading.mode === "oracle") {
    return reading.draws.map((draw, index) => {
      const position = config?.positions?.[index]?.title || `Page ${index + 1}`;
      return `${position}: ${draw.title}. ${draw.phrase}`;
    });
  }

  if (reading.mode === "archetype") {
    return reading.draws.map((draw, index) => {
      const position = config?.positions?.[index]?.title || `Position ${index + 1}`;
      return `${position}: ${draw.name}. ${draw.coreMeaning} Prompt: ${buildArchetypeReflectionPrompt(draw, config?.positions?.[index] || {})}`;
    });
  }

  return reading.draws.map((draw, index) => {
    const position = config?.positions?.[index]?.title || `Card ${index + 1}`;
    const orientation = draw.isReversed ? "reversed" : "upright";
    return `${position}: ${draw.name} (${orientation}). ${buildCardInterpretation(draw, config?.positions?.[index] || {})}`;
  });
}

async function copyTextToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (error) {
    // Fall through to the textarea fallback below.
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-1000px";
    document.body.appendChild(textarea);
    textarea.select();
    const didCopy = document.execCommand("copy");
    textarea.remove();
    return didCopy;
  } catch (error) {
    return false;
  }
}

async function shareCurrentReading() {
  const reading = appState.currentReading;

  if (!reading) {
    return false;
  }

  const text = formatReadingForSharing(reading);
  const title = `Divine Chamber ${getReadingModeLabel(reading.mode)}`;

  if (navigator.share) {
    try {
      await navigator.share({ title, text });
      return true;
    } catch (error) {
      return error?.name === "AbortError" ? "cancelled" : false;
    }
  }

  return (await copyTextToClipboard(text)) ? "copied" : false;
}

function showReadingActionStatus(message, tone = "neutral") {
  const statusElement =
    appState.currentReading?.mode === "dice"
      ? document.querySelector("#diceActionStatus") || elements.readingActionStatus
      : elements.readingActionStatus;

  if (!statusElement) {
    return;
  }

  if (readingActionStatusTimer) {
    window.clearTimeout(readingActionStatusTimer);
  }

  statusElement.hidden = false;
  statusElement.textContent = message;
  statusElement.classList.toggle("is-error", tone === "error");
  statusElement.classList.toggle("is-success", tone === "success");

  readingActionStatusTimer = window.setTimeout(() => {
    statusElement.hidden = true;
    statusElement.textContent = "";
    statusElement.classList.remove("is-error", "is-success");
  }, 2600);
}

function renderAiLoadingBoard(reading) {
  const elapsedSeconds = getAiLoadingProgress(reading);
  const loadingCopy = getAiLoadingCopy(reading.mode);

  return `
    <div class="ai-loading-board" aria-live="polite" style="--ai-loading-elapsed: ${elapsedSeconds};">
      <div class="ai-loading-board__pulse" aria-hidden="true"></div>
      <div class="ai-loading-board__copy">
        <div class="view-kicker">Personalised interpretation</div>
        <h2 class="surface-title">${loadingCopy.title}</h2>
        <p class="reading-sheet__summary mb-0">
          ${loadingCopy.body}
        </p>
        <div class="ai-loading-board__progress" aria-hidden="true">
          <span class="ai-loading-board__progress-fill"></span>
        </div>
        <p class="ai-loading-board__note mb-0">
          This may take up to 3 minutes.
        </p>
      </div>
    </div>
  `;
}

function getAiLoadingCopy(mode) {
  if (mode === "oracle") {
    return {
      title: "Reading the pages",
      body: "Your pages are already prepared. Divine Chamber is now shaping them around your question."
    };
  }

  if (mode === "archetype") {
    return {
      title: "Reading the mirror",
      body: "Your archetypes are already prepared. Divine Chamber is now tracing the pattern behind your question."
    };
  }

  return {
    title: "Reading the cards",
    body: "Your cards are already prepared. Divine Chamber is now writing the answer to your question."
  };
}

function renderDiceBoard(reading) {
  const result = reading.result;
  const isSingleDie = reading.draws.length === 1;
  const diceMarkup = reading.draws
    .map((die, index) =>
      renderDiceDie(
        die,
        isSingleDie
          ? "dice-cast__die--single"
          : index === 0
            ? "dice-cast__die--left"
            : "dice-cast__die--right"
      )
    )
    .join("");

  return `
    <div class="dice-cast" aria-live="polite">
      <div class="dice-cast__stage ${isSingleDie ? "dice-cast__stage--single" : "dice-cast__stage--double"}" aria-hidden="true">
        ${diceMarkup}
      </div>
      <div class="dice-cast__result dice-cast__result--${result.answerTone}">
        <div class="dice-cast__answer">${result.primary}</div>
        <p class="dice-cast__answer-detail">${result.secondary}</p>
        <div class="dice-cast__total">
          <span class="dice-cast__total-label">Number</span>
          <span class="dice-cast__total-value">${result.total}</span>
        </div>
        <p class="dice-cast__copy">${result.castLabel}</p>
        <button id="diceRollButton" class="btn btn-ios btn-ios--secondary" type="button">
          Cast again
        </button>
        <div class="dice-cast__utility-actions" aria-label="Cleromancy actions">
          <button class="reading-utility-action" type="button" data-reading-action="save">
            <i class="bi bi-bookmark" aria-hidden="true"></i>
            Save
          </button>
          <button class="reading-utility-action" type="button" data-reading-action="copy">
            <i class="bi bi-copy" aria-hidden="true"></i>
            Copy
          </button>
          <button class="reading-utility-action" type="button" data-reading-action="share">
            <i class="bi bi-share" aria-hidden="true"></i>
            Share
          </button>
        </div>
        <p id="diceActionStatus" class="reading-action-status mb-0" role="status" hidden></p>
      </div>
    </div>
  `;
}

function renderDiceDie(die, extraClass = "") {
  const activePips = getDicePipMap(die.value);

  return `
    <div
      class="dice-cast__die ${extraClass}"
      style="
        --dice-end-x: ${die.endX};
        --dice-end-y: ${die.endY};
        --dice-end-rotate: ${die.angle}deg;
        --dice-start-x: ${die.startX};
        --dice-start-y: ${die.startY};
        --dice-start-rotate: ${die.startRotate};
      "
    >
      <div class="dice-cast__face" aria-label="${die.value}">
        ${Array.from({ length: 9 }, (_, index) => {
          const pipIndex = index + 1;
          return `<span class="dice-cast__pip ${activePips.includes(pipIndex) ? "is-active" : ""}"></span>`;
        }).join("")}
      </div>
    </div>
  `;
}

function getDicePipMap(value) {
  const pipMap = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9]
  };

  return pipMap[value] || [5];
}

function renderCelticBoard(spread, draws) {
  return `
    <div class="celtic-cross-layout">
      <div class="celtic-cross-layout__top">
        ${renderReadingPosition(draws[4], spread.positions[4], 4, {
          extraClasses: "reading-position--celtic"
        })}
      </div>
      <div class="celtic-cross-layout__left">
        ${renderReadingPosition(draws[3], spread.positions[3], 3, {
          extraClasses: "reading-position--celtic"
        })}
      </div>
      <div class="celtic-cross-layout__center">
        ${renderReadingPosition(draws[0], spread.positions[0], 0, {
          extraClasses: "reading-position--celtic reading-position--celtic-core"
        })}
        ${renderReadingPosition(draws[1], spread.positions[1], 1, {
          extraClasses: "reading-position--celtic reading-position--celtic-crossing",
          hideCaption: true
        })}
      </div>
      <div class="celtic-cross-layout__right">
        ${renderReadingPosition(draws[5], spread.positions[5], 5, {
          extraClasses: "reading-position--celtic"
        })}
      </div>
      <div class="celtic-cross-layout__bottom">
        ${renderReadingPosition(draws[2], spread.positions[2], 2, {
          extraClasses: "reading-position--celtic"
        })}
      </div>
    </div>
    <div class="celtic-staff">
      ${[6, 7, 8, 9]
        .map((index) =>
          renderReadingPosition(draws[index], spread.positions[index], index, {
            extraClasses: "reading-position--celtic reading-position--celtic-staff"
          })
        )
        .join("")}
    </div>
  `;
}

function renderOracleBoard(config, draws) {
  return `
    <div class="oracle-layout oracle-layout--${draws.length}">
      ${draws
        .map((draw, index) =>
          renderReadingPosition(draw, config.positions[index], index, {
            extraClasses: `reading-position--oracle oracle-layout__item oracle-layout__item--${
              index + 1
            }`,
            interactive: true
          })
        )
        .join("")}
    </div>
  `;
}

function renderReadingPosition(draw, position, index, options = {}) {
  const { extraClasses = "", hideCaption = false, interactive = true } = options;
  const className = ["reading-position", extraClasses].filter(Boolean).join(" ");
  const descriptor =
    draw.kind === "oracle"
      ? `${draw.title}. ${draw.phrase}`
      : draw.kind === "archetype"
        ? `${draw.name}. ${draw.shortDescription}`
      : draw.isReversed
        ? "Reversed"
        : "Upright";
  const artAlt =
    draw.kind === "oracle"
      ? `${draw.title} oracle page`
      : draw.kind === "archetype"
        ? `${draw.name} archetype`
        : `${draw.name} tarot card art`;
  const tagName = interactive ? "button" : "article";
  const interactiveAttributes = interactive
    ? `type="button" data-card-index="${index}" aria-controls="reading-collapse-${index}"`
    : `role="group"`;

  return `
    <${tagName}
      class="${className}"
      ${interactiveAttributes}
      aria-label="${index + 1}. ${position.title}. ${descriptor}"
    >
      <div class="reading-position__card ${draw.isReversed ? "reading-position__card--reversed" : ""}">
        <img src="${draw.artUri}" alt="${artAlt}" loading="lazy" />
      </div>
      ${
        hideCaption
          ? `<span class="reading-position__badge">${index + 1}</span>`
          : `<div class="reading-position__caption">
              <span class="reading-position__step">${index + 1}</span>
              <span class="reading-position__title">${position.title}</span>
            </div>`
      }
    </${tagName}>
  `;
}

function renderAccordionItem(draw, position, index, config) {
  if (draw.kind === "oracle") {
    return renderOracleAccordionItem(draw, position, index, config);
  }

  if (draw.kind === "archetype") {
    return renderArchetypeAccordionItem(draw, position, index);
  }

  const isFirst = index === 0;
  const headingId = `reading-heading-${index}`;
  const collapseId = `reading-collapse-${index}`;
  const meaning = draw.isReversed ? draw.reversed : draw.upright;
  const orientationLabel = draw.isReversed ? "Reversed" : "Upright";

  return `
    <div class="accordion-item">
      <h2 class="accordion-header" id="${headingId}">
        <button
        class="accordion-button ${isFirst ? "" : "collapsed"}"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#${collapseId}"
          aria-expanded="${isFirst ? "true" : "false"}"
          aria-controls="${collapseId}"
        >
          <div class="accordion-button__content">
            <div class="accordion-step">${position.title}</div>
            <div class="accordion-title">${draw.name}</div>
            <p class="accordion-summary">${position.summary} · ${orientationLabel}</p>
          </div>
        </button>
      </h2>
      <div
        id="${collapseId}"
        class="accordion-collapse collapse ${isFirst ? "show" : ""}"
        aria-labelledby="${headingId}"
      >
        <div class="accordion-body">
          <div class="accordion-detail">
            <div class="card-art-panel">
              <div class="card-art-frame ${draw.isReversed ? "card-art-frame--reversed" : ""}">
                <img src="${draw.artUri}" alt="${draw.name} tarot card art" loading="lazy" />
              </div>
              <div class="card-art-meta">
                <span>${orientationLabel}</span>
                <span>${draw.kind === "major" ? "Major" : draw.suit}</span>
              </div>
            </div>

            <div>
              <div class="accordion-step">Position ${index + 1}</div>
              <p class="accordion-copy mb-0">${position.purpose}</p>
              <div class="keyword-pills">
                ${draw.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}
              </div>
              <p class="accordion-copy mb-0">${meaning} ${buildCardInterpretation(draw, position)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderOracleAccordionItem(draw, position, index, config) {
  const isFirst = index === 0;
  const headingId = `reading-heading-${index}`;
  const collapseId = `reading-collapse-${index}`;

  return `
    <div class="accordion-item accordion-item--oracle">
      <h2 class="accordion-header" id="${headingId}">
        <button
          class="accordion-button ${isFirst ? "" : "collapsed"}"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#${collapseId}"
          aria-expanded="${isFirst ? "true" : "false"}"
          aria-controls="${collapseId}"
        >
          <div class="accordion-button__content">
            <div class="accordion-step">${position.title}</div>
            <div class="accordion-title">${draw.title}</div>
            <p class="accordion-summary">${position.summary} · ${draw.theme}</p>
          </div>
        </button>
      </h2>
      <div
        id="${collapseId}"
        class="accordion-collapse collapse ${isFirst ? "show" : ""}"
        aria-labelledby="${headingId}"
      >
        <div class="accordion-body">
          <div class="accordion-detail">
            <div class="card-art-panel">
              <div class="card-art-frame card-art-frame--oracle">
                <img src="${draw.artUri}" alt="${draw.phrase} oracle page" loading="lazy" />
              </div>
              <div class="card-art-meta">
                <span>Page ${index + 1}</span>
                <span>${config.compactHint}</span>
              </div>
            </div>

            <div>
              <div class="accordion-step">${position.title}</div>
              <p class="accordion-copy mb-0">${position.purpose}</p>
              <p class="accordion-copy mb-0"><strong>${draw.title}</strong></p>
              <blockquote class="oracle-quote">${draw.phrase}</blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderArchetypeAccordionItem(draw, position, index) {
  const isFirst = index === 0;
  const headingId = `reading-heading-${index}`;
  const collapseId = `reading-collapse-${index}`;

  return `
    <div class="accordion-item accordion-item--archetype">
      <h2 class="accordion-header" id="${headingId}">
        <button
          class="accordion-button ${isFirst ? "" : "collapsed"}"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#${collapseId}"
          aria-expanded="${isFirst ? "true" : "false"}"
          aria-controls="${collapseId}"
        >
          <div class="accordion-button__content">
            <div class="accordion-step">${position.title}</div>
            <div class="accordion-title">${draw.name}</div>
            <p class="accordion-summary">${draw.shortDescription} · ${draw.tone}</p>
          </div>
        </button>
      </h2>
      <div
        id="${collapseId}"
        class="accordion-collapse collapse ${isFirst ? "show" : ""}"
        aria-labelledby="${headingId}"
      >
        <div class="accordion-body">
          <div class="accordion-detail">
            <div class="card-art-panel">
              <div class="card-art-frame card-art-frame--archetype">
                <img src="${draw.artUri}" alt="${draw.name} archetype" loading="lazy" />
              </div>
              <div class="card-art-meta">
                <span>${draw.name}</span>
                <span>${draw.tone}</span>
              </div>
            </div>

            <div class="archetype-detail">
              <div class="accordion-step">${position.title}</div>
              <p class="accordion-copy mb-0">${position.purpose}</p>
              <p class="accordion-copy mb-0"><strong>${draw.coreMeaning}</strong></p>
              <p class="accordion-copy mb-0">${buildArchetypeInterpretation(draw, position)}</p>
              <div class="archetype-facets">
                <div class="archetype-facet">
                  <span class="accordion-step">Gift</span>
                  <p class="accordion-copy mb-0">${draw.gift}</p>
                </div>
                <div class="archetype-facet">
                  <span class="accordion-step">Risk</span>
                  <p class="accordion-copy mb-0">${draw.risk}</p>
                </div>
              </div>
              <div class="archetype-reflection">
                <span class="accordion-step">Reflection Prompt</span>
                <p class="accordion-copy mb-0">${buildArchetypeReflectionPrompt(draw, position)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildCardInterpretation(draw, position) {
  const realmSentence =
    draw.kind === "major"
      ? "Because this is a major arcana card, the message carries broader turning-point energy."
      : `As a ${draw.suit.toLowerCase()} card, it especially emphasizes ${suitDefinitions[draw.suitKey].realm}.`;

  const orientationSentence = draw.isReversed
    ? "Its reversed orientation suggests the work is more internal, delayed, or tangled than it first appears."
    : "Its upright orientation suggests the energy is available and easier to act on directly.";

  return `In the ${position.title.toLowerCase()} position, ${realmSentence.toLowerCase()} ${orientationSentence}`;
}

function buildOracleInterpretation(draw, position, index) {
  const placementNotes = [
    "Treat it as the sentence that names the atmosphere around the whole question.",
    "Treat it as the sentence that adjusts your perspective before you force an answer.",
    "Treat it as the sentence most likely to become useful in the next real-world step."
  ];

  return `In the ${position.title.toLowerCase()} page, "${draw.title}" says "${draw.phrase}" ${placementNotes[index] || "Let the sentence stay with you for the rest of the day and notice which word continues to echo."}`;
}

function buildArchetypeInterpretation(draw, position) {
  if (draw.positionReadings?.[position.id]) {
    return draw.positionReadings[position.id];
  }

  return `${draw.coreMeaning} In ${position.title.toLowerCase()}, this archetype is asking for a more conscious relationship with the pattern it represents.`;
}

function buildArchetypeReflectionPrompt(draw, position) {
  return position.promptLead ? `${position.promptLead} ${draw.reflectionPrompt}` : draw.reflectionPrompt;
}

function getQuestionStepCopy(mode, selection) {
  if (mode === "oracle") {
    return {
      title: "What is your question?",
      body: "",
      footnote: "",
      cardName: "The pages are ready",
      cardPrompt: "Submit or skip",
      panelLabel: "",
      panelTitle: "",
      panelBody: "",
      placeholder: "Type your question"
    };
  }

  if (mode === "archetype") {
    return {
      title: "What is your question?",
      body: "",
      footnote: "",
      cardName: "The mirror is waiting",
      cardPrompt: "Submit or skip",
      panelLabel: "",
      panelTitle: "",
      panelBody: "",
      placeholder: "Type your question"
    };
  }

  return {
    title: "What is your question?",
    body: "",
    footnote: "",
    cardName: "The cards are ready",
    cardPrompt: "Submit or skip",
    panelLabel: "",
    panelTitle: "",
    panelBody: "",
    placeholder: "Type your question"
  };
}

async function requestAiInterpretation(reading) {
  const payload = buildAiInterpretationPayload(reading);
  const response = await fetch(getAiInterpretEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  let data = null;

  try {
    data = await response.json();
  } catch (error) {
    data = null;
  }

  if (!response.ok) {
    const error = new Error(
      typeof data?.error === "string" && data.error.trim()
        ? data.error.trim()
        : `AI request failed with status ${response.status}`
    );
    error.status = response.status;
    throw error;
  }

  const interpretation = typeof data?.interpretation === "string" ? data.interpretation.trim() : "";

  if (!interpretation) {
    throw new Error("AI response was empty");
  }

  return interpretation;
}

function getAiInterpretEndpoint() {
  const configuredEndpoint = window.DIVINE_CHAMBER_CONFIG?.aiInterpretEndpoint;

  if (typeof configuredEndpoint === "string" && configuredEndpoint.trim()) {
    return configuredEndpoint.trim();
  }

  return DEFAULT_AI_INTERPRET_ENDPOINT;
}

function getAiFallbackMessage(error) {
  const message = String(error?.message || "");
  const status = Number(error?.status || 0);

  if (status === 429 || /too many/i.test(message)) {
    return "The personalised reading is resting for a moment because too many requests were made. Your original reading is still complete and ready below.";
  }

  if (
    status === 404 ||
    status === 503 ||
    /not configured/i.test(message) ||
    /workers ai/i.test(message)
  ) {
    return "The personalised reading is not connected yet. Your original reading is still complete and ready below.";
  }

  return "The personalised reading could not be completed right now. Your original reading is still complete and ready below.";
}

function buildAiInterpretationPayload(reading) {
  const config = getCatalogForMode(reading.mode).find((item) => item.id === reading.configId);

  return {
    type: getAiTypeForMode(reading.mode),
    question: reading.ai?.question || "",
    result: serializeReadingForAi(reading, config)
  };
}

function getAiTypeForMode(mode) {
  if (mode === "oracle") {
    return "pages";
  }

  if (mode === "archetype") {
    return "mirror";
  }

  return "tarot";
}

function serializeReadingForAi(reading, config) {
  const base = {
    spread: config?.name || "",
    positions: config?.positions?.map((position) => ({
      title: position.title,
      summary: position.summary,
      purpose: position.purpose
    })) || []
  };

  if (reading.mode === "oracle") {
    return {
      ...base,
      pages: reading.draws.map((draw, index) => ({
        title: draw.title,
        phrase: draw.phrase,
        theme: draw.theme,
        position: config?.positions?.[index]?.title || `Page ${index + 1}`,
        summary: config?.positions?.[index]?.summary || ""
      }))
    };
  }

  if (reading.mode === "archetype") {
    return {
      ...base,
      archetypes: reading.draws.map((draw, index) => ({
        name: draw.name,
        shortDescription: draw.shortDescription,
        tone: draw.tone,
        coreMeaning: draw.coreMeaning,
        gift: draw.gift,
        risk: draw.risk,
        reflectionPrompt: buildArchetypeReflectionPrompt(draw, config?.positions?.[index] || {}),
        position: config?.positions?.[index]?.title || `Position ${index + 1}`,
        positionSummary: config?.positions?.[index]?.summary || ""
      }))
    };
  }

  return {
    ...base,
    cards: reading.draws.map((draw, index) => ({
      name: draw.name,
      orientation: draw.isReversed ? "reversed" : "upright",
      suit: draw.suit,
      keywords: draw.keywords,
      position: config?.positions?.[index]?.title || `Card ${index + 1}`,
      positionSummary: config?.positions?.[index]?.summary || ""
    }))
  };
}

function splitIntoParagraphs(text) {
  return text
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildReadingGuide(mode, config) {
  if (mode === "dice") {
    return "";
  }

  if (mode === "oracle") {
    if (config.positions.length === 1) {
      return "Tap the page or use the slip below to unlock scrolling and read the opened page in full.";
    }

    return "Tap any page above or use the slip below to unlock scrolling and move through the full page set.";
  }

  if (mode === "archetype") {
    return "Tap any archetype above or use the slip below to unlock scrolling and read the whole mirror.";
  }

  if (config.positions.length === 1) {
    return "Tap the card or use the slip below to unlock scrolling and read the full interpretation.";
  }

  return "Tap any card above or use the slip below to unlock scrolling and move through the full reading.";
}

function buildOverallInsight(mode, config, draws) {
  if (mode === "dice") {
    return null;
  }

  if (mode === "oracle") {
    return buildOracleOverallInsight(config, draws);
  }

  if (mode === "archetype") {
    return buildArchetypeOverallInsight(config, draws);
  }

  return buildTarotOverallInsight(config, draws);
}

function buildTarotOverallInsight(spread, draws) {
  const majorCount = draws.filter((draw) => draw.kind === "major").length;
  const reversedCount = countReversed(draws);
  const leadingSuitKey = getLeadingSuit(draws);
  const finalDraw = draws[draws.length - 1];
  const leadingSuitText = leadingSuitKey
    ? `${suitDefinitions[leadingSuitKey].label} dominate the reading, bringing ${suitDefinitions[leadingSuitKey].realm} to the foreground.`
    : "The reading is evenly mixed, which suggests the question touches several parts of life at once.";
  const majorText =
    majorCount >= Math.ceil(draws.length / 3)
      ? "Several major arcana cards are present, so this feels like a meaningful turning point rather than a passing mood."
      : "Most of the spread lives in the minor arcana, which points toward practical choices, habits, and everyday dynamics.";
  const reversalText =
    reversedCount >= Math.ceil(draws.length / 2)
      ? "Many reversed cards are present, so patience and internal honesty matter before decisive action."
      : "More upright than reversed cards appear, so the reading favors visible movement and usable next steps.";
  const closingMessage = finalDraw.isReversed ? finalDraw.reversed : finalDraw.upright;

  return {
    headline: createHeadline(spread, draws),
    summary: `This ${spread.name.toLowerCase()} settles around ${leadingSuitText.toLowerCase()} ${majorText} ${reversalText} It closes with ${finalDraw.name} in the ${spread.positions[spread.positions.length - 1].title.toLowerCase()} position, suggesting that ${closingMessage.toLowerCase()}`,
    takeaways: [
      leadingSuitKey
        ? `Give extra attention to ${suitDefinitions[leadingSuitKey].realm}, because that is where the spread is concentrating its energy.`
        : "Treat this as a whole-picture reading and notice which position stirred the strongest response in you.",
      reversedCount > 0
        ? "Do not skip past the reversed cards. They point toward the parts of the story that need reflection before action."
        : "Use the momentum in the upright cards soon so the reading becomes movement instead of only contemplation.",
      `Use the final position, ${spread.positions[spread.positions.length - 1].title}, as your next-step compass and ask how ${finalDraw.name} wants to be lived out in real life.`
    ]
  };
}

function buildOracleOverallInsight(config, draws) {
  const firstPage = draws[0];
  if (draws.length === 1) {
    return {
      headline: firstPage.title,
      summary: `This single page answer opens on "${firstPage.title}" and speaks plainly: "${firstPage.phrase}" The oracle is not asking for a long interpretation here. It is offering one clean sentence to trust before you add more noise.`,
      takeaways: [
        `Take the message literally first: ${firstPage.phrase}`,
        "Resist the urge to overcomplicate it. The value of a one-page answer is its clean direction.",
        "Let the sentence stay with you for the rest of the day and notice which word keeps returning."
      ]
    };
  }

  const secondPage = draws[1];
  const finalPage = draws[draws.length - 1];

  return {
    headline: firstPage.title,
    summary: `This ${config.name.toLowerCase()} opens with "${firstPage.title}" and the line "${firstPage.phrase}" The next page turns the reading toward "${secondPage.title}" and "${secondPage.phrase}" The final page closes on "${finalPage.title}" and "${finalPage.phrase}" Read together, the oracle is asking for reflection before force and a simpler trust in what is already forming.`,
    takeaways: [
      `Start with ${config.positions[0].title.toLowerCase()}: ${firstPage.phrase}`,
      `Let the middle page change the tone of the reading: ${secondPage.phrase}`,
      `Carry the closing page into action: ${finalPage.phrase}`
    ]
  };
}

function buildArchetypeOverallInsight(config, draws) {
  const primary = draws[0];
  const final = draws[draws.length - 1];
  const hasSelf = draws.some((draw) => draw.id === "self");
  const hasShadow = draws.some((draw) => draw.id === "shadow");
  const hasPersona = draws.some((draw) => draw.id === "persona");
  let headline = `${primary.name} is closest to the surface of this mirror.`;

  if (hasSelf) {
    headline = "The mirror is pulling toward integration rather than performance.";
  } else if (hasShadow && hasPersona) {
    headline = "The mirror is showing a split between image and what is harder to admit.";
  } else if (draws.some((draw) => draw.id === "hero")) {
    headline = "The mirror is highlighting effort, defense, and what strength is trying to protect.";
  }

  return {
    headline,
    summary: `This ${config.name.toLowerCase()} is not predicting the future. It is mapping a living inner pattern through ${draws
      .map((draw) => draw.name)
      .join(", ")}. Start with ${primary.name} where the pattern is easiest to notice, and use ${final.name} in the final position as the most practical clue about what integration now requires.`,
    takeaways: [
      `Treat ${primary.name} as the clearest entry point into the mirror. Ask where that pattern already shows up in ordinary life.`,
      `Notice which position feels most uncomfortable to read. That is often where the spread is closest to the living conflict.`,
      `Use the final position, ${config.positions[config.positions.length - 1].title}, as the place to turn reflection into one grounded change.`
    ]
  };
}

function buildOraclePageArt(page, config, index) {
  const titleLines = wrapOracleText(page.title, 13, 2);
  const phraseLines = wrapOracleText(page.phrase, 21, 6);
  const label = `Page ${index + 1}`;
  const svgTitleLines = titleLines
    .map(
      (line, lineIndex) =>
        `<tspan x="95" dy="${lineIndex === 0 ? 0 : 16}">${escapeSvgText(line)}</tspan>`
    )
    .join("");
  const svgPhraseLines = phraseLines
    .map(
      (line, lineIndex) =>
        `<tspan x="95" dy="${lineIndex === 0 ? 0 : 16}">${escapeSvgText(line)}</tspan>`
    )
    .join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 317">
      <defs>
        <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${config.palette.paper}"/>
          <stop offset="100%" stop-color="#ffffff"/>
        </linearGradient>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="${config.palette.border}" stop-opacity="0.92"/>
        </linearGradient>
      </defs>
      <rect width="190" height="317" rx="30" fill="url(#paper)"/>
      <rect x="14" y="14" width="162" height="289" rx="24" fill="url(#edge)" stroke="${config.palette.border}" stroke-width="1.4"/>
      <rect x="28" y="28" width="134" height="261" rx="18" fill="${config.palette.paper}" stroke="${config.palette.border}" stroke-width="1"/>
      <path d="M44 52h102" stroke="${config.palette.accent}" stroke-width="2.4" stroke-linecap="round" opacity="0.85"/>
      <circle cx="95" cy="52" r="5" fill="${config.palette.accent}" opacity="0.92"/>
      <text x="95" y="86" text-anchor="middle" font-size="12" letter-spacing="3.2" fill="${config.palette.accent}" font-family="Georgia, serif">${label}</text>
      <text x="95" y="114" text-anchor="middle" font-size="12.5" letter-spacing="1.5" fill="${config.palette.accent}" font-family="Arial, sans-serif">
        ${svgTitleLines}
      </text>
      <text x="95" y="150" text-anchor="middle" font-size="14.5" fill="${config.palette.ink}" font-family="Georgia, serif">
        ${svgPhraseLines}
      </text>
      <text x="95" y="264" text-anchor="middle" font-size="11" letter-spacing="2.8" fill="${config.palette.accent}" font-family="Arial, sans-serif">${escapeSvgText(
        page.theme.toUpperCase()
      )}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
}

function buildArchetypeCardArt(archetype, config, index) {
  const titleLines = wrapOracleText(archetype.name, 16, 2);
  const summaryLines = wrapOracleText(archetype.shortDescription, 21, 4);
  const titleY = titleLines.length > 1 ? 158 : 164;
  const titleLineStep = titleLines.length > 1 ? 14 : 15;
  const titleFontSize = titleLines.length > 1 ? 14.5 : 15.5;
  const summaryY = titleLines.length > 1 ? 198 : 205;
  const summaryLineStep = summaryLines.length > 3 ? 12 : 13;
  const summaryFontSize = summaryLines.length > 3 ? 10.8 : 11.6;
  const footerY = 276;
  const titleSvgLines = titleLines
    .map(
      (line, lineIndex) =>
        `<tspan x="95" dy="${lineIndex === 0 ? 0 : titleLineStep}">${escapeSvgText(line)}</tspan>`
    )
    .join("");
  const summarySvgLines = summaryLines
    .map(
      (line, lineIndex) =>
        `<tspan x="95" dy="${lineIndex === 0 ? 0 : summaryLineStep}">${escapeSvgText(line)}</tspan>`
    )
    .join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 317">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${archetype.accent.paper}"/>
          <stop offset="100%" stop-color="#ffffff"/>
        </linearGradient>
        <radialGradient id="halo" cx="50%" cy="28%" r="55%">
          <stop offset="0%" stop-color="${archetype.accent.accent}" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="${archetype.accent.accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="190" height="317" rx="30" fill="url(#bg)"/>
      <rect x="16" y="16" width="158" height="285" rx="24" fill="none" stroke="${archetype.accent.border}" stroke-width="1.5"/>
      <rect x="30" y="28" width="130" height="261" rx="18" fill="#ffffff" fill-opacity="0.65" stroke="${archetype.accent.border}" stroke-width="1"/>
      <circle cx="95" cy="84" r="44" fill="url(#halo)"/>
      <circle cx="95" cy="84" r="28" fill="none" stroke="${archetype.accent.accent}" stroke-width="2.2" opacity="0.8"/>
      <circle cx="95" cy="84" r="8" fill="${archetype.accent.accent}" opacity="0.92"/>
      <path d="M58 84h74" stroke="${archetype.accent.accent}" stroke-width="1.8" opacity="0.62"/>
      <text x="95" y="132" text-anchor="middle" font-size="10.8" letter-spacing="1.8" fill="${archetype.accent.accent}" font-family="Arial, sans-serif">ARCHETYPE ${
        index + 1
      }</text>
      <text x="95" y="${titleY}" text-anchor="middle" font-size="${titleFontSize}" fill="${archetype.accent.ink}" font-family="Georgia, serif">
        ${titleSvgLines}
      </text>
      <text x="95" y="${summaryY}" text-anchor="middle" font-size="${summaryFontSize}" fill="${archetype.accent.ink}" opacity="0.82" font-family="Arial, sans-serif">
        ${summarySvgLines}
      </text>
      <text x="95" y="${footerY}" text-anchor="middle" font-size="10.2" letter-spacing="1.9" fill="${archetype.accent.accent}" font-family="Arial, sans-serif">${escapeSvgText(
        config.compactHint.toUpperCase()
      )}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
}

function wrapOracleText(text, maxCharacters, maxLines) {
  const words = text.trim().split(/\s+/);
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length > maxCharacters && currentLine) {
      lines.push(currentLine);
      currentLine = word;
      return;
    }

    currentLine = nextLine;
  });

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.slice(0, maxLines);
}

function escapeSvgText(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function createHeadline(spread, draws) {
  const majorCount = draws.filter((draw) => draw.kind === "major").length;
  const leadingSuitKey = getLeadingSuit(draws);

  if (majorCount >= Math.ceil(draws.length / 2)) {
    return "This reading carries turning-point energy.";
  }

  if (leadingSuitKey === "cups") {
    return "Emotion and intuition are leading the message.";
  }

  if (leadingSuitKey === "wands") {
    return "Action and creative courage are at the center of this spread.";
  }

  if (leadingSuitKey === "swords") {
    return "Truth, tension, and clear thinking are shaping the reading.";
  }

  if (leadingSuitKey === "pentacles") {
    return "The cards are grounding the question in practical reality.";
  }

  return `${spread.name} is asking for a balanced read of the whole picture.`;
}

function getLeadingSuit(draws) {
  const counts = draws.reduce((accumulator, draw) => {
    if (draw.kind === "minor") {
      accumulator[draw.suitKey] = (accumulator[draw.suitKey] || 0) + 1;
    }

    return accumulator;
  }, {});

  const sorted = Object.entries(counts).sort((left, right) => right[1] - left[1]);

  if (!sorted.length) {
    return null;
  }

  if (sorted.length > 1 && sorted[0][1] === sorted[1][1]) {
    return null;
  }

  return sorted[0][0];
}

function countReversed(draws) {
  return draws.filter((draw) => draw.isReversed).length;
}

function getActiveCatalog() {
  return getCatalogForMode(appState.currentMode);
}

function getCatalogForMode(mode) {
  if (mode === "dice") {
    return diceCatalog;
  }

  if (mode === "oracle") {
    return oracleCatalog;
  }

  if (mode === "archetype") {
    return archetypeCatalog;
  }

  if (mode === "tarot") {
    return spreadCatalog;
  }

  return [];
}

function getSelectedReadingConfig() {
  if (!appState.selectedSpreadId) {
    return null;
  }

  return getActiveCatalog().find((item) => item.id === appState.selectedSpreadId);
}

function showView(viewName) {
  appState.currentView = viewName;
  elements.setupView.hidden = viewName !== "setup";
  elements.readingView.hidden = viewName !== "reading";
  elements.appMain.classList.toggle("is-reading", viewName === "reading");
  elements.appMain.classList.toggle(
    "is-reading-scrollable",
    viewName === "reading" && appState.readingScrollUnlocked
  );
  elements.appMain.classList.toggle("is-mode-select", viewName === "setup" && appState.currentStage === "mode");
  elements.appMain.scrollTo({ top: 0, behavior: "auto" });
  updateInstallCta();
}

function openReadingCard(index) {
  const collapseElement = document.querySelector(`#reading-collapse-${index}`);

  unlockReadingScroll();

  if (!collapseElement || typeof bootstrap === "undefined") {
    scrollSheetIntoView();
    return;
  }

  const collapse = bootstrap.Collapse.getOrCreateInstance(collapseElement, { toggle: false });
  collapse.show();
  window.setTimeout(() => {
    collapseElement.closest(".accordion-item")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 180);
}

function toggleSheet() {
  unlockReadingScroll();
  scrollSheetIntoView();
}

function setReadingScrollUnlocked(unlocked) {
  appState.readingScrollUnlocked = unlocked;
  elements.readingStage.classList.toggle("is-scroll-unlocked", unlocked);
  elements.appMain.classList.toggle(
    "is-reading-scrollable",
    appState.currentView === "reading" && unlocked
  );
  elements.sheetToggle.setAttribute("aria-expanded", unlocked ? "true" : "false");
  const labels = getSlipLabels();
  elements.sheetToggleLabel.textContent = unlocked ? labels.unlocked : labels.locked;

  if (elements.readingSheetInner) {
    elements.readingSheetInner.setAttribute("aria-hidden", unlocked ? "false" : "true");

    if ("inert" in elements.readingSheetInner) {
      elements.readingSheetInner.inert = !unlocked;
    }
  }
}

function getSlipLabels() {
  if (appState.currentReading?.mode === "dice") {
    return {
      locked: "Cleromancy result",
      unlocked: "Cleromancy result"
    };
  }

  if (appState.currentReading?.mode === "oracle") {
    return {
      locked: "Read pages below",
      unlocked: "Jump to pages"
    };
  }

  if (appState.currentReading?.mode === "archetype") {
    return {
      locked: "Read reflection below",
      unlocked: "Jump to reflection"
    };
  }

  return {
    locked: "Read interpretation below",
    unlocked: "Jump to interpretation"
  };
}

function unlockReadingScroll() {
  if (!appState.readingScrollUnlocked) {
    setReadingScrollUnlocked(true);
  }
}

function scrollSheetIntoView() {
  window.requestAnimationFrame(() => {
    elements.readingSheet?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function resetExperience() {
  clearFocusCountdown();
  disposeArtworkDeck();
  appState.currentMode = null;
  appState.selectedSpreadId = null;
  appState.currentStage = "mode";
  appState.currentReading = null;
  appState.aiRequestToken += 1;
  appState.readingScrollUnlocked = false;
  appState.pendingQuestion = "";
  clearReadingSurface();
  renderModeSwitch();
  renderSpreadPicker();
  renderSetupStage();
  showView("setup");
}

function clearReadingSurface() {
  setReadingScrollUnlocked(false);
  elements.readingStage.classList.remove("reading-stage--oracle");
  elements.readingStage.classList.remove("reading-stage--archetype");
  elements.readingStage.classList.remove("reading-stage--dice");
  elements.readingStage.classList.remove("reading-stage--ai-loading");
  elements.readingStage.classList.remove("is-scroll-unlocked");
  elements.readingSheet.hidden = false;
  elements.redrawTopButton.hidden = true;
  elements.readingBoard.innerHTML = "";
  elements.cardsAccordion.innerHTML = "";
  elements.readingTakeaways.hidden = false;
  elements.readingTakeaways.innerHTML = "";
  if (elements.aiInterpretationPanel) {
    elements.aiInterpretationPanel.hidden = true;
  }
  if (elements.aiInterpretationQuestion) {
    elements.aiInterpretationQuestion.textContent = "";
  }
  if (elements.aiInterpretationBody) {
    elements.aiInterpretationBody.className = "ai-interpretation__body";
    elements.aiInterpretationBody.innerHTML = "";
  }
  if (elements.readingActionStatus) {
    elements.readingActionStatus.hidden = true;
    elements.readingActionStatus.textContent = "";
  }
  if (elements.aiQuestionInput) {
    elements.aiQuestionInput.value = "";
    elements.aiQuestionInput.disabled = false;
  }
  updateReadingUtilityControls(null);
  setQuestionStatus("");
  syncQuestionControls();
}

function drawsLabel(count, singular, plural) {
  return count === 1 ? singular : plural;
}

function getArtworkDeck(seedText) {
  const normalizedSeed = seedText.trim();

  if (appState.artworkDeck && appState.artworkSeed === normalizedSeed) {
    return appState.artworkDeck;
  }

  disposeArtworkDeck();
  appState.artworkDeck = TarotArt.createDeck(normalizedSeed);
  appState.artworkSeed = normalizedSeed;
  return appState.artworkDeck;
}

function disposeArtworkDeck() {
  if (appState.artworkDeck) {
    appState.artworkDeck.dispose();
  }

  appState.artworkDeck = null;
  appState.artworkSeed = "";
}
