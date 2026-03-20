"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight, X, Minus, Zap, Clock, DollarSign, RotateCcw } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const comparisonRows = [
  { label: "Technology",    agency: "WordPress / Elementor",              pandagen: "Custom Next.js architecture",   isPain: false },
  { label: "PageSpeed",     agency: "40-70/100 average",                  pandagen: "100/100 guaranteed",            isPain: true  },
  { label: "Load Time",     agency: "2.0s to 4.0s average",               pandagen: "Under 1s, guaranteed",          isPain: true  },
  { label: "Security",      agency: "Plugin vulnerabilities",             pandagen: "No plugins, no backdoors",      isPain: true  },
  { label: "Ownership",     agency: "Locked to theme / agency",           pandagen: "100% code ownership",           isPain: true  },
  { label: "Monthly Cost",  agency: "Shopify Plus: $2,300+/mo + app fees", pandagen: "$0 to $50/mo at any scale",    isPain: true  },
  { label: "Billing",       agency: "Hourly, unpredictable",              pandagen: "Fixed-price deposit",           isPain: true  },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.pandacodegen.com/pricing#webpage",
      "url": "https://www.pandacodegen.com/pricing",
      "name": "Pricing | PandaCodeGen Custom Web Development",
      "description": "Fixed-price custom web development. Conversion sites from $2,900. Full migrations from $5,900. No hourly billing. 30-day money-back guarantee.",
      "isPartOf": { "@id": "https://www.pandacodegen.com/#website" },
      "about": { "@id": "https://www.pandacodegen.com/#organization" },
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pandacodegen.com" },
        { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.pandacodegen.com/pricing" }
      ]
    },
    {
      "@type": "Offer",
      "@id": "https://www.pandacodegen.com/pricing#offer-conversion",
      "name": "Conversion Site",
      "description": "1 high-conversion landing page with custom animations, under 1s load speed, and 3-day turnaround.",
      "price": "2900",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://www.pandacodegen.com/pricing",
      "seller": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization" }
    },
    {
      "@type": "Offer",
      "@id": "https://www.pandacodegen.com/pricing#offer-migration",
      "name": "Migration Engine",
      "description": "Full site migration up to 10 pages. Next.js headless architecture, blog + CMS, perfect 100 PageSpeed, zero monthly fees, 30-day post-launch support.",
      "price": "5900",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://www.pandacodegen.com/pricing",
      "seller": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pandacodegen.com/pricing#faq",
      "mainEntity": [
        { "@type": "Question", "name": "How does the deposit model work?", "acceptedAnswer": { "@type": "Answer", "text": "You pay 30% upfront to secure your engineering sprint and lock in your timeline. The remaining 70% is due on launch day, after you've seen the finished product and approved it." } },
        { "@type": "Question", "name": "What if I need more custom work?", "acceptedAnswer": { "@type": "Answer", "text": "Every project is unique. After the discovery call, we'll scope and quote your specific requirements. The tiers above are starting points, not ceilings." } },
        { "@type": "Question", "name": "Do you do retainers after launch?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most clients keep us on for ongoing updates ($500/mo) or priority new feature development at discounted rates." } },
        { "@type": "Question", "name": "Why is your price higher than a freelancer?", "acceptedAnswer": { "@type": "Answer", "text": "Because we're not building templates. We're building assets. Clients typically see their investment pay for itself within 6-12 months through faster load times, higher conversion rates, and eliminated plugin fees." } },
        { "@type": "Question", "name": "What's in the Discovery Call?", "acceptedAnswer": { "@type": "Answer", "text": "We audit your current site, understand your revenue goals, and map out the tech stack. Free, non-binding. Takes 30 minutes." } }
      ]
    }
  ]
};

