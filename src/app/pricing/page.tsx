"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight, X, Minus } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const comparisonRows = [
  { label: "Technology",   agency: "WordPress / Elementor",     pandagen: "Custom Next.js architecture",  isPain: false },
  { label: "Load Time",    agency: "2.0s – 4.0s average",       pandagen: "Sub-1s, guaranteed",          isPain: true  },
  { label: "Security",     agency: "Plugin vulnerabilities",    pandagen: "Static, zero attack surface", isPain: true  },
  { label: "Ownership",    agency: "Locked to theme / agency",  pandagen: "100% code ownership",          isPain: true  },
  { label: "Monthly Cost", agency: "Shopify Plus: $2,300+/mo + app fees", pandagen: "$0–$50/mo at any scale",       isPain: true  },
  { label: "Billing",      agency: "Hourly, unpredictable",     pandagen: "Fixed-price deposit",          isPain: true  },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.pandacodegen.com/pricing#webpage",
      "url": "https://www.pandacodegen.com/pricing",
      "name": "Pricing | PandaGen Custom Web Development",
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
      "description": "1 high-conversion landing page with custom animations, sub-1s load speed, and 3-day turnaround.",
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
            Enterprise engineering. <br />
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
            className="flex justify-center items-center gap-4 mb-4"
          >
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-paper bg-stone-300 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-stone-300 to-stone-400" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-paper bg-stone-400 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-stone-400 to-stone-500" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-paper bg-stone-500 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-stone-500 to-stone-700" />
              </div>
            </div>
            <span className="text-sm font-bold text-stone-500 uppercase tracking-widest">
              Join 50+ Founders Who Shipped Fast
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2. PRICING GRID */}
      <section className="container mx-auto px-6 pb-24 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-8 items-center">

          {/* CARD 1: Conversion Site */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-b from-white to-stone-50 border border-white shadow-xl shadow-stone-200/40 ring-1 ring-stone-900/5 opacity-80 hover:opacity-100 hover:border-cognac/20 hover:shadow-2xl hover:shadow-cognac/10 transition-all duration-500 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-charcoal">Conversion Site</h3>
              <p className="text-sm text-stone-500 mt-1">For campaigns &amp; startups.</p>
            </div>

            <div className="mb-8 pb-8 border-b border-stone-100">
              <div className="text-xs font-black text-cognac uppercase tracking-widest mb-2">Deposit to Start</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl font-black text-charcoal">$900</span>
                <span className="text-lg font-bold text-stone-500">USD</span>
              </div>
              <div className="inline-block bg-stone-100 px-3 py-1 rounded-md border border-stone-200">
                <p className="text-sm font-bold text-stone-700">Total Project: $2,900</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <Feature text="1 High-Conversion Landing Page" />
              <Feature text="Custom Animations &amp; Interactions" />
              <Feature text="3-Day Turnaround" />
              <Feature text="Mobile Optimised" />
              <Feature text="Sub-1s Load Speed" />
            </ul>

            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="w-full py-4 rounded-xl border border-stone-200 text-charcoal font-bold hover:bg-stone-50 transition-colors"
            >
              Book Slot
            </button>
          </motion.div>

          {/* CARD 2: Migration Engine — THE MIDNIGHT WINNER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-10 rounded-[2.5rem] bg-[#0C0A09] text-white shadow-2xl shadow-stone-900/30 lg:scale-105 lg:z-10 flex flex-col"
          >
            {/* Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cognac text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
              Most Popular
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-serif italic text-white">Migration Engine</h3>
              <p className="text-stone-400 mt-1">Complete platform re-platforming.</p>
            </div>

            <div className="mb-10 pb-10 border-b border-white/10">
              <div className="text-xs font-black text-cognac uppercase tracking-widest mb-2">Deposit to Start</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-6xl font-black text-white">$1,800</span>
                <span className="text-lg font-bold text-stone-400">USD</span>
              </div>
              <div className="inline-block bg-white/10 px-3 py-1 rounded-md border border-white/10">
                <p className="text-sm font-bold text-stone-300">Total Project: $5,900</p>
              </div>
            </div>

            <ul className="space-y-5 mb-10 flex-grow">
              <Feature dark text="Full Site Migration (Up to 10 pages)" />
              <Feature dark text="Next.js Headless Architecture" />
              <Feature dark text="Blog + CMS Integration" />
              <Feature dark text="Perfect 100 Google PageSpeed" />
              <Feature dark text="Zero Monthly Fees Forever" />
              <Feature dark text="30 Days Post-Launch Support" />
            </ul>

            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="w-full py-5 rounded-xl bg-white text-charcoal font-bold hover:bg-stone-100 transition-all flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(255,255,255,0.15)]"
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
            className="p-8 rounded-3xl bg-gradient-to-b from-white to-stone-50 border border-white shadow-xl shadow-stone-200/40 ring-1 ring-stone-900/5 opacity-80 hover:opacity-100 hover:border-cognac/20 hover:shadow-2xl hover:shadow-cognac/10 transition-all duration-500 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-charcoal">Custom SaaS &amp; Stores</h3>
              <p className="text-sm text-stone-500 mt-1">Web apps, dashboards &amp; e-commerce.</p>
            </div>

            <div className="mb-8 pb-8 border-b border-stone-100">
              <div className="text-xs font-black text-cognac uppercase tracking-widest mb-2">Deposit to Start</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl font-black text-charcoal">$4k+</span>
                <span className="text-lg font-bold text-stone-500">USD</span>
              </div>
              <div className="inline-block bg-stone-100 px-3 py-1 rounded-md border border-stone-200">
                <p className="text-sm font-bold text-stone-700">Total Project: Custom Scope</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <Feature text="Full-Stack Application" />
              <Feature text="Auth &amp; Database Design" />
              <Feature text="Subscription Payments" />
              <Feature text="Admin Dashboards" />
              <Feature text="Priority Engineering Support" />
            </ul>

            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="w-full py-4 rounded-xl border border-stone-200 text-charcoal font-bold hover:bg-stone-50 transition-colors"
            >
              Book Strategy Call
            </button>
          </motion.div>

        </div>
      </section>

      {/* 3. DEPOSIT MODEL EXPLAINER */}
      <section className="container mx-auto px-6 pb-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-stone-200 rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <h2 className="text-3xl font-bold text-charcoal mb-6">Why we use the Deposit Model.</h2>
          <div className="grid md:grid-cols-2 gap-10 text-stone-600 leading-relaxed">
            <div>
              <h3 className="text-charcoal font-bold mb-2 flex items-center gap-2">
                <span>🚫</span> The Hourly Billing Trap
              </h3>
              <p>
                Most agencies charge $100–$200/hour. This punishes efficiency. If they work slowly, you pay more. You never know the final bill. It creates a conflict of interest where their incentive is to go slow.
              </p>
            </div>
            <div>
              <h3 className="text-charcoal font-bold mb-2 flex items-center gap-2">
                <span>✅</span> The PandaGen Sprint Model
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
          className="bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-sm"
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-green-50 border border-green-100 rounded-2xl flex-shrink-0">
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-1">Our Guarantee: Plain English</h3>
              <p className="text-stone-500 text-sm">No legal jargon. Here&apos;s exactly how this works.</p>
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                num: "01",
                title: "You only pay a deposit to start",
                body: "We take a 30–50% deposit upfront to secure your engineering sprint and cover initial design and architecture work. That's all you owe until delivery.",
              },
              {
                num: "02",
                title: "No final payment until you're satisfied",
                body: "The remaining balance is only due after we deliver the project and you're happy with it. We don't charge you the rest just because the calendar says so — we charge when the work is done right.",
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
                <div className="text-xs font-black text-stone-300 tracking-widest w-6 flex-shrink-0 pt-0.5">{item.num}</div>
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
          <div className="min-w-[640px] rounded-3xl border border-stone-200 overflow-hidden shadow-sm">

            {/* Cognac accent bar — top of PandaGen column only */}
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr]">
              <div className="h-1 bg-stone-50" />
              <div className="h-1 bg-stone-50" />
              <div className="h-1 bg-cognac" />
            </div>

            {/* Header row */}
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] bg-stone-50 border-b border-stone-200">
              <div className="px-5 py-4 text-xs font-black text-stone-400 uppercase tracking-widest">Feature</div>
              <div className="px-5 py-4 text-sm font-bold text-stone-600 border-l border-stone-200">Standard Agency</div>
              <div className="px-5 py-4 text-sm font-bold text-cognac border-l border-stone-200 bg-paper">PandaGen</div>
            </div>

            {/* Data rows */}
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-[1fr_1.4fr_1.4fr] border-b border-stone-200 text-sm">
                <div className="px-5 py-4 text-charcoal font-bold flex items-center">{row.label}</div>
                <div className={`px-5 py-4 border-l border-stone-200 flex items-center gap-2.5 font-medium ${row.isPain ? "text-red-600 bg-red-50/40" : "text-stone-500"}`}>
                  {row.isPain
                    ? <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                    : <Minus className="w-4 h-4 text-stone-400 flex-shrink-0" />
                  }
                  {row.agency}
                </div>
                <div className="px-5 py-4 border-l border-stone-200 bg-paper flex items-center gap-2.5 font-black text-charcoal">
                  <div className="w-5 h-5 rounded-full bg-cognac flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  {row.pandagen}
                </div>
              </div>
            ))}

            {/* Summary footer — inside the border */}
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] bg-charcoal">
              <div className="px-5 py-6 text-xs font-black uppercase tracking-widest text-white flex items-center">Net Result</div>
              <div className="px-5 py-6 border-l border-white/10 text-stone-300 font-medium text-sm flex items-center gap-2.5">
                <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                Endless maintenance &amp; fees
              </div>
              <div className="px-5 py-6 border-l border-white/10 bg-cognac text-white font-black text-base flex items-center gap-2.5">
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
                An asset that compounds in value
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ */}
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
            q="Why is your price higher than a freelancer?"
            a="Because we're not building templates. We're building assets. Clients typically see their investment pay for itself within 6–12 months through faster load times, higher conversion rates, and eliminated plugin fees."
          />
          <FAQ
            q="What's in the Discovery Call?"
            a="We audit your current site, understand your revenue goals, and map out the tech stack. Free, non-binding. Takes 30 minutes."
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
      <div className={`rounded-full p-1 flex-shrink-0 ${dark ? "bg-stone-800" : "bg-stone-100"}`}>
        <Check className={`w-3 h-3 ${dark ? "text-cognac" : "text-charcoal"}`} />
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
      className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-sm transition-all"
    >
      <h3 className="text-lg font-bold text-charcoal mb-3">{q}</h3>
      <p className="text-stone-600 text-sm leading-relaxed">{a}</p>
    </motion.div>
  );
}
