import { HeroStatusPill, HeroCTAs, HeroTrustSignals, HeroAuditWidget } from "./HeroClient";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center pt-24 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-paper"
      style={{ backgroundColor: "#f5f5f4" }}
    >

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none" />

      {/* Subtle stone grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.03,
        }}
      />

      {/* Soft warm glow — hidden on mobile (expensive GPU blur) */}
      <div className="hidden md:block absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-stone-200/50 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* --- LEFT: EDITORIAL COPY --- */}
        <div className="max-w-2xl">

          {/* Status pill, animated client component */}
          <HeroStatusPill />

          {/* Headline: LCP element, pure server HTML, no JS needed to render */}
          {/* LCP element: inline styles ensure paint before CSS loads */}
          <h1
            className="text-[2rem] md:text-[3.5rem] font-sans font-bold text-charcoal tracking-tight mb-6 leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#1C1917", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "1.5rem" }}
          >
            Your slow website is <br />
            <span
              className="font-serif italic text-cognac"
              style={{ fontStyle: "italic" }}
            >
              costing you revenue.
            </span>
          </h1>

          {/* Subtitle: inline styles for instant render */}
          <p
            className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed max-w-lg font-medium"
            style={{ color: "#57534e", fontSize: "1.125rem", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "32rem", fontWeight: 500 }}
          >
            We replace slow WordPress, Shopify, Wix, Squarespace, and drag and drop sites with{" "}
            <span
              className="text-charcoal font-bold underline decoration-cognac/40 decoration-2 underline-offset-2"
              style={{ color: "#1C1917", fontWeight: 700 }}
            >
              custom built websites that actually perform
            </span>
            . Under 1 second. No monthly fees. No plugin updates. No vendor lock-in.
          </p>

          {/* CTAs, animated client component */}
          <HeroCTAs />

          {/* Trust signals, animated client component */}
          <HeroTrustSignals />

        </div>

        {/* --- RIGHT: AUDIT WIDGET --- */}
        <div className="relative min-h-[400px]">
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10">
            <HeroAuditWidget />
          </div>
        </div>

      </div>
    </section>
  );
}
