"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "<1s", label: "Load Time", context: "Down from avg 3.2s" },
  { value: "98+", label: "PageSpeed Score", context: "Google Core Web Vitals" },
  { value: "$0", label: "Monthly Fees", context: "$1,800+/yr saved" },
  { value: "100%", label: "Code Ownership", context: "Full Git repo handover" },
];

export default function ClientResults() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-subtle pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            The Numbers{" "}
            <span className="font-serif italic text-cognac">Speak.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-cognac tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-charcoal uppercase tracking-widest mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-stone-500">{stat.context}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://pagespeed.web.dev/analysis/https-www.pandacodegen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cognac text-sm font-bold hover:underline"
          >
            Verify on Google PageSpeed <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
