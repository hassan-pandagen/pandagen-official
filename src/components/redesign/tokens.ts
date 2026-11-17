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

// OKLCH equivalents preserve the existing brand colours and measured contrast.
export const T = {
  paper: "oklch(93.417956% 0.00703338 88.644499)",
  paperHi: "oklch(96.680924% 0.00541245 95.099788)",
  ink: "oklch(21.611540% 0.00612556 56.043375)",
  body: "oklch(33.845837% 0.00806004 75.291384)",
  quiet: "oklch(47.205286% 0.01023010 84.590799)",
  rule: "rgba(28,25,23,0.16)",
  accent: "oklch(51.320925% 0.15609200 39.727996)",
  accentText: "oklch(40.605571% 0.11418315 40.571567)",
  dark: "oklch(21.611540% 0.00612556 56.043375)",
  onDark: "oklch(93.417956% 0.00703338 88.644499)",
  onDarkQuiet: "oklch(71.970175% 0.01229639 84.586261)",
  onDarkAccent: "oklch(68.753219% 0.15887907 45.986982)",
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
