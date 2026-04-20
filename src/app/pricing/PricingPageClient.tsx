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
      "description": "Fixed-price custom Next.js builds. Starter $1,500. Growth $3,500. Scale $5,000 to $10,000. Scale+ custom quote for enterprise. No hourly billing. 30-day money-back guarantee.",
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
      "@id": "https://www.pandacodegen.com/pricing#offer-starter",
      "name": "Starter",
      "description": "5 to 7 page custom Next.js business site. Under 1 second load time. 95+ Google PageSpeed guaranteed. Mobile-first build. Zero monthly fees.",
      "price": "1500",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://www.pandacodegen.com/pricing",
      "seller": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization" }
    },
    {
      "@type": "Offer",
      "@id": "https://www.pandacodegen.com/pricing#offer-growth",
      "name": "Growth",
      "description": "10 to 20 page custom Next.js site with Sanity CMS, blog migration, 301 redirects, and 30 days of post-launch support. Most Popular tier.",
      "price": "3500",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://www.pandacodegen.com/pricing",
      "seller": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization" }
    },
    {
      "@type": "Offer",
      "@id": "https://www.pandacodegen.com/pricing#offer-scale",
      "name": "Scale",
      "description": "Headless e-commerce (Shopify or WooCommerce), 30+ pages, custom integrations, advanced performance optimization. Full Next.js rebuild.",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "5000",
        "maxPrice": "10000",
        "priceCurrency": "USD"
      },
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://www.pandacodegen.com/pricing",
      "seller": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization" }
    },
    {
      "@type": "Offer",
      "@id": "https://www.pandacodegen.com/pricing#offer-scale-plus",
      "name": "Scale+ Custom Engagement",
      "description": "Enterprise scope. Multi-region e-commerce, custom SaaS platforms, complex integrations, dedicated engineering. Custom-quoted.",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://www.pandacodegen.com/pricing",
      "seller": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization" }
    },
    {
      "@type": "Offer",
      "@id": "https://www.pandacodegen.com/pricing#offer-founders",
      "name": "Founder's Offer",
      "description": "Qualification-gated full migration at $500, normally $5,000+. Three spots per month. Requirements: source platform is WordPress, Webflow, Wix, Squarespace, or GoHighLevel; site is under 15 pages with no e-commerce or complex integrations; you provide a verified Google or Clutch review after launch; you are available for fast feedback during the 1-week build. Same custom Next.js architecture as full-price clients.",
      "price": "500",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/LimitedAvailability",
      "url": "https://www.pandacodegen.com/pricing",
      "seller": { "@type": "Organization", "@id": "https://www.pandacodegen.com/#organization" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.pandacodegen.com/pricing#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Which tier should I start with?", "acceptedAnswer": { "@type": "Answer", "text": "Most business rebuilds land in the Growth tier from $3,500: 10 to 20 pages, Sanity CMS, full blog migration with 301 redirects. Starter ($1,500+) is for simpler 5 to 7 page business sites. Scale ($5,000 to $10,000+) is for headless e-commerce, 30+ pages, and custom integrations. Bigger scope is handled in Scale+ with a custom quote after a scoping call." } },
        { "@type": "Question", "name": "How does the deposit model work?", "acceptedAnswer": { "@type": "Answer", "text": "You pay 30% upfront to secure your engineering sprint and lock in your timeline. The remaining 70% is due on launch day, after you've seen the finished product and approved it." } },
        { "@type": "Question", "name": "What is the $500 Founder's Offer?", "acceptedAnswer": { "@type": "Answer", "text": "A $500 full migration (normally $5,000+) for businesses that meet four requirements: your site is on WordPress, Webflow, Wix, Squarespace, or GoHighLevel; it is under 15 pages with no e-commerce or complex integrations; you agree to a verified Google or Clutch review after launch; and you are available for fast feedback during the 1-week build. Three spots per month. Same custom Next.js architecture as full-price clients. We pick based on fit, not first-come-first-served." } },
        { "@type": "Question", "name": "Do you do retainers after launch?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most clients keep us on for ongoing updates ($500/mo) or priority new feature development at discounted rates." } },
        { "@type": "Question", "name": "Why is your price higher than a freelancer?", "acceptedAnswer": { "@type": "Answer", "text": "Because we're not building templates. We're building assets. Clients typically see their investment pay for itself within 6 to 12 months through faster load times, higher conversion rates, and eliminated plugin fees." } },
        { "@type": "Question", "name": "What if my project is bigger than Scale?", "acceptedAnswer": { "@type": "Answer", "text": "Scale+ is for enterprise scope, multi-region e-commerce, custom SaaS platforms, and complex integrations. We cannot quote without understanding the work, so we scope it together on a call. Book a discovery call and tell us what you need." } },
        { "@type": "Question", "name": "What's in the Discovery Call?", "acceptedAnswer": { "@type": "Answer", "text": "We audit your current site, understand your revenue goals, and map out the tech stack. Free, non-binding. Takes 30 minutes." } }
      ]
    }
  ]
};

