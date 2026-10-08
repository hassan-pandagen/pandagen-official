import type { ReactNode } from "react";

import SiteNav from "@/components/layout/SiteNav";
import SiteFooter from "@/components/redesign/SiteFooter";
import { T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Shared shell for every /preview/* route. Extracted 27 Sep 2026 from
// hero/page.tsx when a second preview page (work index) needed the same
// font/nav/footer setup -- duplicating it a second time was the signal to
// share it, not before.
// ─────────────────────────────────────────────────────────────────────────────
// Zodiak, Indian Type Foundry, ITF Free Font License v2.0. Until 4 Oct 2026 it
// loaded live from Fontshare's CDN, which sent every visitor's IP address to
// Fontshare before any cookie choice, and no policy named Fontshare. It is now
// served from our own domain: scripts/fetch-zodiak.mjs downloads the unmodified
// woff2 at build time into public/fonts/zodiak/, which is gitignored. The file
// is never committed because this repo is public and the licence forbids making
// the font files available through a repository.
const ZODIAK_WOFF2 = "/fonts/zodiak/zodiak-700.woff2";
const ZODIAK_FACE = `@font-face{font-family:'Zodiak';src:url('${ZODIAK_WOFF2}') format('woff2');font-weight:700;font-style:normal;font-display:swap;}`;

// Anton is OFL and bundled in public/fonts/site. One weight;
// font-synthesis:none stops the browser faking a bold.
const anton = { variable: "font-anton" };

export default function PreviewShell({ condensed, children, contentTag = "main", showChrome = true, compactFooter = false, footerLinksOnly = false }: { condensed: boolean; children: ReactNode; contentTag?: "main" | "div"; showChrome?: boolean; compactFooter?: boolean; footerLinksOnly?: boolean }) {
  const fontVars = condensed
    ? { "--display": "var(--font-anton)", "--display-sm": "var(--font-sans)" }
    : { "--display": "Zodiak" };
  const Content = contentTag;
  return (
    <div className={anton.variable} data-font={condensed ? "anton" : "zodiak"} style={{ ...fontVars, fontSynthesis: "none" } as React.CSSProperties}>
      <link rel="preload" href="/fonts/site/anton-9e9f04e3c37952ab-s.woff2" as="font" type="font/woff2" crossOrigin="" />
      <link rel="preload" href={ZODIAK_WOFF2} as="font" type="font/woff2" crossOrigin="" />
      <style>{ZODIAK_FACE}</style>
      {showChrome && <SiteNav />}
      <Content style={{ backgroundColor: T.paper }}>{children}</Content>
      {showChrome && <SiteFooter compactTop={compactFooter} linksOnly={footerLinksOnly} />}
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
