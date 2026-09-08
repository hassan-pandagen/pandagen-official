"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { label: "Check eligibility", detail: "Hobby is personal and non-commercial" },
  { label: "Choose the plan", detail: "Commercial production starts on Pro" },
  { label: "Model the workload", detail: "Seats, transfer, compute, images, and add-ons" },
  { label: "Control spend", detail: "Set alerts, limits, ownership, and incident actions" },
];

export default function VercelPlanAnimation() {
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
      aria-label="Vercel Hobby versus Pro decision visual showing non-commercial eligibility, commercial plan selection, workload modeling, and spend controls"
      className="relative w-full aspect-[4/3] sm:aspect-2/1 overflow-hidden rounded-2xl border border-stone-200 bg-linear-to-br from-stone-50 via-white to-orange-50/40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(180,83,9,0.10),transparent_48%)]" />
      <div className="relative flex h-full flex-col px-5 py-5 md:px-9 md:py-7">
        <div className="mb-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cognac">Vercel Hobby vs Pro</p>
          <p className="mt-1 text-sm font-semibold text-charcoal md:text-base">Eligibility first. Usage model second.</p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-3 md:gap-5">
          <div className="rounded-xl border border-stone-200 bg-white/90 p-3 shadow-xs md:p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Hobby</p>
            <p className="mt-1 text-2xl font-bold text-charcoal md:text-4xl">$0</p>
            <p className="mt-2 text-xs leading-relaxed text-stone-600 md:text-sm">Personal, non-commercial projects</p>
            <p className="mt-2 text-[10px] font-semibold text-stone-500 md:text-xs">100 GB Fast Data Transfer per month</p>
          </div>

          <div className="rounded-xl border border-cognac/30 bg-charcoal p-3 text-white shadow-lg shadow-stone-900/10 md:p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-orange-300">Pro</p>
            <p className="mt-1 text-2xl font-bold md:text-4xl">$20/mo</p>
            <p className="mt-2 text-xs leading-relaxed text-stone-200 md:text-sm">Commercial production starting plan</p>
            <p className="mt-2 text-[10px] font-semibold text-stone-300 md:text-xs">One deploying seat, plus added seats and usage</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-1.5" aria-hidden="true">
          {STEPS.map((step, index) => (
            <div
              key={step.label}
              className={`h-1 rounded-full transition-colors duration-500 ${index <= activeStep ? "bg-cognac" : "bg-stone-200"}`}
            />
          ))}
        </div>
        <div className="mt-2 min-h-9 text-center" aria-hidden="true">
          <p className="text-[10px] font-bold uppercase tracking-wider text-cognac">{STEPS[activeStep].label}</p>
          <p className="text-xs text-stone-600 md:text-sm">{STEPS[activeStep].detail}</p>
        </div>
      </div>
    </div>
  );
}
