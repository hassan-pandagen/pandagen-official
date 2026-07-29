"use client";

import { motion } from "@/components/ui/motion";
import { Clock, Zap } from "lucide-react";

const traditionalSteps = [
  "Discovery & requirements (2 weeks)",
  "Wireframes & design (3 weeks)",
  "Front-end development (3 weeks)",
  "Back-end development (2 weeks)",
  "Testing & QA (1 week)",
  "Launch & deployment (1 week)",
];

const pandagenSteps = [
  "AI assisted discovery (2 days)",
  "Design + prototype (1 week)",
  "AI powered build (1 to 2 weeks)",
  "Automated testing (2 days)",
  "Global deployment (1 day)",
];

export default function AIPowered() {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-6">
            AI + Engineers.{" "}
            <span className="font-serif italic text-cognac">Weeks, not months.</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We combine AI-assisted development tooling with senior engineers to ship
            production-quality websites on a schedule stated in the written project terms.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* Traditional Agency */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-10 rounded-2xl bg-stone-50 border border-stone-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-stone-200 flex items-center justify-center">
                <Clock className="w-5 h-5 text-gray-500" />
              </div>
              <div className="text-xs text-stone-500 uppercase tracking-widest font-bold">Traditional Agency</div>
            </div>

            <div className="text-4xl md:text-5xl font-black text-charcoal mb-8 tracking-tight">
              8-12 <span className="text-2xl md:text-3xl font-bold">Weeks</span>
            </div>

            <div className="space-y-3">
              {traditionalSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                  <span className="text-sm text-stone-600">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* PandaCodeGen AI-Powered */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 md:p-10 rounded-2xl bg-white border-2 border-charcoal relative overflow-hidden shadow-premium"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-charcoal" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center">
                <Zap className="w-5 h-5 text-charcoal" />
              </div>
              <div className="text-xs text-charcoal uppercase tracking-widest font-bold">PandaCodeGen AI-Powered</div>
            </div>

            <div className="text-4xl md:text-5xl font-black text-charcoal mb-8 tracking-tight">
              2-4 <span className="text-2xl md:text-3xl font-bold">Weeks</span>
            </div>

            <div className="space-y-3">
              {pandagenSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-charcoal shrink-0" />
                  <span className="text-sm text-charcoal font-medium">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI Tools Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12 text-sm text-stone-500"
        >
          <span>Claude AI for architecture</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
          <span>Cursor for development</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
          <span>Automated testing pipelines</span>
        </motion.div>

      </div>
    </section>
  );
}
