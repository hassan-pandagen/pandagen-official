"use client";

import { motion } from "@/components/ui/motion";
import { ArrowRight, Code2, Globe, Sparkles, ShoppingBag, MessageCircle } from "lucide-react";
import Link from "next/link";

const platforms = [
  { name: "WordPress", href: "/services/wordpress-migration" },
  { name: "Shopify", href: "/services/ecommerce" },
  { name: "WooCommerce", href: "/services/woocommerce" },
  { name: "Wix", href: "/services/wix" },
  { name: "Squarespace", href: "/services/squarespace" },
  { name: "Webflow", href: "/services/webflow" },
  { name: "GoHighLevel", href: "/services/gohighlevel" },
];

export default function ServicesHub() {
  return (
    <section className="py-12 md:py-20 bg-paper relative">
      {/* Warm stone ambient glow, clipped to section only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-stone-200/40 blur-[150px] rounded-full" />
        <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-stone-200/30 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 md:text-center max-w-3xl mx-auto"
        >
          <span className="text-cognac font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight leading-tight">
            Migrations engineered around{" "}
            <span className="font-serif font-normal italic text-cognac md:block">what can break.</span>
          </h2>
        </motion.div>

        {/* BENTO GRID: top row: 2 big cards · bottom row: 3 small cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">

          {/* CARD 1: MIGRATIONS (large, 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-linear-to-b from-white to-stone-50 border border-white shadow-xl shadow-stone-200/40 ring-1 ring-stone-900/5 p-8 md:p-10 hover:border-cognac/20 hover:shadow-2xl hover:shadow-cognac/10 transition-all duration-500"
          >
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />
            <div className="relative z-10 h-full flex flex-col gap-7">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center transition-colors duration-300 group-hover:bg-charcoal">
                  <Globe className="w-7 h-7 text-charcoal group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs font-bold text-stone-600 bg-stone-100 border border-stone-300 rounded-full px-3 py-1.5">
                  URL inventory &middot; Redirect mapping
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-charcoal mb-3 font-serif">Migrations {"&"} New Builds</h3>
                <p className="text-stone-600 text-lg max-w-md leading-relaxed">
                  We inventory pages, content, analytics, forms, and integrations before build work begins, then test the cutover against written acceptance criteria.
                </p>
              </div>

              {/* Prominent "we migrate you off" platform block that fills the card */}
              <div className="mt-auto rounded-2xl bg-stone-50/80 border border-stone-200 p-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-stone-600 mb-3">We migrate you off</p>
                <div className="flex flex-wrap items-center gap-2.5">
                  {platforms.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-full text-sm font-bold text-stone-700 hover:border-cognac hover:text-cognac transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="ml-auto inline-flex items-center gap-2 text-charcoal font-bold text-sm hover:text-cognac hover:gap-3 transition-all duration-300"
                  >
                    Explore Migrations <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: CUSTOM ENGINEERING (dark) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-midnight text-white p-8 md:p-10 shadow-2xl flex flex-col justify-between gap-7"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cognac/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-3 font-serif">Custom Engineering</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                SaaS dashboards, internal tools, and AI integrations. When &ldquo;off-the-shelf&rdquo; isn&apos;t enough, we build exactly what you need.
              </p>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-xs text-stone-600 uppercase tracking-widest font-bold mb-1">Scoped separately</p>
                <p className="text-sm text-white leading-snug">
                  Product and internal-tool engagements start with architecture, data, security, integration, and operating-cost requirements rather than a generic website package.
                </p>
              </div>
            </div>
            <Link
              href="/services/custom-engineering"
              className="relative z-10 inline-flex items-center gap-3 text-white font-bold group-hover:gap-4 hover:text-cognac transition-all duration-300"
            >
              View Architecture <ArrowRight className="w-5 h-5 text-cognac" />
            </Link>
          </motion.div>

          {/* CARD 3: GET CITED BY AI (small) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative overflow-hidden rounded-3xl bg-white border border-stone-200 shadow-sm p-8 hover:border-cognac/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between gap-6 min-h-[230px]"
          >
            <div>
              <div className="w-12 h-12 bg-cognac/10 rounded-2xl flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6 text-cognac" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2 font-serif">Search &amp; AI Foundations</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Crawlable content, consistent entities, accurate structured data, and source-backed evidence for traditional and AI-assisted search. No citation guarantee.
              </p>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-charcoal font-bold text-sm hover:text-cognac hover:gap-3 transition-all">
              Review delivery standards <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* CARD 4: FASTER E-COMMERCE (small) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-white border border-stone-200 shadow-sm p-8 hover:border-cognac/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between gap-6 min-h-[230px]"
          >
            <div>
              <div className="w-12 h-12 bg-cognac/10 rounded-2xl flex items-center justify-center mb-5">
                <ShoppingBag className="w-6 h-6 text-cognac" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2 font-serif">Faster E-commerce</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Headless Shopify and WooCommerce storefronts when measured theme or integration constraints justify the added complexity. Keep the commerce backend where it remains the right fit.
              </p>
            </div>
            <Link href="/services/ecommerce" className="inline-flex items-center gap-2 text-charcoal font-bold text-sm hover:text-cognac hover:gap-3 transition-all">
              See e-commerce <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* CARD 5: SOFT CTA that opens chat (low friction) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="group relative overflow-hidden rounded-3xl bg-cognac/5 border border-cognac/20 p-8 hover:border-cognac/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between gap-6 min-h-[230px]"
          >
            <div>
              <div className="w-12 h-12 bg-cognac/15 rounded-2xl flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6 text-cognac" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2 font-serif">Not sure where to start?</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Tell us what you&apos;re building or what&apos;s slowing you down. We&apos;ll give you a straight answer. No pitch, no pressure.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") (window as { __openChat?: () => void }).__openChat?.();
              }}
              className="inline-flex items-center gap-2 text-cognac font-bold text-sm hover:gap-3 transition-all self-start"
            >
              Chat with our experts <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
