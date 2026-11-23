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
    { src: "/images/6.jpeg", caption: "Momen pertama yang tak terlupakan 🤍" },
    { src: "/images/2.jpeg", caption: "Senyum yang selalu bikin hati hangat" },
    { src: "/images/3.jpeg", caption: "Bersama terasa sempurna" },
    { src: "/images/4.jpeg", caption: "Favorit sepanjang masa ✨" },
    { src: "/images/5.jpeg", caption: "Cerita indah yang terus berlanjut" },
    { src: "/images/1.jpeg", caption: "Setiap detik bersamamu berharga" },
  ],

  portraitImage: {
    src: "/images/6.jpeg",
    caption: "My favorite person 🤍",
  },

  // --- Hero section ---
  hero: {
    badge: "✦ 12 Juli 2026 • For You ✦",
    headingLine1: "Terima Kasih Sudah Hadir,",
    headingLine2: "Sayangku 🤍",
    message:
      "Terima kasih sudah menjadi orang yang paling kusayang, yang selalu sabar menemani hari-hariku, dan jadi alasan kenapa setiap detik terasa lebih berarti. Bersamamu selalu terasa seperti pulang ke tempat paling hangat.",
    signOff: "— Selalu untukmu",
    scrollCta: "LIHAT AWAL CERITA KITA ↓",
  },

  // --- Our Story timeline ---
  story: {
    eyebrow: "HOW IT STARTED",
    title: "Chapter: Our Story",
    subtitle:
      "Berawal dari notifikasi random di HP, sampai akhirnya jadi orang yang paling dicari tiap hari.",
    steps: [
      {
        num: "01",
        platform: "TikTok",
        heading: "Ketemu di TikTok",
        text: "Berawal dari pertemuan sederhana di TikTok yang nggak pernah kusangka bakal jadi awal dari cerita seindah ini.",
        icon: "🎵",
      },
      {
        num: "02",
        platform: "Discord",
        heading: "Lanjut di Discord",
        text: "Dari obrolan singkat, lanjut pindah ke Discord—ngobrol panjang, nemenin satu sama lain, dan makin dekat setiap harinya.",
        icon: "💬",
      },
      {
        num: "03",
        platform: "WhatsApp",
        heading: "Jadian di WA (12.07.26)",
        text: "Sampai akhirnya di WhatsApp pada 12 Juli 2026, kita resmi memulai perjalanan ini sebagai 'kita'.",
        icon: "💚",
      },
    ],
  },

  // --- Journey phases ---
  journey: {
    eyebrow: "EVERY SIDE OF US",
    title: "Our Journey",
    subtitle:
      "Karena mencintaimu berarti menerima setiap musim yang kita lewati bersama.",
    phases: [
      {
        num: "01",
        tab: "Hari Menyenangkan",
        title: "OUR HAPPY DAYS",
        icon: "☀️",
        glowColor: "rgba(228, 184, 112, 0.18)",
        text: "Hari-hari penuh tawa dan cerita random bareng kamu. Momen di mana hal sesederhana apa pun terasa luar biasa karena dijalani sama kamu.",
      },
      {
        num: "02",
        tab: "Hari Diam",
        title: "OUR QUIET DAYS",
        icon: "🌙",
        glowColor: "rgba(190, 18, 60, 0.15)",
        text: "Ada hari-hari ketika kita sama-sama hening, capek, atau bingung mau mulai cerita dari mana. Tapi di balik diam itu, rasa sayangku tetap ada.",
      },
      {
        num: "03",
        tab: "Hari Bertengkar",
        title: "OUR STORMY DAYS",
        icon: "⛈️",
        glowColor: "rgba(190, 18, 60, 0.22)",
        text: "Saat ego dan salah paham sempat menguji kita. Hari yang berat, tapi justru bikin aku sadar betapa aku nggak mau kehilangan kamu.",
      },
      {
        num: "04",
        tab: "Saling Minta Maaf",
        title: "HEALING & FORGIVING",
        icon: "🌸",
        glowColor: "rgba(244, 114, 182, 0.18)",
        text: "Momen paling berharga: saat kita menurunkan ego, saling meminta maaf, dan memilih untuk memperbaiki semuanya daripada menyerah.",
      },
    ],
  },

  // --- Favorite person spotlight ---
  spotlight: {
    eyebrow: "ALL ABOUT YOU",
    title: "My Favorite Person",
    headline: "Aku suka semua versi diri kamu, tanpa terkecuali.",
    description:
      "Dari cara kamu marah waktu lagi kesel, tingkah lucu kamu yang selalu bikin gemas, manjanya kamu pas lagi ngambek, sampai senyum kamu yang selalu berhasil bikin hariku membaik seketika.",
    traits: [
      { emoji: "😤", label: "Suka marah kamu" },
      { emoji: "🧸", label: "Suka lucu kamu" },
      { emoji: "🥺", label: "Suka ngambek kamu" },
      { emoji: "😊", label: "Suka senyum kamu" },
    ],
  },

  // --- Promise / Note reveal ---
  promise: {
    eyebrow: "OUR PROMISE & HOPE",
    buttonLabel: "Klik Aku Dong, Sayang 💌",
    cardTitle: "Untuk Pacarku Sayang — Sayangku & Harapan Kita 🤍",
    messages: [
      "Kamu adalah alasan kenapa aku percaya bahwa hal-hal indah itu nyata. Dan aku berjanji, sejauh apapun jalan yang harus kita tempuh, aku tidak ingin menempuhnya tanpa kamu di sisi ku.",
      "Semoga kita terus bertumbuh bersama — bukan hanya dalam rasa sayang, tapi juga dalam saling mengerti, saling mendukung, dan saling memilih setiap harinya.",
      "Harapanku sederhana: aku ingin menghabiskan banyak momen kecil bersamamu, sampai momen kecil itu menjadi kenangan besar yang kita ceritakan nanti.",
    ],
  },

  // --- Footer ---
  footer: {
    text: "Made with love ♡ Zaki",
  },
};
