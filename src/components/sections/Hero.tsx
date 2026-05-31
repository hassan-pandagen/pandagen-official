import { Zap, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { HeroCTAs, HeroAuditWidget } from "./HeroClient";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden bg-paper pt-20 md:pt-24 lg:pt-28"
      style={{
        backgroundColor: "#f5f5f4",
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

          {/* Headline: LCP candidate, pure server HTML, inline fontFamily forces instant paint.
              AEO + first-mover urgency — the one claim no competitor can copy. */}
          <h1
            className="text-[2rem] md:text-[3.5rem] font-sans font-bold text-charcoal tracking-tight mb-4 leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#1C1917", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "1rem", fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}
          >
            Get in front of AI search{" "}
            <span
              className="font-serif italic text-cognac"
              style={{ fontStyle: "italic" }}
            >
              before your competitor does.
            </span>
          </h1>

          {/* Subtitle: LCP element. Inline fontFamily forces system-font paint instantly.
              Carries the second moat (subscription savings) + the mechanism (custom code) + price. */}
          <p
            className="text-lg md:text-xl text-stone-600 mb-3 leading-relaxed max-w-lg font-medium"
            style={{ color: "#57534e", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "32rem", fontWeight: 500, display: "block", visibility: "visible", fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}
          >
            We rebuild your slow WordPress or Shopify site into{" "}
            <span className="text-charcoal font-semibold" style={{ color: "#1C1917", fontWeight: 600 }}>
              custom code that ChatGPT, Claude and Google AI cite
            </span>
            , and cut the monthly subscriptions that come with it by 40 to 70%.<sup className="text-cognac">*</sup>
          </p>

          {/* Price + ownership on its own line so it never breaks mid-phrase */}
          <p
            className="text-lg md:text-xl text-charcoal mb-3 font-bold max-w-lg"
            style={{ color: "#1C1917", fontSize: "1.125rem", fontWeight: 700, fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}
          >
            <span className="whitespace-nowrap">Fixed pricing from $1,500.</span>{" "}
            <span className="whitespace-nowrap">You own the code.</span>
          </p>

          {/* Honest "as cited" proof line — defensible: we ARE cited, not claiming to be THE recommendation */}
          <div className="mb-5">
            <p className="text-sm font-semibold text-charcoal flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cognac shrink-0" />
              Already cited by ChatGPT, Claude and Perplexity.
            </p>
            <p className="text-xs font-normal text-stone-400 italic mt-1">*40 to 70% based on 3-year cost vs replaced subscriptions. Results vary.</p>
          </div>

          {/* CTAs, animated client component */}
          <HeroCTAs />

          {/* Consolidated rating line — one credible line beats four "suspiciously perfect" badges */}
          <p className="mt-5 text-sm font-bold text-stone-600 flex items-center gap-2 flex-wrap">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span>5.0 across Clutch, Trustpilot, Google &amp; GoodFirms</span>
          </p>

          {/* PageSpeed Guarantee — the single strongest risk-reversal (verifiable + unique) */}
          <div className="mt-5 inline-flex items-start gap-3 px-4 py-3 bg-white border border-cognac/30 rounded-xl shadow-xs max-w-lg">
            <ShieldCheck className="w-5 h-5 text-cognac shrink-0 mt-0.5" />
            <p className="text-sm text-charcoal leading-snug">
              <span className="font-bold">Our guarantee:</span> if your new site doesn&apos;t score{" "}
              <span className="font-bold text-orange-800">90+ on Google PageSpeed</span>, we refund 100%. In writing.
            </p>
          </div>

          {/* Benefits strip — features as a quiet single line, not a competing 2x2 grid */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone-500 font-medium">
            <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-cognac shrink-0" /> &lt;1s Load Time</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-charcoal shrink-0" /> Bank Grade Security</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-charcoal shrink-0" /> Zero Maintenance</span>
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
