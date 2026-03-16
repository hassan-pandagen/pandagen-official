"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Lock, Database, Server, FileSearch, Wrench, Rocket, HelpCircle, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import WordPressKiller from "@/components/sections/WordPressKiller";

const faqs = [
  {
    q: "Will I lose my Google rankings during migration?",
    a: "No. We map every single URL from your old WordPress site to your new site with 301 redirects. Google treats it as the same page at a new address. Most clients see rankings recover within 2-4 weeks and improve within 60 days because the new site is faster."
  },
  {
    q: "How long does a WordPress migration take?",
    a: "A typical migration takes 4-6 weeks from start to launch. Week 1: Full audit and planning. Weeks 2-4: Build your new site. Week 5: Testing, content migration, URL mapping. Week 6: Launch with zero downtime."
  },
  {
    q: "What happens to my blog posts and content?",
    a: "Everything migrates. Blog posts, pages, images, metadata, categories. We extract it all from your WordPress database and move it to a modern content editor where you can still edit content without touching code."
  },
  {
    q: "How much does a WordPress to Next.js migration cost?",
    a: "It depends on the size and complexity of your site. A standard business site (10-30 pages) typically ranges from $5,000-$15,000. The ROI usually pays for itself within 3-6 months through reduced hosting costs, lower ad spend, and increased conversions."
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
      <section className="relative pt-28 md:pt-40 pb-12 md:pb-20 px-6">
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-8">
            <Zap className="w-4 h-4" /> Legacy Rescue
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-tight"
          >
            Escape WordPress. <br />
            <span className="font-serif italic text-stone-500">
              Scale with Custom Code.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            We don&apos;t just &apos;redesign&apos; your site. We surgically extract your data from WordPress and rebuild your frontend with custom code. <span className="text-charcoal font-medium">Zero plugins. Instant load times.</span>
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
            <Link href="#how-it-works" className="px-8 py-4 bg-white border border-stone-200 text-charcoal font-medium rounded-full hover:border-cognac/30 transition-all flex items-center justify-center gap-2">
              See How It Works <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. WORDPRESS KILLER - Comparison Card */}
      <WordPressKiller />

      {/* 3. BEFORE / AFTER RESULTS */}
      <section className="py-10 md:py-20 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">Real Results. Not Promises.</h2>
          <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">Here&apos;s what happens when you migrate from WordPress to custom code.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "PageSpeed Mobile", before: "34", after: "98", suffix: "/100" },
              { label: "Load Time", before: "4.2s", after: "0.8s", suffix: "" },
              { label: "Monthly Cost", before: "$350", after: "$0", suffix: "" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-white border border-stone-200 shadow-card text-center"
              >
                <p className="text-xs text-stone-500 uppercase tracking-widest font-bold mb-4">{stat.label}</p>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-red-600 line-through opacity-60">{stat.before}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="text-3xl font-black text-cognac">{stat.after}</span>
                  <span className="text-sm text-stone-600">{stat.suffix}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-stone-500 mt-6">Based on average results across WordPress to Next.js migrations</p>
        </div>
      </section>

      {/* 4. PAIN POINTS, Dark Navy */}
      <section className="py-12 md:py-24 px-6 bg-[#0F172A]">
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
                  <div className="p-3 rounded-xl bg-red-500/15 text-red-400 flex-shrink-0 group-hover:bg-red-500/25 transition-colors">
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

      {/* 5. HOW IT WORKS - Horizontal Grid */}
      <section id="how-it-works" className="py-12 md:py-24 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How We Migrate Your Site</h2>
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
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-stone-200 transition-all group"
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

      {/* 6. THE UPGRADE PATH */}
      <section className="py-10 md:py-20 px-6">
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

      {/* 7. DUAL CTA */}
      <section className="py-10 md:py-20 px-6 border-y border-stone-200 bg-white">
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
                    <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all"
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
                Migrate to Custom Code
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-10 md:py-20 px-6">
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
        <div className="container mx-auto max-w-4xl bg-green-50 border border-green-200 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> 30-Day Money-Back Guarantee (from delivery)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">2x Faster or Your Money Back.</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We are so confident in our migration process that if your new site isn&apos;t at least 2x faster than your old one, we will refund your final payment. No questions asked.
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
            <Link href="/services/custom-engineering" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-100 transition-colors">
                <Code2 className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">Custom Engineering</h3>
                <p className="text-stone-400 text-xs mt-0.5">SaaS platforms, dashboards, and APIs built from scratch.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
            <Link href="/services/wix" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-100 transition-colors">
                <Zap className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">Wix Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Break free from Wix limitations. Own your code.</p>
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