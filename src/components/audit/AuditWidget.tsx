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
import { safeAuditAnalyticsSummary } from "@/lib/audit/analyticsSummary";

const CalModalButton = lazyLoad(() => import("@/components/ui/CalModalButton"));

type WidgetState = "idle" | "loading" | "results";

const DESKTOP_URL_INPUT_ID = "audit-url-desktop";
const DESKTOP_URL_ERROR_ID = "audit-url-desktop-error";
const MOBILE_URL_INPUT_ID = "audit-url-mobile";
const MOBILE_URL_ERROR_ID = "audit-url-mobile-error";

// An explicitly illustrative preview of the checks, not a verdict about the visitor's site.
const sampleScanLines = [
  { name: "Search & AI foundations", verdict: "Crawl, content, and evidence signals need review", status: "warn" as const },
  { name: "Mobile FCP (lab)", verdict: "4.2s in this illustrative sample", status: "fail" as const },
  { name: "Core Web Vitals", verdict: "Needs improvement in this illustrative sample", status: "warn" as const },
  { name: "Structured data", verdict: "No machine-readable entity context detected", status: "warn" as const },
  { name: "Security headers", verdict: "3 of 6 recommended headers missing", status: "warn" as const },
  { name: "Heading structure", verdict: "OK", status: "pass" as const },
];

