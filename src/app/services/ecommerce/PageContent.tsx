"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Globe, CreditCard, ArrowRightLeft, ExternalLink, ShoppingBag, HelpCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import ShopifyKiller from "@/components/sections/ShopifyKiller";

const faqs = [
  {
    q: "What is custom Shopify?",
    a: "Custom Shopify means you keep Shopify for everything it's great at (inventory, orders, payments, and customer management), but replace the slow Liquid theme with a custom coded storefront that loads in under 1 second. Same dashboard, 4x faster store."
  },
  {
    q: "Will my Shopify apps still work?",
    a: "Your backend apps (inventory, email, shipping) work as before. Frontend apps (review widgets, upsell popups) get rebuilt as native features in your custom code, so they load instantly instead of injecting slow JavaScript. You stop paying monthly app fees for features we build once."
  },
  {
    q: "How long does a custom storefront migration take?",
    a: "Typically 6-8 weeks. Week 1-2: API architecture and design. Weeks 3-6: Build custom storefront (product pages, cart, checkout). Week 7: Testing with live Shopify data. Week 8: Launch with zero downtime."
  },
  {
    q: "Will I lose sales during the migration?",
    a: "No. Your existing Shopify store stays live throughout the entire build. We develop the new storefront in parallel. On launch day, we simply point your domain to the new site. Zero downtime, zero lost sales."
  },
  {
    q: "How much does a custom Shopify storefront cost?",
    a: "A custom storefront typically ranges from $10,000-$30,000 depending on complexity (number of products, custom checkout flows, subscription features). Most stores recover this investment within 4-6 months through eliminated app fees and increased conversion rates."
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
      <section className="relative pt-20 md:pt-24 md:pt-40 pb-12 md:pb-20 px-6">
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-8">
            <Zap className="w-4 h-4" /> E-Commerce Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-tight"
          >
            Stop Losing Sales <br />
            <span className="font-serif italic text-cognac">
              to Slow Shopify.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            We migrate high-volume brands from standard Shopify themes to high performance custom coded storefronts. <span className="text-charcoal font-medium">Keep the Shopify backend, destroy the frontend limitations.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-xs text-sm">
              <span className="text-cognac font-black">98/100</span>
              <span className="text-stone-500">PageSpeed</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-xs text-sm">
              <span className="text-cognac font-black">3.8s → 0.8s</span>
              <span className="text-stone-500">Load Time</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-xs text-sm">
              <span className="text-yellow-500 font-black">★★★★★</span>
              <span className="text-stone-500">Clutch Verified</span>
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
            <Link href="#our-work" className="px-8 py-4 bg-white border border-stone-200 text-charcoal font-medium rounded-full hover:border-cognac/30 transition-all flex items-center justify-center gap-2">
              See Our Work <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. SHOPIFY KILLER - Comparison Card */}
      <ShopifyKiller />

      {/* 3. OUR WORK - Portfolio Section */}
      <section id="our-work" className="py-10 md:py-20 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">See It In Action</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">We don&apos;t just talk about speed. We ship it.</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-white border border-stone-200 shadow-card p-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-50 border border-stone-200 text-xs text-cognac font-bold mb-4">
                  <ShoppingBag className="w-3 h-3" /> E-Commerce
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">pandacodegen.com</h3>
                <p className="text-stone-600 text-base leading-relaxed mb-6">
                  Our own site is built with the same Next.js architecture we use for e-commerce clients. 98/100 PageSpeed. Under 1 second load time. Zero plugins.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 rounded-xl bg-white border border-stone-200 shadow-card">
                    <p className="text-2xl font-black text-cognac">98</p>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wider">PageSpeed</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white border border-stone-200 shadow-card">
                    <p className="text-2xl font-black text-green-600">0.8s</p>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wider">Load Time</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white border border-stone-200 shadow-card">
                    <p className="text-2xl font-black text-emerald-600">$0</p>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wider">Hosting</p>
                  </div>
                </div>
                <a
                  href="https://pagespeed.web.dev/analysis/https-www-pandacodegen-com/hx2nbmjk0x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cognac hover:underline"
                >
                  Verify on PageSpeed Insights <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="relative">
                <div className="rounded-xl bg-stone-50 border border-stone-200 p-6 space-y-5">
                  <h4 className="text-charcoal font-bold text-center mb-2">Shopify Theme vs Custom Code</h4>
                  {/* Speed comparison */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-stone-600">Shopify Theme</span>
                      <span className="text-red-600 font-medium">3.8s</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-red-500 h-3 rounded-full transition-all" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-stone-600">Custom Coded</span>
                      <span className="text-green-600 font-bold">0.8s</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-500 h-3 rounded-full transition-all" style={{ width: '20%' }} />
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="border-t border-stone-200 pt-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-red-600 text-2xl font-bold">38</p>
                        <p className="text-[10px] text-stone-500 uppercase tracking-wider">Theme PageSpeed</p>
                      </div>
                      <div>
                        <p className="text-green-600 text-2xl font-bold">98</p>
                        <p className="text-[10px] text-stone-500 uppercase tracking-wider">Custom PageSpeed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PAIN POINTS */}
      <section className="py-12 md:py-24 px-6 bg-[#0F172A]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-sm font-bold uppercase tracking-widest mb-6">
              <AlertTriangle className="w-4 h-4" /> Profit Warning
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Shopify App Trap</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These are the exact problems Shopify store owners tell us about before they switch:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, pain: "App Fees Are Eating Your Profit Margin", detail: "Yotpo at $200/mo, PageFly at $100/mo, Rebuy at $150/mo, Bold subscriptions on top. Your apps cost more than your Shopify plan. That's $1,500+ per month going to SaaS fees instead of growth." },
              { icon: AlertTriangle, pain: "Every Second of Load Time Costs You 7% in Conversions", detail: "Every app injects JavaScript that loads before your customer sees a single product. At $100k/month revenue, a 2-second delay costs $14,000/month in missed sales. Google's data confirms it every time." },
              { icon: XCircle, pain: "Shopify's URL Structure Is Capping Your SEO", detail: "Shopify forces /collections/ and /products/ into every URL. You can't clean them up. Competitors with custom storefronts rank for cleaner URLs. You're fighting Google with a built-in handicap." },
              { icon: Code2, pain: "Liquid Blocks the Checkout Experience That Converts", detail: "One-page checkout, custom upsell flows, subscription bundling. Liquid's template system has hard limits. Going headless means your checkout works exactly how your conversion data says it should." },
              { icon: XCircle, pain: "Your Store Looks Like 50,000 Other Shopify Stores", detail: "Standard Shopify themes are deployed by hundreds of thousands of stores. Your competitors are literally running the same template. A custom storefront is the only way to build a brand experience that's 100% yours." },
              { icon: Globe, pain: "AI Search Won't Recommend a Slow Storefront", detail: "ChatGPT, Perplexity, and Google's AI Overviews now answer 'where should I buy X?' directly. They surface fast, structured storefronts. Shopify's bloated JavaScript makes you invisible to the AI search layer now driving 20-30% of buying decisions." },
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

      {/* 5. HOW IT WORKS - Headless Process */}
      <section className="py-10 md:py-20 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How We Go Headless</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">Your existing Shopify store stays live. We build in parallel. Zero downtime.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "Store Audit & API Architecture", desc: "We audit your apps, theme speed, and conversion data. Then we map out how every feature connects through Shopify's Storefront API: products, cart, checkout, and customer accounts.", duration: "Weeks 1-2" },
              { step: "02", title: "Custom Storefront Build", desc: "We build your new storefront in Next.js: product pages that load instantly, a cart that never lags, and search that actually works. Every app feature gets rebuilt natively. No more third-party JavaScript.", duration: "Weeks 3-6" },
              { step: "03", title: "Live Data Testing", desc: "We connect to your real Shopify data. Test every product, every variant, every checkout flow. Your team reviews and approves before anything goes live.", duration: "Week 7" },
              { step: "04", title: "Launch & Optimize", desc: "We point your domain to the new storefront. Your Shopify dashboard stays exactly the same. Then we A/B test, monitor Core Web Vitals, and optimize conversion rates.", duration: "Week 8" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center text-cognac font-mono font-bold text-sm">
                    {item.step}
                  </div>
                  {i < 3 && <div className="w-px h-8 bg-border mt-2" />}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-stone-50 border border-stone-200 text-stone-600">{item.duration}</span>
                  </div>
                  <p className="text-stone-600 text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE UPGRADE PATH */}
      <section className="py-10 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-6">
            <Code2 className="w-4 h-4" /> The Headless Advantage
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Same Shopify Backend. 10x Better Frontend.
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            Going headless means you keep Shopify&apos;s powerful inventory, payments, and order management. But your customers see a lightning-fast, beautifully custom storefront that converts at 2-3x the rate.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: ArrowRightLeft, title: "Theme to Custom", desc: "Safely migrate from Liquid to custom code. Zero data loss. Zero downtime. Your products, orders, and customers stay intact." },
              { icon: Globe, title: "Global CDN Delivery", desc: "Serve your store from the Edge. Instant loading in Dubai, New York, and London. Every millisecond faster = more conversions." },
              { icon: CreditCard, title: "Custom Checkout", desc: "Bypass Shopify limitations. Integrate Stripe, custom upsells, and subscriptions exactly how you want them." },
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
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8 md:mb-12">Ready to Scale Your Store?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-card hover:border-green-300 transition-colors">
              <div className="text-green-600 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Shopify Optimization</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                Not ready for headless? We&apos;ll optimize your current Shopify theme for better speed, SEO, and conversions within the platform.
              </p>
              <ul className="space-y-3 mb-8">
                {["Theme speed optimization", "App audit & cleanup", "SEO improvements", "Conversion rate fixes", "30-day support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 bg-white border border-stone-200 text-charcoal font-bold rounded-full hover:border-cognac/30 transition-all"
              >
                Optimize My Shopify Store
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-stone-50/50 border border-cognac/20 hover:border-cognac/40 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-charcoal/10 text-cognac text-xs font-bold rounded-full">Recommended</div>
              <div className="text-cognac text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Go Headless (Custom Coded)</h3>
              <p className="text-stone-600 text-base mb-6 leading-relaxed">
                A fully custom storefront that keeps Shopify&apos;s backend but eliminates all frontend limitations. The ultimate e-commerce upgrade.
              </p>
              <ul className="space-y-3 mb-8">
                {["Under a second load times", "Zero monthly app fees", "Custom checkout flows", "90-95/100 PageSpeed score", "Unique brand experience", "30-day money-back guarantee"].map((item, i) => (
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
                Go Headless
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
          <p className="text-stone-600 text-center mb-12">Everything you need to know about going headless.</p>

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

      {/* 9. GUARANTEE */}
      <section className="py-10 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl bg-green-50 border border-green-200 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> 30-Day Money-Back Guarantee (from delivery)
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">2x Speed Increase. Guaranteed.</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We guarantee a 2x Speed Increase post-migration. If your Core Web Vitals don&apos;t turn green, we refund the final payment. Stop losing sales to slow loading.
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
          <p className="text-stone-400 text-center mb-10 text-sm">Research, case studies, and guides on headless e-commerce.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/blog/shopify-headless", title: "Why Go Headless with Shopify?", desc: "The performance case for decoupling your Shopify storefront." },
              { href: "/blog/shopify-app-costs-real-monthly-bill", title: "Shopify App Costs: The Real Bill", desc: "How app fees quietly eat your margins every month." },
              { href: "/blog/shopify-plus-still-slow", title: "Why Shopify Plus Is Still Slow", desc: "Liquid themes cap your speed even on enterprise plans." },
              { href: "/blog/shopify-slow-losing-sales", title: "Your Slow Shopify Is Losing Sales", desc: "Every second of load time costs you real revenue." },
              { href: "/blog/shopify-conversion-rate-speed-fix", title: "Speed Fix That Lifts Conversions", desc: "How faster load times directly increase conversion rates." },
              { href: "/blog/what-is-headless-commerce", title: "What Is Headless Commerce?", desc: "A plain-English explainer for store owners and founders." },
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

      {/* Related Services - Internal Linking */}
      <section className="py-10 md:py-16 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-charcoal text-center mb-3">Explore More Services</h2>
          <p className="text-stone-400 text-center mb-10 text-sm">Every migration is different. Find the right path for your platform.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/services/wordpress-migration" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Code2 className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">WordPress Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Escape plugin bloat. Get load times under 1 second with custom code.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
            <Link href="/services/custom-engineering" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Zap className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">Custom Engineering</h3>
                <p className="text-stone-400 text-xs mt-0.5">SaaS platforms, dashboards, and APIs built from scratch.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
            <Link href="/services/wix" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                <Globe className="w-5 h-5 text-cognac" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">Wix Migration</h3>
                <p className="text-stone-400 text-xs mt-0.5">Break free from Wix limitations. Own your code.</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-cognac group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Author Attribution */}
      <section className="py-10 border-t border-stone-200 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Built by</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-start gap-4">
              <Link href="/about/hassan" className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-charcoal font-bold text-lg">H</div>
              </Link>
              <div>
                <Link href="/about/hassan" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Hassan Jamal</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Engineer. Headless Shopify builds that score 95 to 100 on PageSpeed. Full storefront migrations from Liquid templates to custom Next.js storefronts, with zero downtime and zero lost orders.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Link href="/about/imran" className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-charcoal font-bold text-lg">I</div>
              </Link>
              <div>
                <Link href="/about/imran" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Imran</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Solutions Architect. Scopes headless migrations to protect your conversion rate and ad spend ROI. 8+ years in enterprise e-commerce architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}