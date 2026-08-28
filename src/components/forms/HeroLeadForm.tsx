"use client";

import { getAttribution } from "@/lib/analytics/trafficSource";

import { useRef, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import CalModalButton from "@/components/ui/CalModalButton";
import { trackFBEvent } from "@/components/FacebookPixel";
import { trackGAEvent } from "@/components/GoogleAnalytics";
import { useLeadFormFunnel } from "@/hooks/useLeadFormFunnel";
import type { LeadFormCopy } from "@/lib/i18n/dictionaries/types";

const englishCopy: LeadFormCopy = {
  eyebrow: "Start here",
  heading: "Have a project or a question in mind?",
  intro:
    "We are here to help. Share your website, or anything about it you would like to discuss, and a founder will reply. Every message gets an answer, whether or not it ever turns into a quote.",
  nameLabel: "Name",
  emailLabel: "Email",
  urlLabel: "Your website",
  urlHint: "optional",
  detailsLabel: "What you have in mind",
  detailsPlaceholder:
    "A migration, a redesign, faster pages, or a question you would like answered. A sentence is plenty.",
  submit: "Send it over",
  submitting: "Sending…",
  successHeading: "Thank you, we have it.",
  successBody: "You will hear back from info@pandacodegen.com, usually within one business day.",
  directHeading: "Prefer to talk instead?",
  directBody: "Email us or book a call. Both reach the founders directly, not a sales desk.",
  bookLabel: "Book a discovery call",
  errorFallback: "We could not send your request. Please email info@pandacodegen.com.",
  honeypotLabel: "Leave this field empty",
  replyNote: "",
};

async function responseMessage(response: Response, fallback: string): Promise<string> {
  try {
    const body = (await response.json()) as { error?: unknown };
    if (typeof body.error === "string" && body.error.trim()) return body.error;
  } catch {
    // A generic message is safer when an upstream proxy returns non-JSON.
  }
  return fallback;
}

/**
 * Inline hero lead capture. This slot previously mounted the audit widget, which
 * converted no leads and produced the page's entire layout shift when its fallback
 * swapped for the real component. Everything here renders on first paint with no
 * dynamic import and no skeleton, so the column cannot shift before interaction.
 *
 * Deliberately four fields. The enterprise buyers who evaluate us over several
 * emails and calls do not convert on a homepage form, so the form is not trying to
 * win them. It catches the reader who arrived from a blog post and is not ready to
 * write an email yet. The direct email and call links below it are the path for
 * everyone who is.
 */
const CONTACT_EMAIL = "info@pandacodegen.com";

export default function HeroLeadForm({
  copy = englishCopy,
  locale = "en",
}: {
  copy?: LeadFormCopy;
  locale?: string;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formLoadedAtRef = useRef(0);

  const formFunnel = useLeadFormFunnel({
    formId: "hero_inline",
    active: !isSubmitted,
  });

  // Set on first interaction rather than in an effect: the server render must not
  // depend on a clock, and the API only needs a plausible fill duration.
  const stampFormLoad = () => {
    if (formLoadedAtRef.current === 0) formLoadedAtRef.current = Date.now();
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
      if (!response.ok) throw new Error(await responseMessage(response, copy.errorFallback));

      formFunnel.markSubmitted();
      trackFBEvent("Lead", {
        content_name: "Homepage Hero Enquiry",
        content_category: "Contact Form",
        value: 0,
        currency: "USD",
      });
      trackGAEvent("quote_submit", { form: "hero_inline", locale });
      setIsSubmitted(true);
    } catch (submissionError) {
      formFunnel.markSubmitError("network_or_server");
      setError(submissionError instanceof Error ? submissionError.message : copy.errorFallback);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative z-10 w-full max-w-xl rounded-2xl border border-stone-200 bg-white shadow-xl">
      <div className="flex items-center justify-between border-b border-stone-100 bg-stone-50/80 px-6 py-3">
        <span className="text-[10px] font-bold uppercase tracking-wider text-cognac">{copy.eyebrow}</span>
      </div>

      {/* min-height holds the card steady when the success panel replaces the form */}
      <div className="min-h-[27rem] p-6 md:p-7">
        {isSubmitted ? (
          <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
            <CheckCircle2 className="h-12 w-12 text-cognac" aria-hidden="true" />
            <p className="mt-5 text-xl font-bold text-charcoal">{copy.successHeading}</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-stone-600">{copy.successBody}</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold leading-tight text-charcoal md:text-2xl">{copy.heading}</h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">{copy.intro}</p>

            <form
              onSubmit={handleSubmit}
              onFocusCapture={(event) => {
                stampFormLoad();
                formFunnel.onFocusCapture(event);
              }}
              onBlurCapture={formFunnel.onBlurCapture}
              onInvalidCapture={formFunnel.onInvalidCapture}
              className="mt-5 space-y-3"
              noValidate={false}
            >

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  {copy.nameLabel} <span className="text-cognac">*</span>
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-base font-normal normal-case tracking-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                  />
                </label>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  {copy.emailLabel} <span className="text-cognac">*</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-base font-normal normal-case tracking-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                  />
                </label>
              </div>

              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                {copy.urlLabel}{" "}
                <span className="font-medium normal-case text-stone-500">({copy.urlHint})</span>
                {/*
                  type="text", not type="url". The browser refuses to submit a
                  type="url" field unless it carries a scheme, so "www.acme.com"
                  produced "Please enter a URL" on a field labelled optional.
                  inputMode keeps the URL keyboard on mobile; the server
                  normalises a bare host to https before validating.
                */}
                <input
                  type="text"
                  inputMode="url"
                  name="currentUrl"
                  autoComplete="url"
                  placeholder="example.com"
                  className="mt-1.5 w-full rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-base font-normal normal-case tracking-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                />
              </label>

              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                {copy.detailsLabel}
                <textarea
                  name="details"
                  rows={3}
                  placeholder={copy.detailsPlaceholder}
                  className="mt-1.5 w-full resize-none rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-base font-normal normal-case tracking-normal text-charcoal outline-hidden transition-colors focus:border-cognac focus:ring-1 focus:ring-cognac"
                />
              </label>

              <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
                <label htmlFor="hero-website-confirm">{copy.honeypotLabel}</label>
                <input id="hero-website-confirm" name="website_url_confirm" tabIndex={-1} autoComplete="off" />
              </div>

              {error ? (
                <p role="alert" className="text-sm font-semibold text-red-700">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-charcoal px-6 font-bold text-white transition-colors hover:bg-cognac disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? copy.submitting : copy.submit}
                {isLoading ? null : <Send className="h-4 w-4" aria-hidden="true" />}
              </button>
            </form>
          </>
        )}
      </div>

      {/* The consultative path. Buyers who run a multi-week evaluation want a human,
          not a form, and burying that behind a contact page adds friction for exactly
          the enquiries worth the most. */}
      <div className="border-t border-stone-100 bg-stone-50/60 px-6 py-4">
        <p className="text-xs font-bold uppercase tracking-wider text-stone-700">{copy.directHeading}</p>
        <p className="mt-1.5 text-sm leading-6 text-stone-600">{copy.directBody}</p>
        <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5">
          {/* Opens the quote modal rather than a mail client. A mailto hands the
              visitor to an app that may not be configured, and if it fails the lead
              is lost with no record it existed. Keeping them on-site captures it. */}
          <button
            type="button"
            onClick={() => {
              trackGAEvent("cta_click", { cta: "email_founders", location: "hero_lead_form" });
              window.dispatchEvent(new Event("open-quote-modal"));
            }}
            className="text-sm font-bold text-cognac underline-offset-4 hover:text-charcoal hover:underline"
          >
            {CONTACT_EMAIL}
          </button>
          <CalModalButton
            fallbackHref="https://cal.com/pandagen/discovery"
            className="text-sm font-bold text-cognac underline-offset-4 hover:text-charcoal hover:underline"
          >
            {copy.bookLabel}
          </CalModalButton>
        </div>
        {copy.replyNote ? <p className="mt-3 text-xs leading-5 text-stone-500">{copy.replyNote}</p> : null}
      </div>
    </div>
  );
}

export { englishCopy as heroLeadFormEnglishCopy };
