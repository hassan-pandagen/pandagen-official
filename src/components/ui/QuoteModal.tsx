"use client";

import { getAttribution } from "@/lib/analytics/trafficSource";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { trackFBEvent } from "@/components/FacebookPixel";
import { trackGAEvent } from "@/components/GoogleAnalytics";
import { useLeadFormFunnel } from "@/hooks/useLeadFormFunnel";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

async function responseMessage(response: Response): Promise<string> {
  try {
    const body = await response.json() as { error?: unknown };
    if (typeof body.error === "string" && body.error.trim()) return body.error;
  } catch {
    // A generic message is safer when an upstream proxy returns non-JSON.
  }
  return "We could not send your request. Please email info@pandacodegen.com.";
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string }>({});
  const formLoadedAtRef = useRef(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const formFunnel = useLeadFormFunnel({
    formId: "quote_modal",
    active: isOpen && !isSubmitted,
  });

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    returnFocusRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    document.body.style.overflow = "hidden";
    formLoadedAtRef.current = Date.now();

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
        onClose();
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
  }, [isOpen, onClose]);

  const finishAndClose = () => {
    window.setTimeout(() => {
      setIsSubmitted(false);
      setIsLoading(false);
      setError(null);
      setFieldErrors({});
      onClose();
    }, 2500);
  };

  const handleInvalidCapture = (event: React.FormEvent<HTMLFormElement>) => {
    formFunnel.onInvalidCapture(event);
    const control = event.target;
    if (!(control instanceof HTMLInputElement)) return;
    if (control.name === "name") {
      setFieldErrors((current) => ({ ...current, name: "Enter your name." }));
    }
    if (control.name === "email") {
      setFieldErrors((current) => ({
        ...current,
        email: control.validity.valueMissing ? "Enter your email address." : "Enter a valid email address.",
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formFunnel.markSubmitAttempt();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    if (formData.get("website_url_confirm")) {
      formFunnel.markIgnored();
      setIsSubmitted(true);
      finishAndClose();
      return;
    }
    if (formLoadedAtRef.current > 0) formData.append("_t", String(formLoadedAtRef.current));

    try {
      const attribution = getAttribution();
      formData.append("trafficSource", attribution.source);
      formData.append("trafficMedium", attribution.medium);
      if (attribution.campaign && attribution.campaign !== "none") {
        formData.append("trafficCampaign", attribution.campaign);
      }
      if (attribution.landingPage) formData.append("landingPage", attribution.landingPage);
      formData.append("submittedFrom", window.location.pathname);
      if (attribution.firstVisit) formData.append("firstVisit", attribution.firstVisit);

      const response = await fetch("/api/submit-quote", { method: "POST", body: formData });
      if (!response.ok) throw new Error(await responseMessage(response));

      formFunnel.markSubmitted();
      trackFBEvent("Lead", {
        content_name: "Quote Request",
        content_category: "Contact Form",
        value: 0,
        currency: "USD",
      });
      trackGAEvent("quote_submit", {
        form: "quote_modal",
      });
      setIsSubmitted(true);
      finishAndClose();
    } catch (submissionError) {
      formFunnel.markSubmitError("network_or_server");
      setError(submissionError instanceof Error ? submissionError.message : "We could not send your request.");
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 z-9998 bg-black/50 backdrop-blur-xs"
          />
          <div className="pointer-events-none fixed inset-0 z-9999 flex items-start justify-center p-3 pt-[4vh] md:items-center md:p-4 md:pt-4">
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-modal-title"
              aria-describedby="quote-modal-description"
              tabIndex={-1}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={prefersReducedMotion ? { duration: 0 } : undefined}
              className="pointer-events-auto relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-stone-200 bg-paper shadow-elevated md:rounded-3xl"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close quote dialog"
                className="absolute right-4 top-4 z-20 flex min-h-11 min-w-11 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-600 transition-colors hover:border-cognac hover:text-cognac"
              >
                <X className="h-5 w-5" />
              </button>

              <div data-lenis-prevent className="relative overflow-y-auto p-5 md:p-8">
                {isSubmitted ? (
                  <div className="flex min-h-80 flex-col items-center justify-center px-4 text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cognac/10 text-cognac">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h2 id="quote-modal-title" className="mb-2 text-3xl font-bold text-charcoal">
                      Request <span className="font-serif italic text-cognac">received.</span>
                    </h2>
                    <p id="quote-modal-description" className="text-stone-700">
                      We will review the details and reply by email.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6 pr-14">
                      <h2 id="quote-modal-title" className="text-2xl font-bold text-charcoal md:text-3xl">
                        Request a <span className="font-serif italic text-cognac">migration plan.</span>
                      </h2>
                      <p id="quote-modal-description" className="mt-2 text-sm text-stone-700">
                        Share the basics so we can assess fit, risks, and the right next step.
                      </p>
                    </div>

                    <form
                      name="quote_request"
                      onSubmit={handleSubmit}
                      onFocusCapture={formFunnel.onFocusCapture}
                      onBlurCapture={formFunnel.onBlurCapture}
                      onInvalidCapture={handleInvalidCapture}
                      aria-busy={isLoading}
                      className="space-y-5"
                    >
                      <div className="grid gap-4 md:grid-cols-2">
                        <Field label="Name" id="quote-name" required>
                          <input
                            required
                            id="quote-name"
                            name="name"
                            autoComplete="name"
                            aria-invalid={Boolean(fieldErrors.name)}
                            aria-describedby={fieldErrors.name ? "quote-name-error" : undefined}
                            onInput={() => setFieldErrors((current) => ({ ...current, name: undefined }))}
                            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                          />
                          {fieldErrors.name && <p id="quote-name-error" role="alert" className="mt-2 text-sm font-normal normal-case tracking-normal text-red-800">{fieldErrors.name}</p>}
                        </Field>
                        <Field label="Email" id="quote-email" required>
                          <input
                            required
                            type="email"
                            id="quote-email"
                            name="email"
                            autoComplete="email"
                            aria-invalid={Boolean(fieldErrors.email)}
                            aria-describedby={fieldErrors.email ? "quote-email-error" : undefined}
                            onInput={() => setFieldErrors((current) => ({ ...current, email: undefined }))}
                            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                          />
                          {fieldErrors.email && <p id="quote-email-error" role="alert" className="mt-2 text-sm font-normal normal-case tracking-normal text-red-800">{fieldErrors.email}</p>}
                        </Field>
                        <Field label="Phone" id="quote-phone" hint="optional">
                          <input type="tel" id="quote-phone" name="phone" autoComplete="tel" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac" />
                        </Field>
                      </div>

                      <Field label="Project details" id="quote-details" hint="optional">
                        <textarea
                          id="quote-details"
                          name="details"
                          rows={3}
                          autoComplete="off"
                          placeholder="Important URLs, integrations, constraints, or questions"
                          className="w-full resize-y rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                        />
                      </Field>

                      <p className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700">
                        For security, this form does not accept files. We can arrange a safe way to share documents after replying.
                      </p>

                      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                        <label htmlFor="quote-website-confirm">Leave this field empty</label>
                        <input id="quote-website-confirm" name="website_url_confirm" tabIndex={-1} autoComplete="off" />
                      </div>

                      {error && (
                        <div role="alert" aria-live="assertive" className="rounded-xl border border-red-300 bg-red-50 p-3 text-sm text-red-800">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-charcoal px-5 py-3 font-bold text-white transition-colors hover:bg-cognac disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <Send className="h-5 w-5" /> {isLoading ? "Sending…" : "Send request"}
                      </button>
                      <p className="text-center text-xs text-stone-600">
                        No obligation. Your submission is used only to respond to this request as described in our <a href="/privacy" className="font-medium text-cognac underline underline-offset-2 hover:text-orange-800">privacy notice</a>.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  id,
  hint,
  required = false,
  children,
}: {
  label: string;
  id: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-stone-700">
        {label} {required ? <span className="text-cognac">*</span> : hint ? <span className="font-medium normal-case text-stone-600">({hint})</span> : null}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

