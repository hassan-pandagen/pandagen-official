import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import PriceAmount from "@/components/redesign/PriceAmount";
import Image from "next/image";
import Link from "next/link";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import CalModalButton from "@/components/ui/CalModalButton";
import { monthly, monthlyAiAverage } from "@/data/ai-referral-facts";
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
// The shared founder section uses the same selective italic/cognac heading accent.
import FoundersDark from "@/components/redesign/FoundersDark";
import FaqOpen from "@/components/redesign/FaqOpen";
import GuidesList from "@/components/redesign/GuidesList";
import { T } from "@/components/redesign/tokens";
import { ONE_TEAM } from "@/data/company-facts";

// The homepage design; src/app/page.tsx renders it. Built 23 Sep 2026 as the
// /preview/hero draft beside the old homepage, and moved here on 8 Oct 2026 when
// the /preview routes were removed.
//
// The H1 words and separate custom-build/WordPress price line are preserved.
// The owner approved the shorter explanation below on 10 October 2026. The
// opening pairs founder/work actions with a larger project preview.


const INK = T.ink;
const BODY = T.body;
const QUIET = T.quiet; // 4.99:1 on #E0DDD6, the shader's darkest tone under text
const ACCENT = T.accentText; // text links: 7.78:1 on paper
const usdWhole = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;



// Fine grain, baked from the original SVG by scripts/generate-hero-grain.mjs.
// Tiling the image avoids SVG turbulence calculations during mobile paint.
const grain = 'url("/textures/hero-grain.webp")';

export default async function HeroPreview({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const condensed = (await searchParams).font !== "zodiak";
  const heroVars = condensed
    ? { "--hero-size": "clamp(3.4rem, 8.4vw, 10rem)", "--hero-lh": "0.9", "--hero-ls": "-0.01em" }
    : { "--hero-size": "clamp(3rem, 8.6vw, 10.4rem)", "--hero-lh": "0.94", "--hero-ls": "-0.03em" };
  return (
    <PreviewShell condensed={condensed}>
      <div className="relative overflow-hidden" style={heroVars as React.CSSProperties}>
        {/* Paper and light: a warm wash from the top left, a soft fold of shadow
            across the right, and grain over both. */}
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
        <div className="relative mx-auto flex min-h-[calc(88svh-88px)] max-w-[1600px] flex-col justify-start gap-10 px-6 pb-16 pt-6 md:px-10 lg:pt-6">
          {/* The headline carries the page, as on grigoletti.ch: full width, huge.
              Words unchanged from the live hero (positioning decision, 15 Sep). */}
          <h1
            className="hero-h1"
            style={{ fontFamily: "var(--display), Georgia, serif", fontWeight: condensed ? 400 : 700, color: INK, fontSize: "var(--hero-size)", lineHeight: "var(--hero-lh)", letterSpacing: "var(--hero-ls)" }}
          >
            Websites built for the way you do <HeadingEmphasis text="business." phrase="business" />
          </h1>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
            <div className="min-w-0">
              <p className="max-w-[34rem] text-[18px] leading-[1.55] md:text-[20px]" style={{ color: BODY }}>
                Work with Hassan and Imran on a business website or online store your team can edit.
                We can build on WordPress, create a custom site or improve what you already have.
                You get an agreed price, written instructions and a live editing walkthrough.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <QuoteModalButton
                  cta="preview_hero_talk"
                  className="cta-solid inline-flex items-center justify-center gap-3 bg-[#1C1917] px-6 py-4 text-[16px] font-medium text-white"
                >
                  <span className="flex -space-x-2" aria-hidden="true">
                    <Image src="/team/hassan.png" alt="" width={28} height={28} className="h-7 w-7 shrink-0 rounded-full object-cover ring-2 ring-white/40" />
                    <Image src="/team/imran-editorial.png" alt="" width={28} height={28} className="h-7 w-7 shrink-0 rounded-full object-cover ring-2 ring-white/40" />
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
              <p className="mt-6 text-[14px]" style={{ color: QUIET }}>
                Custom builds from <PriceAmount value="$1,500" />. WordPress quoted to scope. Price agreed before work starts.
              </p>
              {/* 13 Oct 2026, owner: a direct booking option beside the email form, and the
                  AI-referral figure as proof. The figure is read from the same data file as
                  the measurement post, rounded to whole dollars, with its window. */}
              <p className="mt-3 text-[14px]" style={{ color: QUIET }}>
                Prefer to talk first?{" "}
                <CalModalButton
                  fallbackHref="https://cal.com/pandagen/discovery"
                  className="font-medium underline underline-offset-4"
                >
                  <span style={{ color: ACCENT }}>Book a free 15-minute call</span>
                </CalModalButton>
              </p>
              <p className="mt-7 max-w-[34rem] text-[14px] leading-[1.6]" style={{ color: BODY }}>
                {/* 27 Oct 2026: the monthly average replaces the March to August total here, as the
                    current figure. Both are in ai-referral-facts.ts and the article shows both. */}
                Our own store, Panda Patches, averaged {usdWhole(monthlyAiAverage)} a month in revenue attributed to
                ChatGPT, Claude, Perplexity and other AI assistants from {monthly.averageLabel}, with no ad spend on
                those referrals.{" "}
                <Link href="/blog/ai-referral-revenue-2026" className="underline underline-offset-4" style={{ color: ACCENT }}>
                  How we measured it
                </Link>
              </p>
            </div>

            <div className="min-w-0">
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
      <section data-home-summary className="relative px-6 pb-8 md:px-10 md:pb-16" style={{ backgroundColor: T.paper }}>
        <p
          className="mx-auto max-w-[44rem] text-[18px] leading-[1.65] md:pt-10"
          style={{ color: BODY }}
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
      {/* 26 Oct 2026, owner-approved wording. "Services you hire us to deliver" keeps the
          promise to the scope bought: it doesn't say every plan covers every service. */}
      <section data-home-one-team className="relative px-6 pb-8 md:px-10 md:pb-16" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[44rem] text-[18px] leading-[1.65]" style={{ color: BODY }}>
          <h2 className="mb-3 text-[24px] font-semibold leading-tight md:text-[28px]" style={{ color: INK }}>
            {ONE_TEAM.heading}
          </h2>
          <p className="mb-4">{ONE_TEAM.summary}</p>
          <p className="mb-4">{ONE_TEAM.whenItBreaks}</p>
          <ul className="space-y-2 text-[16px] leading-[1.6]">
            {ONE_TEAM.examples.map((e) => (
              <li key={e.href}>
                <Link href={e.href} className="font-medium underline underline-offset-4" style={{ color: ACCENT }}>{e.name}</Link>
                {" "}({e.relationship}). {e.did}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ServicesStack />
      <ProofSection />
      <HowWeWork />
      <FeaturesTrio />
      <PricingFinder />
      <ProcessSplit />
      <FoundersDark />
      <FaqOpen />
      <GuidesList />
    </PreviewShell>
  );
}
