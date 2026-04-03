(function buildOraclePhraseLibrary() {
  const themes = [
    {
      key: "timing",
      label: "Timing",
      titles: [
        "Not Yet",
        "Wait Longer",
        "Slow Down",
        "Check Timing",
        "Give It Time",
        "Come Back Later",
        "Do Not Force It",
        "Let It Settle",
        "Try Again Soon",
        "Pause First"
      ],
      leads: [
        "This is probably too early",
        "The timing is still off",
        "You do not need to rush this",
        "More will become clear if you wait",
        "A delay here is helping you",
        "You are being asked to move more slowly",
        "The right moment has not arrived yet",
        "Pushing now will make the answer worse",
        "Your next step will work better later",
        "Time is part of the answer"
      ],
      closes: [
        "wait before you decide",
        "give this a little more room",
        "let the pressure drop first",
        "come back when your mind is calmer",
        "do not answer on the first impulse",
        "allow the situation to develop",
        "choose patience over speed",
        "hold your position for now",
        "watch what changes after a short pause",
        "treat waiting as useful, not passive"
      ]
    },
    {
      key: "starting",
      label: "Starting",
      titles: [
        "Begin Simply",
        "Take One Step",
        "Start Small",
        "Open The Door",
        "First Move",
        "Just Begin",
        "Keep It Simple",
        "Make It Real",
        "Step Forward",
        "Begin Here"
      ],
      leads: [
        "You are ready to begin",
        "The next step does not need to be dramatic",
        "You already have enough to start",
        "Action will help more than more thinking",
        "Starting matters more than perfect planning",
        "A small move will create momentum",
        "You do not need the whole map yet",
        "Progress begins with one clear action",
        "The door opens after movement",
        "It is time to stop waiting for perfect certainty"
      ],
      closes: [
        "do the first clear thing",
        "start with what is already in front of you",
        "make one real move today",
        "keep the first step manageable",
        "stop adding extra conditions",
        "let action replace overthinking",
        "begin before you feel fully ready",
        "use what you already have",
        "trust a simple start",
        "do less planning and more doing"
      ]
    },
    {
      key: "truth",
      label: "Truth",
      titles: [
        "Be Honest",
        "Name It Clearly",
        "Say The Truth",
        "Look Again",
        "What You Know",
        "No More Spin",
        "Call It What It Is",
        "Face The Fact",
        "Keep It Real",
        "See It Clearly"
      ],
      leads: [
        "You already know the main truth here",
        "Part of the confusion comes from avoiding the obvious",
        "This situation needs a more honest reading",
        "The truth is simpler than the story around it",
        "You may be making this harder than it is",
        "One important fact is being ignored",
        "A clear answer is available if you stop softening it",
        "You need to admit what is actually happening",
        "The honest version will help more than the comfortable version",
        "This will improve once the truth is named"
      ],
      closes: [
        "say it plainly to yourself first",
        "stop editing the truth to make it easier",
        "pay attention to the part you keep avoiding",
        "trust the clearer explanation",
        "name the problem directly",
        "let facts matter more than mood",
        "drop the version that protects your ego",
        "be accurate before you try to be kind",
        "look at what keeps repeating",
        "choose clarity over comfort"
      ]
    },
    {
      key: "protection",
      label: "Protection",
      titles: [
        "Protect It",
        "Keep This Private",
        "Hold Your Boundary",
        "Do Less Sharing",
        "Guard What Matters",
        "Not For Everyone",
        "Choose Carefully",
        "Keep It Safe",
        "Protect Your Energy",
        "Hold The Line"
      ],
      leads: [
        "Something important needs protection right now",
        "You may be sharing this too early",
        "Not everyone needs access to this",
        "A boundary would help here",
        "What feels like a block may actually be protection",
        "This needs more care and less exposure",
        "You do not have to explain everything",
        "Privacy will help this grow",
        "Less access would make this healthier",
        "Safety matters more than pleasing everyone"
      ],
      closes: [
        "keep it private for a little longer",
        "be more selective about who gets access",
        "hold your boundary without overexplaining",
        "protect what is still taking shape",
        "share less until this feels stronger",
        "say no sooner",
        "stop giving everyone a front-row seat",
        "let caution be useful here",
        "keep one part of this just for you",
        "value protection over approval"
      ]
    },
    {
      key: "release",
      label: "Release",
      titles: [
        "Let It Go",
        "This Is Over",
        "Release The Weight",
        "Stop Carrying It",
        "Enough Now",
        "Close The Loop",
        "Put It Down",
        "Leave It Behind",
        "That Part Is Done",
        "Make Room"
      ],
      leads: [
        "You are carrying something you no longer need",
        "This may be finished even if you dislike the ending",
        "The past is taking up too much room",
        "Holding on is costing more than letting go",
        "Some of your tiredness comes from not releasing this",
        "You do not need to keep reopening it",
        "This has taught what it needed to teach",
        "Letting go would create useful space",
        "The burden is heavier because you keep naming it necessary",
        "Release would help more than one more attempt"
      ],
      closes: [
        "stop carrying it forward",
        "close this chapter on purpose",
        "let the ending be real",
        "put down what is no longer helping",
        "stop revisiting the same loop",
        "leave room for something new",
        "release the role you outgrew",
        "choose closure over repetition",
        "do not turn old pain into a job",
        "make space by letting this go"
      ]
    },
    {
      key: "return",
      label: "Return",
      titles: [
        "It May Return",
        "Second Chance",
        "Coming Back",
        "A New Return",
        "Back Around",
        "Try Again Differently",
        "The Return Is Changed",
        "Another Chance",
        "Back, But Different",
        "Not The Same As Before"
      ],
      leads: [
        "Something may come back around",
        "A second chance is possible",
        "This is not gone forever",
        "A return is possible, but it will be different",
        "You may get another opportunity here",
        "What is coming back will not look the same",
        "A return would work better with new rules",
        "There is still movement left in this story",
        "You may see this again after some distance",
        "A second beginning is more likely than a full rewind"
      ],
      closes: [
        "be open, but do not go backward",
        "welcome it differently this time",
        "use what you learned before it returns",
        "do not expect the old version back",
        "make room for change, not repetition",
        "keep your standards when it comes around again",
        "let the second chance be cleaner than the first",
        "notice what has matured in the distance",
        "stay open without becoming naive",
        "allow a return without erasing the past"
      ]
    },
    {
      key: "direction",
      label: "Direction",
      titles: [
        "Choose A Direction",
        "This Way",
        "Pick One Path",
        "Follow What Is Clear",
        "Move Toward It",
        "Keep Going",
        "The Better Route",
        "Take The Simpler Path",
        "Use Your Judgment",
        "Go Where It Works"
      ],
      leads: [
        "You need a clearer direction",
        "One path is better than the others",
        "You are not as lost as you feel",
        "A simpler option may be the right one",
        "The next step matters more than the full plan",
        "Direction will come from movement",
        "There is a route here that makes more sense",
        "The better path is the one that causes less inner conflict",
        "You already know which option feels steadier",
        "You need to stop circling and pick a way forward"
      ],
      closes: [
        "follow what feels clearer, not louder",
        "choose one path and commit for now",
        "go where your energy stops fighting you",
        "pick the option that is simpler to live with",
        "trust the steadier route",
        "move toward what stays clear after rest",
        "stop trying to keep every option open",
        "let one decision reduce the noise",
        "take the path that asks for less self-betrayal",
        "use clarity, not fantasy, as your guide"
      ]
    },
    {
      key: "repair",
      label: "Repair",
      titles: [
        "Repair It Honestly",
        "Fix The Real Problem",
        "Start With The Damage",
        "Careful Repair",
        "Mend It Properly",
        "Try A Better Fix",
        "Clean Up The Break",
        "Repair Before Restart",
        "Do The Work",
        "Fix It Slowly"
      ],
      leads: [
        "This can be repaired",
        "The situation is not beyond help",
        "A better outcome is still possible",
        "Repair will take honesty, not just good intentions",
        "The problem is fixable if you deal with the real issue",
        "This needs steady repair, not a quick cover-up",
        "Healing is possible here",
        "There is still something worth saving",
        "The damage gets smaller when it is addressed directly",
        "A careful repair would change this situation"
      ],
      closes: [
        "fix the cause, not only the surface",
        "start with the part that actually broke",
        "be consistent, not just apologetic",
        "repair slowly and clearly",
        "do the honest work first",
        "stop trying to skip the uncomfortable part",
        "rebuild with better structure this time",
        "show change through action",
        "make the repair real, not symbolic",
        "take responsibility before asking for closeness"
      ]
    },
    {
      key: "choice",
      label: "Choice",
      titles: [
        "Make The Choice",
        "Pick What Matters",
        "Stop Wavering",
        "Choose Clearly",
        "Decide On Purpose",
        "This Or That",
        "Choose Better",
        "Not Both",
        "Make The Call",
        "Decide Now"
      ],
      leads: [
        "A real decision is in front of you",
        "You are delaying a choice that matters",
        "The stress may come from staying undecided",
        "One option fits better than the other",
        "This needs a decision, not another loop",
        "You may already know what you want",
        "Trying to keep everything open is creating the problem",
        "A decision would bring relief",
        "The choice becomes clearer when you think long-term",
        "You need to choose based on values, not only comfort"
      ],
      closes: [
        "make the decision you can respect later",
        "stop trying to keep both outcomes alive",
        "choose what is healthier, not just easier",
        "pick the option you can live with in daylight",
        "let long-term truth matter more than short-term comfort",
        "decide with your values in view",
        "choose the cleaner cost",
        "stop postponing what you already understand",
        "make the call with less drama and more honesty",
        "pick the path that leaves less regret"
      ]
    },
    {
      key: "courage",
      label: "Courage",
      titles: [
        "Be Brave About It",
        "Say The Hard Thing",
        "Stand Up Straight",
        "Do The Brave Thing",
        "Act With Nerve",
        "Hold Your Ground",
        "Use Your Voice",
        "Stay With It",
        "Courage First",
        "Do It Clearly"
      ],
      leads: [
        "This needs courage",
        "You may be avoiding the brave option",
        "A hard but honest move would help here",
        "You are stronger than this moment makes you feel",
        "The right step may also be the uncomfortable one",
        "Fear is taking up too much space in this decision",
        "Bravery here looks simple and direct",
        "You do not need perfect confidence to act well",
        "A clearer voice would change this situation",
        "Courage would improve the outcome"
      ],
      closes: [
        "say what needs to be said",
        "take the smaller brave step today",
        "act before fear writes the whole plan",
        "stand where your truth can hold",
        "use your voice without overexplaining",
        "let honesty be stronger than anxiety",
        "do the clear thing even if it feels exposed",
        "move with steadiness instead of panic",
        "stop waiting to feel fearless",
        "choose the action your future self would respect"
      ]
    }
  ];

  const pages = [];

  themes.forEach((theme) => {
    theme.titles.forEach((title, titleIndex) => {
      theme.closes.forEach((close, closeIndex) => {
        pages.push({
          id: `${theme.key}-${titleIndex + 1}-${closeIndex + 1}`,
          theme: theme.label,
          title,
          phrase: `${theme.leads[titleIndex]}. ${capitalize(close)}.`
        });
      });
    });
  });

  const uniquePhrases = new Set(pages.map((page) => page.phrase));

  if (pages.length !== 1000) {
    throw new Error(`Expected 1000 oracle pages, received ${pages.length}.`);
  }

  if (uniquePhrases.size !== 1000) {
    throw new Error(`Expected 1000 unique oracle phrases, received ${uniquePhrases.size}.`);
  }

  window.ORACLE_PHRASES = pages;

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
})();
