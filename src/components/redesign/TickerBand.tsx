import { MONO, T } from "@/components/redesign/tokens";

// A slow band of studio facts under the hero. Redesign candidate, 24 Sep 2026.
// Every item is a claim the site already makes elsewhere (hero, footer,
// company-facts.ts); nothing here is new copy. CSS only: the list is rendered
// twice and translated by half its width, so the loop is seamless. The second
// copy is hidden from assistive tech, and the band stands still for reduced
// motion and while hovered.

// 21 Nov 2026, Imran's decisions: the band carries the new terms; each is stated in
// full in HowWeWork and PricingFinder.
const items = [
  "Founder-built",
  "Stafford, Texas",
  "US Eastern hours",
  "Fixed price in writing",
  "Pay 30 / 40 / 30",
  "You own every account",
  "AI-search setup in every build",
  "Websites from $1,500",
  "Business systems from $10,000",
];

export default function TickerBand() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center whitespace-nowrap px-6 text-[13px] uppercase tracking-[0.14em]" style={{ fontFamily: MONO }}>
          {t}
          <span aria-hidden="true" className="ml-12 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: T.accent }} />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="ticker relative overflow-hidden border-y py-4" style={{ borderColor: T.rule, backgroundColor: T.paper, color: T.ink }}>
      <div className="ticker-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
      <style>{`
        .ticker-track { animation: ticker 48s linear infinite; }
        .ticker:hover .ticker-track { animation-play-state: paused; }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .ticker-track { animation: none; } }
      `}</style>
    </div>
  );
}
