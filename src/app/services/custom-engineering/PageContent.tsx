"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Lock, Cpu, Users, Palette, HelpCircle, FileSearch, Lightbulb, Code, Rocket, Gauge, ShoppingBag, Wrench } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialProof from "@/components/home/SocialProof";
import CaseStudyGrid from "@/components/services/CaseStudyGrid";
import PricingTiers from "@/components/services/PricingTiers";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import BuiltWith from "@/components/sections/BuiltWith";

const comparisonData = [
  { feature: "Scalability",     nocode: "Bubble: 1,000-user hard limit on $119/mo plan", custom: "Vercel Edge + Supabase: handles millions, pay only when you scale", icon: Users },
  { feature: "Code Ownership",  nocode: "Bubble shuts down → your product disappears", custom: "100% yours on GitHub, Day 1. Fire us and hire anyone.", icon: Lock },
  { feature: "Performance",     nocode: "30 to 55 PageSpeed mobile (Bubble / Webflow avg)", custom: "90 to 98/100 PageSpeed (our own site scores 100)", icon: TrendingUp },
  { feature: "Monthly Cost",    nocode: "$49 to $499/mo forever, forced annual upgrades", custom: "Starts free. $20/mo only when you scale. Our $38K/mo brand runs on under $25/mo.", icon: DollarSign },
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
      <section className="relative pt-20 md:pt-28 pb-8 md:pb-12 px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)", backgroundSize: "50px 50px", opacity: 0.03 }} />
        <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-stone-200/50 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-6">
            <Zap className="w-4 h-4" /> Next.js Development Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-4 leading-tight"
          >
            Custom software, <span className="font-serif italic text-cognac">shipped in weeks.</span> <br />
            Not filed in a dev-shop backlog.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            Templates can&apos;t build unicorns. We architect scalable SaaS platforms, internal dashboards, and AI-powered tools. <span className="text-charcoal font-medium">You own the code. You own the IP. You own the future.</span> We run our own custom CRM and AI automation systems on the same stack we build for clients.
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
            <Link href="#what-we-build" className="px-8 py-4 bg-white border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all flex items-center justify-center gap-2">
              See What We Build <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="text-sm text-stone-500 mt-4 text-center max-w-xl mx-auto leading-relaxed">30-min call. Describe your idea or share your current tool when you book. We scope it live, identify what custom code replaces, and <span className="text-charcoal font-medium">give you a fixed MVP quote.</span></p>
        </div>
      </section>

      {/* 2. WHAT WE BUILD */}
      <section id="what-we-build" className="py-10 md:py-14 px-6 border-y border-stone-200 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-sm text-stone-600 font-bold uppercase tracking-widest mb-6">
              What We Build
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">What Our Next.js Development Agency Builds</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">Every project we take on falls into one of these categories. Here&apos;s what we&apos;ve built for companies like yours.</p>
          </div>

          <div className="space-y-6">
            {/* SaaS Platforms, Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-cognac/20 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                  <Gauge className="w-8 h-8 text-cognac" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">SaaS Platforms</h3>
                  <p className="text-stone-600 text-base leading-relaxed mb-4">Multi-tenant applications with authentication, subscription billing, user dashboards, and scalable architecture built to grow with your business.</p>
                  <p className="text-sm text-cognac font-medium mb-4">We use this exact stack ourselves. Our internal CRM and AI automation system are built on Next.js and Supabase — the same architecture we deliver to clients.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Subscription management dashboards", "Marketplace platforms with payments", "Project management tools", "CRM & client portals", "Multi-tenant auth with role-based access", "Stripe/payment gateway integration"].map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Internal Tools, Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-cognac/20 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                  <Users className="w-8 h-8 text-cognac" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">Internal Tools</h3>
                  <p className="text-stone-600 text-base leading-relaxed mb-6">Custom dashboards, admin panels, and workflow automation that replace spreadsheets and manual processes with real-time, automated systems.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Operations & logistics dashboards", "Inventory management systems", "Employee onboarding portals", "Real-time analytics & reporting", "Workflow automation engines", "Custom admin panels"].map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI-Powered Products, Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-10 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-cognac/20 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                  <Cpu className="w-8 h-8 text-cognac" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal mb-3">AI-Powered Products</h3>
                  <p className="text-stone-600 text-base leading-relaxed mb-6">OpenAI and Claude integration built natively into your product. Chat with your data, intelligent automation, and AI features that give you a competitive edge.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["AI chatbots trained on your data", "Automated document processing", "Intelligent search & recommendations", "Content generation engines", "Smart data extraction pipelines", "Conversational interfaces (AI-powered search)"].map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                        <CheckCircle2 className="w-4 h-4 text-cognac mt-0.5 shrink-0" /> {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2a. CASE STUDY GRID — Saforne featured (custom build from scratch) */}
      <CaseStudyGrid
        highlight="saforne"
        label="Real Custom Builds"
        heading="Custom Next.js, built from scratch"
        subheading="Four custom applications we've built. Live URLs, verifiable performance scores, real clients shipping real products."
      />

      {/* 2b. SOCIAL PROOF — moved up for concentrated proof flow */}
      <SocialProof />

      {/* 3. HOW WE BUILD - Process Timeline */}
      <section id="how-we-build" className="py-12 md:py-20 px-6 bg-white">
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
              { step: "03", title: "Full Development", duration: "Weeks 4-8", desc: "Sprint-based build on Next.js App Router with React Server Components, Tailwind CSS, Turbopack, and Sanity or Supabase for content and data. Auth, Stripe payments, real-time features, Claude and OpenAI integration. Weekly demos. Never surprises." },
              { step: "04", title: "Launch & Scale", duration: "Week 9+", desc: "We deploy to production, set up monitoring, and hand over the codebase. You own 100% of the code and IP. We stay on for support." },
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

      {/* 4. PAIN POINTS */}
      <section className="py-12 md:py-20 px-6 bg-[#0F172A]">
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
              { icon: DollarSign, pain: "The $180K Quote That Ships 9 Months Late", detail: "Dev shops pad estimates with project managers, QA, account managers, and a billable discovery phase. Half your budget goes to people who never open a code editor. Founder-built means zero handoff tax, zero coordination meetings, zero Slack threads about what was supposed to be in the spec." },
              { icon: XCircle, pain: "The Offshore Black Hole", detail: "You ship specs to Manila at 9pm and wake up to code that technically works but architecturally cannot scale past 500 users. Rewrites in year two cost more than the original build. Custom architecture decisions need to be made by people who will maintain them." },
              { icon: Zap, pain: "Hourly Billing Rewards Slow Work", detail: "Every unexpected complication is revenue for the shop and a line item for you. Fixed-price forces the agency to design for speed and correctness on day one. We price the outcome, not the hours. If it takes longer than quoted, that is our problem, not yours." },
              { icon: Lock, pain: "Your Product Disappears If the Platform Shuts Down", detail: "Bubble, Glide, and Softr have had outages and pricing hikes. If they shut down or price you out, your entire product disappears with them. Custom code lives on GitHub. You own it from Day 1. No vendor controls your business." },
              { icon: TrendingUp, pain: "Investors Pass Because of Your Tech Stack", detail: "Due diligence audits your architecture. A no-code app signals prototype, not scalable business. Custom code signals investable technology and lets you pass technical DD without rebuilding anything." },
              { icon: Cpu, pain: "Competitors Are Shipping AI Features You Cannot Match", detail: "Claude, OpenAI, and AI search integrations require native API architecture. No-code and off-the-shelf platforms cannot wire AI into your product core logic. Competitors on custom code ship AI features in days. You wait for a plugin." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

      {/* 5. COMPARISON TABLE */}
      <section id="comparison" className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">No-Code vs Custom Coded</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-12">Build to last. Build to scale. Build to own.</p>

          <p className="md:hidden text-xs text-stone-500 text-center mb-2">&larr; Swipe to compare &rarr;</p>
          <div className="overflow-x-auto rounded-2xl border border-stone-300">
            <div className="min-w-[560px]">
            <div className="grid grid-cols-3 bg-stone-50 p-4 border-b border-stone-200">
              <div className="text-stone-600 font-medium text-sm">Feature</div>
              <div className="text-stone-500 font-bold text-sm text-center">No-Code / Templates</div>
              <div className="text-cognac font-bold text-sm text-center">Custom Coded</div>
            </div>

            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 items-center ${i % 2 === 0 ? 'bg-stone-50/50' : ''} border-b border-stone-200 last:border-b-0`}>
                <div className="flex items-center gap-2 text-charcoal text-sm font-medium">
                  <row.icon className="w-4 h-4 text-stone-400 shrink-0" />
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

      {/* 6. TECH STACK */}
      <BuiltWith />

      {/* FOUNDER CREDIBILITY BLOCK */}
      <section className="py-12 md:py-20 px-6 bg-stone-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-40 h-40 rounded-2xl border border-stone-200 shadow-xs bg-cognac/10 flex items-center justify-center text-cognac font-bold text-6xl shrink-0">
              H
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-2">Who writes your code</p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Founder-built. Not farmed out.</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-4">
                I am Hassan. I spent six years shipping WordPress sites for founders before I watched too many of them hit the platform ceiling. Now I build custom Next.js from Austin, Texas, with Imran on architecture. When you hire PandaCodeGen, I write your code. Not a junior. Not an offshore team. Not a project manager forwarding Slack messages.
              </p>
              <p className="text-stone-600 text-base">
                Every quote I give on a discovery call is a quote I can personally deliver on. That is why the pricing below looks the way it does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TIERS — SaaS / custom application pricing */}
      <PricingTiers
        heading="Dev shops charge $50K to $200K."
        headingAccent="We ship real software for less."
        agencyComparison={{
          agencyPrice: "$50K to $200K+",
          agencyNote: "3-6 month timeline. Hourly billing. Agency overhead baked into every hour.",
          ourPrice: "From $3,000",
          ourNote: "2-8 week timeline. Fixed-scope pricing. You own 100% of the code + IP.",
        }}
        tiers={[
          {
            tier: "Foot in the Door",
            price: "Starting from $3,000",
            timeline: "1-2 weeks",
            fit: "Marketing site, internal tool, or small portal. Clear scope.",
            includes: [
              "Custom Next.js + TypeScript build",
              "Database (Supabase or Postgres)",
              "Auth + role-based access",
              "Responsive design, 90+ PageSpeed",
              "Deployment to Vercel",
              "Full code ownership on Day 1",
            ],
            cta: "Scope My Project",
          },
          {
            tier: "Growth",
            price: "Starting from $10,000",
            timeline: "3-5 weeks",
            fit: "SaaS MVP, client portal, or full dashboard. Custom business logic.",
            includes: [
              "Everything in Foot in the Door",
              "Stripe payments + subscriptions",
              "Admin dashboard with analytics",
              "Custom business workflow logic",
              "API integrations (up to 3)",
              "60-day post-launch support",
            ],
            featured: true,
          },
          {
            tier: "Scale",
            price: "Starting from $25,000",
            timeline: "6-12 weeks",
            fit: "Multi-tenant SaaS, complex integrations, enterprise features.",
            includes: [
              "Everything in Growth",
              "Multi-tenant architecture",
              "Scales to 10,000+ users",
              "Complex API integrations",
              "Security audit + penetration testing",
              "90-day post-launch support",
            ],
          },
        ]}
        footnote="All builds include: 100% code ownership + IP rights on Day 1, deployment to your own Vercel account, complete documentation, and our scales-to-10K-users guarantee."
      />

      {/* 7. DUAL CTA */}
      <section className="py-10 md:py-14 px-6">
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
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 border border-charcoal text-charcoal font-bold rounded-full hover:bg-cognac hover:text-white hover:border-cognac transition-all"
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
                A complete custom coded platform with AI integration, multi-tenant architecture, and everything you need to scale to millions of users.
              </p>
              <ul className="space-y-3 mb-8">
                {["Full SaaS architecture", "AI-powered features", "Mobile app (PWA)", "Admin dashboard", "100% code ownership", "Scales to 1M+ users"].map((item, i) => (
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
                Build My Platform
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-14 px-6">
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
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-200 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-charcoal font-medium text-base">{faq.q}</h3>
                    <div className={`w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
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
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl bg-linear-to-br from-green-50 to-white border border-green-200 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> 30-Day Money-Back Guarantee (from delivery)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Scales to 10,000 Users. Or We Fix It Free.</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-2 max-w-2xl mx-auto">
              If our architecture doesn&apos;t scale to your first 10,000 users without crashing, we will fix it for free. You receive 100% Code Ownership and IP Rights on Day 1.
            </p>
            <p className="text-sm text-stone-500 mb-8">Built in Austin, Texas. Shipped for founders worldwide.</p>
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

      {/* Related Services — expanded to all platforms via reusable component */}
      <RelatedServicesGrid currentHref="/services/custom-engineering" />

      {/* Author Attribution */}
      <section className="py-10 border-t border-stone-200 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Built by</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-start gap-4">
              <Link href="/about/hassan" className="shrink-0">
                <Image src="/team/hassan.png" alt="Hassan Jamal" width={48} height={48} className="w-12 h-12 rounded-full border border-stone-200 object-cover" />
              </Link>
              <div>
                <Link href="/about/hassan" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Hassan Jamal</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Engineer. Builds SaaS platforms, AI-integrated dashboards, and client portals from scratch. Fixed-price, sprint-based delivery with working features every week, not just at the end.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Link href="/about/imran" className="shrink-0">
                <Image src="/team/imran.png" alt="Imran" width={48} height={48} className="w-12 h-12 rounded-full border border-stone-200 object-cover" />
              </Link>
              <div>
                <Link href="/about/imran" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Imran</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Solutions Architect. Designs scalable system architecture for custom web apps, SaaS products, and no-code-to-custom migrations. Specialises in auth systems, API design, and data modelling. 8+ years in enterprise software.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
