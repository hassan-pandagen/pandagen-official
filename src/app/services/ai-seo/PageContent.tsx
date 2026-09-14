"use client";

import { motion } from "@/components/ui/motion";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { serviceFaqs } from "@/data/service-faqs";

/**
 * Restructured 15 September 2026, in one pass rather than another round of
 * patches. Three consecutive audits patched this page and each patch created
 * the next contradiction: the H1 promised "not billed monthly" while the box
 * beneath it sold a retainer, the offer sat two explanatory sections deep, and
 * the exclusions concluded that what you buy is a new website.
 *
 * ORDER, from the revision-2 audit: the monthly offer first, then what it
 * contains, then why the work exists, then proof with its limits, then what
 * enlarges the quote, then boundaries, questions and one close. The readability
 * explanation used to be the opening argument and is now support: it is the
 * reason the work exists, not the thing being sold.
 *
 * OWNERSHIP. Panda Patches is an in-house brand owned by PandaCodeGen
 * co-founder Imran Raza Ladhani, who holds a stake in both companies. An
 * earlier version of this page called it "our own company", and the work page
 * said PandaCodeGen "holds no ownership or partnership stake" -- true of the
 * company entity, misleading about the relationship, since the businesses share
 * an owner. Both corrected; nothing here is arm's length.
 *
 * ATTRIBUTION, corrected three times now, so the reasoning is recorded here to
 * stop the wrong version being reused. Version one implied every enquiry carries
 * its source. Version two overcorrected into futility. Version three stated
 * platform absolutes -- "most assistants pass a referrer", "Google AI Overviews
 * and Meta AI pass none" -- which came from a verbal account containing the
 * words "i guess" and were published as fact.
 *
 * What is actually supported: Google documents AI Overview and AI Mode visits as
 * Organic Search, so the visit IS attributed to Google and only the AI step is
 * not separately identified. OpenAI documents utm_source=chatgpt.com, which is a
 * campaign signal rather than an HTTP referrer. No source was found for a Meta AI
 * no-referrer policy and a dated firsthand test observed the opposite. Calling a
 * combined figure a "floor" needs inclusion and de-duplication rules nobody has
 * written down, so the page reports captured referrals and customer-declared
 * discovery as two kinds of evidence and keeps them apart.
 *
 * NOT CLAIMED, after the revision-2 audit found it unevidenced: that competitors
 * cannot do attribution. WebFX and Impression both publish downstream revenue
 * attribution. The differentiator is shipping the change, not measuring it.
 */

const MONTHLY: [string, string][] = [
  ["Buyer research", "Ten questions your customers actually ask, across one product or service area and up to five priority pages."],
  ["Visibility monitoring", "Those ten tracked on two agreed AI-search surfaces, read by a person rather than only collected by software."],
  ["Content and technical review", "Those pages checked for missing buyer information, and for access, indexing or structure problems worth acting on."],
  ["An improvement we ship", "One agreed page improvement or small technical task, which we implement and verify with the access and approval agreed in your scope, with a revision round. Where your own team has to release it, the scope says so. Either way it is finished work, not a recommendation handed over."],
  ["Monthly report", "What changed, what the measurements do and do not show, and the next priority."],
  ["Review", "A short call or a recorded walkthrough, whichever suits you."],
];

const BIGGER: [string, string][] = [
  ["Source tracking for enquiries and orders", "Connecting referral and campaign data to enquiries or orders, with server-side capture where that is what it takes."],
  ["A reporting dashboard", "Your own, rather than a monthly PDF: visibility, referral and enquiry data in one place on an agreed refresh schedule."],
  ["More pages, questions, surfaces or markets", "More to investigate and verify each cycle, plus local research and approval if the market is new."],
  ["Original content", "Interviews, research, drafting and fact checking, which is a different job from editing pages you already have."],
  ["A larger implementation backlog", "More shipped each month, or engineering work beyond a small task."],
  ["Ecommerce catalogue work", "Product data, feeds, categories and variants, where that is what the questions are about."],
];

