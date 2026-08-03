import Link from "next/link";
import { Sparkles } from "lucide-react";
import { HeroCTAs } from "./HeroClient";
import AskExpertsButton from "@/components/ui/AskExpertsButton";
import HeroLeadForm from "@/components/forms/HeroLeadForm";

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

      {/* Soft warm glow, hidden on mobile (expensive GPU blur) */}
      <div className="hidden md:block absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-stone-200/50 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">

        {/* --- LEFT: EDITORIAL COPY --- */}
        <div className="max-w-2xl">

          {/* Founder trust pill: replaces generic "Accepting Q2 Clients" with Hassan signature */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-300 text-xs font-bold uppercase tracking-widest text-stone-600 mb-5 shadow-xs">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cognac" />
            </span>
            SEO-safe migrations &middot; Fixed scope &middot; Documented handover
          </div>

          {/* Headline: LCP candidate, pure server HTML, inline fontFamily forces instant paint.
              Structure is deliberate: the first clause carries the searched problem
              (people query "wix too slow", "woocommerce too slow", not "custom Next.js"),
              the second carries the differentiator. Problem first, payoff second.

              The second clause describes how WE build, never what other platforms
              cannot do. An earlier version read "a site AI search can actually read",
              which entails that WordPress, Wix and Webflow sites cannot be read. They
              can, and most pages AI engines cite today are built on them. Keep this
              clause about how we build; do not reintroduce a comparison. Plain words
              only, no "server-rendered" or "structured data" in the headline. */}
          <h1
            className="text-[2rem] md:text-[3.5rem] font-sans font-bold text-charcoal tracking-tight mb-4 leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#1C1917", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "1rem" }}
          >
            Get in front of AI search{" "}
            <span
              className="font-serif italic text-cognac"
              style={{ fontStyle: "italic" }}
            >
              before your competitor does.
            </span>
          </h1>

          {/* Clarifying subhead: names the platforms people search for, then the AI engines.
              Soft-styled so it supports the headline without competing. */}
          <p
            className="text-lg md:text-xl font-medium mb-4 max-w-xl leading-snug"
            style={{ color: "#44403c" }}
          >
            We build custom Next.js sites that put a clear, quotable answer on the questions your
            buyers actually ask, in the place{" "}
            <span style={{ color: "#1C1917", fontWeight: 700 }}>ChatGPT, Claude, Perplexity and Google AI</span>{" "}
            go looking. Moving off WordPress, Wix, Squarespace, Webflow or GoHighLevel is how most
            clients start, and you own the code outright.
          </p>

          {/* One proof line with cited proof, ownership, and price in a tight format. */}
          <p className="text-sm font-semibold text-charcoal flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-cognac shrink-0" />
            Our own pages are cited in Google&apos;s AI Overviews. Custom code you own outright, built to 90+ PageSpeed, fixed pricing from $1,500.
          </p>

          {/* CTAs, animated client component */}
          <HeroCTAs />

          {/* Low-friction door: opens chat for the curious-but-not-ready-to-quote majority */}
          <AskExpertsButton className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cognac hover:text-cognac/80 transition-colors" />

        </div>

        {/* --- RIGHT: INLINE LEAD CAPTURE ---
            This slot previously mounted the audit widget. It was moved to /free-audit
            for two reasons: it converted no leads from here, and the fallback-to-real
            swap was the page's entire layout shift. The form that replaced it renders
            on first paint with a reserved height, so this column cannot shift. */}
        <div className="relative lg:-mt-8">
          <div className="hidden md:block absolute -top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/50 blur-3xl rounded-full pointer-events-none" />
          <HeroLeadForm />
          <p className="relative z-10 mt-3 text-center text-sm text-stone-600">
            Just exploring?{" "}
            <Link href="/free-audit" className="font-semibold text-cognac underline-offset-4 hover:underline">
              Run a free technical scan
            </Link>{" "}
            of your site first.
          </p>
        </div>

      </div>
    </section>
  );
}
