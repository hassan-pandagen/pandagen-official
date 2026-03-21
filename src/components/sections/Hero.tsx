import dynamic from "next/dynamic";

// Client-side animated elements, loaded after h1 already paints
const HeroStatusPill = dynamic(
  () => import("./HeroAnimated").then((m) => m.HeroStatusPill),
  { ssr: true }
);
const HeroCTAs = dynamic(
  () => import("./HeroAnimated").then((m) => m.HeroCTAs),
  { ssr: true }
);
const HeroTrustSignals = dynamic(
  () => import("./HeroAnimated").then((m) => m.HeroTrustSignals),
  { ssr: true }
);

// Audit widget is already a client component
const AuditWidget = dynamic(() => import("@/components/audit/AuditWidget"), {
  ssr: true,
});

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-paper">

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

      {/* Soft warm glow */}
      <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-stone-200/50 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* --- LEFT: EDITORIAL COPY --- */}
        <div className="max-w-2xl">

          {/* Status pill, animated client component */}
          <HeroStatusPill />

          {/* Headline: LCP element, pure server HTML, no JS needed to render */}
          <h1 className="text-5xl md:text-7xl font-sans font-bold text-charcoal tracking-tight mb-6 leading-[1.1]">
            Your slow website is <br />
            <span className="font-serif italic text-cognac">
              costing you revenue.
            </span>
          </h1>

          {/* Subtitle: plain server HTML — no JS dependency, zero LCP penalty */}
          <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed max-w-lg font-medium">
            We replace slow WordPress, Shopify, Wix, Squarespace, and drag and drop sites with{" "}
            <span className="text-charcoal font-bold underline decoration-cognac/40 decoration-2 underline-offset-2">
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
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10">
            <AuditWidget />
          </div>
        </div>

      </div>
    </section>
  );
}
