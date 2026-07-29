"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type FocusEvent,
  type FormEvent,
} from "react";
import { trackGAEvent } from "@/components/GoogleAnalytics";
import { hasConsent } from "@/components/consent/ConsentProvider";

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

interface UseLeadFormFunnelOptions {
  formId: string;
  active?: boolean;
}

function trackedField(target: EventTarget | null): FormControl | null {
  if (
    !(target instanceof HTMLInputElement) &&
    !(target instanceof HTMLSelectElement) &&
    !(target instanceof HTMLTextAreaElement)
  ) {
    return null;
  }

  if (target instanceof HTMLInputElement && target.type === "hidden") return null;
  if (target.closest('[aria-hidden="true"]')) return null;
  return target;
}

function safeFieldName(control: FormControl): string | null {
  const raw = control.dataset.funnelField || control.name || control.id;
  if (!raw || /(honeypot|website_url_confirm|company_url)/i.test(raw)) return null;
  return raw.toLowerCase().replace(/[^a-z0-9_-]/g, "_").slice(0, 40);
}

function hasMeaningfulValue(control: FormControl): boolean {
  if (control instanceof HTMLInputElement && (control.type === "checkbox" || control.type === "radio")) {
    return control.checked;
  }
  if (control instanceof HTMLInputElement && control.type === "file") {
    return Boolean(control.files?.length);
  }
  return control.value.trim().length > 0;
}

/**
 * Measures aggregate lead-form funnel behavior after Analytics consent.
 * It deliberately sends only form/field identifiers and counts, never values.
 */
export function useLeadFormFunnel({ formId, active = true }: UseLeadFormFunnelOptions) {
  const startedAtRef = useRef<number | null>(null);
  const completedFieldsRef = useRef(new Set<string>());
  const lastFieldRef = useRef<string | null>(null);
  const submitAttemptsRef = useRef(0);
  const terminalRef = useRef(false);
  const abandonSentRef = useRef(false);
  const wasActiveRef = useRef(false);

  const reset = useCallback(() => {
    startedAtRef.current = null;
    completedFieldsRef.current = new Set();
    lastFieldRef.current = null;
    submitAttemptsRef.current = 0;
    terminalRef.current = false;
    abandonSentRef.current = false;
  }, []);

  useEffect(() => {
    if (active && !wasActiveRef.current) reset();
    wasActiveRef.current = active;
  }, [active, reset]);

  const commonParams = useCallback(() => ({
    form_id: formId,
    page_path: typeof window === "undefined" ? "" : window.location.pathname,
    fields_completed: completedFieldsRef.current.size,
    elapsed_seconds: startedAtRef.current
      ? Math.max(0, Math.round((Date.now() - startedAtRef.current) / 1000))
      : 0,
  }), [formId]);

  const markStarted = useCallback(() => {
    if (!active || !hasConsent("analytics") || terminalRef.current || startedAtRef.current) return;
    startedAtRef.current = Date.now();
    trackGAEvent("lead_form_started", commonParams());
  }, [active, commonParams]);

  const markProgress = useCallback((fieldName: string) => {
    if (
      !active ||
      !hasConsent("analytics") ||
      terminalRef.current ||
      completedFieldsRef.current.has(fieldName)
    ) return;
    markStarted();
    completedFieldsRef.current.add(fieldName);
    lastFieldRef.current = fieldName;
    trackGAEvent("lead_form_progress", {
      ...commonParams(),
      last_field: fieldName,
    });
  }, [active, commonParams, markStarted]);

  const onFocusCapture = useCallback((event: FocusEvent<HTMLFormElement>) => {
    const control = trackedField(event.target);
    if (control && safeFieldName(control)) markStarted();
  }, [markStarted]);

  const onBlurCapture = useCallback((event: FocusEvent<HTMLFormElement>) => {
    const control = trackedField(event.target);
    if (!control || !hasMeaningfulValue(control)) return;
    const fieldName = safeFieldName(control);
    if (fieldName) markProgress(fieldName);
  }, [markProgress]);

  const onInvalidCapture = useCallback((event: FormEvent<HTMLFormElement>) => {
    if (!hasConsent("analytics")) return;
    const control = trackedField(event.target);
    const fieldName = control ? safeFieldName(control) : null;
    markStarted();
    trackGAEvent("lead_form_validation_error", {
      ...commonParams(),
      invalid_field: fieldName || "unknown",
    });
  }, [commonParams, markStarted]);

  const markSubmitAttempt = useCallback(() => {
    if (!hasConsent("analytics")) return;
    markStarted();
    submitAttemptsRef.current += 1;
    trackGAEvent("lead_form_submit_attempt", {
      ...commonParams(),
      submit_attempt: submitAttemptsRef.current,
    });
  }, [commonParams, markStarted]);

  const markValidationError = useCallback((invalidFieldCount: number) => {
    if (!hasConsent("analytics")) return;
    markStarted();
    trackGAEvent("lead_form_validation_error", {
      ...commonParams(),
      invalid_field_count: invalidFieldCount,
    });
  }, [commonParams, markStarted]);

  const markSubmitError = useCallback((errorType: string) => {
    if (!hasConsent("analytics")) return;
    trackGAEvent("lead_form_submit_error", {
      ...commonParams(),
      error_type: errorType.replace(/[^a-z0-9_-]/gi, "_").toLowerCase().slice(0, 40),
      submit_attempt: submitAttemptsRef.current,
    });
  }, [commonParams]);

  const markSubmitted = useCallback(() => {
    terminalRef.current = true;
    if (!hasConsent("analytics")) return;
    const params = {
      ...commonParams(),
      submit_attempts: submitAttemptsRef.current,
    };
    trackGAEvent("lead_form_submitted", params);
    // GA4's recommended event for an initial lead acquisition. Keep the
    // custom event above for the detailed funnel and use this for standard
    // lead/key-event reporting.
    trackGAEvent("generate_lead", {
      ...params,
      lead_source: "website_form",
    });
  }, [commonParams]);

  const markIgnored = useCallback(() => {
    terminalRef.current = true;
  }, []);

  const markAbandoned = useCallback((reason: "page_exit" | "form_closed") => {
    if (
      !active ||
      !startedAtRef.current ||
      terminalRef.current ||
      abandonSentRef.current
    ) {
      return;
    }

    abandonSentRef.current = true;
    trackGAEvent("lead_form_abandoned", {
      ...commonParams(),
      last_field: lastFieldRef.current || "none",
      abandon_reason: reason,
      transport_type: reason === "page_exit" ? "beacon" : undefined,
    });
  }, [active, commonParams]);

  useEffect(() => {
    if (!active) return;
    const handlePageHide = () => markAbandoned("page_exit");
    window.addEventListener("pagehide", handlePageHide);
    return () => {
      window.removeEventListener("pagehide", handlePageHide);
      markAbandoned("form_closed");
    };
  }, [active, markAbandoned]);

  return {
    onFocusCapture,
    onBlurCapture,
    onInvalidCapture,
    markSubmitAttempt,
    markValidationError,
    markSubmitError,
    markSubmitted,
    markIgnored,
    reset,
  };
}
