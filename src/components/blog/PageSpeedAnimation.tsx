"use client";

import { useEffect, useState } from "react";

const CHECKS = [
  {
    label: "Field",
    title: "Real-user distribution",
    detail: "Review LCP, INP, and CLS at the 75th percentile by route and device.",
  },
  {
    label: "Lab",
    title: "Controlled reproduction",
    detail: "Use Lighthouse and a trace to inspect LCP, CLS, and Total Blocking Time.",
  },
  {
    label: "Cause",
    title: "Constrained layer",
    detail: "Separate origin, network, rendering, media, JavaScript, and third-party work.",
  },
  {
    label: "Verify",
    title: "Repeat and monitor",
    detail: "Record the environment, repeat the agreed profiles, then watch field data.",
  },
];

export default function PageSpeedAnimation() {
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
      aria-label="Performance verification sequence separating real-user Core Web Vitals, controlled lab tests, root-cause diagnosis, and repeated verification"
      className="relative w-full aspect-[4/3] sm:aspect-2/1 overflow-hidden rounded-2xl border border-stone-200 bg-linear-to-br from-stone-50 to-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(180,83,9,0.09),transparent_52%)]" />
      <div className="relative flex h-full flex-col px-5 py-5 md:px-9 md:py-7">
        <div className="mb-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cognac">Performance evidence stack</p>
          <p className="mt-1 text-sm font-semibold text-charcoal md:text-base">A lab score and field experience answer different questions.</p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3">
          {CHECKS.map((check, index) => {
            const active = index === activeCheck;
            return (
              <div
                key={check.label}
                className={`flex flex-col rounded-xl border p-3 transition-all duration-500 md:p-4 ${
                  active
                    ? "border-cognac/40 bg-charcoal text-white shadow-lg shadow-stone-900/10"
                    : "border-stone-200 bg-white/90 text-charcoal"
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-widest ${active ? "text-orange-300" : "text-cognac"}`}>
                  {check.label}
                </span>
                <p className="mt-3 text-xs font-bold md:text-sm">{check.title}</p>
                <p className={`mt-1 text-[10px] leading-relaxed md:text-xs ${active ? "text-stone-300" : "text-stone-500"}`}>
                  {check.detail}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-wider text-stone-600 md:text-xs">
          INP is a field metric; Lighthouse uses lab diagnostics such as Total Blocking Time.
        </p>
      </div>
    </div>
  );
}
