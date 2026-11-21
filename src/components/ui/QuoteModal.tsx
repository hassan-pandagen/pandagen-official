"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Send, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLeadFormFunnel } from "@/hooks/useLeadFormFunnel";
import { useSubmission } from "@/hooks/useSubmission";
import { submitQuoteLead } from "@/lib/forms/submitQuoteLead";
import { WRITTEN_CHECK_MARK } from "@/components/ui/WrittenCheckButton";
import { takeQuotePrefill } from "@/lib/quotePrefill";
import { PHONE } from "@/data/company-facts";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GENERIC_ERROR = `We could not send your request. Please email info@pandacodegen.com or call ${PHONE.display}.`;

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const prefersReducedMotion = useReducedMotion();
  // 14 Nov 2026: one status, from the same hook as the other lead forms. Its reset replaces the
  // session counter this modal kept, so an answer to a closed opening still cannot change a
  // later one.
  const submission = useSubmission();
  const isSubmitted = submission.status === "sent";
  const isLoading = submission.status === "sending";
  const error = submission.error || null;
  const resetSubmission = submission.reset;
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string }>({});
  // Controlled so a surface that collected details before opening the modal --
  // the homepage quiz -- can put them in front of the visitor to edit, rather
  // than attaching anything to their enquiry that they cannot see.
  const [details, setDetails] = useState("");
  // 21 Nov 2026: set when a "free written check" button opened the modal (WrittenCheckButton).
  const [writtenCheck, setWrittenCheck] = useState(false);
  const formLoadedAtRef = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  const initializedOpenRef = useRef(false);
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
    resetSubmission();
    requestControllerRef.current?.abort();
    requestControllerRef.current = null;
    initializedOpenRef.current = false;
    formRef.current?.reset();
    setFieldErrors({});
    setDetails("");
    onCloseRef.current();
  }, [resetSubmission]);

  useEffect(() => {
    if (!isOpen) {
      initializedOpenRef.current = false;
      return;
    }

    if (!initializedOpenRef.current) {
      initializedOpenRef.current = true;
      resetSubmission();
      setFieldErrors({});
      formRef.current?.reset();
      // Consume once per opening, including React's development effect replay.
      const prefill = takeQuotePrefill() ?? "";
      setDetails(prefill);
      setWrittenCheck(prefill.startsWith(WRITTEN_CHECK_MARK));
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
      resetSubmission();
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
  }, [isOpen, closeDialog, resetSubmission]);

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
    const attempt = submission.start();
    if (attempt === null) return;
    formFunnel.markSubmitAttempt();

    const formData = new FormData(event.currentTarget);
    if (formData.get("website_url_confirm")) {
      formFunnel.markIgnored();
      submission.succeed(attempt);
      return;
    }
    const controller = new AbortController();
    requestControllerRef.current = controller;

    try {
      await submitQuoteLead(formData, {
        source: "quote_modal",
        pixel: { content_name: "Quote Request", content_category: "Contact Form" },
        ga: { form: "quote_modal" },
        fallbackError: GENERIC_ERROR,
        formLoadedAt: formLoadedAtRef.current,
        signal: controller.signal,
      });
      if (controller.signal.aborted || !submission.isCurrent(attempt)) return;

      formFunnel.markSubmitted();
      submission.succeed(attempt);
    } catch (submissionError) {
      if (controller.signal.aborted || !submission.isCurrent(attempt)) return;
      formFunnel.markSubmitError("network_or_server");
      submission.fail(attempt, submissionError instanceof Error ? submissionError.message : GENERIC_ERROR);
    } finally {
      if (requestControllerRef.current === controller) requestControllerRef.current = null;
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
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }}
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

              <div data-lenis-prevent className="relative overflow-y-auto p-5 md:px-8 md:py-6">
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
                    <div className="mb-5 pr-10">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cognac">Direct to the founders</p>
                      <h2 id="quote-modal-title" className="text-2xl font-bold text-charcoal md:text-3xl">
                        {writtenCheck ? <>Your free <span className="font-serif italic text-cognac">written check.</span></> : <>What would you like <span className="font-serif italic text-cognac">help with?</span></>}
                      </h2>
                      <p id="quote-modal-description" className="mt-3 text-sm leading-6 text-stone-600">
                        {writtenCheck
                          ? "Answer what you can below. Hassan and Imran send back a written list of what you do by hand today, what could run on its own, and what it would cost. Free, with no commitment."
                          : "A new website, a change to an existing one, or a question. Your message goes directly to Hassan and Imran."}
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
                      className="space-y-4"
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
                          rows={writtenCheck ? 7 : 2}
                          value={details}
                          onChange={(event) => setDetails(event.target.value)}
                          autoComplete="off"
                          placeholder="What would you like to build, change or ask? A sentence is plenty."
                          className="max-h-72 min-h-[74px] w-full resize-y rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-charcoal outline-hidden transition-colors [field-sizing:content] focus:border-cognac focus:ring-1 focus:ring-cognac"
                        />
                      </Field>

                      {/* 22 Oct 2026, owner: the phone number was a bare "Add a phone number" line that
                          did not look like a field and sat below the fold on a phone. It is now a normal
                          optional field beside the website field (stacked on a phone). The message box
                          starts two lines tall and grows with the text where the browser supports it. */}
                      <div className="grid gap-4 md:grid-cols-2">
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

                        <Field label="Phone" id="quote-phone" hint="optional">
                          <input
                            type="tel"
                            inputMode="tel"
                            id="quote-phone"
                            name="phone"
                            maxLength={50}
                            autoComplete="tel"
                            placeholder="+1 555 123 4567"
                            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                          />
                        </Field>
                      </div>

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
                        className="press-feedback flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 font-bold text-white hover:bg-cognac disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isLoading ? "Sending…" : writtenCheck ? "Request my written check" : "Send your message"} <Send aria-hidden="true" className="h-4 w-4" />
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
