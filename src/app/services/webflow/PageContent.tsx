"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Gauge, Lock, Server, Database, Globe, FileSearch, Wrench, Rocket, HelpCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

const comparisonData = [
  { feature: "Page Load Speed", webflow: "2-4 seconds", custom: "Under 1 second", icon: Gauge },
  { feature: "Code Ownership", webflow: "Vendor lock-in (export is unusable)", custom: "100% yours forever", icon: Lock },
  { feature: "Google PageSpeed", webflow: "50-70 average (mobile)", custom: "90-100 guaranteed", icon: TrendingUp },
  { feature: "Monthly Hosting", webflow: "$14-212/mo", custom: "$0 (Vercel free tier)", icon: DollarSign },
  { feature: "Server-Side Logic", webflow: "None (client-side only)", custom: "Full API routes, auth, databases", icon: Server },
  { feature: "CMS Limitations", webflow: "10,000 items max", custom: "Unlimited (any content management system with no limits)", icon: Database },
];

const faqData = [
  {
    q: "Is custom code harder to use than Webflow's visual editor?",
    a: "For content editing, no. We set up a content management system with no limits that's just as easy. For design changes, yes, you'll need a developer. But that's the trade-off: unlimited power vs. visual simplicity. Most businesses outgrow the visual editor anyway.",
  },
  {
    q: "Can you recreate my Webflow animations in code?",
    a: "Yes. Custom animations can do everything Webflow interactions can do, and more. We can even add interactions that Webflow's interaction panel can't handle: scroll-triggered 3D effects, page transitions, and real-time data animations.",
  },
  {
    q: "What about Webflow's CMS?",
    a: "We migrate all your CMS content to a content management system with no limits like Sanity or Contentful. No 10,000-item limit. Relational data, computed fields, and API access. You can query your content from anywhere: web, mobile, even AI agents.",
  },
  {
    q: "How much does it cost to migrate from Webflow?",
    a: "Standard business sites: $6,000-$15,000. Complex sites with custom CMS, e-commerce, or web app features: $15,000-$40,000. The savings on Webflow hosting ($500-2,500/year) partially offset the cost.",
  },
  {
    q: "What if Webflow adds the features I need later?",
    a: "It's possible. But Webflow has been promising server-side logic and better CMS for years. Meanwhile, custom code has no roadmap dependency. You build exactly what you need, when you need it.",
  },
];

