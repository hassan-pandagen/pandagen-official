"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, TrendingUp, DollarSign, Code2 } from "lucide-react";

export default function ProofMarquee() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const stats = [
    { value: "<1s", label: "Load Time", icon: Zap, color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
    { value: "98+", label: "Google PageSpeed", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50 border-green-100" },
    { value: "$0/mo", label: "Hosting Cost", icon: DollarSign, color: "text-purple-600", bg: "bg-purple-50 border-purple-100" },
    { value: "100%", label: "Code Ownership", icon: Code2, color: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100" },
  ];

  return (
    <section className="py-16 border-y border-gray-200 bg-white relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-50/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} border flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className={`text-4xl md:text-5xl font-black mb-2 tracking-tight ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
