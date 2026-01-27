"use client";

import { motion } from "framer-motion";

export default function Logo({ size = "lg" }: { size?: "sm" | "lg" }) {
  return (
    <motion.div
      className="relative inline-flex items-center gap-3"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Panda Icon */}
      <motion.div
        className="relative"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={size === "sm" ? "w-8 h-8" : "w-12 h-12"}
        >
          {/* Panda Head */}
          <circle cx="24" cy="24" r="20" fill="#0F172A" stroke="#06B6D4" strokeWidth="2" />
          {/* Ears */}
          <circle cx="10" cy="10" r="6" fill="#0F172A" stroke="#F97316" strokeWidth="2" />
          <circle cx="38" cy="10" r="6" fill="#0F172A" stroke="#F97316" strokeWidth="2" />
          {/* Eye Patches */}
          <ellipse cx="16" cy="22" rx="6" ry="7" fill="#F97316" />
          <ellipse cx="32" cy="22" rx="6" ry="7" fill="#F97316" />
          {/* Eyes */}
          <circle cx="16" cy="22" r="2.5" fill="#fff" />
          <circle cx="32" cy="22" r="2.5" fill="#fff" />
          {/* Nose */}
          <ellipse cx="24" cy="32" rx="4" ry="3" fill="#06B6D4" />
          {/* Mouth smile */}
          <path d="M20 36 Q24 40 28 36" stroke="#06B6D4" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      {/* Text */}
      <div className="flex flex-col">
        <span className={`font-bold tracking-tighter leading-none ${size === "sm" ? "text-lg" : "text-2xl"}`}>
          PANDA<span className="text-neon">GEN</span>
        </span>
        <span className={`font-medium tracking-widest text-gray-500 uppercase ${size === "sm" ? "text-[8px]" : "text-xs"}`}>
          Code Lab
        </span>
      </div>
    </motion.div>
  );
}
