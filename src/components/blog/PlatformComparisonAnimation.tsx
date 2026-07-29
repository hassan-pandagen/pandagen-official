"use client";

import { useEffect, useState } from "react";

// Visual-semantics: a topic-matched hero for "platform vs custom" / migration /
// sunset posts. A requirements scorecard reveals comparison rows one by one and
// lands on a neutral decision rule. Structurally distinct from the other blog
// animations (animated scorecard with per-row requirement checks).
// Type sizes and colors meet WCAG 2.1 AA: all text >= 4.5:1 contrast, rows at
// 14-16px, labels at 11-12px.

type Phase = "intro" | "reviewing" | "verdict";
const METRICS = [
  { label: "Publishing workflow", platform: "Built in", custom: "Must be designed" },
  { label: "Platform operation", platform: "Vendor managed", custom: "Team managed" },
  { label: "Extension model", platform: "Plan and integration limits", custom: "Code and API choices" },
  { label: "Ownership and export", platform: "Check the terms", custom: "Define in the contract" },
];

export default function PlatformComparisonAnimation() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [scored, setScored] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let rowTimer: ReturnType<typeof setInterval>;
    const run = () => {
      setPhase("intro");
      setScored(0);
      timer = setTimeout(() => {
        setPhase("reviewing");
        let r = 0;
        rowTimer = setInterval(() => {
          r++;
          setScored(r);
          if (r >= METRICS.length) {
            clearInterval(rowTimer);
            timer = setTimeout(() => {
              setPhase("verdict");
              timer = setTimeout(run, 2600);
            }, 1200);
          }
        }, 800);
      }, 1600);
    };
    run();
    return () => { clearTimeout(timer); clearInterval(rowTimer); };
  }, []);

  return (
    <div role="img" aria-label="Interactive comparison of requirements to verify when choosing a hosted platform or a custom Next.js build" className="relative w-full aspect-[4/3] sm:aspect-2/1 bg-linear-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden">
      <style>{`@keyframes rowReveal { from { opacity: 0; transform: translateX(-6px); } to { opacity: 1; transform: translateX(0); } } .cmp-row { animation: rowReveal 0.4s ease-out forwards; }`}</style>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(234,88,12,0.04),transparent_60%)]" />

      <div className="relative h-full flex flex-col px-5 md:px-10 py-4 md:py-6">
        {/* Title */}
        <div className="text-center mb-2 md:mb-3">
          <span className="text-xs md:text-sm font-bold text-stone-600 uppercase tracking-[0.2em]">Hosted Platform vs Custom Next.js</span>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-2 pb-2 border-b border-stone-300">
          <span className="text-[11px] md:text-xs font-bold text-stone-600 uppercase tracking-widest self-end">Metric</span>
          <span className="text-[11px] md:text-xs font-bold text-stone-600 uppercase tracking-widest text-center self-end">Platform</span>
          <span className="text-[11px] md:text-xs font-bold text-cognac uppercase tracking-widest text-center self-end">Custom</span>
        </div>

        {/* Rows */}
        <div className="flex-1 flex flex-col justify-center gap-1.5 md:gap-2 py-2">
          {METRICS.map((m, i) => {
            const show = phase !== "intro" && i < scored;
            return (
              <div
                key={m.label}
                className={`grid grid-cols-[1.3fr_1fr_1fr] gap-2 items-center px-2 md:px-3 py-1.5 md:py-2 rounded-lg border transition-all duration-500 ${show ? "cmp-row bg-white border-stone-200 opacity-100" : "border-transparent opacity-40"}`}
              >
                <span className="text-sm md:text-base font-bold text-stone-700 truncate">{m.label}</span>
                <span className="text-xs md:text-sm text-stone-600 text-center">{m.platform}</span>
                <span className="text-xs md:text-sm font-bold text-cognac text-center">{m.custom}</span>
              </div>
            );
          })}
        </div>

        {/* Verdict */}
        <div className="text-center mt-1">
          <p className={`text-[11px] md:text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${phase === "verdict" ? "text-cognac" : "text-stone-600"}`}>
            {phase === "intro" && "Same business goals. Two very different foundations."}
            {phase === "reviewing" && `Reviewing requirement ${scored} of ${METRICS.length}`}
            {phase === "verdict" && "Choose against requirements, ownership, and the operating model"}
          </p>
        </div>
      </div>
    </div>
  );
}
