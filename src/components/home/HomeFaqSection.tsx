"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
  q: string;
  a: string;
}

export default function HomeFaqSection({ faqs }: { faqs: Faq[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          Common questions about WordPress &amp; Shopify migration
        </h2>
        <div className="divide-y divide-stone-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4 group"
                aria-expanded={openFaq === i}
              >
                <span className="font-semibold text-charcoal text-base md:text-lg group-hover:text-cognac transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <p className="mt-4 text-stone-600 leading-relaxed text-base">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
