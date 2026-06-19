"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowRight, Search, CheckCircle2, AlertTriangle, XCircle, Bot, Gauge, TrendingDown, Calendar, Mail } from "lucide-react";
import lazyLoad from "next/dynamic";
import AuditLoadingState from "./AuditLoadingState";
import AuditEmailGate from "./AuditEmailGate";
import { getScoreTextClass } from "@/lib/audit/scoring";
import type { PageSpeedResult } from "@/lib/audit/pagespeed";
import { trackGAEvent } from "@/components/GoogleAnalytics";

const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

type WidgetState = "idle" | "loading" | "results";

// The 11-point inspection, in display order. AI Readiness leads (it's the 2026 differentiator).
const deepCheckNames = [
  "AI Readiness", "Mobile First UX", "Visual Hierarchy", "CTA Placement",
  "Heading Structure", "Structured Data", "Crawl Budget", "Indexing Speed",
  "Trust Signals", "Security Headers", "Mobile Checkout",
];

// Honest sample of what a typical store scores. Backed by 2026 research:
// Hyperspeed audit of 1,166 stores = 30/100 avg mobile PageSpeed; 58% fail CWV.
const sampleScanLines = [
  { name: "AI Readiness", verdict: "Invisible to ChatGPT & Claude", status: "fail" as const },
  { name: "Mobile load time", verdict: "4.2s — most visitors leave before it loads", status: "fail" as const },
  { name: "Core Web Vitals", verdict: "Poor — Google ranks it below faster sites", status: "fail" as const },
  { name: "Structured data", verdict: "Missing — AI can't read the business", status: "fail" as const },
  { name: "Security headers", verdict: "3 of 6 missing — flagged less secure", status: "warn" as const },
  { name: "Heading structure", verdict: "OK", status: "pass" as const },
];

