"use client";

import { motion } from "framer-motion";

const proofPoints = [
  { value: "98+", label: "Avg PageSpeed Score" },
  { value: "<1s", label: "Avg Load Time" },
  { value: "$0", label: "Platform Fees" },
  { value: "100%", label: "Code Ownership" },
];

export default function TrustLogoBar() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-stretch divide-x divide-gray-200"
        >
          {proofPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="flex-1 flex flex-col items-center justify-center py-5 px-4 text-center"
            >
              <div className="text-2xl md:text-3xl font-black text-charcoal tracking-tight leading-none mb-1">
                {point.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold">
                {point.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
