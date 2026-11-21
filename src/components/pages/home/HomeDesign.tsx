import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import PriceAmount from "@/components/redesign/PriceAmount";
import Image from "next/image";
import Link from "next/link";
import PreviewShell from "@/components/redesign/PreviewShell";
import { CAL_BOOKING_URL } from "@/lib/booking";
import actions from "@/components/redesign/SalesActions.module.css";
import SystemProof from "@/components/redesign/SystemProof";
import BusinessSummary from "@/components/redesign/BusinessSummary";
import { monthly, monthlyAiAverage } from "@/data/ai-referral-facts";
import { HOME_HEADLINE, HOME_INTRO } from "@/data/home-content";
import PaperShader from "@/components/visual/PaperShader";
import WorkIndex from "@/components/redesign/WorkIndex";
import WorkCard from "@/components/redesign/WorkCard";
import HowWeWork from "@/components/redesign/HowWeWork";
import ServicesGroups from "@/components/redesign/ServicesGroups";
import WrittenCheckButton from "@/components/ui/WrittenCheckButton";
import ProofSection from "@/components/redesign/ProofSection";
import FeaturesTrio from "@/components/redesign/FeaturesTrio";
import PricingFinder from "@/components/redesign/PricingFinder";
// The shared founder section uses the same selective italic/cognac heading accent.
import FoundersDark from "@/components/redesign/FoundersDark";
import FaqOpen from "@/components/redesign/FaqOpen";
import { T } from "@/components/redesign/tokens";

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
    ? { "--hero-size": "clamp(2.25rem, 7.15vw, 7.25rem)", "--hero-lh": "0.96", "--hero-ls": "-0.01em" }
    : { "--hero-size": "clamp(2.125rem, 5.8vw, 6rem)", "--hero-lh": "1.02", "--hero-ls": "-0.03em" };
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
        <div className="relative mx-auto flex max-w-[1600px] flex-col justify-start gap-7 px-6 pb-6 pt-6 md:gap-8 md:px-10 md:pb-8 lg:pt-6">
          {/* 14 Nov 2026, Imran's brief: the lead moves from websites to websites and
              business systems, with A Step Above Medical as the proof. The small-website
              offer stays, as the second option (the price line below the buttons). */}
          <h1
            className="hero-h1"
            style={{ fontFamily: "var(--display), Georgia, serif", fontWeight: condensed ? 400 : 700, color: INK, fontSize: "var(--hero-size)", lineHeight: "var(--hero-lh)", letterSpacing: "var(--hero-ls)" }}
          >
            {/* 21 Nov 2026, Imran's decision: "The system behind your website" leads, with
                AI search as the second line (the paragraph below). */}
            <span className="block text-balance">{HOME_HEADLINE[0]}</span>{" "}
            <span className="block">
              <HeadingEmphasis text={HOME_HEADLINE[1]} phrase="your website" />
            </span>
          </h1>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
            <div className="min-w-0">
              <p className="max-w-[34rem] text-[18px] leading-[1.55] md:text-[20px]" style={{ color: BODY }}>
                {HOME_INTRO}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {/* 22 Nov 2026, journey review: the free written check is the main step for every
                    kind of buyer; the training system stays one click away as a text link below. */}
                <WrittenCheckButton
                  location="home_hero"
                  className="cta-solid inline-flex items-center justify-center gap-3 bg-[#1C1917] px-6 py-4 text-[16px] font-medium text-white"
                >
                  Get your free written check
                </WrittenCheckButton>
                <a
                  href={CAL_BOOKING_URL}
                  className={`${actions.button} press-feedback inline-flex items-center justify-center gap-3 border border-charcoal px-6 py-4 text-[16px] font-medium text-charcoal`}
                >
                  <span className="flex -space-x-2" aria-hidden="true">
                    <Image src="/team/hassan.png" alt="" width={28} height={28} className="h-7 w-7 shrink-0 rounded-full object-cover ring-2 ring-[#EBE9E4]" />
                    <Image src="/team/imran-editorial.png" alt="" width={28} height={28} className="h-7 w-7 shrink-0 rounded-full object-cover ring-2 ring-[#EBE9E4]" />
                  </span>
                  Book a 15-minute call
                </a>
              </div>
              <p className="mt-4 text-[15px]">
                <Link href="/work/a-step-above-medical" className="font-medium underline underline-offset-4" style={{ color: INK }}>
                  See the training system we built
                </Link>
              </p>
              <p className="mt-6 text-[14px]" style={{ color: QUIET }}>
                Fixed price in writing · Pay 30 / 40 / 30 · US Eastern hours · No mandatory retainer
              </p>
              <p className="mt-3 text-[14px]" style={{ color: QUIET }}>
                Website and business systems from <PriceAmount value="$10,000" />. Custom websites from <PriceAmount value="$1,500" />.
              </p>
              {/* 13 Oct 2026, owner: the AI-referral figure as proof. The figure is read
                  from the same data file as the measurement post, rounded to whole dollars,
                  with its window. */}
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

      {/* 14 Nov 2026, Imran's brief: the A Step Above proof sits directly under the
          hero, and the automation section follows it. */}
      {/* 21 Nov 2026, Imran's decisions: proof, summary, checklist, terms, prices, then
          the wider proof and reference sections. OneTeam left the homepage (the package
          says the same; its links are in WorkIndex and SystemProof) and ProcessSplit too
          (a short version is the "How it runs" row in HowWeWork). QuotedIn moved down
          to sit with the proof. */}
      <SystemProof />
      {/* 22 Nov 2026, journey review: services moved from screen 14 to third, as one compact
          block; reviews moved up to follow the checklist. */}
      <ServicesGroups />
      {/* Answer-first summary; it must stay in the first 30% of the page for
          extraction, so it sits straight after the A Step Above proof. Wording updated
          14 Nov 2026 to match the new lead. */}
      <BusinessSummary />
      {/* 26 Oct 2026, owner-approved wording. "Services you hire us to deliver" keeps the
          promise to the scope bought: it doesn't say every plan covers every service. */}
      <FeaturesTrio />
      <ProofSection />
      <PricingFinder />
      <HowWeWork />
      <WorkIndex />
      <FoundersDark />
      <FaqOpen />
    </PreviewShell>
  );
}
