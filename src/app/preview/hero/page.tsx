import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import SiteNav from "@/components/layout/SiteNav";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import AskAssistant from "@/components/assistant/AskAssistant";
import PaperShader from "@/components/visual/PaperShader";
import WorkIndex from "@/components/redesign/WorkIndex";
import WorkCard from "@/components/redesign/WorkCard";
import HowWeWork from "@/components/redesign/HowWeWork";
import ServicesStack from "@/components/redesign/ServicesStack";
import ProcessSplit from "@/components/redesign/ProcessSplit";
import TickerBand from "@/components/redesign/TickerBand";
import ProofSection from "@/components/redesign/ProofSection";
import FeaturesTrio from "@/components/redesign/FeaturesTrio";
import PricingFinder from "@/components/redesign/PricingFinder";
// Founders: FoundersDark (owner, 26 Sep), chosen over the live FounderSection
// for consistency with the rest of this redesign -- the rounded cards and
// italic accent word are the template look the redesign moved away from.
import FoundersDark from "@/components/redesign/FoundersDark";
import FaqOpen from "@/components/redesign/FaqOpen";
import GuidesList from "@/components/redesign/GuidesList";
import SiteFooter from "@/components/redesign/SiteFooter";
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

// Heading font (owner, 24 Sep): Anton by default after comparing against
// grigoletti.ch; ?font=zodiak shows the serif version. Anton is OFL, so next/font self-hosts it with no licence issue.
// Anton ships one weight; font-synthesis:none stops the browser faking a bold.
const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-anton" });

const INK = T.ink;
const BODY = T.body;
const QUIET = T.quiet; // 4.99:1 on #E0DDD6, the shader's darkest tone under text
const ACCENT = T.accentText; // text links: 7.78:1 on paper



// Fine grain, drawn once as an SVG and tiled. Cheaper than a noise PNG and
// sharp at any pixel density.
const grain =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

export default async function HeroPreview({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const condensed = (await searchParams).font !== "zodiak";
  const fontVars = condensed
    ? { "--display": "var(--font-anton)", "--display-sm": "var(--font-sans)", "--hero-size": "clamp(3.4rem, 8.4vw, 10rem)", "--hero-lh": "0.9", "--hero-ls": "-0.01em" }
    : { "--display": "Zodiak", "--hero-size": "clamp(3rem, 8.6vw, 10.4rem)", "--hero-lh": "0.94", "--hero-ls": "-0.03em" };
  return (
    <div className={anton.variable} data-font={condensed ? "anton" : "zodiak"} style={{ ...fontVars, fontSynthesis: "none" } as React.CSSProperties}>
      <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
      <link rel="stylesheet" href={ZODIAK_CSS} precedence="default" />
      <SiteNav />
      <main style={{ backgroundColor: T.paper }}>

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
        <div className="relative mx-auto flex min-h-[88svh] max-w-[1600px] flex-col justify-between gap-12 px-6 pb-16 pt-28 md:px-10 lg:pt-28">
          {/* The headline carries the page, as on grigoletti.ch: full width, huge.
              Words unchanged from the live hero (positioning decision, 15 Sep). */}
          <h1
            className="hero-h1"
            style={{ fontFamily: "var(--display), Georgia, serif", fontWeight: 700, color: INK, fontSize: "var(--hero-size)", lineHeight: "var(--hero-lh)", letterSpacing: "var(--hero-ls)" }}
          >
            Websites built for the way you do business<span style={{ color: T.accent }}>.</span>
          </h1>

          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <p className="max-w-[30rem] text-[18px] leading-[1.55] md:text-[20px]" style={{ color: BODY }}>
                We design and build business websites and online stores around how your customers enquire and buy.
                Your team can edit the content, you own the code, and every page is built so Google and AI assistants
                can read it properly.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QuoteModalButton
                  cta="preview_hero_talk"
                  className="inline-flex items-center justify-center gap-3 bg-[#1C1917] px-6 py-4 text-[16px] font-medium text-white transition-opacity hover:opacity-90"
                >
                  <span className="flex -space-x-2" aria-hidden="true">
                    <Image src="/team/hassan.png" alt="" width={28} height={28} className="rounded-full ring-2 ring-white/40" />
                    <Image src="/team/imran.png" alt="" width={28} height={28} className="rounded-full ring-2 ring-white/40" />
                  </span>
                  Talk to the founders
                </QuoteModalButton>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-6 py-4 text-[16px] font-medium"
                  style={{ color: INK, border: `1px solid ${INK}` }}
                >
                  See the work
                </Link>
              </div>
              <p className="mt-5 text-[14px]" style={{ color: QUIET }}>
                From $1,500. Scope and price agreed before work starts.
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-5">
              <AskAssistant />
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <WorkCard />
            </div>
          </div>
        </div>
      </section>

      </div>

      <TickerBand />
      <WorkIndex />
      {/* Answer-first summary, unchanged in wording from the live page, where it
          must stay in the first 30% for extraction (after Work it sits at ~22%). Restyled only. */}
      <section className="relative px-6 pb-24 md:px-10" style={{ backgroundColor: T.paper }}>
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
      <HowWeWork />
      <ProofSection />
      <ServicesStack />
      <FeaturesTrio />
      <PricingFinder />
      <ProcessSplit />
      <FoundersDark />
      <FaqOpen />
      <GuidesList />
      </main>
      <SiteFooter />
      {/* Condensed mode sets section and row headings in capitals, as grigoletti.ch does. */}
      <style>{`[data-font=anton] h1, [data-font=anton] h2, [data-font=anton] .work-name { text-transform: uppercase; }`}</style>
    </div>
  );
}
