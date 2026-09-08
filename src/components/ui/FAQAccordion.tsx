import { ChevronRight } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

/**
 * FAQ block. Answers are ALWAYS VISIBLE. Do not reintroduce a collapse.
 *
 * History, so this does not get "improved" back into a bug:
 *   1. Originally the answer was rendered only when `openIndex === i`, so every
 *      answer was absent from the served HTML until a human clicked. The FAQPage
 *      JSON-LD asserted text that did not exist on the page.
 *   2. That was fixed by always rendering the answer and collapsing it with CSS
 *      (`grid-rows-[0fr]` + `overflow-hidden`). The text was now in the HTML, so
 *      raw-HTML crawlers could read it.
 *   3. On 4 Aug 2026 an external extraction sweep still scored 0 of 26 answers
 *      across the money pages. A CSS-collapsed container computes to ZERO HEIGHT,
 *      so any pipeline that filters on computed visibility drops the text, even
 *      though it is present in the markup. The same fetcher scored 8/8 on the
 *      pricing page, whose FAQ renders answers as plain visible text.
 *
 * So the requirement is not "in the DOM", it is "visible". This site's positioning
 * is that answer engines can quote its pages; a FAQ answer no extractor can read is
 * the most expensive place to fail that. Visible by default also removes the
 * hydration cost and any collapse-driven layout shift.
 *
 * Deliberately a server component: no state, no 'use client', no JS shipped.
 */
export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="mt-10 md:mt-20 mb-0" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="text-3xl md:text-4xl font-bold text-charcoal mb-6 md:mb-8 border-l-4 border-cognac pl-6"
      >
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-2xl bg-white p-6 transition-colors duration-200 hover:border-cognac/30"
          >
            <h3 className="flex items-start gap-3 text-lg font-semibold text-charcoal">
              <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-cognac" aria-hidden="true" />
              <span>{faq.question}</span>
            </h3>
            <p className="mt-3 border-t border-gray-200 pt-4 text-base leading-relaxed text-stone-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
