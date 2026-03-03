"use client";

import { motion } from "framer-motion";

export default function Logo({ size = "lg" }: { size?: "sm" | "lg" }) {
  return (
    <motion.div
      className="relative inline-flex items-center gap-2.5"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Clean geometric mark */}
      <div
        className={`bg-cognac rounded-lg flex items-center justify-center ${
          size === "sm" ? "w-7 h-7" : "w-10 h-10"
        }`}
      >
        <span
          className={`text-white font-black leading-none ${
            size === "sm" ? "text-sm" : "text-xl"
          }`}
        >
          P
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className={`font-bold tracking-tight leading-none text-charcoal ${size === "sm" ? "text-lg" : "text-2xl"}`}>
          PANDA<span className="text-cognac">GEN</span>
        </span>
        <span className={`font-medium tracking-widest text-stone-600 uppercase ${size === "sm" ? "text-[8px]" : "text-xs"}`}>
          Code Lab
        </span>
      </div>
    </motion.div>
  );
}
