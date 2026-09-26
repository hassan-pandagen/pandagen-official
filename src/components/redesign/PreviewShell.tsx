import type { ReactNode } from "react";
import { Anton } from "next/font/google";
import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/redesign/SiteFooter";
import { T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Shared shell for every /preview/* route. Extracted 27 Sep 2026 from
// hero/page.tsx when a second preview page (work index) needed the same
// font/nav/footer setup -- duplicating it a second time was the signal to
// share it, not before.
// ─────────────────────────────────────────────────────────────────────────────
// Zodiak, Indian Type Foundry, ITF Free Font License v2.0: loaded live from
// Fontshare's CDN, NOT self-hosted, because this repo is public on GitHub and
// the licence forbids serving the font files from a public repository. See
// hero/page.tsx's original note (24 Sep) for the full licence reasoning.
const ZODIAK_CSS = "https://api.fontshare.com/v2/css?f[]=zodiak@700&display=swap";

// Anton is OFL, so next/font self-hosts it with no licence issue. One weight;
// font-synthesis:none stops the browser faking a bold.
const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-anton" });

export default function PreviewShell({ condensed, children }: { condensed: boolean; children: ReactNode }) {
  const fontVars = condensed
    ? { "--display": "var(--font-anton)", "--display-sm": "var(--font-sans)" }
    : { "--display": "Zodiak" };
  return (
    <div className={anton.variable} data-font={condensed ? "anton" : "zodiak"} style={{ ...fontVars, fontSynthesis: "none" } as React.CSSProperties}>
      <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
      <link rel="stylesheet" href={ZODIAK_CSS} precedence="default" />
      <SiteNav />
      <main style={{ backgroundColor: T.paper }}>{children}</main>
      <SiteFooter />
      {/* Condensed mode sets section and row headings in capitals, as grigoletti.ch does. */}
      <style>{`
        [data-font=anton] h1, [data-font=anton] h2, [data-font=anton] .work-name { text-transform: uppercase; }
        .cta-solid { transition: background-color .3s ease, color .3s ease; }
        .cta-solid:hover, .cta-solid:focus-visible { background-color: ${T.accent} !important; color: #FFFFFF !important; }
        @media (prefers-reduced-motion: reduce) { .cta-solid { transition: none; } }
      `}</style>
    </div>
  );
}
