"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface DiscoveryPortalProps {
  onOpenQuote?: () => void;
}

export default function DiscoveryPortal({ onOpenQuote }: DiscoveryPortalProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text - slides from left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Something <span className="text-neon">Legendary?</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Response within 2 hours. 30-60 days complimentary post-launch support.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="text-neon">✓</span> Free consultation
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-neon">✓</span> Fixed pricing
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-neon">✓</span> Full ownership
                </span>
              </div>
            </motion.div>

            {/* CTA - slides from right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-right"
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <ShieldCheck className="w-3 h-3" /> 30-Day Money Back Guarantee
               </div>
               {onOpenQuote ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-neon text-background font-bold text-lg hover:bg-neon/90 transition-all"
                >
                  Get Free Quote
                </motion.button>
              ) : (
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-neon text-background font-bold text-lg hover:bg-neon/90 transition-all"
                >
                  Get Free Quote
                </a>
              )}
              <p className="text-sm text-gray-500 mt-3">No obligation. Same-day response.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
