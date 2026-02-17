"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Gauge, Lock, Palette, Search, HelpCircle, FileSearch, Wrench, Rocket, PenTool } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

const comparisonData = [
  { feature: "Page Load Speed", squarespace: "3-5 seconds", custom: "Under 1 second", icon: Gauge },
  { feature: "Code Ownership", squarespace: "You rent it ($33-65/mo)", custom: "100% yours forever", icon: Lock },
  { feature: "Google PageSpeed Score", squarespace: "30-50 average (mobile)", custom: "90-100 guaranteed", icon: TrendingUp },
  { feature: "Monthly Cost", squarespace: "$33-65/mo subscription", custom: "$0 hosting (Vercel free tier)", icon: DollarSign },
  { feature: "Design Freedom", squarespace: "Template-based, limited", custom: "Unlimited pixel-perfect designs", icon: Palette },
  { feature: "SEO Capability", squarespace: "Basic, limited control", custom: "Full technical SEO control", icon: Search },
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
    a: "All blog posts migrate with their content, images, dates, and URLs. We set up a headless CMS so you can write and publish new posts the same way \u2014 but your blog loads 4-5x faster."
  },
  {
    q: "Is the migration disruptive to my business?",
    a: "No. Your Squarespace site stays live during the entire build. We develop the new site in parallel. On launch day, we point your domain to the new site. Zero downtime."
  },
];

