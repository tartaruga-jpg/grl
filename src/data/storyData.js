// ============================================================
//  CENTRALIZED CONFIG — Edit everything about your app here
// ============================================================

export const config = {
  // --- PIN Gate ---
  secretPin: "120726",

  // --- Relationship date (shown as badge) ---
  startDate: "12 Juli 2026",

  // --- Spotify embed URL (replace with your playlist) ---
  spotifyEmbedUrl:
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX2apWzyECwyZ?utm_source=generator&theme=0",

  // --- Images (place files in /public/images/) ---
  images: [
    { src: "/images/6.jpeg", caption: "Love" },
    { src: "/images/2.jpeg", caption: "Love" },
    { src: "/images/3.jpeg", caption: "Love" },
    { src: "/images/4.jpeg", caption: "Love" },
    { src: "/images/5.jpeg", caption: "Love" },
    { src: "/images/1.jpeg", caption: "Love" },
  ],

  portraitImage: {
    src: "/images/6.jpeg",
    caption: "My favorite person <3",
  },

  // --- Hero section ---
  hero: {
    badge: "12 JULY 2026 • FOR YOU",
    headingLine1: "Thank You for Being Here,",
    headingLine2: "My Love",
    message:
      "Thank you for loving me, for being so patient with me, and for still choosing to stay by my side until today. In the middle of my messy and exhausting days, having you around is always the reason everything feels lighter and warmer.",
    signOff: "— Always yours",
    scrollCta: "SEE HOW WE STARTED ↓",
  },

  // --- Our Story timeline ---
  story: {
    eyebrow: "HOW IT STARTED",
    title: "Chapter: Our Story",
    subtitle:
      "Started from a random notification on my phone, and now you’re the first person I look for every single day.",
    steps: [
      {
        num: "01",
        platform: "TikTok",
        heading: "Met onTikTok",
        text: "Never saw this coming—it all started when I decided to DM you first on TikTok, honestly having no idea where it would go. Luckily, we clicked right away and got close way faster than I expected. One simple reply turned into endless chats because our humor and vibe just matched so effortlessly (even though I lowkey already liked you the second I saw you, ngl).",
        icon: "",
      },
      {
        num: "02",
        platform: "Discord",
        heading: "Moved to Discord",
        text: "Hopped over to Discord and started having endless talks, where we got even closer and truly began to know each other on a deeper level. So many moments happened there—from our happiest laughs and sharing sad days, to the times we even got mad at each other. Going through all those ups and downs together turned talking to you every single day into my favorite habit.",
        icon: "",
      },
      {
        num: "03",
        platform: "WhatsApp",
        heading: "Official on WA",
        text: "On July 12, 2026, we finally stopped being just 'close' and made it official on WhatsApp. Sure, we didn't get to say it face-to-face and it all happened through a screen, but there was nothing casual about how I felt. Every single word I typed that day came straight from the heart—my feelings for you have always been 100% genuine, serious, and real from day one.",
        icon: "",
      },
    ],
  },

  // --- Journey phases ---
  journey: {
    eyebrow: "EVERY SIDE OF US",
    title: "Our Journey",
    subtitle:
      "Because loving you means embracing every single season we go through together.",
    phases: [
      {
        num: "01",
        tab: "Happy Days",
        title: "OUR HAPPY DAYS",
        icon: "",
        glowColor: "rgba(228, 184, 112, 0.18)",
        text: "Those moments when we’re completely vibing over text or call, laughing at the silliest little things, and talking about everything and nothing until we totally lose track of bedtime. Even with the distance between us and just through a phone screen, simple everyday talks with you are always what I look forward to the most.",
      },
      {
        num: "02",
        tab: "Quiet Days",
        title: "OUR QUIET DAYS",
        icon: "",
        glowColor: "rgba(190, 18, 60, 0.15)",
        text: "There are days when our chats are a little quieter than usual—when we’re both drained from our own busy routines in different cities, or just don’t really know where to start talking. Still, behind the quiet notifications, we’re quietly thinking of each other, just waiting for a free moment to hop on a call again.",
      },
      {
        num: "03",
        tab: "Rough Days",
        title: "OUR STORMY DAYS",
        icon: "",
        glowColor: "rgba(190, 18, 60, 0.22)",
        text: "Those moments when both of our egos are running high, when texting easily leads to misunderstandings, and frustration builds up because we can’t just meet up and talk things out face-to-face. Sometimes words slip out faster than we can think, leaving a heavy ache in our chests even though neither of us ever meant to hurt the other. Yet even in the middle of all that silence and tension, one thing stays clear—deep down, neither of us ever actually wants to walk away.",
      },
      {
        num: "04",
        tab: "Making Up",
        title: "HEALING & FORGIVING",
        icon: "",
        glowColor: "rgba(244, 114, 182, 0.18)",
        text: "The most comforting part after a fight: putting our pride aside, hearing each other’s voice again without pointing fingers, and realizing that what we have matters way more than winning an argument. All the exhaustion fades away the second we both choose to make up and hold onto each other, even from miles apart—reminding us that at the end of the day, we’re on the same team, and we always find our way back to normal.",
      },
    ],
  },

  // --- Favorite person spotlight ---
  spotlight: {
    eyebrow: "ALL ABOUT YOU",
    title: "My Favorite Person",
    headline: "Every single version of you always has a place in my heart..",
    description:
      "Whether you’re rambling on about random stories, going quiet when you’re sulking, or genuinely happy—smiling bright and laughing freely over the tiniest things—every side of you makes me miss you even more. Honestly, seeing you happy with that smile on your face is easily my favorite sight. You never have to pretend to be anyone else; who you are right now is already more than enough for me.",
    traits: [
      { emoji: "", label: "Your fiery side" },
      { emoji: "", label: "Your silly side" },
      { emoji: "", label: "When you pout" },
      { emoji: "", label: "Your bright smile" },
    ],
  },

  // --- Promise / Note reveal ---
  promise: {
    eyebrow: "OUR PROMISE & HOPE",
    buttonLabel: "Open This, Love ",
    cardTitle: "FOR MY GIRL — My Love & Our Hopes ",
    messages: [
      "Thank you for sticking with me this far since July 12, 2026, even though we still don’t get to see each other every day. My wish is simple: I hope we keep taking care of each other in our own cities, never give up easily when things get exhausting, and keep walking side by side until the day we can finally see each other whenever we want without having to wait so long.",
      "I hope we keep growing together, learning to understand each other better, having each other's backs, and choosing each other every day. Even when life gets busy or feels a little heavy with the distance between us, I want us to keep figuring things out side by side and always making time for what we have, no matter what comes our way.",
      "No matter how heavy the disagreements or misunderstandings we might go through over text, I hope we always choose to make up instead of walking away. I love you so much—and I want us to keep choosing each other even on the ordinary, everyday days, not just when things are fun and easy.",
    ],
  },

  // --- Footer ---
  footer: {
    text: "Made with love ♡ Zaki",
  },
};
