"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Lock, Database, Server, FileSearch, Wrench, Rocket, HelpCircle, ShoppingBag, CreditCard, Package } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";

const faqs = [
  {
    q: "Will I lose my WooCommerce orders and customer data?",
    a: "No. We export your entire WooCommerce database (products, orders, customer accounts, reviews, categories) and migrate it to your new platform. Zero data loss. We test imports in staging before anything touches your live store."
  },
  {
    q: "Do I keep my Google rankings after migrating from WooCommerce?",
    a: "Yes. Every URL from your WooCommerce store is mapped with 301 redirects to the new site. Google treats it as the same page at a new address. Most clients see rankings recover within 2 to 4 weeks and improve within 60 days because the faster site gets rewarded."
  },
  {
    q: "Can I still manage products and orders without being technical?",
    a: "Absolutely. We set up a clean admin dashboard where you can add products, update prices, manage inventory, and process orders. No code required. It's simpler than WooCommerce's admin because we only build what you actually need."
  },
  {
    q: "What payment gateways do you support?",
    a: "Stripe, PayPal, Apple Pay, Google Pay, Cash App Pay, Klarna, Afterpay, and any other gateway with an API. We integrate them natively. No paid plugin required. Your checkout is fully custom, so we can add any payment method you want."
  },
  {
    q: "How much does a WooCommerce migration cost?",
    a: "Most WooCommerce migrations range from $6,000 to $18,000 depending on store size and complexity. A simple store (under 500 products) is at the lower end. Complex stores with custom pricing, subscriptions, or B2B logic are higher. We give a fixed-price quote upfront. No hourly surprises."
  },
  {
    q: "My WooCommerce store has subscriptions / bookings / B2B pricing. Can you handle that?",
    a: "Yes. Subscriptions, recurring billing, tiered B2B pricing, volume discounts, booking calendars: these are all custom logic we build natively. You won't need a $300/mo plugin to handle what we can build into the core of your store."
  },
];

const comparisonRows = [
  { label: "Load Time",     woo: "2.5 to 5s average",              custom: "Under 1s, guaranteed",        isPain: true  },
  { label: "Monthly Cost",  woo: "$300 to $700/mo (hosting+plugins)", custom: "$0 to $50/mo at any scale",  isPain: true  },
  { label: "Checkout",      woo: "Plugin-dependent, fragile",    custom: "Custom logic, bulletproof", isPain: true  },
  { label: "Security",      woo: "Self-managed, plugin surface", custom: "Static, no attack surface", isPain: true  },
  { label: "Scalability",   woo: "Crashes under traffic spikes", custom: "Edge CDN, handles millions",isPain: true  },
  { label: "Ownership",     woo: "Locked into WordPress/plugins",custom: "100% your code, your IP",   isPain: false },
];

