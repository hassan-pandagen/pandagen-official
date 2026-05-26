import { Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { HeroCTAs, HeroAuditWidget } from "./HeroClient";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden bg-paper"
      style={{
        backgroundColor: "#f5f5f4",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section-sm)",
      }}
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

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">

        {/* --- LEFT: EDITORIAL COPY --- */}
        <div className="max-w-2xl">

          {/* Founder trust pill: replaces generic "Accepting Q2 Clients" with Hassan signature */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-bold uppercase tracking-widest text-stone-500 mb-5 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cognac" />
            </span>
            Built by Hassan Jamal &middot; Austin, TX &middot; 267 Public Commits
          </div>

          {/* Headline: LCP candidate, pure server HTML, inline fontFamily forces instant paint */}
          <h1
            className="text-[2rem] md:text-[3.5rem] font-sans font-bold text-charcoal tracking-tight mb-4 leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#1C1917", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "1rem", fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}
          >
            Your slow website is <br />
            <span
              className="font-serif italic text-cognac"
              style={{ fontStyle: "italic" }}
            >
              costing you revenue.
            </span>
          </h1>

          {/* Subtitle: LCP element. Inline fontFamily forces system-font paint instantly,
              custom font swaps in when ready (zero CLS via size-adjust in globals.css). */}
          <p
            className="text-lg md:text-xl text-stone-600 mb-4 leading-relaxed max-w-lg font-medium"
            style={{ color: "#57534e", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "32rem", fontWeight: 500, display: "block", visibility: "visible", fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}
          >
            We replace slow WordPress, Shopify, and drag-and-drop sites, plus the monthly subscriptions and tools that come with them, with{" "}
            <span
              className="text-charcoal font-bold underline decoration-cognac/40 decoration-2 underline-offset-2"
              style={{ color: "#1C1917", fontWeight: 700 }}
            >
              custom code you own forever
            </span>
            .{" "}
            <span className="text-charcoal font-bold" style={{ color: "#1C1917", fontWeight: 700 }}>
              Fixed pricing from $1,500.
            </span>{" "}
            Most clients cut monthly software spend 40 to 70% over 3 years.<sup className="text-cognac">*</sup>
          </p>

          {/* Methodology footnote for the savings claim — FTC-safe disclosure */}
          <p
            className="text-xs text-stone-500 mb-5 md:mb-6 max-w-lg leading-relaxed"
            style={{ fontStyle: "italic" }}
          >
            *Based on 3-year total cost of ownership vs replaced subscription fees. Methodology and case studies on request. Results vary by stack size.
          </p>

          {/* CTAs, animated client component */}
          <HeroCTAs />

          {/* Platform review badges: 2x2 grid on all sizes, no wrapping ambiguity */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-5 text-xs font-bold text-stone-600 max-w-md">
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>5.0 Clutch <span className="font-normal text-stone-400">(3)</span></span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#00b67a]">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>5.0 Trustpilot <span className="font-normal text-stone-400">(2)</span></span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>5.0 Google <span className="font-normal text-stone-400">(5)</span></span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-cognac">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>5.0 GoodFirms <span className="font-normal text-stone-400">(2)</span></span>
            </span>
          </div>

          {/* Trust signals: 2x2 grid on all sizes, tighter top margin */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-6 text-sm text-stone-500 font-medium max-w-md">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cognac shrink-0" />
              <span>&lt;1s Load Time</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-charcoal shrink-0" />
              <span>Bank Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-charcoal shrink-0" />
              <span>Fixed Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-charcoal shrink-0" />
              <span>Zero Maintenance</span>
            </div>
          </div>

          {/* PageSpeed Guarantee — risk reversal */}
          <div className="mt-5 inline-flex items-start gap-3 px-4 py-3 bg-white border border-cognac/30 rounded-xl shadow-xs max-w-lg">
            <ShieldCheck className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
            <p className="text-sm text-charcoal leading-snug">
              <span className="font-bold">Our guarantee:</span> if your new site doesn&apos;t score{" "}
              <span className="font-bold text-orange-800">90+ on Google PageSpeed</span>, we refund 100%. In writing.
            </p>
          </div>

          {/* Subscription-free build — ownership positioning, factual not promissory */}
          <div className="mt-2 inline-flex items-start gap-3 px-4 py-3 bg-white border border-stone-300 rounded-xl shadow-xs max-w-lg">
            <CheckCircle2 className="w-5 h-5 text-charcoal shrink-0 mt-0.5" />
            <p className="text-sm text-charcoal leading-snug">
              <span className="font-bold">Subscription-free build:</span> full source code handed over on launch.{" "}
              <span className="font-bold">You own it.</span> No platform fees. No monthly license. No vendor lock-in.
            </p>
          </div>

        </div>

        {/* --- RIGHT: AUDIT WIDGET --- */}
        <div
          className="relative lg:min-h-[400px]"
          style={{ contain: "layout" }}
        >
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10">
            <HeroAuditWidget />
          </div>
        </div>

      </div>
    </section>
  );
}
