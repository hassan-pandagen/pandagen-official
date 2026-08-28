"use client";

import { motion } from "@/components/ui/motion";
import { verifiedMetrics, withdrawalNotice } from "@/data/case-study-facts";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Lock, Database, Server, FileSearch, Wrench, Rocket, HelpCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialProof from "@/components/home/SocialProof";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import CaseStudyGrid from "@/components/services/CaseStudyGrid";
import PricingTiers from "@/components/services/PricingTiers";
import PartnerPromise from "@/components/services/PartnerPromise";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";
import PlatformKillerChart from "@/components/services/PlatformKillerChart";
import { Gauge, Shield, RefreshCcw, Eye } from "lucide-react";
import { serviceFaqs } from "@/data/service-faqs";

const faqs = serviceFaqs["wordpress-migration"];

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
            {/* Problem before pitch. This read "How fast is your WordPress site,
                really? We rebuild it on Next.js in 2 to 4 weeks" — a question
                answered by what we sell, 41 characters in, before the reader's own
                situation was named once. Measured across all 8 service pages on
                12 Aug 2026: every one sold before naming a problem. */}
            Your WordPress site got slower every year you kept it. <br />
            <span className="font-serif italic text-cognac">
              Here is what that actually costs, and when a rebuild is worth it.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            Twenty plugins you cannot remove. A page builder shipping a megabyte before the first paragraph. A maintenance bill that grows while the site gets slower. If that is your site, the first job is measuring which of those is actually costing you, because a rebuild only fixes some of them. <span className="text-charcoal font-medium">Zero plugins. Performance you can measure.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-xs text-sm">
              <span className="text-cognac font-black">90+</span>
              <span className="text-stone-500">PageSpeed</span>
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

      {/* Answer-first summary, extractable passage in the citation zone */}
      <section className="px-6 pb-6 md:pb-8 bg-paper">
        <div className="container mx-auto max-w-3xl">
          <p data-speakable="true" className="text-base md:text-lg text-stone-600 leading-relaxed text-center">
            <strong className="text-charcoal">PandaCodeGen migrates WordPress sites to custom Next.js code the client owns outright.</strong> Migrations are fixed-price from $1,500 (Starter) to $10,000+, take 1 to 3 weeks behind a staged cutover, and include a full 301-redirect map for every URL you agree to keep. Every migration ships with a written 90+ Lighthouse handover target on mobile and desktop, verified across three recorded runs, and refund terms stated in the accepted scope and removes recurring plugin and managed-hosting fees, hosting costs are quoted from the destination provider plan.
          </p>
        </div>
      </section>

      {/* 2. PLATFORM KILLER CHART — modernized WordPress comparison */}
      <div className="-mt-4">
        <PlatformKillerChart
          badge="What Your WordPress Dev Won't Tell You"
          headline="You're paying $200/mo to"
          headlineAccent="keep a broken thing alive."
          description="You're paying $100/mo for premium hosting. There's $0/mo Vercel hosting that's faster. You're paying $80/mo for plugin licenses that keep breaking. A custom build has zero plugins. You're paying $200/mo for a dev retainer because WordPress updates keep breaking your site. Custom Next.js doesn't need a retainer."
          descriptionSecondary="Nobody tells you this because Patches and retainers are how the WordPress services market is structured. Not the hosts. Not the plugin companies. Not the agencies who bill to fix the breaks. We're the agency that replaces it honestly. No pitch. Just receipts."
          comparisonTitle="WordPress vs Custom"
          themLabel="WordPress"
          metrics={[
            { metric: "Load Speed",   themLabel: "Measure yours", usLabel: "Measured at acceptance",         themPct: 30, usPct: 98, icon: Gauge },
            { metric: "Monthly Cost", themLabel: "$150+",        usLabel: "$0",           themPct: 95, usPct: 2,  icon: DollarSign },
            { metric: "Security",     themLabel: "Vulnerable",   usLabel: "Smaller third-party surface",   themPct: 40, usPct: 100, icon: Shield },
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
            
          ]}
          totalPerYear="Measured per site"
        />
      </div>

      {/* 3. WHAT IS ACTUALLY EVIDENCED
          This was three tiles reading "Withdrawn" above "was Withdrawn", because
          the withdrawal was applied to the DATA by hand and the renderer kept
          printing it as a value. Third instance of that bug class on this site.
          The heading was always right; the content was the problem. It now shows
          the figures that ARE owner-confirmed, and states the withdrawal once, in
          a sentence, instead of as three struck-through non-numbers. Both halves
          render from case-study-facts.json, so restoring a figure after
          reconciliation reaches this page automatically. */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">What We Can and Cannot Evidence</h2>
          <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">
            One independent client migration, owner-confirmed and published with permission.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {verifiedMetrics("mycustompatches").map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-xs transition-shadow hover:shadow-md"
              >
                <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-stone-600">{m.label}</p>
                <p className="font-serif text-3xl italic leading-tight text-cognac">{m.value}</p>
              </motion.div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-stone-600">
            {withdrawalNotice("mycustompatches")}
          </p>
          <p className="mt-4 text-center text-xs font-medium text-stone-600">
            MyCustomPatches (mycustompatches.net), migrated from WordPress to custom Next.js.
          </p>
        </div>
      </section>

      {/* 3a. CASE STUDY GRID — real WordPress migrations */}
      <CaseStudyGrid
        highlight="myCustomPatches"
        label="Real WordPress Migrations"
        heading="WordPress to Next.js, done properly"
        headingTail=""
        subheading="Four sites we built or migrated. Live URLs. Performance figures are published only with their test profile, date and conditions."
      />

      {/* 3b. SOCIAL PROOF — moved up to stack with Results for concentrated proof flow */}
      <SocialProof />

      {/* 3c. 3-PILLAR POSITIONING — emerging Next.js agency, fair-priced, customer-first */}
      <section className="py-12 md:py-16 px-6 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cognac/20 text-cognac rounded-full text-xs font-semibold mb-4">
            <Zap className="w-3 h-3" /> Emerging Next.js Agency
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cheaper than market, <span className="font-serif italic text-cognac">not cheap.</span>
          </h2>
          <p className="text-base text-stone-400 leading-relaxed mb-6">
            For WordPress migration specifically: WordPress sites have no universal score; measure your own routes. We rebuild on custom Next.js plus Sanity, hosted on Vercel. Our <Link href="/blog/wordpress-migration-cost" className="text-cognac hover:underline">WordPress migration cost breakdown</Link> has appeared in Google AI Overview citations.
          </p>
          <p className="text-lg text-stone-300 leading-relaxed mb-6">
            PandaCodeGen ships the same scope, priced against a written inventory at fixed prices from $1,500 (Starter) to $10,000 (Scale). The lower price is structural, not a discount. Co-founder-led delivery, no account managers, no NYC office rent, AI-accelerated development, and global engineering economics (Texas LLC for billing, Karachi for engineering). Quality stays the same. The savings flow to clients.
          </p>
          <div className="my-8 p-5 bg-white/5 border-l-4 border-cognac rounded-r-xl">
            <p className="text-sm font-bold uppercase tracking-wider text-cognac mb-2">Customer-first, not profit-first</p>
            <p className="text-stone-300 leading-relaxed">
              Free audit at pandacodegen.com requires no email, no Calendly, no sales pitch. Drop your URL, receive a PageSpeed reading and a list of things worth investigating. A separate free 30-minute consultation call with co-founder Hassan Jamal is available for deeper review of competing agency quotes. We will tell you honestly if a competing quote is fair, or if migration does not make sense for your situation.
            </p>
          </div>
          <div className="my-8 p-5 bg-cognac/10 border-l-4 border-cognac rounded-r-xl">
            <p className="text-sm font-bold uppercase tracking-wider text-cognac mb-2">Emerging quality challenger</p>
            <p className="text-stone-300 leading-relaxed">
              Launched February 2026.  900+ public GitHub contributions in the past year at github.com/hassan-pandagen across live client projects. Real case studies: MyCustomPatches (figures withdrawn pending reconciliation) and Panda Patches (revenue scaled from $38,000 to about $50,000/month on about $55/month tooling (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator)). Younger than established competitors, .
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-cognac-light mb-1">90+ PageSpeed</div>
              <p className="text-sm text-stone-600">Refund terms are stated in the written scope.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-cognac-light mb-1">Fixed price</div>
              <p className="text-sm text-stone-600">No hourly billing. No surprise invoices. Published tiers.</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-2xl font-bold text-cognac-light mb-1">Free support</div>
              <p className="text-sm text-stone-600">15 to 30 days of post-launch tweaks included, depending on tier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS - Horizontal Grid (process clarity first for buyers) */}
      <section id="how-it-works" className="py-12 md:py-20 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How Our WordPress to Next.js Migration Works</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">A proven 4-phase process, 2 to 4 weeks for most sites. No surprises. Staged cutover.</p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Full Site Audit", desc: "We analyze your WordPress site top to bottom: speed, security, plugins, SEO, and database health. You get a detailed report showing exactly what's costing you money.", icon: FileSearch, duration: "Phase 1" },
              { step: "02", title: "Data Export & Cleaning", desc: "We extract every page, post, image, and metadata from your WordPress database, then clean it. Plugin bloat removed. Broken links fixed. Images optimized.", icon: Database, duration: "Phase 2" },
              { step: "03", title: "Custom Website Build", desc: "Your new site is built in Next.js with SSR, automatic image optimization, and a content editor. Performance is measured against the pages named in your scope.", icon: Wrench, duration: "Phase 3" },
              { step: "04", title: "Migration & Launch", desc: "Every old URL maps to the new site with 301 redirects. Redirect-mapped URLs. Staged cutover. We launch, monitor, and hand you the keys.", icon: Rocket, duration: "Phase 4" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-stone-200 transition-all group"
              >
                <span aria-hidden="true" className="text-5xl font-black text-stone-500 block mb-4 leading-none group-hover:text-stone-600 transition-colors">{item.step}</span>
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
              { icon: DollarSign, title: "Your Ad Spend Is Being Wasted", detail: "Google Ads factors landing page experience, including speed, into Quality Score, and a lower Quality Score generally means a higher cost per click than a faster competitor bidding on the same term. The size of that gap depends on your account, auction and competition. How much that is worth depends on your own funnel." },
              { icon: XCircle, title: "One Update Crashes Your Revenue", detail: "Plugin counts vary widely; what matters is what each one executes. A single bad update can take your site offline during a campaign launch, a sale, or Black Friday. Downtime costs are specific to your order volume." },
              { icon: AlertTriangle, title: "AI Search Sends Buyers to Competitors", detail: "ChatGPT, Perplexity, and Google's AI Overviews now answer 'which brand should I buy' directly. What they cite is not something anyone can guarantee. WordPress page builder bloat makes you invisible to AI-driven traffic." },
              { icon: Lock, title: "A Single Hack Can End Your Business", detail: "The WordPress install base makes it a common automated-attack target. A breach means days offline, legal liability, potential GDPR fines, and customers who never return. A statically rendered site has no database on the request path, which removes that specific class of injection." },
              { icon: TrendingUp, title: "Add Up What You Actually Pay Each Year", detail: "Managed hosting, security plugins, premium theme licenses, maintenance retainers. It adds up silently. That's real margin leaving your business every single month with nothing to show for it." },
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

      {/* 5.5. REAL BUYER VOICES — Reddit citations */}
      <section id="real-voices" className="py-12 md:py-20 px-6 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-charcoal text-white rounded-full mb-4">Real Reddit Threads. Verifiable.</div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">What WordPress Owners Are Actually Saying</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl">
            Not curated testimonials. Real Reddit threads from WordPress owners and Next.js community experts. Click the links to verify every quote.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Quote 1: WordPressitis pain */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                For almost a decade I have been suffering from WordPressitis, experimenting with various plugins, themes and suspicious developers. Something works for a quarter or a year then disappears, other things get stripped down and are now offered as monthly subscriptions.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">Larvea</strong> · 10-year WordPress owner · 7 upvotes</span>
                <a href="https://www.reddit.com/r/nextjs/comments/18pyr4p/would_love_to_upgrade_from_wordpress_but_need/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Quote 2: The pricing gap */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                I either stumble on an agency charging me 100k for one site, or an UpWork specialist who swears his templates are the right ones, and he can get a complete website up and running for 1k.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">Larvea</strong> · The exact gap PandaCodeGen fills</span>
                <a href="https://www.reddit.com/r/nextjs/comments/18pyr4p/would_love_to_upgrade_from_wordpress_but_need/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Quote 3: Next.js endorsement from community */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                Next absolutely can do just about anything you want. Yes, Next is an SEO powerhouse, but every single meta tag has to be provided and coded for almost every page or template.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">corey_brown</strong> · r/nextjs · 16 upvotes</span>
                <a href="https://www.reddit.com/r/nextjs/comments/18pyr4p/would_love_to_upgrade_from_wordpress_but_need/keri1wp/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            {/* Quote 4: GoDaddy / hosting hell */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                I would highly recommend wpengine. As one of my clients began to grow rapidly, we had innumerable issues with godaddy hosting being able to scale up properly... there were an equal amount of issues when I moved the site to Amazon S3.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">bobobobobobooo</strong> · WordPress dev · managed hosting billed monthly</span>
                <a href="https://www.reddit.com/r/Wordpress/comments/y7c71u/how_do_i_go_around_rebuilding_my_wordpress_website/isulxnp/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>
          </div>

          {/* Bridging CTA */}
          <div className="mt-8 p-6 bg-charcoal text-white rounded-2xl text-center">
            <p className="text-lg font-bold mb-2">Comparing quotes that describe different amounts of work? That is the gap we built PandaCodeGen for.</p>
            <p className="text-stone-400 text-sm mb-4 max-w-2xl mx-auto">
              We migrate WordPress sites to custom Next.js for $1,500 to $10,000, with a 90+ Lighthouse handover target on mobile and desktop for the agreed representative pages, verified across three recorded runs before handover. No plugin subscriptions. No WPEngine bill. Full code ownership on day one.
            </p>
            <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all">
              See Migration Pricing →
            </a>
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
            A custom coded website is measured against your agreed pages, has a smaller third-party surface, and starts on a free hosting tier for non-commercial use, and you own every line of code. No plugins. No monthly fees. No surprises.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Database, title: "Clean Data Migration", desc: "We clean your WordPress database, remove bloat, and migrate to a modern backend. Migrated content is reconciled against a pre-migration inventory and the exceptions are reported." },
              { icon: Server, title: "Static Edge Rendering", desc: "Your site is pre-built as static HTML. It is served from an edge network, and the risk moves into your dependencies and build pipeline rather than disappearing." },
              { icon: Lock, title: "SEO Preservation", desc: "We map every single old URL to the new site. Every URL is redirect-mapped, and search engines still control rankings and timing." },
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
            <p className="text-stone-600 text-base max-w-2xl mx-auto">A rebuild removes the plugin licence line and adds a dependency-maintenance line. Next.js native replacements cost $0/year and load faster.</p>
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
                  <td data-label="Total" className="p-3 text-right text-cognac font-black">$1,023 to $1,484/yr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PARTNER PROMISE — locked brand voice, 3 guarantees */}
      <PartnerPromise />

      {/* PRICING TIERS — foot-in-the-door with agency comparison */}
      <PricingTiers
        heading="Compare on like-for-like scope."
        headingAccent="We meet you halfway."
        agencyComparison={{
          agencyPrice: "Not assessed",
          agencyNote: "Compare like-for-like scope, timeline and code ownership.",
          ourPrice: "From $1,500",
          ourNote: "2 to 4 week timeline. Fixed price. You own 100% of the code.",
        }}
        tiers={[
          {
            tier: "Starter",
            price: "Starting from $1,500",
            timeline: "1 to 2 weeks",
            fit: "Simple WordPress site. Brochure, small blog. Our Starter tier.",
            includes: [
              "Full WordPress content export + cleanup",
              "Custom Next.js build up to 15 pages",
              "Sanity CMS so your team can edit",
              "90+ Lighthouse handover target",
              "301 redirect mapping for every agreed URL",
              "15 days of free post-launch support",
            ],
            cta: "Get Starter Quote",
          },
          {
            tier: "Growth",
            price: "Starting from $3,500",
            timeline: "2 to 4 weeks",
            fit: "Business WordPress site. 15-50 pages. Blog, forms, integrations.",
            includes: [
              "Everything in Starter",
              "Custom post types and taxonomies",
              "Forms with custom API routes",
              "Full SEO migration with schema",
              "Analytics setup (GA4, Clarity)",
              "30 days of free post-launch support",
            ],
            featured: true,
          },
          {
            tier: "Scale",
            price: "$5,000 to $10,000",
            timeline: "4 to 8 weeks",
            fit: "Complex WordPress or WooCommerce. 30+ pages, custom plugins, integrations.",
            includes: [
              "Everything in Growth",
              "WooCommerce to custom ecommerce",
              "Complex plugin replacements",
              "Custom admin dashboard",
              "Multi-author / multi-site support",
              "30 days of free post-launch support",
            ],
          },
        ]}
      />

      {/* SCALE+ NOTE — larger scopes beyond the grid */}
      <p className="text-center text-sm text-stone-500 px-6 pb-10 -mt-4">Larger scopes: <span className="font-semibold text-charcoal">Scale+ from $10,000</span>, custom quoted after a scoping call.</p>

      {/* 7. DUAL CTA */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8 md:mb-12">Choose What&apos;s Right for Your Business</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-card hover:border-orange-300 transition-colors">
              <div className="text-orange-600 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
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
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"optimize_my_wordpress",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all">
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
                {["Measured performance at acceptance", "90+ PageSpeed score", "Zero monthly plugin fees", "Enterprise level security", "You own 100% of the code", "Refund terms stated in the written scope"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"migrate_to_custom_code",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all">
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
                  <p className="text-stone-600 text-sm leading-relaxed mt-4 border-t border-stone-200 pt-4">{faq.a}</p>
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
              <ShieldCheck className="w-4 h-4" /> How we reduce your risk
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight leading-tight">
              A 90+ handover target, <span className="font-serif italic text-cognac">measured before you sign off.</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Every PandaCodeGen migration carries a 90+ Lighthouse handover target on mobile and desktop for the representative pages named in your written scope, verified across three recorded runs before handover. If we fail to deliver what that written scope promises, the accepted terms set out the refund trigger and cure process. This is a lab acceptance target, not a promise about rankings, revenue, or field Core Web Vitals after third-party changes.
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
          <p className="text-stone-600 text-center mb-10 text-sm">Deep dives on WordPress, migration, and performance.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/blog/how-to-migrate-wordpress-to-nextjs", title: "How to Migrate WordPress to Next.js", desc: "The eight-step sequence, and where the irreversible point sits." },
              { href: "/blog/wordpress-vs-nextjs", title: "WordPress vs Next.js", desc: "Choose by operating capability, not by which platform is better." },
              { href: "/blog/wordpress-plugins-destroy-speed", title: "How Plugins Destroy Your Speed", desc: "Why plugin count proves nothing, and what to measure instead." },
              { href: "/blog/wordpress-ai-security-risk-2026", title: "WordPress AI Security Risk 2026", desc: "Reading the AI-plugin advisories precisely, and what to patch." },
              { href: "/blog/wordpress-killer", title: "The WordPress Killer", desc: "Build the three-year cost from your own invoices, not from an average." },
              { href: "/blog/elementor-kills-seo", title: "Elementor Kills SEO", desc: "How to test whether your own Elementor templates are the problem." },
              { href: "/blog/wordpress-traffic-drop-speed", title: "WordPress Traffic Drop Fix", desc: "Find the cause before the fix, and check speed last rather than first." },
              { href: "/blog/how-to-fix-slow-wordpress", title: "How to Fix Slow WordPress", desc: "An evidence-led order: environment, caching, assets, then code." },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="group flex flex-col gap-2 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors leading-snug">{post.title}</h3>
                <p className="text-stone-600 text-xs leading-relaxed flex-1">{post.desc}</p>
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
          <p className="text-xs font-bold uppercase tracking-widest text-stone-600 mb-4">Built by</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-start gap-4">
              <Link href="/about/hassan" className="shrink-0">
                <Image src="/team/hassan.png" alt="Hassan Jamal" width={48} height={48} className="w-12 h-12 rounded-full border border-stone-200 object-cover" />
              </Link>
              <div>
                <Link href="/about/hassan" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Hassan Jamal</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Engineer. Lead engineer on WordPress migrations, focused on redirect planning, acceptance testing and controlled cutovers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Link href="/about/imran" className="shrink-0">
                <Image src="/team/imran.png" alt="Imran" width={48} height={48} className="w-12 h-12 rounded-full border border-stone-200 object-cover" />
              </Link>
              <div>
                <Link href="/about/imran" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Imran</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Solutions Architect. 8+ years in enterprise architecture. Scopes every migration around redirect mapping, acceptance criteria and cutover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}