"use client";

import { useEffect, useState } from "react";

const CHECKS = [
  { label: "Access", detail: "Test robots rules, noindex, authentication, CDN controls, and the requested user agent." },
  { label: "Response", detail: "Compare initial HTML, rendered DOM, structured data, links, and meaningful text." },
  { label: "Behavior", detail: "Use each crawler operator's current documentation; JavaScript behavior is not universal." },
  { label: "Outcome", detail: "Monitor discovery and referrals. Crawlability creates eligibility, not a citation guarantee." },
];

export default function CrawlerBlindAnimation() {
  const [activeCheck, setActiveCheck] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveCheck((step) => (step + 1) % CHECKS.length);
    }, 2100);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      role="img"
      aria-label="Crawler eligibility verification covering access controls, response content, documented crawler behavior, and measured discovery outcomes"
      className="relative w-full aspect-[4/3] sm:aspect-2/1 overflow-hidden rounded-2xl border border-stone-200 bg-linear-to-br from-stone-50 to-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(180,83,9,0.09),transparent_52%)]" />
      <div className="relative flex h-full flex-col px-5 py-5 md:px-9 md:py-7">
        <div className="mb-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cognac">Crawler eligibility</p>
          <p className="mt-1 text-sm font-semibold text-charcoal md:text-base">Verify the response a named crawler can actually access.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3">
          {CHECKS.map((check, index) => {
            const active = index === activeCheck;
            return (
              <div
                key={check.label}
                className={`rounded-xl border p-3 transition-all duration-500 md:p-4 ${
                  active ? "border-cognac/40 bg-charcoal text-white" : "border-stone-200 bg-white/90 text-charcoal"
                }`}
              >
                <p className={`text-[10px] font-bold uppercase tracking-widest ${active ? "text-orange-300" : "text-cognac"}`}>{check.label}</p>
                <p className={`mt-3 text-[10px] leading-relaxed md:text-xs ${active ? "text-stone-300" : "text-stone-600"}`}>{check.detail}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-wider text-stone-600 md:text-xs">
          Server-rendered HTML can reduce rendering dependency; it does not force selection or citation.
        </p>
      </div>
    </div>
  );
}
