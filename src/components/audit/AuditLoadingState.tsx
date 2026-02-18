"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const loadingSteps = [
  "Connecting to server...",
  "Running Lighthouse audit...",
  "Analyzing Core Web Vitals...",
  "Checking SEO compliance...",
  "Evaluating accessibility...",
  "Calculating score...",
];

export default function AuditLoadingState({ url }: { url: string }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-4">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <motion.div
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-sm text-neon font-mono font-bold ml-2 truncate"
        >
          Scanning {url}
        </motion.div>
      </div>

      {/* Terminal lines */}
      <div className="font-mono text-sm space-y-2.5 min-h-[200px]">
        {loadingSteps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -10 }}
            animate={i <= currentStep ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-center gap-2 ${
              i < currentStep
                ? "text-green-400"
                : i === currentStep
                ? "text-neon"
                : "text-gray-600"
            }`}
          >
            <span className="w-3 text-center">
              {i < currentStep ? "✓" : i === currentStep ? ">" : " "}
            </span>
            <span>{step}</span>
            {i === currentStep && <span className="animate-pulse">_</span>}
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-black/50 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 8, ease: "linear" }}
          className="h-full bg-gradient-to-r from-blue-500 to-neon shadow-[0_0_10px_#22d3ee]"
        />
      </div>
    </div>
  );
}
