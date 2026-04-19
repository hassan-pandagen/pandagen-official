"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Gauge, Lock, Palette, Users, BarChart3, HelpCircle, FileSearch, Wrench, Rocket, Cable } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialProof from "@/components/home/SocialProof";
import CaseStudyGrid from "@/components/services/CaseStudyGrid";
import PricingTiers from "@/components/services/PricingTiers";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import PlatformKillerChart from "@/components/services/PlatformKillerChart";
import { Eye } from "lucide-react";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

const comparisonData = [
  { feature: "Page Load Speed", ghl: "3.4-5.2 seconds (funnel pages)", custom: "Under 1 second", icon: Gauge },
  { feature: "Code Ownership", ghl: "You own nothing (SaaS lock-in)", custom: "100% yours forever", icon: Lock },
  { feature: "Google PageSpeed Score", ghl: "30-55 average (mobile)", custom: "90-95/100 guaranteed", icon: TrendingUp },
  { feature: "Monthly Cost", ghl: "$97-497/mo subscription", custom: "$0 to start. Pay only when you scale massively", icon: DollarSign },
  { feature: "Design Freedom", ghl: "Template-based funnel builder", custom: "Unlimited, pixel-perfect designs", icon: Palette },
  { feature: "SEO Capability", ghl: "Minimal, funnels don't rank", custom: "Full SEO that Google, ChatGPT and AI search love", icon: TrendingUp },
];