export default function WebflowPageContent() {
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
            <Zap className="w-4 h-4" /> Beyond Visual Builders
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-tight"
          >
            Webflow Got You Started. <br />
            <span className="font-serif italic text-cognac">
              Custom Code Takes You Further.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Webflow is the best visual builder out there. But if you&apos;re hitting its ceiling: slow CMS, expensive hosting, limited logic. It&apos;s time for <span className="text-charcoal font-medium">custom code that you actually own</span>.
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
            <Link href="#when-to-migrate" className="px-8 py-4 bg-white border border-stone-200 text-charcoal font-medium rounded-full hover:border-cognac/30 transition-all flex items-center justify-center gap-2">
              When to Migrate <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. WEBFLOW STRENGTHS & WEAKNESSES */}
      <section className="py-10 md:py-20 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 text-center">Webflow Is Powerful. But It Has Limits.</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">Every tool has trade-offs. Here&apos;s an honest look at what Webflow does well and where it falls short:</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Strengths */}
            <div>
              <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> What Webflow Does Well
              </h3>
              <div className="space-y-3">
                {[
                  "Visual design flexibility",
                  "Clean code output (relative to others)",
                  "CMS collections",
                  "Built-in animations",
                  "Designer-friendly workflow",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-xl bg-green-500/5 border border-green-500/10 hover:border-green-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                      <p className="text-charcoal font-medium">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Weaknesses */}
            <div>
              <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Where Webflow Falls Short
              </h3>
              <div className="space-y-3">
                {[
                  "Hosting costs $39-212/month",
                  "CMS limited to 10,000 items",
                  "No server-side logic or API routes",
                  "Limited SEO control (no SSR, basic schema)",
                  "Complex interactions require workarounds",
                  "You don\u2019t own the exported code",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                      <p className="text-charcoal font-medium">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHEN TO MIGRATE */}
      <section id="when-to-migrate" className="py-12 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" /> The Ceiling
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">When It&apos;s Time to Leave Webflow</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Not every Webflow site needs to migrate. But if you&apos;re seeing these signals, custom code is the next step:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, signal: "Hosting Costs That Scale Against You", detail: "Webflow’s CMS and Enterprise plans run $100-212/month. Every time your content grows, the bill grows. Custom code on Vercel costs $0 for most sites and fractions of a cent per request beyond that." },
              { icon: Server, signal: "The Logic You Need Lives Outside Webflow", detail: "Authentication, payments, database queries, real-time APIs. Webflow has none of it natively. You bolt on Wized, Memberstack, and Xano, adding $50-300/month in third-party fees for features custom code handles out of the box." },
              { icon: Database, signal: "You’ve Hit Webflow’s 10,000-Item Hard Limit", detail: "Webflow’s CMS cap is non-negotiable. If you’re content-heavy, migration is already inevitable. Headless CMS like Sanity has no limits, gives you relational data, API access, and AI-ready content pipelines." },
              { icon: Code2, signal: "Your Product Needs App Architecture, Not a Website Builder", detail: "User dashboards, multi-tenant portals, real-time data, role-based access. These are application features that require server-side architecture. Webflow builds polished websites. It cannot build products." },
              { icon: Lock, signal: "Webflow’s Export Code Is Unusable", detail: "Webflow lets you ‘export’ your code, but it’s a tangle of classes and divs no developer would maintain. You can’t deploy it independently. You’re permanently locked to Webflow’s hosting. Custom code is yours on Day 1." },
              { icon: Globe, signal: "AI Search Skips Slow Webflow Sites", detail: "Google’s AI Overviews, ChatGPT, and Perplexity now cite brands by name in buying decisions. They surface fast, clean-coded sites. Webflow’s JavaScript overhead and limited server-side rendering put you at a systematic disadvantage." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400 w-fit mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.signal}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section id="comparison" className="py-10 md:py-20 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">Webflow vs Custom Coded</h2>
          <p className="text-stone-600 text-center mb-12">See exactly what you&apos;re missing and what you could have.</p>

          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <div className="min-w-[500px]">
            <div className="grid grid-cols-3 bg-stone-50 p-4 border-b border-stone-200">
              <div className="text-stone-600 font-medium text-sm">Feature</div>
              <div className="text-stone-500 font-bold text-sm text-center">Webflow</div>
              <div className="text-cognac font-bold text-sm text-center">Custom Coded</div>
            </div>

            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 items-center ${i % 2 === 0 ? 'bg-stone-50/50' : ''} border-b border-stone-200 last:border-b-0`}>
                <div className="flex items-center gap-2 text-charcoal text-sm font-medium">
                  <row.icon className="w-4 h-4 text-stone-400 shrink-0" />
                  {row.feature}
                </div>
                <div className="text-red-400/80 text-sm text-center">{row.webflow}</div>
                <div className="text-green-400 text-sm text-center font-medium">{row.custom}</div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE MIGRATE */}
      <section className="py-12 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">How We Migrate Your Webflow Site</h2>
          <p className="text-slate-500 text-center mb-8 md:mb-16 max-w-2xl mx-auto">A proven 4-step process. Every interaction rebuilt. Every CMS item migrated.</p>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 -z-10" />
            {[
              { step: "01", title: "Webflow Audit", desc: "We analyze your site\u2019s structure, CMS collections, and integrations. We map exactly what transfers and what gets rebuilt.", duration: "Week 1" },
              { step: "02", title: "Architecture & Design", desc: "We recreate every interaction in custom code, with server-side rendering, real API routes, and unlimited CMS. No compromises.", duration: "Weeks 2-3" },
              { step: "03", title: "Full Development", desc: "Sprint-based build. CMS content migrates automatically. We add features Webflow couldn\u2019t handle: auth, databases, custom integrations.", duration: "Weeks 4-6" },
              { step: "04", title: "Launch & Handover", desc: "Deploy to Vercel, set up your new CMS, hand over the GitHub repo. You own everything. No vendor lock-in.", duration: "Week 7" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-stone-50 border-4 border-white shadow-xs flex items-center justify-center text-lg font-black text-cognac mb-6">
                  {item.step}
                </div>
                <div className="text-xs font-semibold text-stone-600 uppercase tracking-widest mb-2">{item.duration}</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU GET */}
      <section className="py-10 md:py-20 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-cognac/20 text-sm text-cognac mb-6">
            <Code2 className="w-4 h-4" /> What You Get
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Everything Webflow Does. And Everything It Can&apos;t.
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            A custom coded website gives you what Webflow never will: full ownership, server-side power, unlimited CMS, and zero monthly hosting fees.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Gauge, title: "Everything Webflow Does, But Better", desc: "Same visual polish, but with server-side rendering, unlimited CMS, real API routes, and load times under 1 second. No compromises." },
              { icon: Server, title: "Server-Side Power", desc: "User authentication, payment processing, database queries, API integrations. Everything Webflow can\u2019t do natively. Built into your codebase." },
              { icon: DollarSign, title: "Zero Hosting Fees, Full Ownership", desc: "Deploy on Vercel\u2019s free tier. Own every line of code. No vendor lock-in. Scale to millions of pages without hitting CMS limits." },
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

      {/* 7. DUAL CTA */}
      <section className="py-10 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8 md:mb-12">Ready to Level Up?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Webflow Optimization */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-charcoal/30 transition-colors">
              <div className="text-stone-500 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Webflow Optimization</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Not ready to leave Webflow? We&apos;ll optimize what you have within the platform to squeeze out maximum performance and SEO results.
              </p>
              <ul className="space-y-3 mb-8">
                {["Performance optimization", "SEO improvements", "CMS restructuring", "Interaction refinements"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 border border-charcoal/30 text-stone-500 font-bold rounded-full hover:bg-stone-500/10 transition-all"
              >
                Optimize My Webflow
              </button>
            </div>

            {/* Migrate to Custom Code */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-charcoal/20 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-stone-100 text-cognac text-xs font-bold rounded-full">Recommended</div>
              <div className="text-cognac text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Migrate to Custom Code</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Migrate from Webflow to a custom coded platform you own forever. Faster, full server-side logic, unlimited CMS, zero monthly hosting fees.
              </p>
              <ul className="space-y-3 mb-8">
                {["Under a second load times", "Full server-side logic", "Unlimited CMS", "100% code ownership", "No monthly hosting fees", "30-day money-back guarantee"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all"
              >
                Get Migration Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-20 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-500/10 border border-charcoal/20 text-sm text-stone-500 mb-6">
              <HelpCircle className="w-4 h-4" /> FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
            <p className="text-stone-600 text-lg">Straight answers. No sales fluff.</p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <button key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left p-5 rounded-xl bg-stone-50/50 border border-stone-200 hover:border-stone-200 transition-all">
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
            ))}
          </div>
        </div>
      </section>

      {/* 9. GUARANTEE */}
      <section className="py-10 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl bg-linear-to-br from-green-50 to-white border border-green-500/30 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-600 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> Performance Guarantee
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">2x Faster or Your Money Back</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              If your new custom coded site isn&apos;t at least 2x faster than your Webflow site, doesn&apos;t rank better, and doesn&apos;t look better, we&apos;ll refund you. No questions asked.
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

      {/* Related Services - Internal Linking */}
      <section className="py-10 md:py-16 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-charcoal text-center mb-3">Explore More Services</h2>
          <p className="text-stone-400 text-center mb-10 text-sm">Every migration is different. Find the right path for your platform.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/squarespace" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Globe className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">Squarespace Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Leave Squarespace behind. Get a site you actually own.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
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
            <Link href="/services/custom-engineering" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Code2 className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">Custom Engineering</h3>
                <p className="text-stone-400 text-xs mt-0.5">SaaS platforms, dashboards, and APIs built from scratch.</p>
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
                <p className="text-xs text-stone-500 mt-0.5">Lead Engineer. Webflow-to-Next.js migrations that score 95 to 100 on PageSpeed. Full CMS migration from Webflow Collections to headless Sanity or Contentful, with every animation rebuilt in clean code.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Link href="/about/imran" className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-charcoal font-bold text-lg">I</div>
              </Link>
              <div>
                <Link href="/about/imran" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Imran</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Solutions Architect. Scopes Webflow escapes to protect CMS data, eliminate hosting premiums, and unlock capabilities the Webflow editor cannot deliver. 8+ years in web architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
