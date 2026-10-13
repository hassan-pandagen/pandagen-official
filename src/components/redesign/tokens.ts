// ─────────────────────────────────────────────────────────────────────────────
// Redesign palette. One place, so every section of the new homepage agrees.
// ─────────────────────────────────────────────────────────────────────────────
// Chosen 24 Sep 2026: grey paper and near-black ink, after the owner reviewed
// grigoletti.ch, with the studio's own charcoal and cognac kept for identity.
// Every pair below was measured (WCAG relative luminance) the same day:
//
//   ink on paper            14.41   charcoal is the ink
//   body on paper            ~11
//   quiet on paper            5.58   and 4.99 on the shader's darkest (#E0DDD6)
//   accentText on paper       7.78   links; cognac itself fell to 4.19 on shadow
//   white on accent           6.09   cognac is fine as a fill
//   onDark on dark           14.41
//   onDarkQuiet on dark       7.04
//   onDarkAccent on dark      5.90
//
// Not used: grigoletti's #FF4C24. It measured 2.74 as text on this paper and
// 3.33 behind white text, and it is his colour, not ours.
// ─────────────────────────────────────────────────────────────────────────────

export const T = {
  paper: "#EBE9E4",
  paperHi: "#F5F4F0",
  ink: "#1C1917",
  body: "#3A3733",
  quiet: "#5E5B55",
  rule: "rgba(28,25,23,0.16)",
  accent: "#AD3D0B",
  accentText: "#7A2E0E",
  dark: "#1C1917",
  onDark: "#EBE9E4",
  onDarkQuiet: "#A8A49C",
  onDarkAccent: "#E8763A",
  onDarkRule: "rgba(235,233,228,0.16)",
} as const;

// Headline emphasis: one meaningful phrase per major heading. Use accent on
// light paper, onDarkAccent on charcoal, and accentText for smaller linked text.
// Project names, testimonials and factual claims keep their normal text colour.

// Resolves to Zodiak unless a wrapper sets --display (the preview compares Anton).
export const DISPLAY = "var(--display, Zodiak), Georgia, serif";
// Display text under ~28px (review quotes, FAQ questions, card titles). Zodiak
// by default; in condensed mode it becomes the body sans, because Anton is only
// legible large. grigoletti.ch does the same with its own condensed face.
export const DISPLAY_SM = "var(--display-sm, Zodiak), Georgia, serif";
export const BODY = 'var(--font-body, "PT Serif"), Georgia, serif';
export const UI = "var(--font-sans), Arial, sans-serif";
// Historical export name used by compact labels; code blocks keep font-mono.
export const MONO = UI;
