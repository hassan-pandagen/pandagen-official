import Link from "next/link";
import { Sparkles } from "lucide-react";
import { HeroCTAs } from "./HeroClient";
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
            Website migrations &middot; Fixed scope &middot; Code you own
          </div>

          {/* Headline: LCP candidate, pure server HTML, inline fontFamily forces instant paint.

              ONE IDEA. A previous version asked a qualifying question ("Outgrown
              WordPress, Wix or Webflow?") and made a positioning claim ("built for
              the way AI picks its answers") in the same headline. The italic half
              was both the longer and the vaguer of the two, so the emphasis landed
              on the abstraction. If you add a second clause here, cut the first.

              The platforms are named ONCE, in the subhead. They were previously in
              both, longer the second time, which spent the most valuable space on
              the site re-reading the same list.

              This clause describes how WE build, never what other platforms cannot
              do. An earlier version read "a site AI search can actually read", which
              entails that WordPress, Wix and Webflow sites cannot be read. They can,
              and most pages AI engines cite today are built on them. Do not
              reintroduce a comparison. Plain words only, no "server-rendered" or
              "structured data" in the headline. */}
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
            We move you off WordPress, Wix, Squarespace or Webflow onto{" "}
            <span style={{ color: "#1C1917", fontWeight: 700 }}>custom Next.js you own from the start</span>, without
            losing the traffic you already have. So when someone asks{" "}
            <span style={{ color: "#1C1917", fontWeight: 700 }}>ChatGPT, Claude or Google</span>{" "}
            who to choose, your pages are what they see.
          </p>

          {/* One proof line with cited proof, ownership, and price in a tight format. */}
          <p className="text-sm font-semibold text-charcoal flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-cognac shrink-0" />
            Our own pages are cited in Google&apos;s AI Overviews. Fixed price from $1,500, no minimum project size, and you own the code.
          </p>

          {/* CTAs, animated client component */}
          <HeroCTAs />

          {/* The "Ask our experts" text link used to sit here, making three competing
              actions in the hero. Removed to leave two. It is a genuine low-friction
              door for people not ready to request a plan, so if hero engagement drops
              this is the first thing to put back: one import and one line. */}

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
