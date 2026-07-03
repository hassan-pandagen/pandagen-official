"use client";

import { useEffect, useState } from "react";

// Visual-semantics: a topic-matched hero for the Wix migration cost post.
// Acts out the post's core fact: Wix has no full export. Data (CSV/XML)
// escapes, but design, layout, and page SEO stay locked inside, which is
// why a migration is really a rebuild. Structurally distinct from every
// other blog animation (split escape/locked columns + lock glyphs).

type Phase = "export" | "split" | "locked" | "rebuild";
const PHASES: Phase[] = ["export", "split", "locked", "rebuild"];
const DELAYS: Record<Phase, number> = { export: 2200, split: 2800, locked: 2600, rebuild: 3000 };

const ESCAPES = [
  { label: "Products", fmt: "CSV" },
  { label: "Contacts", fmt: "CSV" },
  { label: "Orders", fmt: "CSV" },
  { label: "Blog posts", fmt: "XML" },
];

const LOCKED = ["Design", "Page layouts", "Theme", "Page SEO"];

export default function ExportLockAnimation() {
  const [phase, setPhase] = useState<Phase>("export");

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const advance = () => {
      i = (i + 1) % PHASES.length;
      setPhase(PHASES[i]);
      timer = setTimeout(advance, DELAYS[PHASES[i]]);
    };
    timer = setTimeout(advance, DELAYS["export"]);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div role="img" aria-label="Interactive animation showing that Wix has no full site export: products, contacts, orders, and blog posts escape as CSV and XML files, but design, layouts, theme, and page SEO stay locked inside Wix, which is why a migration is a rebuild" className="relative w-full aspect-[4/3] sm:aspect-2/1 bg-linear-to-br from-stone-50 to-white rounded-2xl border border-stone-200 overflow-hidden">
      <style>{`
        @keyframes slideOut { from { opacity: 0; transform: translateX(-14px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes lockShake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-2px); } 75% { transform: translateX(2px); } }
        .slide-out { animation: slideOut 0.4s ease-out forwards; }
        .lock-shake { animation: lockShake 0.3s ease-in-out 2; }
      `}</style>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(234,88,12,0.04),transparent_60%)]" />

      <div className="absolute top-4 left-0 right-0 text-center">
        <span className="text-[11px] font-bold text-stone-600 uppercase tracking-[0.2em]">The Wix Export Problem</span>
      </div>

      {/* Phase 1: hit export */}
      {phase === "export" && (
        <div className="absolute inset-x-0 top-11 bottom-10 flex flex-col items-center justify-center gap-3 px-6">
          <div className="px-5 py-3 bg-white border border-stone-300 rounded-xl shadow-xs text-center">
            <div className="text-sm md:text-base font-bold text-charcoal mb-1">Your Wix Site</div>
            <div className="text-[11px] md:text-xs text-stone-600">pages · design · products · SEO settings</div>
          </div>
          <div className="px-4 py-2 bg-charcoal text-white rounded-full text-xs md:text-sm font-bold">
            Export everything →
          </div>
          <div className="text-[11px] md:text-xs font-bold text-cognac">Searching for the export button…</div>
        </div>
      )}

      {/* Phase 2 + 3: what escapes vs what stays locked */}
      {(phase === "split" || phase === "locked") && (
        <div className="absolute inset-x-5 md:inset-x-10 top-11 bottom-10 flex items-center justify-center gap-4 md:gap-8">
          <div className="flex-1 flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest text-center">Comes out</span>
            {ESCAPES.map((e, i) => (
              <div key={e.label} className="slide-out flex items-center justify-between px-3 py-1.5 bg-white border border-emerald-200 rounded-lg shadow-xs" style={{ animationDelay: `${i * 120}ms` }}>
                <span className="text-xs md:text-sm font-bold text-stone-700">{e.label}</span>
                <span className="text-[11px] md:text-xs font-mono font-bold text-emerald-700">{e.fmt} ✓</span>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-stone-600 uppercase tracking-widest text-center">Stays locked</span>
            {LOCKED.map((l) => (
              <div key={l} className={`flex items-center justify-between px-3 py-1.5 bg-stone-100 border border-stone-300 rounded-lg ${phase === "locked" ? "lock-shake" : ""}`}>
                <span className="text-xs md:text-sm font-bold text-stone-600">{l}</span>
                <span className="text-[11px] md:text-xs font-bold text-stone-500">🔒</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Phase 4: the rebuild */}
      {phase === "rebuild" && (
        <div className="absolute inset-x-5 md:inset-x-10 top-11 bottom-10 flex items-center justify-center gap-3 md:gap-6">
          <div className="flex-1 flex flex-col items-center gap-1.5 opacity-50">
            <span className="text-[11px] font-bold text-stone-600 uppercase tracking-widest">Old Wix site</span>
            <div className="w-full px-3 py-4 bg-stone-100 border border-stone-300 rounded-xl text-center">
              <span className="text-xs md:text-sm font-bold text-stone-600">Locked format</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-0.5 shrink-0">
            <span className="text-lg md:text-xl text-cognac font-bold">→</span>
            <span className="text-[11px] font-bold text-stone-600">301 map</span>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1.5">
            <span className="text-[11px] font-bold text-charcoal uppercase tracking-widest">Rebuilt custom</span>
            <div className="w-full px-3 py-4 bg-white border-2 border-cognac rounded-xl text-center shadow-xs">
              <span className="text-xs md:text-sm font-bold text-charcoal">You own everything</span>
              <div className="text-[11px] md:text-xs text-stone-600 mt-0.5">90+ PageSpeed · exports anything</div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 left-0 right-0 text-center px-4">
        <p className={`text-[11px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-500 ${phase === "rebuild" ? "text-cognac" : "text-stone-600"}`}>
          {phase === "export" && "Step one of leaving Wix: try to take your site with you"}
          {phase === "split" && "Only your data escapes, as CSV and XML files"}
          {phase === "locked" && "Design, layout, and page SEO cannot leave Wix"}
          {phase === "rebuild" && "✓ That is why a migration is a rebuild, and why you end up owning it"}
        </p>
      </div>
    </div>
  );
}
