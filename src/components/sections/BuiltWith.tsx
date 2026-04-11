"use client";

import { motion } from "framer-motion";
import { Code2, Database, CreditCard, Globe, Lock, Zap } from "lucide-react";

const techStack = [
  {
    name: "Next.js 16",
    category: "Speed Engine",
    icon: Zap,
    color: "text-charcoal",
  },
  {
    name: "Vercel",
    category: "Free to Start",
    icon: Globe,
    color: "text-charcoal",
  },
  {
    name: "TypeScript",
    category: "Bug-Free Code",
    icon: Code2,
    color: "text-blue-600",
  },
  {
    name: "Stripe",
    category: "Payments",
    icon: CreditCard,
    color: "text-purple-600",
  },
  {
    name: "Supabase",
    category: "Database",
    icon: Database,
    color: "text-green-600",
  },
  {
    name: "Auth0",
    category: "Login Security",
    icon: Lock,
    color: "text-orange-500",
  },
];

export default function BuiltWith() {
  return (
    <section className="py-16 border-y border-gray-200 bg-white relative overflow-hidden">
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
            Enterprise Tech Stack
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-charcoal">
            Built With <span className="text-transparent bg-clip-text bg-linear-to-r from-cognac to-indigo-500">Industry Leaders</span>
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
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 hover:border-cognac/30 transition-all duration-300 flex flex-col items-center gap-3 hover:shadow-card-hover hover:-translate-y-1">
                {/* Icon */}
                <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8" />
                </div>

                {/* Name */}
                <div className="text-center">
                  <div className="text-charcoal font-bold text-sm mb-1">{tech.name}</div>
                  <div className="text-stone-500 text-xs uppercase tracking-wider">{tech.category}</div>
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
          className="text-center text-stone-500 text-sm mt-10"
        >
          Battle-tested tools used by companies like Airbnb, Netflix, and Uber
        </motion.p>
      </div>
    </section>
  );
}
