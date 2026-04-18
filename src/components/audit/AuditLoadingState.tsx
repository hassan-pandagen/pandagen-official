"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BarChart3, Smartphone, MousePointer, Heading, Code2, Globe, Zap, ShieldCheck, CreditCard, Bot, Search } from "lucide-react";

const auditSteps = [
  { text: "Analyzing visual hierarchy...", icon: BarChart3 },
  { text: "Checking first mobile screen...", icon: Smartphone },
  { text: "Detecting CTA overload...", icon: MousePointer },
  { text: "Auditing heading structure...", icon: Heading },
  { text: "Scanning structured data...", icon: Code2 },
  { text: "Finding crawl waste...", icon: Globe },
  { text: "Testing indexing speed...", icon: Zap },
  { text: "Evaluating trust signals...", icon: ShieldCheck },
  { text: "Checking security headers...", icon: ShieldCheck },
  { text: "Scoring mobile checkout...", icon: CreditCard },
  { text: "Measuring AI readiness...", icon: Bot },
];

export default function AuditLoadingState({ url }: { url: string }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < auditSteps.length - 1 ? prev + 1 : prev));
    }, 450);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
        <Search className="w-4 h-4 text-cognac" />
        <motion.div
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-sm text-cognac font-bold truncate"
        >
          Auditing {url}
        </motion.div>
      </div>

      {/* Steps */}
      <div className="space-y-1.5 min-h-[280px]">
        {auditSteps.map((step, i) => {
          const Icon = step.icon;
          const isDone = i < currentStep;
          const isCurrent = i === currentStep;
          const isVisible = i <= currentStep;

          return (
            <motion.div
              key={step.text}
              initial={{ opacity: 0, x: -10 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center gap-3 px-2 py-1.5 rounded-lg ${
                isCurrent ? "bg-blue-50/50" : ""
              }`}
            >
              <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                isDone
                  ? "bg-green-50 border border-green-200"
                  : isCurrent
                  ? "bg-blue-50 border border-blue-200"
                  : "bg-stone-50 border border-gray-200"
              }`}>
                {isDone ? (
                  <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <Icon className={`w-3 h-3 ${isCurrent ? "text-cognac" : "text-gray-400"}`} />
                )}
              </div>
              <span className={`text-xs font-medium ${
                isDone ? "text-green-600" : isCurrent ? "text-cognac" : "text-gray-400"
              }`}>
                {step.text}
              </span>
              {isCurrent && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="text-cognac text-xs"
                >
                  _
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5.5, ease: "linear" }}
          className="h-full bg-cognac rounded-full"
        />
      </div>

      <div className="text-[10px] text-stone-500 text-center italic">
        Running 11 checks PageSpeed can&apos;t. Takes about 30 seconds.
      </div>
    </div>
  );
}
