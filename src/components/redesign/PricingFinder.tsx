import Link from "next/link";
import { ArrowRight } from "lucide-react";
import QuoteModalButton from "@/components/ui/QuoteModalButton";
import { DISPLAY, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Pricing, homepage version. Redesign pass, 26 Sep 2026 (third pass -- the
// first two, 24 and 26 Sep, built the three-question tier finder now removed
// here; see git history).
// ─────────────────────────────────────────────────────────────────────────────
// Why the quiz came out: a design review named several real problems with it
// on the homepage -- the heading and the question both set in the same heavy
// display type, competing rather than establishing hierarchy; three questions
// answered, then still an enquiry form, so no immediate price; "how many
// pages" as an opening question for someone who has a business problem but no
// site plan yet; and it made an already-long homepage longer for what is,
// after three questions, still just a hand-off to a human. The homepage now
// states the price model in two lines and links onward. The quiz itself isn't
// deleted -- src/lib/tier-quiz.ts and src/components/sections/TierQuiz.tsx are
// untouched -- moving it onto /pricing itself is the next pass, not done
// here, so for now the "Explore pricing" link goes to the existing page as
// it stands today.
// ─────────────────────────────────────────────────────────────────────────────

export default function PricingFinder() {
  return (
    <section aria-labelledby="pricing-title" className="px-6 py-14 md:px-10 md:py-20" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto grid max-w-[1440px] gap-6 border-t pt-12 md:grid-cols-12" style={{ borderColor: T.rule }}>
        <h2
          id="pricing-title"
          className="md:col-span-5"
          style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
        >
          A <span style={{ color: T.accentText }}>clear price</span> before we build.
        </h2>
        <div className="md:col-span-6 md:col-start-6">
          <p className="max-w-[36rem] text-[18px] leading-[1.6]" style={{ color: T.body }}>
            Custom websites start at $1,500. WordPress builds are quoted to scope. Your proposal names the pages,
            features, connections and final price before work starts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/pricing" className="cta-solid inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[16px] font-medium" style={{ backgroundColor: T.ink, color: T.paper }}>
              Explore pricing <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <QuoteModalButton
              cta="pricing_project"
              location="pricing"
              className="inline-flex items-center justify-center border border-[#1C1917] px-6 py-3.5 text-[16px] font-medium text-[#1C1917]"
            >
              Tell us about your project
            </QuoteModalButton>
          </div>
        </div>
      </div>

      <style>{`
        .cta-solid { transition: background-color .3s ease, color .3s ease; }
        .cta-solid:hover, .cta-solid:focus-visible { background-color: ${T.accent} !important; color: #FFFFFF !important; }
        @media (prefers-reduced-motion: reduce) { .cta-solid { transition: none; } }
      `}</style>
    </section>
  );
}
