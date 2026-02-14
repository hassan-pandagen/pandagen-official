"use client";

import { motion } from "framer-motion";
import { Code2, Database, CreditCard, Globe, Lock, Zap } from "lucide-react";

const techStack = [
  {
    name: "Next.js 15",
    category: "Framework",
    icon: Zap,
    color: "text-white",
  },
  {
    name: "Vercel",
    category: "Hosting",
    icon: Globe,
    color: "text-white",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: Code2,
    color: "text-blue-400",
  },
  {
    name: "Stripe",
    category: "Payments",
    icon: CreditCard,
    color: "text-purple-400",
  },
  {
    name: "Supabase",
    category: "Database",
    icon: Database,
    color: "text-green-400",
  },
  {
    name: "Auth0",
    category: "Security",
    icon: Lock,
    color: "text-orange-400",
  },
];

export default function BuiltWith() {
  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs text-neon uppercase tracking-[0.2em] mb-4 font-bold">
            Enterprise Tech Stack
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Built With <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-400">Industry Leaders</span>
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
              <div className="relative bg-gradient-to-b from-white/[0.06] to-transparent border border-white/10 rounded-xl p-6 hover:border-neon/30 transition-all duration-300 flex flex-col items-center gap-3 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:-translate-y-1">
                {/* Icon */}
                <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8" />
                </div>

                {/* Name */}
                <div className="text-center">
                  <div className="text-white font-bold text-sm mb-1">{tech.name}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">{tech.category}</div>
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
          className="text-center text-gray-500 text-sm mt-10"
        >
          Battle-tested tools used by companies like Airbnb, Netflix, and Uber
        </motion.p>
      </div>
    </section>
  );
}
