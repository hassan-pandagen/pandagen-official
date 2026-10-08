import FaqRows from "./FaqRows";

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
 *
 * showHeading={false} is for a page that already writes its own FAQ heading
 * right above this block. On 4 Oct 2026, 49 blog posts showed two H2s in a row
 * ("Frequently asked questions" from the post, then "Frequently Asked Questions"
 * from here). The post's heading stays because it carries the #faq anchor the
 * in-page contents links to. Only the heading is dropped; the answers stay visible.
 */
export function FAQAccordion({ faqs, showHeading = true }: { faqs: FAQ[]; showHeading?: boolean }) {
  if (!showHeading) {
    return (
      <section className="mb-0">
        <FaqRows faqs={faqs} />
      </section>
    );
  }
  return (
    <section className="mt-10 md:mt-20 mb-0" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="text-3xl md:text-4xl font-bold text-charcoal mb-6 md:mb-8 border-l-4 border-cognac pl-6"
      >
        Frequently Asked Questions
      </h2>
      <FaqRows faqs={faqs} />
    </section>
  );
}
