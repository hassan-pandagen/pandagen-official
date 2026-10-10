import { homeFaqs } from "@/data/home-faqs";
import FaqRows from "@/components/ui/FaqRows";
import { DISPLAY, T } from "@/components/redesign/tokens";

// Homepage FAQ selection; schema uses this same selection.
// Owner chose the shared native accordion on 10 October 2026.

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
          style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.8vw, 4rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
        >
          Common questions about <span style={{ color: T.accent }}>working with us</span>
        </h2>

        <FaqRows className="mt-10 md:mt-14" faqs={faqs.map(({ q, a }) => ({ question: q, answer: a }))} />
      </div>
    </section>
  );
}
