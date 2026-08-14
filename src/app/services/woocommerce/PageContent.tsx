"use client";

import { motion } from "@/components/ui/motion";
import { verifiedMetrics, withdrawalNotice } from "@/data/case-study-facts";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Lock, Database, Server, FileSearch, Wrench, Rocket, HelpCircle, ShoppingBag, CreditCard, Package, Network, Truck, RefreshCw, LayoutTemplate, Unplug } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialProof from "@/components/home/SocialProof";
import CaseStudyGrid from "@/components/services/CaseStudyGrid";
import PricingTiers from "@/components/services/PricingTiers";
import PartnerPromise from "@/components/services/PartnerPromise";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import PlatformKillerChart from "@/components/services/PlatformKillerChart";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import { Gauge } from "lucide-react";

const faqs = [
  {
    q: "Will I lose my WooCommerce orders and customer data?",
    a: "No. We export your entire WooCommerce database (products, orders, customer accounts, reviews, categories) and migrate it to your new platform. Migrated records are reconciled against a pre-migration export and any exceptions are reported before cutover. We test imports in staging before anything touches your live store."
  },
  {
    q: "Do I keep my Google rankings after migrating from WooCommerce?",
    a: "Yes. Every URL from your WooCommerce store is mapped with 301 redirects to the new site. Google treats it as the same page at a new address. URL-level redirect mapping is what protects existing search equity. Search engines control crawling, indexing, rankings and timing, so no ranking outcome or recovery date is guaranteed."
  },
  {
    q: "Can I still manage products and orders without being technical?",
    a: "Absolutely. We set up a clean admin dashboard where you can add products, update prices, manage inventory, and process orders. No code required. It's simpler than WooCommerce's admin because we only build what you actually need."
  },
  {
    q: "What payment gateways do you support?",
    a: "Stripe, PayPal, Apple Pay, Google Pay, Cash App Pay, Klarna, Afterpay, and any other gateway with an API. We integrate them natively. No paid plugin required. Your checkout is fully custom, so we can add any payment method you want."
  },
  {
    q: "How much does a WooCommerce migration cost?",
    a: "Four tiers. Starter $1,500 (simple WooCommerce migration, 10 to 30 products). Growth $3,500 (30 to 150 products with custom cart logic). Scale $5,000 to $10,000 (subscriptions, B2B pricing, wholesale, 100+ products). Scale+ $10,000+ for enterprise WooCommerce scope, custom-quoted after a scoping call. We give a fixed-price quote upfront. No hourly surprises."
  },
  {
    q: "How long does a WooCommerce migration take?",
    a: "2 to 6 weeks depending on scope. Starter stores ship in 1 to 2 weeks, Growth stores in 2 to 3, and Scale builds with subscriptions or B2B pricing run 3 to 5 weeks, sometimes 6 for enterprise scope. Your current store stays live the entire time, and launch day runs as a staged cutover with a documented rollback path."
  },
  {
    q: "My WooCommerce store has subscriptions / bookings / B2B pricing. Can you handle that?",
    a: "Yes. Subscriptions, recurring billing, tiered B2B pricing, volume discounts, booking calendars: these are all custom logic we build natively. You won't need a $300/mo plugin to handle what we can build into the core of your store."
  },
  {
    q: "What about WooCommerce Subscriptions and my existing recurring billing?",
    a: "We migrate every active subscription to Stripe Billing (native, no markup). Your subscribers keep their saved cards and billing date. Payment continuity and re-authentication are tested before cutover. Stripe handles the dunning, the webhooks, the failed-card retries. You stop paying $199/month for WooCommerce Subscriptions."
  },
  {
    q: "Do I keep my Stripe account and saved customer cards?",
    a: "Yes. We connect to your existing Stripe account using your live keys. All Customer IDs, saved payment methods, subscription IDs, and Stripe Customer Portal history carry over untouched. Your buyers never re-enter a card."
  },
  {
    q: "How do you handle tax (Avalara, TaxJar, WooCommerce Tax)?",
    a: "We integrate Stripe Tax or TaxJar directly at checkout. Live nexus calculation across all US states plus VAT for UK/EU. Tax handling moves to your payment provider. Stripe Tax handles filings in 30+ jurisdictions."
  },
];

