"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, CheckCircle2, Mail, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { trackFBEvent } from "@/components/FacebookPixel";
import { trackGAEvent } from "@/components/GoogleAnalytics";
import { useLeadFormFunnel } from "@/hooks/useLeadFormFunnel";
import type { PageSpeedResult } from "@/lib/audit/pagespeed";
import { safeAuditAnalyticsSummary } from "@/lib/audit/analyticsSummary";

interface AuditEmailGateProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  auditData: PageSpeedResult | null;
  leadToken: string;
  action?: 'report' | 'review';
  platform?: string;
  goal?: string;
  onDelivered?: () => void;
}

export default function AuditEmailGate({ isOpen, onClose, url, auditData, leadToken, action = 'report', platform = '', goal = '', onDelivered }: AuditEmailGateProps) {
  const prefersReducedMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [concern, setConcern] = useState("");
  const [pages, setPages] = useState("");
  const [dueAt, setDueAt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const formFunnel = useLeadFormFunnel({
    formId: "audit_report_email",
    active: isOpen && !isSubmitted,
  });

  const closeAndReset = useCallback(() => {
    setIsSubmitted(false);
    setIsLoading(false);
    setError(null);
    setDueAt(null);
    setHoneypot("");
    onClose();
  }, [onClose]);

  const hasDeep = auditData?.deepChecks && auditData.deepChecks.checks.length > 0;
  const failCount = hasDeep ? auditData!.deepChecks!.checks.filter(c => c.status === 'fail').length : (auditData?.criticalIssues ?? 0);
  const warnCount = hasDeep ? auditData!.deepChecks!.checks.filter(c => c.status === 'warn').length : (auditData?.warnings ?? 0);
  const issueCount = failCount + warnCount;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    returnFocusRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    document.body.style.overflow = "hidden";

    const dialogContainer = dialogRef.current?.parentElement ?? null;
    const modalParent = dialogContainer?.parentElement ?? null;
    const backdrop = dialogContainer?.previousElementSibling ?? null;
    const backgroundState = new Map<HTMLElement, { inert: boolean; ariaHidden: string | null }>();
    if (modalParent) {
      for (const child of Array.from(modalParent.children)) {
        if (!(child instanceof HTMLElement) || child === dialogContainer || child === backdrop) continue;
        backgroundState.set(child, { inert: child.inert, ariaHidden: child.getAttribute("aria-hidden") });
        child.inert = true;
        child.setAttribute("aria-hidden", "true");
      }
    }

    const focusFrame = requestAnimationFrame(() => closeButtonRef.current?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAndReset();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter((element) => element.getClientRects().length > 0);
      if (focusable.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      for (const [element, previous] of backgroundState) {
        element.inert = previous.inert;
        if (previous.ariaHidden === null) element.removeAttribute("aria-hidden");
        else element.setAttribute("aria-hidden", previous.ariaHidden);
      }
      const target = returnFocusRef.current;
      requestAnimationFrame(() => {
        if (target?.isConnected) target.focus();
      });
    };
  }, [closeAndReset, isOpen]);

  useEffect(() => {
    if (!isOpen || !isSubmitted) return;
    const focusFrame = requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => cancelAnimationFrame(focusFrame);
  }, [isOpen, isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !auditData || !leadToken) return;

    formFunnel.markSubmitAttempt();

    setIsLoading(true);
    setError(null);

    // Honeypot is supplemental bot friction. Server-side one-time tokens and
    // durable quotas are the actual abuse controls.
    if (honeypot) {
      formFunnel.markIgnored();
      setIsSubmitted(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/audit/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), leadToken, action, platform, goal, concern, pages }),
      });

      if (!response.ok) {
        // Safely parse error; fall back to generic message if response isn't JSON
        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          const data = await response.json();
          throw new Error(data.error || "Failed to submit. Try again.");
        }
        throw new Error("Server error. Please try again in a moment.");
      }

      const receipt = await response.json();
      setDueAt(typeof receipt.dueAt === 'string' ? receipt.dueAt : null);
      onDelivered?.();
      formFunnel.markSubmitted();

      trackFBEvent("Lead", {
        content_name: action === "review" ? "Founder Review Request" : "Automated Website Audit Report",
        content_category: "Audit Tool",
        value: 0,
        currency: "USD",
      });

      // Fire GA4 conversion event for the actual lead capture (bottom of funnel)
      trackGAEvent("audit_lead_submit", { ...safeAuditAnalyticsSummary(auditData), lead_type: action });

      setIsSubmitted(true);
      setIsLoading(false);
    } catch (err) {
      formFunnel.markSubmitError("network_or_server");
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
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
            onClick={closeAndReset}
            aria-hidden="true"
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-9998"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              ref={dialogRef}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={prefersReducedMotion ? { duration: 0 } : undefined}
              className="bg-white border border-stone-200 w-full max-w-md rounded-3xl shadow-elevated max-h-[90dvh] overflow-y-auto pointer-events-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="audit-summary-dialog-title"
              aria-describedby="audit-summary-dialog-description"
              tabIndex={-1}
            >
              {isSubmitted ? (
                <div className="p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                  <motion.div
                    initial={prefersReducedMotion ? false : { scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={prefersReducedMotion ? { duration: 0 } : undefined}
                    className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h3 id="audit-summary-dialog-title" className="text-2xl font-bold text-charcoal mb-2">{action === 'review' ? 'Founder review requested' : 'Audit report sent'}</h3>
                  <p id="audit-summary-dialog-description" className="text-stone-600 mb-2">
                    {dueAt ? `We will email your recommendations by ${new Date(dueAt).toLocaleString()}.` : 'Check your inbox for the findings, next steps and measurement limitations.'}
                  </p>
                  <p className="text-stone-600 text-sm">
                    You can reply to the email with questions about your website.
                  </p>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={closeAndReset}
                    className="mt-6 min-h-11 rounded-xl bg-charcoal px-6 py-3 font-semibold text-white hover:bg-stone-800"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="relative">
                  {/* Header */}
                  <div className="bg-linear-to-br from-charcoal to-stone-800 px-8 pt-8 pb-6 text-center relative overflow-hidden">
                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={closeAndReset}
                      className="absolute top-2 right-2 flex h-11 w-11 items-center justify-center rounded-md text-stone-300 hover:bg-white/10 hover:text-white transition-colors"
                      aria-label="Close report form"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4">
                      <Search className="w-6 h-6 text-cognac" />
                    </div>

                    <h2 id="audit-summary-dialog-title" className="text-xl font-bold text-white mb-1">
                      {action === 'review' ? 'Request my free founder review' : 'Email my audit report'}
                    </h2>
                    <p className="text-stone-600 text-sm font-mono truncate">
                      {url}
                    </p>

                    {issueCount > 0 && (
                      <p className="text-stone-300 text-sm mt-3">
                        We found{" "}
                        <span className="text-orange-300 font-bold">
                          {issueCount} issue{issueCount !== 1 ? "s" : ""}
                        </span>{" "}
                        flagged by this automated check.
                      </p>
                    )}
                  </div>

                  {/* Form body */}
                  <div className="p-8">
                    <p id="audit-summary-dialog-description" className="text-sm text-stone-600 mb-4 leading-relaxed">
                      {action === 'review' ? 'A founder will review up to three public pages and send up to three prioritized recommendations within 24 hours. No obligation to hire us. Implementation and account-level checks are not included.' : 'Receive the findings, suggested next steps and limitations. No signup or marketing subscription required.'}
                    </p>
                    <div className="space-y-2 mb-6">
                      {(action === "review" ? ["Up to three public pages reviewed by a founder", "Up to three prioritized recommendations", "Plain-English next steps within 24 hours"] : [
                        "Measured findings and suggested next steps",
                        "Submitted website and detected platform",
                        "First Contentful Paint clearly labelled",
                        "Measurement limitations included",
                      ]).map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-cognac shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      onFocusCapture={formFunnel.onFocusCapture}
                      onBlurCapture={formFunnel.onBlurCapture}
                      onInvalidCapture={formFunnel.onInvalidCapture}
                      className="space-y-4"
                    >
                      <div>
                        <label htmlFor="audit-email" className="block text-xs font-bold text-charcoal uppercase tracking-wide mb-2">
                          {action === "review" ? "Where should we send your review?" : "Where should we send the report?"}
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-600" />
                          <input
                            type="email"
                            id="audit-email"
                            name="email"
                            autoComplete="email"
                            required
                            aria-invalid={Boolean(error)}
                            aria-describedby={error ? "audit-email-error" : undefined}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@company.com"
                            className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-12 pr-4 py-4 text-charcoal placeholder:text-stone-600 focus:outline-hidden focus:border-cognac focus:ring-1 focus:ring-cognac/20 transition-all"
                          />
                        </div>
                      </div>

                      {action === 'review' && <>
                        <label className="block text-sm font-semibold" htmlFor="audit-concern">What would you like your website to do better?</label>
                        <textarea id="audit-concern" required minLength={10} maxLength={1500} value={concern} onChange={e => setConcern(e.target.value)} className="w-full rounded-xl border border-stone-300 p-3" rows={3} />
                        <label className="block text-sm font-semibold" htmlFor="audit-pages">Two other public pages (optional, one full URL per line)</label>
                        <textarea id="audit-pages" maxLength={4200} value={pages} onChange={e => setPages(e.target.value)} className="w-full rounded-xl border border-stone-300 p-3" rows={2} />
                        <p className="text-xs text-stone-600">Do not include passwords, private links or customer information.</p>
                      </>}
                      {/* HONEYPOT */}
                      <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                        <label htmlFor="audit_company_url">Leave this empty</label>
                        <input type="text" id="audit_company_url" name="company_url" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                      </div>

                      {error && (
                        <div id="audit-email-error" role="alert" aria-live="polite" className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
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
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full motion-safe:animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            {action === 'review' ? 'Request my free founder review' : 'Email my audit report'}
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>

                    <p className="text-xs text-stone-600 text-center mt-4">
                      Used to deliver this summary and respond to this request. See our{" "}
                      <Link href="/privacy" className="underline underline-offset-2 hover:text-charcoal">
                        Privacy Policy
                      </Link>.
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
