"use client";

import { useEffect, useState } from "react";

type Phase = "measuring" | "optimizing" | "improved" | "perfect";
const PHASES: Phase[] = ["measuring", "optimizing", "improved", "perfect"];
const DELAYS: Record<Phase, number> = { measuring: 2200, optimizing: 2200, improved: 2200, perfect: 2200 };

const DATA: Record<Phase, {
  score: number; lcp: string; cls: string; fid: string;
  lcpPass: boolean; clsPass: boolean; fidPass: boolean;
  status: string;
}> = {
  measuring: { score: 47,  lcp: "4.2s",  cls: "0.25", fid: "180ms", lcpPass: false, clsPass: false, fidPass: false, status: "Auditing site: 3 Core Web Vitals failing" },
  optimizing:{ score: 72,  lcp: "2.4s",  cls: "0.10", fid: "48ms",  lcpPass: false, clsPass: false, fidPass: true,  status: "Removing render-blocking JS, lazy-loading images" },
  improved:  { score: 91,  lcp: "1.4s",  cls: "0.04", fid: "22ms",  lcpPass: false, clsPass: true,  fidPass: true,  status: "Switching to static Next.js, almost there" },
  perfect:   { score: 100, lcp: "0.9s",  cls: "0.01", fid: "8ms",   lcpPass: true,  clsPass: true,  fidPass: true,  status: "100/100: All Core Web Vitals passing · Under 1s LCP" },
};

export default function PageSpeedAnimation() {
  const [phase, setPhase] = useState<Phase>("measuring");

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const advance = () => {
      i = (i + 1) % PHASES.length;
      setPhase(PHASES[i]);
      timer = setTimeout(advance, DELAYS[PHASES[i]]);
    };
    timer = setTimeout(advance, DELAYS["measuring"]);
    return () => clearTimeout(timer);
  }, []);

  const d = DATA[phase];
  const circumference = 2 * Math.PI * 38;
  const dashOffset = circumference - (circumference * d.score) / 100;
  const isGood = d.score >= 90;
  const isMid  = d.score >= 50 && d.score < 90;

  const ringColor  = isGood ? "#EA580C" : isMid ? "#78716C" : "#D6D3D1";
  const scoreColor = isGood ? "text-cognac" : isMid ? "text-stone-500" : "text-stone-400";

  const vitals = [
    { key: "LCP", val: d.lcp, pass: d.lcpPass, hint: "Largest Contentful Paint" },
    { key: "CLS", val: d.cls, pass: d.clsPass, hint: "Cumulative Layout Shift" },
    { key: "FID", val: d.fid, pass: d.fidPass, hint: "First Input Delay" },
  ];

  return (
    <div role="img" aria-label="Interactive animation showing website PageSpeed score improving from 47/100 to 100/100 through Next.js optimization" className="relative w-full aspect-[2/1] bg-gradient-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden">
      <style>{`
        @keyframes psRing { from { stroke-dashoffset: 239; } to { stroke-dashoffset: var(--ps-off); } }
        .ps-ring { animation: psRing 0.9s cubic-bezier(0.4,0,0.2,1) forwards; }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(234,88,12,0.04),transparent_65%)]" />

      {/* Top label */}
      <div className="absolute top-4 left-0 right-0 text-center">
        <span className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em]">Google PageSpeed Score: Live Audit</span>
      </div>

      {/* Main */}
      <div className="absolute inset-x-4 top-10 bottom-10 flex items-center justify-center gap-6 md:gap-12">

        {/* Score ring */}
        <div className="relative flex items-center justify-center shrink-0">
          <svg width="96" height="96" viewBox="0 0 88 88" className="md:w-28 md:h-28">
            {/* Track */}
            <circle cx="44" cy="44" r="38" fill="none" stroke="#E7E5E4" strokeWidth="5" />
            {/* Fill */}
            <circle
              key={phase}
              cx="44" cy="44" r="38"
              fill="none"
              stroke={ringColor}
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              className="ps-ring"
              style={{ "--ps-off": dashOffset, transform: "rotate(-90deg)", transformOrigin: "center" } as React.CSSProperties}
            />
          </svg>
          <div className="absolute flex flex-col items-center leading-none">
            <span className={`text-2xl md:text-3xl font-bold tabular-nums transition-all duration-700 ${scoreColor}`}>{d.score}</span>
            <span className="text-[8px] font-bold text-stone-400 tracking-widest mt-0.5">/100</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-16 w-px bg-stone-200 shrink-0" />

        {/* Vitals */}
        <div className="flex flex-col gap-2.5 md:gap-3">
          {vitals.map(({ key, val, pass }) => (
            <div key={key} className="flex items-center gap-2 md:gap-3">
              <div className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-700 ${pass ? "bg-cognac" : "bg-stone-300"}`} />
              <span className="text-[10px] md:text-xs font-bold text-stone-400 w-7 shrink-0">{key}</span>
              <span className={`text-xs md:text-sm font-mono font-bold transition-colors duration-700 ${pass ? "text-charcoal" : "text-stone-400"}`}>{val}</span>
              <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded transition-all duration-700 ${
                pass ? "bg-stone-100 text-cognac border border-stone-200" : "bg-stone-100 text-stone-400"
              }`}>
                {pass ? "PASS" : "FAIL"}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 w-px bg-stone-200 shrink-0" />

        {/* Status badge */}
        <div className={`hidden md:flex flex-col items-center gap-1.5 transition-all duration-700 ${isGood ? "opacity-100" : "opacity-30"}`}>
          <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-700 ${
            isGood ? "border-cognac bg-stone-50" : "border-stone-200 bg-stone-50"
          }`}>
            <span className="text-lg">{d.score === 100 ? "✓" : "↑"}</span>
          </div>
          <span className={`text-[8px] font-bold uppercase tracking-widest transition-colors duration-700 ${isGood ? "text-cognac" : "text-stone-300"}`}>
            {d.score === 100 ? "Perfect" : isGood ? "Fast" : "Slow"}
          </span>
        </div>
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-4 left-0 right-0 text-center px-4">
        <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors duration-500 ${
          isGood ? "text-cognac" : isMid ? "text-stone-500" : "text-stone-400"
        }`}>
          {d.status}
        </p>
      </div>
    </div>
  );
}
