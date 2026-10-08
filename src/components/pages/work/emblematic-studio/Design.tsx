import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import WorkCaseTitle from "@/components/redesign/case-study/WorkCaseTitle";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import EmblematicStudioWalkthrough from "@/components/redesign/case-study/EmblematicStudioWalkthrough";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";

// ─────────────────────────────────────────────────────────────────────────────
// Emblematic Studio, rebuild 2, 28 Sep 2026. First pass (same day, earlier)
// stopped after a hero and a plain facts list -- only one screenshot
// existed. Four chapter-specific screenshots confirmed current by the owner
// (from the project's own repo, C:\Projects\Emblematic-studio, dated 18-23
// Jul 2026 -- before the site's FAQ says it went publicly indexable on 7
// Aug, but confirmed still accurate today) -- enough to build the same real
// CaseStudyWalkthrough pattern the other case studies use.
//
// Facts corrected against the CURRENT repo (README.md, dated 17 Aug, the
// most recent source) rather than the older /work page's copy: 22 product
// types, not 20 -- the catalogue grew since that page was written. One
// screenshot (the quote form) still carried stale "private prototype"
// placeholder copy in these builds; confirmed by grepping the current repo
// for that text and finding none, so it's not quoted anywhere on this page.
// ─────────────────────────────────────────────────────────────────────────────

const built = [
  {
    label: "Motion that respects the reader",
    body: "The homepage's scroll-driven animation (GSAP, ScrollTrigger and related plugins) is gated off for reduced-motion preferences and lower-powered devices, not applied uniformly regardless of who's viewing.",
  },
  {
    label: "One runtime route, sitewide",
    body: "Every page is pre-rendered at build time. The only route that runs server code per request is the quote endpoint itself, because sending an email needs it. That leaves one server-side route to secure and monitor, instead of a whole site.",
  },
];

export function EmblematicStudioCaseStudyPreview({ faqs = [] }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed footerLinksOnly>
      <section className="px-6 pb-16 pt-8 md:pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/work" style={{ color: T.quiet }}>Work</Link> / Emblematic Studio / Independent client
          </p>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-12">
            <div>
            <WorkCaseTitle>Emblematic Studio</WorkCaseTitle>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            A material-led product catalogue and quote experience for a custom patch studio.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            22 product types generated from a single typed registry, a quote form that keeps nothing it doesn't
            need, and exactly one runtime route on the entire site.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://www.emblematicstudio.com"
              target="_blank"
              rel="noopener"
              className="cta-solid inline-flex items-center gap-2 px-5 py-3 text-[14px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Visit the live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> emblematicstudio.com (opens in a new tab)</span>
            </a>
          </div>

            </div>
            <a href="#emblematic-walkthrough" className="block w-full lg:pt-8" aria-label="Explore the Emblematic Studio build">
              <Image
                src="/work/emblematic-studio-home.png"
                alt="Emblematic Studio homepage with an embroidered mountain patch beside its vector drawing"
                width={1440}
                height={900}
                sizes="(min-width: 1024px) 500px, 100vw"
                priority
                className="h-auto w-full border"
                style={{ borderColor: T.rule }}
              />
              <span className="mt-4 flex items-center justify-between gap-4 text-[14px] font-semibold leading-relaxed" style={{ color: T.accentText }}>
                Explore the catalogue and quote flow <span aria-hidden="true">↓</span>
              </span>
            </a>
          </div>

          <RelationshipDisclosure slug="emblematic-studio" variant="editorial" />
        </div>
      </section>

      <EmblematicStudioWalkthrough />

      <section className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1100px]">
          <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>04</span>
          <h2 className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
            Also in scope.
          </h2>
          <p className="mt-4 max-w-[42rem] text-[15px] leading-[1.6]" style={{ color: T.quiet }}>
            No traffic or ranking figures are quoted here. The production build only became indexable on 7 August
            2026, so there isn&apos;t a meaningful search history yet. What&apos;s verifiable today is the build itself.
          </p>

          <dl className="mt-8 border-t" style={{ borderColor: T.rule }}>
            {built.map((b) => (
              <div key={b.label} className="grid gap-2 border-b py-5 md:grid-cols-12 md:gap-8" style={{ borderColor: T.rule }}>
                <dt className="font-semibold md:col-span-3" style={{ color: T.ink }}>{b.label}</dt>
                <dd className="text-[14px] leading-[1.6] md:col-span-9" style={{ color: T.body }}>{b.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CaseStudyFaqs faqs={faqs} />

      <section className="px-6 py-20 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
            Need a catalogue that carries a material well?
          </h2>
          <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
            Tell us what you make and how a buyer needs to judge it, and we&apos;ll work out what that would take.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteModalButton
              cta="case_study_emblematic_studio"
              location="work_emblematic_studio"
              className="cta-solid inline-flex items-center justify-center gap-2 bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]"
            >
              Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteModalButton>
            <Link href="/services/custom-engineering" className="text-[14px] font-medium underline underline-offset-4" style={{ color: T.onDarkQuiet }}>
              Explore custom engineering services
            </Link>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