export default function PageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-paper min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]" />
      <ReadingProgressBar />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-20 md:pt-40 pb-12 md:pb-20 px-6">
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-8">
            <ShoppingBag className="w-4 h-4" /> WooCommerce Migration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-tight"
          >
            Escape WooCommerce. <br />
            <span className="font-serif italic text-cognac">
              Own Your Store.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            WooCommerce is WordPress with a shopping cart bolted on. We rebuild your store as a custom coded Next.js storefront with faster checkout and zero plugin fees, giving you complete code ownership. <span className="text-charcoal font-medium">No plugin conflicts. No surprise hosting bills.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cal-namespace="discovery"
              data-cal-link="pandagen/discovery"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Free Migration Audit <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#how-it-works" className="px-8 py-4 bg-white border border-stone-200 text-charcoal font-medium rounded-full hover:border-stone-400 transition-all flex items-center justify-center gap-2">
              See How It Works <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-sm text-stone-400 mt-6">
            Serving stores in UK · Australia · Canada · Europe · United States
          </motion.p>
        </div>
      </section>

      {/* 2. BEFORE / AFTER RESULTS */}
      <section className="py-10 md:py-20 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">What Migration Actually Delivers</h2>
          <p className="text-stone-600 text-center mb-12 max-w-2xl mx-auto">Real numbers from WooCommerce stores we&apos;ve migrated.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Checkout Load Time", before: "4.1s", after: "0.7s", suffix: "" },
              { label: "PageSpeed Mobile", before: "29", after: "97", suffix: "/100" },
              { label: "Monthly Platform Cost", before: "$480", after: "$0", suffix: "" },
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

          <p className="text-center text-xs text-stone-500 mt-6">Based on average results across WooCommerce to Next.js migrations</p>
        </div>
      </section>

      {/* 3. PAIN POINTS, Dark Navy */}
      <section className="py-12 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" />
              The Real Cost of WooCommerce
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Store Is Bleeding Revenue
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              WooCommerce was built for blogs, not e-commerce at scale. Here&apos;s what that costs you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, title: "You're Paying $300 to $700/Month to Run Your Store", detail: "Managed WooCommerce hosting (Kinsta, WP Engine): $50 to $200/mo. WooCommerce extensions (subscriptions, bookings, B2B): $50 to $300/yr. Security plugin: $10 to $50/mo. Backups, CDN, caching. It never stops adding up." },
              { icon: XCircle, title: "Checkout Abandonment Is Killing Your Conversions", detail: "Every extra second of load time costs you 7% in conversions. WooCommerce checkouts average 3 to 5 seconds. On a store doing $50K/month, that's $3,500+ in revenue you're leaving on the table every single month." },
              { icon: AlertTriangle, title: "One Plugin Update Can Take Your Store Offline", detail: "Payment gateway plugin conflicts with your theme. WooCommerce updates break your custom checkout. And it always happens on a Saturday during a sale campaign. Every minute offline is orders you never get back." },
              { icon: Lock, title: "Your Store Is One Hack Away From Disaster", detail: "WooCommerce stores hold payment data, customer addresses, and order history, making them high-value targets. WordPress is the #1 hacked CMS. A static custom coded store has no database to breach and no plugin attack surface." },
              { icon: TrendingUp, title: "Google Penalizes Your Slow Checkout Pages", detail: "Google's Core Web Vitals directly impact your organic rankings. A WooCommerce site running PHP on shared hosting fails LCP and TTFB benchmarks. Your competitors with faster sites outrank you before a single keyword is written." },
              { icon: Code2, title: "You Can't Add Features Without Paying for Yet Another Plugin", detail: "Need a pricing calculator? $200/yr plugin. Need a custom B2B portal? Another plugin. Need loyalty points? Another plugin. Each one adds load time, maintenance risk, and another line on your monthly bill. On custom code, we build exactly what you need, once." },
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

      {/* 4. COMPARISON TABLE */}
      <section className="py-10 md:py-20 px-6 bg-white border-y border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">WooCommerce vs Custom Code</h2>
          <p className="text-stone-600 text-center mb-10">The numbers speak for themselves.</p>

          <div className="overflow-x-auto">
            <div className="min-w-[560px] rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
              {/* Accent bar */}
              <div className="grid grid-cols-3">
                <div className="h-1 bg-stone-50" />
                <div className="h-1 bg-stone-50" />
                <div className="h-1 bg-cognac" />
              </div>
              {/* Header */}
              <div className="grid grid-cols-3 bg-stone-50 border-b border-stone-200">
                <div className="px-5 py-4 text-xs font-black text-stone-400 uppercase tracking-widest">Feature</div>
                <div className="px-5 py-4 text-sm font-bold text-stone-600 border-l border-stone-200">WooCommerce</div>
                <div className="px-5 py-4 text-sm font-bold text-cognac border-l border-stone-200 bg-paper">Custom Code</div>
              </div>
              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-stone-200 text-sm last:border-b-0">
                  <div className="px-5 py-4 text-charcoal font-bold flex items-center">{row.label}</div>
                  <div className={`px-5 py-4 border-l border-stone-200 flex items-center gap-2 font-medium ${row.isPain ? "text-red-600 bg-red-50/40" : "text-stone-500"}`}>
                    {row.isPain ? <XCircle className="w-4 h-4 text-red-400 shrink-0" /> : null}
                    {row.woo}
                  </div>
                  <div className="px-5 py-4 border-l border-stone-200 bg-paper flex items-center gap-2 font-black text-charcoal">
                    <div className="w-5 h-5 rounded-full bg-cognac flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    {row.custom}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="py-12 md:py-24 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How We Migrate Your WooCommerce Store</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">A proven 5-step process. Zero downtime. Zero lost orders.</p>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Full Store Audit", desc: "We audit your WooCommerce setup: products, plugins, checkout flow, SEO, and hosting costs. You get a full report showing what&apos;s costing you money.", icon: FileSearch, duration: "Week 1" },
              { step: "02", title: "Data Export & Mapping", desc: "Every product, order, customer account, review, and category is exported from your WooCommerce database and cleaned. All SEO URLs mapped for 301 redirects.", icon: Database, duration: "Week 2" },
              { step: "03", title: "Custom Storefront Build", desc: "Your new Next.js storefront is built with native payment integrations (Stripe, PayPal, Apple Pay), your exact checkout flow, and any custom pricing logic.", icon: Wrench, duration: "Weeks 3 to 5" },
              { step: "04", title: "Data Migration & Testing", desc: "We import all products, orders, and customer accounts into your new platform. Every checkout flow is tested across mobile and desktop before launch.", icon: Package, duration: "Week 6" },
              { step: "05", title: "Launch & Handoff", desc: "Zero-downtime launch. Every WooCommerce URL 301-redirected. DNS updated. SSL verified. You get full code ownership and admin access on day one.", icon: Rocket, duration: "Week 7" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow group"
              >
                <span className="text-4xl font-black text-stone-200 block mb-3 leading-none">{item.step}</span>
                <div className="w-9 h-9 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-3">
                  <item.icon className="w-4 h-4 text-cognac" />
                </div>
                <h3 className="text-sm font-bold text-charcoal mb-1">{item.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed mb-3">{item.desc}</p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cognac bg-stone-50 border border-stone-100 px-2 py-1 rounded-full">{item.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DUAL CTA */}
      <section className="py-10 md:py-20 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8 md:mb-12">Two Ways to Start</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-card">
              <div className="text-stone-500 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">WooCommerce Optimization</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Not ready to migrate yet? We&apos;ll tune your WooCommerce store for maximum performance within the platform&apos;s constraints.
              </p>
              <ul className="space-y-3 mb-8">
                {["Checkout speed optimization", "Plugin audit & dead weight removal", "Caching & CDN setup", "Security hardening", "SEO technical fixes", "30-day support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-stone-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all"
              >
                Optimize My WooCommerce
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-stone-50/50 border border-stone-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-charcoal text-white text-xs font-bold rounded-full">Recommended</div>
              <div className="text-cognac text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Full Migration to Custom Code</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                A complete rebuild on custom Next.js. Faster checkout, zero platform fees, and a storefront you own forever.
              </p>
              <ul className="space-y-3 mb-8">
                {["Under a second checkout load time", "All products, orders & accounts migrated", "Native Stripe + PayPal + Apple Pay", "Zero monthly plugin fees", "Custom pricing logic built in", "100% code & IP ownership", "30-day money-back guarantee"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-stone-800 transition-all"
              >
                Migrate My Store
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-10 md:py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-cognac" />
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Common Questions</h2>
          </div>
          <p className="text-stone-600 text-center mb-12">Everything you need to know before migrating your store.</p>

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
                  className="w-full text-left p-5 rounded-xl bg-white border border-stone-200 hover:border-stone-300 transition-all"
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

      {/* 8. GUARANTEE */}
      <section className="py-10 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl bg-green-50 border border-green-200 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> 30-Day Money-Back Guarantee
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">2x Faster Checkout. Or Your Deposit Back.</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We only take a deposit to start. You don&apos;t pay the balance until the project is delivered and you&apos;re satisfied. If your new store&apos;s checkout isn&apos;t at least 2x faster than your WooCommerce store within 30 days of launch, we refund your deposit. No questions asked.
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

      {/* Related Services */}
      <section className="py-10 md:py-16 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-charcoal text-center mb-3">Explore More Services</h2>
          <p className="text-stone-400 text-center mb-10 text-sm">Every migration is different. Find the right path for your platform.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/ecommerce" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <ShoppingBag className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">E-Commerce Solutions</h3>
                <p className="text-stone-400 text-xs mt-0.5">Custom storefronts with any payment stack.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
            <Link href="/services/wordpress-migration" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Wrench className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">WordPress Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Escape plugin bloat for good.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
            <Link href="/services/custom-engineering" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Code2 className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">Custom Engineering</h3>
                <p className="text-stone-400 text-xs mt-0.5">Build software that scales to millions.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
