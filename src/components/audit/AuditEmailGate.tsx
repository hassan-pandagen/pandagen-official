"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, CheckCircle2, Mail } from "lucide-react";
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0A0A0A] border border-white/10 w-full max-w-md rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-auto"
            >
              {isSubmitted ? (
                <div className="p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Report on the Way!</h3>
                  <p className="text-gray-400">
                    Check your inbox shortly for the full audit report.
                  </p>
                </div>
              ) : (
                <div className="relative p-8">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-neon" />
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2">
                    Get Your Full Report
                  </h2>
                  <p className="text-gray-400 text-sm mb-6">
                    We&apos;ll send you a detailed PDF with Core Web Vitals,
                    actionable fixes, and a side-by-side comparison.
                  </p>

                  <div className="space-y-2 mb-6">
                    {[
                      "Core Web Vitals breakdown",
                      "Top issues with fix priorities",
                      "Side-by-side speed comparison",
                      "Revenue impact analysis",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-neon flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
                      />
                    </div>

                    {error && (
                      <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-neon text-black font-bold text-lg rounded-xl hover:bg-neon/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                          Saving...
                        </>
                      ) : (
                        "Send My Report"
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-gray-600 text-center mt-4">
                    No spam. Just your report.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