export default function PricingPageClient() {
  return (
    <main className="bg-paper min-h-screen overflow-x-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-20 md:pt-40 pb-10 md:pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-stone-200/40 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6"
          >
            Production-grade engineering. <br />
            <span className="font-serif italic text-cognac">Fixed-price transparency.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-700 max-w-2xl mx-auto mb-12"
          >
            Most business rebuilds land in the <span className="font-bold text-charcoal">Growth tier from $3,500</span>. Stop paying for hours. Pay for outcomes. 30% deposit to start.
          </motion.p>

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
              Avg PageSpeed: 98/100 · Avg Load Time: 0.8s · Founded Feb 2026, Austin TX
            </span>
          </motion.div>

          {/* Guarantee Badges */}
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap md:flex-nowrap justify-center gap-3"
          >
            {[
              { icon: <Zap className="w-4 h-4" />, text: "100/100 PageSpeed. Guaranteed." },
              { icon: <Clock className="w-4 h-4" />, text: "Under 1s load time. Guaranteed." },
              { icon: <DollarSign className="w-4 h-4" />, text: "Hosting starts free on Vercel." },
              { icon: <RotateCcw className="w-4 h-4" />, text: "30-day money-back guarantee." },
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
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">

          {/* CARD 1: Starter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-linear-to-b from-white to-stone-50 border border-white shadow-xl shadow-stone-200/40 ring-1 ring-stone-900/5 opacity-80 hover:opacity-100 hover:border-cognac/20 hover:shadow-2xl hover:shadow-cognac/10 transition-all duration-500 flex flex-col"
          >
            <div className="mb-6 min-h-[64px]">
              <h3 className="text-xl font-bold text-charcoal">Starter</h3>
              <p className="text-sm text-stone-500 mt-1">Small business sites, 5 to 7 pages.</p>
            </div>

            <div className="mb-8 pb-8 border-b border-stone-100 min-h-[140px] flex flex-col justify-start">
              <div className="text-xs font-black text-cognac uppercase tracking-widest mb-2">From</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl font-black text-charcoal">$1,500</span>
                <span className="text-lg font-bold text-stone-500">USD+</span>
              </div>
              <div className="inline-block bg-stone-100 px-3 py-1 rounded-md border border-stone-200">
                <p className="text-sm font-bold text-stone-700">Deposit: 30% to start</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 grow">
              <Feature text="5 to 7 Custom Pages (home, about, services, contact, and up to 3 more. Every page hand-built, not templated)" />
              <Feature text="Next.js + Vercel Deployment (production-grade framework, same stack Nike and Hulu ship on)" />
              <Feature text="95+ Google PageSpeed Mobile (guaranteed in writing. We fix it free if it scores lower)" />
              <Feature text="Under 1 Second Load Time (your site loads before slow sites render their hero image)" />
              <Feature text="Mobile-First Build (designed on mobile screen first, then scaled up, not the other way around)" />
              <Feature text="Zero Monthly Fees (no Webflow subscription, no plugin bills, no hosting invoices. Ever)" />
            </ul>

            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="w-full py-4 rounded-xl bg-charcoal text-white font-bold hover:bg-cognac transition-colors duration-300"
            >
              Book Discovery Call
            </button>
          </motion.div>

          {/* CARD 2: Growth (Most Popular anchor) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-8 rounded-[2.5rem] bg-[#0C0A09] text-white shadow-2xl shadow-stone-900/30 lg:scale-105 lg:z-10 flex flex-col"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cognac text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
              Most Popular
            </div>

            <div className="mb-6 min-h-[64px]">
              <h3 className="text-2xl font-serif italic text-white">Growth</h3>
              <p className="text-stone-400 mt-1">10 to 20 pages, CMS, full migration.</p>
            </div>

            <div className="mb-6 pb-6 border-b border-white/10 min-h-[140px] flex flex-col justify-start">
              <div className="text-xs font-black text-cognac uppercase tracking-widest mb-2">From</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-6xl font-black text-white">$3,500</span>
                <span className="text-lg font-bold text-stone-400">USD+</span>
              </div>
              <div className="inline-block bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <p className="text-sm font-bold text-stone-300">Deposit: 30% to start</p>
              </div>
            </div>

            <ul className="space-y-3 mb-6 grow">
              <Feature dark text="10 to 20 Page Custom Site (full marketing site with service pages, case studies, and resources)" />
              <Feature dark text="Sanity CMS Integration (your team updates content without touching code)" />
              <Feature dark text="Full Blog Migration (every post moved, 301 redirects preserved, SEO rankings held)" />
              <Feature dark text="95 to 100 PageSpeed Guaranteed (not an aspiration, a contract)" />
              <Feature dark text="Zero Monthly Fees Forever (Vercel starts free, only $20/month when you grow)" />
              <Feature dark text="30 Days Post-Launch Support (bug fixes and refinements at no extra cost)" />
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

          {/* CARD 3: Scale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-linear-to-b from-white to-stone-50 border border-white shadow-xl shadow-stone-200/40 ring-1 ring-stone-900/5 opacity-80 hover:opacity-100 hover:border-cognac/20 hover:shadow-2xl hover:shadow-cognac/10 transition-all duration-500 flex flex-col"
          >
            <div className="mb-6 min-h-[64px]">
              <h3 className="text-xl font-bold text-charcoal">Scale</h3>
              <p className="text-sm text-stone-500 mt-1">Headless e-commerce &amp; 30+ pages.</p>
            </div>

            <div className="mb-8 pb-8 border-b border-stone-100 min-h-[140px] flex flex-col justify-start">
              <div className="text-xs font-black text-cognac uppercase tracking-widest mb-2">Range</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl font-black text-charcoal">$5k to $10k+</span>
                <span className="text-lg font-bold text-stone-500">USD</span>
              </div>
              <div className="inline-block bg-stone-100 px-3 py-1 rounded-md border border-stone-200">
                <p className="text-sm font-bold text-stone-700">Deposit: 30% to start</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8 grow">
              <Feature text="Headless E-Commerce (Shopify or WooCommerce backend, Next.js frontend. The speed of custom, the admin of Shopify)" />
              <Feature text="30+ Custom Pages (product pages, collections, landing pages. All hand-built, not templated)" />
              <Feature text="Custom Integrations (Klaviyo, HubSpot, Salesforce, Stripe subscriptions, or any API you need)" />
              <Feature text="Advanced Performance Optimization (edge caching, ISR, image pipeline tuned to your catalog size)" />
              <Feature text="Sanity CMS + Content Ops (content model designed for your editors, not generic templates)" />
              <Feature text="60 Days Post-Launch Support (longer runway for catalog imports, data migrations, edge cases)" />
            </ul>

            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="w-full py-4 rounded-xl bg-charcoal text-white font-bold hover:bg-cognac transition-colors duration-300"
            >
              Book Scope Call
            </button>
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
              <p className="text-sm text-stone-600">Enterprise scope, multi-region e-commerce, custom SaaS platforms, complex integrations. We cannot quote without understanding the work. Message us and we will scope it on a call.</p>
            </div>
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="shrink-0 px-5 py-2.5 bg-charcoal text-white font-bold rounded-full text-sm hover:bg-cognac transition-all"
            >
              Scope It With Us
            </button>
          </div>
        </motion.div>

        {/* Founder's Offer full card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 max-w-5xl mx-auto"
        >
          <div className="rounded-3xl bg-[#0C0A09] text-white shadow-2xl shadow-stone-900/30 overflow-hidden">
            {/* Top bar: badge + spots tracker */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 md:px-10 pt-6 md:pt-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cognac/15 border border-cognac/30">
                <span className="w-2 h-2 rounded-full bg-cognac animate-pulse"></span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-cognac">Founder Offer · April 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cognac" aria-label="filled slot"></span>
                  <span className="w-2.5 h-2.5 rounded-full border border-stone-500 bg-transparent" aria-label="open slot"></span>
                  <span className="w-2.5 h-2.5 rounded-full border border-stone-500 bg-transparent" aria-label="open slot"></span>
                </div>
                <span className="text-xs font-bold text-stone-300">2 spots left</span>
              </div>
            </div>

            {/* Body grid */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 px-6 md:px-10 py-8 md:py-10">
              {/* Left column: pricing + hook + CTA */}
              <div>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-6xl md:text-7xl font-black text-white leading-none">$500</span>
                  <div className="flex flex-col">
                    <span className="text-sm text-stone-500 line-through">$5,000+</span>
                    <span className="text-sm font-bold text-cognac">Full migration</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1">We migrate your site.</h3>
                <h3 className="text-2xl md:text-3xl font-serif italic text-cognac leading-tight mb-5">You leave us a review.</h3>

                <p className="text-sm text-stone-300 leading-relaxed mb-6">
                  We are selecting 3 businesses this month for a discounted migration. Custom Next.js build, 95+ PageSpeed guaranteed, zero downtime launch. In exchange, we ask for an honest verified review after launch.
                </p>

                {/* 3 feature badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cognac shrink-0" />
                    <span className="text-xs font-bold text-stone-300">Delivered in 1 week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cognac shrink-0" />
                    <span className="text-xs font-bold text-stone-300">95+ PageSpeed guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cognac shrink-0" />
                    <span className="text-xs font-bold text-stone-300">You own the code</span>
                  </div>
                </div>

                <button
                  data-cal-namespace="discovery"
                  data-cal-link="pandagen/discovery"
                  data-cal-config='{"layout":"month_view"}'
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-cognac text-white font-bold rounded-full text-sm hover:bg-cognac/90 transition-all shadow-lg shadow-cognac/20"
                >
                  Apply for a Spot
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right column: requirements */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-5">Requirements to Qualify</p>

                <ul className="space-y-4 mb-6">
                  <RequirementRow text="Your site is on WordPress, Webflow, Wix, Squarespace, or GoHighLevel" />
                  <RequirementRow text="Under 15 pages (no e-commerce or complex integrations)" />
                  <RequirementRow text="You can provide a verified review on Google or Clutch after launch" />
                  <RequirementRow text="You are available to give fast feedback during the build week" />
                </ul>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xs text-stone-300 leading-relaxed">
                    This is not a template build. You get the same custom Next.js architecture we deliver to full-price clients. The only difference is the price, and we ask for an honest review in return.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hourly / Retainer Option */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-white border border-stone-300 rounded-3xl p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
          className="bg-white border border-stone-300 rounded-3xl p-8 md:p-12 shadow-xs"
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
              <h3 className="text-2xl font-bold text-charcoal mb-1">Our Guarantee</h3>
              <p className="text-stone-500 text-sm">Here&apos;s exactly how this works, step by step.</p>
            </div>
          </div>

          <div className="space-y-5">
            {[
              { num: "01", title: "You only pay a deposit to start", body: "We take a 30 to 50% deposit upfront to secure your engineering sprint and cover initial design and architecture work. That's all you owe until delivery." },
              { num: "02", title: "No final payment until you're satisfied", body: "The remaining balance is only due after we deliver the project and you're happy with it. We don't charge you the rest just because the calendar says so. We charge when the work is done right." },
              { num: "03", title: "30-day money-back after delivery", body: "After we hand over the finished site, you have 30 days to put it through its paces. If the site is genuinely not performing as agreed (slow load times, broken features, anything we promised and didn't deliver), we refund your deposit. No awkward conversations. No dispute process. You clearly asked us for something and we didn't deliver it: you get your money back." },
              { num: "04", title: "Escrow available on request", body: "If you prefer, we can run the project through a third-party escrow service (Escrow.com or similar). Funds are held by the escrow provider and released to us only when you approve the final delivery. Industry standard for larger projects." },
              { num: "05", title: "You keep everything, either way", body: "If we refund you, you keep all designs, wireframes, and any code written to that point. We don't ask for anything back. It's your IP from the moment it's created." },
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
      <section className="container mx-auto px-6 pb-12 md:pb-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">The Real Cost</p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Why Standard Agencies{" "}
            <span className="font-serif italic text-cognac">Cost You More.</span>
          </h2>
          <p className="md:hidden text-xs font-bold text-cognac mt-4 flex items-center justify-center gap-1">← Swipe to see more →</p>
        </motion.div>

        <div className="overflow-x-auto -mx-6 px-6">
          <div className="min-w-[640px] rounded-3xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr]">
              <div className="h-1 bg-stone-50" />
              <div className="h-1 bg-stone-50" />
              <div className="h-1 bg-cognac" />
            </div>
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] bg-stone-50 border-b border-stone-200">
              <div className="px-5 py-4 text-xs font-black text-stone-500 uppercase tracking-widest">Feature</div>
              <div className="px-5 py-4 text-sm font-bold text-stone-600 border-l border-stone-200">Standard Agency</div>
              <div className="px-5 py-4 text-sm font-bold text-cognac border-l border-stone-200 bg-paper">PandaCodeGen</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-[1fr_1.4fr_1.4fr] border-b border-stone-200 text-sm">
                <div className="px-5 py-4 text-charcoal font-bold flex items-center">{row.label}</div>
                <div className={`px-5 py-4 border-l border-stone-200 flex items-center gap-2.5 font-medium ${row.isPain ? "text-red-600 bg-red-50/40" : "text-stone-500"}`}>
                  {row.isPain ? <X className="w-4 h-4 text-red-500 shrink-0" /> : <Minus className="w-4 h-4 text-stone-400 shrink-0" />}
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
      <section className="container mx-auto px-6 pb-10 md:pb-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-stone-300 rounded-3xl p-8 md:p-10 shadow-xs text-center"
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
              <div className="text-sm font-bold text-charcoal">Matt Conner</div>
              <div className="text-xs text-stone-500">Owner, MyCustomPatches · WordPress Migration</div>
            </div>
            <div className="h-px w-8 bg-stone-300" />
          </div>
        </motion.div>
      </section>

      {/* 7. FAQ */}
      <section className="container mx-auto px-6 pb-16 md:pb-32 max-w-3xl">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-8 md:mb-12">Common Questions</h2>
        <div className="space-y-6">
          <FAQ q="Which tier should I start with?" a="Most business rebuilds land in the Growth tier from $3,500: 10 to 20 pages, Sanity CMS, full blog migration with 301 redirects. Starter ($1,500+) is for simpler 5 to 7 page business sites. Scale ($5,000 to $10,000+) is for headless e-commerce, 30+ pages, and custom integrations. Bigger scope is handled in Scale+ with a custom quote after a scoping call." />
          <FAQ q="How does the deposit model work?" a="You pay 30% upfront to secure your engineering sprint and lock in your timeline. The remaining 70% is due on launch day, after you've seen the finished product and approved it." />
          <FAQ q="What is the $500 Founder's Offer?" a="A $500 full migration (normally $5,000+) for businesses that meet four requirements: your site is on WordPress, Webflow, Wix, Squarespace, or GoHighLevel; it is under 15 pages with no e-commerce or complex integrations; you agree to a verified Google or Clutch review after launch; and you are available for fast feedback during the 1-week build. Three spots per month. Same custom Next.js architecture as full-price clients. We pick based on fit, not first-come-first-served." />
          <FAQ q="What if my project is bigger than Scale?" a="Scale+ is for enterprise scope, multi-region e-commerce, custom SaaS platforms, and complex integrations. We cannot quote without understanding the work, so we scope it together on a call. Book a discovery call and tell us what you need." />
          <FAQ q="Do you do retainers after launch?" a="Yes. Most clients keep us on for ongoing updates ($500/mo) or priority new feature development at discounted rates." />
          <FAQ q="Why not just hire a freelancer on Upwork or Fiverr?" a="A freelancer gives you a file. We give you a system. Our builds include architecture review, SEO preservation, performance guarantees, 30 days of post-launch support, and full IP handover to your accounts. Freelancers disappear after delivery. We don't, and we have the case studies to prove it." />
          <FAQ q="Why is your price higher than a freelancer?" a="Because we're not building templates. We're building assets. Clients typically see their investment pay for itself within 6 to 12 months through faster load times, higher conversion rates, and eliminated plugin and hosting fees. MyCustomPatches went from $150/mo in hosting to $0 and from a 40 PageSpeed score to 100/100. The build paid for itself in under a year." />
          <FAQ q="What's in the Discovery Call?" a="We audit your current site, understand your revenue goals, and map out the tech stack. Free, non-binding. Takes 30 minutes." />
          <FAQ q="What exactly does the 100/100 PageSpeed guarantee mean?" a="It means your site will score 100/100 on Google PageSpeed Insights on desktop and 95+ on mobile at launch. If it doesn't, we keep working until it does at no extra cost. We have never failed to hit this on a completed project." />
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

function RequirementRow({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full border border-cognac/40 flex items-center justify-center">
        <Check className="w-3 h-3 text-cognac" />
      </span>
      <span className="text-sm text-stone-300 leading-relaxed">{text}</span>
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
