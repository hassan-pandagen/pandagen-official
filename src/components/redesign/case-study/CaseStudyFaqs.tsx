import { DISPLAY, MONO, T } from "@/components/redesign/tokens";
import FaqRows from "@/components/ui/FaqRows";

// Case-study FAQs share their source with FAQ structured data.
// Native accordion answers remain in the initial HTML.

export type CaseStudyFaq = { question: string; answer: string };

export default function CaseStudyFaqs({ faqs }: { faqs: CaseStudyFaq[] }) {
  if (!faqs.length) return null;
  return (
    <section className="px-6 py-6 md:px-10 md:py-24" style={{ backgroundColor: T.paper }} aria-labelledby="case-study-faq-title">
      <div className="mx-auto max-w-[1100px]">
        <span style={{ fontFamily: MONO, color: T.accent, fontSize: "13px" }}>FAQ</span>
        <h2 id="case-study-faq-title" className="mt-2" style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 1 }}>
          Questions about this project.
        </h2>
        <FaqRows className="mt-6 md:mt-8" faqs={faqs} />
      </div>
    </section>
  );
}
