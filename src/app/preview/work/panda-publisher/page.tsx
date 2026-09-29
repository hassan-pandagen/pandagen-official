import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import PandaPublisherWalkthrough from "@/components/redesign/case-study/PandaPublisherWalkthrough";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Panda Publisher, redesign preview, 30 Sep 2026. A concept build with no
// publishing business behind it; the relationship renders from
// case-study-facts.json through RelationshipDisclosure. The live /work page
// mentions an "editable service catalogue", which has not been checked
// against the concept's code, so it is not repeated here.
// ─────────────────────────────────────────────────────────────────────────────

export default function PandaPublisherCaseStudyPreview() {
  return (
    <PreviewShell condensed>
      <section className="px-6 pb-16 pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/preview/work" style={{ color: T.quiet }}>Work</Link> / Panda Publisher / Concept build
          </p>

          <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            Panda Publisher.
          </h1>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            An author-services website, shown as a concept.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            A concept site for a business that helps authors write, publish and launch a book. There is no
            publishing business behind it: the cover gallery is labelled as concept work on the site itself.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://pandapublisher-eight.vercel.app/"
              target="_blank"
              rel="noopener"
              className="cta-solid inline-flex items-center gap-2 px-5 py-3 text-[14px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Visit the concept <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <RelationshipDisclosure slug="panda-publisher" variant="editorial" />
        </div>
      </section>

      <PandaPublisherWalkthrough />

      <section className="px-6 py-20 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
            Selling a service that&apos;s hard to picture?
          </h2>
          <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
            Tell us what you sell and what a buyer needs to see before they enquire, and we&apos;ll work out how
            the site should show it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteModalButton
              cta="case_study_panda_publisher"
              location="work_panda_publisher"
              className="cta-solid inline-flex items-center justify-center gap-2 bg-[#EBE9E4] px-6 py-3.5 text-[15px] font-medium text-[#1C1917]"
            >
              Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteModalButton>
            <Link href="/services" className="text-[14px] font-medium underline underline-offset-4" style={{ color: T.onDarkQuiet }}>
              Explore our services
            </Link>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
