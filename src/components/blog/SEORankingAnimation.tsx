"use client";

import { useEffect, useState } from "react";

type Phase = "showing" | "speeding" | "climbing" | "top";
const PHASES: Phase[] = ["showing", "speeding", "climbing", "top"];
const DELAYS: Record<Phase, number> = { showing: 2200, speeding: 1500, climbing: 3000, top: 2200 };

const COMPETITORS = [
  { name: "Fast Competitor", speed: "0.8s", fast: true },
  { name: "Another Site",    speed: "1.1s", fast: true },
  { name: "Medium Site",     speed: "2.3s", fast: false },
  { name: "Slow Site",       speed: "3.1s", fast: false },
];

export default function SEORankingAnimation() {
  const [phase, setPhase] = useState<Phase>("showing");
  const [yourPos, setYourPos] = useState(5);

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const advance = () => {
      i = (i + 1) % PHASES.length;
      const next = PHASES[i];
      setPhase(next);

      if (next === "showing") setYourPos(5);

      if (next === "climbing") {
        let pos = 5;
        const iv = setInterval(() => {
          pos--;
          setYourPos(pos);
          if (pos <= 1) clearInterval(iv);
        }, 600);
      }

      timer = setTimeout(advance, DELAYS[next]);
    };

    timer = setTimeout(advance, DELAYS["showing"]);
    return () => clearTimeout(timer);
  }, []);

  const rows: { name: string; speed: string; isYou: boolean; fast: boolean }[] = [];
  for (let pos = 1; pos <= 5; pos++) {
    if (pos === yourPos) {
      rows.push({
        name: "YOUR STORE ⭐",
        speed: phase === "showing" ? "4.2s" : "0.8s",
        isYou: true,
        fast: phase !== "showing",
      });
    } else {
      const idx = pos <= yourPos ? pos - 1 : pos - 2;
      const comp = COMPETITORS[Math.min(idx, COMPETITORS.length - 1)];
      rows.push({ name: comp.name, speed: comp.speed, isYou: false, fast: comp.fast });
    }
  }

  return (
    <div role="img" aria-label="Interactive animation showing Google search rankings improving as website load speed decreases from slow to fast" className="relative w-full aspect-2/1 bg-linear-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden">
      <style>{`
        @keyframes rowSlide { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        .row-in { animation: rowSlide 0.4s ease-out forwards; }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(234,88,12,0.04),transparent_60%)]" />

      {/* Top label */}
      <div className="absolute top-4 left-0 right-0 text-center">
        <span className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em]">
          Google Search Rankings · Speed = Position
        </span>
      </div>

      {/* Search result rows */}
      <div className="absolute inset-x-5 md:inset-x-8 top-11 bottom-10 flex flex-col justify-center gap-1 md:gap-1.5">
        {rows.map((row, idx) => (
          <div
            key={`${idx}-${row.name}`}
            className={`row-in flex items-center gap-2 md:gap-3 px-2.5 md:px-3 py-1.5 rounded-lg border transition-all duration-500 ${
              row.isYou && phase === "top"
                ? "bg-white border-cognac shadow-xs"
                : row.isYou
                ? "bg-stone-50 border-stone-300"
                : "bg-white border-stone-100"
            }`}
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            {/* Position */}
            <span className={`text-[9px] md:text-[10px] font-bold w-4 shrink-0 tabular-nums ${
              row.isYou ? "text-cognac" : "text-stone-300"
            }`}>
              #{idx + 1}
            </span>

            {/* Favicon dot */}
            <div className={`w-3 h-3 rounded-xs shrink-0 ${
              row.isYou ? "bg-cognac" : "bg-stone-200"
            }`} />

            {/* Title */}
            <div className={`flex-1 text-[9px] md:text-[10px] font-bold truncate transition-colors duration-500 ${
              row.isYou ? "text-charcoal" : "text-stone-500"
            }`}>
              {row.name}
              {row.isYou && phase === "top" && <span className="ml-1 text-cognac">· Ranked #1!</span>}
            </div>

            {/* Speed badge */}
            <div className={`shrink-0 text-[7px] md:text-[8px] font-bold px-1.5 py-0.5 rounded transition-all duration-500 ${
              row.fast
                ? "bg-stone-100 text-charcoal border border-stone-200"
                : "bg-stone-100 text-stone-400"
            }`}>
              {row.fast ? `${row.speed} ⚡` : `${row.speed} 🐢`}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="absolute bottom-3 left-0 right-0 text-center px-4">
        <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors duration-500 ${
          phase === "top"      ? "text-cognac"   :
          phase === "climbing" ? "text-stone-500" :
          phase === "speeding" ? "text-cognac"    :
                                  "text-stone-400"
        }`}>
          {phase === "showing"  && "Your store loads in 4.2s, ranked #5 while competitor owns #1"}
          {phase === "speeding" && "Switching to custom Next.js build, load time: 0.8s..."}
          {phase === "climbing" && "Google re-indexing your site · Climbing the rankings ↑"}
          {phase === "top"      && "✓ Speed is Google's #1 ranking signal · You're now #1"}
        </p>
      </div>
    </div>
  );
}
