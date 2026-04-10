"use client";

import { useEffect, useState, useRef } from "react";

type Phase = "counting" | "comparing" | "result" | "reset";

export default function SalesImpactAnimation() {
  const [phase, setPhase] = useState<Phase>("counting");
  const [counter, setCounter] = useState(0);
  const countRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCount = () => {
    setCounter(0);
    if (countRef.current) clearInterval(countRef.current);
    countRef.current = setInterval(() => {
      setCounter(prev => {
        if (prev >= 75000) { clearInterval(countRef.current!); return 75000; }
        return prev + 2000;
      });
    }, 40);
  };

  useEffect(() => {
    startCount();
    const SEQUENCE: { p: Phase; d: number }[] = [
      { p: "comparing", d: 3200 },
      { p: "result",    d: 2200 },
      { p: "reset",     d: 2200 },
      { p: "counting",  d: 800  },
    ];
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const advance = () => {
      const { p, d } = SEQUENCE[i % SEQUENCE.length];
      i++;
      setPhase(p);
      if (p === "counting") startCount();
      timer = setTimeout(advance, d);
    };
    timer = setTimeout(advance, SEQUENCE[0].d);
    return () => { clearTimeout(timer); clearInterval(countRef.current!); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const slowRevenue  = [42, 38, 35, 31, 28, 24]; // declining
  const fastRevenue  = [42, 51, 58, 65, 72, 80]; // growing
  const maxVal = 80;

  return (
    <div role="img" aria-label="Interactive animation showing revenue loss from slow page load times and conversion rate gains from speed improvements" className="relative w-full aspect-[4/3] sm:aspect-2/1 bg-linear-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(234,88,12,0.04),transparent_60%)]" />

      {/* Top label */}
      <div className="absolute top-3 md:top-4 left-0 right-0 text-center px-4">
        <span className="text-[8px] md:text-[9px] font-bold text-stone-400 uppercase tracking-[0.15em] md:tracking-[0.2em]">
          Revenue Impact of Page Speed, Per Year
        </span>
      </div>

      {/* PHASE: counting */}
      {(phase === "counting" || phase === "reset") && (
        <div className="absolute inset-x-0 top-10 bottom-10 flex flex-col items-center justify-center gap-1.5 md:gap-2 px-4">
          <div className="text-4xl md:text-7xl font-bold text-cognac tabular-nums transition-all duration-300 leading-none">
            ${counter.toLocaleString()}
          </div>
          <div className="text-[10px] md:text-xs text-stone-500 text-center leading-tight">per year lost on a 4 second load time</div>
        </div>
      )}

      {/* PHASE: comparing / result — bar chart */}
      {(phase === "comparing" || phase === "result") && (
        <div className="absolute inset-x-4 md:inset-x-8 top-10 bottom-10 flex items-end gap-1 md:gap-2">

          {/* Slow store bars */}
          <div className="flex-1 flex flex-col justify-end gap-0.5">
            <div className="text-[8px] font-bold text-stone-400 text-center mb-1">Slow Store (4s)</div>
            <div className="flex items-end justify-center gap-px">
              {slowRevenue.map((v, i) => (
                <div
                  key={i}
                  className="flex-1 bg-linear-to-t from-stone-400 to-stone-300 rounded-t transition-all duration-700"
                  style={{ height: `${(v / maxVal) * 80}px`, transitionDelay: `${i * 80}ms` }}
                />
              ))}
            </div>
            <div className="flex justify-between px-0.5 mt-1">
              {months.map(m => <span key={m} className="text-[7px] text-stone-400">{m}</span>)}
            </div>
          </div>

          {/* Divider + VS */}
          <div className="flex flex-col items-center justify-center gap-1 px-1 md:px-2 pb-8">
            <div className="h-12 w-px bg-stone-200" />
            <span className="text-[9px] font-bold text-stone-400">VS</span>
            <div className="h-12 w-px bg-stone-200" />
          </div>

          {/* Fast store bars */}
          <div className="flex-1 flex flex-col justify-end gap-0.5">
            <div className="text-[8px] font-bold text-charcoal text-center mb-1">Fast Store (0.8s)</div>
            <div className="flex items-end justify-center gap-px">
              {fastRevenue.map((v, i) => (
                <div
                  key={i}
                  className="flex-1 bg-linear-to-t from-stone-800 to-stone-600 rounded-t transition-all duration-700"
                  style={{
                    height: phase === "result" ? `${(v / maxVal) * 80}px` : `${(fastRevenue[0] / maxVal) * 80}px`,
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between px-0.5 mt-1">
              {months.map(m => <span key={m} className="text-[7px] text-stone-400">{m}</span>)}
            </div>
          </div>
        </div>
      )}

      {/* Bottom */}
      <div className="absolute bottom-3 left-0 right-0 text-center px-4">
        <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors duration-500 ${
          phase === "result"    ? "text-cognac"   :
          phase === "comparing" ? "text-stone-500" :
                                  "text-cognac"
        }`}>
          {(phase === "counting" || phase === "reset") && "Every second of delay costs you customers, permanently"}
          {phase === "comparing" && "Same product, same price. 10x revenue difference by load time."}
          {phase === "result"    && "✓ Switch to custom Next.js · Recover your $75K/year"}
        </p>
      </div>
    </div>
  );
}
