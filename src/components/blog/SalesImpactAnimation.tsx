"use client";

import { useEffect, useState } from "react";

const STEPS = [
  {
    label: "Baseline",
    detail: "Record traffic, device, route, source, conversion, revenue, and performance.",
  },
  {
    label: "Change",
    detail: "Log the release, campaign, price, inventory, and measurement changes.",
  },
  {
    label: "Compare",
    detail: "Use the same cohort and window; control for mix, seasonality, and outages.",
  },
  {
    label: "Decide",
    detail: "Attribute only what the experiment or time-series evidence can support.",
  },
];

export default function SalesImpactAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveStep((step) => (step + 1) % STEPS.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      role="img"
      aria-label="Business impact measurement sequence covering baseline data, change logs, comparable cohorts, and evidence-based attribution"
      className="relative w-full aspect-[4/3] sm:aspect-2/1 overflow-hidden rounded-2xl border border-stone-200 bg-linear-to-br from-stone-50 to-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(180,83,9,0.10),transparent_48%)]" />
      <div className="relative flex h-full flex-col px-5 py-5 md:px-9 md:py-7">
        <div className="mb-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cognac">Measure business impact</p>
          <p className="mt-1 text-sm font-semibold text-charcoal md:text-base">Performance may affect behavior; your data must establish the effect.</p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3">
          {STEPS.map((step, index) => {
            const active = activeStep === index;
            return (
              <div
                key={step.label}
                className={`rounded-xl border p-3 transition-all duration-500 md:p-4 ${
                  active
                    ? "border-cognac/40 bg-charcoal text-white shadow-lg shadow-stone-900/10"
                    : "border-stone-200 bg-white/90 text-charcoal"
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-widest ${active ? "text-orange-300" : "text-cognac"}`}>
                  {step.label}
                </span>
                <p className={`mt-3 text-[10px] leading-relaxed md:text-xs ${active ? "text-stone-300" : "text-stone-600"}`}>
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-wider text-stone-600 md:text-xs">
          Do not turn a performance correlation into a fixed revenue promise.
        </p>
      </div>
    </div>
  );
}
