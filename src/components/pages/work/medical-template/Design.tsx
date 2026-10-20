import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import WorkCaseTitle from "@/components/redesign/case-study/WorkCaseTitle";
import WorkCaseOpening from "@/components/redesign/case-study/WorkCaseOpening";
import WorkCasePreview from "@/components/redesign/case-study/WorkCasePreview";
import WorkCaseFacts from "@/components/redesign/case-study/WorkCaseFacts";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import MedicalTemplateWalkthrough from "@/components/redesign/case-study/MedicalTemplateWalkthrough";
import { BODY, DISPLAY, MONO, T } from "@/components/redesign/tokens";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";

// ─────────────────────────────────────────────────────────────────────────────
// Medical Template, redesign preview, 30 Sep 2026. A concept build, not client
// work: the relationship comes from case-study-facts.json ("Demo, not client
// work") and renders through RelationshipDisclosure like every other study.
// Nothing here claims the demo has a content editor or performance figures;
// the live /work page says it has an editor for staff, which has not been
// checked against the demo's code, so it is left out rather than repeated.
// ─────────────────────────────────────────────────────────────────────────────

// These answers also supply the live page's FAQ structured data.
export const medicalTemplateFaqs: CaseStudyFaq[] = [
  { question: "What does this medical practice website design demonstrate?", answer: "The demo shows a consultation-focused homepage, treatment navigation, care steps and procedure information for a fictional surgical practice. It is a portfolio concept, with invented names, credentials, reviews, locations and prices. It demonstrates the design and page structure rather than results for a real clinic." },
  { question: "Can you redesign an existing medical website?", answer: "Yes. We review the current website, the information visitors need and what your team wants to improve. The scope can cover design, mobile layouts, content editing and agreed booking or enquiry connections. Useful existing URLs are retained where practical, and changed addresses need a redirect plan." },
  { question: "Can our team update a healthcare website themselves?", answer: "We can include a content editor for the pages and fields agreed in your proposal, with training and written instructions. Staff can then update that content themselves. New layouts, features or integrations are scoped separately. Our A Step Above Medical project shows an actual course and location editor alongside its training management system." },
  { question: "What is included in medical website development?", answer: "The written scope identifies the pages, mobile layouts, content editing, enquiry or booking workflow and connections your website needs. A custom staff portal or management system is a separate part of the scope. We agree the build price, running costs, testing and handover before work starts." },
];

export function MedicalTemplateCaseStudyPreview({ faqs = medicalTemplateFaqs }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed footerLinksOnly>
      <WorkCaseOpening>
        <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
          <Link href="/work" style={{ color: T.quiet }}>Work</Link> / Medical Template / Concept build
        </p>

        <WorkCaseTitle>Medical website design: a practice demo</WorkCaseTitle>
        <p className="mt-3 max-w-[38rem]" style={{ fontFamily: BODY, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
          A medical practice website design, shown as a demo.
        </p>

        <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
          A website design for a fictional surgical practice: clear treatment information, care steps and a
          route to booking a consultation. We built this concept to show how those pages work together.
          Every name, credential, review, location and price is invented, and the demo says so on every screen.
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

        <WorkCasePreview src="/work/medical-template-hero.png" alt="The Medical Template demo homepage, a fictional surgical practice with a booking button" width={1600} height={900} caption="The demo homepage / Concept build, fictional content" />
        <WorkCaseFacts items={[
          { label: "Project", value: "Medical practice website demo" },
          { label: "Status", value: "Concept build" },
          { label: "Content", value: "Fictional practice details" },
        ]} />
        <RelationshipDisclosure slug="medical-template" variant="editorial" />
      </WorkCaseOpening>

      <MedicalTemplateWalkthrough />

      <section className="px-6 py-8 md:px-10 md:py-12" style={{ backgroundColor: T.paperHi }}>
        <div className="mx-auto max-w-[1100px] border-t pt-8" style={{ borderColor: T.rule }}>
          <h2 className="text-[22px] font-semibold" style={{ color: T.ink }}>Need a website and a system for your team?</h2>
          <p className="mt-4 max-w-[48rem] text-[16px] leading-[1.65]" style={{ color: T.body }}>
            For a real client build, explore <Link href="/work/a-step-above-medical" className="underline underline-offset-4" style={{ color: T.accentText }}>A Step Above Medical</Link>.
            Its medical training management system combines a course website, content editor and team portal
            for classes, students, payments and certificates. The project is now live.
          </p>
        </div>
      </section>

      <CaseStudyFaqs faqs={faqs} />

      <section className="px-6 py-10 md:px-10 md:py-20" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
            Medical website development for your practice.
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
            <Link href="/services/medical-website-design" className="text-[14px] font-medium underline underline-offset-4" style={{ color: T.onDarkQuiet }}>
              Medical website design
            </Link>
            <Link href="/services/cms-development" className="text-[14px] font-medium underline underline-offset-4" style={{ color: T.onDarkQuiet }}>
              Websites your team can update
            </Link>
          </div>
        </div>
      </section>
    </PreviewShell>
  );
}
