"use client";

import { motion } from "@/components/ui/motion";
import { Code2, Database, CreditCard, Globe, Lock, Zap } from "lucide-react";

const techStack = [
  {
    name: "Next.js 16",
    category: "Web framework",
    icon: Zap,
    color: "text-charcoal",
  },
  {
    name: "Vercel",
    category: "Deployment option",
    icon: Globe,
    color: "text-charcoal",
  },
  {
    name: "TypeScript",
    category: "Static checking",
    icon: Code2,
    color: "text-cognac",
  },
  {
    name: "Stripe",
    category: "Payments",
    icon: CreditCard,
    color: "text-stone-700",
  },
  {
    name: "Supabase",
    category: "Database",
    icon: Database,
    color: "text-cognac",
  },
  {
    name: "Auth0",
    category: "Login Security",
    icon: Lock,
    color: "text-stone-700",
  },
];

export default function BuiltWith() {
  return (
    <section className="py-16 border-y border-stone-200 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-stone-200/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs text-cognac uppercase tracking-[0.2em] mb-4 font-bold">
            Possible building blocks
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
            Select tools <span className="text-transparent bg-clip-text bg-linear-to-r from-cognac to-amber-600">to fit the approved scope</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white border border-stone-200 rounded-xl p-6 hover:border-cognac/30 transition-all duration-300 flex flex-col items-center gap-3 hover:shadow-card-hover hover:-translate-y-1">
                {/* Icon */}
                <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8" />
                </div>

                {/* Name */}
                <div className="text-center">
                  <div className="text-charcoal font-bold text-sm mb-1">{tech.name}</div>
                  <div className="text-stone-600 text-xs uppercase tracking-wider">{tech.category}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-stone-600 text-sm mt-10"
        >
          The architecture and vendors are selected after reviewing security, data, portability, cost, support, and operational requirements.
        </motion.p>
      </div>
    </section>
  );
}
