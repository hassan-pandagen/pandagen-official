import { ChevronDown } from "lucide-react";
import { homeFaqs } from "@/data/home-faqs";
import { DISPLAY, DISPLAY_SM, MONO, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Homepage FAQ, redesign pass, 26 Sep 2026 (second pass -- see the 24 Sep note
// in git history for the first, an always-open two-column list).
// ─────────────────────────────────────────────────────────────────────────────
// Why the change: the first pass kept every answer permanently open on the
// premise that Google's FAQPage rich result required the answer to be
// visible without interaction. That rich result no longer exists -- Google
// retired it 7 May 2026 and pulled the documentation in June -- so the
// premise is gone. What still matters, and what this keeps: the answer text
// stays in the server-rendered HTML regardless of open/closed state. Native
// <details>/<summary> does exactly that -- nothing is fetched or inserted on
// click, only the CSS state changes -- so there's no crawlability cost to
// collapsing by default. (This route also doesn't emit FAQPage JSON-LD --
// only the live homepage does, via HomeFaqSection.tsx -- so there was never
// a schema conflict here either.)
//
// Also curated down from all ten homeFaqs to five buying-decision questions
// (developer dependency, feature-cost transparency, the retainer question,
// minimum project size, migration SEO risk). The other five are migration-
// or platform-specific (WordPress pricing detail, the audit tool, Shopify,
// caching plugins) and belong on their relevant service pages, not a
// homepage that's already long -- moving them there is future work, not done
// in this pass. This file filters the shared home-faqs.ts by question text;
// it does not touch that file, so the live homepage's ten questions and its
// FAQPage JSON-LD are unaffected.
// ─────────────────────────────────────────────────────────────────────────────

const HOMEPAGE_FAQS = [
  "If the site is custom code, do I need a developer every time I want to change something?",
  "If the features are built in, is every future feature included too?",
  "Do I need your monthly plan to keep a custom feature working?",
  "Do you have a minimum project size?",
  "Will I lose SEO rankings when migrating from WordPress?",
];

export default function FaqOpen() {
  const faqs = HOMEPAGE_FAQS.map((q) => homeFaqs.find((f) => f.q === q)).filter((f): f is (typeof homeFaqs)[number] => !!f);

  return (
    <section aria-labelledby="faq-title" className="px-6 py-24 md:px-10 md:py-36" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto max-w-[1440px]">
        <h2
          id="faq-title"
          className="max-w-[16ch]"
          style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
        >
          Common questions about working with us
        </h2>

        <div className="mt-16 border-t md:mt-24" style={{ borderColor: T.rule }}>
          {faqs.map((f, i) => (
            <details key={f.q} className="faq-item border-b" style={{ borderColor: T.rule }} open={i === 0}>
              <summary className="faq-summary flex cursor-pointer list-none items-start justify-between gap-6 py-6 md:py-8">
                <span className="flex gap-5 md:gap-8">
                  <span className="shrink-0 text-[12px] uppercase tracking-[0.12em]" style={{ fontFamily: MONO, color: T.quiet }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: DISPLAY_SM, fontWeight: 700, color: T.ink, fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", lineHeight: 1.15 }}>
                    {f.q}
                  </span>
                </span>
                <ChevronDown className="faq-chevron mt-2 h-5 w-5 shrink-0" style={{ color: T.quiet }} aria-hidden="true" />
              </summary>
              <p className="max-w-[44rem] pb-6 pl-[3.2rem] text-[17px] leading-[1.7] md:pb-8 md:pl-[4.5rem]" style={{ color: T.body }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      <style>{`
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-chevron { transition: transform .3s ease; }
        .faq-item[open] .faq-chevron { transform: rotate(180deg); }
        @media (prefers-reduced-motion: reduce) { .faq-chevron { transition: none; } }
      `}</style>
    </section>
  );
}
