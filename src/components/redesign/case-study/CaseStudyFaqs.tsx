import { DISPLAY, MONO, T } from "@/components/redesign/tokens";
import FaqRows from "@/components/ui/FaqRows";

// ─────────────────────────────────────────────────────────────────────────────
// Case-study FAQ in the redesign's style, 30 Sep 2026, added when the /work
// pages switched to the new designs. Each live case study already carries an
// FAQ and FAQPage structured data; the new designs had no FAQ, and structured
// data describing questions a reader cannot see is the one thing the switch
// must not ship. Answers are always visible, never collapsed: see FaqOpen.tsx
// for the dated history of collapsed answers scoring zero on an extraction
// sweep. The live page passes the same array it uses for its JSON-LD, so the
// visible questions and the structured data cannot drift apart.
// ─────────────────────────────────────────────────────────────────────────────

export type CaseStudyFaq = { question: string; answer: string };

export default function CaseStudyFaqs({ faqs }: { faqs: CaseStudyFaq[] }) {
  if (!faqs.length) return null;
  return (
    <section className="px-6 py-16 md:px-10 md:py-24" style={{ backgroundColor: T.paper }} aria-labelledby="case-study-faq-title">
      <div className="mx-auto max-w-[1100px]">
        <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>FAQ</span>
        <h2 id="case-study-faq-title" className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
          Questions about this project.
        </h2>
        <FaqRows className="mt-8" faqs={faqs} />
      </div>
    </section>
  );
}
