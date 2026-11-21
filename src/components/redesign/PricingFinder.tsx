import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import Link from "next/link";
import PriceAmount from "./PriceAmount";
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
// states the price model in two lines and links onward, and the "Explore
// pricing" link goes to the existing page. TierQuiz.tsx was later deleted, and
// its questions file src/lib/tier-quiz.ts went in the 13 Oct 2026 launch
// cleanup; both are in git history if the quiz ever moves onto /pricing.
// ─────────────────────────────────────────────────────────────────────────────

// 21 Nov 2026, Imran's decisions: the homepage shows the package and both monthly
// plans. Published "from $10,000"; the full package is quoted at $12,000 and reaches
// $10,000 only by removing named parts. The SEO + Google Ads plan figure is the low end
// of Hassan's $1,300 to $1,500 range: confirm it before this is pushed.
const PLANS = [
  { name: "Website", price: "$1,500", unit: "", body: "A custom website with a content editor you use yourself. Pay 30 / 70." },
  // 21 Nov 2026: migration row, matching /services/wordpress-migration (Starter from $1,500).
  { name: "Moving your website", price: "$1,500", unit: "", body: "Off WordPress, Wix, Squarespace or Shopify, with every page and post mapped and a redirect for every old URL. MC Patches moved off WordPress with us. The price depends on how many pages and posts you have." },
  {
    name: "Website + business system",
    price: "$10,000",
    unit: "",
    body: "The website, a client portal, and the backend that runs your bookings, payments, reminders, follow-ups and accounting sync, built around how you work. Every build includes the AI-search setup, so ChatGPT and Google's AI can read and quote your answers. Starts with a free written check. Pay 30 / 40 / 30. The full package is usually $12,000; we reach $10,000 by leaving out parts you don't need, such as the client portal or the accounting sync.",
  },
  { name: "Website Care & SEO Plan", price: "$500", unit: " a month", body: "Hosting, maintenance, fixes, support, 2 developer hours, 4 blog posts a month and on-page SEO, and keeping your AI-search setup current. You approve every post before it goes live." },
  { name: "SEO + Google Ads Plan", price: "$1,300", unit: " a month", body: "Everything in Care & SEO, plus Google Ads management. We send a plain write-up before changing anything, and you approve every change. Ad spend is paid to Google directly." },
];

export default function PricingFinder() {
  return (
    <section aria-labelledby="pricing-title" className="px-6 py-6 md:px-10 md:py-20" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto grid max-w-[1440px] gap-6 border-t pt-6 md:grid-cols-12 md:pt-12" style={{ borderColor: T.rule }}>
        <h2
          id="pricing-title"
          className="md:col-span-5"
          style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
        >
          A <HeadingEmphasis text="clear price" phrase="clear price" /> before we build.
        </h2>
        <div className="md:col-span-6 md:col-start-6">
          <ul className="border-t" style={{ borderColor: T.rule }}>
            {PLANS.map((p) => (
              <li key={p.name} className="grid gap-2 border-b py-5 sm:grid-cols-[1fr_auto] sm:gap-6" style={{ borderColor: T.rule }}>
                <div>
                  <h3 className="text-[19px] font-semibold" style={{ color: T.ink }}>{p.name}</h3>
                  <p className="mt-1 max-w-[36rem] text-[16px] leading-[1.6]" style={{ color: T.body }}>{p.body}</p>
                </div>
                <p className="text-[19px] font-semibold sm:text-right" style={{ color: T.ink }}>
                  from <PriceAmount value={p.price} />{p.unit}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-[36rem] text-[15px] leading-[1.6]" style={{ color: T.body }}>
            Monthly plans are optional; no build needs one to keep working. Your written proposal names every part and the final price before work starts.
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
