"use client";

// PROTOTYPE: interactive "click a thumbnail, it becomes the big featured product"
// hero for a Gen-Z store. Click a product in the strip; the big card swaps with a
// light fade/scale (not a heavy morph) and its description + price + CTA stagger in.
// Placeholders are gradients; swap `gradient` for a real product image when ready.

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  gradient: string; // placeholder; replace with a real product photo later
};

const PRODUCTS: Product[] = [
  {
    id: "bomber",
    name: "Oversized Bomber",
    category: "Jackets",
    price: "$128",
    description: "Boxy fit, heavyweight shell, ribbed cuffs. The one piece that finishes every fit.",
    gradient: "from-orange-500 via-rose-500 to-pink-600",
  },
  {
    id: "puffer",
    name: "Cropped Puffer",
    category: "Women's",
    price: "$96",
    description: "Cropped, quilted, impossibly warm. Throw it over anything and look intentional.",
    gradient: "from-violet-500 via-indigo-500 to-blue-600",
  },
  {
    id: "tote",
    name: "Everyday Tote",
    category: "Bags",
    price: "$64",
    description: "Carries your laptop, your gym kit, and your entire life. Built to get thrown around.",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    id: "varsity",
    name: "Varsity Jacket",
    category: "Jackets",
    price: "$148",
    description: "Wool body, leather sleeves, chenille patches. Old-money energy, new-money price.",
    gradient: "from-amber-400 via-orange-500 to-red-600",
  },
  {
    id: "mini",
    name: "Mini Shoulder Bag",
    category: "Bags",
    price: "$72",
    description: "Just enough room for the essentials. The accent that makes the whole look click.",
    gradient: "from-fuchsia-500 via-purple-500 to-violet-700",
  },
];

export default function FeaturedProductHero() {
  const [activeId, setActiveId] = useState(PRODUCTS[0].id);
  const active = PRODUCTS.find((p) => p.id === activeId) ?? PRODUCTS[0];

  return (
    <section className="w-full max-w-5xl rounded-3xl bg-neutral-950 text-white p-5 md:p-8 overflow-hidden">
      {/* Self-contained keyframes so this builds anywhere with no globals edit */}
      <style>{`
        @keyframes fpZoom { from { opacity: 0; transform: scale(1.06); } to { opacity: 1; transform: scale(1); } }
        @keyframes fpRise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* --- FEATURED (the "big" state) --- */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Image area, re-keyed so the fade/scale replays on each selection */}
        <div
          key={`img-${active.id}`}
          className={`relative aspect-[4/5] rounded-2xl bg-gradient-to-br ${active.gradient} overflow-hidden`}
          style={{ animation: "fpZoom 420ms cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-widest bg-black/30 backdrop-blur px-3 py-1.5 rounded-full">
            {active.category}
          </span>
          <span className="absolute bottom-4 right-4 text-white/40 text-xs font-mono">swap for real photo</span>
        </div>

        {/* Copy + CTA, staggered in after the image */}
        <div key={`txt-${active.id}`} className="flex flex-col">
          <span
            className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3"
            style={{ animation: "fpRise 380ms ease-out 60ms both" }}
          >
            New In · {active.category}
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold leading-[1.05] mb-4"
            style={{ animation: "fpRise 380ms ease-out 120ms both" }}
          >
            {active.name}
          </h2>
          <p
            className="text-white/70 text-base leading-relaxed mb-6 max-w-sm"
            style={{ animation: "fpRise 380ms ease-out 180ms both" }}
          >
            {active.description}
          </p>
          <div
            className="flex items-center gap-5"
            style={{ animation: "fpRise 380ms ease-out 240ms both" }}
          >
            <span className="text-2xl font-bold">{active.price}</span>
            <button className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
              Shop {active.name}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* --- THUMBNAIL STRIP (click to feature) --- */}
      <div className="mt-7 md:mt-9 flex gap-3 overflow-x-auto pb-1 -mx-1 px-1 snap-x" tabIndex={0} role="region" aria-label="Scrollable table">
        {PRODUCTS.map((p) => {
          const isActive = p.id === active.id;
          return (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              aria-pressed={isActive}
              aria-label={`Feature ${p.name}`}
              className="group shrink-0 snap-start text-left focus:outline-none"
            >
              <div
                className={`relative w-20 h-24 md:w-24 md:h-28 rounded-xl bg-gradient-to-br ${p.gradient} transition-all duration-300 ${
                  isActive
                    ? "ring-2 ring-white scale-100"
                    : "opacity-60 group-hover:opacity-100 ring-1 ring-white/10"
                }`}
              />
              <p
                className={`mt-2 text-[11px] font-semibold truncate w-20 md:w-24 transition-colors ${
                  isActive ? "text-white" : "text-white/40 group-hover:text-white/70"
                }`}
              >
                {p.name}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
