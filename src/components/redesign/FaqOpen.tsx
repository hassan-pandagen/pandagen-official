import HeadingEmphasis from "@/components/redesign/HeadingEmphasis";
import { homeFaqs } from "@/data/home-faqs";
import FaqRows from "@/components/ui/FaqRows";
import Link from "next/link";
import { DISPLAY, T } from "@/components/redesign/tokens";

// Homepage FAQ selection; schema uses this same selection.
// Owner chose the shared native accordion on 10 October 2026.

const HOMEPAGE_FAQS = [
  // 21 Nov 2026, Imran's decisions: terms and prices first.
  "How much does a website with a booking and business system cost?",
  "Do I get a refund if the project doesn't work out?",
  "How do payments work?",
  "Do I own my website and accounts?",
  "What hours do you work?",
  "Is my website set up for ChatGPT and Google's AI answers?",
  "What do your monthly plans include?",
  "If the site is custom code, do I need a developer every time I want to change something?",
  "If the features are built in, is every future feature included too?",
  "Do I need your monthly plan to keep a custom feature working?",
  "Who do I contact when something on my site breaks?",
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
    <section aria-labelledby="faq-title" className="px-6 pb-6 pt-8 md:px-10 md:py-16" style={{ backgroundColor: T.paper }}>
      <div className="mx-auto max-w-[1440px]">
        <h2
          id="faq-title"
          style={{ fontFamily: DISPLAY, fontWeight: 700, color: T.ink, fontSize: "clamp(2rem, 3.8vw, 4rem)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
        >
          Common questions about <HeadingEmphasis text="working with us" />
        </h2>

        <FaqRows className="mt-10 md:mt-14" faqs={faqs.map(({ q, a }) => ({ question: q, answer: a }))} />
        {/* 22 Nov 2026: the homepage dropped the guides list and the press strip to get to ten
            sections; their links stay here so nothing the page linked to is lost. */}
        <nav aria-label="Guides and press" className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6 text-[15px] font-medium" style={{ borderColor: T.rule, color: T.ink }}>
          <Link href="/blog/how-to-fix-slow-wordpress" className="underline underline-offset-4">How to fix a slow WordPress site</Link>
          <Link href="/blog/website-portability" className="underline underline-offset-4">What each platform lets you export</Link>
          <Link href="/blog/what-is-headless-commerce" className="underline underline-offset-4">What headless commerce is</Link>
          <Link href="/blog" className="underline underline-offset-4">All guides</Link>
          <Link href="/about/hassan#hassan-press" className="underline underline-offset-4">Where we&apos;ve been quoted</Link>
        </nav>
      </div>
    </section>
  );
}