export default function AuditWidget() {
  const [state, setState] = useState<WidgetState>("idle");
  const [url, setUrl] = useState("");
  const [auditData, setAuditData] = useState<PageSpeedResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEmailGateOpen, setIsEmailGateOpen] = useState(false);

  const handleAnalyze = async () => {
    const trimmed = url.trim();
    if (!trimmed) { setError("Enter your website URL to scan"); return; }
    if (trimmed.includes("@") && !trimmed.startsWith("http")) {
      setError("That looks like an email. Paste your website URL (e.g. yourwebsite.com)");
      return;
    }
    if (!trimmed.includes(".") || /\s/.test(trimmed)) {
      setError("Enter a valid website URL (e.g. yourwebsite.com)");
      return;
    }

    setError(null);
    setState("loading");

    try {
      const response = await fetch("/api/audit/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: trimmed }),
      });

      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        throw new Error("We couldn't analyze that URL. Double-check the address and try again.");
      }

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Analysis failed. Check the URL and try again.");

      setAuditData(result.data);
      setState("results");

      trackGAEvent("audit_url_submit", {
        url: trimmed,
        performance_score: result.data?.performanceScore,
        platform_detected: result.data?.platformDetected,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
      setState("idle");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAnalyze();
  };

  const handleReset = () => {
    setState("idle");
    setUrl("");
    setAuditData(null);
    setError(null);
  };

  useEffect(() => {
    if (window.location.hash === "#audit-widget") {
      setTimeout(() => {
        const el = document.getElementById("audit-widget");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  }, []);

  // Derived hero diagnostics from a real result
  const aiCheck = auditData?.deepChecks?.checks.find((c) => c.id === "ai-readiness");
  const totalFails = auditData?.deepChecks
    ? auditData.deepChecks.checks.filter((c) => c.status === "fail").length
    : (auditData?.criticalIssues ?? 0);

  return (
    <div id="audit-widget">
      {/* ============ DESKTOP ============ */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative hidden lg:flex justify-center items-center"
      >
        <div className="relative w-full max-w-xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-elevated">
          {/* Terminal chrome */}
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
              {/* ---------- IDLE: honest hook + 3 hero diagnostics + sample scan ---------- */}
              {state === "idle" && (
                <motion.div key="idle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-5">
                  <div>
                    <p className="text-xs text-stone-500 mb-2">276 sites audited in 2026 · average revenue leak found: $3,200/month</p>
                    <h2 className="text-xl font-bold text-charcoal leading-tight">
                      Most sites we audit look like this.
                    </h2>
                    <p className="text-sm text-stone-600 mt-1">The three things that decide whether you win in 2026:</p>
                  </div>

                  {/* 3 hero diagnostics — shown failing on a typical site */}
                  <div className="space-y-2.5">
                    <HeroDiag icon={Bot} q="Can ChatGPT, Claude & Google AI see you?" verdict="Invisible sites aren't in the answer when buyers ask AI" bad />
                    <HeroDiag icon={Gauge} q="Does it load under 1 second on mobile?" verdict="Average is 4.2s. Past 3 seconds, most visitors leave" bad />
                    <HeroDiag icon={TrendingDown} q="What is slow speed costing you?" verdict="~$3,200/mo leaking to faster competitors" bad />
                  </div>

                  {/* Live sample scan ticker */}
                  <div className="rounded-xl border border-stone-200 bg-stone-50/60 overflow-hidden">
                    <div className="px-4 py-2 border-b border-stone-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Sample: typical store</span>
                      <span className="text-[10px] font-bold font-mono text-red-500">31/100</span>
                    </div>
                    <div className="divide-y divide-stone-100">
                      {sampleScanLines.map((line, i) => (
                        <motion.div
                          key={line.name}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.15 * i, duration: 0.4 }}
                          className="flex items-center gap-2.5 px-4 py-1.5"
                        >
                          {line.status === "pass" && <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />}
                          {line.status === "warn" && <AlertTriangle className="w-3.5 h-3.5 text-orange-500 shrink-0" />}
                          {line.status === "fail" && <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />}
                          <span className="text-xs font-medium text-stone-700 flex-1">{line.name}</span>
                          <span className={`text-[11px] font-mono ${line.status === "pass" ? "text-green-600" : line.status === "warn" ? "text-orange-500" : "text-red-500"}`}>{line.verdict}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* URL input + soft CTA */}
                  <div className="space-y-3">
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="yourwebsite.com"
                        aria-label="Website URL to audit"
                        className="w-full bg-stone-50 border border-gray-200 rounded-xl pl-12 pr-4 py-4 text-charcoal placeholder:text-gray-400 focus:outline-hidden focus:border-cognac focus:ring-2 focus:ring-cognac/20 transition-all text-base font-medium"
                      />
                    </div>
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <button
                      onClick={handleAnalyze}
                      className="w-full py-4 bg-charcoal hover:bg-stone-800 text-white font-bold text-base rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01] group"
                    >
                      Find out how you look
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-xs text-stone-500">Full 11-point breakdown on screen. No email required.</p>
                  </div>
                </motion.div>
              )}

              {state === "loading" && (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <AuditLoadingState url={url} />
                </motion.div>
              )}

              {/* ---------- RESULTS: 3 hero answers + all 11 unblurred + dual CTA ---------- */}
              {state === "results" && auditData && (
                <motion.div key="results" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Search className="w-4 h-4 text-cognac" />
                    <span className="truncate">{url}</span>
                    {auditData.platformDetected && auditData.platformDetected !== "Unknown" && (
                      <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-stone-500">{auditData.platformDetected}</span>
                    )}
                  </div>

                  {/* 3 hero answers, now personalized */}
                  <div className="space-y-2.5">
                    <HeroResult icon={Bot} q="Can AI engines see & cite you?" score={aiCheck?.score ?? 0} suffix="/100" />
                    <HeroResult icon={Gauge} q="Mobile load time" score={auditData.loadTime} suffix="s" lowerIsBetter goodUnder={1} okUnder={2.5} />
                    <HeroResult icon={Search} q="Performance score" score={auditData.performanceScore} suffix="/100" />
                  </div>

                  {/* All 11 checks — UNBLURRED. Generosity beats the email wall. */}
                  {auditData.deepChecks && (
                    <div className="border border-stone-200 rounded-xl overflow-hidden">
                      <div className="px-4 py-2.5 bg-stone-50 border-b border-stone-100 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Full 11-Point Inspection</span>
                        <span className={`text-xs font-bold font-mono ${getScoreTextClass(auditData.deepChecks.overallScore)}`}>
                          {auditData.deepChecks.overallScore}/100
                        </span>
                      </div>
                      <div className="divide-y divide-stone-100 max-h-[200px] overflow-y-auto">
                        {auditData.deepChecks.checks.map((check) => (
                          <div key={check.id} className="flex items-center gap-2.5 px-4 py-2">
                            {check.status === "pass" && <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />}
                            {check.status === "warn" && <AlertTriangle className="w-3.5 h-3.5 text-orange-500 shrink-0" />}
                            {check.status === "fail" && <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />}
                            <span className="text-xs font-medium text-stone-700 flex-1">{check.name}</span>
                            <span className={`text-xs font-bold font-mono ${getScoreTextClass(check.score)}`}>{check.score}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {totalFails > 0 && (
                    <p className="text-sm text-stone-700">
                      <span className="font-bold text-red-600">{totalFails} critical {totalFails === 1 ? "issue" : "issues"}</span> found. The average store scores 31 on mobile. Here is what to fix first.
                    </p>
                  )}

                  {/* DUAL CTA — primary: book teardown (Cal.com), secondary: email PDF */}
                  <CalModalButton className="w-full py-4 bg-cognac text-white font-bold rounded-xl hover:bg-amber-700 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] group">
                    <Calendar className="w-5 h-5" />
                    Book a 15-min teardown with Hassan
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </CalModalButton>
                  <button
                    onClick={() => setIsEmailGateOpen(true)}
                    className="w-full py-3 bg-white border border-stone-200 text-charcoal font-semibold rounded-xl hover:border-cognac/40 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Mail className="w-4 h-4 text-stone-500" />
                    Or email me the 3 biggest fixes for my site + what each costs
                  </button>
                  <button onClick={handleReset} className="w-full text-center text-sm text-gray-500 hover:text-cognac transition-colors">
                    Scan another site
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* ============ MOBILE ============ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="lg:hidden mt-8 max-w-md mx-auto"
      >
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-card">
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
              {state === "idle" && (
                <motion.div key="m-idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  <div>
                    <p className="text-[10px] text-stone-500 mb-1">276 sites audited in 2026 · avg leak $3,200/mo</p>
                    <h2 className="text-lg font-bold text-charcoal leading-tight">Most sites we audit look like this.</h2>
                  </div>
                  <div className="space-y-2">
                    <HeroDiag icon={Bot} q="Can ChatGPT & Google AI see you?" verdict="Most: invisible to AI" bad compact />
                    <HeroDiag icon={Gauge} q="Loads under 1s on mobile?" verdict="Avg: 4.2s" bad compact />
                    <HeroDiag icon={TrendingDown} q="What slow speed costs you" verdict="~$3,200/mo" bad compact />
                  </div>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="yourwebsite.com"
                      aria-label="Website URL to audit"
                      className="w-full bg-stone-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-charcoal placeholder:text-gray-400 focus:outline-hidden focus:border-cognac focus:ring-2 focus:ring-cognac/20 transition-all"
                    />
                  </div>
                  {error && <p className="text-red-600 text-sm">{error}</p>}
                  <button
                    onClick={handleAnalyze}
                    className="w-full py-3 bg-charcoal hover:bg-stone-800 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    Find out how you look <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-[10px] text-stone-500">Full breakdown on screen. No email required.</p>
                </motion.div>
              )}

              {state === "loading" && (
                <motion.div key="m-loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <AuditLoadingState url={url} />
                </motion.div>
              )}

              {state === "results" && auditData && (
                <motion.div key="m-results" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-3">
                  <div className="text-sm text-stone-600 truncate">{url}</div>
                  <div className="space-y-2">
                    <HeroResult icon={Bot} q="AI visibility" score={aiCheck?.score ?? 0} suffix="/100" compact />
                    <HeroResult icon={Gauge} q="Mobile load" score={auditData.loadTime} suffix="s" lowerIsBetter goodUnder={1} okUnder={2.5} compact />
                    <HeroResult icon={Search} q="Performance" score={auditData.performanceScore} suffix="/100" compact />
                  </div>
                  {auditData.deepChecks && (
                    <div className="border border-stone-200 rounded-xl overflow-hidden">
                      <div className="px-3 py-2 bg-stone-50 border-b border-stone-100 flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-stone-500">Full 11-Point Inspection</span>
                        <span className={`text-[10px] font-bold font-mono ${getScoreTextClass(auditData.deepChecks.overallScore)}`}>{auditData.deepChecks.overallScore}/100</span>
                      </div>
                      <div className="divide-y divide-stone-100 max-h-[180px] overflow-y-auto">
                        {auditData.deepChecks.checks.map((check) => (
                          <div key={check.id} className="flex items-center gap-2 px-3 py-1.5">
                            {check.status === "pass" && <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0" />}
                            {check.status === "warn" && <AlertTriangle className="w-3 h-3 text-orange-500 shrink-0" />}
                            {check.status === "fail" && <XCircle className="w-3 h-3 text-red-500 shrink-0" />}
                            <span className="text-[11px] font-medium text-stone-700 flex-1">{check.name}</span>
                            <span className={`text-[11px] font-bold font-mono ${getScoreTextClass(check.score)}`}>{check.score}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <CalModalButton className="w-full py-3 bg-cognac text-white font-bold rounded-xl hover:bg-amber-700 transition-all flex items-center justify-center gap-2 text-sm group">
                    <Calendar className="w-4 h-4" /> Book a teardown with Hassan <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </CalModalButton>
                  <button
                    onClick={() => setIsEmailGateOpen(true)}
                    className="w-full py-2.5 bg-white border border-stone-200 text-charcoal font-semibold rounded-xl hover:border-cognac/40 transition-all flex items-center justify-center gap-2 text-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-stone-500" /> Or email me the 3 biggest fixes + costs
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

      {/* Email Gate Modal — now the SOFT secondary path, not a wall */}
      <AuditEmailGate
        isOpen={isEmailGateOpen}
        onClose={() => setIsEmailGateOpen(false)}
        url={url}
        auditData={auditData}
      />
    </div>
  );
}

/* --- Hero diagnostic (idle state, shows a typical failing site) --- */
function HeroDiag({
  icon: Icon,
  q,
  verdict,
  bad,
  compact,
}: {
  icon: React.ComponentType<{ className?: string }>;
  q: string;
  verdict: string;
  bad?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={`flex items-start gap-3 rounded-xl border ${bad ? "border-red-100 bg-red-50/50" : "border-stone-200 bg-stone-50"} ${compact ? "px-3 py-2" : "px-4 py-3"}`}>
      <Icon className={`${compact ? "w-4 h-4" : "w-5 h-5"} ${bad ? "text-red-500" : "text-stone-500"} shrink-0 mt-0.5`} />
      <div className="min-w-0 flex-1">
        <p className={`${compact ? "text-xs" : "text-sm"} font-bold text-charcoal leading-tight`}>{q}</p>
        <p className={`${compact ? "text-[10px]" : "text-xs"} ${bad ? "text-red-600" : "text-stone-500"} mt-0.5`}>{verdict}</p>
      </div>
    </div>
  );
}

/* --- Hero result (results state, personalized score) --- */
function HeroResult({
  icon: Icon,
  q,
  score,
  suffix,
  lowerIsBetter,
  goodUnder,
  okUnder,
  compact,
}: {
  icon: React.ComponentType<{ className?: string }>;
  q: string;
  score: number;
  suffix: string;
  lowerIsBetter?: boolean;
  goodUnder?: number;
  okUnder?: number;
  compact?: boolean;
}) {
  // Color logic: score metrics use 90/50 thresholds; load-time uses goodUnder/okUnder
  let tone: "good" | "ok" | "bad";
  if (lowerIsBetter && goodUnder !== undefined && okUnder !== undefined) {
    tone = score <= goodUnder ? "good" : score <= okUnder ? "ok" : "bad";
  } else {
    tone = score >= 90 ? "good" : score >= 50 ? "ok" : "bad";
  }
  const toneClass = tone === "good" ? "text-green-600" : tone === "ok" ? "text-orange-500" : "text-red-500";
  const borderClass = tone === "good" ? "border-green-100 bg-green-50/50" : tone === "ok" ? "border-orange-100 bg-orange-50/50" : "border-red-100 bg-red-50/50";

  return (
    <div className={`flex items-center gap-3 rounded-xl border ${borderClass} ${compact ? "px-3 py-2" : "px-4 py-3"}`}>
      <Icon className={`${compact ? "w-4 h-4" : "w-5 h-5"} ${toneClass} shrink-0`} />
      <p className={`${compact ? "text-xs" : "text-sm"} font-bold text-charcoal flex-1 leading-tight`}>{q}</p>
      <span className={`font-mono font-bold ${compact ? "text-base" : "text-xl"} ${toneClass}`}>
        {suffix === "s" ? score.toFixed(1) : Math.round(score)}{suffix}
      </span>
    </div>
  );
}
