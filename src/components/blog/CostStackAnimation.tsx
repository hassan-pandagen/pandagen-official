"use client";

import { useEffect, useState } from "react";

// Visual-semantics: a topic-matched hero for cost / pricing posts.
// Recurring platform & SaaS fees stack up month after month, then collapse
// against a single one-time custom build. Structurally distinct from the
// other blog animations (accumulating fee stack + running total).

type Phase = "stacking" | "annual" | "compare" | "result";
const PHASES: Phase[] = ["stacking", "annual", "compare", "result"];
const DELAYS: Record<Phase, number> = { stacking: 3200, annual: 2200, compare: 2600, result: 2400 };

const FEES = [
  { label: "Managed hosting", amt: 35 },
  { label: "Plugins / apps", amt: 80 },
  { label: "CMS / page builder", amt: 40 },
  { label: "Forms / email tools", amt: 25 },
  { label: "Maintenance retainer", amt: 60 },
];
const MONTHLY = FEES.reduce((s, f) => s + f.amt, 0); // 240
const THREE_YR = MONTHLY * 36;

export default function CostStackAnimation() {
  const [phase, setPhase] = useState<Phase>("stacking");
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const advance = () => {
      i = (i + 1) % PHASES.length;
      const next = PHASES[i];
      setPhase(next);
      if (next === "stacking") {
        setRevealed(0);
        let r = 0;
        const iv = setInterval(() => { r++; setRevealed(r); if (r >= FEES.length) clearInterval(iv); }, 520);
      }
      timer = setTimeout(advance, DELAYS[next]);
    };
    // kick off first stack reveal immediately
    let r = 0;
    const iv = setInterval(() => { r++; setRevealed(r); if (r >= FEES.length) clearInterval(iv); }, 520);
    timer = setTimeout(advance, DELAYS["stacking"]);
    return () => { clearTimeout(timer); clearInterval(iv); };
  }, []);

  const runningTotal = FEES.slice(0, revealed).reduce((s, f) => s + f.amt, 0);

  return (
    <div role="img" aria-label="Interactive animation showing recurring platform and SaaS fees stacking up to thousands per year versus a one-time custom build cost" className="relative w-full aspect-[4/3] sm:aspect-2/1 bg-linear-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden">
      <style>{`@keyframes feeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } } .fee-in { animation: feeIn 0.35s ease-out forwards; }`}</style>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(234,88,12,0.04),transparent_60%)]" />

      <div className="absolute top-4 left-0 right-0 text-center">
        <span className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em]">True Cost: Platform Fees vs Custom Build</span>
      </div>

      {/* Stacking fees */}
      {phase === "stacking" && (
        <div className="absolute inset-x-5 md:inset-x-10 top-11 bottom-10 flex flex-col justify-center gap-1.5">
          {FEES.slice(0, revealed).map((f, i) => (
            <div key={f.label} className="fee-in flex items-center justify-between px-3 py-1.5 bg-white border border-stone-200 rounded-lg shadow-xs" style={{ animationDelay: `${i * 40}ms` }}>
              <span className="text-[10px] md:text-xs font-bold text-stone-500">{f.label}</span>
              <span className="text-[10px] md:text-xs font-mono font-bold text-stone-400">${f.amt}/mo</span>
            </div>
          ))}
          <div className="flex items-center justify-between px-3 py-1.5 mt-1 border-t border-stone-200">
            <span className="text-[10px] md:text-xs font-bold text-charcoal uppercase tracking-wider">Running total</span>
            <span className="text-base md:text-lg font-bold text-cognac tabular-nums">${runningTotal}/mo</span>
          </div>
        </div>
      )}

      {/* Annual */}
      {phase === "annual" && (
        <div className="absolute inset-x-0 top-11 bottom-10 flex flex-col items-center justify-center gap-1.5 px-4">
          <div className="text-4xl md:text-6xl font-bold text-cognac tabular-nums leading-none">${(MONTHLY * 12).toLocaleString()}</div>
          <div className="text-[10px] md:text-xs text-stone-500 text-center">per year, every year, just to keep the lights on</div>
        </div>
      )}

      {/* Compare */}
      {(phase === "compare" || phase === "result") && (
        <div className="absolute inset-x-5 md:inset-x-10 top-11 bottom-10 flex items-center justify-center gap-4 md:gap-8">
          <div className="flex-1 flex flex-col items-center gap-1.5">
            <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">Platform · 3 yrs</span>
            <div className="w-full bg-linear-to-t from-stone-400 to-stone-300 rounded-t-lg" style={{ height: 70 }} />
            <span className="text-sm md:text-base font-bold text-stone-500 tabular-nums">${THREE_YR.toLocaleString()}</span>
            <span className="text-[8px] text-stone-400">and it never stops</span>
          </div>
          <span className="text-[10px] font-bold text-stone-300 shrink-0 pb-8">VS</span>
          <div className="flex-1 flex flex-col items-center gap-1.5">
            <span className="text-[8px] font-bold text-charcoal uppercase tracking-widest">Custom · once</span>
            <div className="w-full bg-linear-to-t from-stone-800 to-stone-600 rounded-t-lg transition-all duration-700" style={{ height: phase === "result" ? 22 : 70 }} />
            <span className="text-sm md:text-base font-bold text-cognac tabular-nums">one-time</span>
            <span className="text-[8px] text-stone-400">then ~$0/mo, you own it</span>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 left-0 right-0 text-center px-4">
        <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors duration-500 ${phase === "result" ? "text-cognac" : phase === "compare" ? "text-stone-500" : "text-stone-400"}`}>
          {phase === "stacking" && "Every tool is a small monthly fee, until you add them up"}
          {phase === "annual" && "Recurring fees are rent. You never stop paying."}
          {phase === "compare" && "Three years of platform fees vs one custom build"}
          {phase === "result" && "✓ Pay once, own the code, stop renting your software"}
        </p>
      </div>
    </div>
  );
}
