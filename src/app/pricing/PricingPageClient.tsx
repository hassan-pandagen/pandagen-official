"use client";

import { motion } from "@/components/ui/motion";
import { Check, ShieldCheck, ArrowRight, X, Minus, Zap, Clock, DollarSign, RotateCcw } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { trackGAEvent } from "@/components/GoogleAnalytics";
import { pricingFaqs } from "@/data/pricing-faqs";

const comparisonRows = [
  { label: "Scope", agency: "May be described at a high level", pandagen: "Every URL, all the content, what it connects to, and what is not included", isPain: false },
  { label: "Performance", agency: "Target may be unspecified", pandagen: "90+ Lighthouse target, pages, profile, and three-run handover check written into scope", isPain: false },
  { label: "Migration", agency: "Redirect and cutover detail varies", pandagen: "A full inventory, a redirect map, the testing, and a way back", isPain: false },
  { label: "Ownership", agency: "Depends on the contract", pandagen: "Ownership and license terms stated in the proposal", isPain: false },
  { label: "Ongoing cost", agency: "Platform and vendor charges vary", pandagen: "Known third-party costs documented before approval", isPain: false },
  { label: "Changes", agency: "Process varies", pandagen: "Out-of-scope work requires a separate written quote", isPain: false },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.pandacodegen.com/pricing#webpage",
      "url": "https://www.pandacodegen.com/pricing",
      "name": "Website Migration Pricing & Scope | PandaCodeGen",
      "description": "Website migration packages starting at $1,500, $3,500, and $5,000–$10,000, adjusted through a written project scope.",
      "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
        { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.pandacodegen.com/pricing" }
      ]
    }
  ]
};

