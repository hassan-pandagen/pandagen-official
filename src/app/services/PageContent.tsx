"use client";

import { motion } from "@/components/ui/motion";
import FadeIn from "@/components/ui/FadeIn";
import { Database, Code2, ShoppingCart, CheckCircle2, Layers, ArrowRight, Zap, Shield, BarChart3, Gauge } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import MethodToCreativity from "@/components/MethodToCreativity";
import UnfairAdvantage from "@/components/sections/UnfairAdvantage";
import RelatedServicesGrid from "@/components/services/RelatedServicesGrid";

export default function PageContent() {
  return (
    <main className="bg-paper min-h-screen overflow-x-hidden relative">
      {/* Global Noise Texture */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-[0.03]"></div>

      <ReadingProgressBar />
      <Header />

      {/* 1. HERO */}
      <section className="relative pt-20 md:pt-40 pb-16 md:pb-32 px-6 bg-paper overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)", backgroundSize: "50px 50px", opacity: 0.03 }} />
        <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-stone-200/50 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-cognac font-semibold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-charcoal animate-pulse" />
            What We Build
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-charcoal tracking-tighter mb-6 leading-tight"
          >
            Capabilities <span className="text-gray-400">&</span> <br />
            <span className="font-serif italic text-cognac">
              Architecture.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 max-w-2xl mx-auto"
          >
            Three things we build. All of them aim at the same result: a site you can measure, can afford to run, and actually own.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base text-charcoal font-medium max-w-2xl mx-auto mt-4"
          >
            MyCustomPatches is an independent client, and its owner reports a delivery of about 22 days. We do not hold a dated record of that confirmation, and the performance figures for that project are withdrawn pending reconciliation.
          </motion.p>
        </div>
      </section>

      {/* 2. THE BIG 3 PILLARS */}
      <div className="space-y-16 md:space-y-32 pb-16 md:pb-32">

        {/* PILLAR 1 */}
        <ServiceSection
          id="01"
          title="WordPress Migration"
          subtitle="Rebuild the Frontend, Keep the Content"
          description="Slow, hard to maintain, or carrying more plugins than anyone can account for? We rebuild the frontend as custom code and measure the result on your own routes."
          tags={["Fix Slow Loading", "Hardened Stack", "Redirect-Mapped URLs"]}
          features={["No Plugin Update Treadmill", "90+ Lighthouse Handover Target", "Smaller Third-Party Attack Surface", "We Handle All Data Transfer"]}
          align="left"
          icon={Database}
          gradient="from-orange-500/20 to-red-600/5"
          accentColor="orange"
          href="/services/wordpress-migration"
        >
          <MigrationDecoration />
        </ServiceSection>

        {/* PILLAR 2 */}
        <ServiceSection
          id="02"
          title="Web Apps & Dashboards"
          subtitle="Custom Business Tools & Dashboards"
          description="For founders who need more than just a website. We build custom client portals, internal dashboards, AI tools, and mobile friendly apps."
          tags={["Client Portals", "AI Integration", "Mobile-Friendly Apps"]}
          features={["Works on iPhone & Android", "Chat with your Data (AI)", "Subscription Payments", "Real-time Admin Panels"]}
          align="right"
          icon={Code2}
          gradient="from-stone-400/20 to-stone-200/5"
          accentColor="blue"
          href="/services/custom-engineering"
        >
           <DashboardDecoration />
        </ServiceSection>

        {/* PILLAR 3 */}
        <ServiceSection
          id="03"
          title="High Performance Stores"
          subtitle="Custom Shopify (No Templates)"
          description="When a theme cannot deliver the experience you need, we build the storefront as custom code while Shopify stays the system of record for products, orders and checkout."
          tags={["Custom Checkout", "3D Product Views", "Measured Performance"]}
          features={["Fewer Monthly App Fees", "Crawlable Rendered Output", "Custom Upsell Logic", "Connects to Shopify Inventory"]}
          align="left"
          icon={ShoppingCart}
          gradient="from-green-500/20 to-emerald-600/5"
          accentColor="green"
          href="/services/ecommerce"
        >
           <EcommerceDecoration />
        </ServiceSection>

      </div>

      {/* PRICING SPINE — fixed tiers + scoped handover target */}
      <section className="py-12 md:py-16 px-6 bg-white border-y border-stone-200">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-3">Fixed Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
              Four tiers. <span className="font-serif italic text-cognac">No hourly billing.</span>
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Every build ships at a fixed price for a written scope. The performance target, how it is tested and what happens if we miss it are set out below.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { tier: "Starter", price: "$1,500", fit: "Simple sites, 5 to 15 pages" },
              { tier: "Growth", price: "$3,500", fit: "Business sites, blogs, integrations" },
              { tier: "Scale", price: "$5K to $10K", fit: "E-commerce and complex builds" },
              { tier: "Scale+", price: "$10K+", fit: "Enterprise scope, custom quoted" },
            ].map((t) => (
              <div key={t.tier} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center hover:border-cognac/30 transition-colors">
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-stone-500 mb-1">{t.tier}</p>
                <p className="text-xl md:text-2xl font-black text-charcoal tracking-tight">{t.price}</p>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">{t.fit}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-green-50 border border-green-200 flex items-start gap-3">
            <Shield className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <p className="text-sm text-stone-700 leading-relaxed">
              <span className="font-bold text-charcoal">Fixed price for the written scope.</span> A 30% deposit starts the build. Every build carries a 90+ Lighthouse handover target on mobile and desktop for the representative pages named in your written scope, verified across three recorded runs before handover. If we fail to deliver what that written scope promises, the accepted terms set out the refund trigger and cure process. This is a lab acceptance target, not a promise about rankings, revenue, or field Core Web Vitals after third-party changes.{" "}
              <Link href="/pricing" className="text-cognac font-semibold hover:underline">See full pricing →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Our Process - How We Build */}
      <MethodToCreativity />

      {/* The Unfair Advantage - Speed, Security, Ownership */}
      <UnfairAdvantage />

      {/* ALL SERVICE PILLARS — every platform we migrate */}
      <RelatedServicesGrid />

      {/* From the Blog - Internal Linking */}
      <section className="py-10 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-charcoal text-center mb-3">From the Blog</h2>
          <p className="text-stone-600 text-center mb-10 text-sm">Cost breakdowns and receipts behind our pricing.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/blog/website-migration-cost-2026", title: "Website Migration Cost in 2026", desc: "How to scope a migration before anyone quotes it." },
              { href: "/blog/how-much-does-a-website-cost", title: "How Much Does a Website Cost?", desc: "What moves a quote up or down, and why no market average holds." },
              { href: "/blog/wordpress-migration-cost", title: "WordPress Migration Cost", desc: "Our tiers, and the difference between a host change and a rebuild." },
              { href: "/blog/nextjs-hosting-zero-cost", title: "Is Vercel Free? 2026 Pricing", desc: "What commercial Next.js hosting actually costs, and why the free tier does not apply." },
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

      <Footer />
    </main>
  );
}

