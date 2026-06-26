"use client";

import { useEffect, useState } from "react";

// Visual-semantics: a topic-matched hero for "platform vs custom" / migration /
// sunset posts. A head-to-head scorecard reveals metric rows one by one, tallies
// a winner per row, and lands on a verdict. Structurally distinct from the other
// blog animations (animated scorecard with per-row winner toggles).

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

      <div className="absolute top-4 left-0 right-0 text-center">
        <span className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em]">Hosted Platform vs Custom Next.js</span>
      </div>

      {/* Column headers */}
      <div className="absolute inset-x-5 md:inset-x-10 top-11 grid grid-cols-[1.3fr_1fr_1fr] gap-2 pb-2 border-b border-stone-200">
        <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest self-end">Metric</span>
        <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest text-center self-end">Platform</span>
        <span className="text-[8px] font-bold text-cognac uppercase tracking-widest text-center self-end">Custom</span>
      </div>

      {/* Rows */}
      <div className="absolute inset-x-5 md:inset-x-10 top-[4.6rem] bottom-10 flex flex-col justify-center gap-1.5">
        {METRICS.map((m, i) => {
          const show = phase !== "intro" && i < scored;
          return (
            <div
              key={m.label}
              className={`grid grid-cols-[1.3fr_1fr_1fr] gap-2 items-center px-2 py-1.5 rounded-lg border transition-all duration-500 ${show ? "cmp-row bg-white border-stone-200 opacity-100" : "border-transparent opacity-25"}`}
            >
              <span className="text-[9px] md:text-[11px] font-bold text-stone-500 truncate">{m.label}</span>
              <span className="text-[9px] md:text-[11px] font-mono text-stone-400 text-center line-through decoration-stone-300">{m.them}</span>
              <span className="text-[9px] md:text-[11px] font-mono font-bold text-cognac text-center flex items-center justify-center gap-1">
                {show && <span className="text-[8px]">✓</span>}{m.us}
              </span>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center px-4">
        <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors duration-500 ${phase === "verdict" ? "text-cognac" : "text-stone-400"}`}>
          {phase === "intro" && "Same business goals. Two very different foundations."}
          {phase === "scoring" && `Scoring head-to-head · Custom wins ${scored}/${METRICS.length}`}
          {phase === "verdict" && "✓ Custom Next.js wins on every metric that compounds over time"}
        </p>
      </div>
    </div>
  );
}
