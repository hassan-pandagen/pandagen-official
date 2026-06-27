"use client";

import { useEffect, useState } from "react";

// Visual-semantics: a topic-matched hero for "platform vs custom" / migration /
// sunset posts. A head-to-head scorecard reveals metric rows one by one, tallies
// a winner per row, and lands on a verdict. Structurally distinct from the other
// blog animations (animated scorecard with per-row winner toggles).
// Type sizes and colors meet WCAG 2.1 AA: all text >= 4.5:1 contrast, rows at
// 14-16px, labels at 11-12px.

type Phase = "intro" | "scoring" | "verdict";
const METRICS = [
  { label: "Load time", them: "3.5s", us: "0.8s" },
  { label: "Monthly cost", them: "$30–235", us: "~$0" },
  { label: "SEO / schema control", them: "Limited", us: "Full" },
  { label: "Code ownership", them: "Locked in", us: "100% yours" },
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
        setPhase("scoring");
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
    <div role="img" aria-label="Interactive animation scoring a hosted platform against a custom Next.js build across load time, cost, SEO control, and code ownership" className="relative w-full aspect-[4/3] sm:aspect-2/1 bg-linear-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden">
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
                <span className="text-sm md:text-base font-mono text-stone-500 text-center line-through decoration-stone-400">{m.them}</span>
                <span className="text-sm md:text-base font-mono font-bold text-cognac text-center flex items-center justify-center gap-1">
                  {show && <span className="text-[10px] md:text-xs">✓</span>}{m.us}
                </span>
              </div>
            );
          })}
        </div>

        {/* Verdict */}
        <div className="text-center mt-1">
          <p className={`text-[11px] md:text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${phase === "verdict" ? "text-cognac" : "text-stone-600"}`}>
            {phase === "intro" && "Same business goals. Two very different foundations."}
            {phase === "scoring" && `Scoring head-to-head · Custom wins ${scored}/${METRICS.length}`}
            {phase === "verdict" && "✓ Custom Next.js wins on every metric that compounds over time"}
          </p>
        </div>
      </div>
    </div>
  );
}
