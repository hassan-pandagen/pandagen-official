"use client";

import { motion } from "@/components/ui/motion";
import { CheckCircle2, ArrowRight, Zap, ShieldCheck, DollarSign, Code2, Gauge, Server, Database, Globe, FileSearch, Wrench, HelpCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import PricingTiers from "@/components/services/PricingTiers";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import { serviceFaqs } from "@/data/service-faqs";

const faqData = serviceFaqs["webflow"];

export default function WebflowPageContent() {

  return (
    <main className="bg-paper min-h-screen selection:bg-charcoal selection:text-white overflow-x-hidden">
      <ReadingProgressBar />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-20 md:pt-28 pb-8 md:pb-12 px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)", backgroundSize: "50px 50px", opacity: 0.03 }} />
        <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-stone-200/50 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-8">
            <Zap className="w-4 h-4" /> Webflow Optimization &amp; Migration
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight md:tracking-tighter mb-4 leading-[1.1] md:leading-[1.05] break-words"
          >
            Get more from your{" "}
            <span className="font-serif font-normal italic text-cognac md:block">
              Webflow website.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            Slow mobile pages, rising bills, CMS limits or forms that miss your CRM? We assess the cause, scope improvements within Webflow, and rebuild in Next.js when your needs justify a move.
          </motion.p>
          <p className="text-base text-charcoal font-medium mb-6">Custom rebuilds from $1,500. Webflow improvements quoted to scope.</p>

          <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"tell_us_about_project",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }}
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Ask about your Webflow site <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#when-to-migrate" className="px-8 py-4 bg-white border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all flex items-center justify-center gap-2">
              What we can help with <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="text-sm text-stone-600 mt-4 text-center max-w-xl mx-auto leading-relaxed">Share your Webflow address and what you need it to do. A founder will reply with the next step. Any paid work is scoped and quoted before it starts.</p>
        </div>
      </section>

      {/* Buyer problems, checked against current Webflow capabilities. */}
      <section id="when-to-migrate" className="scroll-mt-24 py-12 md:py-20 px-6 bg-stone-100 border-y border-stone-200">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">What needs to work better?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Webflow problems we can help you assess</h2>
