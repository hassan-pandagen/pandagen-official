'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-cognac/30 transition-all duration-200"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left text-charcoal font-semibold text-lg hover:bg-stone-50 transition-colors"
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-cognac shrink-0 transition-transform duration-200 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            {/*
              The answer is ALWAYS rendered and collapsed with CSS, never gated behind
              `openIndex === i`. Conditional rendering kept every answer out of the served
              HTML until a click, which meant the FAQPage JSON-LD asserted text that did not
              exist on the page, and any reader that does not click — every crawler, every
              answer engine — saw a question with no answer.
            */}
            <div
              id={`faq-answer-${i}`}
              role="region"
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 text-stone-600 text-base leading-relaxed border-t border-gray-200 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