export default function SquarespacePageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-transparent min-h-screen selection:bg-neon selection:text-black overflow-x-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-20 mix-blend-overlay" />
      <ReadingProgressBar />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-8">
            <Zap className="w-4 h-4" /> Platform Upgrade
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-tight"
          >
            Outgrown Squarespace? <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(to right, #c084fc, #f472b6, #fb7185)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Own Your Platform.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Squarespace was great to get started. But its limitations are now costing you rankings, speed, and revenue. We build custom-coded sites that <span className="text-white font-medium">load 5x faster, rank higher, and you own forever</span>.
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
            <Link href="#comparison" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-purple-400/50 hover:bg-purple-500/5 transition-all flex items-center justify-center gap-2">
              See the Comparison <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. SQUARESPACE WAS GREAT TO START */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Squarespace Was Great to Start. But...</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">What started as a strength is now holding you back:</p>

          {/* Strengths */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> What Squarespace got right
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Beautiful templates",
                "Easy drag-and-drop",
                "Built-in hosting",
                "Basic analytics",
                "All-in-one platform",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-green-500/5 border border-green-500/10"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <p className="text-white text-sm font-medium">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Weaknesses */}
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" /> Where it&apos;s now costing you
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Pages load in 3-5 seconds",
                "Templates look like everyone else\u2019s",
                "Limited SEO customization",
                "$33-65/month forever (you rent it)",
                "Mobile performance is poor",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-red-500/5 border border-red-500/10"
                >
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <p className="text-white text-sm font-medium">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE HIDDEN COST OF SQUARESPACE */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Hidden Cost of Squarespace</h2>
          </div>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">These are the exact problems businesses tell us about before they switch:</p>

          <div className="space-y-4">
            {[
              { pain: "Slow pages = higher bounce rates", detail: "Google measures Core Web Vitals. Squarespace sites consistently score 30-50 on mobile PageSpeed. Every second of load time costs you 7% in conversions." },
              { pain: "Your site looks like 10,000 others", detail: "Squarespace templates are used by millions. Visitors recognize template sites instantly. It signals \u2018small budget\u2019 not \u2018professional business.\u2019" },
              { pain: "You\u2019re paying $33-65/month to rent your website", detail: "You don\u2019t own your Squarespace site. If they raise prices, change features, or shut down, your website goes with them. Zero code ownership." },
              { pain: "Limited SEO means limited growth", detail: "Squarespace restricts access to technical SEO essentials: no custom schema markup, limited URL control, no server-side rendering for search engines." },
              { pain: "You can\u2019t scale beyond the template", detail: "Need custom functionality? A client portal? API integrations? Squarespace can\u2019t do it. You\u2019ll eventually need to rebuild anyway." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-500/20 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">{item.pain}</p>
                    <p className="text-gray-400 text-base mt-1">{item.detail}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Squarespace vs Custom-Coded (Next.js)</h2>
          <p className="text-gray-400 text-center mb-12">See exactly what you&apos;re missing and what you could have.</p>

          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-white/5 p-4 border-b border-white/10">
              <div className="text-gray-400 font-medium text-sm">Feature</div>
              <div className="text-purple-400 font-bold text-sm text-center">Squarespace</div>
              <div className="text-neon font-bold text-sm text-center">Custom-Coded (Next.js)</div>
            </div>

            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 items-center ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} border-b border-white/5 last:border-b-0`}>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <row.icon className="w-4 h-4 text-gray-500" />
                  {row.feature}
                </div>
                <div className="text-red-400/80 text-sm text-center">{row.squarespace}</div>
                <div className="text-green-400 text-sm text-center font-medium">{row.custom}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE MIGRATE - Process Timeline */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">How We Migrate Your Squarespace Site</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">A proven 4-step process. Your Squarespace site stays live the entire time.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "Content Export", desc: "We extract every page, blog post, image, and gallery from Squarespace. Your content is cleaned and organized for the new platform.", icon: FileSearch, duration: "Week 1" },
              { step: "02", title: "Custom Design", desc: "We recreate your brand with a custom design that\u2019s uniquely yours. No more sharing templates with millions of other sites.", icon: PenTool, duration: "Weeks 2-3" },
              { step: "03", title: "Build & SEO Migration", desc: "Your site gets coded in Next.js with server-side rendering. We map all URLs, set up 301 redirects, and preserve your Google rankings.", icon: Wrench, duration: "Weeks 4-5" },
              { step: "04", title: "Launch & Training", desc: "We launch your new site, set up a headless CMS for easy editing, and train your team. No coding required to update content.", icon: Rocket, duration: "Week 6" },
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

      {/* 6. THE SOLUTION - WHAT YOU GET */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon/10 border border-neon/20 text-sm text-neon mb-6">
            <Code2 className="w-4 h-4" /> The Smarter Path
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Own Your Platform. Stop Renting.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            A custom-coded website gives you what Squarespace never will: full ownership, blazing speed, unlimited customization, and zero monthly platform fees.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Palette, title: "Custom Design, Not Templates", desc: "Your site will be 100% unique. No templates, no drag-and-drop limitations. Pixel-perfect design that reflects your brand." },
              { icon: Search, title: "Real SEO That Ranks", desc: "Server-side rendering, custom schema markup, optimized Core Web Vitals. Everything Squarespace can\u2019t give you." },
              { icon: Lock, title: "Own Your Platform", desc: "You own every line of code. No monthly platform fees. Host anywhere. Scale without limits." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.08] border border-white/10 hover:border-neon/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center mb-4 group-hover:bg-neon/20 transition-colors">
                  <item.icon className="w-6 h-6 text-neon" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DUAL CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Ready to Level Up?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Squarespace Optimization */}
            <div className="p-8 rounded-3xl bg-white/[0.08] border border-white/10 hover:border-purple-500/30 transition-colors">
              <div className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-2xl font-bold text-white mb-4">Squarespace Optimization</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Not ready to leave Squarespace? We&apos;ll optimize what you have to get the most out of your current platform.
              </p>
              <ul className="space-y-3 mb-8">
                {["Design improvements", "Speed optimization (within limits)", "SEO audit", "Content strategy", "Analytics setup"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 border border-purple-500/30 text-purple-400 font-bold rounded-full hover:bg-purple-500/10 transition-all"
              >
                Optimize My Squarespace
              </button>
            </div>

            {/* Migrate to Custom Code */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-neon/5 to-transparent border border-neon/30 hover:border-neon/50 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-neon/20 text-neon text-xs font-bold rounded-full">Recommended</div>
              <div className="text-neon text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-2xl font-bold text-white mb-4">Migrate to Custom Code</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Migrate from Squarespace to a custom-coded platform you own forever. Faster, better SEO, zero monthly fees, unlimited customization.
              </p>
              <ul className="space-y-3 mb-8">
                {["Sub-second load times", "Full SEO control", "100% code ownership", "Custom functionality", "No monthly platform fees", "30-day money-back guarantee"].map((item, i) => (
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
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-neon" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Common Questions</h2>
          </div>
          <p className="text-gray-400 text-center mb-12">Everything you need to know about migrating from Squarespace.</p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all"
                >
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
              </motion.div>
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
              <ShieldCheck className="w-4 h-4" /> 30-Day Money Back Guarantee
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">2x Faster or Your Money Back</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              If your new custom-coded site isn&apos;t at least 2x faster than your Squarespace site, doesn&apos;t rank better, and doesn&apos;t look better, we&apos;ll refund you. Simple as that.
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

      <Footer />
    </main>
  );
}