const faqs = [
  {
    q: "Will my GHL automations break during migration?",
    a: "No. We build the new site in parallel while your GHL funnels stay live. When we launch, all forms and triggers connect to your existing GHL pipelines through the API. Everything keeps working."
  },
  {
    q: "Do I need to cancel GHL?",
    a: "Not if you don't want to. Option A keeps GHL for CRM while upgrading your website. Option B replaces GHL entirely with a custom CRM. Most clients choose Option A because GHL's automation engine is solid."
  },
  {
    q: "How much does a custom site with GHL integration cost?",
    a: "Three tiers. Foot-in-the-Door starts at $500 (simple funnel or 5 to 10 page landing site, founder's offer with public case study exchange). Growth starts at $3,000 (15 to 40 page marketing site with full GHL API integration). Scale starts at $8,000 (agency white-label, member portals, complex Workflows). Your GHL CRM, automations, snapshots, and sub-accounts stay fully intact."
  },
  {
    q: "Can you build custom landing pages that work with GHL?",
    a: "Yes. We build custom landing pages that load in under 1 second and push leads directly into your GHL CRM via API. Higher Quality Scores on Google Ads = lower cost per lead."
  },
  {
    q: "What if I want to leave GHL later?",
    a: "If you chose Option A, your custom website already works independently. We can replace the GHL API connections with a custom backend whenever you're ready. No vendor lock-in, no rebuilding from scratch."
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
            <Zap className="w-4 h-4" /> GoHighLevel Website Fix
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-4 leading-tight"
          >
            Keep GHL. Upgrade <br />
            <span className="font-serif italic text-cognac">
              Your Website.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            data-speakable="true"
            className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            I&apos;m Hassan. I rebuilt a chiropractor&apos;s GHL frontend from 23 to 98 PageSpeed while every Workflow, Pipeline, and sub-account kept firing. Lead volume up 41 percent in six weeks. Book the call, share your GHL URL, I&apos;ll run your audit live.
          </motion.p>

          <div className="mb-8 inline-flex flex-wrap items-center gap-3 justify-center px-5 py-3 rounded-full bg-white border border-stone-200 text-sm">
            <span className="font-bold text-charcoal">Chiropractor client:</span>
            <span className="text-stone-600">23 to 98 PageSpeed</span>
            <span className="text-stone-300">|</span>
            <span className="text-green-700 font-bold">+41% leads in 30 days</span>
            <span className="text-stone-300">|</span>
            <span className="text-stone-500">GHL CRM untouched</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#how-it-works" className="px-8 py-4 bg-white border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all flex items-center justify-center gap-2">
              See How It Works <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="text-sm text-stone-500 mt-4 text-center max-w-xl mx-auto leading-relaxed">30-min call. Drop your GHL site URL when you book. We run your PageSpeed live and <span className="text-charcoal font-medium">show you the custom integration path with a fixed quote.</span></p>
        </div>
      </section>

      {/* 2. PLATFORM KILLER CHART — GoHighLevel comparison */}
      <PlatformKillerChart
        badge="What Your GHL Consultant Won't Tell You"
        headline="You're paying $297/mo for a"
        headlineAccent="slow site."
        description="You're paying $297/mo because GHL's CRM and automations are genuinely useful. But the site it ships with scores 20 to 45 on mobile PageSpeed. You're paying $2,000/mo in Meta ads to send traffic to a page Google won't rank and users won't wait for. You're paying a designer to work around GHL's page builder limits."
        descriptionSecondary="Nobody tells you this because GHL's Partner Program pays commissions on every account. Not GHL. Not the GHL consultants. Not the course sellers teaching you to stay inside it. We keep your CRM. We replace the frontend. No pitch. Just receipts."
        comparisonTitle="GHL Site vs Custom"
        themLabel="GHL Site"
        metrics={[
          { metric: "PageSpeed",     themLabel: "20-45",     usLabel: "95+",         themPct: 35, usPct: 98, icon: Gauge },
          { metric: "Load Speed",    themLabel: "3-6s",      usLabel: "< 1s",        themPct: 30, usPct: 98, icon: Gauge },
          { metric: "SEO Control",   themLabel: "Limited",   usLabel: "Full",        themPct: 30, usPct: 100, icon: FileSearch },
          { metric: "GHL CRM",       themLabel: "Stays",     usLabel: "Stays",       themPct: 100, usPct: 100, icon: Users },
          { metric: "Custom Design", themLabel: "Templates", usLabel: "Fully Custom",themPct: 35, usPct: 100, icon: Palette },
          { metric: "AI Search",     themLabel: "Invisible", usLabel: "Optimized",   themPct: 15, usPct: 98, icon: Eye },
        ]}
        savingsLines={[
          { label: "GHL Agency plan (stays)",             amount: "(kept)" },
          { label: "Ad spend wasted on slow landing",     amount: "$6,000" },
          { label: "Lost leads (slow page drop-offs)",    amount: "$9,600" },
          { label: "SEO rankings never earned",           amount: "$4,800" },
          { label: "Developer hacks to speed up GHL",     amount: "$1,200" },
          { label: "Brand design compromises",            amount: "$2,400" },
        ]}
        totalPerYear="$24,000"
      />

      {/* 2a. GHL IS GREAT FOR CRM */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 text-center">GHL Is Great for CRM. Not for Websites.</h2>
          <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">GoHighLevel excels at automations, pipelines, and client management. But when it comes to your actual website and landing pages, here&apos;s the reality:</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What GHL does well */}
            <div className="p-6 rounded-2xl bg-green-50 border border-green-200">
              <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Where GHL Shines</h3>
              <ul className="space-y-3">
                {["CRM & pipeline management", "Email & SMS automations", "Appointment booking", "Reputation management", "Client communication"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Where GHL falls short */}
            <div className="p-6 rounded-2xl bg-red-50 border border-red-200">
              <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2"><XCircle className="w-5 h-5" /> Where GHL Falls Short</h3>
              <ul className="space-y-3">
                {["Funnel pages load in 3-5 seconds", "Templates look generic and cheap", "Zero organic SEO capability", "No custom design flexibility", "Mobile experience is poor"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <XCircle className="w-4 h-4 text-red-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2a. CASE STUDY GRID — real migrations with integrations preserved */}
      <CaseStudyGrid
        highlight="myCustomPatches"
        label="Real Custom Builds"
        heading="Custom frontend, CRM intact, done"
        subheading="Four sites where we built fast custom frontends while keeping the business systems clients rely on."
      />

      {/* 2b. SOCIAL PROOF — moved up for concentrated proof flow */}
      <SocialProof />

      {/* 3. HOW IT WORKS - Process Timeline */}
      <section id="how-it-works" className="py-12 md:py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">How GoHighLevel Custom Website Integration Works</h2>
          <p className="text-slate-500 text-center mb-8 md:mb-16 max-w-2xl mx-auto">A proven 4-step process. Your GHL stays running the entire time.</p>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 -z-10" />
            {[
              { step: "01", title: "GHL Audit", desc: "We map your Funnels, Workflows, Pipelines, Opportunities, sub-accounts, Locations, snapshots, and custom values. Inbound webhooks route leads into the correct sub-account. Agency white-label and SaaS mode resale remain intact.", duration: "Week 1" },
              { step: "02", title: "API Architecture", desc: "We design the integration between your custom website and GHL's API. Forms, lead capture, booking widgets, and pipeline triggers, all connected seamlessly.", duration: "Week 2" },
              { step: "03", title: "Custom Site Build", desc: "Your new website is built in Next.js with GHL API baked in. Landing pages load instantly. Forms push directly into your GHL CRM. All automations keep firing.", duration: "Weeks 3-5" },
              { step: "04", title: "Testing & Launch", desc: "We test every automation, form, and pipeline trigger. You verify everything works. Then we launch with zero disruption to your existing GHL workflows.", duration: "Week 6" },
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" /> Revenue Leak
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Hidden Cost of GHL Funnels</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              You&apos;re paying for ads to drive traffic to your GHL funnel pages. But those pages are killing your conversions:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, pain: "Slow Funnel Pages Are Burning Your Ad Budget", detail: "Google Ads Quality Score is tied directly to landing page speed. GHL pages load in 3-5 seconds. Slow pages mean lower scores and higher CPC. You're paying 30-50% more per lead than competitors with faster pages." },
              { icon: XCircle, pain: "GHL Funnels Will Never Appear in Google Search", detail: "GHL funnel pages are JavaScript-rendered and effectively uncrawlable by Google. You'll never get organic traffic to a funnel URL. Every lead requires paid ad spend, forever, with no compounding returns." },
              { icon: DollarSign, pain: "You're Paying CRM Prices for a Website Builder", detail: "GHL's $297-497/month is priced for agencies running full automation suites. Using it primarily for funnel pages and a website means you're dramatically overpaying for the web presence portion of that subscription." },
              { icon: Palette, pain: "Template Funnels Signal 'Small Operation' to Cold Traffic", detail: "Experienced buyers recognize GHL and ClickFunnels templates on sight. A template funnel signals 'this person just learned marketing.' A custom site signals 'established business.' First impressions decide if cold traffic converts." },
              { icon: Lock, pain: "One Platform Failure Takes Down Your Entire Business", detail: "GHL has had outages. When it goes down, your lead capture, booking system, and website all go down together. Your entire online presence runs on one company's uptime. Custom code plus GHL API splits that risk completely." },
              { icon: BarChart3, pain: "Your Brand Disappears in a Sea of Identical Funnels", detail: "In any niche, dozens of competitors use the same GHL templates. Prospects visit multiple sites before deciding. When every site looks the same, decisions default to price. A custom site gives you a genuine visual advantage." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-red-500/20 text-red-400 w-fit mb-4">
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
      <section id="comparison" className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">GHL Funnels vs Custom Coded</h2>
          <p className="text-stone-600 text-center mb-12">Keep GHL for CRM. Upgrade your website and funnels.</p>

          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <div className="min-w-[500px]">
            <div className="grid grid-cols-3 bg-stone-50 p-4 border-b border-stone-200">
              <div className="text-stone-600 font-medium text-sm">Feature</div>
              <div className="text-cognac font-bold text-sm text-center">GHL Funnels</div>
              <div className="text-cognac font-bold text-sm text-center">Custom Coded</div>
            </div>

            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 items-center ${i % 2 === 0 ? 'bg-stone-50/50' : ''} border-b border-stone-200 last:border-b-0`}>
                <div className="flex items-center gap-2 text-charcoal text-sm font-medium">
                  <row.icon className="w-4 h-4 text-stone-400 shrink-0" />
                  {row.feature}
                </div>
                <div className="text-red-600 text-sm text-center">{row.ghl}</div>
                <div className="text-green-600 text-sm text-center font-medium">{row.custom}</div>
              </div>
            ))}
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-8 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <p className="text-sm text-stone-600 text-center">
              <strong>Note:</strong> We&apos;re not saying drop GHL. Keep it for CRM, automations, and pipelines. Just don&apos;t use it as your website builder. Your website is your business&apos;s front door, and it deserves custom code. We integrate seamlessly with GHL&apos;s API. And if you ever want to replace GHL entirely? We custom-code your CRM and automations too: build once, own forever, no monthly fees.
            </p>
          </div>
        </div>
      </section>

      {/* 6. SOLUTION CARDS */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-cognac/20 text-sm text-cognac mb-6">
            <Code2 className="w-4 h-4" /> Best of Both Worlds
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Two Ways to Win with GHL + Custom Code
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            Keep your GHL automations and pipelines running. We either build a custom website that plugs into your existing GHL setup via API, or we build you an entirely custom CRM + website that connects to your automations. Either way, <span className="text-charcoal font-medium">you own the code</span>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Gauge, title: "Instant Landing Pages", desc: "Your ad traffic lands on pages that load in under 1 second. Higher Quality Score = lower CPC = more leads for the same budget." },
              { icon: Users, title: "Seamless GHL API Integration", desc: "Forms, bookings, and lead capture flow directly into your GHL CRM. All your existing automations and pipelines keep working. Zero disruption." },
              { icon: BarChart3, title: "Organic Traffic (Free Leads)", desc: "Custom sites rank on Google. For the first time, you'll get leads WITHOUT paying for ads. GHL funnels can't do this." },
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

      {/* PRICING TIERS — GoHighLevel site overlay pricing */}
      <PricingTiers
        heading="Agencies charge $8K to $25K."
        headingAccent="We meet you halfway."
        agencyComparison={{
          agencyPrice: "$8K to $25K+",
          agencyNote: "6-10 week timeline. Hourly billing. Your $297/mo GHL fee continues forever.",
          ourPrice: "From $500",
          ourNote: "2-3 week timeline. Fixed price. Keep your GHL CRM intact. Own the frontend.",
        }}
        tiers={[
          {
            tier: "Foot in the Door",
            price: "Starting from $500",
            timeline: "1 week",
            fit: "Simple funnel or landing page site. 5-10 pages. Our founder's offer.",
            includes: [
              "Custom Next.js site with your design",
              "GHL form + webhook integration",
              "Sanity CMS for content editing",
              "90+ PageSpeed guaranteed",
              "Your GHL automations stay intact",
              "Case study in exchange for public review",
            ],
            cta: "Claim Founder Rate",
          },
          {
            tier: "Growth",
            price: "Starting from $3,000",
            timeline: "2-3 weeks",
            fit: "Multi-page marketing site. 15-40 pages. Blog, forms, GHL integrations.",
            includes: [
              "Everything in Foot in the Door",
              "Full GHL API + webhook integration",
              "Custom lead capture flows",
              "Full SEO with schema markup",
              "Analytics (GA4, Clarity, GHL tracking)",
              "60-day post-launch support",
            ],
            featured: true,
          },
          {
            tier: "Scale",
            price: "Starting from $8,000",
            timeline: "3-5 weeks",
            fit: "Agency white-label sites, membership portals, complex GHL integrations.",
            includes: [
              "Everything in Growth",
              "Multi-site / agency white-label",
              "Custom member portal with GHL auth",
              "Calendar integration (GHL or Cal.com)",
              "Multi-step funnel with GHL triggers",
              "90-day post-launch support",
            ],
          },
        ]}
        footnote="Every build keeps your GHL CRM, automations, and integrations fully intact. We replace only the slow frontend."
      />

      {/* 7. TRIPLE CTA */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8 md:mb-12">Two Paths. Both Fast. Both Yours.</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Custom Site + GHL API */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-charcoal/20 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-stone-100 text-cognac text-xs font-bold rounded-full">Popular</div>
              <div className="text-cognac text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Custom Site + GHL CRM</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Keep your GHL CRM and automations. We build a custom coded website that integrates with GHL&apos;s API. You own the code.
              </p>
              <ul className="space-y-3 mb-8">
                {["Under a second landing pages", "Full GHL API integration", "All automations keep working", "Organic SEO (free leads)", "100% code ownership", "30-day money-back guarantee"].map((item, i) => (
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
                Get Custom + GHL Quote
              </button>
            </div>

            {/* Full Custom CRM + Website */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-cognac/30 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold rounded-full">Full Freedom</div>
              <div className="text-stone-600 text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-xl font-bold text-charcoal mb-4">Custom CRM + Website</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Want to own everything? We build a custom CRM and website connected to your automations. No monthly platform fees. You own the code.
              </p>
              <ul className="space-y-3 mb-8">
                {["Custom CRM dashboard", "Website + CRM in one codebase", "Connect existing automations", "No SaaS subscription fees", "100% code ownership", "Scale without limits"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all"
              >
                Build My Custom CRM
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-cognac" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Common Questions</h2>
          </div>
          <p className="text-stone-600 text-center mb-12">Everything you need to know about GHL integration.</p>

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
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/50 blur-[80px] pointer-events-none" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> 30-Day Money-Back Guarantee (from delivery)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">Your GHL Automations Keep Working. We Guarantee It.</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We seamlessly integrate with your existing GHL workflows. If anything breaks or the site doesn&apos;t outperform your current funnels, full refund. No questions.
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

      {/* Related Services — expanded to all platforms via reusable component */}
      <section className="py-8 px-6 bg-white border-t border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">Further reading</p>
          <ul className="space-y-2 text-stone-700">
            <li>&rarr; <Link href="/blog/gohighlevel-website-speed" className="text-charcoal hover:text-cognac underline underline-offset-2">Why GoHighLevel sites score 20 to 45 on PageSpeed (and the fix)</Link></li>
            <li>&rarr; <Link href="/blog/gohighlevel-migration" className="text-charcoal hover:text-cognac underline underline-offset-2">GoHighLevel migration: how to keep the CRM and kill the website</Link></li>
            <li>&rarr; <Link href="/blog/core-web-vitals-explained" className="text-charcoal hover:text-cognac underline underline-offset-2">Core Web Vitals explained for business owners</Link></li>
          </ul>
        </div>
      </section>

      <RelatedServicesGrid currentHref="/services/gohighlevel" />

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
                <p className="text-xs text-stone-500 mt-0.5">Lead Engineer. Builds custom Next.js frontends that connect to GoHighLevel via API, scoring 95 to 100 on PageSpeed while keeping every automation intact.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Link href="/about/imran" className="shrink-0">
                <Image src="/team/imran.png" alt="Imran" width={48} height={48} className="w-12 h-12 rounded-full border border-stone-200 object-cover" />
              </Link>
              <div>
                <Link href="/about/imran" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Imran</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Solutions Architect. Maps your existing GHL pipelines, automations, and CRM workflows to ensure zero disruption during the frontend rebuild.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
