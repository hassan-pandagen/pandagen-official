"use client";

import { useState } from "react";
import Image from "next/image";
import { MONO, T } from "@/components/redesign/tokens";

// One real interaction on this page, per the design brief: switch between
// actual screenshots of the two steps the live calculator has today.
// Screenshots taken live, 27 Sep 2026, walking https://www.pandapatches.com's
// embroidered-patch calculator: select options, then the form asks for name
// and email before "Check Best Prices." That second step was NOT clicked
// (would submit a real name/email into the live lead system) -- the two
// images stop at "configure" and "the submit form", not "price shown".
//
// aria-pressed buttons rather than a full tablist pattern: this is a simple
// two-state toggle, not a widget with arrow-key navigation, and aria-pressed
// says exactly what it is without half-implementing a bigger pattern.
const STEPS = [
  {
    key: "configure",
    label: "1. Choose your options",
    src: "/work/panda-patches-calculator-configure.png",
    alt: "The live Panda Patches calculator with Iron On backing and a circle shape selected, size and quantity set.",
  },
  {
    key: "submit",
    label: "2. Send it for pricing",
    src: "/work/panda-patches-calculator-submit.png",
    alt: "The same calculator's final step: upload artwork, name and email, then Check Best Prices.",
  },
];

export default function CalculatorToggle() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Calculator steps">
        {STEPS.map((s, i) => (
          <button
            key={s.key}
            type="button"
            aria-pressed={active === i}
            onClick={() => setActive(i)}
            className="calc-toggle-btn px-4 py-2 text-[13px] font-medium"
            style={{
              fontFamily: MONO,
              border: `1px solid ${T.rule}`,
              backgroundColor: active === i ? T.ink : "transparent",
              color: active === i ? T.paper : T.body,
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div
        className="relative mt-4 flex items-center justify-center overflow-hidden border"
        style={{ height: 440, backgroundColor: T.paperHi, borderColor: T.rule }}
      >
        <div key={STEPS[active].key} className="calc-toggle-frame relative h-full w-full">
          <Image src={STEPS[active].src} alt={STEPS[active].alt} fill sizes="(min-width: 768px) 700px, 100vw" className="object-contain" />
        </div>
      </div>

      <style>{`
        .calc-toggle-btn { transition: background-color .2s ease, color .2s ease; }
        .calc-toggle-frame { animation: calc-fade-in .3s ease; }
        @keyframes calc-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) { .calc-toggle-btn, .calc-toggle-frame { transition: none; animation: none; } }
      `}</style>
    </div>
  );
}
