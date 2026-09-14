"use client";

import { motion } from "@/components/ui/motion";
import { ArrowRight, CheckCircle2, XCircle, Code2, FileSearch, Eye } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { serviceFaqs } from "@/data/service-faqs";

/**
 * Added 14 September 2026.
 *
 * WHY THIS PAGE EXISTS AND WHAT IT DELIBERATELY IS NOT.
 *
 * External keyword data checked 13 Sep: `ai seo agency` 1,600/mo at KD 0,
 * `ai seo services` 1,300 at KD 2, `aeo services` 480 at KD 9. Real commercial
 * demand for a service page we did not have. The eleven posts in the `seo-aeo`
 * cluster all target informational intent -- what is answer engine
 * optimisation, how to measure AI visibility, what is llms.txt -- and none
 * targets "agency" or "services", so this takes nothing from them. The
 * cluster's pillarHref pointed at /editorial-policy, a policy page, which meant
 * eleven articles had no commercial destination at all.
 *
 * CORRECTED 14 Sep, same day. The first version of this page carried an amber
 * box reading "if you want a monthly AEO programme, we are the wrong firm",
 * on my assumption that the no-compulsory-retainer line on /pricing meant no
 * retainer was offered at all. Wrong: the owner does offer one, scopes it
 * first, and can start at $500 a month. That box was turning away a customer
 * we would take. It now states the offer, and the $500 floor against a
 * published market entry of about $1,500 is the same shape as the $1,500 build
 * against Pagepro's $25,000 minimum -- which is this firm's actual competitive
 * position, not an exception to it. "No compulsory retainer" on /pricing is
 * about the BUILD not requiring one, and remains true.
 *
 * EVERY CLAIM HERE IS BOUNDED ON PURPOSE. The 9,843 figure is our own property
 * and lives in first-party-measurements.json under
 * gsc-generative-ai-impressions-2026-06-to-09 with both its caveats attached:
 * the report has no click column, and 57% of it is one article about hosting
 * bandwidth. Panda Patches is labelled as co-founder-owned, not as an
 * independent client. No citation, ranking or traffic outcome is promised
 * anywhere, because selection is the assistant's decision and not ours.
 */

const READABLE = [
  { icon: Code2, title: "Content in the HTML", body: "The words are in the page the server sends, not assembled afterwards in the browser. A crawler that does not execute JavaScript still sees them." },
  { icon: FileSearch, title: "Headings that answer", body: "Each section is titled with the question it resolves, so a machine reading for an answer can find where it is." },
  { icon: Eye, title: "Facts as text", body: "Prices, specifications, hours and terms written out as text, so nothing depends on a machine choosing to read them off an image." },
];

const NOT_INCLUDED = [
  "A citation, ranking or traffic target of any kind",
  "Monthly monitoring, unless you take the optional retainer, which is scoped and priced separately from the build",
  "Content written for you, unless copywriting is separately scoped in your quote",
  "Claims about ChatGPT, Claude or Perplexity behaviour that we cannot show you evidence for",
];

