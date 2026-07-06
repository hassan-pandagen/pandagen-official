"use client";

import { useEffect, useState } from "react";

// Visual-semantics: a topic-matched hero for the broken-ad-tracking post.
// Acts out the post's core fact: real sales happen, but the browser pixel
// leaks a share of them (iOS ATT, ad blockers, Safari's 7-day cap), so Meta
// under-reports. The server-side CAPI pipe carries every conversion through.
// Structurally distinct from every other blog animation (dual-pipe flow +
// leak markers + EMQ meter).

type Phase = "sales" | "leak" | "capi" | "result";
const PHASES: Phase[] = ["sales", "leak", "capi", "result"];
const DELAYS: Record<Phase, number> = { sales: 2200, leak: 3000, capi: 2800, result: 2600 };

const LEAKS = [
  { label: "iOS opt-outs", lost: "blocked" },
  { label: "Ad blockers", lost: "blocked" },
  { label: "Safari 7-day cap", lost: "expired" },
];

export default function SignalLeakAnimation() {
  const [phase, setPhase] = useState<Phase>("sales");

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const advance = () => {
      i = (i + 1) % PHASES.length;
      setPhase(PHASES[i]);
      timer = setTimeout(advance, DELAYS[PHASES[i]]);
    };
    timer = setTimeout(advance, DELAYS["sales"]);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div role="img" aria-label="Interactive animation showing how browser pixel tracking leaks conversions to iOS opt-outs, ad blockers, and Safari's 7-day cookie cap, so Meta under-reports sales, while server-side Conversions API tracking carries every conversion through and lifts Event Match Quality to 9.0" className="relative w-full aspect-[4/3] sm:aspect-2/1 bg-linear-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden">
      <style>{`
        @keyframes dropIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeLeak { from { opacity: 1; } to { opacity: 0.25; } }
        .drop-in { animation: dropIn 0.35s ease-out forwards; }
        .fade-leak { animation: fadeLeak 0.8s ease-out forwards; }
      `}</style>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(234,88,12,0.04),transparent_60%)]" />

      <div className="absolute top-4 left-0 right-0 text-center">
        <span className="text-[11px] font-bold text-stone-600 uppercase tracking-[0.2em]">Where Your Ad Conversions Go</span>
      </div>

      {/* Phase 1: 10 real sales */}
      {phase === "sales" && (
        <div className="absolute inset-x-0 top-11 bottom-10 flex flex-col items-center justify-center gap-3 px-6">
          <div className="flex gap-1.5">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="drop-in w-6 h-8 md:w-8 md:h-10 bg-emerald-100 border border-emerald-300 rounded-md flex items-center justify-center text-xs md:text-sm" style={{ animationDelay: `${i * 90}ms` }}>🛒</div>
            ))}
          </div>
          <div className="text-sm md:text-base font-bold text-charcoal">10 real sales from your ads</div>
          <div className="text-[11px] md:text-xs text-stone-600">Your store recorded every one of them</div>
        </div>
      )}

      {/* Phase 2: the pixel path leaks */}
      {phase === "leak" && (
        <div className="absolute inset-x-5 md:inset-x-10 top-11 bottom-10 flex flex-col items-center justify-center gap-2.5">
          <div className="text-[11px] font-bold text-stone-600 uppercase tracking-widest">Browser pixel path</div>
          <div className="flex gap-1.5">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className={`w-6 h-8 md:w-8 md:h-10 border rounded-md flex items-center justify-center text-xs md:text-sm ${i < 5 ? "bg-emerald-100 border-emerald-300" : "fade-leak bg-stone-100 border-stone-300"}`} style={i >= 5 ? { animationDelay: `${(i - 5) * 250}ms` } : undefined}>🛒</div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-1.5">
            {LEAKS.map((l) => (
              <span key={l.label} className="px-2.5 py-1 bg-red-50 border border-red-200 rounded-full text-[11px] md:text-xs font-bold text-red-700">✕ {l.label}</span>
            ))}
          </div>
          <div className="text-sm md:text-base font-bold text-charcoal">Meta only saw 5 of 10</div>
        </div>
      )}

      {/* Phase 3: CAPI pipe */}
      {phase === "capi" && (
        <div className="absolute inset-x-5 md:inset-x-10 top-11 bottom-10 flex flex-col items-center justify-center gap-2.5">
          <div className="text-[11px] font-bold text-charcoal uppercase tracking-widest">Server-side path (Conversions API)</div>
          <div className="flex gap-1.5">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="drop-in w-6 h-8 md:w-8 md:h-10 bg-emerald-100 border border-emerald-300 rounded-md flex items-center justify-center text-xs md:text-sm" style={{ animationDelay: `${i * 70}ms` }}>🛒</div>
            ))}
          </div>
          <div className="px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-[11px] md:text-xs font-bold text-stone-700">
            your server → Meta · nothing in the browser can block it
          </div>
          <div className="text-sm md:text-base font-bold text-charcoal">All 10 arrive, with identifiers attached</div>
        </div>
      )}

      {/* Phase 4: EMQ result */}
      {phase === "result" && (
        <div className="absolute inset-x-0 top-11 bottom-10 flex flex-col items-center justify-center gap-2 px-6">
          <div className="text-[11px] font-bold text-stone-600 uppercase tracking-widest">Event Match Quality (Lead)</div>
          <div className="flex items-end gap-1">
            <span className="text-5xl md:text-6xl font-bold text-cognac leading-none">9.0</span>
            <span className="text-lg md:text-xl font-bold text-stone-500 pb-1">/10</span>
          </div>
          <div className="text-[11px] md:text-xs text-stone-600 text-center">Panda Patches, our live store, after wiring CAPI with hashed email, fbp, fbc</div>
        </div>
      )}

      <div className="absolute bottom-4 left-0 right-0 text-center px-4">
        <p className={`text-[11px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-500 ${phase === "result" ? "text-cognac" : "text-stone-600"}`}>
          {phase === "sales" && "Every sale happened. The question is what Meta gets to see."}
          {phase === "leak" && "The pixel leaks: iOS, ad blockers, and Safari eat your signal"}
          {phase === "capi" && "Server-side events cannot be blocked by the browser"}
          {phase === "result" && "✓ Full signal in, better optimization out"}
        </p>
      </div>
    </div>
  );
}
