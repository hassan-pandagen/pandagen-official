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
  { feature: "CMS Limitations", webflow: "10,000 items max", custom: "Unlimited (any headless CMS)", icon: Database },
];

const faqData = [
  {
    q: "Is custom code harder to use than Webflow's visual editor?",
    a: "For content editing, no \u2014 we set up a headless CMS that's just as easy. For design changes, yes \u2014 you'll need a developer. But that's the trade-off: unlimited power vs. visual simplicity. Most businesses outgrow the visual editor anyway.",
  },
  {
    q: "Can you recreate my Webflow animations in code?",
    a: "Yes. Framer Motion (our animation library) can do everything Webflow interactions can do, and more. We can even add interactions that Webflow's interaction panel can't handle \u2014 like scroll-triggered 3D effects, page transitions, and real-time data animations.",
  },
  {
    q: "What about Webflow's CMS?",
    a: "We migrate all your CMS content to a headless CMS like Sanity or Contentful. No 10,000-item limit. Relational data, computed fields, and API access. You can query your content from anywhere \u2014 web, mobile, even AI agents.",
  },
  {
    q: "How much does it cost to migrate from Webflow?",
    a: "Standard business sites: $6,000-$15,000. Complex sites with custom CMS, e-commerce, or web app features: $15,000-$40,000. The savings on Webflow hosting ($500-2,500/year) partially offset the cost.",
  },
  {
    q: "What if Webflow adds the features I need later?",
    a: "It's possible. But Webflow has been promising server-side logic and better CMS for years. Meanwhile, custom code has no roadmap dependency \u2014 you build exactly what you need, when you need it.",
  },
];

