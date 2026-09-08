"use client";

import Link from "next/link";
import { Cookie, Settings2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useConsent } from "./ConsentProvider";

interface DraftChoices {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const defaultChoices: DraftChoices = {
  analytics: false,
  marketing: false,
  functional: false,
};

export default function CookieConsent() {
  const {
    preferences,
    ready,
    preferencesOpen,
    promptReason,
    openPreferences,
    closePreferences,
    saveChoices,
    acceptAll,
    rejectOptional,
  } = useConsent();
  const [draftOverride, setDraft] = useState<DraftChoices | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const draft = draftOverride ?? {
    analytics: preferences?.analytics ?? defaultChoices.analytics,
    marketing: preferences?.marketing ?? defaultChoices.marketing,
    functional: preferences?.functional ?? defaultChoices.functional,
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (preferencesOpen && !dialog.open) {
      dialog.showModal();
      window.requestAnimationFrame(() => headingRef.current?.focus());
    } else if (!preferencesOpen && dialog.open) {
      dialog.close();
    }
  }, [preferencesOpen]);

  const closeDialog = () => {
    setDraft(null);
    closePreferences();
  };

  const saveDraft = (choices: DraftChoices) => {
    setDraft(null);
    saveChoices(choices);
  };

  const rejectFromDialog = () => {
    setDraft(null);
    rejectOptional();
  };

  const reasonCopy =
    promptReason === "calendar"
      ? "The booking calendar connects to Cal.com. Allow Scheduling & live chat to load it."
      : promptReason === "chat"
        ? "Live chat connects to Tawk.to and uses IP-based location data. Allow Scheduling & live chat to start it."
        : "Choose which optional services may load. You can change or withdraw your choice at any time.";

  if (!ready) return null;

  return (
    <>
      {!preferences && !preferencesOpen && (
        <section
          aria-label="Cookie and privacy choices"
          style={{ zIndex: 2147483000 }}
          className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-5xl rounded-2xl border border-stone-300 bg-white p-4 shadow-2xl sm:inset-x-6 sm:bottom-6 sm:p-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-2xl items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100 text-charcoal">
                <Cookie className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-bold text-charcoal">Your privacy choices</h2>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  We keep optional analytics, advertising, live chat, chat location lookup, and scheduling tools off until you allow them. Necessary storage only remembers this choice. Read our{" "}
                  <Link href="/cookies" className="font-semibold text-charcoal underline underline-offset-2">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:shrink-0">
              <button
                type="button"
                onClick={rejectOptional}
                className="min-h-11 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-bold text-charcoal transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={() => openPreferences()}
                className="min-h-11 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-bold text-charcoal transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="min-h-11 rounded-full bg-charcoal px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
              >
                Accept all
              </button>
            </div>
          </div>
        </section>
      )}

      {preferences && !preferencesOpen && (
        <button
          type="button"
          onClick={() => openPreferences()}
          style={{ zIndex: 2147483000 }}
          className="fixed bottom-3 left-3 z-[90] inline-flex min-h-10 items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-2 text-xs font-bold text-charcoal shadow-lg transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal sm:bottom-5 sm:left-5"
          aria-label="Open cookie preferences"
        >
          <Settings2 className="h-4 w-4" aria-hidden="true" />
          Cookie settings
        </button>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="cookie-preferences-title"
        aria-describedby="cookie-preferences-description"
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClose={closeDialog}
        data-lenis-prevent
        className="m-auto max-h-[90vh] w-[calc(100%-1.5rem)] max-w-2xl overflow-y-auto rounded-3xl border border-stone-200 bg-white p-0 text-charcoal shadow-2xl backdrop:bg-black/60"
      >
        <div className="p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cognac">Privacy controls</p>
              <h2
                id="cookie-preferences-title"
                ref={headingRef}
                tabIndex={-1}
                className="mt-2 text-2xl font-bold outline-none sm:text-3xl"
              >
                Cookie preferences
              </h2>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-300 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
              aria-label="Close cookie preferences"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <p id="cookie-preferences-description" className="mt-4 text-sm leading-6 text-stone-600">
            {reasonCopy}
          </p>

          {(promptReason === "calendar" || promptReason === "chat") && (
            <div className="mt-4 rounded-2xl border border-cognac/30 bg-cognac/5 p-4">
              <p className="text-sm text-stone-700">
                This permission is optional and does not enable analytics or advertising.
              </p>
              <button
                type="button"
                onClick={() => saveDraft({ ...draft, functional: true })}
                className="mt-3 min-h-11 rounded-full bg-charcoal px-5 py-2.5 text-sm font-bold text-white hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
              >
                Allow scheduling &amp; live chat
              </button>
            </div>
          )}

          <div className="mt-6 space-y-3">
            <PreferenceRow
              id="consent-essential"
              title="Necessary"
              description="Stores your privacy choice and supports security and forms. Always on."
              checked
              disabled
            />
            <PreferenceRow
              id="consent-analytics"
              title="Analytics"
              description="Google Analytics, Microsoft Clarity, and Vercel Analytics help us understand visits and improve the site."
              checked={draft.analytics}
              onChange={(checked) => setDraft({ ...draft, analytics: checked })}
            />
            <PreferenceRow
              id="consent-marketing"
              title="Advertising"
              description="Meta Pixel measures campaigns and may support advertising on Meta platforms."
              checked={draft.marketing}
              onChange={(checked) => setDraft({ ...draft, marketing: checked })}
            />
            <PreferenceRow
              id="consent-functional"
              title="Scheduling & live chat"
              description="Cal.com provides booking and Tawk.to provides chat. These services load only when Functional is enabled."
              checked={draft.functional}
              onChange={(checked) => setDraft({ ...draft, functional: checked })}
            />
          </div>

          <div className="mt-7 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={rejectFromDialog}
              className="min-h-11 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-bold hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
            >
              Reject optional
            </button>
            <button
              type="button"
              onClick={() => saveDraft(draft)}
              className="min-h-11 rounded-full bg-charcoal px-6 py-2.5 text-sm font-bold text-white hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
            >
              Save choices
            </button>
          </div>

          <p className="mt-5 text-xs leading-5 text-stone-500">
            See the <Link href="/cookies" className="underline underline-offset-2">Cookie Policy</Link> for provider details and retention information.
          </p>
        </div>
      </dialog>
    </>
  );
}

function PreferenceRow({
  id,
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  id: string;
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-start justify-between gap-5 rounded-2xl border p-4 ${
        disabled ? "cursor-not-allowed border-stone-200 bg-stone-50" : "border-stone-300 hover:border-stone-400"
      }`}
    >
      <span>
        <span className="block font-bold text-charcoal">{title}</span>
        <span className="mt-1 block text-sm leading-5 text-stone-600">{description}</span>
      </span>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-1 h-6 w-6 shrink-0 accent-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
      />
    </label>
  );
}
