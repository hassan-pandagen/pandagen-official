import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import WorkCaseTitle from "@/components/redesign/case-study/WorkCaseTitle";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import MedicalTemplateWalkthrough from "@/components/redesign/case-study/MedicalTemplateWalkthrough";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";

// ─────────────────────────────────────────────────────────────────────────────
// Medical Template, redesign preview, 30 Sep 2026. A concept build, not client
// work: the relationship comes from case-study-facts.json ("Demo, not client
// work") and renders through RelationshipDisclosure like every other study.
// Nothing here claims the demo has a content editor or performance figures;
// the live /work page says it has an editor for staff, which has not been
// checked against the demo's code, so it is left out rather than repeated.
// ─────────────────────────────────────────────────────────────────────────────

export function MedicalTemplateCaseStudyPreview({ faqs = [] }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed footerLinksOnly>
      <section className="px-6 pb-16 pt-8 md:pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/work" style={{ color: T.quiet }}>Work</Link> / Medical Template / Concept build
          </p>

            <WorkCaseTitle>Medical Template</WorkCaseTitle>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            A practice website, shown with fictional content.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            We designed and built a fictional surgical practice to show what a booking-focused clinic website can
            look like. Every name, credential, review, location and price on it is invented, and the site says so
            on every screen.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://pandacodegen-medical-template.vercel.app/"
              target="_blank"
              rel="noopener"
              className="cta-solid inline-flex items-center gap-2 px-5 py-3 text-[14px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Visit the demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <RelationshipDisclosure slug="medical-template" variant="editorial" />
        </div>
      </section>

      <MedicalTemplateWalkthrough />

      <CaseStudyFaqs faqs={faqs} />

      <section className="px-6 py-20 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
            Running a practice or clinic?
          </h2>
          <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
            Tell us what patients need to find before they book, and we&apos;ll work out what your site should
            lead with.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteModalButton
              cta="case_study_medical_template"
              location="work_medical_template"
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
