import Link from "next/link";
import { Sparkles } from "lucide-react";
import { HeroCTAs } from "./HeroClient";
import HeroLeadForm from "@/components/forms/HeroLeadForm";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden bg-paper pt-20 md:pt-24 lg:pt-32"
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

          {/* Trust pill.

              CHANGED 15 Sep 2026. It read "Website migrations · Fixed scope · Code
              you own", which survived the positioning change and then sat directly
              above an H1 about websites generally. It was the first line in the hero
              and it named the old offer, so the first screen made three different
              statements about what this company sells: migrations (pill), websites
              (H1), websites and online stores (subhead).

              The pill now says what you GET rather than what we DO, which is the one
              job the H1 and subhead below do not already cover, so it stops competing
              with them. All three are stated facts, not benefits: a content editor
              ships on every tier, training is part of handover, and the code, design
              files and accounts are yours at the end. See company-facts.ts.

              Do not put an offer or a platform name back in here. If this needs to
              say what we sell, the H1 is already saying it two lines down. */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-300 text-xs font-bold uppercase tracking-widest text-stone-600 mb-3 shadow-xs sm:mb-5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cognac" />
            </span>
            Content editor &middot; Training &middot; Code you own
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
              "structured data" in the headline.

              9 Sep 2026: the headline used to be "Get in front of AI search before
              your competitor does", and the title tag said "Get Cited by AI Search".
              Both made an outcome third parties control into the product, which the
              3 Aug 2026 entity decision had already retired. Migration is the offer;
              being quotable is the differentiator inside it, so the headline now
              names the move and the subhead carries the differentiator. An external
              audit reached the same conclusion independently, calling the jump from
              changing platforms to being chosen by AI a causal leap. */}
          <h1
            className="text-[2rem] md:text-[3.5rem] font-sans font-bold text-charcoal tracking-tight mb-4 leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, color: "#1C1917", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "1rem" }}
          >
            Websites built for{" "}
            <span
              className="font-serif italic text-cognac"
              style={{ fontStyle: "italic" }}
            >
              the way you do business.
            </span>
          </h1>

          {/* POSITIONING CHANGED 15 Sep 2026 by the owner, and it knowingly trades a
              keyword match for reach. The 13 Sep headline targeted "website redesign
              services" (6,600/mo, KD 10) and "website migration services" (720, KD 3)
              and led with three platform names. It also told anyone without a website
              that this firm was not for them, which is why it changed: four or five
              migrations since February against a portfolio that covers websites
              generally, and WordPress, Next.js and Shopify work has converged on
              similar effort and price. Migration is now one route in, and the platform
              names move to a section for people who already have a site.

              The cost is real and nothing replaces it at the same strength: "Websites
              built for the way you do business" targets no term with published volume.
              The migration terms stay on the pages built for them.

              Original note, kept because the point about buyer vocabulary still holds:
              written against external keyword data, not our own GSC --
              GSC only shows what we already rank for, which is a survivorship-biased
              sample. US volume/difficulty, checked 13 Sep: "website redesign services"
              6,600/mo at KD 10 and "website migration services" 720 at KD 3, while
              "nextjs development agency" is 10/mo and "migrate wordpress to nextjs",
              "ai ready website", "ai optimized website" and "get cited by chatgpt" all
              report no volume at all. The headline now uses the two words buyers type
              plus the platform names (wordpress/webflow/wix/squarespace "alternative"
              together are ~1,260/mo at KD 0-6). Framework and AI vocabulary moved to
              the pages whose readers know those words. Plain language is the point:
              the buyer is usually a marketing or ops lead, not an engineer. */}
          <p
            className="text-lg md:text-xl font-medium mb-3 max-w-xl leading-snug sm:mb-4"
            style={{ color: "#44403c" }}
          >
            We design and build{" "}
            <span style={{ color: "#1C1917", fontWeight: 700 }}>business websites and online stores</span>{" "}
            around how your customers enquire and buy. Your team can edit the content, you own the
            code, and every page is built so{" "}
            <span style={{ color: "#1C1917", fontWeight: 700 }}>Google and AI assistants can read it properly</span>.
          </p>

          {/* One proof line with cited proof, ownership, and price in a tight format. */}
          <p className="text-sm font-semibold text-charcoal flex items-center gap-2 mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 text-cognac shrink-0" />
            Websites and online stores from $1,500. Scope and price agreed before work starts, and you work directly with the founders.
          </p>

          {/* Reserve the complete CTA row while the animated component loads.
              Its loading fallback has the same labels, icons and button padding.
              Re-measured 15 Sep 2026 with "Talk to the founders" at 320, 390,
              768, 1024, 1279 and 1440px: the row is 132px when stacked, 60px
              in the wide layout, and 84px at 1024-1279 where the primary wraps.
              Recheck these heights if the label, padding or grid changes. */}
          <div className="min-h-[132px] sm:min-h-[60px] lg:min-h-[84px] xl:min-h-[60px]">
            <HeroCTAs />
          </div>

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
        <div className="relative">
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
