"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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

        {/* Clutch Review Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">

            {/* Header: stars + Clutch badge */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                {/* 5 stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#e8222f]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">5.0 · Verified Review</div>
              </div>
              {/* Clutch badge */}
              <Link
                href="https://clutch.co/profile/panda-code-gen#reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#e8222f] text-white text-xs font-bold hover:bg-[#c91a26] transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
                clutch.co
                <ExternalLink className="w-3 h-3 opacity-70" />
              </Link>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl font-serif italic text-charcoal leading-relaxed mb-5">
              &ldquo;Hassan was available to me at any time, and his response time was always less than an hour.&rdquo;
            </blockquote>

            {/* Feedback summary */}
            <p className="text-sm text-stone-500 leading-relaxed mb-6">
              Panda Code Gen successfully delivered a speedy, bug-free website using the latest coding language. The team was punctual, responsive, helpful, and communicative via email. They assisted with UI design and didn&apos;t charge for revisions. Overall, their expertise and support were commendable.
            </p>

            {/* Reviewer + scores */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-5 border-t border-stone-200">
              <div>
                <div className="text-sm font-bold text-charcoal">Executive, MC Patches LLC</div>
                <div className="text-xs text-stone-400 mt-0.5">Manufacturing · Austin, Texas · Oct – Nov 2025</div>
              </div>
              <div className="flex gap-4 text-xs text-stone-400">
                {[["Quality","5.0"],["Schedule","5.0"],["Cost","5.0"],["Refer","5.0"]].map(([label, val]) => (
                  <div key={label} className="text-center">
                    <div className="font-bold text-charcoal text-sm">{val}</div>
                    <div>{label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
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
