"use client";

import { motion } from "framer-motion";
import { Calendar, FileText, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Free Speed Audit",
    duration: "15 min call",
    timing: "Today",
    description: "We analyze your current site, show you exactly what's slowing it down, and calculate how much revenue you're losing.",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(34, 211, 238, 0.3)",
  },
  {
    number: "02",
    icon: FileText,
    title: "Custom Proposal",
    duration: "Within 2 days",
    timing: "Fixed Price Quote",
    description: "You receive a detailed migration plan, timeline, and guaranteed price. No surprises, no hidden costs.",
    color: "from-purple-500 to-pink-500",
    glow: "rgba(168, 85, 247, 0.3)",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Own Forever",
    duration: "4-6 weeks",
    timing: "You Own the Code",
    description: "Your lightning-fast site goes live. You own 100% of the code. No monthly fees. Ever.",
    color: "from-orange-500 to-yellow-500",
    glow: "rgba(249, 115, 22, 0.3)",
  },
];

export default function HowItWorksSimple() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-neon mb-6 uppercase tracking-widest">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From first call to launch in 3 simple steps. No complexity. No confusion.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connecting Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-white/20 to-transparent z-0" />
              )}

              {/* Card */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-neon/30 transition-all duration-500 h-full flex flex-col hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:-translate-y-2">

                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-neon to-blue-500 flex items-center justify-center text-black font-bold text-lg shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                  {step.number}
                </div>

                {/* Icon with Gradient Glow */}
                <div className="mb-6 relative">
                  <div
                    className="absolute inset-0 blur-2xl opacity-50 rounded-full"
                    style={{ background: `radial-gradient(circle, ${step.glow}, transparent)` }}
                  />
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon transition-colors">
                  {step.title}
                </h3>

                <div className="mb-4">
                  <div className="text-neon font-bold text-sm mb-1">{step.duration}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">{step.timing}</div>
                </div>

                <p className="text-gray-400 leading-relaxed flex-grow">
                  {step.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${step.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Below Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            data-cal-namespace="discovery"
            data-cal-link="pandagen/discovery"
            data-cal-config='{"layout":"month_view"}'
            className="group px-10 py-5 bg-gradient-to-r from-neon to-blue-500 text-black font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:shadow-[0_0_60px_rgba(34,211,238,0.8)] relative overflow-hidden"
          >
            <span className="relative z-10">Book Free Audit (Step 1)</span>
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Same-day response. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
