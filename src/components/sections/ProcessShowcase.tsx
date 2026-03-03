"use client";

import { motion } from "framer-motion";
import { Code2, GitBranch, Rocket, Palette } from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "Design in Figma",
    description: "Every project starts with a custom design, never a template.",
    detail: "Custom wireframes & prototypes",
  },
  {
    icon: Code2,
    title: "Hand-Written Code",
    description: "Every line is written by our engineers. No drag-and-drop. No plugins.",
    detail: "Clean, fast, maintainable code",
  },
  {
    icon: GitBranch,
    title: "Version Controlled",
    description: "Every change is tracked in Git. Nothing gets lost. Full transparency.",
    detail: "Complete project history",
  },
  {
    icon: Rocket,
    title: "One-Click Deploy",
    description: "Your site goes live on a global network. Fast everywhere, always online.",
    detail: "99.99% uptime guaranteed",
  },
];

export default function ProcessShowcase() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-white to-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 text-sm text-stone-600 mb-6">
            <Code2 className="w-4 h-4 text-cognac" />
            How We Build
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            See How Your Project{" "}
            <span className="text-cognac">Actually Gets Built.</span>
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            No mystery. No outsourcing. Here&apos;s exactly how we turn your idea into a live, revenue-generating website.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-cognac/30 hover:shadow-card-hover transition-all group"
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-cognac flex items-center justify-center text-white font-bold text-sm">
                {i + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center mb-4 group-hover:bg-cognac/10 group-hover:border-cognac/20 transition-colors">
                <step.icon className="w-6 h-6 text-cognac" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">{step.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">{step.description}</p>
              <div className="text-xs text-cognac font-medium">{step.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
