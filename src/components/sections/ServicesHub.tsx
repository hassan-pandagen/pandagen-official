"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe } from "lucide-react";
import Link from "next/link";

const platforms = [
  { name: "WordPress", href: "/services/wordpress-migration" },
  { name: "Wix", href: "/services/wix" },
  { name: "Squarespace", href: "/services/squarespace" },
  { name: "Shopify", href: "/services/ecommerce" },
  { name: "Webflow", href: "/services/webflow" },
];

export default function ServicesHub() {
  return (
    <section className="py-12 md:py-32 bg-paper relative">
      {/* Warm stone ambient glow, clipped to section only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-stone-200/40 blur-[150px] rounded-full" />
        <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-stone-200/30 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-20 md:text-center max-w-3xl mx-auto"
        >
          <span className="text-cognac font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 tracking-tight leading-tight">
            We don&apos;t just &ldquo;build websites.&rdquo;<br />
            <span className="font-serif italic text-stone-500">We engineer websites that make you money.</span>
          </h2>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1: MIGRATIONS (Large, 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="group md:col-span-2 relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white to-stone-50 border border-white shadow-xl shadow-stone-200/40 ring-1 ring-stone-900/5 p-10 min-h-[450px] hover:border-cognac/20 hover:shadow-2xl hover:shadow-cognac/10 transition-all duration-500"
          >
            {/* Inner architectural grid texture */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-charcoal">
                  <Globe className="w-7 h-7 text-charcoal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-3xl font-bold text-charcoal mb-4 font-serif">Migrations {"&"} New Builds</h3>
                <p className="text-stone-600 text-lg max-w-md leading-relaxed">
                  Whether you&apos;re migrating off a slow platform or building a new store from scratch, we deliver sites that load in under 1 second with zero downtime.
                </p>
              </div>

              {/* Platform logos row */}
              <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-stone-100 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                {platforms.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="px-3 py-1 bg-stone-100 border border-stone-200 rounded-full text-xs font-bold text-stone-600 hover:border-cognac hover:text-cognac transition-colors"
                  >
                    {p.name}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="ml-auto inline-flex items-center gap-2 text-charcoal font-bold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Explore Migrations <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: CUSTOM ENGINEERING (Dark Midnight) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[2rem] bg-midnight text-white p-10 min-h-[450px] shadow-2xl"
          >
            {/* Accent glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cognac/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-serif">Custom Engineering</h3>
                <p className="text-stone-400 leading-relaxed">
                  SaaS dashboards, internal tools, and AI integrations. We built our own enterprise ops platform from scratch. When &ldquo;off-the-shelf&rdquo; isn&apos;t enough, we build exactly what you need.
                </p>
              </div>

              <Link
                href="/services/custom-engineering"
                className="mt-8 inline-flex items-center gap-3 text-white font-bold group-hover:gap-4 transition-all duration-300"
              >
                View Architecture <ArrowRight className="w-5 h-5 text-cognac" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
