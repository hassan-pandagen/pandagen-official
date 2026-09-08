"use client";

import { useEffect, useState } from "react";

const CHECKS = [
  {
    label: "Measurement",
    detail: "Confirm Search Console property, date range, filters, and tracking changes.",
  },
  {
    label: "Technical",
    detail: "Check indexing, canonicals, redirects, crawl access, rendering, and releases.",
  },
  {
    label: "Demand",
    detail: "Compare queries, devices, countries, SERP features, and seasonality.",
  },
  {
    label: "Content",
    detail: "Review intent, usefulness, competition, freshness, and site reputation.",
  },
  {
    label: "Experience",
    detail: "Use field performance and usability as evidence, not a ranking guarantee.",
  },
];

export default function SEORankingAnimation() {
  const [activeCheck, setActiveCheck] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveCheck((step) => (step + 1) % CHECKS.length);
    }, 1900);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      role="img"
      aria-label="Search performance diagnosis covering measurement, technical controls, demand, content, and page experience without promising rankings"
      className="relative w-full aspect-[4/3] sm:aspect-2/1 overflow-hidden rounded-2xl border border-stone-200 bg-linear-to-br from-stone-50 to-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(180,83,9,0.09),transparent_52%)]" />
      <div className="relative flex h-full flex-col px-5 py-5 md:px-9 md:py-7">
        <div className="mb-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cognac">Search diagnosis</p>
          <p className="mt-1 text-sm font-semibold text-charcoal md:text-base">Investigate several systems before assigning a cause.</p>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-1.5 md:gap-2">
          {CHECKS.map((check, index) => {
            const active = activeCheck === index;
            return (
              <div
                key={check.label}
                className={`grid grid-cols-[6.5rem_1fr] items-center gap-3 rounded-lg border px-3 py-2 transition-all duration-500 md:grid-cols-[8rem_1fr] ${
                  active
                    ? "border-cognac/40 bg-charcoal text-white"
                    : "border-stone-200 bg-white/90 text-charcoal"
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? "text-orange-300" : "text-cognac"}`}>
                  {check.label}
                </span>
                <span className={`text-[10px] leading-relaxed md:text-xs ${active ? "text-stone-300" : "text-stone-600"}`}>
                  {check.detail}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-wider text-stone-600 md:text-xs">
          Good Core Web Vitals can help page experience; they do not guarantee a position.
        </p>
      </div>
    </div>
  );
}
