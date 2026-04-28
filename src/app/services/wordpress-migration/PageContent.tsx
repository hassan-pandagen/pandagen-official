"use client";

import { motion } from "@/components/ui/motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Lock, Database, Server, FileSearch, Wrench, Rocket, HelpCircle, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialProof from "@/components/home/SocialProof";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import CaseStudyGrid from "@/components/services/CaseStudyGrid";
import PricingTiers from "@/components/services/PricingTiers";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import PlatformKillerChart from "@/components/services/PlatformKillerChart";
import { Gauge, Shield, RefreshCcw, Eye } from "lucide-react";

const faqs = [
  {
    q: "Will I lose my Google rankings during migration?",
    a: "No. We map every single URL from your old WordPress site to your new site with 301 redirects. Google treats it as the same page at a new address. Most clients see rankings recover within 2-4 weeks and improve within 60 days because the new site is faster."
  },
  {
    q: "How long does a WordPress migration take?",
    a: "Three weeks for most sites. Days 1-3: full audit and architecture. Days 4-14: custom Next.js build with AI-paired development using Claude and Cursor. Days 15-18: testing, content migration, URL mapping. Days 19-21: launch with zero downtime. Agencies still quote 8-12 weeks because they bill hourly. AI tooling collapses that timeline without cutting corners."
  },
  {
    q: "What happens to my blog posts and content?",
    a: "Everything migrates. Blog posts, pages, images, metadata, categories. We extract it all from your WordPress database and move it to a modern content editor where you can still edit content without touching code."
  },
  {
    q: "How much does a WordPress to Next.js migration cost?",
    a: "Typical agencies charge $15,000 to $40,000 and take 8-12 weeks. We meet you halfway. Three tiers: Founder&apos;s Offer starts at $500 (simple sites, founder's offer with public case study exchange). Growth starts at $3,500 (15-50 pages, custom features). Scale starts at $12,000 (complex sites, WooCommerce, integrations). Most clients recover the investment within 3 to 6 months through eliminated hosting, plugin licenses, and maintenance fees."
  },
  {
    q: "Can I still edit my website after migration?",
    a: "Yes. We set up a content editor with a user-friendly dashboard. You can edit text, images, blog posts, and pages without any coding knowledge. It's simpler than WordPress: no plugins to update, no themes to manage."
  },
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-8">
            <Zap className="w-4 h-4" /> WordPress Migration Service
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight md:tracking-tighter mb-4 leading-[1.08] md:leading-tight break-words"
          >
            Your WordPress site is 3x slower than your competitor. <br />
            <span className="font-serif italic text-cognac">
              We rebuild it on Next.js in 3 weeks.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            We don&apos;t just &apos;redesign&apos; your site. We surgically extract your data from WordPress and rebuild your frontend with custom code. <span className="text-charcoal font-medium">Zero plugins. Instant load times.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-xs text-sm">
              <span className="text-cognac font-black">98/100</span>
              <span className="text-stone-500">PageSpeed</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-xs text-sm">
              <span className="text-cognac font-black">4.2s → 0.8s</span>
              <span className="text-stone-500">Load Time</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-xs text-sm">
              <span className="text-yellow-500 font-black">★★★★★</span>
              <span className="text-stone-500">Clutch Verified</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-xs text-sm">
              <span className="text-[#00b67a] font-black">★★★★★</span>
              <span className="text-stone-500">Trustpilot</span>
            </div>
          </motion.div>

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
          <p className="text-sm text-stone-500 mt-4 text-center max-w-xl mx-auto leading-relaxed">30-min call. Drop your WordPress URL when you book. We run your PageSpeed live and give you a <span className="text-charcoal font-medium">fixed migration quote on the spot.</span></p>
        </div>
      </section>

      {/* 2. PLATFORM KILLER CHART — modernized WordPress comparison */}
      <div className="-mt-4">
        <PlatformKillerChart
          badge="What Your WordPress Dev Won't Tell You"
          headline="You're paying $200/mo to"
          headlineAccent="keep a broken thing alive."
          description="You're paying $100/mo for premium hosting. There's $0/mo Vercel hosting that's faster. You're paying $80/mo for plugin licenses that keep breaking. A custom build has zero plugins. You're paying $200/mo for a dev retainer because WordPress updates keep breaking your site. Custom Next.js doesn't need a retainer."
          descriptionSecondary="Nobody tells you this because WordPress is a $1B industry built on patches and retainers. Not the hosts. Not the plugin companies. Not the agencies who bill to fix the breaks. We're the agency that replaces it honestly. No pitch. Just receipts."
          comparisonTitle="WordPress vs Custom"
          themLabel="WordPress"
          metrics={[
            { metric: "Load Speed",   themLabel: "2-5s",         usLabel: "< 1s",         themPct: 30, usPct: 98, icon: Gauge },
            { metric: "Monthly Cost", themLabel: "$150+",        usLabel: "$0",           themPct: 95, usPct: 2,  icon: DollarSign },
            { metric: "Security",     themLabel: "Vulnerable",   usLabel: "Bank Level",   themPct: 40, usPct: 100, icon: Shield },
            { metric: "Maintenance",  themLabel: "Daily",        usLabel: "Zero",         themPct: 90, usPct: 5,  icon: RefreshCcw },
            { metric: "Ownership",    themLabel: "Rented",       usLabel: "100% Yours",   themPct: 30, usPct: 100, icon: Lock },
            { metric: "AI Search",    themLabel: "Invisible",    usLabel: "Optimized",    themPct: 15, usPct: 98, icon: Eye },
          ]}
          savingsLines={[
            { label: "Premium hosting (WP Engine etc.)", amount: "$1,200" },
            { label: "Plugin licenses & renewals",       amount: "$960" },
            { label: "Security & backup tools",          amount: "$600" },
            { label: "Monthly maintenance retainer",     amount: "$2,400" },
            { label: "Dev fixes & downtime incidents",   amount: "$2,400" },
            { label: "Lost conversions (slow speed)",    amount: "$5,040" },
          ]}
          totalPerYear="$12,600"
        />
      </div>

      {/* 3. BEFORE / AFTER RESULTS */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">Real Results. Not Promises.</h2>
          <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">Here&apos;s what happens when you migrate from WordPress to custom code.</p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { label: "PageSpeed Mobile", before: "34", after: "98", suffix: "/100", color: "#b87a3d" },
              { label: "Load Time", before: "4.2s", after: "0.8s", suffix: "", color: "#16a34a" },
              { label: "Monthly Cost", before: "$350", after: "$0", suffix: "/mo", color: "#2563eb" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="h-1 w-full" style={{ backgroundColor: stat.color }} />
                <div className="p-6 text-center">
                  <p className="text-[11px] text-stone-400 uppercase tracking-widest font-bold mb-3">{stat.label}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-black" style={{ color: stat.color }}>{stat.after}</span>
                    {stat.suffix && <span className="text-sm font-medium text-stone-400">{stat.suffix}</span>}
                  </div>
                  <p className="text-xs text-stone-400 mt-2">was <span className="line-through">{stat.before}</span></p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-stone-600 font-medium mt-6">Based on average results across WordPress to Next.js migrations</p>
        </div>
      </section>

      {/* 3a. CASE STUDY GRID — real WordPress migrations */}
      <CaseStudyGrid
        highlight="myCustomPatches"
        label="Real WordPress Migrations"
        heading="WordPress to Next.js, done"
        subheading="Four sites we built or migrated. Live URLs, verifiable PageSpeed scores, honest before/after numbers."
      />

      {/* 3b. SOCIAL PROOF — moved up to stack with Results for concentrated proof flow */}
      <SocialProof />

      {/* 4. HOW IT WORKS - Horizontal Grid (process clarity first for buyers) */}
      <section id="how-it-works" className="py-12 md:py-20 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How Our WordPress to Next.js Migration Works</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">A proven 4-step process. No surprises. No downtime.</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Full Site Audit", desc: "We analyze your WordPress site top to bottom: speed, security, plugins, SEO, and database health. You get a detailed report showing exactly what's costing you money.", icon: FileSearch, duration: "Week 1" },
              { step: "02", title: "Data Export & Cleaning", desc: "We extract every page, post, image, and metadata from your WordPress database, then clean it. Plugin bloat removed. Broken links fixed. Images optimized.", icon: Database, duration: "Week 2" },
              { step: "03", title: "Custom Website Build", desc: "Your new site is built in Next.js with SSR, automatic image optimization, and a content editor. Every page loads in under 1 second.", icon: Wrench, duration: "Weeks 3 to 5" },
              { step: "04", title: "Migration & Launch", desc: "Every old URL maps to the new site with 301 redirects. Zero rankings lost. Zero downtime. We launch, monitor, and hand you the keys.", icon: Rocket, duration: "Week 6" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-stone-200 transition-all group"
              >
                <span className="text-5xl font-black text-stone-300 block mb-4 leading-none group-hover:text-stone-200 transition-colors">{item.step}</span>
                <div className="w-10 h-10 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-4 group-hover:bg-stone-100 transition-colors">
                  <item.icon className="w-5 h-5 text-cognac" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-bold text-charcoal">{item.title}</h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">{item.desc}</p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cognac bg-stone-50 border border-stone-100 px-2.5 py-1 rounded-full">{item.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PAIN POINTS - Reinforcement after process (buyer already knows WP is bad) */}
      <section className="py-12 md:py-20 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-5xl">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" />
              The Hard Truth
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The WordPress Reality Check
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              These are the invisible problems draining your bank account every single week.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, title: "Your Ad Spend Is Being Wasted", detail: "Google penalizes slow landing pages with lower Quality Scores. You pay 30 to 50% more per click than a competitor with a faster site, and those visitors convert at half the rate. Every slow load is direct revenue loss." },
              { icon: XCircle, title: "One Update Crashes Your Revenue", detail: "WordPress sites run 20-30 plugins on average. A single bad update can take your site offline during a campaign launch, a sale, or Black Friday. Every minute of downtime is orders you'll never recover." },
              { icon: AlertTriangle, title: "AI Search Sends Buyers to Competitors", detail: "ChatGPT, Perplexity, and Google's AI Overviews now answer 'which brand should I buy' directly. They only cite fast, clean-coded sites. WordPress page builder bloat makes you invisible to AI-driven traffic." },
              { icon: Lock, title: "A Single Hack Can End Your Business", detail: "WordPress is the #1 target for automated attacks. A breach means days offline, legal liability, potential GDPR fines, and customers who never return. A custom static site has no database at all. Nothing to inject." },
              { icon: TrendingUp, title: "You're Bleeding $3,600 to $9,600/Year", detail: "Managed hosting, security plugins, premium theme licenses, maintenance retainers. It adds up silently. That's real margin leaving your business every single month with nothing to show for it." },
              { icon: Code2, title: "Trapped: Can't Scale, Can't Sell", detail: "Your content lives inside a theme. Your traffic depends on plugins. Try to move platforms and you lose rankings, content, and data. Investors and acquirers discount WordPress-dependent businesses heavily." },
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

      {/* 6. THE UPGRADE PATH */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-6">
            <Code2 className="w-4 h-4" /> The Smarter Investment
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            What If Your Website Was an Asset, Not a Liability?
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            A custom coded website loads in under 1 second, can&apos;t be hacked, costs $0 to start hosting, and you own every line of code. No plugins. No monthly fees. No surprises.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Database, title: "Clean Data Migration", desc: "We clean your WordPress database, remove bloat, and migrate to a modern backend. Zero data loss guaranteed." },
              { icon: Server, title: "Static Edge Rendering", desc: "Your site is pre-built as static HTML. It loads instantly worldwide and cannot be hacked. No server to attack." },
              { icon: Lock, title: "SEO Preservation", desc: "We map every single old URL to the new site. You won't lose a single ounce of Google rankings or traffic." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-stone-200 shadow-card hover:border-cognac/30 transition-colors group">
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

      {/* PLUGIN EXTINCTION LIST — WordPress-specific brand move */}
      <section className="py-10 md:py-14 px-6 bg-white border-y border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-3">Plugin Extinction List</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">The 7 WordPress Plugins We Replace With Zero Code</h2>
            <p className="text-stone-600 text-base max-w-2xl mx-auto">Every WordPress site we migrate drops this plugin bill permanently. Next.js native replacements cost $0/year and load faster.</p>
          </div>

          <div className="responsive-stack-wrap md:overflow-visible">
            <table className="responsive-stack-table w-full text-sm border border-stone-300 rounded-xl overflow-hidden md:min-w-[560px]">
              <thead>
                <tr className="bg-stone-50">
                  <th className="text-left p-3 font-semibold text-stone-700">WordPress Plugin</th>
                  <th className="text-left p-3 font-semibold text-stone-700">Replaced By</th>
                  <th className="text-right p-3 font-semibold text-cognac">Yearly Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  ["Yoast Premium / RankMath PRO", "Next.js native metadata API", "$99 to $199"],
                  ["WP Rocket / LiteSpeed Cache / W3 Total Cache", "Static generation + Vercel Edge", "$59 to $180"],
                  ["Advanced Custom Fields (ACF) Pro", "Sanity schema + TypeScript types", "$249"],
                  ["Elementor Pro / Divi Builder", "Custom React components", "$59 to $199"],
                  ["Gravity Forms / WPForms", "API routes + Resend", "$259"],
                  ["WooCommerce Subscriptions", "Stripe Billing (native)", "$199"],
                  ["WPML / TranslatePress", "next-intl + Sanity i18n", "$99 to $199"],
                ].map(([plugin, replacement, savings]) => (
                  <tr key={plugin} className="border border-stone-100 hover:bg-stone-50">
                    <td className="p-3 text-charcoal font-medium">{plugin}</td>
                    <td data-label="Replaced By" className="p-3 text-stone-600">{replacement}</td>
                    <td data-label="Savings" className="p-3 text-right text-cognac font-bold">{savings}/yr</td>
                  </tr>
                ))}
                <tr className="bg-cognac/5 border-t-2 border-cognac/20">
                  <td className="p-3 text-charcoal font-bold">Total annual plugin bill eliminated</td>
                  <td data-label="" className="p-3 text-stone-500 text-xs italic">replaced with native code you own</td>
                  <td data-label="Total" className="p-3 text-right text-cognac font-black">$1,023 to $1,483/yr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRICING TIERS — foot-in-the-door with agency comparison */}
      <PricingTiers
        heading="Agencies charge $15K to $40K."
        headingAccent="We meet you halfway."
        agencyComparison={{
          agencyPrice: "$15K to $40K+",
          agencyNote: "8-12 week timeline. Hourly billing. Plugin bloat carries over.",
          ourPrice: "From $500",
          ourNote: "3 week timeline. Fixed price. You own 100% of the code.",
        }}
        tiers={[
          {
            tier: "Founder&apos;s Offer",
            price: "Starting from $500",
            timeline: "1 week",
            fit: "Simple WordPress site. Brochure, small blog. Our founder's offer.",
            includes: [
              "Full WordPress content export + cleanup",
              "Custom Next.js build up to 15 pages",
              "Sanity CMS so your team can edit",
              "90+ PageSpeed guaranteed",
              "301 redirect mapping (no SEO loss)",
              "Case study in exchange for public review",
            ],
            cta: "Claim Founder Rate",
          },
          {
            tier: "Growth",
            price: "Starting from $3,500",
            timeline: "2-3 weeks",
            fit: "Business WordPress site. 15-50 pages. Blog, forms, integrations.",
            includes: [
              "Everything in Founder&apos;s Offer",
              "Custom post types and taxonomies",
              "Forms with custom API routes",
              "Full SEO migration with schema",
              "Analytics setup (GA4, Clarity)",
              "60-day post-launch support",
            ],
            featured: true,
          },
          {
            tier: "Scale",
            price: "Starting from $12,000",
            timeline: "3-5 weeks",
            fit: "Complex WordPress or WooCommerce. 50+ pages, custom plugins, integrations.",
            includes: [
              "Everything in Growth",
              "WooCommerce → custom ecommerce",
              "Complex plugin replacements",
              "Custom admin dashboard",
              "Multi-author / multi-site support",
              "90-day post-launch support",
            ],
          },
        ]}
      />

      {/* 7. DUAL CTA */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8 md:mb-12">Choose What&apos;s Right for Your Business</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-card hover:border-orange-300 transition-colors">
              <div className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">WordPress Optimization</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Not ready to migrate yet? We&apos;ll optimize your current WordPress site to get the most performance possible within the platform&apos;s limitations.
              </p>
              <ul className="space-y-3 mb-8">
                {["Speed optimization (caching, images)", "Security hardening", "Plugin audit & cleanup", "SEO improvements", "30-day support"].map((item, i) => (
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
                Optimize My WordPress
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-stone-50/50 border border-cognac/20 hover:border-cognac/40 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-charcoal/10 text-cognac text-xs font-bold rounded-full">Recommended</div>
              <div className="text-cognac text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Full Migration to Custom Code</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Complete migration from WordPress to a custom coded platform you own forever. Faster, more secure, and cheaper to maintain long-term.
              </p>
              <ul className="space-y-3 mb-8">
                {["Under a second load times", "90-95/100 PageSpeed score", "Zero monthly plugin fees", "Enterprise level security", "You own 100% of the code", "30-day money-back guarantee"].map((item, i) => (
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
                Migrate to Custom Code
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-cognac" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Common Questions</h2>
          </div>
          <p className="text-stone-600 text-center mb-12">Everything you need to know before migrating.</p>

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
                  className="w-full text-left p-5 rounded-xl bg-white border border-stone-200 hover:border-gray-300 transition-all"
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

      {/* 9. GUARANTEE — unified 90+ PageSpeed promise */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl bg-green-50 border border-green-200 rounded-[3rem] p-10 md:p-14 relative overflow-hidden">
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-[0.22em] mb-6">
              <ShieldCheck className="w-4 h-4" /> Risk Reversal Guarantee
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight leading-tight">
              90+ PageSpeed <span className="font-serif italic text-cognac">or full refund.</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Every PandaCodeGen migration ships at 90+ on Google PageSpeed. If your new site doesn&apos;t hit that score on launch day, we refund 100% of your payment. Guaranteed, in writing.
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

      {/* From the Blog - Internal Linking */}
      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-charcoal text-center mb-3">From the Blog</h2>
          <p className="text-stone-400 text-center mb-10 text-sm">Deep dives on WordPress, migration, and performance.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/blog/how-to-migrate-wordpress-to-nextjs", title: "How to Migrate WordPress to Next.js", desc: "Step-by-step migration guide with zero downtime." },
              { href: "/blog/wordpress-vs-nextjs", title: "WordPress vs Next.js", desc: "The honest comparison every site owner needs." },
              { href: "/blog/wordpress-plugins-destroy-speed", title: "How Plugins Destroy Your Speed", desc: "Why plugin bloat is costing you rankings." },
              { href: "/blog/wordpress-ai-security-risk-2026", title: "WordPress AI Security Risk 2026", desc: "New attack vectors targeting WordPress in 2026." },
              { href: "/blog/wordpress-killer", title: "The WordPress Killer", desc: "Why Next.js is replacing WordPress for good." },
              { href: "/blog/elementor-kills-seo", title: "Elementor Kills SEO", desc: "The hidden cost of page builders on Core Web Vitals." },
              { href: "/blog/wordpress-traffic-drop-speed", title: "WordPress Traffic Drop Fix", desc: "How site speed directly causes ranking drops." },
              { href: "/blog/how-to-fix-slow-wordpress", title: "How to Fix Slow WordPress", desc: "Practical fixes that actually move the needle." },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="group flex flex-col gap-2 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors leading-snug">{post.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed flex-1">{post.desc}</p>
                <span className="text-cognac text-xs font-semibold flex items-center gap-1 mt-1">Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services — expanded to all 8 platforms via reusable component */}
      <RelatedServicesGrid currentHref="/services/wordpress-migration" />

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
                <p className="text-xs text-stone-500 mt-0.5">Lead Engineer. 40+ WordPress to Next.js migrations. Every site scores 95 to 100 on Google PageSpeed. Specialises in zero-downtime launches and full SEO preservation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Link href="/about/imran" className="shrink-0">
                <Image src="/team/imran.png" alt="Imran" width={48} height={48} className="w-12 h-12 rounded-full border border-stone-200 object-cover" />
              </Link>
              <div>
                <Link href="/about/imran" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Imran</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Solutions Architect. 8+ years in enterprise architecture. Scopes every migration to protect your ROI, timeline, and existing SEO rankings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}