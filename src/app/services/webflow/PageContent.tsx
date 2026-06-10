"use client";

import { useState } from "react";
import { motion } from "@/components/ui/motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Gauge, Lock, Server, Database, Globe, FileSearch, Wrench, Rocket, HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialProof from "@/components/home/SocialProof";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import CaseStudyGrid from "@/components/services/CaseStudyGrid";
import PricingTiers from "@/components/services/PricingTiers";
import PartnerPromise from "@/components/services/PartnerPromise";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import PlatformKillerChart from "@/components/services/PlatformKillerChart";

const comparisonData = [
  { feature: "Page Load Speed", webflow: "2-4 seconds", custom: "Under 1 second", icon: Gauge },
  { feature: "Code Ownership", webflow: "Vendor lock-in (export is unusable)", custom: "100% yours forever", icon: Lock },
  { feature: "Google PageSpeed", webflow: "50-70 average (mobile)", custom: "90-100 guaranteed", icon: TrendingUp },
  { feature: "Monthly Hosting", webflow: "$14-212/mo", custom: "Starts at $0, scales to $20", icon: DollarSign },
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
    a: "Typical agencies charge $20,000 to $60,000 and take 10 to 16 weeks. We meet you halfway. Four tiers: Starter starts at $1,500 (5 to 7 pages, custom Next.js). Growth starts at $3,500 (business sites with custom interactions and CMS). Scale is $5,000 to $10,000 (complex builds, Webflow Ecommerce, localization, 30+ pages). Scale+ is $10,000+ for enterprise scope, custom-quoted after a scoping call. You also stop paying $39 to $235/month in Webflow fees forever.",
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
      <section className="relative pt-20 md:pt-28 pb-8 md:pb-12 px-6">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)", backgroundSize: "50px 50px", opacity: 0.03 }} />
        <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-stone-200/50 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-8">
            <Zap className="w-4 h-4" /> Webflow Migration Service
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight md:tracking-tighter mb-4 leading-[1.08] md:leading-tight break-words"
          >
            The Webflow Migration Service <br />
            <span className="font-serif italic text-cognac">
              That Looks Like Webflow. Loads Like Vercel.
            </span>
          </motion.h1>

          <p className="text-sm text-cognac font-bold mb-4">
            New receipt launching this week: Obare Magazine rebuilt in 7 days for $1,200.
          </p>

          <p className="text-xs text-red-600 font-semibold mb-4">
            Webflow was down 12+ hours on April 14-15, 2026. Read the incident below.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto"
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
            <Link href="#when-to-migrate" className="px-8 py-4 bg-white border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all flex items-center justify-center gap-2">
              When to Migrate <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="text-sm text-stone-500 mt-4 text-center max-w-xl mx-auto leading-relaxed">30-min call. Drop your Webflow URL when you book. We test the speed gap, scope the migration, and <span className="text-charcoal font-medium">quote you before we hang up.</span></p>
        </div>
      </section>

      {/* 2. PLATFORM KILLER CHART — Webflow comparison */}
      <PlatformKillerChart
        badge="What Your Webflow Agency Won't Tell You"
        headline="You're paying for a ceiling"
        headlineAccent="you can't break."
        description="You're paying $235/mo for Webflow's CMS Business plan because you hit the 10,000 item cap. Custom code has no cap. You're paying $2,820/yr for localization add-ons. Custom builds ship localization natively. You're paying a designer retainer because Webflow's editor can't handle your logic. Custom code has no editor limits."
        descriptionSecondary="Nobody tells you this because Webflow and its partner agencies both bill monthly. Webflow charges you. The agency charges to work around Webflow's limits. We're the ones who tell you when to graduate. No pitch. Just receipts."
        comparisonTitle="Webflow vs Custom"
        themLabel="Webflow"
        metrics={[
          { metric: "Load Speed",    themLabel: "2-4s",      usLabel: "< 1s",        themPct: 40, usPct: 98, icon: Gauge },
          { metric: "Monthly Cost",  themLabel: "$39-$235",  usLabel: "$22",         themPct: 85, usPct: 10, icon: DollarSign },
          { metric: "CMS Items",     themLabel: "10K cap",   usLabel: "Unlimited",   themPct: 50, usPct: 100, icon: Database },
          { metric: "Localization",  themLabel: "$2K/mo",    usLabel: "Built in",    themPct: 90, usPct: 5,  icon: Globe },
          { metric: "Ownership",     themLabel: "Hosted",    usLabel: "100% Yours",  themPct: 35, usPct: 100, icon: Lock },
          { metric: "AI Search",     themLabel: "Partial",   usLabel: "Optimized",   themPct: 45, usPct: 98, icon: FileSearch },
        ]}
        savingsLines={[
          { label: "Webflow CMS Plan (Business tier)",   amount: "$1,020" },
          { label: "Localization add-on",                 amount: "$2,820" },
          { label: "Workspace seats (team plan)",         amount: "$540" },
          { label: "3rd-party Webflow plugins / apps",    amount: "$720" },
          { label: "Developer retainer for custom code",  amount: "$3,600" },
          { label: "Lost conversions (CLS + speed)",      amount: "$4,800" },
        ]}
        totalPerYear="$13,500"
      />

      {/* 2a. CASE STUDY GRID — Obare featured (design-forward Webflow-competitor migration) */}
      <CaseStudyGrid
        highlight="obare"
        label="Real Design-First Migrations"
        heading="Webflow-quality design, done"
        subheading="Design matters. Here are four sites where we matched or exceeded Webflow's visual fidelity without the performance cap."
      />

      {/* 2b. SOCIAL PROOF — moved up for concentrated proof flow */}
      <SocialProof />

      {/* 2c. 3-PILLAR POSITIONING — emerging Next.js agency, fair-priced, customer-first */}
      <section className="py-12 md:py-16 px-6 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cognac/20 text-cognac rounded-full text-xs font-semibold mb-4">
            <Zap className="w-3 h-3" /> Emerging Next.js Agency
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cheaper than market, <span className="font-serif italic text-cognac">not cheap.</span>
          </h2>
          <p className="text-base text-stone-400 leading-relaxed mb-6">
            For Webflow migration specifically: Webflow had 15+ documented outages on <a href="https://status.webflow.com" target="_blank" rel="nofollow noopener noreferrer" className="text-cognac hover:underline">status.webflow.com</a> between February and May 2026. We rebuild your site on custom Next.js + Sanity hosted on Vercel with 99.99 percent uptime SLA. <Link href="/blog/webflow-true-cost" className="text-cognac hover:underline">See the full Webflow true cost breakdown</Link>.
          </p>
          <p className="text-lg text-stone-300 leading-relaxed mb-6">
            PandaCodeGen ships the same scope traditional agencies quote at $15,000 to $50,000 at fixed prices from $1,500 (Starter) to $10,000 (Scale). The lower price is structural, not a discount. Co-founder-led delivery, no account managers, no NYC office rent, AI-accelerated development, and global engineering economics (Austin LLC for billing, Karachi for engineering). Quality stays the same. The savings flow to clients.
          </p>
          <div className="my-8 p-5 bg-white/5 border-l-4 border-cognac rounded-r-xl">
            <p className="text-sm font-bold uppercase tracking-wider text-cognac mb-2">Customer-first, not profit-first</p>
            <p className="text-stone-300 leading-relaxed">
              Free audit at pandacodegen.com requires no email, no Calendly, no sales pitch. Drop your URL, receive a real PageSpeed and revenue-leak analysis in minutes. A separate free 30-minute consultation call with co-founder Hassan Jamal is available for deeper review of competing agency quotes. We will tell you honestly if a competing quote is fair, or if migration does not make sense for your situation.
            </p>
          </div>
          <div className="my-8 p-5 bg-cognac/10 border-l-4 border-cognac rounded-r-xl">
            <p className="text-sm font-bold uppercase tracking-wider text-cognac mb-2">Emerging quality challenger</p>
            <p className="text-stone-300 leading-relaxed">
              Launched February 2026. 5/5 ratings across Clutch, Trustpilot, Google, GoodFirms, and Sortlist within 90 days. 900+ public GitHub contributions in the past year at github.com/hassan-pandagen across live client projects. Real case studies: MyCustomPatches (PageSpeed 40 to 100, hosting $150 to $0) and Panda Patches ($38K monthly revenue on $25 monthly tooling). Younger than established competitors, already verified across more independent review platforms than most agencies achieve in 2 to 3 years.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-cognac mb-1">90+ PageSpeed</div>
              <p className="text-sm text-stone-400">Refund-backed in writing on every project.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-cognac mb-1">Fixed price</div>
              <p className="text-sm text-stone-400">No hourly billing. No surprise invoices. Published tiers.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-cognac mb-1">Free month</div>
              <p className="text-sm text-stone-400">30 days of post-launch tweaks included on every build.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHEN TO MIGRATE */}
      <section id="when-to-migrate" className="py-12 md:py-20 px-6 bg-[#0F172A]">
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

      {/* Webflow Uptime Warning (updated Apr 15, 2026) */}
      <section id="uptime" className="py-10 md:py-14 px-6 bg-red-50 border-y border-red-200">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-red-600 text-white rounded-full mb-4">Update Apr 15, 2026</div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">The Outage Cost Nobody Talks About</h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            On April 14-15, 2026, every hosted Webflow site went dark for over 12 hours. 5xx errors, Dashboard down, Forms broken, Public API offline. According to{" "}
            <a href="https://status.webflow.com/history" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">Webflow&apos;s official status page</a>, the incident was caused by an upstream provider and lasted for a full business day.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            For a business doing $2,000/day in online sales, that is $1,000 in lost revenue. For a lead-generation site, 10+ leads gone. For anyone running paid ads during the outage, every click sent visitors to a broken page. Webflow does not refund that.
          </p>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            This is not isolated. <a href="https://isdown.app/status/webflow" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">IsDown&apos;s third-party monitoring</a> shows Webflow had <strong>14 incidents in the last 90 days</strong> (4 major, 10 minor). March 2026 alone included a 5 hour 20 minute outage on March 2, a 3 hour 15 minute warning on March 16, and a 3 hour 30 minute warning on March 31. In July 2025, Webflow had a{" "}
            <a href="https://medium.com/@slimx/web-flow-outage-for-over-31-hours-a-lesson-many-business-owners-learnt-the-hardway-476ae9168a9a" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-2 hover:text-stone-600 transition-colors">31-hour outage</a> that was described on Hacker News as &ldquo;an entire work week lost for e-commerce stores.&rdquo;
          </p>
          <p className="text-stone-700 text-lg leading-relaxed">
            A custom Next.js site deployed on Vercel runs with 99.99% uptime from 300+ global edge locations. Pages are pre-built and served from cache. When you own the code, you own the uptime.
          </p>
        </div>
      </section>

      {/* 3.5. REAL BUYER VOICES — Reddit citations for trust signal */}
      <section id="real-voices" className="py-12 md:py-20 px-6 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-charcoal text-white rounded-full mb-4">Real Reddit Threads. Verifiable.</div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">What Webflow Agency Owners Are Actually Saying</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl">
            Not curated testimonials. Real Reddit threads from agency owners and Webflow Community MVPs. Click the links to verify every quote.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Quote 1: Agency owner pain */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                It just seems silly that Webflow makes it harder for us to make things easier for clients. Crazy how other builders like Wix make it simple to do this, yet Webflow does the opposite.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">Small agency owner</strong> · r/webflow · 19 upvotes</span>
                <a href="https://www.reddit.com/r/webflow/comments/1mdhvcx/why_does_webflow_make_hosting_so_expensive_and/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Quote 2: Cost shock */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                The new Workspace system is a mess for small client sites. Paying extra just to let them change a few lines of text feels way off, especially when some of them barely touch the site after launch.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">Quick_Custard5288</strong> · r/webflow agency owner</span>
                <a href="https://www.reddit.com/r/webflow/comments/1mdhvcx/why_does_webflow_make_hosting_so_expensive_and/n6872kw/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Quote 3: Inside Webflow's own community */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                Webflow&apos;s hosting came to about $159/mo on a 400GB/mo site... It doesn&apos;t really suit high traffic on a low budget.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">memetican</strong> · Webflow Community MVP (verified badge)</span>
                <a href="https://www.reddit.com/r/webflow/comments/1mdhvcx/why_does_webflow_make_hosting_so_expensive_and/n63wfd3/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Quote 4: Competitor warning */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                Webflow&apos;s amazing for design and dev, but their pricing model really doesn&apos;t work well for small agencies trying to offer simple, all-in-one support.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">Quick_Custard5288</strong> · r/webflow</span>
                <a href="https://www.reddit.com/r/webflow/comments/1mdhvcx/why_does_webflow_make_hosting_so_expensive_and/n6872kw/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>
          </div>

          {/* Bridging CTA */}
          <div className="mt-8 p-6 bg-charcoal text-white rounded-2xl text-center">
            <p className="text-lg font-bold mb-2">The agencies in this thread are stuck on Webflow because migrating feels expensive. It is not.</p>
            <p className="text-stone-400 text-sm mb-4 max-w-2xl mx-auto">
              We migrate Webflow agency client sites to custom Next.js for $1,500 to $15,000 with 90+ PageSpeed guaranteed or 100% refund. White-label for your agency. Your client never sees us.
            </p>
            <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all">
              See Migration Pricing →
            </a>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section id="comparison" className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">Webflow vs Custom Coded</h2>
          <p className="text-stone-600 text-center mb-12">See exactly what you&apos;re missing and what you could have.</p>

          <div className="rounded-2xl border border-stone-200 overflow-hidden bg-white">
            {/* Header — desktop only. On mobile, each row gets inline labels. */}
            <div className="hidden md:grid md:grid-cols-3 bg-stone-50 p-4 border-b border-stone-200">
              <div className="text-stone-600 font-medium text-sm">Feature</div>
              <div className="text-stone-500 font-bold text-sm text-center">Webflow</div>
              <div className="text-cognac font-bold text-sm text-center">Custom Coded</div>
            </div>

            {comparisonData.map((row, i) => (
              <div
                key={i}
                className={`p-4 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'} ${i < comparisonData.length - 1 ? 'border-b border-stone-200' : ''} md:grid md:grid-cols-3 md:items-center`}
              >
                <div className="flex items-center gap-2 text-charcoal text-sm font-bold mb-3 md:mb-0 md:font-medium">
                  <row.icon className="w-4 h-4 text-stone-400 shrink-0" />
                  {row.feature}
                </div>
                <div className="flex items-center justify-between gap-3 mb-2 md:mb-0 md:justify-center md:text-center">
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-stone-500">Webflow</span>
                  <span className="text-red-400/90 text-sm md:text-center">{row.webflow}</span>
                </div>
                <div className="flex items-center justify-between gap-3 md:justify-center md:text-center">
                  <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-cognac">Custom</span>
                  <span className="text-green-500 text-sm font-medium md:text-center">{row.custom}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE MIGRATE */}
      <section className="py-12 md:py-20 px-6 bg-white">
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
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-cognac/20 text-sm text-cognac mb-6">
            <Code2 className="w-4 h-4" /> What You Get
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Everything Webflow Does. And Everything It Can&apos;t.
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            A custom coded website gives you what Webflow never will: full ownership, server-side power, unlimited CMS, and hosting that starts free and only costs more when your business grows.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Gauge, title: "Everything Webflow Does, But Better", desc: "Same visual polish, but with server-side rendering, unlimited CMS, real API routes, and load times under 1 second. No compromises." },
              { icon: Server, title: "Server-Side Power", desc: "User authentication, payment processing, database queries, API integrations. Everything Webflow can\u2019t do natively. Built into your codebase." },
              { icon: DollarSign, title: "Start Free, Scale When You Grow", desc: "Deploy on Vercel starting at $0/mo. Only scale to $20/mo on Vercel Pro when your business grows. Own every line of code. No vendor lock-in. Scale to millions of pages without hitting CMS limits." },
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

      {/* PARTNER PROMISE — locked brand voice, 3 guarantees */}
      <PartnerPromise />

      {/* PRICING TIERS — foot-in-the-door with agency comparison */}
      <PricingTiers
        heading="Agencies charge $20K to $60K."
        headingAccent="We meet you halfway."
        agencyComparison={{
          agencyPrice: "$20K to $60K+",
          agencyNote: "10-16 week timeline. Hourly billing. Plus $235/mo Webflow fees forever.",
          ourPrice: "From $1,500",
          ourNote: "3 week timeline. Fixed price. You own the code. No platform fees.",
        }}
        tiers={[
          {
            tier: "Starter",
            price: "Starting from $1,500",
            timeline: "1 to 2 weeks",
            fit: "Simple Webflow site. 5-15 pages. Our Starter tier.",
            includes: [
              "Full Webflow content export + migration",
              "Custom Next.js build matching your design",
              "Sanity CMS for content editing",
              "90+ PageSpeed guaranteed",
              "301 redirect mapping",
              "Free month of post-launch tweaks",
            ],
            cta: "Get Starter Quote",
          },
          {
            tier: "Growth",
            price: "Starting from $3,500",
            timeline: "2-3 weeks",
            fit: "Business Webflow site. 15-50 pages. Custom interactions, CMS collections.",
            includes: [
              "Everything in Starter",
              "Custom Webflow interactions recreated in code",
              "Complex CMS collections migrated",
              "Full SEO migration with schema",
              "Analytics setup (GA4, Clarity)",
              "60-day post-launch support",
            ],
            featured: true,
          },
          {
            tier: "Scale",
            price: "$5,000 to $10,000",
            timeline: "3 to 5 weeks",
            fit: "Complex Webflow. 30+ pages, localization, ecommerce, custom logic.",
            includes: [
              "Everything in Growth",
              "Webflow Ecommerce to custom storefront",
              "Multi-language / localization",
              "Custom admin dashboard",
              "Performance monitoring",
              "90-day post-launch support",
            ],
          },
        ]}
      />

      {/* 7. DUAL CTA */}
      <section className="py-10 md:py-14 px-6">
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
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"optimize_my_webflow",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all">
                Optimize My Webflow
              </button>
            </div>

            {/* Migrate to Custom Code */}
            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200 hover:border-charcoal/20 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-stone-100 text-cognac text-xs font-bold rounded-full">Recommended</div>
              <div className="text-cognac text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Migrate to Custom Code</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Migrate from Webflow to a custom coded platform you own forever. Faster, full server-side logic, unlimited CMS. Vercel hosting starts free and only scales to $20/mo when your business grows.
              </p>
              <ul className="space-y-3 mb-8">
                {["Under a second load times", "Full server-side logic", "Unlimited CMS", "100% code ownership", "No monthly hosting fees", "30-day money-back guarantee"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"get_migration_quote",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all">
                Get Migration Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-stone-50">
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
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl bg-linear-to-br from-green-50 to-white border border-green-500/30 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] pointer-events-none" />
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-[0.22em] mb-6">
              <ShieldCheck className="w-4 h-4" /> Risk Reversal Guarantee
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight leading-tight">
              90+ PageSpeed <span className="font-serif italic text-cognac">or full refund.</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Every PandaCodeGen Webflow migration ships at 90+ on Google PageSpeed. If your new site doesn&apos;t hit that score on launch day, we refund 100% of your payment. Guaranteed, in writing.
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

      {/* Further Reading — blog cluster links */}
      <section className="py-10 px-6 bg-white border-t border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-cognac mb-4">Further reading</p>
          <ul className="space-y-2 text-stone-700">
            <li>&rarr; <Link href="/blog/webflow-migration-cost" className="text-charcoal hover:text-cognac underline underline-offset-2">What a Webflow migration actually costs in 2026</Link></li>
            <li>&rarr; <Link href="/blog/webflow-true-cost" className="text-charcoal hover:text-cognac underline underline-offset-2">The true cost of staying on Webflow: $125 to $400 per month</Link></li>
            <li>&rarr; <Link href="/blog/leaving-webflow-2026" className="text-charcoal hover:text-cognac underline underline-offset-2">Leaving Webflow in 2026: what actually happened</Link></li>
            <li>&rarr; <Link href="/blog/webflow-vs-custom-website" className="text-charcoal hover:text-cognac underline underline-offset-2">Webflow vs custom website 2026 comparison</Link></li>
          </ul>
        </div>
      </section>

      {/* Related Services — expanded to all platforms via reusable component */}
      <RelatedServicesGrid currentHref="/services/webflow" />

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
                <p className="text-xs text-stone-500 mt-0.5">Lead Engineer. Webflow-to-Next.js migrations that score 95 to 100 on PageSpeed. Full CMS migration from Webflow Collections to headless Sanity or Contentful, with every animation rebuilt in clean code.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Link href="/about/imran" className="shrink-0">
                <Image src="/team/imran.png" alt="Imran" width={48} height={48} className="w-12 h-12 rounded-full border border-stone-200 object-cover" />
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
