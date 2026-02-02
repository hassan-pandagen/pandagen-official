"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProofMarquee() {
  const [mounted, setMounted] = useState(false);

  // This ensures the component only runs code on the Client, 
  // preventing the "undefined" error during server-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Return null until client has loaded

  const stats = [
    { value: "100%", label: "Code Ownership" },
    { value: "1s", label: "Avg Load Time" },
    { value: "6+", label: "Enterprise Builds" },
    { value: "24/7", label: "System Uptime" },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center divide-x divide-white/5 mb-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
