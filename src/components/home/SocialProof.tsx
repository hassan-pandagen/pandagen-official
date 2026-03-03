"use client";

import { motion } from "framer-motion";
import { Quote, ExternalLink } from "lucide-react";
import Link from "next/link";

const metrics = [
  { before: "3.2s", after: "0.7s", label: "Load Time" },
  { before: "45", after: "100", label: "Lighthouse Score" },
  { before: "$150/mo", after: "$0/mo", label: "Hosting Cost" },
  { before: "25+", after: "0", label: "Plugins Killed" },
];

export default function SocialProof() {
  return (
    <section className="py-14 bg-white border-b border-stone-200/80">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-10"
        >
          <Quote className="w-6 h-6 text-cognac mb-4 opacity-60" />
          <blockquote className="text-xl md:text-2xl font-serif italic text-charcoal leading-relaxed max-w-2xl">
            &ldquo;We were running Yoast SEO, Elementor, WooCommerce, and a dozen other plugins just to keep the site alive, costing us $150/month in hosting and still loading in 3+ seconds. PandaGen stripped it all out and rebuilt from scratch. No plugins. No hosting bill. Loads in under a second. The ROI was immediate.&rdquo;
          </blockquote>
          <div className="mt-5 flex items-center gap-3">
            <div className="h-px w-8 bg-stone-300" />
            <div className="text-center">
              <div className="text-sm font-bold text-charcoal">MyCustomPatches</div>
              <div className="text-xs text-stone-400">Patch Manufacturing · WordPress Migration</div>
            </div>
            <div className="h-px w-8 bg-stone-300" />
          </div>
          <Link
            href="https://www.mycustompatches.net"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-cognac transition-colors"
          >
            <ExternalLink className="w-3 h-3" /> mycustompatches.net
          </Link>
        </motion.div>

        {/* Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {metrics.map((m) => (
            <div key={m.label} className="text-center p-4 bg-stone-50 border border-stone-200 rounded-xl">
              <div className="text-xs text-stone-400 uppercase tracking-wider mb-2 font-bold">{m.label}</div>
              <div className="flex items-center justify-center gap-1.5 text-sm font-bold">
                <span className="text-stone-400 line-through">{m.before}</span>
                <span className="text-stone-300">→</span>
                <span className="text-charcoal">{m.after}</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
