"use client";

import { getAttribution } from "@/lib/analytics/trafficSource";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ChevronDown, Send, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { trackFBEvent } from "@/components/FacebookPixel";
import { trackGAEvent } from "@/components/GoogleAnalytics";
import { useLeadFormFunnel } from "@/hooks/useLeadFormFunnel";
import { takeQuotePrefill } from "@/lib/quotePrefill";

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
  // Controlled so a surface that collected details before opening the modal --
  // the homepage quiz -- can put them in front of the visitor to edit, rather
  // than attaching anything to their enquiry that they cannot see.
  const [details, setDetails] = useState("");
  const formLoadedAtRef = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  const initializedOpenRef = useRef(false);
  const sessionRef = useRef(0);
  const requestControllerRef = useRef<AbortController | null>(null);
  const formFunnel = useLeadFormFunnel({
    formId: "quote_modal",
    active: isOpen && !isSubmitted,
  });

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const closeDialog = useCallback(() => {
    // Invalidate synchronously: an old response must not update a later opening.
    sessionRef.current += 1;
    requestControllerRef.current?.abort();
    requestControllerRef.current = null;
    initializedOpenRef.current = false;
    formRef.current?.reset();
    setIsSubmitted(false);
    setIsLoading(false);
    setError(null);
    setFieldErrors({});
    setDetails("");
    onCloseRef.current();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      initializedOpenRef.current = false;
      return;
    }

    sessionRef.current += 1;
    if (!initializedOpenRef.current) {
      initializedOpenRef.current = true;
      setIsSubmitted(false);
      setIsLoading(false);
      setError(null);
      setFieldErrors({});
      formRef.current?.reset();
      // Consume once per opening, including React's development effect replay.
      setDetails(takeQuotePrefill() ?? "");
    }
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
        closeDialog();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
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
      sessionRef.current += 1;
      requestControllerRef.current?.abort();
      requestControllerRef.current = null;
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
  }, [isOpen, closeDialog]);

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
    if (requestControllerRef.current) return;
    formFunnel.markSubmitAttempt();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    if (formData.get("website_url_confirm")) {
      formFunnel.markIgnored();
      setIsSubmitted(true);
      setIsLoading(false);
      return;
    }
    if (formLoadedAtRef.current > 0) formData.append("_t", String(formLoadedAtRef.current));

    const requestSession = sessionRef.current;
    const controller = new AbortController();
    requestControllerRef.current = controller;

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

      const response = await fetch("/api/submit-quote", { method: "POST", body: formData, signal: controller.signal });
      if (controller.signal.aborted || requestSession !== sessionRef.current) return;
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
    } catch (submissionError) {
      if (controller.signal.aborted || requestSession !== sessionRef.current) return;
      formFunnel.markSubmitError("network_or_server");
      setError(submissionError instanceof Error ? submissionError.message : "We could not send your request.");
    } finally {
      if (requestControllerRef.current === controller) requestControllerRef.current = null;
      if (requestSession === sessionRef.current) setIsLoading(false);
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
            onClick={closeDialog}
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
              className="pointer-events-auto relative flex max-h-[92dvh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-elevated md:rounded-3xl"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDialog}
                aria-label="Close enquiry form"
                className="absolute right-4 top-4 z-20 flex min-h-11 min-w-11 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-600 transition-colors hover:border-cognac hover:text-cognac"
              >
                <X className="h-5 w-5" />
              </button>

              <div data-lenis-prevent className="relative overflow-y-auto p-5 md:p-8">
                {isSubmitted ? (
                  <div role="status" aria-live="polite" className="flex min-h-80 flex-col items-center justify-center px-4 text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cognac/10 text-cognac">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h2 id="quote-modal-title" className="mb-2 text-3xl font-bold text-charcoal">
                      Message <span className="font-serif italic text-cognac">received.</span>
                    </h2>
                    <p id="quote-modal-description" className="text-stone-700">
                      Hassan or Imran will reply by email, usually within one business day.
                    </p>
                    <button type="button" onClick={closeDialog} className="mt-7 min-h-11 rounded-full bg-charcoal px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-cognac">
                      Done
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-7 pr-10">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cognac">Direct to the founders</p>
                      <h2 id="quote-modal-title" className="text-2xl font-bold text-charcoal md:text-3xl">
                        What would you like <span className="font-serif italic text-cognac">help with?</span>
                      </h2>
                      <p id="quote-modal-description" className="mt-3 text-sm leading-6 text-stone-600">
                        A new website, a change to an existing one, or a question. Your message goes directly to Hassan and Imran.
                      </p>
                    </div>

                    <form
                      ref={formRef}
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
                            maxLength={100}
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
                            maxLength={254}
                            autoComplete="email"
                            aria-invalid={Boolean(fieldErrors.email)}
                            aria-describedby={fieldErrors.email ? "quote-email-error" : undefined}
                            onInput={() => setFieldErrors((current) => ({ ...current, email: undefined }))}
                            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                          />
                          {fieldErrors.email && <p id="quote-email-error" role="alert" className="mt-2 text-sm font-normal normal-case tracking-normal text-red-800">{fieldErrors.email}</p>}
                        </Field>
                      </div>

                      <Field label="Your message" id="quote-details" hint="optional">
                        <textarea
                          id="quote-details"
                          name="details"
                          maxLength={5000}
                          rows={details ? 6 : 4}
                          value={details}
                          onChange={(event) => setDetails(event.target.value)}
                          autoComplete="off"
                          placeholder="What would you like to build, change or ask? A sentence is plenty."
                          className="w-full resize-y rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                        />
                      </Field>

                      <Field label="Your website" id="quote-website" hint="optional">
                        <input
                          type="text"
                          inputMode="url"
                          id="quote-website"
                          name="currentUrl"
                          maxLength={2048}
                          autoComplete="url"
                          placeholder="example.com"
                          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                        />
                      </Field>

                      <details className="group border-y border-stone-200 py-3">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-1 text-sm font-medium text-stone-600 transition-colors hover:text-charcoal [&::-webkit-details-marker]:hidden">
                          Add a phone number <span className="sr-only">(optional)</span>
                          <ChevronDown aria-hidden="true" className="h-4 w-4 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="pb-1 pt-4">
                          <Field label="Phone" id="quote-phone" hint="optional">
                            <input type="tel" id="quote-phone" name="phone" maxLength={50} autoComplete="tel" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac" />
                          </Field>
                        </div>
                      </details>

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
                        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 font-bold text-white transition-colors hover:bg-cognac disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isLoading ? "Sending…" : "Send your message"} <Send aria-hidden="true" className="h-4 w-4" />
                      </button>
                      <p className="text-center text-sm leading-6 text-stone-600">
                        A founder replies, usually within one business day. Every message gets an answer, whether or not it turns into a quote.
                      </p>
                      <p className="text-center text-xs leading-5 text-stone-500">
                        We use your details to reply to your message. Read our <a href="/privacy" className="font-medium underline underline-offset-2 hover:text-cognac">privacy notice</a>. If you need to share files, we can arrange that by email.
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
      <label htmlFor={id} className="block text-sm font-semibold text-charcoal">
        {label} {required ? <span className="text-cognac">*</span> : hint ? <span className="font-medium normal-case text-stone-600">({hint})</span> : null}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