export default function PricingPageClient() {
  return (
    <main className="bg-paper min-h-screen overflow-x-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingSchema),
        }}
      />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-20 md:pt-40 pb-10 md:pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-stone-200/40 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight md:tracking-tighter mb-6 leading-[1.08] md:leading-tight break-words"
          >
            Example migration scopes. <br className="hidden md:inline" />{" "}
            <span className="font-serif italic text-cognac">A written quote for your actual risk.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-700 max-w-2xl mx-auto mb-6"
          >
            Choose the closest starting package, then add or remove pages and features in a written quote. A common package starting structure is 30% at onboarding and 70% at the delivery milestone defined in the accepted project terms; another written schedule can be agreed for a particular project.
          </motion.p>

          <button
            type="button"
            onClick={() => {
              trackGAEvent("cta_click", { cta: "get_migration_plan", location: "pricing_hero" });
              window.dispatchEvent(new Event("open-quote-modal"));
            }}
            className="mb-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3 font-bold text-white transition-colors hover:bg-cognac"
          >
            Get your migration plan <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <p className="text-base font-semibold text-charcoal max-w-2xl mx-auto mb-12">
            Scope is driven by URL and content volume, CMS models, integrations, analytics, compliance needs, stakeholders, and migration risk, not page count alone.
          </p>

          {/* Work Teaser Strip */}
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-paper bg-stone-300 overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-stone-300 to-stone-400" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-paper bg-stone-400 overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-stone-400 to-stone-500" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-paper bg-stone-500 overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-stone-500 to-stone-700" />
              </div>
            </div>
            <span className="text-sm font-bold text-stone-600 uppercase tracking-widest">
              URL inventory · Content model · Integrations · Cutover risk
            </span>
          </motion.div>

          {/* Scope-control badges */}
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap md:flex-nowrap justify-center gap-3"
          >
            {[
              { icon: <Zap className="w-4 h-4" />, text: "Acceptance test in writing" },
              { icon: <Clock className="w-4 h-4" />, text: "Timeline defined by scope" },
              { icon: <DollarSign className="w-4 h-4" />, text: "Third-party costs listed" },
              { icon: <RotateCcw className="w-4 h-4" />, text: "Change terms documented" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-300 rounded-full text-sm font-semibold text-charcoal shadow-xs">
                <span className="text-cognac">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. PRICING GRID */}
      <section className="container mx-auto px-6 pb-12 md:pb-24 max-w-6xl">
        <h2 className="sr-only">Website planning examples</h2>
        <div className="grid lg:grid-cols-3 gap-10 md:gap-8 items-stretch max-w-md lg:max-w-none mx-auto">

          {/* CARD 1: Starter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-linear-to-b from-white to-stone-50 border border-white shadow-xl shadow-stone-200/40 ring-1 ring-stone-900/5 hover:border-cognac/20 hover:shadow-2xl hover:shadow-cognac/10 transition-all duration-500 flex flex-col"
          >
            <div className="mb-6 min-h-[64px]">
              <h3 className="text-xl font-bold text-charcoal">Starter</h3>
              <p className="text-sm text-stone-600 mt-1">Small business sites, 5 to 7 pages.</p>
            </div>

            <div className="mb-8 pb-8 border-b border-stone-100 min-h-[140px] flex flex-col justify-start">
              <div className="text-xs font-black text-cognac uppercase tracking-widest mb-2">Commercial terms</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-black text-charcoal">$1,500</span>
              </div>
              <div className="inline-block bg-stone-100 px-3 py-1 rounded-md border border-stone-200">
                <p className="text-sm font-bold text-stone-700">Starting package · exact scope in proposal</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 grow">
              <Feature text="5 to 7 custom pages, with the exact templates and content responsibilities listed in scope" />
              <Feature text="A Next.js deployment, with the code, the environments and who does what at handover all written down" />
              <Feature text="90+ Lighthouse performance target on both mobile and desktop for the agreed representative pages" />
              <Feature text="Three recorded pre-handover runs per agreed page/profile; every run must meet the target" />
              <Feature text="Mobile-First Build (designed on mobile screen first, then scaled up, not the other way around)" />
              <Feature text="Hosting and third-party service options documented before approval" />
              <Feature text="15 business days of included support for the agreed deliverables; start point and coverage stated in the accepted project terms" />
            </ul>

            <button
              type="button"
              onClick={() => {
                trackGAEvent("cta_click", { cta: "get_migration_plan", location: "pricing_starter" });
                window.dispatchEvent(new Event("open-quote-modal"));
              }}
              className="w-full py-4 rounded-xl bg-charcoal text-white font-bold hover:bg-cognac transition-colors duration-300"
            >
              Get your migration plan
            </button>
          </motion.div>

          {/* CARD 2: Growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-8 rounded-[2.5rem] bg-[#0C0A09] text-white shadow-2xl shadow-stone-900/30 lg:scale-105 lg:z-10 flex flex-col"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cognac text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
              Migration example
            </div>

            <div className="mb-6 min-h-[64px]">
              <h3 className="text-2xl font-serif italic text-white">Growth</h3>
              <p className="text-stone-400 mt-1">10 to 20 pages, CMS, full migration.</p>
            </div>

            <div className="mb-6 pb-6 border-b border-white/10 min-h-[140px] flex flex-col justify-start">
              <div className="text-xs font-black text-orange-300 uppercase tracking-widest mb-2">Commercial terms</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-black text-white">$3,500</span>
              </div>
              <div className="inline-block bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <p className="text-sm font-bold text-stone-300">Starting package · exact scope in proposal</p>
              </div>
            </div>

            <ul className="space-y-3 mb-6 grow">
              <Feature dark text="10 to 20 Page Custom Site (full marketing site with service pages, case studies, and resources)" />
              <Feature dark text="Sanity CMS Integration (your team updates content without touching code)" />
              <Feature dark text="Blog migration with every URL listed, a redirect map, metadata carried across, and monitoring after launch" />
              <Feature dark text="90+ Lighthouse performance target on mobile and desktop, with three passing runs per agreed page/profile" />
              <Feature dark text="Hosting and third-party service costs listed before approval" />
              <Feature dark text="30 business days of included support for the agreed deliverables; start point and coverage stated in the accepted project terms" />
            </ul>

            <button onClick={() => { trackGAEvent("cta_click", { cta: "get_migration_plan", location: "pricing_growth" }); window.dispatchEvent(new Event("open-quote-modal")); }} className="w-full py-5 rounded-xl bg-white text-charcoal font-bold hover:bg-cognac hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(255,255,255,0.15)]">
                Get your migration plan <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-center text-stone-400 mt-4">
              The scope, when you pay, what is warranted and what happens if something is wrong are all confirmed in the written project terms.
            </p>

            <Link href="/services/wordpress-migration" className="block text-center text-xs text-stone-400 hover:text-orange-300 transition-colors mt-3 underline underline-offset-2">
              Moving off WordPress? See the full migration scope
            </Link>
          </motion.div>

          {/* CARD 3: Scale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-linear-to-b from-white to-stone-50 border border-white shadow-xl shadow-stone-200/40 ring-1 ring-stone-900/5 hover:border-cognac/20 hover:shadow-2xl hover:shadow-cognac/10 transition-all duration-500 flex flex-col"
          >
            <div className="mb-6 min-h-[64px]">
              <h3 className="text-xl font-bold text-charcoal">Scale</h3>
              <p className="text-sm text-stone-600 mt-1">Headless e-commerce &amp; 30+ pages.</p>
            </div>

            <div className="mb-8 pb-8 border-b border-stone-100 min-h-[140px] flex flex-col justify-start">
              <div className="text-xs font-black text-cognac uppercase tracking-widest mb-2">Commercial terms</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-black text-charcoal">$5,000–$10,000</span>
              </div>
              <div className="inline-block bg-stone-100 px-3 py-1 rounded-md border border-stone-200">
                <p className="text-sm font-bold text-stone-700">Starting range · exact scope in proposal</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8 grow">
              <Feature text="Headless E-Commerce (Shopify or WooCommerce backend, Next.js frontend. The speed of custom, the admin of Shopify)" />
              <Feature text="30+ page or template scope for products, collections, content, and landing pages" />
              <Feature text="Reviewed integrations such as Klaviyo, HubSpot, Salesforce, Stripe subscriptions, or another documented API" />
              <Feature text="90+ Lighthouse performance target on mobile and desktop, with three passing runs per agreed page/profile" />
              <Feature text="Sanity CMS + Content Ops (content model designed for your editors, not generic templates)" />
              <Feature text="30 business days of included support for the agreed deliverables; start point and coverage stated in the accepted project terms" />
            </ul>

            <button
              type="button"
              onClick={() => {
                trackGAEvent("cta_click", { cta: "get_migration_plan", location: "pricing_scale" });
                window.dispatchEvent(new Event("open-quote-modal"));
              }}
              className="w-full py-4 rounded-xl bg-charcoal text-white font-bold hover:bg-cognac transition-colors duration-300"
            >
              Get your migration plan
            </button>

            <Link href="/services/ecommerce" className="block text-center text-xs text-stone-600 hover:text-cognac transition-colors mt-3 underline underline-offset-2">
              See our headless e-commerce service
            </Link>
          </motion.div>

        </div>

        {/* Scale+ Custom Quote Callout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-10 max-w-3xl mx-auto"
        >
          <div className="p-5 md:p-6 rounded-2xl border border-stone-300 bg-white shadow-xs flex flex-col md:flex-row items-start md:items-center gap-4 md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-charcoal mb-2">Scale+ Custom Engagement</p>
              <h3 className="text-lg md:text-xl font-bold text-charcoal mb-1">Bigger project? Let&apos;s scope it together.</h3>
              <p className="text-sm text-stone-600">Enterprise scope, multi-region e-commerce, custom SaaS platforms, complex integrations. We cannot quote without understanding the work. Message us and we will scope it on a call. Curious what this looks like in practice? See our <Link href="/services/custom-engineering" className="text-cognac underline underline-offset-2 hover:text-charcoal transition-colors">custom engineering service</Link>.</p>
            </div>
            <button onClick={() => { trackGAEvent("cta_click", { cta: "get_migration_plan", location: "pricing_scale_plus" }); window.dispatchEvent(new Event("open-quote-modal")); }} className="shrink-0 px-5 py-2.5 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-cognac transition-all">
                Get your migration plan
            </button>
          </div>
        </motion.div>

      </section>

      {/* 3. WRITTEN QUOTE EXPLAINER */}
      <section className="container mx-auto px-6 pb-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-stone-300 rounded-3xl p-8 md:p-12 shadow-xs"
        >
          <h2 className="text-3xl font-bold text-charcoal mb-6">How the written quote works.</h2>
          <div className="grid md:grid-cols-2 gap-10 text-stone-600 leading-relaxed">
            <div>
              <h3 className="text-charcoal font-bold mb-2 flex items-center gap-2">
                <span aria-hidden="true">01</span> Scope before price
              </h3>
              <p>
                We first inventory the pages, content, integrations, constraints, stakeholders, and acceptance tests. The written project summary then states what is included, excluded, and assumed.
              </p>
            </div>
            <div>
              <h3 className="text-charcoal font-bold mb-2 flex items-center gap-2">
                <span aria-hidden="true">02</span> Written change control
              </h3>
              <p>
                A common payment option is 30% at onboarding and 70% at the delivery milestone defined in the accepted project terms, but another written schedule may be agreed. Revision limits are stated before work begins, and material out-of-scope requests receive a separate written estimate and require approval.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. PACKAGE STARTING POINTS */}
      <section className="container mx-auto px-6 pb-12 md:pb-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-stone-300 rounded-3xl p-8 md:p-10 shadow-xs"
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-green-50 border border-green-100 rounded-2xl shrink-0">
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-1">Flexible package starting points</h2>
              <p className="text-stone-600 text-sm">These options may be used, changed, or omitted. A signed agreement or a clear quote or order summary accepted in email or chat supplies the project-specific detail and controls.</p>
            </div>
          </div>

          <div className="space-y-5">
            {[
              { num: "01", title: "Scope and additions", body: "The starting package is adjusted for the approved pages and features. Deliverables, integrations, content responsibilities, exclusions, and any separately priced additions are listed explicitly." },
              { num: "02", title: "Written scope protection", body: "When included in the accepted project terms, PandaCodeGen refunds 100% of the fees paid under that scope if it fails to deliver the promised deliverables. The written terms define the trigger and cure process; this is not a change-of-mind refund." },
              { num: "03", title: "90+ performance handover target", body: "The accepted project terms name the representative pages and test conditions for mobile and desktop. Each of three recorded runs per agreed page/profile must reach 90+ before handover." },
              { num: "04", title: "Support option", body: "Package discussions may start with 15 business days for Starter and 30 business days for Growth and Scale. Support applies only when the accepted project terms state when it starts, what defects or minor adjustments it covers, and any bespoke arrangement." },
              { num: "05", title: "Payment, changes, and ownership", body: "A common payment option is 30% at onboarding and 70% at the defined delivery milestone; the parties may agree otherwise in writing. Currency, taxes, revision limits, separately priced additions, ownership transfer, licenses, accounts, and third-party costs are stated before implementation." },
              { num: "06", title: "Launch and rollback", body: "Responsibilities for redirects, analytics, forms, DNS, monitoring, rollback, and post-launch review are included in the cutover plan." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 pb-5 border-b border-stone-100 last:border-b-0 last:pb-0">
                <div className="text-xs font-black text-stone-600 tracking-widest w-6 shrink-0 pt-0.5">{item.num}</div>
                <div>
                  <div className="text-charcoal font-bold mb-1">{item.title}</div>
                  <div className="text-stone-600 text-sm leading-relaxed">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section className="container mx-auto px-6 pb-12 md:pb-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">Contract clarity</p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Compare the scope,{" "}
            <span className="font-serif italic text-cognac">not just the headline price.</span>
          </h2>
        </motion.div>

        <div
          className="rounded-3xl border border-stone-200 overflow-hidden shadow-xs bg-white"
          role="table"
          aria-label="High-level quote and reviewed project scope comparison"
        >
          {/* Accent bar for desktop only */}
          <div className="hidden md:grid md:grid-cols-[1fr_1.4fr_1.4fr]" aria-hidden="true">
            <div className="h-1 bg-stone-50" />
            <div className="h-1 bg-stone-50" />
            <div className="h-1 bg-cognac" />
          </div>
          {/* Header for desktop only. On mobile each row gets inline labels. */}
          <div role="row" className="sr-only md:not-sr-only md:grid md:grid-cols-[1fr_1.4fr_1.4fr] bg-stone-50 border-b border-stone-200">
            <div role="columnheader" className="px-5 py-4 text-xs font-black text-stone-600 uppercase tracking-widest">Feature</div>
            <div role="columnheader" className="px-5 py-4 text-sm font-bold text-stone-600 border-l border-stone-200">High-level quote</div>
            <div role="columnheader" className="px-5 py-4 text-sm font-bold text-cognac border-l border-stone-200 bg-paper">Reviewed project scope</div>
          </div>
          {comparisonRows.map((row, i) => (
            <div
              key={i}
              role="row"
              className="p-4 border-b border-stone-200 text-sm md:p-0 md:grid md:grid-cols-[1fr_1.4fr_1.4fr]"
            >
              <div role="rowheader" className="text-charcoal font-bold mb-3 md:mb-0 md:px-5 md:py-4 md:flex md:items-center">{row.label}</div>
              <div role="cell" className={`flex items-center justify-between gap-3 mb-2 md:mb-0 md:justify-start md:gap-2.5 md:px-5 md:py-4 md:border-l md:border-stone-200 font-medium ${row.isPain ? "text-red-600 md:bg-red-50/40" : "text-stone-600"}`}>
                <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-stone-600 not-italic">High-level quote</span>
                <span className="flex items-center gap-2.5">
                  {row.isPain ? <X className="w-4 h-4 text-red-600 shrink-0" /> : <Minus className="w-4 h-4 text-stone-600 shrink-0" />}
                  {row.agency}
                </span>
              </div>
              <div role="cell" className="flex items-center justify-between gap-3 md:justify-start md:gap-2.5 md:px-5 md:py-4 md:border-l md:border-stone-200 md:bg-paper font-black text-charcoal">
                <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-cognac not-italic">Reviewed scope</span>
                <span className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cognac flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  {row.pandagen}
                </span>
              </div>
            </div>
          ))}
          {/* Net Result footer */}
          <div role="row" className="p-4 bg-charcoal text-sm md:p-0 md:grid md:grid-cols-[1fr_1.4fr_1.4fr]">
            <div role="rowheader" className="text-xs font-black uppercase tracking-widest text-white mb-3 md:mb-0 md:px-5 md:py-6 md:flex md:items-center">What to compare</div>
            <div role="cell" className="flex items-center justify-between gap-3 mb-2 md:mb-0 md:justify-start md:gap-2.5 md:px-5 md:py-6 md:border-l md:border-white/10 text-stone-300 font-medium">
              <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-stone-300 not-italic">High-level quote</span>
              <span className="flex items-center gap-2.5">
                <X className="w-4 h-4 text-stone-300 shrink-0" />
                Important assumptions can remain unresolved
              </span>
            </div>
            <div role="cell" className="flex items-center justify-between gap-3 md:justify-start md:gap-2.5 md:px-5 md:py-6 md:border-l md:border-white/10 md:bg-cognac text-white font-black text-base">
              <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-white not-italic">Reviewed scope</span>
              <span className="flex items-center gap-2.5">
                <ArrowRight className="w-4 h-4 shrink-0" />
                Named acceptance, ownership, cost, and change rules
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EVIDENCE NOTE */}
      <section className="container mx-auto px-6 pb-10 md:pb-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-stone-300 rounded-3xl p-8 md:p-10 shadow-xs text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">Evidence standard</p>
          <p className="text-lg md:text-xl font-serif italic text-charcoal leading-relaxed mb-6 max-w-2xl mx-auto">
            Review the migration scope, baseline, implementation, measurement date, and limitations before relying on a result figure.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-stone-300" />
            <div>
              <div className="text-sm font-bold text-charcoal">Project evidence</div>
              <div className="text-xs text-stone-600">Method, permission, date, and limitations</div>
            </div>
            <div className="h-px w-8 bg-stone-300" />
          </div>
          <Link href="/work" className="inline-block mt-6 text-sm font-bold text-cognac hover:underline underline-offset-2">
            Review the publication standard →
          </Link>
        </motion.div>
      </section>

      {/* 7. FAQ */}
      <section className="container mx-auto px-6 pb-16 md:pb-32 max-w-3xl">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-8 md:mb-12">Common Questions</h2>
        <div className="space-y-6">
          {pricingFaqs.map((faq) => (
            <FAQ key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Feature({ text, dark }: { text: string; dark?: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <span className="text-cognac font-bold text-base shrink-0 leading-none">&#x2713;</span>
      <span className={`text-sm font-medium ${dark ? "text-stone-300" : "text-stone-600"}`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </li>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-stone-300 rounded-2xl p-6 hover:shadow-xs transition-all"
    >
      <h3 className="text-lg font-bold text-charcoal mb-3">{q}</h3>
      <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
    </motion.div>
  );
}
