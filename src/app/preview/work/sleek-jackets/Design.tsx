import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import SleekJacketsWalkthrough from "@/components/redesign/case-study/SleekJacketsWalkthrough";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";

// ─────────────────────────────────────────────────────────────────────────────
// Sleek Jackets, redesign preview, 30 Sep 2026. Held as a concept build until
// its owners decide between a founder-owned brand and a client-run store (see
// its disclosure in case-study-facts.json). The store's own banner says
// purchases are not live, and nothing here says otherwise.
// ─────────────────────────────────────────────────────────────────────────────

export function SleekJacketsCaseStudyPreview({ faqs = [] }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed>
      <section className="px-6 pb-16 pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/work" style={{ color: T.quiet }}>Work</Link> / Sleek Jackets / Concept build
          </p>

          <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            Sleek Jackets.
          </h1>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            An outerwear store, in private preview.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            A product-led storefront for leather outerwear. Purchases are not live yet, and the store says so on
            every page. Whether it becomes a founder-owned brand or a client-run store is still undecided, so we
            show it as a concept build.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://sleek-jackets.vercel.app/"
              target="_blank"
              rel="noopener"
              className="cta-solid inline-flex items-center gap-2 px-5 py-3 text-[14px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Visit the preview <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <RelationshipDisclosure slug="sleek-jackets" variant="editorial" />
        </div>
      </section>

      <SleekJacketsWalkthrough />

      <CaseStudyFaqs faqs={faqs} />

      <section className="px-6 py-20 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
            Launching a product storefront?
          </h2>
          <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
            Tell us what you&apos;re selling and how many products you&apos;ll start with, and we&apos;ll help you
            work out whether a custom store or a platform fits better.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteModalButton
              cta="case_study_sleek_jackets"
              location="work_sleek_jackets"
              className="cta-solid inline-flex items-center justify-center gap-2 bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]"
            >
              Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteModalButton>
            <Link href="/services/ecommerce" className="text-[14px] font-medium underline underline-offset-4" style={{ color: T.onDarkQuiet }}>
              Explore e-commerce services
            </Link>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
