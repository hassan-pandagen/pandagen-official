"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Lock, Cpu, Users, Palette, HelpCircle, FileSearch, Lightbulb, Code, Rocket, Gauge, ShoppingBag, Wrench } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import BuiltWith from "@/components/sections/BuiltWith";

const comparisonData = [
  { feature: "Scalability",     nocode: "Bubble: 1,000-user hard limit on $119/mo plan", custom: "Vercel Edge + Supabase: handles millions, pay only when you scale", icon: Users },
  { feature: "Code Ownership",  nocode: "Bubble shuts down → your product disappears", custom: "100% yours on GitHub, Day 1. Fire us and hire anyone.", icon: Lock },
  { feature: "Performance",     nocode: "30–55 PageSpeed mobile (Bubble / Webflow avg)", custom: "90–98/100 PageSpeed (our own site scores 100)", icon: TrendingUp },
  { feature: "Monthly Cost",    nocode: "$49–$499/mo forever, forced annual upgrades", custom: "$0/mo to start. Vercel + Supabase free tier runs real businesses", icon: DollarSign },
  { feature: "Customization",   nocode: "Can't build complex logic: custom auth, B2B pricing, real-time", custom: "Unlimited: role-based access, live data, custom pricing calculators, anything", icon: Palette },
  { feature: "AI Integration",  nocode: "Zapier webhooks only. No real AI architecture", custom: "OpenAI + Claude natively in your product, trained on your own data", icon: Cpu },
];

const faqData = [
  {
    q: "How long does it take to build a custom app?",
    a: "A working MVP takes 4-6 weeks. A full-featured platform takes 8-16 weeks depending on complexity. We do sprint-based development so you see working features every week, not just at the end.",
  },
  {
    q: "How much does custom development cost?",
    a: "MVPs typically range from $8,000-$20,000. Full platforms range from $20,000-$60,000+. We give fixed-price quotes upfront. No hourly billing surprises. The ROI comes from owning the code (no SaaS fees) and having a product that actually scales.",
  },
  {
    q: "Can I add AI features to my app?",
    a: "Yes. We integrate OpenAI and Claude APIs directly into your product. Examples: AI chat support, document analysis, automated data extraction, content generation, and smart search. These features are built natively, not bolted on.",
  },
  {
    q: "What if I already have a Bubble/no-code app?",
    a: "We migrate your logic and data to custom code. Your users don't notice a difference except that everything is faster. We handle database migration, auth setup, and API recreation.",
  },
  {
    q: "Do I own the code?",
    a: "100%. You get the full GitHub repository, all documentation, and deployment access. It's your intellectual property from day one. You can hire any developer in the world to maintain or extend it.",
  },
];