export default function PageContent() {
  return (
    <main className="bg-paper min-h-screen overflow-x-hidden">
      <ReadingProgressBar />
      <Header />

      {/* 1. WHAT THIS IS, AND THE DISQUALIFIER IMMEDIATELY AFTER IT.
             The audit's recommended service sequence leads with fit. For this
             page fit means telling the monthly-retainer buyer to leave, in the
             second paragraph, before they invest any more reading. */}
      <section className="pt-28 md:pt-40 pb-12 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-4">AI SEO &amp; Answer Engine Optimisation</p>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal tracking-tight leading-[1.05] mb-6">
              Websites that AI assistants can read,{" "}
              <span className="font-serif italic text-cognac">built in from the start.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-5">
              Some crawlers execute JavaScript and some do not. If your content only appears after JavaScript
              runs, whether it is read at all depends on which one arrives. We build pages where the words are
              already in the HTML the server sends, so it is read either way &mdash; and we do it
              during the build rather than selling it back afterwards.
            </p>
            <div className="rounded-2xl border border-cognac/20 bg-orange-50/50 p-5 mb-8">
              <p className="flex items-start gap-3 text-sm text-charcoal leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong>Monthly AI SEO services from $500.</strong> We quote based on your project&rsquo;s
                  size and scope, with the work and monthly fee agreed before we begin. It is optional
                  &mdash; the build does not depend on it.
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event", "cta_click", { cta: "ask_about_site", location: "ai_seo_hero" }); window.dispatchEvent(new Event("open-quote-modal")); } }}
                className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all flex items-center justify-center gap-2"
              >
                Ask us about your site <ArrowRight className="w-5 h-5" />
              </button>
              <Link href="/free-audit" className="px-8 py-4 bg-white border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all flex items-center justify-center gap-2">
                Check your website <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm text-stone-600 mt-4 leading-relaxed">
              A founder replies, usually within one business day. Every message gets an answer, whether or not
              it turns into a quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT THE WORK IS. Deliberately unglamorous: the honest version of
             this service is ordinary good building, and saying so is the
             differentiator against pages selling it as a dark art. */}
      <section className="py-12 md:py-16 px-6 bg-white border-y border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">What &ldquo;readable&rdquo; actually means</h2>
          <p className="text-stone-600 mb-10 max-w-2xl">
            It is ordinary good building, which is why it belongs in the build rather than in a separate
            invoice.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {READABLE.map((item) => (
              <div key={item.title} className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
                <item.icon className="w-6 h-6 text-cognac mb-4" aria-hidden="true" />
                <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EVIDENCE, WITH ITS LIMITS IN THE SAME BREATH. The measurement is in
             first-party-measurements.json; both caveats are stated here rather
             than in a footnote, because the caveats are the reason to trust it. */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Our own numbers, and what they do not show</h2>
          <div className="rounded-2xl border border-stone-200 bg-white p-7 mb-6">
            <p className="text-4xl font-bold text-cognac mb-2">9,843</p>
            <p className="text-sm font-semibold text-charcoal mb-4">
              AI-feature impressions for pandacodegen.com, 12 June to 11 September 2026
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Google Search Console&rsquo;s Generative AI report counts the times one of our pages appeared in an
              AI Overview or AI Mode answer. Over the same window our total search impressions were 157,920,
              so AI features were 6.2% of everything.
            </p>
            <div className="border-t border-stone-200 pt-4 space-y-2">
              <p className="flex items-start gap-2 text-sm text-stone-600 leading-relaxed">
                <XCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>That report has <strong>no click column</strong>. It shows appearances, not visits, and not sales.</span>
              </p>
              <p className="flex items-start gap-2 text-sm text-stone-600 leading-relaxed">
                <XCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span><strong>5,583 of them came from one article about hosting bandwidth</strong> &mdash; developer research, not people looking to buy a website.</span>
              </p>
              <p className="flex items-start gap-2 text-sm text-stone-600 leading-relaxed">
                <XCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>It covers <strong>Google&rsquo;s features only</strong>. It says nothing about ChatGPT, Claude or Perplexity.</span>
              </p>
            </div>
          </div>
          {/* Byline added after the google-content-audit pass. The page makes
              first-party measurement claims, so "who measured this" is a fair
              question and item 13 asks for the answer on the page. */}
          <p className="text-sm text-stone-500 leading-relaxed mb-6">
            Measured and written by{" "}
            <Link href="/about/hassan" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Hassan Jamal</Link>,
            co-founder, from our own Search Console property. Last checked 13 September 2026.
          </p>
          <p className="text-stone-600 leading-relaxed">
            We also track AI-referred orders on{" "}
            <Link href="/work/panda-patches" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Panda Patches</Link>,
            a business our co-founder owns. It takes live orders and the attribution runs end to end, but it
            is our own company rather than an independent client, which is why it is labelled that way here.
          </p>
        </div>
      </section>

      {/* 4. WHAT IS NOT INCLUDED. Placed before pricing on purpose: the audit
             found buyers get scope after price and cannot judge either. */}
      <section className="py-12 md:py-16 px-6 bg-white border-y border-stone-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">What this does not include</h2>
          <ul className="space-y-3">
            {NOT_INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-700 leading-relaxed">
                <XCircle className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-stone-50 border border-stone-200 p-6">
            <p className="flex items-start gap-3 text-stone-700 leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                What you do get is a site built this way from the start, at the fixed price in your written
                quote, with the code and accounts transferred to you. If your existing pages already render
                server-side and only need better structure, we will tell you that instead &mdash; it is the
                smaller job and sometimes it is the right one.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQ. FAQAccordion renders its own h2, so this section deliberately
             adds no heading of its own: 50 articles on this site currently
             render two, which the deep audit flagged as a P1 defect. */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          {/* serviceFaqs uses {q,a}; FAQAccordion takes {question,answer}. Mapped
              here rather than changing either shape, since every other service
              page reads the {q,a} form. */}
          <FAQAccordion faqs={serviceFaqs["ai-seo"].map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      {/* 6. CLOSE. Calendar here, where the reader has been through the whole
             argument, per the owner's direction that forms carry the early
             asks and the call is kept for high intent. */}
      <section className="py-14 md:py-20 px-6 bg-charcoal">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to know how yours reads?
          </h2>
          <p className="text-stone-300 leading-relaxed mb-8">
            Run the free check for a technical read of your pages, or send us the URL and a founder will look
            at it properly and tell you whether it is a build problem or an editing one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event", "cta_click", { cta: "ask_about_site", location: "ai_seo_close" }); window.dispatchEvent(new Event("open-quote-modal")); } }}
              className="px-8 py-4 bg-white text-charcoal font-bold rounded-full hover:bg-stone-100 transition-all"
            >
              Ask us about your site
            </button>
            <button
              data-cal-namespace="discovery"
              data-cal-link={process.env.NEXT_PUBLIC_CAL_LINK || undefined}
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-charcoal transition-all"
            >
              Book a call
            </button>
          </div>
        </div>
      </section>

      <RelatedServicesGrid currentHref="/services/ai-seo" />
      <Footer />
    </main>
  );
}
