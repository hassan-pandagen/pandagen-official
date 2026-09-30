import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PreviewShell from "@/components/redesign/PreviewShell";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import RelationshipDisclosure from "@/components/work/RelationshipDisclosure";
import PandaCodeLabWalkthrough from "@/components/redesign/case-study/PandaCodeLabWalkthrough";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";
import CaseStudyFaqs, { type CaseStudyFaq } from "@/components/redesign/case-study/CaseStudyFaqs";

// ─────────────────────────────────────────────────────────────────────────────
// Panda CodeLab, redesign preview, 30 Sep 2026. Founder-affiliated: the
// disclosure renders from case-study-facts.json. The live /work page quotes
// "sub-700ms load times" and "90+ PageSpeed" with no measurement on record in
// case-study-facts.json, so neither figure is repeated here. See the note in
// PandaCodeLabWalkthrough.tsx on which screenshots were left out and why.
// ─────────────────────────────────────────────────────────────────────────────

export function PandaCodeLabCaseStudyPreview({ faqs = [] }: { faqs?: CaseStudyFaq[] }) {
  return (
    <PreviewShell condensed>
      <section className="px-6 pb-16 pt-28 md:px-10" style={{ backgroundColor: T.paper }}>
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-6 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
            <Link href="/work" style={{ color: T.quiet }}>Work</Link> / Panda CodeLab / Founder-affiliated
          </p>

          <h1 style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
            Panda CodeLab.
          </h1>
          <p className="mt-3 max-w-[38rem]" style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "1.4rem", lineHeight: 1.3 }}>
            A second agency brand, built by the same team.
          </p>

          <p className="mt-6 max-w-[40rem] text-[17px] leading-[1.65]" style={{ color: T.body }}>
            A separate agency brand at pandacodelab.com, designed and built by the team behind PandaCodeGen.
            It&apos;s our own property, so it shows what we can build, not a result for an outside client.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://www.pandacodelab.com/"
              target="_blank"
              rel="noopener"
              className="cta-solid inline-flex items-center gap-2 px-5 py-3 text-[14px] font-medium"
              style={{ backgroundColor: T.ink, color: T.paper }}
            >
              Visit the site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only"> pandacodelab.com (opens in a new tab)</span>
            </a>
          </div>

          <RelationshipDisclosure slug="panda-codelab" variant="editorial" />
        </div>
      </section>

      <PandaCodeLabWalkthrough />

      <CaseStudyFaqs faqs={faqs} />

      <section className="px-6 py-20 md:px-10" style={{ backgroundColor: T.dark, color: T.onDark }}>
        <div className="mx-auto max-w-[1100px]">
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.8rem)", lineHeight: 1.05 }}>
            Need a site for a services business?
          </h2>
          <p className="mt-4 max-w-[34rem] text-[16px] leading-[1.6]" style={{ color: T.onDarkQuiet }}>
            Tell us what you offer and how clients reach you today, and we&apos;ll work out what the site needs to
            do.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteModalButton
              cta="case_study_panda_codelab"
              location="work_panda_codelab"
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
