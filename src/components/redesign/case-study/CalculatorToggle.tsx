import Image from "next/image";
import { MONO, T } from "@/components/redesign/tokens";

// Side by side, not a click-to-reveal toggle. 27 Sep 2026, owner's call after
// seeing the first version live: with only two states to show, forcing a
// click to see the second one added an interaction for its own sake. Side by
// side shows the whole "configure, then send it" story at a glance, no
// interaction required to see either image -- and it's a server component
// again now that there's no state to hold.
//
// Screenshots taken live, 27 Sep 2026, walking https://www.pandapatches.com's
// embroidered-patch calculator: select options, then the form asks for name
// and email before "Check Best Prices." That second step was NOT clicked
// (would submit a real name/email into the live lead system) -- these two
// images stop at "configure" and "the submit form", not "price shown".
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

export default function CalculatorToggle({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      {STEPS.map((s) => (
        <div key={s.key}>
          <p className="mb-1.5 text-[13px] font-medium" style={{ fontFamily: MONO, color: T.body }}>{s.label}</p>
          <div
            className="relative flex items-center justify-center overflow-hidden border"
            style={{ height: compact ? "clamp(200px, 30vh, 280px)" : "360px", backgroundColor: T.paperHi, borderColor: T.rule }}
          >
            <Image src={s.src} alt={s.alt} fill sizes="(min-width: 640px) 350px, 100vw" className="object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
}
