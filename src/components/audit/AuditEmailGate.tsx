"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Mail, Lock, ArrowRight } from "lucide-react";
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
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

    try {
      const response = await fetch("/api/audit/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), url, auditData }),
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
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
                  <h3 className="text-2xl font-bold text-charcoal mb-2">Report on the Way!</h3>
                  <p className="text-stone-600">
                    Check your inbox shortly for the full audit report.
                  </p>
                </div>
              ) : (
                <div className="relative">
                  {/* Header */}
                  <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 px-8 pt-8 pb-6 text-center relative overflow-hidden">
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-orange-400 to-green-500" />

                    <button
                      onClick={onClose}
                      className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/15 mb-4">
                      <Lock className="w-6 h-6 text-white" />
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2">
                      Report Ready for{" "}
                      <span className="text-blue-300 truncate block text-sm font-mono mt-1 opacity-80">
                        {url}
                      </span>
                    </h2>

                    {auditData && auditData.criticalIssues > 0 && (
                      <p className="text-blue-100 text-sm mt-2">
                        We found{" "}
                        <span className="text-red-300 font-bold">
                          {auditData.criticalIssues} critical issue{auditData.criticalIssues !== 1 ? "s" : ""}
                        </span>{" "}
                        costing you revenue.
                      </p>
                    )}
                  </div>

                  {/* Form body */}
                  <div className="p-8">
                    <div className="space-y-2 mb-6">
                      {[
                        "Full Core Web Vitals breakdown",
                        "Top issues with fix priorities",
                        "Side-by-side speed comparison",
                        "Revenue impact estimate",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-charcoal uppercase tracking-wide mb-2">
                          Where should we send the PDF?
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ceo@company.com"
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-12 pr-4 py-4 text-charcoal placeholder:text-gray-400 focus:outline-none focus:border-cognac focus:ring-1 focus:ring-cognac/20 transition-all"
                          />
                        </div>
                      </div>

                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-charcoal text-white font-bold text-base rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            Generating Report...
                          </>
                        ) : (
                          <>
                            Unlock Full Audit
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>

                    <p className="text-xs text-stone-500 text-center mt-4">
                      No spam. Unsubscribe anytime.
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
