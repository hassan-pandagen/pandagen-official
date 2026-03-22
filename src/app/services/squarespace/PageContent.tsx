"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Gauge, Lock, Palette, Search, HelpCircle, FileSearch, Wrench, Rocket, PenTool, Heart, AlertOctagon, Anchor, Wallet, Layout, Smartphone, Check } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

const squarespaceComparison = [
  { metric: "Load Speed", bad: "3-5 seconds", good: "< 0.8s", icon: Zap },
  { metric: "Monthly Cost", bad: "$33 - $65/mo", good: "$0", icon: Wallet },
  { metric: "Code Ownership", bad: "Rented", good: "100% Yours", icon: Lock },
  { metric: "Google Score", bad: "Fail (30-50)", good: "98-100", icon: Search },
  { metric: "Design Freedom", bad: "Template Limit", good: "Pixel-Perfect", icon: Layout },
];

const faqs = [
  {
    q: "Will my Squarespace site design transfer to custom code?",
    a: "We don't copy-paste templates. We redesign your brand with custom code that's uniquely yours. We match your brand colors, fonts, and style \u2014 but make it faster, more professional, and fully customizable."
  },
  {
    q: "Can I still use Squarespace for my online store?",
    a: "We recommend migrating fully. But if you have a small store, we can integrate Shopify's Buy Button or Stripe checkout into your custom site so you keep selling without Squarespace's monthly fees."
  },
  {
    q: "How much does a Squarespace migration cost?",
    a: "Standard business sites typically range from $4,000-$12,000 depending on number of pages and complexity. Over 3 years, you'll save $1,200-$2,400 in Squarespace subscription fees alone."
  },
  {
    q: "What if I have a blog on Squarespace?",
    a: "All blog posts migrate with their content, images, dates, and URLs. We set up a content editor so you can write and publish new posts the same way \u2014 but your blog loads 4-5x faster."
  },
  {
    q: "Is the migration disruptive to my business?",
    a: "No. Your Squarespace site stays live during the entire build. We develop the new site in parallel. On launch day, we point your domain to the new site. Zero downtime."
  },
];