<p className="mb-6 text-base leading-7 text-stone-600">Check before deciding to rebuild. Our <Link href="/free-audit" className="font-semibold underline underline-offset-4">free website audit</Link> explains the technical findings and offers a free founder review.</p>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Start with the issue you are seeing. We check what is causing it and what can be improved in your current setup before pricing a rebuild.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Gauge, title: "Your Webflow site is slow on mobile", detail: "Large images, fonts, animations and third-party scripts can slow down important pages. We review those pages and current Webflow publishing settings, including per-page JavaScript and asynchronous loading. A low speed score alone is not a reason to migrate.", source: "https://help.webflow.com/hc/en-us/articles/38265301927059-Understanding-per-page-JavaScript-and-asynchronously-loading-JavaScript", sourceLabel: "Webflow performance options" },
              { icon: DollarSign, title: "Hosting and bandwidth costs keep growing", detail: "We review the actual bill, high-bandwidth assets, seats and add-ons. Your plan and renewal date matter. We compare a targeted improvement with the full cost of moving, including the new hosting, CMS and ongoing maintenance.", source: "https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026", sourceLabel: "Current plan-change guidance" },
              { icon: Database, title: "Your CMS or site search no longer fits", detail: "A growing directory, catalogue or resource library may need better relationships, filters or search results. We check the current CMS and search limits separately, then assess a better content model or an integration before proposing a replacement CMS.", source: "https://help.webflow.com/hc/en-us/articles/33961242348179-Site-search", sourceLabel: "Webflow site-search limits" },
              { icon: FileSearch, title: "Forms are not reaching your inbox or CRM", detail: "A successful form submission and a delivered enquiry are different steps. We trace the form, spam controls, notification settings and CRM connection, then scope the repair and a test of the complete journey. Source tracking can be assessed separately where your setup supports it.", source: "https://help.webflow.com/hc/en-us/articles/40586232381331-Why-am-I-not-receiving-form-notification-emails", sourceLabel: "Webflow form-delivery checks" },
              { icon: Code2, title: "You need logins, a portal or custom workflows", detail: "Webflow retired its native User Accounts feature in January 2026. Membership apps can still cover some needs. For permissions, live data or business workflows, we compare suitable integrations with a scoped custom application; the marketing site may be able to stay where it is.", source: "https://help.webflow.com/hc/en-us/articles/36046006227731-User-Accounts-sunset", sourceLabel: "User Accounts changes and alternatives" },
              { icon: Globe, title: "You want to leave Webflow without losing the useful parts", detail: "A code export does not recreate a working CMS, form service or site search. We inventory content, URLs, assets, languages and integrations together, then plan what moves and what must be rebuilt in Next.js. Your team still needs an editor and a tested handover.", source: "https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code", sourceLabel: "What Webflow code export includes" },
            ].map((item) => (
              <div key={item.title} className="p-6 md:p-8 rounded-2xl bg-white border border-stone-200">
                <div className="p-3 rounded-xl bg-cognac/10 text-cognac w-fit mb-4"><item.icon className="w-5 h-5" /></div>
                <h3 className="text-charcoal font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{item.detail}</p>
                <a href={item.source} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-xs font-medium text-cognac underline underline-offset-4">{item.sourceLabel}</a>
              </div>
            ))}
          </div>
          <p className="text-stone-600 text-sm leading-relaxed text-center mt-7 max-w-2xl mx-auto">
            Platform guidance checked September 2026. A problem on one site does not mean every Webflow site has it. Tell us what happens on yours and what needs to change.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-8">The right amount of work for your site</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-7 md:p-9 rounded-2xl bg-stone-50 border border-stone-200">
              <Wrench className="w-6 h-6 text-cognac mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-3">Improve the site you have</h3>
              <p className="text-stone-600 leading-relaxed mb-4">We can audit the issue and scope feasible changes within Webflow: performance, forms, connected tools and content workflows. Native settings or an integration may meet the need.</p>
              <p className="font-semibold text-charcoal">Quoted for the specific work.</p>
              <p className="text-sm text-stone-600 mt-2">Share your URL, the problem and any examples. We confirm access and scope before agreeing a fee.</p>
            </div>
            <div className="p-7 md:p-9 rounded-2xl bg-charcoal text-white">
              <Code2 className="w-6 h-6 text-orange-300 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Rebuild beyond Webflow</h3>
              <p className="text-stone-300 leading-relaxed mb-4">When the requirements justify a move, we rebuild in Next.js with a content editor, agreed integrations and code you own. We plan the content transfer, URLs and launch checks together.</p>
              <p className="font-semibold">Custom rebuilds from $1,500.</p>
              <p className="text-sm text-stone-300 mt-2">CMS migration and more complex requirements change the scope. Price, dates and ongoing costs are agreed before work starts.</p>
            </div>
          </div>
          <p className="text-center text-sm text-stone-600 mt-7">Explore our <Link href="/work" className="text-cognac underline underline-offset-4">website and software work</Link>, or read <Link href="/blog/webflow-vs-custom-website" className="text-cognac underline underline-offset-4">when Webflow or custom development makes sense</Link>.</p>
        </div>
      </section>

      {/* 5. HOW WE MIGRATE */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How We Migrate Your Webflow Site</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">If a move is the right fit, these four stages cover the rebuild. Your quote lists the content and integrations included, the dates, and the checks before launch.</p>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-stone-200 -z-10" />
            {[
              { step: "01", title: "Webflow Inventory", desc: "We review structure, pages, components, interactions, collections, assets, forms, domains, localization, ecommerce, and integrations.", duration: "Phase 1" },
              { step: "02", title: "Architecture & Design Mapping", desc: "We define what is retained, redesigned, rebuilt, transformed, or excluded, including content, responsive states, accessibility, and technical dependencies.", duration: "Phase 2" },
              { step: "03", title: "Implementation & Data Validation", desc: "We build the approved scope in reviewable increments and verify migrated content and integrations against agreed samples and checks.", duration: "Phase 3" },
              { step: "04", title: "Cutover & Handover", desc: "We follow the agreed deployment, DNS, redirect, analytics, monitoring, rollback, access, licensing, documentation, and support plan.", duration: "Phase 4" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs hover:border-cognac/30 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-stone-50 border-4 border-white shadow-xs flex items-center justify-center text-lg font-black text-cognac mb-6">
                  {item.step}
                </div>
                <div className="text-xs font-semibold text-stone-600 uppercase tracking-widest mb-2">{item.duration}</div>
                <h3 className="font-bold text-lg text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Added 13 Sep 2026. The four stages above describe only what WE do, which
              was the gap a buyer audit named: the process pages emphasise build
              activity and leave the client guessing how much work lands on them.
              These three columns are not new commitments -- they restate the
              dependencies and approval points already in the written scope and in
              the timeline guide, at the point where the buyer is reading about time.
              Icons used here are all already imported at the top of this file. */}
          <div className="mt-12 md:mt-16 rounded-2xl border border-stone-200 bg-stone-50/60 p-6 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-charcoal text-center mb-2">How much of this lands on your team?</h3>
            <p className="text-stone-600 text-center text-sm mb-8 max-w-2xl mx-auto">
              Most of a Webflow migration is our work, because the content already exists. These are the
              three parts that are not, so you can plan around them before the project starts.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: FileSearch,
                  title: "You supply",
                  items: [
                    "Access to the Webflow account, the domain and any connected service",
                    "The copy and images for any page that is not simply moving across",
                    "One person who can make decisions, so approvals do not queue behind a committee",
                  ],
                },
                {
                  icon: Wrench,
                  title: "Panda handles",
                  items: [
                    "The full inventory: pages, collections, interactions, forms, integrations",
                    "The rebuild, the content transfer, the redirect map and the testing",
                    "Cutover, DNS, analytics, monitoring and the rollback plan",
                  ],
                },
                {
                  icon: CheckCircle2,
                  title: "You approve",
                  items: [
                    "The scope, in writing, before any building starts",
                    "The animation list, once we have said which are worth keeping",
                    "The preview site, against the agreed pages, before we go live",
                  ],
                },
              ].map((col) => (
                <div key={col.title} className="bg-white rounded-xl border border-stone-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <col.icon className="w-5 h-5 text-cognac shrink-0" />
                    <h4 className="font-bold text-charcoal">{col.title}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-stone-600 leading-relaxed">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cognac" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-500 text-center mt-6 max-w-2xl mx-auto leading-relaxed">
              The exact split, the review points and how added work is priced are set in your written
              scope for the project. This is the shape of it, not the terms.
            </p>
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU GET */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-cognac/20 text-sm text-cognac mb-6">
            <Code2 className="w-4 h-4" /> What You Get
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Define What the Replacement Must Do.
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            A custom build gives you control Webflow does not. Your written quote says what speed we hit, what it costs to run each month, what support you get, and that the code is yours at the end.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Gauge, title: "Measured Experience", desc: "Define visual, responsive, accessibility, and performance acceptance checks for representative pages and interactions." },
              { icon: Server, title: "Scoped Application Logic", desc: "Assess authentication, payments, data, and API integrations against security, provider, and operational requirements." },
              { icon: DollarSign, title: "Documented Operating Model", desc: "Estimate hosting and connected services, then state maintenance, support, repository access, licensing, and handover responsibilities." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-cognac/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center mb-4 group-hover:bg-stone-100 transition-colors">
                  <item.icon className="w-6 h-6 text-cognac" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-stone-600 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-paper py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-cognac">Planning a move</p>
          <h2 className="mb-5 text-3xl font-bold text-charcoal md:text-4xl">What affects your Webflow migration cost?</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-stone-600">The number of pages is one input. Templates, CMS relationships and connected systems determine how much needs rebuilding. Our <Link href="/blog/webflow-migration-cost" className="text-cognac underline underline-offset-4">migration cost guide</Link> explains the scope in more detail.</p>
          <h3 className="mb-4 mt-14 text-2xl font-bold text-charcoal">What a 50 to 100 page migration actually turns on</h3>
          <p className="mb-6 max-w-3xl leading-relaxed text-stone-600">
            Page count alone is not enough to quote the work. These four parts of the scope
            need checking before a price is agreed.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { h: "How many templates, not how many pages", b: "Two hundred pages built from eleven templates is a smaller job than forty pages each laid out by hand. Count the distinct layouts before you count URLs." },
              { h: "How much of the CMS is relational", b: "Flat collections port cleanly. Multi-reference fields, nested collections and anything driving conditional visibility have to be modelled again, and that is design work rather than export work." },
              { h: "What the interactions are load-bearing for", b: "A scroll animation is decoration. An interaction that gates a form step or drives a pricing calculator is application logic in an animation costume, and it gets rebuilt." },
              { h: "Which integrations hold state", b: "Embeds are cheap to move. Anything storing member data, orders or submissions inside Webflow needs an export path confirmed before a date is agreed, not after." },
            ].map((x) => (
              <div key={x.h} className="rounded-xl border border-stone-200 bg-white p-6">
                <h4 className="mb-2 font-bold text-charcoal">{x.h}</h4>
                <p className="text-sm leading-relaxed text-stone-600">{x.b}</p>
              </div>
            ))}
          </div>

          <h3 className="mb-4 mt-14 text-2xl font-bold text-charcoal">What continues to cost money after you leave</h3>
          <p className="mb-6 max-w-3xl leading-relaxed text-stone-600">
            A migration removes the Webflow site plan. It does not remove every line, and a comparison that pretends
            otherwise leaves out part of the decision. Compare the full recurring cost for your scope;
            a migration does not guarantee a saving.
          </p>
          <ul className="space-y-3">
            {[
              "Hosting, which for a static marketing site is often materially cheaper, and occasionally free at low volume.",
              "The CMS, if you take one. Some are free at your size, some are per-seat, and the seat count is what moves it.",
              "Anything Webflow was bundling that you were not costing separately: forms handling, search, localization, analytics.",
              "Maintenance. Dependency updates and security patching do not disappear because the platform did. They change hands.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-xl border border-stone-200 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cognac" />
                <span className="text-sm leading-relaxed text-stone-600">{t}</span>
              </li>
            ))}
          </ul>

          <div id="uptime" className="scroll-mt-24 mt-8 rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="text-xl font-bold text-charcoal mb-3">Hosting and support are part of the quote</h3>
            <p className="text-stone-600 leading-relaxed text-sm">Hosting is agreed per client, including the account and any charge. Some clients host with us at no extra charge; others are billed for it. Hosting can move to your account on request or when the engagement ends. The quote also sets backup and support responsibilities. A new platform still has service dependencies and outage risk.</p>
          </div>
          <p className="mt-6 text-sm text-stone-600">For current plan and renewal questions, use <a href="https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026" target="_blank" rel="noopener noreferrer" className="text-cognac underline underline-offset-4">Webflow&apos;s official guidance</a> alongside your invoices. Our <Link href="/blog/webflow-true-cost" className="text-cognac underline underline-offset-4">Webflow cost guide</Link> explains which ongoing costs to include.</p>
        </div>
      </section>

      {/* PRICING TIERS: an initial offer with an agency comparison */}
      <PricingTiers
        heading="Choose a migration planning path."
        headingAccent="Confirm commitments after discovery."
        agencyComparison={{
          agencyPrice: "Not assessed",
          agencyNote: "Compare equivalent design, content, interaction, integration, and support scope.",
          ourPrice: "Scoped proposal",
          ourNote: "Price, timing, services, access, and rights follow discovery.",
        }}
        tiers={[
          {
            tier: "Starter",
            price: "From $1,500",
            timeline: "1 to 2 weeks",
            fit: "A focused marketing-site migration with validated inputs.",
            includes: [
              "The distinct templates behind your pages counted, not just the URLs",
              "Your Webflow assets, forms and domain settings carried across",
              "Every animation listed, with the ones worth keeping approved by you before we build",
              "Rebuilt interactions tested against the agreed Lighthouse target on the scoped pages",
            ],
            cta: "Ask us about your site",
          },
          {
            tier: "Growth",
            price: "From $3,500",
            timeline: "2 to 4 weeks",
            fit: "A business site with broader interactions and content-model requirements.",
            includes: [
              "Everything in Starter",
              "Your collections moved field by field into a new editor",
              "CMS URLs preserved where possible, with agreed changes mapped and tested as redirects",
              "Anything Webflow will not export rebuilt by hand, and named for you",
            ],
            featured: true,
          },
          {
            tier: "Scale",
            price: "From $5,000",
            timeline: "3 to 6 weeks",
            fit: "Localization, ecommerce, data, or complex application requirements.",
            includes: [
              "Everything in Growth",
              "Multi-reference fields, nested collections and conditional visibility modelled again",
              "Interactions that gate a form step or drive a pricing calculator rebuilt as real logic",
              "An export path confirmed for anything holding member data, orders or submissions inside Webflow",
              "Your Localize locales listed and built into the new site",
            ],
          },
        ]}
      />

      <section className="py-10 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-3">Know what is included before we start</h2>
          <p className="text-stone-600 leading-relaxed">Your written scope names the pages, integrations, acceptance checks, price and dates. We agree access, ownership and handover, and explain the ongoing services your site needs.</p>
          <p className="mt-4 text-sm"><Link href="/editorial-policy" className="text-cognac underline underline-offset-4">How we publish and verify results</Link></p>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-300 text-sm text-stone-600 mb-6">
              <HelpCircle className="w-4 h-4" /> FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
            <p className="text-stone-600 text-lg">Improving Webflow, planning a move and running the replacement.</p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq) => (
                <div key={faq.q} className="border-b border-stone-200 pb-6">
                  <h3 className="text-base md:text-lg font-semibold text-charcoal mb-2">{faq.q}</h3>
                  <div>
                    <p className="text-sm md:text-base leading-relaxed text-stone-600">{faq.a}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WRITTEN MIGRATION TERMS */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl bg-linear-to-br from-stone-50 to-white border border-cognac/30 rounded-[3rem] p-12 relative overflow-hidden shadow-xl shadow-stone-300/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cognac/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cognac/10 text-cognac border border-cognac/20 text-xs font-bold uppercase tracking-[0.22em] mb-6">
              <ShieldCheck className="w-4 h-4" /> Written Migration Terms
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight leading-tight">
              Tell us what your Webflow site <span className="font-serif font-normal italic text-cognac">needs to do.</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Share the site and what is getting in the way. You will speak with a founder about the next step, whether that is a focused improvement or a rebuild. Scope and price are agreed before paid work starts.
            </p>
            <button
              data-cal-namespace="discovery"
              data-cal-link={process.env.NEXT_PUBLIC_CAL_LINK || undefined}
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all"
            >
              Book a call
            </button>
          </div>
        </div>
      </section>

      {/* Further Reading: blog cluster links */}
      <section className="py-10 px-6 bg-white border-t border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">Further reading</p>
          <ul className="space-y-2 text-stone-700">
            <li>&rarr; <Link href="/blog/webflow-migration-cost" className="text-charcoal hover:text-cognac underline underline-offset-2">Webflow migration scoping and cost inputs</Link></li>
            <li>&rarr; <Link href="/blog/webflow-true-cost" className="text-charcoal hover:text-cognac underline underline-offset-2">How to review Webflow&apos;s total operating cost</Link></li>
            <li>&rarr; <Link href="/blog/leaving-webflow-2026" className="text-charcoal hover:text-cognac underline underline-offset-2">Leaving Webflow in 2026: what actually happened</Link></li>
            <li>&rarr; <Link href="/blog/webflow-vs-custom-website" className="text-charcoal hover:text-cognac underline underline-offset-2">Webflow vs custom website 2026 comparison</Link></li>
          </ul>
        </div>
      </section>

      {/* Related Services, expanded to all platforms via reusable component */}
      <RelatedServicesGrid currentHref="/services/webflow" />

      <Footer />
    </main>
  );
}
