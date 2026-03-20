"use client";

import { motion } from "framer-motion";
import { Lock, Zap, FileCode, ArrowUpRight } from "lucide-react";

const stats = [
  {
    icon: Zap,
    number: "<1s",
    title: "Blazing Speed",
    body: "Google rewards fast sites with higher rankings. We eliminate every speed bottleneck so your pages load before competitors' sites even start.",
    borderRight: true,
  },
  {
    icon: Lock,
    number: "0",
    title: "Vulnerabilities",
    body: "No plugins means no backdoors. We build enterprise grade architecture compliant with OWASP (the global security standard that protects against the top 10 most common website attacks).",
    borderRight: true,
  },
  {
    icon: FileCode,
    number: "100%",
    title: "Total Ownership",
    body: "Stop renting your business. We hand over the full source code on day one. You own the IP, the data, and can take it to any developer if you ever want to.",
    borderRight: false,
  },
];

export default function UnfairAdvantage() {
  return (
    <section className="py-12 md:py-32 bg-white text-charcoal">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-20 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              The Unfair{" "}
              <span className="font-serif italic text-stone-500">Advantage.</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Most agencies sell you a car with the hood welded shut. We sell you the engine blueprints.
              Engineering-grade infrastructure for brands that can&apos;t afford downtime.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <ArrowUpRight className="w-12 h-12 text-stone-200" />
          </div>
        </motion.div>

        {/* Financial Grid Layout */}
        <div className="grid md:grid-cols-3 border-t border-stone-200">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group border-b ${stat.borderRight ? "border-r-0 md:border-r" : ""} border-stone-200 p-6 md:p-10 hover:bg-stone-50 transition-colors duration-500`}
            >
              <div className="mb-8">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center group-hover:bg-cognac transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-stone-500 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div className="text-7xl font-sans font-bold text-charcoal tracking-tighter mb-4">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">{stat.title}</h3>
              <p className="text-stone-500 leading-relaxed text-sm">{stat.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
