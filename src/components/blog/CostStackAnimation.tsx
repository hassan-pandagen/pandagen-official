"use client";

import { useEffect, useState } from "react";

const COSTS = [
  { label: "Platform", detail: "Plan, seats, usage, add-ons, and transaction charges" },
  { label: "Delivery", detail: "Design, engineering, migration, QA, and accessibility" },
  { label: "Operation", detail: "Hosting, monitoring, maintenance, support, and incidents" },
  { label: "Change", detail: "New features, integrations, compliance, and content work" },
  { label: "Exit", detail: "Export, rebuild, data transfer, redirects, and retraining" },
];

export default function CostStackAnimation() {
  const [activeCost, setActiveCost] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveCost((step) => (step + 1) % COSTS.length);
    }, 1900);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      role="img"
      aria-label="Total cost of ownership model covering platform, delivery, operations, change, and exit costs"
      className="relative w-full aspect-[4/3] sm:aspect-2/1 overflow-hidden rounded-2xl border border-stone-200 bg-linear-to-br from-stone-50 to-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(180,83,9,0.09),transparent_52%)]" />
      <div className="relative flex h-full flex-col px-5 py-5 md:px-9 md:py-7">
        <div className="mb-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cognac">Total cost of ownership</p>
          <p className="mt-1 text-sm font-semibold text-charcoal md:text-base">Compare the same scope over the same time horizon.</p>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1.5 md:gap-2">
          {COSTS.map((cost, index) => {
            const active = index === activeCost;
            return (
              <div
                key={cost.label}
                className={`grid grid-cols-[5.5rem_1fr] items-center gap-3 rounded-lg border px-3 py-2 transition-all duration-500 md:grid-cols-[7rem_1fr] ${
                  active ? "border-cognac/40 bg-charcoal text-white" : "border-stone-200 bg-white/90 text-charcoal"
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? "text-orange-300" : "text-cognac"}`}>{cost.label}</span>
                <span className={`text-[10px] leading-relaxed md:text-xs ${active ? "text-stone-300" : "text-stone-600"}`}>{cost.detail}</span>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-wider text-stone-600 md:text-xs">
          Use invoices and labor records; do not assume custom software has no recurring cost.
        </p>
      </div>
    </div>
  );
}
