(function buildArchetypeMirrorData() {
  const spreads = [
    {
      id: "quick-mirror",
      name: "Quick Mirror",
      shortLabel: "3 positions",
      compactHint: "Fast reflection",
      pickerHint: "See what you show, what drives it, and the next honest move.",
      description: "A compact spread for the part you present, the force working underneath, and the next integrating move.",
      layoutClass: "spread-layout-three",
      intro:
        "This is a short psychological mirror. It reflects the mask, the hidden driver, and the most useful next movement toward integration.",
      positions: [
        {
          id: "outerMask",
          title: "Outer Mask",
          summary: "The part of you the world meets first.",
          purpose: "This position shows the role, posture, or defense that appears most readily on the surface.",
          promptLead: "Where are you managing impression more than reality?"
        },
        {
          id: "hiddenForce",
          title: "Hidden Force",
          summary: "What is quietly shaping you underneath.",
          purpose: "This position points to the inner pattern, pressure, or unmet need acting behind the visible story.",
          promptLead: "What is influencing you from underneath the obvious narrative?"
        },
        {
          id: "integrationPath",
          title: "Integration Path",
          summary: "The healthiest way to work with the tension.",
          purpose: "This position suggests the most useful move toward ownership, balance, and inner coherence.",
          promptLead: "What would help you work with this pattern more consciously?"
        }
      ]
    },
    {
      id: "inner-tension",
      name: "Inner Tension",
      shortLabel: "4 positions",
      compactHint: "Inner conflict",
      pickerHint: "Track the split between awareness, pressure, conflict, and repair.",
      description: "A four-part spread for what you know, what presses from below, where conflict forms, and how it can resolve.",
      layoutClass: "spread-layout-relationship",
      intro:
        "This spread is not about prediction. It is for identifying the split between the part of you that knows and the part of you that keeps pressing from below.",
      positions: [
        {
          id: "consciousSelf",
          title: "Conscious Self",
          summary: "The part of you that currently feels most identified.",
          purpose: "This position shows the perspective you can already see and name in yourself.",
          promptLead: "What part of your inner story do you already know well?"
        },
        {
          id: "unconsciousPressure",
          title: "Unconscious Pressure",
          summary: "What is active below awareness.",
          purpose: "This position reveals the impulse, fear, or need that may be shaping the situation from beneath awareness.",
          promptLead: "What pressure may be active beneath your stated intentions?"
        },
        {
          id: "conflict",
          title: "Conflict",
          summary: "Where the tension catches in daily life.",
          purpose: "This position describes the friction point between your visible stance and the deeper pattern underneath it.",
          promptLead: "Where does this inner split show up most clearly?"
        },
        {
          id: "resolution",
          title: "Resolution",
          summary: "The next move toward inner steadiness.",
          purpose: "This position suggests the kind of honesty, boundary, or reframing that could reduce the split.",
          promptLead: "What would resolution require from you, realistically?"
        }
      ]
    },
    {
      id: "relationship-pattern",
      name: "Relationship Pattern",
      shortLabel: "5 positions",
      compactHint: "Relational loop",
      pickerHint: "Trace what you show, want, fear, repeat, and need to change.",
      description: "A deeper spread for recurring patterns in closeness, projection, fear, repetition, and change.",
      layoutClass: "spread-layout-pattern",
      intro:
        "This spread reflects how your inner patterns move through closeness. It is meant to reveal repetition, not assign blame.",
      positions: [
        {
          id: "whatIShow",
          title: "What I Show",
          summary: "What others are most likely to meet first.",
          purpose: "This position shows the style, defense, or role you bring into relationship most visibly.",
          promptLead: "What do you habitually show first in closeness?"
        },
        {
          id: "whatIWant",
          title: "What I Want",
          summary: "What you are really seeking underneath the surface.",
          purpose: "This position points to the deeper need or longing underneath your relational behavior.",
          promptLead: "What are you truly asking for underneath your behavior?"
        },
        {
          id: "whatIFear",
          title: "What I Fear",
          summary: "What feels risky, exposing, or threatening.",
          purpose: "This position reveals what you most want to avoid feeling, seeing, or risking in relationship.",
          promptLead: "What fear is quietly organizing your reactions?"
        },
        {
          id: "whatIRepeat",
          title: "What I Repeat",
          summary: "The loop that tends to replay itself.",
          purpose: "This position names the pattern, defense, or expectation that keeps recreating similar outcomes.",
          promptLead: "What do you keep repeating even when you know it does not help?"
        },
        {
          id: "whatMustChange",
          title: "What Must Change",
          summary: "The shift that would alter the pattern.",
          purpose: "This position points toward the internal change most likely to interrupt the loop and create a healthier relationship dynamic.",
          promptLead: "What change would actually interrupt the pattern?"
        }
      ]
    }
  ];

  const archetypes = [
    {
      id: "shadow",
      name: "Shadow",
      shortDescription: "The hidden, denied, or disowned part of the psyche.",
      tone: "Confronting, honest, emotionally charged",
      coreMeaning: "Shadow points to traits, feelings, needs, or impulses you do not fully want to own.",
      gift: "More energy, more truth, and a stronger capacity for real self-knowledge.",
      risk: "Projection, shame, sabotage, and acting out what you refuse to admit.",
      reflectionPrompt: "What part of me do I judge, hide, or hand to other people?",
      rarityWeight: 1,
      accent: {
        ink: "#2f314d",
        accent: "#5c5b87",
        border: "#d8dbf1",
        paper: "#f5f6ff"
      },
      positionReadings: {
        outerMask: "Shadow in the outer mask suggests you may be presenting control while a more difficult truth keeps leaking around the edges.",
        hiddenForce: "Shadow as the hidden force points to a denied need, anger, envy, shame, or hurt that is steering more than you think.",
        integrationPath: "Here Shadow asks to be owned directly, so that what is raw or uncomfortable can become conscious instead of disruptive.",
        consciousSelf: "At the conscious level, Shadow suggests you already sense the tension, even if you do not fully name it.",
        unconsciousPressure: "Underneath, Shadow acts like stored pressure that keeps seeking expression through mood, reaction, or fixation.",
        conflict: "The conflict may come from fighting a part of yourself instead of understanding what it is trying to say.",
        resolution: "Resolution begins when shame is replaced with honest ownership and clearer responsibility.",
        whatIShow: "In relationship, Shadow here suggests you show the acceptable version of yourself while hiding the parts that feel less lovable.",
        whatIWant: "What you want may include permission to be more direct, messy, needy, or real than you usually allow.",
        whatIFear: "What you fear is being seen in the very traits you judge most harshly.",
        whatIRepeat: "The repeated pattern is projecting disowned feelings outward and then reacting to them in other people.",
        whatMustChange: "Change requires taking responsibility for what you keep locating outside yourself."
      }
    },
    {
      id: "anima-animus",
      name: "Anima / Animus",
      shortDescription: "The inner counterpart that shapes feeling, attraction, voice, and inner relationship.",
      tone: "Relational, symbolic, emotionally intelligent",
      coreMeaning: "Anima / Animus points to the inner opposite that mediates mood, intimacy, imagination, and the way you relate to depth.",
      gift: "Greater emotional range, inner dialogue, creativity, and a more balanced way of relating.",
      risk: "Projection, idealization, inner division, or expecting others to carry your missing qualities.",
      reflectionPrompt: "What quality am I seeking outside myself because it feels underdeveloped inside?",
      rarityWeight: 1,
      accent: {
        ink: "#374658",
        accent: "#6f88a5",
        border: "#d7e6f2",
        paper: "#f3f9fd"
      },
      positionReadings: {
        outerMask: "Anima / Animus in the outer mask suggests your visible style may be shaped by an inner longing for balance, softness, clarity, or strength.",
        hiddenForce: "As the hidden force, this archetype points to a neglected inner counterpart trying to influence your choices and reactions.",
        integrationPath: "Integration asks you to develop inwardly what you keep expecting to receive, chase, or resist outside yourself.",
        consciousSelf: "Consciously, this archetype suggests you already know you are relating through a split between outer role and inner need.",
        unconsciousPressure: "Below awareness, it can act through attraction, fantasy, overreaction, or a hunger for completion through another person.",
        conflict: "The conflict may come from expecting a partner, ideal, or image to carry what your psyche needs to cultivate directly.",
        resolution: "Resolution comes through building a more inward relationship with feeling, receptivity, strength, or voice.",
        whatIShow: "In relationship, you may show the part of yourself that seems safest while the deeper relational self stays indirect.",
        whatIWant: "What you want may be emotional recognition, resonance, steadiness, or a sense of psychic completion.",
        whatIFear: "What you fear is often the vulnerability that comes with revealing your deeper inner need.",
        whatIRepeat: "The repeated pattern may involve projecting your unlived qualities onto others and then depending on them to feel whole.",
        whatMustChange: "Change requires reclaiming inwardly the qualities you keep locating in the ideal other."
      }
    },
    {
      id: "wise-elder",
      name: "Wise Old Man / Wise Old Woman",
      shortDescription: "The inner guide associated with perspective, sobriety, and deeper counsel.",
      tone: "Calm, sober, reflective",
      coreMeaning: "The Wise Elder points to mature perspective, pattern recognition, guidance, and the capacity to see beyond immediate drama.",
      gift: "Discernment, steadiness, long-range understanding, and grounded inner authority.",
      risk: "Detachment, superiority, over-advising, or using wisdom to avoid vulnerability.",
      reflectionPrompt: "What would the most grounded part of me say if urgency stepped aside?",
      rarityWeight: 1,
      accent: {
        ink: "#4c4039",
        accent: "#9f7a63",
        border: "#ead9cf",
        paper: "#fdf7f3"
      },
      positionReadings: {
        outerMask: "The Wise Elder in the outer mask suggests others may experience you as composed, thoughtful, or measured.",
        hiddenForce: "As the hidden force, it points to an inner source of guidance you may not be trusting enough yet.",
        integrationPath: "Integration asks you to slow down, widen the frame, and let insight guide action instead of urgency.",
        consciousSelf: "Consciously, this archetype suggests a part of you already knows better than your current pace reflects.",
        unconsciousPressure: "Below awareness, the Wise Elder can appear as a persistent call toward perspective, restraint, and better judgment.",
        conflict: "The conflict may come from knowing the wiser answer but resisting the discipline it requires.",
        resolution: "Resolution begins when inner authority matters more than outer noise or short-term reassurance.",
        whatIShow: "In relationship, you may show maturity, patience, or competence even when you still need care yourself.",
        whatIWant: "What you want may be wise companionship, emotional steadiness, or guidance you can respect.",
        whatIFear: "What you fear may be losing perspective, making an immature choice, or appearing less composed than usual.",
        whatIRepeat: "The repeated pattern may involve becoming the calm one for everyone else while withholding your own need.",
        whatMustChange: "Change requires trusting wise restraint without turning it into emotional distance."
      }
    },
    {
      id: "trickster",
      name: "Trickster",
      shortDescription: "The disruptive archetype that exposes weak structures through mischief, reversal, and surprise.",
      tone: "Sharp, agile, destabilizing",
      coreMeaning: "Trickster points to irony, reversals, unsteady ground, and the part of the psyche that exposes false certainty.",
      gift: "Flexibility, humor, creative disruption, and freedom from rigid identity.",
      risk: "Avoidance, self-sabotage, manipulation, inconsistency, or turning everything into a game.",
      reflectionPrompt: "Where am I using cleverness to avoid sincerity, responsibility, or grief?",
      rarityWeight: 1,
      accent: {
        ink: "#473b2f",
        accent: "#b18452",
        border: "#eadcc9",
        paper: "#fff8f0"
      },
      positionReadings: {
        outerMask: "Trickster in the outer mask suggests quickness, charm, ambiguity, or a habit of staying hard to pin down.",
        hiddenForce: "As the hidden force, Trickster points to a destabilizing impulse that may be exposing weak assumptions or dodging directness.",
        integrationPath: "Integration asks you to keep the flexibility but lose the avoidance, using insight instead of deflection.",
        consciousSelf: "Consciously, this archetype suggests you already know part of you resists being pinned down or controlled.",
        unconsciousPressure: "Below awareness, Trickster can act through mixed signals, sudden reversals, humor, or contradiction.",
        conflict: "The conflict may come from treating a serious issue too playfully or changing position whenever discomfort rises.",
        resolution: "Resolution comes from becoming more direct without losing adaptability or wit.",
        whatIShow: "In relationship, you may show charm, independence, or unpredictability instead of straightforward need.",
        whatIWant: "What you want may be freedom, room to move, and closeness without feeling trapped.",
        whatIFear: "What you fear is losing control, becoming trapped in one role, or being fully known before you feel ready.",
        whatIRepeat: "The repeated pattern may involve creating confusion when vulnerability gets too near.",
        whatMustChange: "Change requires replacing deflection with cleaner honesty."
      }
    },
    {
      id: "hero",
      name: "Hero",
      shortDescription: "The striving archetype that seeks mastery, movement, and meaningful challenge.",
      tone: "Focused, driven, effortful",
      coreMeaning: "Hero points to will, effort, courage, endurance, and the part of you that wants to overcome, prove, or protect.",
      gift: "Strength, follow-through, initiative, resilience, and moral courage.",
      risk: "Over-identifying with struggle, rescuing, control, burnout, or turning life into a permanent test.",
      reflectionPrompt: "Where am I still acting as if worth must be earned through effort, proving, or rescue?",
      rarityWeight: 1,
      accent: {
        ink: "#3c425e",
        accent: "#6c7bb1",
        border: "#dde3f7",
        paper: "#f6f8ff"
      },
      positionReadings: {
        outerMask: "Hero in the outer mask suggests you appear capable, determined, and ready to carry responsibility.",
        hiddenForce: "As the hidden force, Hero points to a deep drive to prove, rescue, win, or rise above weakness.",
        integrationPath: "Integration asks you to keep your courage while loosening the belief that struggle is the only valid path.",
        consciousSelf: "Consciously, this archetype suggests you already identify strongly with effort, responsibility, or overcoming obstacles.",
        unconsciousPressure: "Below awareness, Hero can turn everything into a mission, making rest or receptivity feel unsafe.",
        conflict: "The conflict may come from battling when the deeper need is to soften, ask, or stop carrying so much.",
        resolution: "Resolution begins when courage includes limits, not only endurance.",
        whatIShow: "In relationship, you may show competence, protection, or usefulness before tenderness.",
        whatIWant: "What you want may be recognition, mutual strength, or permission to stop carrying everything alone.",
        whatIFear: "What you fear is failure, dependence, weakness, or being seen without your competence intact.",
        whatIRepeat: "The repeated pattern may involve over-functioning and then resenting the weight you keep taking on.",
        whatMustChange: "Change requires letting strength include rest, asking, and shared responsibility."
      }
    },
    {
      id: "persona",
      name: "Persona",
      shortDescription: "The adaptive social self that manages belonging, image, and role.",
      tone: "Composed, strategic, socially aware",
      coreMeaning: "Persona points to the face you show the world in order to belong, function, or remain accepted.",
      gift: "Adaptability, polish, social intelligence, role clarity, and the ability to navigate groups.",
      risk: "Performing too hard, losing touch with the deeper self, over-managing image, or confusing role with identity.",
      reflectionPrompt: "Where am I acting from role, image, or expectation instead of a more honest self?",
      rarityWeight: 1,
      accent: {
        ink: "#3d4c4b",
        accent: "#68908d",
        border: "#d7e8e6",
        paper: "#f4fbfa"
      },
      positionReadings: {
        outerMask: "Persona in the outer mask makes the surface issue very clear: role, image, and social presentation are central here.",
        hiddenForce: "As the hidden force, Persona suggests that belonging, approval, or image management may be quietly steering choices.",
        integrationPath: "Integration asks you to keep the useful role while loosening the need to live inside it constantly.",
        consciousSelf: "Consciously, Persona suggests you already know the role you are playing, even if you have not asked whether it still fits.",
        unconsciousPressure: "Below awareness, Persona can create pressure to stay acceptable even when your deeper self wants something else.",
        conflict: "The conflict may come from the gap between the role that works and the truth that wants more room.",
        resolution: "Resolution begins when image becomes a tool instead of a prison.",
        whatIShow: "In relationship, Persona here suggests you lead with the polished, acceptable, or highly functional self.",
        whatIWant: "What you want may be permission to be received without so much management or performance.",
        whatIFear: "What you fear is being less admired, less needed, or less acceptable once the role drops.",
        whatIRepeat: "The repeated pattern may involve presenting what works socially while withholding what feels less controlled.",
        whatMustChange: "Change requires letting the relationship meet more of your real interior life."
      }
    },
    {
      id: "self",
      name: "Self",
      shortDescription: "The organizing center of wholeness, integration, and deeper inner coherence.",
      tone: "Whole, quiet, integrating",
      coreMeaning: "The Self points to psychic integration, larger meaning, and the movement toward a life that feels more internally aligned.",
      gift: "Wholeness, coherence, meaning, inner steadiness, and the capacity to hold opposites together.",
      risk: "Inflation, perfection fantasies, bypassing difficulty, or mistaking one insight for full integration.",
      reflectionPrompt: "What would a more whole response look like here, not the most dramatic one?",
      rarityWeight: 0.45,
      accent: {
        ink: "#4c3d56",
        accent: "#8c6aa1",
        border: "#eadff1",
        paper: "#fcf7ff"
      },
      positionReadings: {
        outerMask: "Self in the outer mask suggests the surface of the situation is already calling for greater coherence and honesty.",
        hiddenForce: "As the hidden force, Self suggests a deeper organizing movement is already trying to bring the scattered parts together.",
        integrationPath: "This is one of the clearest placements for the Self: integration grows through holding more of your life together without splitting off the difficult parts.",
        consciousSelf: "Consciously, Self suggests part of you already knows the larger truth and wants to live from it more consistently.",
        unconsciousPressure: "Below awareness, Self can appear as a steady pull toward alignment, meaning, and a more complete way of living.",
        conflict: "The conflict may come from living below your own sense of inner truth and feeling divided as a result.",
        resolution: "Resolution comes through integration, not victory: the goal is greater wholeness, not a perfect image.",
        whatIShow: "In relationship, Self here suggests part of you wants a bond that can hold truth, complexity, and real mutuality.",
        whatIWant: "What you want may be a deeper experience of inner and relational wholeness.",
        whatIFear: "What you fear may be how much simplification, honesty, or reordering true wholeness would require.",
        whatIRepeat: "The repeated pattern may involve glimpsing integration and then dropping back into old splits when discomfort returns.",
        whatMustChange: "Change requires choosing coherence repeatedly, not only when it feels inspiring."
      }
    }
  ];

  window.ARCHETYPE_MIRROR = {
    spreads,
    archetypes
  };
})();