// --- SERVICE SECTION ---
function ServiceSection({ id, title, subtitle, description, tags, features, align, icon: Icon, gradient, children, href }: any) {
  return (
    <section className="container mx-auto px-6">
      <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>

        {/* TEXT SIDE */}
        <FadeIn className="flex-1">
           <div className="flex items-center gap-4 mb-8">
              <span className="text-7xl font-bold text-stone-100 font-mono">{id}</span>
              <div className={`p-4 rounded-2xl bg-linear-to-br ${gradient} border border-stone-200 shadow-lg`}>
                 <Icon className="w-8 h-8 text-charcoal" />
              </div>
           </div>

           <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-3">{title}</h2>
           <p className="text-xl text-cognac mb-8 font-medium tracking-tight">{subtitle}</p>
           <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-xl">{description}</p>

           <div className="flex flex-wrap gap-3 mb-10">
              {tags.map((tag: string, i: number) => (
                 <span key={i} className="px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-600 font-medium">
                    {tag}
                 </span>
              ))}
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature: string, i: number) => (
                 <div key={i} className="flex items-center gap-3 text-stone-600">
                    <CheckCircle2 className="w-5 h-5 text-cognac shrink-0" />
                    <span className="text-sm">{feature}</span>
                 </div>
              ))}
           </div>

           <Link href={href} className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-bold rounded-full hover:bg-cognac hover:gap-3 transition-all shadow-lg shadow-stone-900/10">
              Explore {title} <ArrowRight className="w-5 h-5" />
           </Link>

        </FadeIn>

        {/* VISUAL SIDE */}
        <div className="flex-1 w-full h-[450px] lg:h-[520px]">
           <div className="w-full h-full rounded-2xl bg-white border border-stone-200 relative overflow-hidden group shadow-card hover:shadow-elevated transition-all duration-500">
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-size-[32px_32px]" />
              {/* Gradient glow */}
              <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-linear-to-br ${gradient} opacity-40 blur-[80px] group-hover:opacity-60 transition-opacity duration-700`} />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                 {children}
              </div>
           </div>
        </div>

      </div>
    </section>
  )
}

// --- DECORATION: MIGRATION (WordPress → Custom) ---
function MigrationDecoration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center px-4">
            {/* Connection line */}
            <div className="absolute top-1/2 left-[15%] right-[15%] h-[2px] -translate-y-1/2">
                <div className="w-full h-full bg-linear-to-r from-stone-300 to-stone-500 opacity-40 rounded-full" />
                {/* Animated dot traveling along the line */}
                <motion.div
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-stone-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                />
            </div>

            {/* FROM: Old Platform */}
            <div className="absolute left-[5%] md:left-[8%] flex flex-col items-center gap-3">
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-linear-to-br from-orange-50 to-orange-100 border-2 border-orange-200 flex items-center justify-center shadow-lg shadow-orange-500/10"
                >
                    <Database className="w-10 h-10 md:w-12 md:h-12 text-orange-500" />
                </motion.div>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">WordPress</span>
                <div className="text-center mt-1">
                    <div className="text-lg font-bold text-red-500">3.8s</div>
                    <div className="text-[10px] text-stone-600 uppercase tracking-wider">Load Time</div>
                </div>
            </div>

            {/* Arrow indicator in center */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-stone-200 flex items-center justify-center shadow-lg">
                <ArrowRight className="w-5 h-5 text-cognac" />
            </div>

            {/* TO: New Platform */}
            <div className="absolute right-[5%] md:right-[8%] flex flex-col items-center gap-3">
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-linear-to-br from-stone-50 to-stone-100 border-2 border-stone-200 flex items-center justify-center shadow-lg shadow-stone-900/8"
                >
                    <Zap className="w-10 h-10 md:w-12 md:h-12 text-stone-600" />
                </motion.div>
                <span className="text-xs font-bold text-cognac bg-stone-50 px-3 py-1 rounded-full border border-stone-200">Custom Code</span>
                <div className="text-center mt-1">
                    <div className="text-lg font-bold text-green-500">0.8s</div>
                    <div className="text-[10px] text-stone-600 uppercase tracking-wider">Load Time</div>
                </div>
            </div>

            {/* Floating badges */}
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[12%] right-[20%] px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg shadow-xs"
            >
                <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-[11px] font-bold text-green-600">Secure</span>
                </div>
            </motion.div>
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[15%] left-[25%] px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg shadow-xs"
            >
                <div className="flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-stone-600" />
                    <span className="text-[11px] font-bold text-cognac">90+ Score</span>
                </div>
            </motion.div>
        </div>
    )
}

// --- DECORATION: DASHBOARD ---
function DashboardDecoration() {
    return (
        <div className="w-full max-w-sm md:max-w-md">
            <motion.div
                initial={{ rotate: -3 }}
                whileHover={{ rotate: 0 }}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-elevated transform -rotate-3 group-hover:rotate-0 transition-transform duration-700"
            >
                {/* Window Chrome */}
                <div className="h-11 bg-stone-50 border-b border-stone-200 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-xs font-mono text-stone-600">dashboard.tsx</span>
                </div>

                {/* Dashboard Content */}
                <div className="flex">
                    {/* Sidebar */}
                    <div className="w-14 border-r border-stone-100 flex flex-col items-center py-4 gap-3 bg-stone-50/50">
                        <div className="w-8 h-8 rounded-lg bg-charcoal/10 flex items-center justify-center">
                            <BarChart3 className="w-4 h-4 text-cognac" />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-stone-100" />
                        <div className="w-8 h-8 rounded-lg bg-stone-100" />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-4 space-y-3">
                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-2">
                            <div className="p-3 bg-stone-50 border border-stone-100 rounded-xl">
                                <div className="text-lg font-bold text-cognac">98%</div>
                                <div className="text-[9px] text-stone-600 uppercase">Uptime</div>
                            </div>
                            <div className="p-3 bg-green-50 border border-green-100 rounded-xl">
                                <div className="text-lg font-bold text-green-600">0.8s</div>
                                <div className="text-[9px] text-stone-600 uppercase">Speed</div>
                            </div>
                            <div className="p-3 bg-stone-50 border border-stone-100 rounded-xl">
                                <div className="text-lg font-bold text-stone-600">24K</div>
                                <div className="text-[9px] text-stone-600 uppercase">Users</div>
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="h-28 bg-stone-50 border border-stone-100 rounded-xl p-3 relative overflow-hidden">
                            <div className="text-[10px] font-bold text-stone-600 uppercase mb-2">Revenue</div>
                            <div className="flex items-end gap-1.5 h-16">
                                {[40, 55, 45, 70, 60, 85, 75, 95, 88, 100].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-linear-to-t from-charcoal to-stone-600 rounded-t opacity-80"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Bottom row */}
                        <div className="flex gap-2">
                            <div className="flex-1 h-8 bg-green-50 border border-green-100 rounded-lg flex items-center justify-center">
                                <div className="w-12 h-2 bg-green-300 rounded-full" />
                            </div>
                            <div className="flex-1 h-8 bg-stone-50 border border-stone-100 rounded-lg" />
                            <div className="flex-1 h-8 bg-stone-50 border border-stone-100 rounded-lg" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

// --- DECORATION: ECOMMERCE PRODUCT ---
function EcommerceDecoration() {
    return (
        <div className="relative flex items-center justify-center gap-4">
            {/* Product Card */}
            <motion.div
                initial={{ rotate: 2 }}
                className="w-56 md:w-64 bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-elevated transform rotate-2 group-hover:rotate-0 transition-transform duration-500"
            >
                {/* Product Image Area */}
                <div className="h-44 bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 relative flex items-center justify-center border-b border-stone-100">
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Layers className="w-20 h-20 text-emerald-500 drop-shadow-lg" />
                    </motion.div>
                    {/* Sale badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full shadow-xs">
                        -30%
                    </div>
                    {/* Wishlist */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full border border-stone-200 flex items-center justify-center shadow-xs">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                    <div className="text-[10px] text-stone-600 uppercase tracking-wider mb-1">Premium Collection</div>
                    <div className="text-sm font-bold text-charcoal mb-2">Custom Product</div>
                    <div className="flex items-center gap-1 mb-3">
                        {[1,2,3,4,5].map(s => (
                            <svg key={s} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                        <span className="text-[10px] text-stone-600 ml-1">(128)</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-charcoal">$168</span>
                            <span className="text-sm text-stone-600 line-through">$240</span>
                        </div>
                        <button className="px-4 py-2 bg-charcoal text-white text-xs font-bold rounded-lg shadow-xs">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Floating performance badges */}
            <div className="absolute -top-2 -right-2 md:right-4 flex flex-col gap-2">
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="px-3 py-2 bg-white border border-green-200 rounded-xl shadow-card"
                >
                    <div className="text-[10px] text-stone-600 uppercase">Load Time</div>
                    <div className="text-sm font-bold text-green-600">0.6s</div>
                </motion.div>
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="px-3 py-2 bg-white border border-stone-200 rounded-xl shadow-card"
                >
                    <div className="text-[10px] text-stone-600 uppercase">PageSpeed</div>
                    <div className="text-sm font-bold text-cognac">90+</div>
                </motion.div>
            </div>
        </div>
    )
}
