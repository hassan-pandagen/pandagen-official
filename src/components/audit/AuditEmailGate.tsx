"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Mail, ArrowRight, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { trackFBEvent } from "@/components/FacebookPixel";
import type { PageSpeedResult } from "@/lib/audit/pagespeed";

interface AuditEmailGateProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  auditData: PageSpeedResult | null;
}

export default function AuditEmailGate({ isOpen, onClose, url, auditData }: AuditEmailGateProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [formLoadedAt, setFormLoadedAt] = useState<number>(0);

  const hasDeep = auditData?.deepChecks && auditData.deepChecks.checks.length > 0;
  const failCount = hasDeep ? auditData!.deepChecks!.checks.filter(c => c.status === 'fail').length : (auditData?.criticalIssues ?? 0);
  const warnCount = hasDeep ? auditData!.deepChecks!.checks.filter(c => c.status === 'warn').length : (auditData?.warnings ?? 0);
  const issueCount = failCount + warnCount;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setFormLoadedAt(Date.now());
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !auditData) return;

    setIsLoading(true);
    setError(null);

    // Time-based bot trap + honeypot: fake success for bots
    const elapsed = Date.now() - formLoadedAt;
    if (elapsed < 3000 || honeypot) {
      setIsSubmitted(true);
      setTimeout(() => { setIsSubmitted(false); setIsLoading(false); setEmail(""); onClose(); }, 4000);
      return;
    }

    try {
      const response = await fetch("/api/audit/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), url, auditData, _t: formLoadedAt }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit");
      }

      trackFBEvent("Lead", {
        content_name: "Speed Audit Report",
        content_category: "Audit Tool",
        value: 0,
        currency: "USD",
      });

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setIsLoading(false);
        setEmail("");
        onClose();
      }, 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-9998"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-stone-200 w-full max-w-md rounded-3xl shadow-elevated overflow-hidden pointer-events-auto"
            >
              {isSubmitted ? (
                <div className="p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">Check Your Inbox</h3>
                  <p className="text-stone-600">
                    Your full 11-point audit report is on the way.
                  </p>
                </div>
              ) : (
                <div className="relative">
                  {/* Header */}
                  <div className="bg-linear-to-br from-charcoal to-stone-800 px-8 pt-8 pb-6 text-center relative overflow-hidden">
                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4">
                      <Search className="w-6 h-6 text-cognac" />
                    </div>

                    <h2 className="text-xl font-bold text-white mb-1">
                      Your Audit is Ready
                    </h2>
                    <p className="text-stone-400 text-sm font-mono truncate">
                      {url}
                    </p>

                    {issueCount > 0 && (
                      <p className="text-stone-300 text-sm mt-3">
                        We found{" "}
                        <span className="text-cognac font-bold">
                          {issueCount} issue{issueCount !== 1 ? "s" : ""}
                        </span>{" "}
                        affecting your site.
                      </p>
                    )}
                  </div>

                  {/* Form body */}
                  <div className="p-8">
                    <div className="space-y-2 mb-6">
                      {[
                        "Full 11-point inspection results",
                        "Google performance scores",
                        "Issues ranked by business impact",
                        "Personalized next steps",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-charcoal uppercase tracking-wide mb-2">
                          Where should we send the report?
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@company.com"
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-12 pr-4 py-4 text-charcoal placeholder:text-stone-400 focus:outline-hidden focus:border-cognac focus:ring-1 focus:ring-cognac/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* HONEYPOT */}
                      <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                        <label htmlFor="audit_company_url">Leave this empty</label>
                        <input type="text" id="audit_company_url" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                      </div>

                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-charcoal text-white font-bold text-base rounded-xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            Sending Report...
                          </>
                        ) : (
                          <>
                            Get Full Report
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>

                    <p className="text-xs text-stone-400 text-center mt-4">
                      No spam. Just your audit results.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
