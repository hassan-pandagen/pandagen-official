
import FaqRows from "@/components/ui/FaqRows";

interface Faq {
  q: string;
  a: string;
}

/**
 * Homepage FAQ. Answers are ALWAYS VISIBLE. Do not reintroduce a collapse.
 *
 * This block previously rendered the answer only when `openFaq === i`, which meant
 * every answer was ABSENT from the served HTML until a human clicked, while
 * page.tsx emitted FAQPage JSON-LD asserting all six of them. Structured data must
 * mirror text a visitor can actually see, so that was a policy problem as well as
 * an extraction one: an external sweep on 4 Aug 2026 read 0 of 6 answers here.
 *
 * See FAQAccordion for the full history. Same rule: the requirement is "visible",
 * not "present in the DOM". Server component, no state, no JS shipped.
 */
export default function HomeFaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section
      className="bg-paper border-t border-stone-200"
      style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#9a3412" }}>FAQ</p>
        <h2
          className="text-3xl md:text-4xl font-sans font-bold text-charcoal"
          style={{ marginBottom: "var(--space-heading)" }}
        >
          Common questions about working with us
        </h2>
        <FaqRows faqs={faqs.map(({ q, a }) => ({ question: q, answer: a }))} />
      </div>
    </section>
  );
}
