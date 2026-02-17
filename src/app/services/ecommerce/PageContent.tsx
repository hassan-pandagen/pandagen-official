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
    q: "What is headless Shopify?",
    a: "Headless Shopify means you keep Shopify for everything it's great at — inventory, orders, payments, and customer management — but replace the slow Liquid theme with a custom-coded storefront (Next.js) that loads in under 1 second. Same dashboard, 4x faster store."
  },
  {
    q: "Will my Shopify apps still work?",
    a: "Your backend apps (inventory, email, shipping) work as before. Frontend apps (review widgets, upsell popups) get rebuilt as native features in your custom code — so they load instantly instead of injecting slow JavaScript. You stop paying monthly app fees for features we build once."
  },
  {
    q: "How long does a headless migration take?",
    a: "Typically 6-8 weeks. Week 1-2: API architecture and design. Weeks 3-6: Build custom storefront (product pages, cart, checkout). Week 7: Testing with live Shopify data. Week 8: Launch with zero downtime."
  },
  {
    q: "Will I lose sales during the migration?",
    a: "No. Your existing Shopify store stays live throughout the entire build. We develop the new storefront in parallel. On launch day, we simply point your domain to the new site. Zero downtime, zero lost sales."
  },
  {
    q: "How much does a headless Shopify storefront cost?",
    a: "A custom headless storefront typically ranges from $10,000-$30,000 depending on complexity (number of products, custom checkout flows, subscription features). Most stores recover this investment within 4-6 months through eliminated app fees and increased conversion rates."
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-600/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400 mb-8">
            <Zap className="w-4 h-4" /> E-Commerce Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-tight"
          >
            Stop Paying <br />
            <span
              style={{
                backgroundImage: 'linear-gradient(to right, #4ade80, #34d399, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Shopify App Taxes.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            We migrate high-volume brands from standard Shopify themes to high-performance custom-coded storefronts (Next.js). <span className="text-white font-medium">Keep the Shopify backend, destroy the frontend limitations.</span>
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
            <Link href="#our-work" className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:border-green-400/50 hover:bg-green-500/5 transition-all flex items-center justify-center gap-2">
              See Our Work <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. SHOPIFY KILLER - Comparison Card */}
      <ShopifyKiller />

      {/* 3. OUR WORK - Portfolio Section */}
      <section id="our-work" className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">See It In Action</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">We don&apos;t just talk about speed. We ship it.</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-b from-green-500/30 via-white/10 to-transparent"
          >
            <div className="rounded-2xl bg-gradient-to-b from-[#080c08] to-[#050505] p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs text-green-400 font-bold mb-4">
                    <ShoppingBag className="w-3 h-3" /> E-Commerce
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">pandacodegen.com</h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    Our own site is built with the same Next.js architecture we use for e-commerce clients. 98/100 PageSpeed. Under 1 second load time. Zero plugins.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/10">
                      <p className="text-2xl font-black text-neon">98</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">PageSpeed</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/10">
                      <p className="text-2xl font-black text-green-400">0.8s</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">Load Time</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/10">
                      <p className="text-2xl font-black text-emerald-400">$0</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">Hosting</p>
                    </div>
                  </div>
                  <a
                    href="https://pagespeed.web.dev/analysis/https-www-pandacodegen-com/hx2nbmjk0x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-neon hover:underline"
                  >
                    Verify on PageSpeed Insights <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="relative">
                  <div className="rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 p-6 space-y-5">
                    <h4 className="text-white font-bold text-center mb-2">Shopify Theme vs Custom Code</h4>
                    {/* Speed comparison */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Shopify Theme</span>
                        <span className="text-red-400 font-medium">3.8s</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-3">
                        <div className="bg-red-500/80 h-3 rounded-full transition-all" style={{ width: '85%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Custom (Next.js)</span>
                        <span className="text-green-400 font-bold">0.8s</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full transition-all" style={{ width: '20%' }} />
                      </div>
                    </div>
                    {/* Divider */}
                    <div className="border-t border-white/10 pt-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-red-400 text-2xl font-bold">38</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Theme PageSpeed</p>
                        </div>
                        <div>
                          <p className="text-green-400 text-2xl font-bold">98</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider">Custom PageSpeed</p>
                        </div>
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
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Shopify App Trap</h2>
          </div>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            These are the exact problems Shopify store owners tell us about before they switch:
          </p>

          <div className="space-y-4">
            {[
              { pain: "You are paying $1,500+/mo in 'App Taxes'", detail: "Yotpo, PageFly, Rebuy, Bold... each app charges $20-200/month. Combined, you're spending more on apps than your actual Shopify plan." },
              { pain: "Your Mobile Speed Score is stuck below 40", detail: "Every app injects JavaScript into your store. 10 apps = 10 extra scripts loading on every page. Your customers wait, then leave." },
              { pain: "You can't customize the URL structure for SEO", detail: "Shopify forces /collections/ and /products/ in every URL. You can't optimize URL structure for search rankings." },
              { pain: "You want a custom checkout but Liquid blocks you", detail: "Shopify's template language (Liquid) has hard limits. Custom checkout flows, unique product builders, or personalization? Not without going headless." },
              { pain: "Your store looks like every other Shopify store", detail: "Standard themes all look the same. Your brand deserves a unique shopping experience that stands out, not another template." },
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

      {/* 5. HOW IT WORKS - Headless Process */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">How We Go Headless</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">Your existing Shopify store stays live. We build in parallel. Zero downtime.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "Store Audit & API Architecture", desc: "We audit your apps, theme speed, and conversion data. Then we map out how every feature connects through Shopify's Storefront API — products, cart, checkout, and customer accounts.", duration: "Weeks 1-2" },
              { step: "02", title: "Custom Storefront Build", desc: "We build your new storefront in Next.js: product pages that load instantly, a cart that never lags, and search that actually works. Every app feature gets rebuilt natively — no more third-party JavaScript.", duration: "Weeks 3-6" },
              { step: "03", title: "Live Data Testing", desc: "We connect to your real Shopify data. Test every product, every variant, every checkout flow. Your team reviews and approves before anything goes live.", duration: "Week 7" },
              { step: "04", title: "Launch & Optimize", desc: "We point your domain to the new storefront. Your Shopify dashboard stays exactly the same. Then we A/B test, monitor Core Web Vitals, and optimize conversion rates.", duration: "Week 8" },
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
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 font-mono font-bold text-sm">
                    {item.step}
                  </div>
                  {i < 3 && <div className="w-px h-8 bg-white/10 mt-2" />}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
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
            <Code2 className="w-4 h-4" /> The Headless Advantage
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Same Shopify Backend. 10x Better Frontend.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Going headless means you keep Shopify&apos;s powerful inventory, payments, and order management. But your customers see a lightning-fast, beautifully custom storefront that converts at 2-3x the rate.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: ArrowRightLeft, title: "Theme to Headless", desc: "Safely migrate from Liquid to custom code (Next.js). Zero data loss. Zero downtime. Your products, orders, and customers stay intact." },
              { icon: Globe, title: "Global CDN Delivery", desc: "Serve your store from the Edge. Instant loading in Dubai, New York, and London. Every millisecond faster = more conversions." },
              { icon: CreditCard, title: "Custom Checkout", desc: "Bypass Shopify limitations. Integrate Stripe, custom upsells, and subscriptions exactly how you want them." },
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">Ready to Scale Your Store?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.08] border border-white/10 hover:border-green-500/30 transition-colors">
              <div className="text-green-400 text-sm font-bold uppercase tracking-wider mb-4">Option A</div>
              <h3 className="text-2xl font-bold text-white mb-4">Shopify Optimization</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Not ready for headless? We&apos;ll optimize your current Shopify theme for better speed, SEO, and conversions within the platform.
              </p>
              <ul className="space-y-3 mb-8">
                {["Theme speed optimization", "App audit & cleanup", "SEO improvements", "Conversion rate fixes", "30-day support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button
                data-cal-namespace="discovery"
                data-cal-link="pandagen/discovery"
                data-cal-config='{"layout":"month_view"}'
                className="w-full px-6 py-4 border border-green-500/30 text-green-400 font-bold rounded-full hover:bg-green-500/10 transition-all"
              >
                Optimize My Shopify Store
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-neon/5 to-transparent border border-neon/30 hover:border-neon/50 transition-colors relative overflow-hidden">
              <div className="absolute top-4 right-4 px-3 py-1 bg-neon/20 text-neon text-xs font-bold rounded-full">Recommended</div>
              <div className="text-neon text-sm font-bold uppercase tracking-wider mb-4">Option B</div>
              <h3 className="text-2xl font-bold text-white mb-4">Go Headless (Custom-Coded)</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                A fully custom storefront that keeps Shopify&apos;s backend but eliminates all frontend limitations. The ultimate e-commerce upgrade.
              </p>
              <ul className="space-y-3 mb-8">
                {["Sub-second load times", "Zero monthly app fees", "Custom checkout flows", "90-95/100 PageSpeed score", "Unique brand experience", "30-day money-back guarantee"].map((item, i) => (
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
                Go Headless
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
          <p className="text-gray-400 text-center mb-12">Everything you need to know about going headless.</p>

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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">2x Speed Increase. Guaranteed.</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We guarantee a 2x Speed Increase post-migration. If your Core Web Vitals don&apos;t turn green, we refund the final payment. Stop losing sales to slow loading.
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

      <Footer />
    </main>
  );
}