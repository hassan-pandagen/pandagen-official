"use client";

import { motion } from "@/components/ui/motion";
import { Clock, Zap } from "lucide-react";

const traditionalSteps = [
  "Work out what you need (2 weeks)",
  "Wireframe it, then design it (3 weeks)",
  "Build the front end (3 weeks)",
  "Build the back end (2 weeks)",
  "Test it (1 week)",
  "Launch it (1 week)",
];

const pandagenSteps = [
  "Work out what you need, AI assisted (2 days)",
  "Design it and prototype it (1 week)",
  "Build it, AI assisted (1 to 2 weeks)",
  "Run the automated tests (2 days)",
  "Ship it (1 day)",
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
            Senior engineers using AI tooling, on the schedule in your written terms. Not a guess, and not a
            junior learning on your budget.
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
              <div className="text-xs text-stone-500 uppercase tracking-widest font-bold">A sequential build</div>
            </div>

            <div className="text-4xl md:text-5xl font-black text-charcoal mb-8 tracking-tight">
              6 <span className="text-2xl md:text-3xl font-bold">phases, one after another</span>
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
              <div className="text-xs text-charcoal uppercase tracking-widest font-bold">How we run it</div>
            </div>

            <div className="text-4xl md:text-5xl font-black text-charcoal mb-8 tracking-tight">
              5 <span className="text-2xl md:text-3xl font-bold">stages, several in parallel</span>
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

        {/* The left column used to read "Traditional Agency, 8-12 weeks" against our
            "2-4 weeks". That was an unsourced timing claim about every unnamed
            competitor, and the French and German versions of this page dropped it for
            exactly that reason. Compare the shape of the process, never a benchmark
            we cannot evidence. */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-stone-500">
          The left column is the shape of a phase-by-phase build, not a measured benchmark of any
          particular agency. Your schedule is the one written into the accepted project terms.
        </p>

      </div>
    </section>
  );
}
