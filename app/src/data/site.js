// ─────────────────────────────────────────────────────────────
// EDIT ME — top-level content config for the site.
// Section bodies (About/Resume/Portfolio/Blog/Contact) live as
// editable HTML in src/sections/*.html.
// ─────────────────────────────────────────────────────────────

export const site = {
  brand: "D",
  name: { first: "Dangal", last: "Macatangay" },

  // Words cycled by the typing effect in the hero.
  roles: [
    "full-stack developer.",
    "smart contract engineer.",
    "Web3 builder.",
    "solo operator.",
  ],

  // Left sidebar navigation (tab id must match a section key below).
  nav: [
    { id: "home", label: "Home", icon: "la la-home" },
    { id: "about", label: "about", icon: "la la-user" },
    { id: "resume", label: "resume", icon: "la la-gear" },
    { id: "portfolio", label: "portfolio", icon: "la la-eye" },
    { id: "blog", label: "blog", icon: "la la-newspaper-o" },
    { id: "contact", label: "contact", icon: "la la-envelope" },
  ],

  // Only verified profiles are listed. Add LinkedIn / X / Telegram here
  // once the handles are confirmed — e.g.
  //   { icon: "la la-linkedin", href: "https://linkedin.com/in/<handle>" },
  social: [
    { icon: "la la-github", href: "https://github.com/dlysen" },
    { icon: "la la-envelope", href: "mailto:dlysen@yahoo.com" },
  ],

  heroBg: "/static/media/bg.3caafa4fb88fc8aa6fc5.jpg",
  heroVideo: "/static/media/intro_1.f80b512b05c37300cbfa.mp4",
};

// Accent colors used by the settings panel (file → /css/theme-colors/<id>.css).
export const themeColors = [
  { id: "green", hex: "#5ac24e" },
  { id: "blue", hex: "#65b4f3" },
  { id: "orange", hex: "#f5a640" },
  { id: "pink", hex: "#ee6192" },
  { id: "purple", hex: "#bb68c8" },
  { id: "red", hex: "#ee534f" },
];

export const DEFAULT_COLOR = "green";