const NOT_INCLUDED = [
  "Guaranteed citations, rankings or traffic. We agree objectives, the work and how it is measured; the guarantee is the part nobody can honestly give",
  "New long-form content, migrations, major integrations or a large technical backlog, which sit outside the starting scope and are quoted before they begin, whether as initial work or inside a larger retainer",
  "Claims about ChatGPT, Claude or Perplexity behaviour that we cannot show you evidence for",
];

const LIMITS: [string, string][] = [
  ["That report has no click column.", "It shows appearances, not visits, and not sales."],
  ["The hosting-bandwidth article recorded 5,583 page-level impressions in the same period.", "Developer research, not people looking to buy a website."],
  ["It covers Google's features only.", "It says nothing about ChatGPT, Claude or Perplexity."],
];

export default function PageContent() {
  return (
    <main className="bg-paper min-h-screen overflow-x-hidden">
      <ReadingProgressBar />
      <Header />

      {/* 1. THE OFFER. Previously this sat two explanatory sections deep. */}
      <section className="pt-28 md:pt-36 pb-10 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-4">AI SEO &amp; Answer Engine Optimisation</p>
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal tracking-tight leading-[1.05] mb-6">
              AI SEO services with{" "}
              <span className="font-serif italic text-cognac">practical improvements every month.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-4">
              We research the questions your buyers ask, monitor an agreed set of AI-search results, and improve
              the pages they rely on. <strong className="text-charcoal">Monthly services start at $500</strong>,
              quoted on your project&rsquo;s size and scope, with the work and the fee agreed before we begin.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              It works on a site you already have. If we build the site, the technical foundations come with it
              and the monthly work starts from there. Either way the retainer is optional and nothing you own
              depends on subscribing to it.
            </p>
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

      {/* 2. WHAT THE MONTH CONTAINS. */}
      <section className="py-12 md:py-16 px-6 bg-white border-y border-stone-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">What a $500 month contains</h2>
          <p className="text-stone-600 mb-8">
            A focused starting engagement. Your written scope names the coverage, the deliverables and who
            publishes the change. Larger projects are quoted for the work they need, not by counting websites.
          </p>
          <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Scrollable table">
            <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden bg-white">
              <thead>
                <tr className="bg-stone-50 text-left">
                  <th className="px-4 py-3 font-bold text-stone-700">Each month</th>
                  <th className="px-4 py-3 font-bold text-stone-700">The starting boundary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {MONTHLY.map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-stone-50/50" : ""}>
                    <td className="px-4 py-3 font-medium text-charcoal align-top">{k}</td>
                    <td className="px-4 py-3 text-stone-600">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-stone-600 mt-6 leading-relaxed">
            The first month sets the baseline and still ships one improvement. If the first look finds a large
            technical backlog, missing measurement or a rebuild, we quote that separately and say so before you
            commit, rather than promising normal monthly output and a setup project for the same fee.
          </p>
        </div>
      </section>

      {/* 3. WHY THE WORK EXISTS. Was the opening argument; now supports the offer. */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Why the pages need the work</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Some crawlers execute JavaScript and some do not, so content that appears only after it runs may or
            may not be read depending on which one arrives. Beyond that the usual problem is not technical at
            all: the page never states the price basis, the delivery time or the constraint the buyer was asking
            about, so there is nothing useful to quote even when everything renders perfectly.
          </p>
          <p className="text-stone-600 leading-relaxed">
            The monthly work is mostly that second thing. Put the answers on the page, as text rather than
            sealed inside an image, under headings that name the question, and fix the access and indexing
            faults that keep pages out. It is ordinary good building, which is why the foundations belong in a
            build and the continuing improvement belongs in a retainer.
          </p>
        </div>
      </section>

      {/* 4. PROOF, with its limits beside it and the relationship stated. */}
      <section className="py-12 md:py-16 px-6 bg-white border-y border-stone-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">What we can show you</h2>
          <div className="rounded-2xl border border-stone-200 bg-stone-50/60 p-7 mb-6">
            <p className="text-4xl font-bold text-cognac mb-2">9,843</p>
            <p className="text-sm font-semibold text-charcoal mb-4">
              AI-feature impressions for pandacodegen.com, 12 June to 11 September 2026
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Google Search Console&rsquo;s Generative AI report counts the times one of our pages appeared in an
              AI Overview or AI Mode answer. Over the same window our Web-search impressions were 157,920, so AI
              features were 6.2% of them.
            </p>
            <div className="border-t border-stone-200 pt-4 space-y-2">
              {LIMITS.map(([a, b]) => (
                <p key={a} className="flex items-start gap-2 text-sm text-stone-600 leading-relaxed">
                  <XCircle className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong>{a}</strong> {b}</span>
                </p>
              ))}
            </div>
          </div>
          <p className="text-stone-600 leading-relaxed mb-4">
            We also track AI-referred orders on{" "}
            <Link href="/work/panda-patches" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Panda Patches</Link>,
            an in-house brand owned by our co-founder Imran Raza Ladhani, who holds a stake in both companies.
            The two businesses share an owner, so read it as a first-party record rather than an independent
            client result.
          </p>
          <p className="text-sm text-stone-500 leading-relaxed">
            Measured and written by{" "}
            <Link href="/about/hassan" className="font-semibold text-cognac underline decoration-cognac/30 underline-offset-4 hover:decoration-cognac">Hassan Jamal</Link>,
            co-founder, from our own Search Console property. Last checked 13 September 2026.
          </p>
        </div>
      </section>

      {/* 5. WHAT ENLARGES THE QUOTE. Named additions, not an open menu. */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">Where it goes beyond that</h2>
          <p className="text-stone-600 mb-7">
            The entry scope is deliberately small so it can be judged. These are the additions that change the
            quote. You choose which apply; none is assumed and none is charged for unless it is in your scope.
          </p>
          <ul className="space-y-3 mb-7">
            {BIGGER.map(([t, d]) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cognac shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-stone-700 leading-relaxed"><strong className="text-charcoal">{t}.</strong> {d}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-cognac/25 bg-orange-50/40 p-6">
            <h3 className="font-bold text-charcoal mb-2">What source tracking can and cannot tell you</h3>
            <p className="text-stone-700 leading-relaxed text-sm">
              We connect the referral and campaign data your setup makes available to enquiries or orders, with
              server-side tracking where that is what it takes. Customers can also tell you where they found
              you, and that is a different kind of evidence from an observed click. On{" "}
              <Link href="/work/panda-patches" className="font-semibold underline decoration-cognac/40 underline-offset-2">Panda Patches</Link>,
              a business that shares an owner with us, the records combine both and we keep them apart rather
              than reporting one total. Some sources stay unknown: a Google AI Overview visit is recorded as
              Google organic search without separately identifying the AI step. We check what your platform
              already records before quoting any of it.
            </p>
          </div>
          <p className="text-sm text-stone-600 mt-6 leading-relaxed">
            There is no per-website formula. A large business can commission something narrow, and a small site
            can need a bigger quote because the work is awkward. We price the work, then write it down before
            starting.
          </p>
        </div>
      </section>

      {/* 6. BOUNDARIES. */}
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
        </div>
      </section>

      {/* FAQAccordion renders its own h2, so this section adds none: 50 articles
          on this site render two, which the deep audit flagged as a P1 defect. */}
      <section className="py-12 md:py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <FAQAccordion faqs={serviceFaqs["ai-seo"].map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      {/* 7. ONE CLOSE, asking for what a quote actually needs. */}
      <section className="py-14 md:py-20 px-6 bg-charcoal">
        <div className="container mx-auto max-w-2xl text-center">
          {/* "Get cited" / "get recommended" were considered and rejected: the FAQ
              three sections up says selection is the assistant's decision and cannot
              be guaranteed, so a button promising it contradicts the page. "Worth
              citing" is the same energy about the thing we actually control. */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Make your pages worth citing</h2>
          <p className="text-stone-300 leading-relaxed mb-8">
            Whether an assistant picks you is its call. Whether your pages deserve picking is ours. Send your
            site and the product or service you want buyers to reach, and a founder will tell you if this is
            worth doing for you and what the first month would cover.
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
      {/* showCta={false}: the shared footer CTA is a migration pitch, and this page
          has already closed on AI SEO. */}
      <Footer showCta={false} />
    </main>
  );
}
