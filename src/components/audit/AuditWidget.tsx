"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowRight, Lock, Zap, Search } from "lucide-react";
import AuditLoadingState from "./AuditLoadingState";
import AuditEmailGate from "./AuditEmailGate";
import { getScoreTextClass, getScoreBorderClass } from "@/lib/audit/scoring";
import type { PageSpeedResult } from "@/lib/audit/pagespeed";

type WidgetState = "input" | "loading" | "results";

export default function AuditWidget() {
  const [state, setState] = useState<WidgetState>("input");
  const [url, setUrl] = useState("");
  const [auditData, setAuditData] = useState<PageSpeedResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEmailGateOpen, setIsEmailGateOpen] = useState(false);

  const handleAnalyze = async () => {
    if (!url.trim()) {
      setError("Please enter a URL");
      return;
    }

    setError(null);
    setState("loading");

    try {
      const response = await fetch("/api/audit/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Analysis failed");
      }

      setAuditData(result.data);
      setState("results");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
      setState("input");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAnalyze();
  };

  const handleReset = () => {
    setState("input");
    setUrl("");
    setAuditData(null);
    setError(null);
  };

  return (
    <>
      {/* Desktop Widget */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative hidden lg:flex justify-center items-center"
      >
        <motion.div
          whileHover={state === "input" ? { scale: 1.02, rotateY: 3 } : undefined}
          className="relative w-full max-w-xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/15 rounded-[2.5rem] p-10 overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.12),0_0_120px_rgba(139,92,246,0.06)]"
        >
          {/* Aurora glow effects */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-neon/20 blur-[120px] pointer-events-none animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/15 blur-[100px] pointer-events-none animate-pulse [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 blur-[70px] pointer-events-none" />

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {state === "input" && (
                <motion.div
                  key="input"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <div className="text-xs text-neon uppercase tracking-[0.2em] mb-2 font-bold">
                      Quick Free Website Audit
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Is Your Site Losing on Google?
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      See how you stack up against competitors.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="yourwebsite.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all text-lg"
                      />
                    </div>

                    {error && <p className="text-red-400 text-sm">{error}</p>}

                    <button
                      onClick={handleAnalyze}
                      className="w-full py-4 bg-neon text-black font-bold text-lg rounded-xl hover:bg-neon/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-[1.01] group"
                    >
                      Analyze Free
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3" /> No signup required
                    </span>
                    <span className="text-gray-700">|</span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3" /> Takes a few seconds
                    </span>
                  </div>
                </motion.div>
              )}

              {state === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <AuditLoadingState url={url} />
                </motion.div>
              )}

              {state === "results" && auditData && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-5"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Search className="w-4 h-4 text-neon" />
                    <span className="truncate">{url}</span>
                  </div>

                  {/* 4 Metric Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <MetricCard label="Performance" value={auditData.performanceScore} suffix="/100" isScore delay={0} />
                    <MetricCard label="Load Time" value={auditData.loadTime} suffix="s" delay={0.1} />
                    <MetricCard label="Page Size" value={auditData.pageSize} isText delay={0.2} />
                    <MetricCard label="SEO Score" value={auditData.seoScore} suffix="/100" isScore delay={0.3} />
                  </div>

                  <button
                    onClick={() => setIsEmailGateOpen(true)}
                    className="w-full py-4 bg-neon text-black font-bold rounded-xl hover:bg-neon/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-[1.01] group"
                  >
                    Get Full Report
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full text-center text-sm text-gray-500 hover:text-neon transition-colors"
                  >
                    Scan another site
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Decorative floating elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 border border-dashed border-white/10 rounded-full animate-spin-slow pointer-events-none" />
        <div className="absolute bottom-10 -left-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-30 animate-float" />
      </motion.div>

      {/* Mobile Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="lg:hidden mt-8 max-w-md mx-auto"
      >
        <div className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-[0_0_40px_rgba(6,182,212,0.06)]">
          <AnimatePresence mode="wait">
            {state === "input" && (
              <motion.div key="m-input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                <h3 className="text-lg font-bold text-white">Is Your Site Losing on Google?</h3>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="yourwebsite.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
                  />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                  onClick={handleAnalyze}
                  className="w-full py-3 bg-neon text-black font-bold rounded-xl hover:bg-neon/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)] group"
                >
                  Analyze Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}

            {state === "loading" && (
              <motion.div key="m-loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <AuditLoadingState url={url} />
              </motion.div>
            )}

            {state === "results" && auditData && (
              <motion.div key="m-results" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <div className="text-sm text-gray-400 truncate">{url}</div>
                <div className="grid grid-cols-2 gap-2">
                  <MetricCard label="Performance" value={auditData.performanceScore} suffix="/100" isScore delay={0} />
                  <MetricCard label="Load Time" value={auditData.loadTime} suffix="s" delay={0.1} />
                  <MetricCard label="Page Size" value={auditData.pageSize} isText delay={0.2} />
                  <MetricCard label="SEO Score" value={auditData.seoScore} suffix="/100" isScore delay={0.3} />
                </div>
                <button
                  onClick={() => setIsEmailGateOpen(true)}
                  className="w-full py-3 bg-neon text-black font-bold rounded-xl hover:bg-neon/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.3)] group"
                >
                  Get Full Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={handleReset} className="w-full text-center text-xs text-gray-500 hover:text-neon transition-colors">
                  Scan another site
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Email Gate Modal */}
      <AuditEmailGate
        isOpen={isEmailGateOpen}
        onClose={() => setIsEmailGateOpen(false)}
        url={url}
        auditData={auditData}
      />
    </>
  );
}

/* --- MetricCard --- */
function MetricCard({
  label,
  value,
  suffix,
  isScore,
  isText,
  delay,
}: {
  label: string;
  value: number | string;
  suffix?: string;
  isScore?: boolean;
  isText?: boolean;
  delay: number;
}) {
  const numericValue = typeof value === "number" ? value : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      className={`bg-white/5 rounded-2xl p-4 border border-white/5 ${
        isScore ? getScoreBorderClass(numericValue) : ""
      }`}
    >
      <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1 font-bold">
        {label}
      </div>
      <div
        className={`text-2xl font-bold font-mono ${
          isScore ? getScoreTextClass(numericValue) : "text-white"
        }`}
      >
        {isText ? (
          value
        ) : (
          <AnimatedCounter target={numericValue} suffix={suffix} />
        )}
      </div>
    </motion.div>
  );
}

/* --- Animated Counter --- */
function AnimatedCounter({ target, suffix }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const steps = 30;
    const increment = target / steps;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.round(current * 10) / 10);
      }
    }, 33);
    return () => clearInterval(interval);
  }, [target]);

  const display = suffix === "s" ? count.toFixed(1) : Math.round(count);
  return (
    <>
      {display}
      {suffix}
    </>
  );
}
