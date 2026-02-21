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
    <section className="mt-20 mb-8" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="text-3xl md:text-4xl font-bold text-white mb-8 border-l-4 border-neon pl-6"
      >
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.03] hover:border-white/20 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left text-white font-semibold text-lg hover:bg-white/5 transition-colors"
              aria-expanded={openIndex === i}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-neon flex-shrink-0 transition-transform duration-200 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-6 pb-6 text-gray-300 text-lg leading-relaxed border-t border-white/5 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