export default function PricingPage() {
  return (
    <main className="bg-paper min-h-screen overflow-x-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-stone-200/40 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6"
          >
            Production-grade engineering. <br />
            <span className="font-serif italic text-stone-500">Fixed-price transparency.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 max-w-2xl mx-auto mb-12"
          >
            Stop paying for hours. Pay for outcomes. We require a 30% deposit to secure your engineering sprint.
          </motion.p>

          {/* Work Teaser Strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
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
            <span className="text-sm font-bold text-stone-500 uppercase tracking-widest">
              12 Sites Migrated · Avg PageSpeed: 98/100 · Avg Load Time: 0.8s
            </span>
          </motion.div>

          {/* Guarantee Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap md:flex-nowrap justify-center gap-3"
          >
            {[
              { icon: <Zap className="w-4 h-4" />, text: "100/100 PageSpeed. Guaranteed." },
              { icon: <Clock className="w-4 h-4" />, text: "Under 1s load time. Guaranteed." },
              { icon: <DollarSign className="w-4 h-4" />, text: "$0/month hosting forever." },
              { icon: <RotateCcw className="w-4 h-4" />, text: "30-day money-back guarantee." },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full text-sm font-semibold text-charcoal shadow-xs">
                <span className="text-cognac">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. PRICING GRID */}
      <section className="container mx-auto px-6 pb-24 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">

          {/* CARD 1: Conversion Site */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-linear-to-b from-white to-stone-50 border border-white shadow-xl shadow-stone-200/40 ring-1 ring-stone-900/5 opacity-80 hover:opacity-100 hover:border-cognac/20 hover:shadow-2xl hover:shadow-cognac/10 transition-all duration-500 flex flex-col"
          >
            <div className="mb-6 min-h-[64px]">
              <h3 className="text-xl font-bold text-charcoal">Conversion Site</h3>
              <p className="text-sm text-stone-500 mt-1">For campaigns &amp; startups.</p>
            </div>

            <div className="mb-8 pb-8 border-b border-stone-100 min-h-[140px] flex flex-col justify-start">
              <div className="text-xs font-black text-cognac uppercase tracking-widest mb-2">Deposit to Start</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl font-black text-charcoal">$900</span>
                <span className="text-lg font-bold text-stone-500">USD</span>
              </div>
              <div className="inline-block bg-stone-100 px-3 py-1 rounded-md border border-stone-200">
                <p className="text-sm font-bold text-stone-700">Total Project: $2,900</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 grow">
              <Feature text="1 High-Conversion Landing Page (built to turn visitors into booked calls or purchases, not just look good)" />
              <Feature text="Custom Animations &amp; Interactions (scroll-triggered, no Lottie bloat, pure CSS/JS so it never slows your score)" />
              <Feature text="3-Day Turnaround (from deposit to live — faster than any agency quoting 4-week timelines)" />
              <Feature text="Perfect 100 Google PageSpeed (every page we ship hits 95 to 100, guaranteed in writing)" />
              <Feature text="Mobile-First Build (designed on mobile screen first, then scaled up, not the other way around)" />
              <Feature text="Zero Monthly Fees (no Webflow subscription, no plugin bills, no hosting invoices. Ever)" />
            </ul>

            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="w-full py-4 rounded-xl bg-charcoal text-white font-bold hover:bg-cognac transition-colors duration-300"
            >
              Book Slot
            </button>
          </motion.div>

          {/* CARD 2: Migration Engine, THE MIDNIGHT WINNER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-8 rounded-[2.5rem] bg-[#0C0A09] text-white shadow-2xl shadow-stone-900/30 lg:scale-105 lg:z-10 flex flex-col"
          >
            {/* Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cognac text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
              Most Popular
            </div>

            <div className="mb-6 min-h-[64px]">
              <h3 className="text-2xl font-serif italic text-white">Migration Engine</h3>
              <p className="text-stone-400 mt-1">Complete platform re-platforming.</p>
            </div>

            <div className="mb-6 pb-6 border-b border-white/10 min-h-[140px] flex flex-col justify-start">
              <div className="text-xs font-black text-cognac uppercase tracking-widest mb-2">Deposit to Start</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-6xl font-black text-white">$1,800</span>
                <span className="text-lg font-bold text-stone-400">USD</span>
              </div>
              <div className="inline-block bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <p className="text-sm font-bold text-stone-300">Total Project: $5,900</p>
              </div>
            </div>

            <ul className="space-y-3 mb-6 grow">
              <Feature dark text="Full Site Migration (up to 10 custom pages, product pages generate automatically from your catalog)" />
              <Feature dark text="Next.js Headless Architecture (your store loads 4x faster because the frontend is separated from the backend)" />
              <Feature dark text="Blog + CMS Integration" />
              <Feature dark text="Perfect 100 Google PageSpeed (the score Google uses to rank your site)" />
              <Feature dark text="Zero Monthly Fees Forever" />
              <Feature dark text="30 Days Post-Launch Support" />
            </ul>

            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="w-full py-5 rounded-xl bg-white text-charcoal font-bold hover:bg-cognac hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(255,255,255,0.15)]"
            >
              Start Project <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs text-center text-stone-500 mt-4">
              Fully refundable within 30 days. No risk.
            </p>
          </motion.div>

          {/* CARD 3: Custom SaaS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-linear-to-b from-white to-stone-50 border border-white shadow-xl shadow-stone-200/40 ring-1 ring-stone-900/5 opacity-80 hover:opacity-100 hover:border-cognac/20 hover:shadow-2xl hover:shadow-cognac/10 transition-all duration-500 flex flex-col"
          >
            <div className="mb-6 min-h-[64px]">
              <h3 className="text-xl font-bold text-charcoal">Custom SaaS &amp; Stores</h3>
              <p className="text-sm text-stone-500 mt-1">Web apps, dashboards &amp; e-commerce.</p>
            </div>

            <div className="mb-8 pb-8 border-b border-stone-100 min-h-[140px] flex flex-col justify-start">
              <div className="text-xs font-black text-cognac uppercase tracking-widest mb-2">Deposit to Start</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl font-black text-charcoal">$4k+</span>
                <span className="text-lg font-bold text-stone-500">USD</span>
              </div>
              <div className="inline-block bg-stone-100 px-3 py-1 rounded-md border border-stone-200">
                <p className="text-sm font-bold text-stone-700">Total Project: Custom Scope</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8 grow">
              <Feature text="Full-Stack Next.js Application (built to scale from day one, not patched together)" />
              <Feature text="Auth &amp; Database Design (secure login, role-based access, and a schema built for your exact data model)" />
              <Feature text="Subscription &amp; Payment Infrastructure (Stripe integration with recurring billing, trials, and webhook handling)" />
              <Feature text="Admin Dashboards (internal ops panels so your team can manage users, orders, and data without a developer)" />
              <Feature text="AI &amp; API Integrations (connect any third-party service or LLM into your product)" />
              <Feature text="Priority Engineering Support (dedicated Slack channel and same-day response for the lifetime of the project)" />
            </ul>

            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="w-full py-4 rounded-xl bg-charcoal text-white font-bold hover:bg-cognac transition-colors duration-300"
            >
              Book Strategy Call
            </button>
          </motion.div>

        </div>

        {/* Early Client Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-stone-500">
            Early client rate available on all tiers.{" "}
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="text-cognac font-semibold hover:underline"
            >
              Book a call to discuss.
            </button>
          </p>
        </motion.div>

        {/* Hourly / Retainer Option */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-black text-cognac uppercase tracking-widest mb-2">Prefer Hourly?</p>
              <h3 className="text-xl font-bold text-charcoal mb-1">Hourly &amp; Retainer Engagements</h3>
              <p className="text-stone-500 text-sm max-w-md">
                Some clients prefer hourly for audits, code reviews, bug fixes, or ongoing feature work after launch. We accommodate that too. Rate starts at $50 to $99/hr depending on scope. Retainers from $500/mo for priority access.
              </p>
            </div>
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="shrink-0 px-6 py-3 border border-stone-300 text-charcoal font-bold rounded-xl hover:border-cognac hover:text-cognac transition-colors text-sm whitespace-nowrap"
            >
              Discuss Your Needs
            </button>
          </div>
        </motion.div>
      </section>

      {/* 3. DEPOSIT MODEL EXPLAINER */}
      <section className="container mx-auto px-6 pb-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-stone-200 rounded-3xl p-8 md:p-12 shadow-xs"
        >
          <h2 className="text-3xl font-bold text-charcoal mb-6">Why we use the Deposit Model.</h2>
          <div className="grid md:grid-cols-2 gap-10 text-stone-600 leading-relaxed">
            <div>
              <h3 className="text-charcoal font-bold mb-2 flex items-center gap-2">
                <span>🚫</span> The Hourly Billing Trap
              </h3>
              <p>
                Most agencies charge $100 to $200/hour. This punishes efficiency. If they work slowly, you pay more. You never know the final bill. It creates a conflict of interest where their incentive is to go slow.
              </p>
            </div>
            <div>
              <h3 className="text-charcoal font-bold mb-2 flex items-center gap-2">
                <span>✅</span> The PandaCodeGen Sprint Model
              </h3>
              <p>
                A 30% deposit secures your engineering sprint. Whether it takes 50 hours or 500 to get it perfect, you pay the agreed price. We take the risk, not you. Your incentive and ours are perfectly aligned.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. RISK REVERSAL */}
      <section className="container mx-auto px-6 pb-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-xs"
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-green-50 border border-green-100 rounded-2xl shrink-0">
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-1">Our Guarantee</h3>
              <p className="text-stone-500 text-sm">Here&apos;s exactly how this works, step by step.</p>
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                num: "01",
                title: "You only pay a deposit to start",
                body: "We take a 30 to 50% deposit upfront to secure your engineering sprint and cover initial design and architecture work. That's all you owe until delivery.",
              },
              {
                num: "02",
                title: "No final payment until you're satisfied",
                body: "The remaining balance is only due after we deliver the project and you're happy with it. We don't charge you the rest just because the calendar says so. We charge when the work is done right.",
              },
              {
                num: "03",
                title: "30-day money-back after delivery",
                body: "After we hand over the finished site, you have 30 days to put it through its paces. If the site is genuinely not performing as agreed (slow load times, broken features, anything we promised and didn't deliver), we refund your deposit. No awkward conversations. No dispute process. You clearly asked us for something and we didn't deliver it: you get your money back.",
              },
              {
                num: "04",
                title: "Escrow available on request",
                body: "If you prefer, we can run the project through a third-party escrow service (Escrow.com or similar). Funds are held by the escrow provider and released to us only when you approve the final delivery. Industry standard for larger projects.",
              },
              {
                num: "05",
                title: "You keep everything, either way",
                body: "If we refund you, you keep all designs, wireframes, and any code written to that point. We don't ask for anything back. It's your IP from the moment it's created.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 pb-5 border-b border-stone-100 last:border-b-0 last:pb-0">
                <div className="text-xs font-black text-stone-300 tracking-widest w-6 shrink-0 pt-0.5">{item.num}</div>
                <div>
                  <div className="text-charcoal font-bold mb-1">{item.title}</div>
                  <div className="text-stone-500 text-sm leading-relaxed">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section className="container mx-auto px-6 pb-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">The Real Cost</p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Why Standard Agencies{" "}
            <span className="font-serif italic text-stone-500">Cost You More.</span>
          </h2>
        </motion.div>

        <div className="overflow-x-auto">
          <div className="min-w-[640px] rounded-3xl border border-stone-200 overflow-hidden shadow-xs">

            {/* Cognac accent bar, top of PandaCodeGen column only */}
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr]">
              <div className="h-1 bg-stone-50" />
              <div className="h-1 bg-stone-50" />
              <div className="h-1 bg-cognac" />
            </div>

            {/* Header row */}
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] bg-stone-50 border-b border-stone-200">
              <div className="px-5 py-4 text-xs font-black text-stone-400 uppercase tracking-widest">Feature</div>
              <div className="px-5 py-4 text-sm font-bold text-stone-600 border-l border-stone-200">Standard Agency</div>
              <div className="px-5 py-4 text-sm font-bold text-cognac border-l border-stone-200 bg-paper">PandaCodeGen</div>
            </div>

            {/* Data rows */}
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-[1fr_1.4fr_1.4fr] border-b border-stone-200 text-sm">
                <div className="px-5 py-4 text-charcoal font-bold flex items-center">{row.label}</div>
                <div className={`px-5 py-4 border-l border-stone-200 flex items-center gap-2.5 font-medium ${row.isPain ? "text-red-600 bg-red-50/40" : "text-stone-500"}`}>
                  {row.isPain
                    ? <X className="w-4 h-4 text-red-500 shrink-0" />
                    : <Minus className="w-4 h-4 text-stone-400 shrink-0" />
                  }
                  {row.agency}
                </div>
                <div className="px-5 py-4 border-l border-stone-200 bg-paper flex items-center gap-2.5 font-black text-charcoal">
                  <div className="w-5 h-5 rounded-full bg-cognac flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  {row.pandagen}
                </div>
              </div>
            ))}

            {/* Summary footer, inside the border */}
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] bg-charcoal">
              <div className="px-5 py-6 text-xs font-black uppercase tracking-widest text-white flex items-center">Net Result</div>
              <div className="px-5 py-6 border-l border-white/10 text-stone-300 font-medium text-sm flex items-center gap-2.5">
                <X className="w-4 h-4 text-red-400 shrink-0" />
                Endless maintenance &amp; fees
              </div>
              <div className="px-5 py-6 border-l border-white/10 bg-cognac text-white font-black text-base flex items-center gap-2.5">
                <ArrowRight className="w-4 h-4 shrink-0" />
                An asset that compounds in value
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL */}
      <section className="container mx-auto px-6 pb-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-xs text-center"
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-cognac" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-lg md:text-xl font-serif italic text-charcoal leading-relaxed mb-6 max-w-2xl mx-auto">
            &ldquo;Load time dropped from 3+ seconds to 0.7 seconds. PageSpeed went from 40 to 100/100. Hosting cost dropped from $150/month to $0. Zero data loss, zero downtime during cutover. The ROI was immediate.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-stone-300" />
            <div>
              <div className="text-sm font-bold text-charcoal">MyCustomPatches</div>
              <div className="text-xs text-stone-400">Patch Manufacturing · WordPress Migration</div>
            </div>
            <div className="h-px w-8 bg-stone-300" />
          </div>
        </motion.div>
      </section>

      {/* 7. FAQ */}
      <section className="container mx-auto px-6 pb-32 max-w-3xl">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-12">Common Questions</h2>
        <div className="space-y-6">
          <FAQ
            q="How does the deposit model work?"
            a="You pay 30% upfront to secure your engineering sprint and lock in your timeline. The remaining 70% is due on launch day, after you've seen the finished product and approved it."
          />
          <FAQ
            q="What if I need more custom work?"
            a="Every project is unique. After the discovery call, we'll scope and quote your specific requirements. The tiers above are starting points, not ceilings."
          />
          <FAQ
            q="Do you do retainers after launch?"
            a="Yes. Most clients keep us on for ongoing updates ($500/mo) or priority new feature development at discounted rates."
          />
          <FAQ
            q="Why not just hire a freelancer on Upwork or Fiverr?"
            a="A freelancer gives you a file. We give you a system. Our builds include architecture review, SEO preservation, performance guarantees, 30 days of post-launch support, and full IP handover to your accounts. Freelancers disappear after delivery. We don't, and we have the case studies to prove it."
          />
          <FAQ
            q="Why is your price higher than a freelancer?"
            a="Because we're not building templates. We're building assets. Clients typically see their investment pay for itself within 6 to 12 months through faster load times, higher conversion rates, and eliminated plugin and hosting fees. MyCustomPatches went from $150/mo in hosting to $0 and from a 40 PageSpeed score to 100/100. The build paid for itself in under a year."
          />
          <FAQ
            q="What's in the Discovery Call?"
            a="We audit your current site, understand your revenue goals, and map out the tech stack. Free, non-binding. Takes 30 minutes."
          />
          <FAQ
            q="Do you offer early client pricing?"
            a="Yes. We selectively offer a reduced rate for early clients in exchange for a detailed case study and review after launch. Book a discovery call and mention it — we'll discuss what makes sense for your project."
          />
          <FAQ
            q="What exactly does the 100/100 PageSpeed guarantee mean?"
            a="It means your site will score 100/100 on Google PageSpeed Insights on desktop and 95+ on mobile at launch. If it doesn't, we keep working until it does at no extra cost. We have never failed to hit this on a completed project."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Feature({ text, dark }: { text: string; dark?: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <div className={`rounded-full p-1 shrink-0 ${dark ? "bg-stone-800" : "bg-cognac/10"}`}>
        <Check className={`w-3 h-3 ${dark ? "text-cognac" : "text-cognac"}`} />
      </div>
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
      className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-xs transition-all"
    >
      <h3 className="text-lg font-bold text-charcoal mb-3">{q}</h3>
      <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
    </motion.div>
  );
}
