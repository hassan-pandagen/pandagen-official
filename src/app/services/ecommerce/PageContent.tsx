"use client";

import { motion } from "@/components/ui/motion";
import { CheckCircle2, XCircle, ArrowRight, Zap, ShieldCheck, DollarSign, TrendingUp, AlertTriangle, Code2, Globe, CreditCard, ArrowRightLeft, ExternalLink, ShoppingBag, HelpCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialProof from "@/components/home/SocialProof";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import ShopifyKiller from "@/components/sections/ShopifyKiller";
import PartnerPromise from "@/components/services/PartnerPromise";

const faqs = [
  {
    q: "What is custom Shopify?",
    a: "Custom Shopify means you keep Shopify for everything it's great at (inventory, orders, payments, and customer management), but replace the slow Liquid theme with a custom coded storefront that loads in under 1 second. Same dashboard, with the storefront layer rebuilt for speed. The actual improvement depends on your current theme, apps and catalogue, so we measure your baseline before quoting."
  },
  {
    q: "Will my Shopify apps still work?",
    a: "Your backend apps (inventory, email, shipping) work as before. Frontend apps (review widgets, upsell popups) get rebuilt as native features in your custom code, so they load instantly instead of injecting slow JavaScript. You stop paying monthly app fees for features we build once."
  },
  {
    q: "How long does a custom storefront migration take?",
    a: "Three weeks for most stores. Days 1-3: API architecture and design. Days 4-14: Custom storefront build (product pages, cart, checkout) accelerated by AI-paired development with Claude and Cursor. Days 15-18: Testing with live Shopify data. Days 19-21: staged cutover with a documented rollback path. Compare any quote on like-for-like scope rather than on headline timeline. AI tooling collapses that timeline without cutting corners."
  },
  {
    q: "Will I lose sales during the migration?",
    a: "No. Your existing Shopify store stays live throughout the entire build. We develop the new storefront in parallel. On launch day, we simply point your domain to the new site. Your existing store stays live until the new one is verified, and a rollback path is documented before cutover. Universal zero interruption is not promised."
  },
  {
    q: "How much does a custom Shopify storefront cost?",
    a: "Compare quotes on like-for-like scope. Four tiers: Starter stores start at $1,500 (small catalogs, basic Shopify Storefront API). Growth builds start at $3,500 (30 to 100 products, custom features). Scale builds are $5,000 to $10,000 (subscriptions, custom logic, large catalogs, 30+ pages). Scale+ is $10,000+ for enterprise headless commerce, custom-quoted after a scoping call. Whether it pays back, and over what period, depends on your own app bill and your own measured results."
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-6">
            <Zap className="w-4 h-4" /> Shopify Speed Optimization
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal tracking-tight md:tracking-tighter mb-4 leading-[1.08] md:leading-tight break-words"
          >
            How fast is your Shopify storefront? <br />
            <span className="font-serif italic text-cognac">
              Measure it, then decide whether a theme change or a rebuild is the answer.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 leading-relaxed mb-6 max-w-2xl mx-auto"
          >
            We migrate high-volume brands from standard Shopify themes to high performance custom coded storefronts. <span className="text-charcoal font-medium">Keep the Shopify backend, destroy the frontend limitations.</span>
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
              Book Free Store Audit <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="#our-work" className="px-8 py-4 bg-white border border-cognac/30 text-cognac font-bold rounded-full hover:bg-cognac hover:text-white transition-all flex items-center justify-center gap-2">
              See Our Work <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="text-sm text-stone-500 mt-4 text-center max-w-xl mx-auto leading-relaxed">30-min call. Drop your store URL when you book. We test your speed live, show you what the measurement does and does not establish, and quote you on the spot. <span className="text-charcoal font-medium">Best fit for stores doing $50K to $5M/year.</span></p>
        </div>
      </section>

      {/* Answer-first summary, extractable passage in the citation zone */}
      <section className="px-6 pb-6 md:pb-8 bg-paper">
        <div className="container mx-auto max-w-3xl">
          <p data-speakable="true" className="text-base md:text-lg text-stone-600 leading-relaxed text-center">
            <strong className="text-charcoal">PandaCodeGen rebuilds slow Shopify and WooCommerce stores as custom headless storefronts on Next.js,</strong> keeping your existing backend for products, orders, and payments. Builds are fixed-price from $1,500 for smaller catalogs and $5,000 to $10,000 for headless commerce, target sub-second load times, and ship with a written 90+ Lighthouse handover target on mobile and desktop for the agreed representative pages, verified across three recorded runs. The result replaces monthly app fees with owned code. How much speed improves, and what that is worth commercially, depends on your current theme, apps and catalogue.
          </p>
        </div>
      </section>

      {/* 2. SHOPIFY KILLER - Comparison Card */}
      <ShopifyKiller />

      {/* CLIENT RECEIPT - Matt Conner testimonial + Hassan response */}
      <section className="py-10 md:py-16 px-6 bg-paper">
        <div className="container mx-auto max-w-3xl">
          <div className="p-6 md:p-10 rounded-2xl bg-white border border-stone-200 shadow-xs flex gap-5 items-start">
            <div className="w-14 h-14 rounded-full bg-cognac/10 border border-cognac/20 flex items-center justify-center text-cognac font-bold text-xl shrink-0">M</div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-3">Client receipt, on the record</p>
              <p className="text-lg md:text-xl text-charcoal leading-relaxed font-medium italic mb-3">
                &ldquo;Hassan rebuilt MyCustomPatches, a WordPress + WooCommerce store, onto a custom Next.js storefront. The performance figures for that project are withdrawn pending reconciliation of their test profiles, dates and conditions. Fixed price. Unlimited revisions. Live at mycustompatches.net. &rdquo;
              </p>
              <p className="text-sm text-stone-500">Matt Conner, owner, MC Patches LLC, an independent client. Published with permission. <a href="https://clutch.co/profile/panda-code-gen" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">Clutch review</a> &middot; <a href="https://www.goodfirms.co/company/panda-code-gen" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline">GoodFirms review</a></p>
              <p className="text-sm text-stone-700 mt-4 pt-4 border-t border-stone-100">What that project involved, and what it did not establish, is set out in the case study. Refund terms for your project are stated in the written scope. No hourly billing. No subcontractors. Hassan Jamal, Austin, TX.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR WORK - Real Client Case Studies */}
      <section id="our-work" className="py-10 md:py-14 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-3">Real Clients. Real Migrations.</p>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4 tracking-tight leading-tight">
              We ship what we <span className="font-serif italic text-cognac">promise.</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg">Four stores we built or migrated. Live URLs, verifiable PageSpeed scores, honest before/after numbers.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                name: "Panda Patches",
                url: "pandapatches.com",
                href: "https://pandapatches.com",
                category: "Custom Patches E-Commerce",
                platform: "WordPress → Custom",
                pagespeed: 92,
                loadTime: "< 1s",
                saved: "$145+/mo",
                note: "Owned by co-founder Imran Raza, built and operated by PandaCodeGen. Migrated from WordPress + WooCommerce to a custom Next.js storefront with Square payments. Cut monthly tool bill from $200+ to about $55 (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator). 1 Million+ patches delivered.",
              },
              {
                name: "MyCustomPatches",
                url: "mycustompatches.net",
                href: "https://mycustompatches.net",
                category: "Custom Patches (US Market)",
                platform: "WordPress → Custom",
                pagespeed: 95,
                loadTime: "Withdrawn",
                saved: "Withdrawn",
                note: "Migrated from a slow WordPress + WooCommerce store. WordPress to custom Next.js migration. Performance figures withdrawn pending reconciliation of test profile, date and conditions.",
              },
              {
                name: "Saforne",
                url: "saforne.com",
                href: "https://saforne.com",
                category: "Luxury Leather DTC",
                platform: "Custom Next.js Build",
                pagespeed: 96,
                loadTime: "< 1s",
                saved: "Premium UX",
                note: "Handcrafted UK leather brand. Custom ecommerce with Stripe, Sanity, multi-currency support. Built in 2 weeks.",
              },
              {
                name: "Obare Magazine",
                url: "obare.vercel.app",
                href: "https://obare.vercel.app",
                category: "Editorial Magazine",
                platform: "Wix → Custom",
                pagespeed: 95,
                loadTime: "< 1s",
                saved: "225K IG",
                note: "Editorial design magazine with 225K Instagram following. Migrated from Wix to custom Next.js.",
              },
            ].map((client, i) => (
              <motion.a
                key={i}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group block p-6 md:p-7 rounded-2xl bg-white border border-stone-200 hover:border-cognac/40 shadow-card hover:shadow-elevated transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-1">{client.category}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal group-hover:text-cognac transition-colors truncate">{client.name}</h3>
                    <p className="text-sm text-stone-500 mt-1">{client.url}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-600 group-hover:text-cognac transition-colors shrink-0 mt-1" />
                </div>

                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-stone-50 border border-stone-200 text-[11px] font-bold text-cognac mb-4">
                  <ArrowRightLeft className="w-3 h-3" /> {client.platform}
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-5">{client.note}</p>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-stone-100">
                  <div>
                    <p className="text-2xl font-black text-emerald-600 leading-none tracking-tight">{client.pagespeed}</p>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wider mt-1 font-bold">PageSpeed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-charcoal leading-none tracking-tight">{client.loadTime}</p>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wider mt-1 font-bold">Load Time</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-cognac leading-none tracking-tight">{client.saved}</p>
                    <p className="text-[10px] text-stone-500 uppercase tracking-wider mt-1 font-bold">Outcome</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/work" className="inline-flex items-center gap-2 text-cognac font-semibold hover:underline">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3b. SOCIAL PROOF — moved up to stack with Our Work for concentrated proof flow */}
      <SocialProof />

      {/* 4. HOW IT WORKS - Headless Process */}
      <section className="py-10 md:py-14 px-6 border-y border-stone-200 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-4">How We Go Headless</h2>
          <p className="text-stone-600 text-center mb-8 md:mb-16 max-w-2xl mx-auto">Your existing Shopify store stays live. We build in parallel with AI-paired development. <span className="font-semibold text-charcoal">Three weeks to launch</span>, with a staged cutover and a documented rollback path.</p>

          <div className="space-y-8">
            {[
              { step: "01", title: "Store Audit & API Architecture", desc: "We audit your apps, theme speed, and conversion data. Then we map how every feature connects through Shopify's Storefront API: products, cart, checkout, customer accounts. AI tooling compresses discovery from days to hours.", duration: "Days 1-3" },
              { step: "02", title: "Custom Storefront Build", desc: "We build your new storefront in Next.js with AI-paired development: product pages that load instantly, a cart that never lags, and search that actually works. Every app feature gets rebuilt natively. Claude and Cursor handle scaffolding so we ship in weeks, not months.", duration: "Days 4-14" },
              { step: "03", title: "Live Data Testing", desc: "We connect to your real Shopify data. Test every product, every variant, every checkout flow. Your team reviews and approves before anything goes live.", duration: "Days 15-18" },
              { step: "04", title: "Launch & Optimize", desc: "We point your domain to the new storefront. Your Shopify dashboard stays exactly the same. Then we A/B test, monitor Core Web Vitals, and optimize conversion rates.", duration: "Days 19-21" },
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

      {/* 5. PAIN POINTS */}
      <section className="py-12 md:py-20 px-6 bg-[#0F172A]">
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
              { icon: DollarSign, pain: "App Fees Are Eating Your Profit Margin", detail: "Review, page-builder, upsell and subscription apps each carry their own recurring charge, and several bill outside your Shopify invoice. Read your own app bill rather than a list price. That total is worth reconciling against what each app actually does. SaaS fees instead of growth." },
              { icon: AlertTriangle, pain: "Speed Can Obstruct a Purchase. It Cannot Be Multiplied Into a Number.", detail: "Every app injects JavaScript that loads before your customer sees a single product. No public per-second figure can be multiplied out into your monthly loss, because those studies were measured on other people's stores. Build the case from your own funnel instead: eligible sessions, your measured completion rate, and a tested change." },
              { icon: XCircle, pain: "Shopify's URL Structure Is Fixed, So Plan Canonicals Around It", detail: "Shopify forces /collections/ and /products/ into every URL. You can't clean them up. Competitors with custom storefronts rank for cleaner URLs. Decide how canonicals and internal links handle a product reachable at more than one address." },
              { icon: Code2, pain: "Liquid Blocks the Checkout Experience That Converts", detail: "One-page checkout, custom upsell flows, subscription bundling. Liquid's template system has boundaries that configuration does not move. Going headless means your checkout works exactly how your conversion data says it should." },
              { icon: XCircle, pain: "Your Store Looks Like 50,000 Other Shopify Stores", detail: "Standard Shopify themes are deployed by hundreds of thousands of stores. Your competitors are literally running the same template. A custom storefront is the only way to build a brand experience that's 100% yours." },
              { icon: Globe, pain: "AI Search Won't Recommend a Slow Storefront", detail: "ChatGPT, Perplexity, and Google's AI Overviews now answer 'where should I buy X?' directly. They surface fast, structured storefronts. Check what arrives as HTML on your own product page before assuming an answer engine can read it that influences a growing share of buying decisions." },
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

      {/* 5.5. REAL BUYER VOICES — Shopify app bloat from r/Solopreneur */}
      <section id="real-voices" className="py-12 md:py-20 px-6 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-charcoal text-white rounded-full mb-4">Real Reddit Threads. Verifiable.</div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">What Shopify Merchants Are Actually Saying</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl">
            Not curated testimonials. Real Reddit threads from Shopify store owners and solopreneurs. Click the links to verify every quote.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                Most Shopify stores have 6 to 10 apps running. Every single one adds javascript to your storefront. Every script adds load time. Load time kills sales.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">No-Comparison-5247</strong> · r/Solopreneur OP</span>
                <a href="https://www.reddit.com/r/Solopreneur/comments/1subtc4/your_shopify_store_is_probably_slower_than_you/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                The apps you installed to fix conversions are sometimes what is breaking them. Worst ones: popup tools, review widgets, live chat. Loading on every page even when nobody needs them.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">No-Comparison-5247</strong> · r/Solopreneur OP</span>
                <a href="https://www.reddit.com/r/Solopreneur/comments/1subtc4/your_shopify_store_is_probably_slower_than_you/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                Slow load time is invisible until you measure it and by then you have already wasted budget testing creatives that never had a chance.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">Ok_Parfait_4006</strong> · r/Solopreneur</span>
                <a href="https://www.reddit.com/r/Solopreneur/comments/1subtc4/your_shopify_store_is_probably_slower_than_you/ohzunib/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                Most people do not realize that even after you uninstall an app, it often leaves ghost code in your theme.liquid that still tries to fetch assets. That is why your PageSpeed never improved.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">modulus3029</strong> · r/Solopreneur</span>
                <a href="https://www.reddit.com/r/Solopreneur/comments/1subtc4/your_shopify_store_is_probably_slower_than_you/oi9gd61/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                Most Shopify stores are not losing on ads, they are losing on load time from bloated apps. Speed is a conversion lever people ignore.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">Fast_Fly_8354</strong> · r/Solopreneur</span>
                <a href="https://www.reddit.com/r/Solopreneur/comments/1subtc4/your_shopify_store_is_probably_slower_than_you/oi9tcba/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs">
              <div className="text-cognac text-3xl font-serif leading-none mb-3">&ldquo;</div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">
                I had a store where I kept stacking apps thinking I was optimizing, turns out I was just slowing everything down. Removed a couple popup and chat tools and conversion actually went up without touching ads.
              </p>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100">
                <span><strong className="text-charcoal">ProfessionalCut6138</strong> · r/Solopreneur</span>
                <a href="https://www.reddit.com/r/Solopreneur/comments/1subtc4/your_shopify_store_is_probably_slower_than_you/oia27tn/" target="_blank" rel="noopener noreferrer" className="text-cognac hover:underline font-medium">Verify →</a>
              </div>
            </div>
          </div>

          {/* Bridging CTA */}
          <div className="mt-8 p-6 bg-charcoal text-white rounded-2xl text-center">
            <p className="text-lg font-bold mb-2">Headless removes app bloat at the source. No ghost code. No render-blocking JavaScript. No silent conversion killer.</p>
            <p className="text-stone-400 text-sm mb-4 max-w-2xl mx-auto">
              We rebuild Shopify stores headless on Next.js from $1,500 (most headless store rebuilds land $5,000 to $10,000). App functionality moves to native code. Same Shopify backend, with the storefront rebuilt as code you own and measure.
            </p>
            <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-cognac text-white font-bold rounded-full text-sm hover:bg-amber-700 transition-all">
              See Headless Pricing →
            </a>
          </div>
        </div>
      </section>

      {/* 6. THE UPGRADE PATH */}
      <section className="py-10 md:py-14 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac mb-6">
            <Code2 className="w-4 h-4" /> The Headless Advantage
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Same Shopify Backend. A Frontend You Own.
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            Going headless means you keep Shopify&apos;s powerful inventory, payments, and order management. But your customers see a lightning-fast, beautifully custom storefront whose performance you can measure against your own baseline. For how to build that evidence, read <Link href="/blog/shopify-slow-losing-sales" className="text-cognac hover:underline">how to build the evidence model for a slow store</Link>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: ArrowRightLeft, title: "Theme to Custom", desc: "Migrate from Liquid to custom code behind a staged cutover. Products, orders and customers are reconciled against a pre-migration export and any exceptions are reported before cutover." },
              { icon: Globe, title: "Global CDN Delivery", desc: "Serve your store from the Edge. Instant loading in Dubai, New York, and London. Measured against your own funnel, not a published multiplier." },
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

      {/* PRICING TIERS — foot-in-the-door with agency comparison */}
      <section className="py-12 md:py-20 px-6 bg-paper">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-3">Honest Pricing</p>
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4 tracking-tight leading-tight">
              Fixed price for a written scope. <br/><span className="font-serif italic text-cognac">No hourly billing.</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg">Fixed-scope pricing. No hourly traps. Start small, scale when ready.</p>
          </div>

          {/* Agency comparison strip */}
          <div className="max-w-3xl mx-auto mb-10 grid grid-cols-2 gap-4 md:gap-6">
            <div className="p-5 md:p-6 rounded-2xl bg-white border border-red-200 text-center">
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-red-500 mb-2">Other quotes</p>
              <p className="text-2xl md:text-3xl font-black text-stone-400 tracking-tight leading-none">Not assessed</p>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">Compare like-for-like scope, timeline and code ownership before comparing totals.</p>
            </div>
            <div className="p-5 md:p-6 rounded-2xl bg-white border border-emerald-300 text-center shadow-card">
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-emerald-600 mb-2">PandaCodeGen</p>
              <p className="text-2xl md:text-3xl font-black text-emerald-600 tracking-tight leading-none">From $1,500</p>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">3 week timeline. Fixed price. You own 100% of the code.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                tier: "Starter",
                price: "Starting from $1,500",
                timeline: "1 to 2 weeks",
                fit: "Small catalog, simple migration. Our Starter tier.",
                includes: [
                  "Custom Next.js storefront up to 20 products",
                  "Shopify Storefront API integration",
                  "Mobile-first responsive design",
                  "90+ Lighthouse handover target",
                  "Sanity CMS for content",
                  "15 days of free post-launch support",
                ],
                featured: false,
                cta: "Get Starter Quote",
              },
              {
                tier: "Growth",
                price: "Starting from $3,500",
                timeline: "2-3 weeks",
                fit: "30-100 products. Custom features. Serious scaling.",
                includes: [
                  "Everything in Starter",
                  "Custom product filtering & search",
                  "Advanced checkout flow",
                  "Upsell and personalization logic",
                  "Custom review system (no Yotpo)",
                  "30 days of free post-launch support",
                ],
                featured: true,
                cta: "Get Scoped Quote",
              },
              {
                tier: "Scale",
                price: "$5,000 to $10,000",
                timeline: "3 to 4 weeks",
                fit: "Subscriptions, custom logic, large catalogs, headless APIs.",
                includes: [
                  "Everything in Growth",
                  "Stripe Subscriptions (replaces Recharge)",
                  "Custom admin dashboard",
                  "Multi-currency + localization",
                  "Custom loyalty/rewards logic",
                  "30 days of free post-launch support",
                ],
                featured: false,
                cta: "Get Scoped Quote",
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-2xl p-6 md:p-8 border ${tier.featured ? 'bg-charcoal text-white border-cognac shadow-elevated' : 'bg-white text-charcoal border-stone-200 shadow-card'}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cognac text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                    Most Common
                  </div>
                )}
                <p className={`text-[11px] uppercase tracking-[0.22em] font-bold mb-2 ${tier.featured ? 'text-cognac' : 'text-stone-500'}`}>{tier.tier}</p>
                <p className={`text-2xl md:text-3xl font-black leading-tight tracking-tight mb-1 ${tier.featured ? 'text-white' : 'text-charcoal'}`}>{tier.price}</p>
                <p className={`text-sm mb-4 ${tier.featured ? 'text-stone-300' : 'text-stone-500'}`}>Ships in {tier.timeline}</p>
                <p className={`text-sm italic mb-5 leading-relaxed ${tier.featured ? 'text-stone-300' : 'text-stone-600'}`}>{tier.fit}</p>
                <ul className="space-y-2.5 mb-6">
                  {tier.includes.map((item, j) => (
                    <li key={j} className={`flex items-start gap-2 text-sm ${tier.featured ? 'text-stone-200' : 'text-stone-600'}`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${tier.featured ? 'text-cognac' : 'text-cognac'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  data-cal-namespace="discovery"
                  data-cal-link="pandagen/discovery"
                  data-cal-config='{"layout":"month_view"}'
                  className={`w-full px-6 py-3 font-bold rounded-full transition-all ${tier.featured ? 'bg-white text-charcoal hover:bg-stone-100' : 'bg-charcoal text-white hover:bg-cognac'}`}
                >
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-stone-500 mt-8 max-w-2xl mx-auto">All builds include: staged cutover migration, 301 redirect mapping, SEO preservation, your domain stays yours, you own 100% of the code.</p>
        </div>
      </section>

      {/* 7. DUAL CTA */}
      <section className="pt-10 md:pt-16 pb-8 md:pb-12 px-6 border-y border-stone-200 bg-white">
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
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"optimize_my_shopify_store",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 bg-white border border-stone-200 text-charcoal font-bold rounded-full hover:border-cognac/30 transition-all">
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
                {["Under a second load times", "Zero monthly app fees", "Custom checkout flows", "90+ PageSpeed score", "Unique brand experience", "Refund terms stated in the written scope"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => { if (typeof window !== "undefined") { (window as any).gtag?.("event","cta_click",{cta:"go_headless",location:"service_page"}); window.dispatchEvent(new Event("open-quote-modal")); } }} className="w-full px-6 py-4 bg-charcoal text-white font-bold rounded-full hover:bg-cognac transition-all">
                Go Headless
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER PROMISE — locked brand voice, 3 guarantees */}
      <PartnerPromise />

      {/* 8. FAQ */}
      <section className="pt-8 md:pt-12 pb-10 md:pb-20 px-6">
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

      {/* 9. GUARANTEE — unified with hero 90+ PageSpeed promise */}
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
              Every PandaCodeGen build carries a 90+ Lighthouse handover target on mobile and desktop for the representative pages named in your written scope, verified across three recorded runs before handover. If we fail to deliver what that written scope promises, the accepted terms set out the refund trigger and cure process. This is a lab acceptance target, not a promise about rankings, revenue, or field Core Web Vitals after third-party changes.
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
          <p className="text-stone-600 text-center mb-10 text-sm">Research, case studies, and guides on headless e-commerce.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/blog/shopify-headless", title: "Why Go Headless with Shopify?", desc: "What headless transfers to you, and what it does not make faster on its own." },
              { href: "/blog/shopify-app-costs-real-monthly-bill", title: "Shopify App Costs: The Real Bill", desc: "How to reconcile the real app bill from invoices rather than list prices." },
              { href: "/blog/shopify-plus-still-slow", title: "Why Shopify Plus Is Still Slow", desc: "The plan changes your entitlements, not how your storefront is built." },
              { href: "/blog/shopify-slow-losing-sales", title: "Your Slow Shopify Is Losing Sales", desc: "How to build an evidence model instead of multiplying out a per-second figure." },
              { href: "/blog/shopify-conversion-rate-speed-fix", title: "Speed Fix That Lifts Conversions", desc: "How to measure speed inside the funnel without assuming it caused the change." },
              { href: "/blog/what-is-headless-commerce", title: "What Is Headless Commerce?", desc: "A plain-English explainer for store owners and founders." },
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

      {/* Related Services - Full Internal Linking */}
      <section className="py-10 md:py-16 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-charcoal text-center mb-3">Explore More Services</h2>
          <p className="text-stone-500 text-center mb-10 text-sm">Every platform migrates differently. Here is the right path for each.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { href: "/services/wordpress-migration", icon: Code2, title: "WordPress Migration", desc: "Escape plugin bloat. Load under 1 second." },
              { href: "/services/woocommerce", icon: ShoppingBag, title: "WooCommerce Migration", desc: "Cut $500/mo in plugins. Own your store." },
              { href: "/services/wix", icon: Globe, title: "Wix Migration", desc: "Break free from Wix limitations. Own your code." },
              { href: "/services/squarespace", icon: Globe, title: "Squarespace Migration", desc: "Outgrow templates. Build something bespoke." },
              { href: "/services/webflow", icon: Globe, title: "Webflow Migration", desc: "Performance ceiling hit? Move to Next.js." },
              { href: "/services/gohighlevel", icon: Zap, title: "GoHighLevel", desc: "GHL site slow? Custom frontend, same CRM." },
              { href: "/services/custom-engineering", icon: Zap, title: "Custom Engineering", desc: "SaaS, dashboards, APIs built from scratch." },
              { href: "/partners", icon: ArrowRightLeft, title: "For Agencies", desc: "White-label dev partnership. You sell, we build." },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="group flex items-start gap-3 p-5 rounded-2xl bg-white border border-stone-200 hover:border-cognac/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-stone-50 flex items-center justify-center shrink-0 group-hover:bg-stone-100 transition-colors">
                  <s.icon className="w-5 h-5 text-cognac" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-charcoal font-bold text-sm group-hover:text-cognac transition-colors">{s.title}</h3>
                  <p className="text-stone-500 text-xs mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Author Attribution */}
      <section className="py-10 border-t border-stone-200 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-stone-600 mb-4">Built by</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-start gap-4">
              <Link href="/about/hassan" className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-charcoal font-bold text-lg">H</div>
              </Link>
              <div>
                <Link href="/about/hassan" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Hassan Jamal</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Engineer. Headless Shopify builds that score 90+ on PageSpeed. Full storefront migrations from Liquid templates to custom Next.js storefronts, behind a staged cutover with a documented rollback path.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Link href="/about/imran" className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-charcoal font-bold text-lg">I</div>
              </Link>
              <div>
                <Link href="/about/imran" className="font-bold text-charcoal text-sm hover:text-cognac transition-colors">Imran</Link>
                <p className="text-xs text-stone-500 mt-0.5">Lead Solutions Architect. Scopes headless migrations around the integration surface and the acceptance criteria. 8+ years in enterprise e-commerce architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}