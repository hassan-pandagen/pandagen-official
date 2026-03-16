"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowRight, Search, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import AuditLoadingState from "./AuditLoadingState";
import AuditEmailGate from "./AuditEmailGate";
import { getScoreTextClass, getScoreBorderClass } from "@/lib/audit/scoring";
import type { PageSpeedResult } from "@/lib/audit/pagespeed";

type WidgetState = "input" | "loading" | "results";

const deepChecks = [
  "Visual Hierarchy", "Mobile First UX", "CTA Placement",
  "Heading Structure", "Structured Data", "Crawl Budget",
  "Indexing Speed", "Trust Signals", "Security Headers",
  "Mobile Checkout", "AI Readiness",
];

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
          whileHover={state === "input" ? { scale: 1.01 } : undefined}
          className="relative w-full max-w-xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-elevated"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 bg-stone-50/80">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-charcoal animate-pulse" />
              <span className="text-[10px] font-bold text-[#c2410c] uppercase tracking-wider">AI Audit Engine</span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {state === "input" && (
                <motion.div
                  key="input"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="text-xl font-bold text-charcoal leading-tight mb-1">
                      Get Your AI Audit
                    </h2>
                    <p className="text-sm text-stone-600">
                      PageSpeed scores don&apos;t tell you why people leave without buying. We go 11 layers deeper.
                    </p>
                  </div>

                  {/* URL Input */}
                  <div className="space-y-3">
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="yourwebsite.com"
                        className="w-full bg-stone-50 border border-gray-200 rounded-xl pl-12 pr-4 py-4 text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-cognac focus:ring-2 focus:ring-cognac/20 transition-all text-base font-medium"
                      />
                    </div>

                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    <button
                      onClick={handleAnalyze}
                      className="w-full py-4 bg-charcoal hover:bg-stone-800 text-white font-bold text-base rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01] group"
                    >
                      Run AI Audit
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* 11 Deep Checks Preview */}
                  <div className="mt-6 pt-6 border-t border-stone-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-xs font-bold uppercase tracking-widest text-stone-600">
                        11-Point Inspection Includes:
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {deepChecks.map((check, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <svg className="w-3 h-3 text-charcoal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs font-medium text-stone-600">{check}</span>
                        </div>
                      ))}
                    </div>
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
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Search className="w-4 h-4 text-cognac" />
                    <span className="truncate">{url}</span>
                  </div>

                  {/* 4 Metric Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <MetricCard label="Performance" value={auditData.performanceScore} suffix="/100" isScore delay={0} />
                    <MetricCard label="Load Time" value={auditData.loadTime} suffix="s" delay={0.1} />
                    <MetricCard label="Page Size" value={auditData.pageSize} isText delay={0.2} />
                    <MetricCard label="SEO Score" value={auditData.seoScore} suffix="/100" isScore delay={0.3} />
                  </div>

                  {/* 11-Point Inspection Teaser, gated behind email */}
                  {auditData.deepChecks && (
                    <div className="border border-stone-200 rounded-xl overflow-hidden relative">
                      <div className="px-4 py-2.5 bg-stone-50 border-b border-stone-100 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">11-Point Inspection</span>
                        <span className={`text-xs font-bold font-mono ${getScoreTextClass(auditData.deepChecks.overallScore)}`}>
                          {auditData.deepChecks.overallScore}/100
                        </span>
                      </div>
                      {/* Show first 3 checks, blur the rest */}
                      <div className="divide-y divide-stone-100">
                        {auditData.deepChecks.checks.slice(0, 3).map((check) => (
                          <div key={check.id} className="flex items-center gap-2.5 px-4 py-2.5">
                            {check.status === 'pass' && <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />}
                            {check.status === 'warn' && <AlertTriangle className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />}
                            {check.status === 'fail' && <XCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />}
                            <span className="text-xs font-medium text-stone-700 flex-1">{check.name}</span>
                            <span className={`text-xs font-bold font-mono ${getScoreTextClass(check.score)}`}>
                              {check.score}
                            </span>
                          </div>
                        ))}
                      </div>
                      {/* Blurred remaining checks */}
                      <div className="relative">
                        <div className="divide-y divide-stone-100 blur-[6px] select-none pointer-events-none">
                          {auditData.deepChecks.checks.slice(3, 6).map((check) => (
                            <div key={check.id} className="flex items-center gap-2.5 px-4 py-2.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-stone-300 flex-shrink-0" />
                              <span className="text-xs font-medium text-stone-700 flex-1">{check.name}</span>
                              <span className="text-xs font-bold font-mono text-stone-400">{check.score}</span>
                            </div>
                          ))}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 flex items-end justify-center pb-2">
                          <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">+8 more checks</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setIsEmailGateOpen(true)}
                    className="w-full py-4 bg-charcoal text-white font-bold rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] group"
                  >
                    Unlock Full 11-Point Report
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full text-center text-sm text-gray-500 hover:text-cognac transition-colors"
                  >
                    Scan another site
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="lg:hidden mt-8 max-w-md mx-auto"
      >
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-card">
          {/* Mobile header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-stone-50/80">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-charcoal animate-pulse" />
              <span className="text-[9px] font-bold text-[#c2410c] uppercase tracking-wider">AI Audit</span>
            </div>
          </div>

          <div className="p-5">
            <AnimatePresence mode="wait">
              {state === "input" && (
                <motion.div key="m-input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  <div>
                    <h2 className="text-lg font-bold text-charcoal mb-1">Get Your AI Audit</h2>
                    <p className="text-xs text-stone-600">11 deep checks beyond PageSpeed.</p>
                  </div>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="yourwebsite.com"
                      className="w-full bg-stone-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-cognac focus:ring-2 focus:ring-cognac/20 transition-all"
                    />
                  </div>
                  {error && <p className="text-red-600 text-sm">{error}</p>}
                  <button
                    onClick={handleAnalyze}
                    className="w-full py-3 bg-charcoal hover:bg-stone-800 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    Run AI Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                  <div className="text-sm text-stone-600 truncate">{url}</div>
                  <div className="grid grid-cols-2 gap-2">
                    <MetricCard label="Performance" value={auditData.performanceScore} suffix="/100" isScore delay={0} />
                    <MetricCard label="Load Time" value={auditData.loadTime} suffix="s" delay={0.1} />
                    <MetricCard label="Page Size" value={auditData.pageSize} isText delay={0.2} />
                    <MetricCard label="SEO Score" value={auditData.seoScore} suffix="/100" isScore delay={0.3} />
                  </div>
                  {/* Mobile Deep Checks, gated */}
                  {auditData.deepChecks && (
                    <div className="border border-stone-200 rounded-xl overflow-hidden relative">
                      <div className="px-3 py-2 bg-stone-50 border-b border-stone-100 flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-stone-500">11-Point Inspection</span>
                        <span className={`text-[10px] font-bold font-mono ${getScoreTextClass(auditData.deepChecks.overallScore)}`}>
                          {auditData.deepChecks.overallScore}/100
                        </span>
                      </div>
                      <div className="divide-y divide-stone-100">
                        {auditData.deepChecks.checks.slice(0, 3).map((check) => (
                          <div key={check.id} className="flex items-center gap-2 px-3 py-2">
                            {check.status === 'pass' && <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0" />}
                            {check.status === 'warn' && <AlertTriangle className="w-3 h-3 text-orange-500 flex-shrink-0" />}
                            {check.status === 'fail' && <XCircle className="w-3 h-3 text-red-500 flex-shrink-0" />}
                            <span className="text-[11px] font-medium text-stone-700 flex-1">{check.name}</span>
                            <span className={`text-[11px] font-bold font-mono ${getScoreTextClass(check.score)}`}>
                              {check.score}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="relative">
                        <div className="divide-y divide-stone-100 blur-[6px] select-none pointer-events-none">
                          {auditData.deepChecks.checks.slice(3, 5).map((check) => (
                            <div key={check.id} className="flex items-center gap-2 px-3 py-2">
                              <CheckCircle2 className="w-3 h-3 text-stone-300 flex-shrink-0" />
                              <span className="text-[11px] font-medium text-stone-700 flex-1">{check.name}</span>
                              <span className="text-[11px] font-bold font-mono text-stone-400">{check.score}</span>
                            </div>
                          ))}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 flex items-end justify-center pb-1.5">
                          <span className="text-[9px] font-bold text-stone-500 uppercase tracking-wider">+8 more checks</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => setIsEmailGateOpen(true)}
                    className="w-full py-3 bg-charcoal text-white font-bold rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 group"
                  >
                    Unlock Full Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={handleReset} className="w-full text-center text-xs text-gray-500 hover:text-cognac transition-colors">
                    Scan another site
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
      className={`bg-stone-50 rounded-xl p-4 border border-gray-200 ${
        isScore ? getScoreBorderClass(numericValue) : ""
      }`}
    >
      <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1 font-bold">
        {label}
      </div>
      <div
        className={`text-2xl font-bold font-mono ${
          isScore ? getScoreTextClass(numericValue) : "text-charcoal"
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