export default function AuditWidget() {
  const [state, setState] = useState<WidgetState>("idle");
  const [url, setUrl] = useState("");
  const [auditData, setAuditData] = useState<PageSpeedResult | null>(null);
  const [leadToken, setLeadToken] = useState("");
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
      if (typeof result.leadToken !== "string" || !result.leadToken) {
        throw new Error("The report session could not be created. Please run the audit again.");
      }

      setAuditData(result.data);
      setLeadToken(result.leadToken);
      setState("results");

      trackGAEvent("audit_url_submit", safeAuditAnalyticsSummary(result.data));
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
    setLeadToken("");
    setError(null);
  };

  useEffect(() => {
    if (window.location.hash === "#audit-widget") {
      setTimeout(() => {
        const el = document.getElementById("audit-widget");
        if (el) el.scrollIntoView({ block: "start" });
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
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {state === "loading"
          ? "Audit in progress."
          : state === "results"
            ? "Audit complete. Results are available below."
            : ""}
      </p>
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
              <span className="text-[10px] font-bold text-[#c2410c] uppercase tracking-wider">Technical Website Audit</span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {/* ---------- IDLE: honest hook + 3 hero diagnostics + sample scan ---------- */}
              {state === "idle" && (
                <motion.div key="idle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-5">
                  <div>
                    <p className="text-xs text-stone-600 mb-2">Automated technical review · results shown on screen</p>
                    <h2 className="text-xl font-bold text-charcoal leading-tight">
                      Illustrative example of the automated checks.
                    </h2>
                    <p className="text-sm text-stone-600 mt-1">A focused look at access, evidence, and mobile lab performance:</p>
                  </div>

                  {/* 3 hero diagnostics shown failing on a typical site */}
                  <div className="space-y-2.5">
                    <HeroDiag icon={Bot} q="Are the page's search foundations clear?" verdict="Checks crawl access, indexability, content, and evidence" />
                    <HeroDiag icon={Gauge} q="When does content first appear on mobile?" verdict="Illustrative mobile lab FCP: 4.2s" bad />
                    <HeroDiag icon={TrendingDown} q="Can visitors verify who is behind the content?" verdict="Checks identity, policy, and provenance signals" />
                  </div>

                  {/* Live sample scan ticker */}
                  <div className="rounded-xl border border-stone-200 bg-stone-50/60 overflow-hidden">
                    <div className="px-4 py-2 border-b border-stone-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600">Illustrative sample</span>
                      <span className="text-[10px] font-bold font-mono text-stone-600">Example only</span>
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
                          {line.status === "pass" && <CheckCircle2 className="w-3.5 h-3.5 text-green-700 shrink-0" />}
                          {line.status === "warn" && <AlertTriangle className="w-3.5 h-3.5 text-orange-700 shrink-0" />}
                          {line.status === "fail" && <XCircle className="w-3.5 h-3.5 text-red-600 shrink-0" />}
                          <span className="text-xs font-medium text-stone-700 flex-1">{line.name}</span>
                          <span className={`text-[11px] font-mono ${line.status === "pass" ? "text-green-700" : line.status === "warn" ? "text-orange-700" : "text-red-600"}`}>{line.verdict}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* URL input + soft CTA */}
                  <div className="space-y-3">
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                      <input
                        id={DESKTOP_URL_INPUT_ID}
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="yourwebsite.com"
                        aria-label="Website URL to audit"
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? DESKTOP_URL_ERROR_ID : undefined}
                        className="w-full bg-stone-50 border border-gray-300 rounded-xl pl-12 pr-4 py-4 text-charcoal placeholder:text-gray-600 focus:outline-hidden focus:border-cognac focus:ring-2 focus:ring-cognac/20 transition-all text-base font-medium"
                      />
                    </div>
                    {error && <p id={DESKTOP_URL_ERROR_ID} className="text-red-600 text-sm" role="alert">{error}</p>}
                    <button
                      onClick={handleAnalyze}
                      className="w-full py-4 bg-charcoal hover:bg-stone-800 text-white font-bold text-base rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01] group"
                    >
                      Run automated audit
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-xs text-stone-600">Heuristic 11-check snapshot on screen. No email required.</p>
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
                      <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-stone-600">{auditData.platformDetected}</span>
                    )}
                  </div>

                  {/* 3 hero answers, now personalized */}
                  <div className="space-y-2.5">
                    <HeroResult icon={Bot} q="Search & AI foundations" score={aiCheck?.score ?? 0} suffix="/100" />
                    <HeroResult icon={Gauge} q="Mobile FCP (lab)" score={auditData.fcp / 1000} suffix="s" lowerIsBetter goodUnder={1.8} okUnder={3} />
                    <HeroResult icon={Search} q="Performance score" score={auditData.performanceScore} suffix="/100" />
                  </div>

                  {/* All 11 checks are UNBLURRED. Generosity beats the email wall. */}
                  {auditData.deepChecks && (
                    <div className="border border-stone-200 rounded-xl overflow-hidden">
                      <div className="px-4 py-2.5 bg-stone-50 border-b border-stone-100 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600">Heuristic technical snapshot</span>
                        <span className={`text-xs font-bold font-mono ${getScoreTextClass(auditData.deepChecks.overallScore)}`}>
                          {auditData.deepChecks.overallScore}/100
                        </span>
                      </div>
                      <div
                        data-lenis-prevent
                        className="divide-y divide-stone-100 max-h-[200px] overflow-y-auto"
                        role="region"
                        aria-label="Detailed audit checks"
                        tabIndex={0}
                      >
                        {auditData.deepChecks.checks.map((check) => (
                          <div key={check.id} className="flex items-center gap-2.5 px-4 py-2">
                            {check.status === "pass" && <CheckCircle2 className="w-3.5 h-3.5 text-green-700 shrink-0" />}
                            {check.status === "warn" && <AlertTriangle className="w-3.5 h-3.5 text-orange-700 shrink-0" />}
                            {check.status === "fail" && <XCircle className="w-3.5 h-3.5 text-red-600 shrink-0" />}
                            <span className="text-xs font-medium text-stone-700 flex-1">{check.name}</span>
                            <span className={`text-xs font-bold font-mono ${getScoreTextClass(check.score)}`}>{check.score}</span>
                          </div>
                        ))}
                      </div>
                      <p className="border-t border-stone-100 bg-stone-50 px-4 py-2 text-[10px] leading-relaxed text-stone-600">
                        Proprietary automated average; not a certification, legal review, penetration test, ranking signal, or outcome guarantee.
                      </p>
                    </div>
                  )}

                  {totalFails > 0 && (
                    <p className="text-sm text-stone-700">
                      <span className="font-bold text-red-600">{totalFails} {totalFails === 1 ? "check needs" : "checks need"} attention.</span> Review the measured findings below before deciding what to fix first.
                    </p>
                  )}

                  {/* Optional follow-up paths */}
                  <CalModalButton className="w-full py-4 bg-cognac text-white font-bold rounded-xl hover:bg-amber-700 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] group">
                    <Calendar className="w-5 h-5" />
                    Book an Optional Review
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </CalModalButton>
                  <button
                    onClick={() => setIsEmailGateOpen(true)}
                    className="w-full py-3 bg-white border border-stone-200 text-charcoal font-semibold rounded-xl hover:border-cognac/40 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Mail className="w-4 h-4 text-stone-600" />
                    Email Me This Automated Audit Summary
                  </button>
                  <button onClick={handleReset} className="w-full min-h-6 text-center text-sm text-gray-600 hover:text-cognac transition-colors">
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
              <span className="text-[9px] font-bold text-[#c2410c] uppercase tracking-wider">Technical Audit</span>
            </div>
          </div>

          <div className="p-5">
            <AnimatePresence mode="wait">
              {state === "idle" && (
                <motion.div key="m-idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                  <div>
                    <p className="text-[10px] text-stone-600 mb-1">Automated technical review · example below</p>
                    <h2 className="text-lg font-bold text-charcoal leading-tight">Illustrative example of the automated checks.</h2>
                  </div>
                  <div className="space-y-2">
                    <HeroDiag icon={Bot} q="Are search foundations clear?" verdict="Checks access, content, and evidence" compact />
                    <HeroDiag icon={Gauge} q="When does content first appear?" verdict="Example mobile lab FCP: 4.2s" bad compact />
                    <HeroDiag icon={TrendingDown} q="Is content accountable?" verdict="Checks identity and provenance" compact />
                  </div>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                    <input
                      id={MOBILE_URL_INPUT_ID}
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="yourwebsite.com"
                      aria-label="Website URL to audit"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? MOBILE_URL_ERROR_ID : undefined}
                      className="w-full bg-stone-50 border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-charcoal placeholder:text-gray-600 focus:outline-hidden focus:border-cognac focus:ring-2 focus:ring-cognac/20 transition-all"
                    />
                  </div>
                  {error && <p id={MOBILE_URL_ERROR_ID} className="text-red-600 text-sm" role="alert">{error}</p>}
                  <button
                    onClick={handleAnalyze}
                    className="w-full py-3 bg-charcoal hover:bg-stone-800 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    Run automated audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-[10px] text-stone-600">Full breakdown on screen. No email required.</p>
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
                    <HeroResult icon={Bot} q="Search & AI foundations" score={aiCheck?.score ?? 0} suffix="/100" compact />
                    <HeroResult icon={Gauge} q="Mobile FCP (lab)" score={auditData.fcp / 1000} suffix="s" lowerIsBetter goodUnder={1.8} okUnder={3} compact />
                    <HeroResult icon={Search} q="Performance" score={auditData.performanceScore} suffix="/100" compact />
                  </div>
                  {auditData.deepChecks && (
                    <div className="border border-stone-200 rounded-xl overflow-hidden">
                      <div className="px-3 py-2 bg-stone-50 border-b border-stone-100 flex items-center justify-between">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-stone-600">Heuristic technical snapshot</span>
                        <span className={`text-[10px] font-bold font-mono ${getScoreTextClass(auditData.deepChecks.overallScore)}`}>{auditData.deepChecks.overallScore}/100</span>
                      </div>
                      <div
                        data-lenis-prevent
                        className="divide-y divide-stone-100 max-h-[180px] overflow-y-auto"
                        role="region"
                        aria-label="Detailed audit checks"
                        tabIndex={0}
                      >
                        {auditData.deepChecks.checks.map((check) => (
                          <div key={check.id} className="flex items-center gap-2 px-3 py-1.5">
                            {check.status === "pass" && <CheckCircle2 className="w-3 h-3 text-green-700 shrink-0" />}
                            {check.status === "warn" && <AlertTriangle className="w-3 h-3 text-orange-700 shrink-0" />}
                            {check.status === "fail" && <XCircle className="w-3 h-3 text-red-600 shrink-0" />}
                            <span className="text-[11px] font-medium text-stone-700 flex-1">{check.name}</span>
                            <span className={`text-[11px] font-bold font-mono ${getScoreTextClass(check.score)}`}>{check.score}</span>
                          </div>
                        ))}
                      </div>
                      <p className="border-t border-stone-100 bg-stone-50 px-3 py-2 text-[9px] leading-relaxed text-stone-600">
                        Proprietary automated average; not a certification or outcome guarantee.
                      </p>
                    </div>
                  )}
                  <CalModalButton className="w-full py-3 bg-cognac text-white font-bold rounded-xl hover:bg-amber-700 transition-all flex items-center justify-center gap-2 text-sm group">
                    <Calendar className="w-4 h-4" /> Book an Optional Review <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </CalModalButton>
                  <button
                    onClick={() => setIsEmailGateOpen(true)}
                    className="w-full py-2.5 bg-white border border-stone-200 text-charcoal font-semibold rounded-xl hover:border-cognac/40 transition-all flex items-center justify-center gap-2 text-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-stone-600" /> Email This Automated Summary
                  </button>
                  <button onClick={handleReset} className="w-full min-h-6 text-center text-xs text-gray-600 hover:text-cognac transition-colors">
                    Scan another site
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Email summary modal: optional, never an audit wall */}
      <AuditEmailGate
        isOpen={isEmailGateOpen}
        onClose={() => setIsEmailGateOpen(false)}
        url={url}
        auditData={auditData}
        leadToken={leadToken}
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
      <Icon className={`${compact ? "w-4 h-4" : "w-5 h-5"} ${bad ? "text-red-600" : "text-stone-600"} shrink-0 mt-0.5`} />
      <div className="min-w-0 flex-1">
        <p className={`${compact ? "text-xs" : "text-sm"} font-bold text-charcoal leading-tight`}>{q}</p>
        <p className={`${compact ? "text-[10px]" : "text-xs"} ${bad ? "text-red-600" : "text-stone-600"} mt-0.5`}>{verdict}</p>
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
  // Color logic: score metrics use 90/50 thresholds; FCP uses goodUnder/okUnder.
  let tone: "good" | "ok" | "bad";
  if (lowerIsBetter && goodUnder !== undefined && okUnder !== undefined) {
    tone = score <= goodUnder ? "good" : score <= okUnder ? "ok" : "bad";
  } else {
    tone = score >= 90 ? "good" : score >= 50 ? "ok" : "bad";
  }
  const toneClass = tone === "good" ? "text-green-700" : tone === "ok" ? "text-orange-700" : "text-red-600";
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
