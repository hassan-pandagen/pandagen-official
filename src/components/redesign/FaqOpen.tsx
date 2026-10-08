import { homeFaqs } from "@/data/home-faqs";
import FaqRows from "@/components/ui/FaqRows";
import { DISPLAY, T } from "@/components/redesign/tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Homepage FAQ, redesign pass, 27 Sep 2026 (third pass -- see 24/26 Sep notes
// in git history for the first two).
// ─────────────────────────────────────────────────────────────────────────────
// 26 Sep: converted this to a native <details>/<summary> accordion, reasoning
// that server-rendered content in the initial HTML is enough regardless of
// open/closed state, since Google's FAQPage rich result (the original reason
// for "always open") was retired 7 May 2026.
//
// 27 Sep: reverted. src/components/ui/FAQAccordion.tsx -- this site's OWN
// proven-safe FAQ component, used on live case-study and pricing pages --
// carries a dated history of exactly this mistake: a CSS-collapsed FAQ (grid-
// rows-[0fr]) scored 0 of 26 answers on an external extraction sweep on 4 Aug
// 2026, because the pipeline filtered on COMPUTED VISIBILITY, not DOM
// presence, and a collapsed container computes to zero. Verified directly
// with Playwright before reverting: collapsed <details> answers here scored
// checkVisibility() === false and innerText.length === 0, the identical
// signature, while textContent.length stayed >0 -- present in the markup,
// invisible to anything that renders the page. The always-visible control
// (this same check against FAQAccordion.tsx on /work/emblematic-studio)
// passed cleanly on every metric. "In the DOM" and "visible" are not the same
// thing, and this site has already paid once to learn that the hard way.
//
// So: always-visible again, but keeping the two things worth keeping from the
// accordion pass -- the tighter spacing (compact instead of the original
// py-10/py-12) and the curation to 5 buying-decision questions (developer
// dependency, feature-cost transparency, the retainer question, minimum
// project size, migration SEO risk) out of the shared 10. The other 5 are
// migration/platform-specific and belong on their service pages -- future
// work, not done here. This file filters home-faqs.ts by question text; it
// does not touch that file, so the live homepage's ten questions and its
// FAQPage JSON-LD are unaffected.
// ─────────────────────────────────────────────────────────────────────────────

const HOMEPAGE_FAQS = [
  "If the site is custom code, do I need a developer every time I want to change something?",
  "If the features are built in, is every future feature included too?",
  "Do I need your monthly plan to keep a custom feature working?",
  "Do you have a minimum project size?",
  "Will I lose SEO rankings when migrating from WordPress?",
];

/**
 * The homepage FAQs this section shows, in order. The live homepage builds its
 * FAQPage data from this (30 Sep 2026), so it lists only visible questions.
 */
export function homepageFaqs() {
  return HOMEPAGE_FAQS.map((q) => homeFaqs.find((f) => f.q === q)).filter((f): f is (typeof homeFaqs)[number] => !!f);
}

export default function FaqOpen() {
  const faqs = homepageFaqs();

  return (
    <section aria-labelledby="faq-title" className="px-6 py-12 md:px-10 md:py-16" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto max-w-[1440px]">
        <h2
          id="faq-title"
          className="max-w-[16ch]"
          style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 0.98, letterSpacing: "-0.02em" }}
        >
          Common questions about working with us
        </h2>

        <FaqRows className="mt-10 md:mt-14" faqs={faqs.map(({ q, a }) => ({ question: q, answer: a }))} />
      </div>
    </section>
  );
}
