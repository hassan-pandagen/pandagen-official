"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Lock, Cpu, Users, Palette, HelpCircle, FileSearch, Lightbulb, Code, Rocket, Gauge } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import BuiltWith from "@/components/sections/BuiltWith";

const comparisonData = [
  { feature: "Scalability", nocode: "Breaks at 1,000+ users", custom: "Built to handle millions", icon: Users },
  { feature: "Code Ownership", nocode: "You own nothing (platform lock-in)", custom: "100% yours, it's your IP", icon: Lock },
  { feature: "Performance", nocode: "30-55 PageSpeed (mobile)", custom: "90-95/100 guaranteed", icon: TrendingUp },
  { feature: "Monthly Cost", nocode: "$50-500/mo platform fees forever", custom: "$0 to start. Pay only when you scale massively", icon: DollarSign },
  { feature: "Customization", nocode: "Limited to what the builder allows", custom: "Unlimited. If you can dream it, we can build it", icon: Palette },
  { feature: "AI Integration", nocode: "Basic or none", custom: "Full OpenAI/Claude integration, chat with your data", icon: Cpu },
];

const faqData = [
  {
    q: "How long does it take to build a custom app?",
    a: "A working MVP takes 4-6 weeks. A full-featured platform takes 8-16 weeks depending on complexity. We do sprint-based development so you see working features every week, not just at the end.",
  },
  {
    q: "How much does custom development cost?",
    a: "MVPs typically range from $8,000-$20,000. Full platforms range from $20,000-$60,000+. We give fixed-price quotes upfront — no hourly billing surprises. The ROI comes from owning the code (no SaaS fees) and having a product that actually scales.",
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
    <main className="bg-transparent min-h-screen selection:bg-neon selection:text-black overflow-x-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-20 mix-blend-overlay" />
      <ReadingProgressBar />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-8">
            <Zap className="w-4 h-4" /> Build Your Own Software
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-tight"
          >
            Build Software <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(to right, #60a5fa, #a78bfa, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              That You Own.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Templates can&apos;t build unicorns. We architect scalable SaaS platforms, internal dashboards, and AI-powered tools. <span className="text-white font-medium">You own the code. You own the IP. You own the future.</span>
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
            <Link href="#what-we-build" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-blue-400/50 hover:bg-blue-500/5 transition-all flex items-center justify-center gap-2">
              See What We Build <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT WE BUILD */}
      <section id="what-we-build" className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6">
              <Code2 className="w-4 h-4" /> What We Build
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Three Categories. Infinite Possibilities.</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Every project we take on falls into one of these categories. Here&apos;s what we&apos;ve built for companies like yours.</p>
          </div>

          <div className="space-y-6">
            {/* SaaS Platforms — Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Gauge className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">SaaS Platforms</h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-6">Multi-tenant applications with authentication, subscription billing, user dashboards, and scalable architecture built to grow with your business.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Subscription management dashboards", "Marketplace platforms with payments", "Project management tools", "CRM & client portals", "Multi-tenant auth with role-based access", "Stripe/payment gateway integration"].map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" /> {ex}
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
              className="p-8 md:p-10 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-purple-500/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Internal Tools</h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-6">Custom dashboards, admin panels, and workflow automation that replace spreadsheets and manual processes with real-time, automated systems.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Operations & logistics dashboards", "Inventory management systems", "Employee onboarding portals", "Real-time analytics & reporting", "Workflow automation engines", "Custom admin panels"].map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" /> {ex}
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
              className="p-8 md:p-10 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-neon/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0 group-hover:bg-neon/20 transition-colors">
                  <Cpu className="w-8 h-8 text-neon" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">AI-Powered Products</h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-6">OpenAI and Claude integration built natively into your product. Chat with your data, intelligent automation, and AI features that give you a competitive edge.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["AI chatbots trained on your data", "Automated document processing", "Intelligent search & recommendations", "Content generation engines", "Smart data extraction pipelines", "Conversational interfaces (RAG)"].map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-neon mt-0.5 flex-shrink-0" /> {ex}
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
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">The No-Code Ceiling</h2>
          </div>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            These are the problems founders and businesses hit when they try to scale on no-code platforms:
          </p>

          <div className="space-y-4">
            {[
              { pain: "No-code tools (Bubble) are crashing or getting too expensive", detail: "What started at $25/month is now $200+/month. And it still breaks when you get a traffic spike. You're paying more for less reliability." },
              { pain: "You need complex logic that templates can't handle", detail: "Role-based access, real-time data, custom workflows, API integrations. No-code tools have hard ceilings that block real business growth." },
              { pain: "You need a mobile app but can't afford a separate iOS team", detail: "Building native iOS and Android separately costs 2-3x more. A custom-coded Progressive Web App (PWA) works on all devices from one codebase." },
              { pain: "You want to own your IP, not rent it from a SaaS", detail: "On Bubble or Webflow, if the platform shuts down or raises prices, your entire product is at risk. Custom code is YOUR asset." },
              { pain: "Investors won't fund a company built on no-code", detail: "Smart investors want to see scalable architecture. A Bubble app signals 'not serious.' Custom code signals 'investable technology.'" },
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
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">No-Code vs Custom-Coded (Next.js)</h2>
          <p className="text-gray-400 text-center mb-12">Build to last. Build to scale. Build to own.</p>

          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-white/5 p-4 border-b border-white/10">
              <div className="text-gray-400 font-medium text-sm">Feature</div>
              <div className="text-purple-400 font-bold text-sm text-center">No-Code / Templates</div>
              <div className="text-neon font-bold text-sm text-center">Custom-Coded (Next.js)</div>
            </div>

            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 items-center ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} border-b border-white/5 last:border-b-0`}>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <row.icon className="w-4 h-4 text-gray-500" />
                  {row.feature}
                </div>
                <div className="text-red-400/80 text-sm text-center">{row.nocode}</div>
                <div className="text-green-400 text-sm text-center font-medium">{row.custom}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE BUILD - Process Timeline */}
      <section id="how-we-build" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6">
              <Rocket className="w-4 h-4" /> How We Build
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">From Idea to Production in Sprints</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">No 6-month waterfall projects. We ship in 2-week sprints with weekly demos. You see progress every single week.</p>
          </div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Discovery Sprint", duration: "Week 1", desc: "We map your requirements, user flows, and technical architecture. You get a detailed spec doc and timeline before a single line of code is written.", icon: FileSearch },
              { step: "02", title: "Prototype & Validate", duration: "Weeks 2-3", desc: "We build a working prototype with real functionality — not mockups. You test it, your users test it, we iterate until it's right.", icon: Lightbulb },
              { step: "03", title: "Full Development", duration: "Weeks 4-8", desc: "Sprint-based development with weekly demos. You see progress every week. Auth, payments, real-time features, AI integration — everything gets built.", icon: Code },
              { step: "04", title: "Launch & Scale", duration: "Week 9+", desc: "We deploy to production, set up monitoring, and hand over the codebase. You own 100% of the code and IP. We stay on for support.", icon: Rocket },
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

      {/* 6. TECH STACK */}
      <BuiltWith />

      {/* 7. DUAL CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Ready to Build Something Real?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MVP / Prototype */}
            <div className="p-8 rounded-3xl bg-white/[0.08] border border-white/10 hover:border-blue-500/30 transition-colors">
              <div className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4">For Startups</div>
              <h3 className="text-2xl font-bold text-white mb-4">MVP / Prototype</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Need to validate your idea fast? We build functional MVPs that look polished and are built on real architecture (not no-code that you&apos;ll outgrow).
              </p>
              <ul className="space-y-3 mb-8">
                {["Functional prototype in weeks", "Real code (not no-code)", "Scalable from day one", "Investor-ready architecture", "User testing ready"].map((item, i) => (
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
                Build My MVP
              </button>
            </div>

            {/* Full Platform */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-neon/5 to-transparent border border-neon/30 hover:border-neon/50 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-neon/20 text-neon text-xs font-bold rounded-full">Full Build</div>
              <div className="text-neon text-sm font-bold uppercase tracking-wider mb-4">For Growing Businesses</div>
              <h3 className="text-2xl font-bold text-white mb-4">Full SaaS / Platform</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                A complete custom-coded platform with AI integration, multi-tenant architecture, and everything you need to scale to millions of users.
              </p>
              <ul className="space-y-3 mb-8">
                {["Full SaaS architecture", "AI-powered features", "Mobile app (PWA)", "Admin dashboard", "100% code ownership", "Scales to 1M+ users"].map((item, i) => (
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
                Build My Platform
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-6">
              <HelpCircle className="w-4 h-4" /> FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Straight answers. No sales fluff.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Scales to 10,000 Users. Or We Fix It Free.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              If our architecture doesn&apos;t scale to your first 10,000 users without crashing, we will fix it for free. You receive 100% Code Ownership and IP Rights on Day 1.
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
            <Link href="/services/ecommerce" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">E-Commerce Solutions</h3>
              <p className="text-gray-500 text-sm">Headless Shopify and custom storefronts that convert.</p>
            </Link>
            <Link href="/services/wordpress-migration" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">WordPress Migration</h3>
              <p className="text-gray-500 text-sm">Escape plugin bloat. Get sub-second load times with custom code.</p>
            </Link>
            <Link href="/services/webflow" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">Webflow Migration</h3>
              <p className="text-gray-500 text-sm">Outgrow Webflow&apos;s constraints with custom architecture.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