const comparisonRows = [
  { label: "Load Time",     woo: "Measure your own routes",              custom: "Under 1s target",        isPain: true  },
  { label: "Monthly Cost",  woo: "Read from your own invoices", custom: "Provider costs, read from your own plan",  isPain: true  },
  { label: "Checkout",      woo: "Plugin-dependent",    custom: "Custom logic you own", isPain: true  },
  { label: "Security",      woo: "Self-managed plugin surface", custom: "Smaller third-party surface", isPain: true  },
  { label: "Scalability",   woo: "Scales with your hosting tier", custom: "Edge-cached where the route allows",isPain: true  },
  { label: "Ownership",     woo: "Locked into WordPress/plugins",custom: "100% your code, your IP",   isPain: false },
];

export default function PageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-paper min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
      <ReadingProgressBar />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-20 md:pt-28 pb-8 md:pb-12 px-6">
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-6">
            <ShoppingBag className="w-4 h-4" /> WooCommerce Migration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight md:tracking-tighter mb-4 leading-[1.08] md:leading-tight break-words"
          >
            {/* Opened with a client's name a stranger has never heard of, then
                pitched at character 74. Named the reader's problem 458 characters
                in, below the fold. The client proof still appears, further down,
                where it belongs: as evidence rather than as the opening line. */}
            Your WooCommerce checkout is the slowest page you own. <br />
            <span className="font-serif italic text-cognac">
              Here is why, and what actually fixes it.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            data-speakable="true"
            className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            Cart and checkout cannot be full-page cached, because they carry customer and session data. So every load runs the whole stack: WordPress, the theme, and every extension hooked into that request. That is why the page your revenue depends on is the one that gets slowest first, and why adding a caching plugin rarely touches it.</motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Migration Audit <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#how-it-works" className="px-8 py-4 bg-white border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all flex items-center justify-center gap-2">
              See How It Works <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="text-sm text-stone-500 mt-4 text-center max-w-xl mx-auto leading-relaxed">30-min call. Drop your store URL when you book. We run your checkout speed live, show you what the measurement does and does not establish, and give you a fixed quote. <span className="text-charcoal font-medium">Best fit for stores doing $50K+/year.</span></p>

          {/* Trust line */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xs text-stone-600 mt-4">
            Serving stores in UK · Australia · Canada · Europe · United States
          </motion.p>
        </div>
      </section>

      {/* 2. PLATFORM KILLER CHART — WooCommerce comparison */}
      <PlatformKillerChart
        badge="What Your Plugin Vendor Won't Tell You"
        headline="You're paying for plugins that"
        headlineAccent="don't integrate."
        description="You're paying $49/mo for a plugin to sync Stripe. There's a native API that does it for free. You're paying a subscriptions extension. Stripe handles subscriptions natively with zero markup. You're paying a spam-filtering plugin from your contact form. A 10-line reCAPTCHA does it."
        descriptionSecondary="We replace your ACF fields, Yoast meta, WP Rocket caching, Perfmatters tweaks, and LiteSpeed cache layer with native Next.js equivalents. No plugin stack. No Kinsta bill. Every piece lives in your codebase. Nobody tells you this because recurring licensing is the norm across the extension market. We're the agency that builds what replaces them. No pitch. Just receipts."
        comparisonTitle="WooCommerce vs Custom"
        themLabel="WooCommerce"
        metrics={[
          { metric: "Load Speed",    themLabel: "Measure yours", usLabel: "Measured at acceptance",       themPct: 35, usPct: 98, icon: Gauge },
          { metric: "Monthly Cost",  themLabel: "From your invoices", usLabel: "Provider costs",        themPct: 95, usPct: 5,  icon: DollarSign },
          { metric: "Checkout",      themLabel: "Slow cart", usLabel: "Custom flow",themPct: 40, usPct: 100, icon: CreditCard },
          { metric: "Security",      themLabel: "Plugin surface to patch", usLabel: "Dependency surface to patch", themPct: 35, usPct: 100, icon: ShieldCheck },
          { metric: "Maintenance",   themLabel: "Plugin updates", usLabel: "Dependency updates",       themPct: 85, usPct: 5,  icon: Wrench },
          { metric: "Ownership",     themLabel: "Rented",    usLabel: "100% Yours", themPct: 30, usPct: 100, icon: Lock },
        ]}
        savingsLines={[
          { label: "WooCommerce Pro extensions",      amount: "$1,200" },
          { label: "Stripe + PayPal sync plugins",    amount: "$480" },
          { label: "WP hosting + PHP workers",        amount: "$1,440" },
          { label: "Security + backup (Jetpack etc.)", amount: "$600" },
          { label: "Dev retainer + plugin fixes",     amount: "$3,600" },
          
        ]}
        totalPerYear="Measured per store"
      />

      {/* 2a. WHAT IS ACTUALLY EVIDENCED
          Was three tiles reading "Withdrawn" over "was Withdrawn", including a
          hosting tile that rendered "Withdrawn/mo" because the suffix was applied
          to a word. Same hand-patch as /services/wordpress-migration carried.
          Renders from case-study-facts.json now, so a reconciliation reaches both
          pages without either being edited. */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">WooCommerce Migration: What We Can Evidence</h2>
          <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">
            One independent client migration off WordPress and WooCommerce, owner-confirmed and published with permission.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {verifiedMetrics("mycustompatches").map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-xs transition-shadow hover:shadow-md"
              >
                <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-stone-600">{m.label}</p>
                <p className="font-serif text-3xl italic leading-tight text-cognac">{m.value}</p>
              </motion.div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-stone-600">
            {withdrawalNotice("mycustompatches")}
          </p>
          <p className="mt-4 text-center text-xs font-medium text-stone-600">
            MyCustomPatches (mycustompatches.net), an independent client.
          </p>
        </div>
      </section>

      {/* 2a. CASE STUDY GRID — Panda Patches was WooCommerce migration */}
      <CaseStudyGrid
        highlight="pandaPatches"
        label="Real WooCommerce Migrations"
        heading="WooCommerce to custom, done"
      />

      {/* 2b. SOCIAL PROOF — moved up for concentrated proof flow */}
      <SocialProof />

      {/* 2c. REAL BUYER VOICES — Reddit citations for trust signal (Apr 2026 verified) */}
      <section id="real-voices" className="py-12 md:py-20 px-6 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-charcoal text-white rounded-full mb-4">Real Reddit Threads. April 2026. Verifiable.</div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">What WooCommerce Operators Are Actually Saying Right Now</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl">
            Not curated testimonials. Real Reddit threads from r/woocommerce in the last 30 days, including public discussion from a WooCommerce contributor and an independent study of 10,000 stores. Click the links to verify every quote.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Quote 1: WooCommerce Core team lead public admission */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                Plugin fatigue: people mention WooCommerce not working out of the box for their use case, or having to install 30+ plugins and then when something goes wrong, troubleshooting becomes a nightmare. Fear of updating: people are scared that updating might break something. Performance: people mentioning the store becoming sluggish.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">u/sunyatasattva</strong> · WooCommerce Core team lead · Apr 16, 2026 · 21 upvotes</span>
                <a href="https://www.reddit.com/r/woocommerce/comments/1sqom3t/i_am_a_woocommerce_core_team_lead_advocating_for/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Quote 2: Independent study - 30 plugins average */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                I tested 10,000 WooCommerce stores and found they use on average 30 plugins. I think a lot of stores can do a lot with just a handful of Woo plugins. What bothers users: other platforms have features in core that require a plugin with Woo, plugin conflicts and the minefield to navigate it, pricing of these plugins.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">u/beloved-wombat</strong> · r/woocommerce · Apr 16, 2026 · independent 10K-store study</span>
                <a href="https://www.reddit.com/r/woocommerce/comments/1sqom3t/i_am_a_woocommerce_core_team_lead_advocating_for/oh9orf3/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Quote 3: 5-year dev frustration */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                I have been developing WordPress and WooCommerce for 5 years. The more I dive deeper I get more and more annoyed and frustrated. Basic features required plugin. Each plugin have its own UI, analytics and more importantly its own bloat. Basic features like variations switches, cart recovery, better analytics. It is a big list. God help you when you decide to change the theme or plugin.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">u/Investmaan</strong> · r/woocommerce · Apr 28, 2026 · 21 upvotes, 37 comments</span>
                <a href="https://www.reddit.com/r/woocommerce/comments/1t2r2kr/i_feel_extremely_frustrated_with_woocommerce_and/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Stat block 4: April 2026 plugin supply chain crisis */}
            <div className="bg-charcoal border border-charcoal rounded-2xl p-6 shadow-xs text-white">
              <div className="inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-red-500/20 text-red-300 rounded mb-3">Industry Incident · April 2026</div>
              <p className="font-bold text-lg mb-3">31 plugins. 400,000 sites. 8 months dormant.</p>
              <p className="text-stone-300 text-sm leading-relaxed mb-3">
                Someone bought the Essential Plugin suite on Flippa for six figures, then planted a backdoor in all 31 plugins. The malicious code sat dormant for 8 months before activating on April 5, 2026. The same week, Smart Slider 3 Pro (800,000+ installs) was hijacked and WowShipping Pro got an unauthenticated remote code execution backdoor. WordPress.org permanently closed all 31 Essential Plugins. Already-injected wp-config.php spam must be cleaned manually.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-400 pt-3 border-t border-stone-700">
                <span><strong className="text-white">Patchstack · TechCrunch · BleepingComputer</strong></span>
                <a href="https://patchstack.com/articles/critical-supply-chain-compromise-on-20-plugins-by-essentialplugin/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Source →</a>
              </div>
            </div>
          </div>

          {/* Bridging CTA */}
          <div className="mt-8 p-6 bg-charcoal text-white rounded-2xl text-center">
            <p className="text-lg font-bold mb-2">When the WooCommerce Core team lead publicly admits the problem, you know it is structural.</p>
            <p className="text-stone-400 text-sm mb-4 max-w-2xl mx-auto">
              30 plugins on average per store. Plugin fatigue. Fear of updating. Performance bottlenecks. Plus a demonstrated supply-chain attack surface; see our dated write-up of the April 2026 incident for the sourced figures. A custom Next.js store has no plugin layer, no auto-update channel an attacker can hijack, and no PHP execution. We migrate WooCommerce stores to headless Next.js with a Shopify, BigCommerce, or Sanity backend, with a 90+ Lighthouse handover target on mobile and desktop for the agreed representative pages, verified across three recorded runs before handover.
            </p>
            <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all">
              See Migration Pricing →
            </a>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-12 md:py-20 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How We Migrate Your WooCommerce Store</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">A proven 5-phase process, 2 to 6 weeks depending on scope. Staged cutover with a documented rollback path.</p>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Full Store Audit", desc: "We audit your WooCommerce setup: products, plugins, checkout flow, SEO, and hosting costs. You get a full report showing what&apos;s costing you money.", icon: FileSearch, duration: "Phase 1" },
              { step: "02", title: "Data Export & Mapping", desc: "Every product, order, customer account, review, and category is exported from your WooCommerce database and cleaned. All SEO URLs mapped for 301 redirects.", icon: Database, duration: "Phase 2" },
              { step: "03", title: "Custom Storefront Build", desc: "Your new Next.js storefront is built with native payment integrations (Stripe, PayPal, Apple Pay), your exact checkout flow, and any custom pricing logic.", icon: Wrench, duration: "Phase 3" },
              { step: "04", title: "Data Migration & Testing", desc: "We import all products, orders, and customer accounts into your new platform. Every checkout flow is tested across mobile and desktop before launch.", icon: Package, duration: "Phase 4" },
              { step: "05", title: "Launch & Handoff", desc: "Staged cutover launch. Every WooCommerce URL 301-redirected. DNS updated. SSL verified. You get full code ownership and admin access on day one.", icon: Rocket, duration: "Phase 5" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow group"
              >
                <span aria-hidden="true" className="text-4xl font-black text-stone-200 block mb-3 leading-none">{item.step}</span>
                <div className="w-9 h-9 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-3">
                  <item.icon className="w-4 h-4 text-cognac" />
                </div>
                <h3 className="text-sm font-bold text-charcoal mb-1">{item.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed mb-3">{item.desc}</p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cognac bg-stone-50 border border-stone-100 px-2 py-1 rounded-full">{item.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="py-10 md:py-14 px-6 bg-white border-y border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">WooCommerce vs Custom Code</h2>
          <p className="text-stone-600 text-center mb-10">The numbers speak for themselves.</p>

          <div className="rounded-2xl border border-stone-200 overflow-hidden shadow-xs bg-white">
            {/* Accent bar — desktop only */}
            <div className="hidden md:grid md:grid-cols-3">
              <div className="h-1 bg-stone-50" />
              <div className="h-1 bg-stone-50" />
              <div className="h-1 bg-cognac" />
            </div>
            {/* Header — desktop only. On mobile, each row gets inline labels. */}
            <div className="hidden md:grid md:grid-cols-3 bg-stone-50 border-b border-stone-200">
              <div className="px-5 py-4 text-xs font-black text-stone-600 uppercase tracking-widest">Feature</div>
              <div className="px-5 py-4 text-sm font-bold text-stone-600 border-l border-stone-200">WooCommerce</div>
              <div className="px-5 py-4 text-sm font-bold text-cognac border-l border-stone-200 bg-paper">Custom Code</div>
            </div>
            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`p-4 ${i < comparisonRows.length - 1 ? 'border-b border-stone-200' : ''} text-sm md:p-0 md:grid md:grid-cols-3`}
              >
                {/* Feature label */}
                <div className="text-charcoal font-bold mb-3 md:mb-0 md:px-5 md:py-4 md:flex md:items-center">{row.label}</div>
                {/* WooCommerce value */}
                <div className={`flex items-center justify-between gap-3 mb-2 md:mb-0 md:justify-start md:gap-2 md:px-5 md:py-4 md:border-l md:border-stone-200 font-medium ${row.isPain ? "text-red-600 md:bg-red-50/40" : "text-stone-500"}`}>
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-stone-500 not-italic">WooCommerce</span>
                  <span className="flex items-center gap-2">
                    {row.isPain ? <XCircle className="w-4 h-4 text-red-400 shrink-0" /> : null}
                    {row.woo}
                  </span>
                </div>
                {/* Custom Code value */}
                <div className="flex items-center justify-between gap-3 md:justify-start md:gap-2 md:px-5 md:py-4 md:border-l md:border-stone-200 md:bg-paper font-black text-charcoal">
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-cognac not-italic">Custom</span>
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cognac flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </span>
                    {row.custom}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PAIN POINTS, Dark Navy */}
      <section className="py-12 md:py-20 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" />
              The Real Cost of WooCommerce
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What a Slow Checkout Actually Costs You
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              WooCommerce runs on WordPress, so it inherits the WordPress request model. Here&apos;s what that costs you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, title: "You're Paying $300 to $700/Month to Run Your Store", detail: "Managed WooCommerce hosting (Kinsta, WP Engine): $50 to $200/mo. WooCommerce extensions (subscriptions, bookings, B2B): $50 to $300/yr. Security plugin: $10 to $50/mo. Backups, CDN, caching. It never stops adding up." },
              { icon: XCircle, title: "A Slow Checkout Can Cost You Orders", detail: "Speed can obstruct a purchase, but no public per-second figure can be multiplied out into your monthly loss. Measure your own funnel: eligible sessions, your completion rate by step, and a tested change." },
              { icon: AlertTriangle, title: "One Plugin Update Can Take Your Store Offline", detail: "Payment gateway plugin conflicts with your theme. WooCommerce updates break your custom checkout. Incidents tend to surface under load. Every minute offline is orders you never get back." },
              { icon: Lock, title: "Your Store Is One Hack Away From Disaster", detail: "WooCommerce stores hold payment data, customer addresses, and order history, making them high-value targets. The WordPress install base makes it a common automated-attack target. A statically rendered storefront moves that risk into your dependencies and build pipeline instead." },
              { icon: TrendingUp, title: "Page Experience Is One Input Among Many", detail: "Google's Core Web Vitals directly impact your organic rankings. A WooCommerce site running PHP on shared hosting fails LCP and TTFB benchmarks. Core Web Vitals feed Google ranking systems as one signal, and good scores do not guarantee rankings." },
              { icon: Code2, title: "You Can't Add Features Without Paying for Yet Another Plugin", detail: "A pricing calculator is usually another extension. Need a custom B2B portal? Another plugin. Need loyalty points? Another plugin. Each one adds load time, maintenance risk, and another line on your monthly bill. On custom code, we build exactly what you need, once." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/40 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-500/15 text-red-400 shrink-0 group-hover:bg-red-500/25 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER PROMISE — locked brand voice, 3 guarantees */}
      <PartnerPromise />

      {/* SIGNATURE BLOCK — Plugin Dependency Web (unique to WooCommerce) */}
      <section id="plugin-dependency-web" className="py-12 md:py-20 px-6 bg-paper">
        <div className="container mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-4">
            <Network className="w-4 h-4" /> The Dependency Map
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            One update, and the whole web <span className="font-serif italic text-cognac">snaps.</span>
          </h2>
          <p data-speakable="true" className="text-stone-600 text-lg leading-relaxed mb-12 max-w-3xl">
            A WooCommerce store is not one thing. It is a tangle of plugins from different vendors, each depending on the others to hold the line. When your payment gateway plugin auto-updates, it can break the subscriptions plugin, which breaks the cart, which takes your checkout offline mid-sale. A custom Next.js storefront has no web to snap: every piece of that logic lives inside one codebase we own and test together.
          </p>

          {/* Node graph */}
          <div className="relative rounded-3xl border border-stone-200 bg-white p-6 md:p-12 shadow-xs overflow-hidden">
            {/* Central node */}
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="relative z-10 flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-charcoal text-white shadow-md">
                <ShoppingBag className="w-6 h-6 text-cognac" />
                <span className="font-bold text-sm">WooCommerce Core</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400">central dependency</span>
              </div>
            </div>

            {/* Satellite plugin nodes — stack on mobile, web on md+ */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
              {[
                { icon: CreditCard, label: "Stripe Gateway", note: "Version-pinned", broken: true },
                { icon: RefreshCw, label: "Subscriptions", note: "depends on gateway", broken: true },
                { icon: Truck, label: "Shipping Rates", note: "stable", broken: false },
                { icon: LayoutTemplate, label: "Page Builder", note: "stable", broken: false },
                { icon: Zap, label: "Cache Layer", note: "stable", broken: false },
                { icon: ShieldCheck, label: "Security Plugin", note: "stable", broken: false },
              ].map((node, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl border bg-white ${node.broken ? "border-red-300 bg-red-50/50" : "border-stone-200"}`}
                >
                  <div className={`p-2 rounded-xl shrink-0 ${node.broken ? "bg-red-100 text-red-500" : "bg-stone-50 text-cognac border border-stone-100"}`}>
                    <node.icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-charcoal truncate">{node.label}</p>
                    <p className={`text-[11px] font-medium truncate ${node.broken ? "text-red-500" : "text-stone-600"}`}>{node.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Connecting edges — decorative SVG, hidden on mobile to avoid overflow */}
            <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" aria-hidden="true">
              <line x1="50%" y1="22%" x2="20%" y2="62%" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 4" />
              <line x1="50%" y1="22%" x2="50%" y2="62%" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 4" />
              <line x1="50%" y1="22%" x2="80%" y2="62%" stroke="#d6d3d1" strokeWidth="2" />
              <line x1="20%" y1="62%" x2="50%" y2="62%" stroke="#dc2626" strokeWidth="2" strokeDasharray="5 4" />
            </svg>

            {/* Legend */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 md:mt-12 pt-6 border-t border-stone-100 text-xs text-stone-500">
              <span className="flex items-center gap-2"><span className="inline-block w-6 h-0.5 bg-red-500" style={{ borderTop: "2px dashed #dc2626" }} /> Conflict / breakage path</span>
              <span className="flex items-center gap-2"><span className="inline-block w-6 h-0.5 bg-stone-300" /> Stable dependency</span>
            </div>
          </div>

          {/* Metaphor caption */}
          <p className="text-center text-sm text-stone-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            <Unplug className="w-4 h-4 text-cognac inline-block mr-1 -mt-0.5" />
            A tangle of interdependent plugins versus one self-contained custom codebase. We do not patch the web. We replace it.
          </p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <PricingTiers
        heading="Compare on like-for-like scope."
        headingAccent="We meet you halfway."
        agencyComparison={{
          agencyPrice: "Not assessed",
          agencyNote: "Compare like-for-like scope, timeline and code ownership.",
          ourPrice: "From $1,500",
          ourNote: "2 to 6 week timeline depending on scope. Fixed price. No plugin taxes. You own the code.",
        }}
        tiers={[
          {
            tier: "Starter",
            price: "Starting from $1,500",
            timeline: "1 to 2 weeks",
            fit: "Simple WooCommerce store. 10-30 products, basic catalog. Starter tier.",
            includes: [
              "Full WooCommerce product + order export",
              "Custom Next.js storefront",
              "Stripe checkout integration",
              "90+ Lighthouse handover target",
              "301 redirect mapping",
              "15 days of free post-launch support",
            ],
            cta: "Get Starter Quote",
          },
          {
            tier: "Growth",
            price: "Starting from $3,500",
            timeline: "2-3 weeks",
            fit: "30-150 products. Custom cart logic, reviews, email capture.",
            includes: [
              "Everything in Starter",
              "Custom filtering & search",
              "Upsell / cross-sell logic",
              "Native review system (no plugins)",
              "Analytics setup (GA4, Clarity)",
              "30 days of free post-launch support",
            ],
            featured: true,
          },
          {
            tier: "Scale",
            price: "$5,000 to $10,000",
            timeline: "3 to 5 weeks",
            fit: "100+ products, subscriptions, B2B pricing, wholesale, custom logic.",
            includes: [
              "Everything in Growth",
              "Stripe Subscriptions",
              "Multi-currency / localization",
              "Custom admin dashboard",
              "B2B / wholesale pricing logic",
              "30 days of free post-launch support",
            ],
          },
        ]}
        footnote="All builds include: staged cutover migration, 301 redirect mapping, redirect and metadata carry-over, your domain stays yours, you own 100% of the code. Bigger than Scale? Scale+ covers enterprise WooCommerce scope at $10,000+, custom-quoted after a scoping call."
      />

      {/* 6. DUAL CTA */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8 md:mb-12">Two Ways to Start</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-card">
              <div className="text-stone-500 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">WooCommerce Optimization</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Not ready to migrate yet? We&apos;ll tune your WooCommerce store for maximum performance within the platform&apos;s constraints.
              </p>
              <ul className="space-y-3 mb-8">
                {["Checkout speed optimization", "Plugin audit & dead weight removal", "Caching & CDN setup", "Security hardening", "SEO technical fixes", "30-day support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"optimize_my_woocommerce",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all">
                Optimize My WooCommerce
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-stone-50/50 border border-stone-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-charcoal text-white text-xs font-bold rounded-full">Recommended</div>
              <div className="text-cognac text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Full Migration to Custom Code</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                A complete rebuild on custom Next.js. Faster checkout, zero platform fees, and a storefront you own forever.
              </p>
              <ul className="space-y-3 mb-8">
                {["Measured checkout performance", "All products, orders & accounts migrated", "Native Stripe + PayPal + Apple Pay", "Zero monthly plugin fees", "Custom pricing logic built in", "100% code & IP ownership", "Refund terms stated in the written scope"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"migrate_my_store",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all">
                Migrate My Store
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-cognac" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Common Questions</h2>
          </div>
          <p className="text-stone-600 text-center mb-12">Everything you need to know before migrating your store.</p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-5 rounded-xl bg-white border border-stone-200 hover:border-cognac/30 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-charcoal font-medium text-base">{faq.q}</h3>
                    <div className={`w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                      <span className="text-charcoal text-sm font-bold">+</span>
                    </div>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mt-4 border-t border-stone-200 pt-4">{faq.a}</p>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GUARANTEE */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl bg-green-50 border border-green-200 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-[0.22em] mb-6">
              <ShieldCheck className="w-4 h-4" /> How we reduce your risk
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight leading-tight">
              A 90+ handover target, <span className="font-serif italic text-cognac">measured before you sign off.</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Every PandaCodeGen WooCommerce migration carries a 90+ Lighthouse handover target on mobile and desktop for the representative pages named in your written scope, verified across three recorded runs before handover. If we fail to deliver what that written scope promises, the accepted terms set out the refund trigger and cure process. This is a lab acceptance target, not a promise about rankings, revenue, or field Core Web Vitals after third-party changes.
            </p>
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all"
            >
              Book Free Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* Further Reading — blog cluster links (closes the pillar -> supporting-content loop) */}
      <section className="py-10 px-6 bg-white border-t border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">Further reading</p>
          <ul className="space-y-2 text-stone-700">
            <li>&rarr; <Link href="/blog/woocommerce-migration-cost" className="text-charcoal hover:text-cognac underline underline-offset-2">WooCommerce migration cost: what leaving WooCommerce really costs</Link></li>
            <li>&rarr; <Link href="/blog/woocommerce-vs-custom-website" className="text-charcoal hover:text-cognac underline underline-offset-2">WooCommerce vs custom website: the honest comparison</Link></li>
            <li>&rarr; <Link href="/blog/woocommerce-too-slow" className="text-charcoal hover:text-cognac underline underline-offset-2">WooCommerce too slow? A 2026 diagnosis and fix guide</Link></li>
            <li>&rarr; <Link href="/blog/wordpress-plugins-destroy-speed" className="text-charcoal hover:text-cognac underline underline-offset-2">How WordPress plugins destroy site speed</Link></li>
            <li>&rarr; <Link href="/blog/what-is-headless-commerce" className="text-charcoal hover:text-cognac underline underline-offset-2">What is headless commerce, and is it worth it?</Link></li>
          </ul>
        </div>
      </section>

      {/* Related Services — expanded to all platforms via reusable component */}
      <RelatedServicesGrid currentHref="/services/woocommerce" />

      {/* Author Attribution */}
      <section className="py-10 border-t border-stone-200 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-stone-600 mb-4">Built by</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-start gap-4">
              <Link href="/about/hassan" className="shrink-0">
                <Image src="/team/hassan.png" alt="Hassan Jamal" width={48} height={48} className="w-12 h-12 rounded-full border border-stone-200 object-cover" />
              </Link>
              <div>
                <Link href="/about/hassan" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Hassan Jamal</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Engineer. WooCommerce-to-Next.js migrations with measured checkout performance and a staged cutover, and direct Stripe and PayPal integration. Headless storefronts that score 90+ on PageSpeed.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Link href="/about/imran" className="shrink-0">
                <Image src="/team/imran.png" alt="Imran" width={48} height={48} className="w-12 h-12 rounded-full border border-stone-200 object-cover" />
              </Link>
              <div>
                <Link href="/about/imran" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Imran</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Solutions Architect. Scopes WooCommerce exits around order data, redirect mapping and acceptance criteria. Eliminates hosting bills, plugin fees, and update maintenance. 8+ years in e-commerce architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
