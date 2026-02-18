"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Lock, Database, Server, FileSearch, Wrench, Rocket, HelpCircle } from "lucide-react";
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
    a: "Everything migrates. Blog posts, pages, images, metadata, categories — we extract it all from your WordPress database and move it to a modern headless CMS where you can still edit content without touching code."
  },
  {
    q: "How much does a WordPress to Next.js migration cost?",
    a: "It depends on the size and complexity of your site. A standard business site (10-30 pages) typically ranges from $5,000-$15,000. The ROI usually pays for itself within 3-6 months through reduced hosting costs, lower ad spend, and increased conversions."
  },
  {
    q: "Can I still edit my website after migration?",
    a: "Yes. We set up a headless CMS with a user-friendly dashboard. You can edit text, images, blog posts, and pages without any coding knowledge. It's simpler than WordPress — no plugins to update, no themes to manage."
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 mb-8">
            <Zap className="w-4 h-4" /> Legacy Rescue
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-tight"
          >
            Escape WordPress. <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(to right, #fb923c, #f87171, #fb7185)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Scale with Custom Code.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            We don&apos;t just &apos;redesign&apos; your site. We surgically extract your data from WordPress and rebuild your frontend with custom code (Next.js). <span className="text-white font-medium">Zero plugins. Instant load times.</span>
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
            <Link href="#how-it-works" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-orange-400/50 hover:bg-orange-500/5 transition-all flex items-center justify-center gap-2">
              See How It Works <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. WORDPRESS KILLER - Comparison Card */}
      <WordPressKiller />

      {/* 3. BEFORE / AFTER RESULTS */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Real Results. Not Promises.</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Here&apos;s what happens when you migrate from WordPress to custom code.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "PageSpeed Mobile", before: "34", after: "98", suffix: "/100", gradient: "linear-gradient(to right, #ef4444, #f97316)" },
              { label: "Load Time", before: "4.2s", after: "0.8s", suffix: "", gradient: "linear-gradient(to right, #f97316, #eab308)" },
              { label: "Monthly Cost", before: "$350", after: "$0", suffix: "", gradient: "linear-gradient(to right, #22c55e, #10b981)" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center"
              >
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">{stat.label}</p>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-red-400 line-through opacity-60">{stat.before}</span>
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                  <span
                    className="text-3xl font-black"
                    style={{
                      backgroundImage: stat.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >{stat.after}</span>
                  <span className="text-sm text-gray-400">{stat.suffix}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-600 mt-6">Based on average results across WordPress to Next.js migrations</p>
        </div>
      </section>

      {/* 4. PAIN POINTS */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">The WordPress Reality Check</h2>
          </div>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            These are the problems we see every single week from businesses still running WordPress:
          </p>

          <div className="space-y-4">
            {[
              { pain: "Your site breaks every time a plugin updates", detail: "WordPress sites average 20-30 plugins. Each update is a potential breaking change. One bad update and your site goes down." },
              { pain: "You are paying higher Ad Costs because of slow loading", detail: "Google Ads penalizes slow landing pages with lower Quality Scores. You're literally paying more per click because WordPress is slow." },
              { pain: "AI Search engines ignore your content", detail: "ChatGPT, Perplexity, and Google's AI Overviews prioritize clean, semantic code. WordPress page builders create DOM bloat that AI can't parse." },
              { pain: "SQL Injections keep you up at night", detail: "WordPress is the #1 target for hackers. 90% of hacked CMS sites are WordPress. Plugins are the entry point. A custom-coded static site has no database to inject and no plugins to exploit." },
              { pain: "Monthly costs are bleeding you dry", detail: "Premium hosting ($30-100/mo) + premium plugins ($50-200/mo) + security ($20-50/mo) + maintenance ($100-300/mo) = $200-650/month in hidden costs." },
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

      {/* 5. HOW IT WORKS - Process Timeline */}
      <section id="how-it-works" className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">How We Migrate Your Site</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">A proven 4-step process. No surprises. No downtime.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "Full Site Audit", desc: "We analyze your WordPress site top to bottom — speed, security, plugins, content, SEO rankings, and database health. You get a detailed report showing exactly what's costing you money.", icon: FileSearch, duration: "Week 1" },
              { step: "02", title: "Data Export & Cleaning", desc: "We extract every page, post, image, and metadata from your WordPress database. Then we clean it — remove plugin bloat, fix broken links, optimize images. Your content arrives clean.", icon: Database, duration: "Week 2" },
              { step: "03", title: "Custom Code Build", desc: "Your new site gets built in Next.js with server-side rendering, automatic image optimization, and a headless CMS for easy content editing. Every page loads in under 1 second.", icon: Wrench, duration: "Weeks 3-5" },
              { step: "04", title: "Migration & Launch", desc: "We map every old URL to the new site with 301 redirects. Zero rankings lost. Zero downtime. We launch, monitor, and hand over the keys. You own 100% of the code.", icon: Rocket, duration: "Week 6" },
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

      {/* 6. THE UPGRADE PATH */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon/10 border border-neon/20 text-sm text-neon mb-6">
            <Code2 className="w-4 h-4" /> The Smarter Investment
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What If Your Website Was an Asset, Not a Liability?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            A custom-coded website loads in under 1 second, can&apos;t be hacked, costs $0 to start hosting, and you own every line of code. No plugins. No monthly fees. No surprises.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Database, title: "Clean Data Migration", desc: "We clean your WordPress database, remove bloat, and migrate to a modern backend. Zero data loss guaranteed." },
              { icon: Server, title: "Static Edge Rendering", desc: "Your site is pre-built as static HTML. It loads instantly worldwide and cannot be hacked. No server to attack." },
              { icon: Lock, title: "SEO Preservation", desc: "We map every single old URL to the new site. You won't lose a single ounce of Google rankings or traffic." },
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
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose What&apos;s Right for Your Business</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.08] border border-white/10 hover:border-orange-500/30 transition-colors">
              <div className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-2xl font-bold text-white mb-4">WordPress Optimization</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Not ready to migrate yet? We&apos;ll optimize your current WordPress site to get the most performance possible within the platform&apos;s limitations.
              </p>
              <ul className="space-y-3 mb-8">
                {["Speed optimization (caching, images)", "Security hardening", "Plugin audit & cleanup", "SEO improvements", "30-day support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 border border-orange-500/30 text-orange-400 font-bold rounded-full hover:bg-orange-500/10 transition-all"
              >
                Optimize My WordPress
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-neon/5 to-transparent border border-neon/30 hover:border-neon/50 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-neon/20 text-neon text-xs font-bold rounded-full">Recommended</div>
              <div className="text-neon text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-2xl font-bold text-white mb-4">Full Migration to Custom Code</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Complete migration from WordPress to a custom-coded platform you own forever. Faster, more secure, and cheaper to maintain long-term.
              </p>
              <ul className="space-y-3 mb-8">
                {["Sub-second load times", "90-95/100 PageSpeed score", "Zero monthly plugin fees", "Enterprise-grade security", "You own 100% of the code", "30-day money-back guarantee"].map((item, i) => (
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
                Migrate to Custom Code
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-neon" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Common Questions</h2>
          </div>
          <p className="text-gray-400 text-center mb-12">Everything you need to know before migrating.</p>

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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">2x Faster or Your Money Back.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We are so confident in our migration process that if your new site isn&apos;t at least 2x faster than your old one, we will refund your final payment. No questions asked.
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
            <Link href="/services/custom-engineering" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">Custom Engineering</h3>
              <p className="text-gray-500 text-sm">SaaS platforms, dashboards, and APIs built from scratch.</p>
            </Link>
            <Link href="/services/wix" className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-neon/30 transition-all">
              <h3 className="text-white font-bold mb-2 group-hover:text-neon transition-colors">Wix Migration</h3>
              <p className="text-gray-500 text-sm">Break free from Wix limitations. Own your code.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}