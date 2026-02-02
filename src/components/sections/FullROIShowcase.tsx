"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Lazy load heavy components for better performance
const ROIComparisonCarousel = dynamic(() => import("./ROIComparisonCarousel"), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  ),
});

interface FullROIShowcaseProps {
  onOpenQuote?: () => void;
}

export default function FullROIShowcase({ onOpenQuote }: FullROIShowcaseProps) {
  return (
    <div className="bg-gradient-to-br from-[#050505] via-[#0A0A14] to-[#050505]">
      {/* Detailed ROI Breakdown Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-neon text-sm uppercase tracking-widest font-bold mb-4">
              DATA-BACKED COMPARISONS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-blue-400 to-purple-400">Exactly</span> What You're Paying For
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real statistics from industry studies showing why businesses switch to Next.js
            </p>
          </motion.div>

          {/* Carousel */}
          <ROIComparisonCarousel />

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-3 px-8 py-4 bg-neon text-black font-bold rounded-full hover:bg-neon/90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              <span>Get Your Custom ROI Analysis</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Free consultation • No obligation • Response in 2 hours
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