export default function WebflowPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-transparent min-h-screen selection:bg-neon selection:text-black overflow-x-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-20 mix-blend-overlay" />
      <ReadingProgressBar />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-8">
            <Zap className="w-4 h-4" /> Beyond Visual Builders
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-tight"
          >
            Webflow Got You Started. <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(to right, #60a5fa, #22d3ee, #2dd4bf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Custom Code Takes You Further.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Webflow is the best visual builder out there. But if you&apos;re hitting its ceiling — slow CMS, expensive hosting, limited logic — it&apos;s time for <span className="text-white font-medium">custom code that you actually own</span>.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-neon text-black font-bold rounded-full hover:bg-neon/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#when-to-migrate" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-blue-400/50 hover:bg-blue-500/5 transition-all flex items-center justify-center gap-2">
              When to Migrate <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. WEBFLOW STRENGTHS & WEAKNESSES */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Webflow Is Powerful. But It Has Limits.</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Every tool has trade-offs. Here&apos;s an honest look at what Webflow does well and where it falls short:</p>

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
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-xl bg-green-500/5 border border-green-500/10 hover:border-green-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <p className="text-white font-medium">{item}</p>
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
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-500/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-white font-medium">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHEN TO MIGRATE */}
      <section id="when-to-migrate" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">When It&apos;s Time to Leave Webflow</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Not every Webflow site needs to migrate. But if you&apos;re seeing these signals, custom code is the next step:</p>

          <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
            {[
              { signal: "You\u2019re paying $100+/month for hosting", detail: "Webflow\u2019s CMS and e-commerce plans add up fast. Custom code on Vercel\u2019s free tier eliminates hosting costs entirely." },
              { signal: "You need server-side logic", detail: "Auth, payments, API routes, databases \u2014 things Webflow can\u2019t do natively. Custom code handles all of it." },
              { signal: "Your CMS hit 10,000 items", detail: "Webflow\u2019s hard limit. If you\u2019re content-heavy, you\u2019ve hit the ceiling. Headless CMS has no limits." },
              { signal: "You need a custom web app, not just a website", detail: "Dashboards, user portals, real-time features require code. Webflow builds websites, not applications." },
              { signal: "You want to own your platform", detail: "Webflow\u2019s export is unusable. Custom code is yours forever \u2014 deploy anywhere, modify anything, no vendor lock-in." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`p-5 rounded-xl bg-amber-500/5 border border-amber-500/10 hover:border-amber-500/20 transition-colors ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">{item.signal}</p>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section id="comparison" className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Webflow vs Custom-Coded (Next.js)</h2>
          <p className="text-gray-400 text-center mb-12">See exactly what you&apos;re missing and what you could have.</p>

          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-white/5 p-4 border-b border-white/10">
              <div className="text-gray-400 font-medium text-sm">Feature</div>
              <div className="text-blue-400 font-bold text-sm text-center">Webflow</div>
              <div className="text-neon font-bold text-sm text-center">Custom-Coded (Next.js)</div>
            </div>

            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 items-center ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} border-b border-white/5 last:border-b-0`}>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <row.icon className="w-4 h-4 text-gray-500" />
                  {row.feature}
                </div>
                <div className="text-red-400/80 text-sm text-center">{row.webflow}</div>
                <div className="text-green-400 text-sm text-center font-medium">{row.custom}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE MIGRATE */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">How We Migrate Your Webflow Site</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">A proven 4-step process. Every interaction rebuilt. Every CMS item migrated.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "Webflow Audit", desc: "We analyze your Webflow site\u2019s structure, CMS collections, interactions, and integrations. We identify what transfers directly and what needs to be rebuilt.", icon: FileSearch, duration: "Week 1" },
              { step: "02", title: "Architecture & Design", desc: "We recreate your Webflow interactions and design in custom code \u2014 but with server-side rendering, real API routes, and unlimited CMS. Every animation, every interaction, rebuilt natively.", icon: Wrench, duration: "Weeks 2-3" },
              { step: "03", title: "Full Development", desc: "Sprint-based development. Your Webflow CMS content migrates automatically. We add features Webflow couldn\u2019t handle: auth, database queries, custom integrations.", icon: Code2, duration: "Weeks 4-6" },
              { step: "04", title: "Launch & Handover", desc: "We deploy to Vercel (free hosting), set up your new CMS, and hand over the GitHub repository. You own everything. No vendor lock-in.", icon: Rocket, duration: "Week 7" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-neon" />
                  </div>
                  {i < 3 && <div className="w-px h-8 bg-white/10 mt-2" />}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-gray-600">{item.step}</span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">{item.duration}</span>
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU GET */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon/10 border border-neon/20 text-sm text-neon mb-6">
            <Code2 className="w-4 h-4" /> What You Get
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Everything Webflow Does. And Everything It Can&apos;t.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            A custom-coded website gives you what Webflow never will: full ownership, server-side power, unlimited CMS, and zero monthly hosting fees.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Gauge, title: "Everything Webflow Does, But Better", desc: "Same visual polish, but with server-side rendering, unlimited CMS, real API routes, and sub-second load times. No compromises." },
              { icon: Server, title: "Server-Side Power", desc: "User authentication, payment processing, database queries, API integrations \u2014 everything Webflow can\u2019t do natively. Built into your codebase." },
              { icon: DollarSign, title: "Zero Hosting Fees, Full Ownership", desc: "Deploy on Vercel\u2019s free tier. Own every line of code. No vendor lock-in. Scale to millions of pages without hitting CMS limits." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.08] border border-white/10 hover:border-neon/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center mb-4 group-hover:bg-neon/20 transition-colors">
                  <item.icon className="w-6 h-6 text-neon" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DUAL CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Ready to Level Up?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Webflow Optimization */}
            <div className="p-8 rounded-3xl bg-white/[0.08] border border-white/10 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-2xl font-bold text-white mb-4">Webflow Optimization</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Not ready to leave Webflow? We&apos;ll optimize what you have within the platform to squeeze out maximum performance and SEO results.
              </p>
              <ul className="space-y-3 mb-8">
                {["Performance optimization", "SEO improvements", "CMS restructuring", "Interaction refinements"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 border border-blue-500/30 text-blue-400 font-bold rounded-full hover:bg-blue-500/10 transition-all"
              >
                Optimize My Webflow
              </button>
            </div>

            {/* Migrate to Custom Code */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-neon/5 to-transparent border border-neon/30 hover:border-neon/50 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-neon/20 text-neon text-xs font-bold rounded-full">Recommended</div>
              <div className="text-neon text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-2xl font-bold text-white mb-4">Migrate to Custom Code</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Migrate from Webflow to a custom-coded platform you own forever. Faster, full server-side logic, unlimited CMS, zero monthly hosting fees.
              </p>
              <ul className="space-y-3 mb-8">
                {["Sub-second load times", "Full server-side logic", "Unlimited CMS", "100% code ownership", "No monthly hosting fees", "30-day money-back guarantee"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-neon flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 bg-neon text-black font-bold rounded-full hover:bg-neon/90 transition-all"
              >
                Get Migration Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6">
              <HelpCircle className="w-4 h-4" /> FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Straight answers. No sales fluff.</p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <button key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-white font-medium text-base">{faq.q}</h3>
                  <div className={`w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                    <span className="text-white text-sm font-bold">+</span>
                  </div>
                </div>
                {openFaq === i && (
                  <p className="text-gray-400 text-sm leading-relaxed mt-4 border-t border-white/5 pt-4">{faq.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GUARANTEE */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl bg-gradient-to-br from-green-900/20 to-black border border-green-500/30 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> Performance Guarantee
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">2x Faster or Your Money Back</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              If your new custom-coded site isn&apos;t at least 2x faster than your Webflow site, doesn&apos;t rank better, and doesn&apos;t look better, we&apos;ll refund you. No questions asked.
            </p>
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
            >
              Book Free Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* Related Services - Internal Linking */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white text-center mb-3">Explore More Services</h2>
          <p className="text-gray-500 text-center mb-10 text-sm">Every migration is different. Find the right path for your platform.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/squarespace" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">Squarespace Migration</h3>
              <p className="text-gray-500 text-sm">Leave Squarespace behind. Get a site you actually own.</p>
            </Link>
            <Link href="/services/wix" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">Wix Migration</h3>
              <p className="text-gray-500 text-sm">Break free from Wix limitations. Own your code.</p>
            </Link>
            <Link href="/services/custom-engineering" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">Custom Engineering</h3>
              <p className="text-gray-500 text-sm">SaaS platforms, dashboards, and APIs built from scratch.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
