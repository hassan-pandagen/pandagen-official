import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteNav from "@/components/layout/SiteNav";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import AskAssistant from "@/components/assistant/AskAssistant";
import PaperShader from "@/components/visual/PaperShader";
import WorkIndex from "@/components/redesign/WorkIndex";
import ServicesStack from "@/components/redesign/ServicesStack";
import { T } from "@/components/redesign/tokens";

// PREVIEW ONLY, 23 Sep 2026. A redesign candidate for the homepage hero, built
// beside the live one so the two can be compared before anything replaces it.
// Not linked from anywhere, not in the sitemap, and noindex below. Delete this
// route once a decision is made.
//
// Kept from the live hero on purpose: the H1 words, the subhead and the price
// line are positioning decisions dated 9-15 Sep (see Hero.tsx). Only the
// presentation changes: one editorial serif at display size instead of Inter
// with an italic accent word, no pill label, no grid texture, no hero form.
// The form's removal is the open question for the owner, not a settled change.

// Zodiak, Indian Type Foundry, ITF Free Font License v2.0 (17 Aug 2026):
// free for commercial use on our own site. Loaded from Fontshare's CDN on
// purpose, NOT self-hosted: this repo is public on GitHub, and the licence
// forbids making the font files available through "a repository" or any
// "publicly accessible servers" beyond our own site's use. If the repo goes
// private, self-hosting the shipped woff2 unmodified is allowed and faster.
// The licence also forbids subsetting or converting the files, so do not run
// them through a font tool if they are ever self-hosted.
const ZODIAK_CSS = "https://api.fontshare.com/v2/css?f[]=zodiak@700&display=swap";

export const metadata: Metadata = {
  title: "Hero preview",
  robots: { index: false, follow: false },
};

const INK = T.ink;
const BODY = T.body;
const QUIET = T.quiet; // 4.99:1 on #E0DDD6, the shader's darkest tone under text
const ACCENT = T.accentText; // text links: 7.78:1 on paper

const principles = [
  "Founder-built",
  "Fixed scope",
  "Code you own",
  "Content editor",
  "Measured at handover",
];

const work = [
  { name: "NorthDeck Group", href: "/work" },
  { name: "Emblematic Studio", href: "/work/emblematic-studio" },
  { name: "MyCustomPatches", href: "/work/mycustompatches" },
];

// Fine grain, drawn once as an SVG and tiled. Cheaper than a noise PNG and
// sharp at any pixel density.
const grain =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

export default function HeroPreview() {
  return (
    <main style={{ backgroundColor: T.paper }}>
      <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
      <link rel="stylesheet" href={ZODIAK_CSS} precedence="default" />
      <SiteNav />

      <div className="relative overflow-hidden">
        {/* Paper and light: a warm wash from the top left, a soft fold of shadow
            across the right, and grain over both. No image request. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: [
              "radial-gradient(120% 90% at 8% 0%, rgba(250,249,246,0.9) 0%, rgba(250,249,246,0) 55%)",
              "radial-gradient(70% 60% at 92% 40%, rgba(120,114,104,0.12) 0%, rgba(120,114,104,0) 70%)",
              "linear-gradient(115deg, rgba(0,0,0,0) 48%, rgba(90,85,78,0.06) 62%, rgba(0,0,0,0) 76%)",
            ].join(","),
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-multiply"
          style={{ backgroundImage: grain }}
        />
        {/* The shader is opaque and draws its own grain, so it covers the
            gradient and the SVG grain above once WebGL is ready. Those two are
            what shows before the first frame and if WebGL is unavailable. The
            SVG grain must stay UNDER the canvas: on top it darkened the shader's
            tones by a few percent and pushed the rail's grey text to 4.53:1. */}
        <PaperShader className="pointer-events-none absolute inset-0 h-full w-full" />
        {/* Fade the moving background into flat paper so the next section starts
            without a seam. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
          style={{ background: `linear-gradient(to bottom, rgba(235,233,228,0), ${T.paper})` }}
        />

      <section className="relative">
        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-6 pb-20 pt-32 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-44">
          {/* Left rail: how we work, and the work itself. */}
          <div className="order-2 grid grid-cols-2 gap-x-10 gap-y-8 whitespace-nowrap text-[16px] leading-[1.95] sm:grid-cols-[auto_auto] sm:justify-start lg:order-1 lg:grid-cols-1 lg:content-start lg:gap-y-7 lg:col-span-4 lg:pt-5 xl:col-span-3">
            <ul aria-label="How we work" style={{ color: QUIET }}>
              {principles.map((p) => (
                <li key={p} style={{ whiteSpace: "nowrap" }}>{p}</li>
              ))}
            </ul>
            <ul aria-label="Recent work">
              {work.map((w) => (
                <li key={w.name}>
                  <Link
                    href={w.href}
                    className="transition-colors"
                    style={{ color: QUIET }}
                  >
                    {w.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="col-span-2 mt-4 whitespace-normal lg:col-span-1 lg:mt-10">
              <AskAssistant />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-8 xl:col-span-9">
            <h1
              className="max-w-[15ch]"
              style={{
                fontFamily: "Zodiak, Georgia, serif",
                fontWeight: 700,
                color: INK,
                fontSize: "clamp(2.9rem, 7vw, 7rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
              }}
            >
              Websites built for the way you do business.
            </h1>

            <p className="mt-8 max-w-[38rem] text-[19px] leading-[1.55] md:text-[21px]" style={{ color: BODY }}>
              We design and build business websites and online stores around how your customers enquire and buy.
              Your team can edit the content, you own the code, and every page is built so Google and AI
              assistants can read it properly.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <QuoteModalButton
                cta="preview_hero_talk"
                className="inline-flex items-center justify-center gap-3 bg-[#1C1917] px-7 py-4 text-[17px] font-medium text-white transition-opacity hover:opacity-90"
              >
                <span className="flex -space-x-2" aria-hidden="true">
                  <Image src="/team/hassan.png" alt="" width={28} height={28} className="rounded-full ring-2 ring-white/40" />
                  <Image src="/team/imran.png" alt="" width={28} height={28} className="rounded-full ring-2 ring-white/40" />
                </span>
                Talk to the founders
              </QuoteModalButton>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-7 py-4 text-[17px] font-medium transition-colors"
                style={{ color: INK, border: `1px solid ${INK}` }}
              >
                See the work
              </Link>
            </div>

            <p className="mt-6 text-[15px]" style={{ color: QUIET }}>
              From $1,500. Scope and price agreed before work starts.
            </p>
          </div>
        </div>
      </section>

      {/* Answer-first summary, unchanged in wording from the live page, where it
          must stay in the first 30% for extraction. Restyled only. */}
      <section className="relative px-6 pb-24 md:px-10">
        <p
          className="mx-auto max-w-[44rem] border-t pt-10 text-[18px] leading-[1.65]"
          style={{ color: BODY, borderColor: "rgba(28,25,23,0.12)" }}
        >
          <strong style={{ color: INK }}>
            PandaCodeGen designs and builds fast business websites and{" "}
            <Link href="/services/ecommerce" className="underline underline-offset-4" style={{ color: ACCENT }}>
              online stores
            </Link>
            .
          </strong>{" "}
          We create new websites and redesign or rebuild existing sites around how your business works. When a
          project needs a{" "}
          <Link href="/services" className="underline underline-offset-4" style={{ color: ACCENT }}>
            migration
          </Link>
          , we plan how your content, URLs and integrations carry across. You get a content editor, training and
          code you own.
        </p>
      </section>
      </div>

      <WorkIndex />
      <ServicesStack />
    </main>
  );
}
