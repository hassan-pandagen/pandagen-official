import { Sparkles } from "lucide-react";
import { HeroCTAs, HeroAuditWidget } from "./HeroClient";
import AskExpertsButton from "@/components/ui/AskExpertsButton";

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
            Built by Hassan Jamal &middot; Austin, TX &middot; Featured in Woman&apos;s World
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

          {/* Clarifying subhead: explains the H1 in plain terms + names the AI platforms.
              Soft-styled so it supports the headline without competing. */}
          <p
            className="text-lg md:text-xl font-medium mb-4 max-w-xl leading-snug"
            style={{ color: "#44403c", fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}
          >
            We build the sites{" "}
            <span style={{ color: "#1C1917", fontWeight: 700 }}>ChatGPT, Claude and Google AI recommend</span>, so when your buyers ask who to buy from, you&apos;re the answer, not your competitor.
          </p>

          {/* One proof line: reason to believe — cited (proof) + ownership + price, tight. */}
          <p className="text-sm font-semibold text-charcoal flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-cognac shrink-0" />
            Already cited by ChatGPT, Claude and Perplexity. Custom code you own, from $1,500.
          </p>

          {/* CTAs, animated client component */}
          <HeroCTAs />

          {/* Low-friction door: opens chat for the curious-but-not-ready-to-quote majority */}
          <AskExpertsButton className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cognac hover:text-cognac/80 transition-colors" />

        </div>

        {/* --- RIGHT: AUDIT WIDGET --- */}
        <div
          className="relative lg:min-h-[400px] lg:-mt-8"
          style={{ contain: "layout" }}
        >
          {/* Fixed size + fixed vertical anchor so the glow never reflows when the
              audit widget swaps from fallback to real (was the CLS 0.122 culprit). */}
          <div className="hidden md:block absolute -top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/50 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10">
            <HeroAuditWidget />
          </div>
        </div>

      </div>
    </section>
  );
}