export default function PageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-paper min-h-screen selection:bg-charcoal selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
      <ReadingProgressBar />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-28 md:pt-40 pb-12 md:pb-20 px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)", backgroundSize: "50px 50px", opacity: 0.03 }} />
        <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-stone-200/50 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-500/10 border border-charcoal/20 text-sm text-stone-500 mb-8">
            <Zap className="w-4 h-4" /> Build Your Own Software
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-tight"
          >
            Build Software <br />
            <span className="font-serif italic text-stone-500">
              That You Own.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Templates can&apos;t build unicorns. We architect scalable SaaS platforms, internal dashboards, and AI-powered tools. <span className="text-charcoal font-medium">You own the code. You own the IP. You own the future.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#what-we-build" className="px-8 py-4 border border-stone-200 text-charcoal font-medium rounded-full hover:border-stone-400/50 hover:bg-stone-500/5 transition-all flex items-center justify-center gap-2">
              See What We Build <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD */}
      <section id="what-we-build" className="py-10 md:py-20 px-6 border-y border-stone-200 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-sm text-stone-600 font-bold uppercase tracking-widest mb-6">
              What We Build
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Three Categories. Infinite Possibilities.</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">Every project we take on falls into one of these categories. Here&apos;s what we&apos;ve built for companies like yours.</p>
          </div>

          <div className="space-y-6">
            {/* SaaS Platforms — Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 hover:border-charcoal/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-stone-500/10 border border-charcoal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-500/20 transition-colors">
                  <Gauge className="w-8 h-8 text-stone-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">SaaS Platforms</h3>
                  <p className="text-stone-600 text-base leading-relaxed mb-6">Multi-tenant applications with authentication, subscription billing, user dashboards, and scalable architecture built to grow with your business.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Subscription management dashboards", "Marketplace platforms with payments", "Project management tools", "CRM & client portals", "Multi-tenant auth with role-based access", "Stripe/payment gateway integration"].map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" /> {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Internal Tools — Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 hover:border-charcoal/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-stone-500/10 border border-stone-200 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-500/20 transition-colors">
                  <Users className="w-8 h-8 text-stone-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">Internal Tools</h3>
                  <p className="text-stone-600 text-base leading-relaxed mb-6">Custom dashboards, admin panels, and workflow automation that replace spreadsheets and manual processes with real-time, automated systems.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Operations & logistics dashboards", "Inventory management systems", "Employee onboarding portals", "Real-time analytics & reporting", "Workflow automation engines", "Custom admin panels"].map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" /> {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI-Powered Products — Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-cognac/20 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-100 transition-colors">
                  <Cpu className="w-8 h-8 text-cognac" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">AI-Powered Products</h3>
                  <p className="text-stone-600 text-base leading-relaxed mb-6">OpenAI and Claude integration built natively into your product. Chat with your data, intelligent automation, and AI features that give you a competitive edge.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["AI chatbots trained on your data", "Automated document processing", "Intelligent search & recommendations", "Content generation engines", "Smart data extraction pipelines", "Conversational interfaces (AI-powered search)"].map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 flex-shrink-0" /> {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS */}
      <section className="py-12 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" /> Growth Cap
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The No-Code Ceiling</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These are the problems founders and businesses hit when they try to scale on no-code platforms:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, pain: "Your Platform Bill Doubles Every 6 Months", detail: "Bubble started at $25/month. Now it's $200+ just to stay live. Hit 1,000 users and the bill doubles again. You're paying SaaS margins to run your own product. Custom code has no usage ceiling." },
              { icon: XCircle, pain: "You're Blocked on Every Feature That Matters", detail: "Role-based permissions, real-time data sync, custom API workflows, B2B pricing logic. No-code platforms have hard ceilings. When your dev says 'we can't do that in Bubble,' the only answer is custom code." },
              { icon: Zap, pain: "One Codebase. Every Device. Half the Build Cost.", detail: "Building separate iOS and Android apps costs 2-3x more in time and budget. A custom Progressive Web App works on every device from a single codebase. Ship faster, spend less, own the result." },
              { icon: Lock, pain: "Your Product Disappears If the Platform Shuts Down", detail: "Bubble has had outages and pricing hikes. If they shut down or price you out, your entire product disappears with them. Custom code lives on GitHub. You own it from Day 1. No vendor controls your business." },
              { icon: TrendingUp, pain: "Investors Pass Because of Your Tech Stack", detail: "Due diligence audits your architecture. A Bubble app signals 'prototype,' not 'scalable business.' Custom code signals 'investable technology' and lets you pass technical DD without rebuilding anything." },
              { icon: Cpu, pain: "Competitors Are Shipping AI Features You Can't Match", detail: "Claude, OpenAI, and AI search integrations require native API architecture. No-code can't wire AI into your product's core logic. Competitors on custom code ship AI features in days. You wait for Bubble to add a plugin." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-400 w-fit mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.pain}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section id="comparison" className="py-10 md:py-20 px-6 border-y border-stone-200 bg-stone-50/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">No-Code vs Custom-Coded</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-12">Build to last. Build to scale. Build to own.</p>

          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <div className="min-w-[500px]">
            <div className="grid grid-cols-3 bg-stone-50 p-4 border-b border-stone-200">
              <div className="text-stone-600 font-medium text-sm">Feature</div>
              <div className="text-stone-500 font-bold text-sm text-center">No-Code / Templates</div>
              <div className="text-cognac font-bold text-sm text-center">Custom-Coded</div>
            </div>

            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 items-center ${i % 2 === 0 ? 'bg-stone-50/50' : ''} border-b border-stone-200 last:border-b-0`}>
                <div className="flex items-center gap-2 text-charcoal text-sm font-medium">
                  <row.icon className="w-4 h-4 text-stone-400 flex-shrink-0" />
                  {row.feature}
                </div>
                <div className="text-red-400/80 text-sm text-center">{row.nocode}</div>
                <div className="text-green-400 text-sm text-center font-medium">{row.custom}</div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE BUILD - Process Timeline */}
      <section id="how-we-build" className="py-12 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-sm text-stone-600 font-bold uppercase tracking-widest mb-6">
              How We Build
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">From Idea to Production in Sprints</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">No 6-month waterfall projects. We ship in 2-week sprints with weekly demos. You see progress every single week.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 -z-10" />
            {[
              { step: "01", title: "Discovery Sprint", duration: "Week 1", desc: "We map your requirements, user flows, and technical architecture. You get a detailed spec doc and timeline before a single line of code is written." },
              { step: "02", title: "Prototype & Validate", duration: "Weeks 2-3", desc: "We build a working prototype with real functionality, not mockups. You test it, your users test it, we iterate until it's right." },
              { step: "03", title: "Full Development", duration: "Weeks 4-8", desc: "Sprint-based development with weekly demos. Auth, payments, real-time features, AI integration. Everything gets built and reviewed." },
              { step: "04", title: "Launch & Scale", duration: "Week 9+", desc: "We deploy to production, set up monitoring, and hand over the codebase. You own 100% of the code and IP. We stay on for support." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-stone-50 border-4 border-white shadow flex items-center justify-center text-lg font-black text-cognac mb-6">
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

      {/* 6. TECH STACK */}
      <BuiltWith />

      {/* 7. DUAL CTA */}
      <section className="py-10 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8 md:mb-12">Ready to Build Something Real?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MVP / Prototype */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-charcoal/30 transition-colors">
              <div className="text-stone-500 text-sm font-bold uppercase tracking-wider mb-4">For Startups</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">MVP / Prototype</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Need to validate your idea fast? We build functional MVPs that look polished and are built on real architecture (not no-code that you&apos;ll outgrow).
              </p>
              <ul className="space-y-3 mb-8">
                {["Functional prototype in weeks", "Real code (not no-code)", "Scalable from day one", "Investor-ready architecture", "User testing ready"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-stone-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 border border-charcoal/30 text-stone-500 font-bold rounded-full hover:bg-stone-500/10 transition-all"
              >
                Build My MVP
              </button>
            </div>

            {/* Full Platform */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-charcoal/20 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-stone-100 text-cognac text-xs font-bold rounded-full">Full Build</div>
              <div className="text-cognac text-sm font-bold uppercase tracking-wider mb-4">For Growing Businesses</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Full SaaS / Platform</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                A complete custom-coded platform with AI integration, multi-tenant architecture, and everything you need to scale to millions of users.
              </p>
              <ul className="space-y-3 mb-8">
                {["Full SaaS architecture", "AI-powered features", "Mobile app (PWA)", "Admin dashboard", "100% code ownership", "Scales to 1M+ users"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all"
              >
                Build My Platform
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-sm text-stone-500 mb-6">
              <HelpCircle className="w-4 h-4" /> FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
            <p className="text-stone-600 text-lg">Straight answers. No sales fluff.</p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-200 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-charcoal font-medium text-base">{faq.q}</h3>
                    <div className={`w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
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
      <section className="py-10 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> 30-Day Money-Back Guarantee (from delivery)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Scales to 10,000 Users. Or We Fix It Free.</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              If our architecture doesn&apos;t scale to your first 10,000 users without crashing, we will fix it for free. You receive 100% Code Ownership and IP Rights on Day 1.
            </p>
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all"
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
            <Link href="/services/ecommerce" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-100 transition-colors">
                <ShoppingBag className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">E-Commerce Solutions</h3>
                <p className="text-stone-400 text-xs mt-0.5">Headless Shopify storefronts that convert.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
            <Link href="/services/wordpress-migration" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-100 transition-colors">
                <Wrench className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">WordPress Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Escape plugin bloat. Get sub-second load times with custom code.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
            <Link href="/services/webflow" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-100 transition-colors">
                <Zap className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">Webflow Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Outgrow Webflow&apos;s constraints with custom architecture.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
