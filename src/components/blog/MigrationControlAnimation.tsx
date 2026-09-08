"use client";

import { useEffect, useState } from "react";

const CONTROLS = [
  { number: "01", title: "URL inventory", detail: "Crawl and baseline" },
  { number: "02", title: "Disposition map", detail: "Keep, redirect, or retire" },
  { number: "03", title: "Staged QA", detail: "Crawl, forms, consent, and speed" },
  { number: "04", title: "Monitor", detail: "Indexing, queries, and errors" },
];

export default function MigrationControlAnimation() {
  const [activeControl, setActiveControl] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveControl((step) => (step + 1) % CONTROLS.length);
    }, 1900);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      role="img"
      aria-label="WordPress to Next.js migration control sequence covering URL inventory, keep redirect or retire decisions, staged quality assurance, and Search Console monitoring"
      className="relative w-full aspect-[4/3] sm:aspect-2/1 overflow-hidden rounded-2xl border border-stone-200 bg-linear-to-br from-white to-stone-50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(180,83,9,0.09),transparent_42%)]" />
      <div className="relative flex h-full flex-col px-5 py-5 md:px-9 md:py-7">
        <div className="mb-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cognac">SEO migration control loop</p>
          <p className="mt-1 text-sm font-semibold text-charcoal md:text-base">A deliberate decision for every old URL</p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3">
          {CONTROLS.map((control, index) => {
            const active = activeControl === index;
            return (
              <div
                key={control.number}
                className={`relative flex flex-col justify-between rounded-xl border p-3 transition-all duration-500 md:p-4 ${active ? "border-cognac/40 bg-charcoal text-white shadow-lg shadow-stone-900/10" : "border-stone-200 bg-white/90 text-charcoal"}`}
              >
                <span className={`text-2xl font-serif italic md:text-4xl ${active ? "text-orange-300" : "text-cognac"}`}>{control.number}</span>
                <div>
                  <p className="text-xs font-bold md:text-sm">{control.title}</p>
                  <p className={`mt-1 text-[10px] leading-snug md:text-xs ${active ? "text-stone-300" : "text-stone-500"}`}>{control.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-center">
          <span className="h-2 w-2 rounded-full bg-cognac" aria-hidden="true" />
          <p className="text-[10px] font-bold uppercase tracking-wider text-stone-600 md:text-xs">Reduce technical risk. Do not promise rankings.</p>
        </div>
      </div>
    </div>
  );
}