export default function SquarespacePageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-paper min-h-screen selection:bg-charcoal selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
      <ReadingProgressBar />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-20 md:pt-40 pb-12 md:pb-20 px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)", backgroundSize: "50px 50px", opacity: 0.03 }} />
        <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-stone-200/50 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-8">
            <Zap className="w-4 h-4" /> Platform Upgrade
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-tight"
          >
            Outgrown Squarespace? <br />
            <span className="font-serif italic text-cognac">
              Own Your Platform.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Squarespace was great to get started. But its limitations are now costing you rankings, speed, and revenue. We build custom coded sites that <span className="text-charcoal font-medium">load 5x faster, rank higher, and you own forever</span>.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#comparison" className="px-8 py-4 bg-white border border-stone-200 text-charcoal font-medium rounded-full hover:border-cognac/30 transition-all flex items-center justify-center gap-2">
              See the Comparison <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. SQUARESPACE PIVOT - Split Card */}
      <section className="py-12 md:py-24 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              It Worked. Until It Didn&apos;t.
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Squarespace is perfect for your first $10k in revenue. It becomes a liability at $100k.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT: The Past (faded) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-10 rounded-3xl bg-white border border-slate-200 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-700">Why You Started</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Beautiful templates looked good immediately.",
                  "Drag-and-drop editor made changes easy.",
                  "All-in-one hosting meant no setup headaches.",
                  "Basic analytics to track your visitors.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* RIGHT: The Present (sharp/elevated) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-3xl bg-white border-2 border-red-100 shadow-xl shadow-red-100/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Why You&apos;re Stuck</h3>
              </div>
              <ul className="space-y-5">
                {[
                  { title: "The Speed Ceiling:", body: "You can't optimize the server. 3s+ loads are costing you ad conversions every single day." },
                  { title: "The \"Template Look\":", body: "Your brand looks identical to thousands of other businesses using the same Squarespace theme." },
                  { title: "Rent vs Own:", body: "You've paid $2,000+ in fees over 3 years and own nothing. If they raise prices, you're hostage." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <Anchor className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                    <span><strong>{item.title}</strong> {item.body}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE HIDDEN COST OF SQUARESPACE */}
      <section className="py-12 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" /> Revenue Leak
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Hidden Cost of Squarespace</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These are the exact problems growing businesses hit when Squarespace stops being enough:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Gauge, pain: "Slow Pages Are Draining Your Ad ROI Every Day", detail: "Squarespace consistently scores 30-50 on mobile PageSpeed. Every second of delay costs 7% in conversions. If you're running paid ads, you're funding traffic that bounces before your page even loads." },
              { icon: Palette, pain: "Your Brand Looks Identical to Millions of Other Sites", detail: "Squarespace has tens of millions of users on the same templates. Enterprise buyers recognize template sites instantly. Generic design signals 'small operation,' not 'established business.'" },
              { icon: DollarSign, pain: "You're Paying Platform Rent With No Equity", detail: "Over 3 years, you'll spend $1,200-$2,400 in subscription fees alone. If Squarespace raises prices or discontinues your plan, you have zero leverage. Cancel and you lose everything you built." },
              { icon: Search, pain: "Technical SEO Blocks Are Capping Your Organic Traffic", detail: "No custom schema markup, no server-side rendering, no full URL control. Squarespace's code bloat means you hit a technical SEO ceiling from day one. Custom sites rank significantly higher for the same content." },
              { icon: Code2, pain: "Real Business Features Require a Full Rebuild Anyway", detail: "Need a client portal? A booking system with custom logic? API integrations? Squarespace can't do it. You'll outgrow the platform and rebuild from scratch eventually. Better to build the right foundation now." },
              { icon: TrendingUp, pain: "AI Search Can't Read Bloated Squarespace Code", detail: "ChatGPT, Perplexity, and AI Overviews now cite specific brands by name when answering buying questions. They prioritize clean, fast, structured code. Squarespace's JavaScript-heavy pages make you invisible to AI-driven buyers." },
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
                    <h3 className="text-lg font-bold text-white mb-2">{item.pain}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON, Squarespace Killer Card */}
      <section id="comparison" className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-red-100/30 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-100/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative rounded-2xl md:rounded-4xl overflow-hidden bg-white border border-red-200 shadow-[0_20px_60px_rgba(0,0,0,0.06),0_0_0_1px_rgba(239,68,68,0.08)]">
              <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-0">

                {/* LEFT: The Pain */}
                <div className="p-6 md:p-14 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full w-fit mb-6">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Warning</span>
                  </div>
                  <h2 className="text-2xl md:text-5xl font-bold text-charcoal leading-tight mb-3">
                    Stop Losing Money.
                  </h2>
                  <h3 className="text-3xl md:text-6xl font-black leading-tight mb-6 md:mb-8">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 via-orange-500 to-red-500">
                      Squarespace is a liability.
                    </span>
                  </h3>
                  <p className="text-base md:text-lg text-stone-600 mb-8 leading-relaxed max-w-md">
                    It looks pretty, but the code is bloated. You&apos;re renting a platform that caps your speed, penalizes your SEO, and charges you every single month.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      data-cal-namespace="discovery"
                      data-cal-link="pandagen/discovery"
                      data-cal-config='{"layout":"month_view"}'
                      className="group px-6 py-3 md:px-8 md:py-4 bg-charcoal text-white font-bold text-sm md:text-base rounded-full hover:bg-cognac transition-all flex items-center justify-center gap-2 hover:scale-105"
                    >
                      Calculate Savings <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      data-cal-namespace="discovery"
                      data-cal-link="pandagen/discovery"
                      data-cal-config='{"layout":"month_view"}'
                      className="px-6 py-3 md:px-8 md:py-4 bg-stone-50 border border-stone-200 text-charcoal font-semibold text-sm md:text-base rounded-full hover:bg-stone-100 transition-all"
                    >
                      Book Free Audit
                    </button>
                  </div>
                </div>

                {/* RIGHT: Comparison + Savings */}
                <div className="p-6 md:p-10 md:border-l border-stone-200 bg-stone-50/50 overflow-x-hidden">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-stone-200">
                    <h4 className="text-lg font-bold text-charcoal">Squarespace vs Custom Coded</h4>
                  </div>

                  {/* Column Headers */}
                  <div className="grid grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_110px_110px] gap-2 md:gap-3 pb-3 mb-1">
                    <div className="text-[11px] text-stone-400 uppercase tracking-widest font-bold">Metric</div>
                    <div className="text-[11px] text-red-500 uppercase tracking-widest font-bold text-center">Them</div>
                    <div className="text-[11px] text-cognac uppercase tracking-widest font-bold text-center">Us</div>
                  </div>

                  {/* Rows */}
                  <div className="space-y-1">
                    {squarespaceComparison.map((row, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="grid grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_110px_110px] gap-2 md:gap-3 items-center py-3 px-3 -mx-3 rounded-xl hover:bg-white transition-all group cursor-default"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center group-hover:bg-stone-50 group-hover:border-stone-200 transition-colors shrink-0">
                            <row.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-stone-400 group-hover:text-cognac transition-colors" />
                          </div>
                          <span className="text-xs md:text-sm text-charcoal font-medium">{row.metric}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] md:text-xs text-red-600 bg-red-50 border border-red-100 px-1.5 md:px-2.5 py-1 rounded-md whitespace-nowrap">{row.bad}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] md:text-xs text-cognac font-bold bg-stone-50 border border-stone-100 px-1.5 md:px-2.5 py-1 rounded-md whitespace-nowrap">{row.good}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Savings Breakdown Card */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 p-5 bg-linear-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs text-green-700 uppercase font-bold tracking-wider">Your Potential Savings</p>
                      <div className="h-9 w-9 bg-green-500 rounded-full flex items-center justify-center text-white">
                        <DollarSign className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      {[
                        { label: "Squarespace annual subscription", amount: "$588" },
                        { label: "Lost conversions (slow load speed)", amount: "$3,600" },
                        { label: "SEO traffic loss (low Google scores)", amount: "$2,400" },
                        { label: "Design agency refreshes (template limits)", amount: "$2,400" },
                        { label: "eCommerce transaction fees (store plan)", amount: "$1,200" },
                        { label: "Custom dev workarounds", amount: "$1,800" },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <span className="text-green-800/80">{row.label}</span>
                          <span className="font-bold text-green-900 tabular-nums">{row.amount}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-green-300/60 pt-3 flex items-center justify-between">
                      <span className="text-xs text-green-700 uppercase font-bold tracking-wider">Total Per Year</span>
                      <p className="text-2xl font-black text-charcoal">$11,988<span className="text-sm font-medium text-stone-400">/yr</span></p>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. HOW WE MIGRATE - Process Timeline */}
      <section id="how-it-works" className="py-10 md:py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How We Migrate Your Squarespace Site</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">A proven 4-step process. Your Squarespace site stays live the entire time.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "Content Export", desc: "We extract every page, blog post, image, and gallery from Squarespace. Your content is cleaned and organized for the new platform.", icon: FileSearch, duration: "Week 1" },
              { step: "02", title: "Custom Design", desc: "We recreate your brand with a custom design that\u2019s uniquely yours. No more sharing templates with millions of other sites.", icon: PenTool, duration: "Weeks 2-3" },
              { step: "03", title: "Build & SEO Migration", desc: "Your site gets coded in Next.js with server-side rendering. We map all URLs, set up 301 redirects, and preserve your Google rankings.", icon: Wrench, duration: "Weeks 4-5" },
              { step: "04", title: "Launch & Training", desc: "We launch your new site, set up a content editor for easy editing, and train your team. No coding required to update content.", icon: Rocket, duration: "Week 6" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-stone-50 border border-cognac/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-cognac" />
                  </div>
                  {i < 3 && <div className="w-px h-8 bg-border mt-2" />}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-gray-600">{item.step}</span>
                    <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-stone-50 border border-stone-200 text-stone-600">{item.duration}</span>
                  </div>
                  <p className="text-stone-600 text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE SOLUTION - WHAT YOU GET */}
      <section className="py-12 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-stone-500 font-bold tracking-widest uppercase text-sm">The Smarter Path</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">Own Your Platform. Stop Renting.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A custom coded website gives you what Squarespace never will: full ownership, blazing speed, and zero monthly platform fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: "Custom Design, Not Templates", desc: "Your site will be 100% unique. No templates, no drag-and-drop limitations. Pixel-perfect design that reflects your brand, not a generic theme." },
              { icon: Search, title: "Real SEO That Ranks", desc: "Server-side rendering, custom schema markup, optimized Core Web Vitals. Everything Squarespace can\u2019t give you because it\u2019s bloated." },
              { icon: Lock, title: "You Own Your Platform", desc: "You own every line of code. No monthly platform fees. No vendor lock-in. Host anywhere. Scale without limits." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-500 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DUAL CTA */}
      <section className="py-12 md:py-24 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-16 text-slate-900">Choose Your Future</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Option A: The "safe" choice (de-emphasized) */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white opacity-80 hover:opacity-100 transition-opacity">
              <h3 className="text-lg font-bold text-slate-500 uppercase tracking-widest mb-2">Option A</h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Optimization Only</h4>
              <p className="text-slate-500 mb-8 text-sm">We try to improve your existing Squarespace site, but we&apos;re limited by the platform&apos;s code bloat and template constraints.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-600 text-sm"><CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> Slight speed improvement</li>
                <li className="flex items-center gap-2 text-slate-600 text-sm"><CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> Image compression</li>
                <li className="flex items-center gap-2 text-slate-400 text-sm"><XCircle className="w-4 h-4 text-red-300 shrink-0" /> Still paying $33-65/mo forever</li>
                <li className="flex items-center gap-2 text-slate-400 text-sm"><XCircle className="w-4 h-4 text-red-300 shrink-0" /> Still locked into templates</li>
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors"
              >
                Optimize Existing Site
              </button>
            </div>

            {/* Option B: The winner (elevated) */}
            <div className="relative p-10 rounded-3xl border-2 border-charcoal bg-white shadow-2xl md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-full whitespace-nowrap">
                Recommended
              </div>
              <h3 className="text-lg font-bold text-cognac uppercase tracking-widest mb-2">Option B</h3>
              <h4 className="text-3xl font-bold text-slate-900 mb-4">Full Migration to Next.js</h4>
              <p className="text-slate-600 mb-8">We rebuild your site from scratch. Perfect scores. Zero monthly fees. Full ownership. Built to last.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-900 font-medium"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /> Under a second load times (&lt;0.8s)</li>
                <li className="flex items-center gap-3 text-slate-900 font-medium"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /> 100% SEO Preservation</li>
                <li className="flex items-center gap-3 text-slate-900 font-medium"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /> Zero Monthly Platform Fees</li>
                <li className="flex items-center gap-3 text-slate-900 font-medium"><CheckCircle2 className="w-5 h-5 text-cognac shrink-0" /> You Own the Code</li>
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full py-4 rounded-xl bg-charcoal text-white font-bold hover:bg-cognac transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Get Migration Plan <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-20 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-cognac" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Common Questions</h2>
          </div>
          <p className="text-stone-600 text-center mb-12">Everything you need to know about migrating from Squarespace.</p>

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
                  className="w-full text-left p-5 rounded-xl bg-stone-50/50 border border-stone-200 hover:border-stone-200 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-charcoal font-medium text-base">{faq.q}</h3>
                    <div className={`w-6 h-6 rounded-full bg-stone-50 flex items-center justify-center shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                      <span className="text-charcoal text-sm font-bold">+</span>
                    </div>
                  </div>
                  {openFaq === i && (
                    <p className="text-stone-600 text-sm leading-relaxed mt-4 border-t border-stone-200 pt-4">{faq.a}</p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GUARANTEE */}
      <section className="py-10 md:py-20 px-6 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-[#F0FDF4] border border-green-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ShieldCheck className="w-10 h-10" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-green-900 mb-3">2x Faster or Your Money Back.</h3>
              <p className="text-green-800 leading-relaxed mb-6">
                We are so confident in our migration process that if your new site isn&apos;t at least 2x faster than your Squarespace site, we will refund 100% of your payment. No questions asked.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-xs font-bold text-green-700 uppercase tracking-wider mb-6">
                <span>• Legal Contract</span>
                <span>• Escrow Payments</span>
                <span>• US LLC</span>
              </div>
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
        </div>
      </section>

      {/* Related Services - Internal Linking */}
      <section className="py-10 md:py-16 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-charcoal text-center mb-3">Explore More Services</h2>
          <p className="text-stone-400 text-center mb-10 text-sm">Every migration is different. Find the right path for your platform.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/wix" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Zap className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">Wix Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Break free from Wix limitations. Own your code.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
            <Link href="/services/webflow" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Code2 className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">Webflow Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Outgrow Webflow&apos;s constraints with custom architecture.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
            <Link href="/services/wordpress-migration" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Wrench className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">WordPress Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Escape plugin bloat. Get load times under 1 second with custom code.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Author Attribution */}
      <section className="py-10 border-t border-stone-200 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Built by</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-start gap-4">
              <Link href="/about/hassan" className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-charcoal font-bold text-lg">H</div>
              </Link>
              <div>
                <Link href="/about/hassan" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Hassan Jamal</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Engineer. Squarespace-to-Next.js migrations that score 95 to 100 on PageSpeed. Full site rebuilds with zero downtime, 301-mapped URLs, and CMS setups clients can manage themselves.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Link href="/about/imran" className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-charcoal font-bold text-lg">I</div>
              </Link>
              <div>
                <Link href="/about/imran" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Imran</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Solutions Architect. Scopes platform migrations to protect SEO rankings and eliminate recurring subscription costs. 8+ years in web architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
