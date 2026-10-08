"use client";

import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
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

// The node the banner renders into: the first child of <body>. Created once, on
// the client only; the server snapshot is null, so the server HTML is unchanged.
let bannerHostNode: HTMLElement | null = null;
function getBannerHost() {
  if (!bannerHostNode || !bannerHostNode.isConnected) {
    bannerHostNode = document.createElement("div");
    bannerHostNode.dataset.cookieBannerHost = "";
    document.body.prepend(bannerHostNode);
  }
  return bannerHostNode;
}
const noSubscription = () => () => {};

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
  const [chatOpen, setChatOpen] = useState(false);
  const bannerHost = useSyncExternalStore(noSubscription, getBannerHost, () => null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bannerRef = useRef<HTMLElement>(null);
  const showBanner = !preferences && !preferencesOpen && !chatOpen;
  const draft = draftOverride ?? {
    analytics: preferences?.analytics ?? defaultChoices.analytics,
    marketing: preferences?.marketing ?? defaultChoices.marketing,
    functional: preferences?.functional ?? defaultChoices.functional,
  };

  useEffect(() => {
    const sync = () => setChatOpen(
      document.body.dataset.assistantChatOpen === "true" || document.body.dataset.tawkChatOpen === "true",
    );
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-assistant-chat-open", "data-tawk-chat-open"] });
    sync();
    return () => observer.disconnect();
  }, []);

  // 4 Oct 2026, keyboard access (WCAG 2.2 SC 2.4.11, Focus Not Obscured). This
  // component renders last in the layout, so the banner was the last thing on the
  // page to get focus: about 110 Tab presses on the home page. Meanwhile the fixed
  // banner sat over the bottom of the screen and completely hid 16 of 115 focused
  // links there at 1366x900 (25 of 109 at 390x844). Two fixes, both measured:
  //
  // 1. The banner renders into a node at the very start of <body>, before the
  //    skip link, so it is the first thing Tab reaches. That is where the GOV.UK
  //    Design System puts its cookie banner. It still looks the same: fixed to the
  //    bottom of the screen.
  // 2. While the banner is open, the page gets a bottom scroll-padding equal to
  //    the area the banner covers, so the browser scrolls a focused link up above
  //    the banner instead of leaving it underneath. The body also gets the same
  //    space at the bottom; without it the footer's last row (Privacy, Terms,
  //    Cookies...) could not scroll any higher and stayed hidden.
  //
  // Consent logic, GPC handling and the events ConsentProvider sends are untouched.
  useEffect(() => {
    const banner = bannerRef.current;
    if (!ready || !showBanner || !banner) return;
    const root = document.documentElement;
    const update = () => {
      const covered = Math.max(0, Math.ceil(window.innerHeight - banner.getBoundingClientRect().top));
      root.style.scrollPaddingBottom = `${covered + 16}px`;
      root.style.setProperty("--cookie-banner-clearance", `${covered + 16}px`);
      document.body.style.paddingBottom = `${covered}px`;
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(banner);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
      root.style.scrollPaddingBottom = "";
      root.style.removeProperty("--cookie-banner-clearance");
      document.body.style.paddingBottom = "";
    };
  }, [ready, showBanner, bannerHost]);

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
      ? "The booking calendar connects to Cal.com. Allow Scheduling to load it."
      : "Choose which optional services may load. You can change or withdraw your choice at any time.";

  if (!ready) return null;

  const banner = showBanner ? (
        <section
          ref={bannerRef}
          aria-label="Cookie and privacy choices"
          data-cookie-control
          style={{ zIndex: 2147483000 }}
          className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-5xl rounded-2xl border border-stone-300 bg-white p-4 shadow-2xl sm:inset-x-6 sm:bottom-6 sm:p-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-2xl items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100 text-charcoal">
                <Cookie className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                {/* Kept short on purpose. At 390px this banner measured 349px, 41% of
                    the first screen, and covered the primary action. The paragraph was
                    120px of that. The full category list lives in the Cookie Policy and
                    in the preferences dialog; a consent notice has to be readable, not
                    exhaustive.

                    Do NOT change the relative prominence of rejecting and accepting:
                    they are the same size, the same shape and side by side, and
                    rejecting must stay exactly as easy as accepting.

                    9 Sep 2026, second pass. Trimming the copy alone was not enough. The
                    banner still opened at y=531 on a 390x844 screen, and the hero's
                    hero button (then labelled "Get your migration plan", now "Ask us
                    about your site") also starts at exactly y=531, so
                    the primary action was completely covered on a first visit. Three
                    stacked buttons were the height. The granular option moved into the
                    sentence as a real button, which drops a whole row without touching
                    the reject-accept balance. If you put it back in the grid, measure
                    the banner against the hero button before shipping. */}
                <h2 className="font-bold text-charcoal">Your privacy choices</h2>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  Optional analytics, advertising, chat and scheduling stay off until you allow them.{" "}
                  <button
                    type="button"
                    onClick={() => openPreferences()}
                    className="font-semibold text-charcoal underline underline-offset-2 hover:text-cognac focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
                  >
                    Choose which ones
                  </button>
                  , or read the{" "}
                  <Link href="/cookies" className="font-semibold text-charcoal underline underline-offset-2">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:shrink-0">
              <button
                type="button"
                onClick={rejectOptional}
                className="min-h-11 whitespace-nowrap rounded-full border border-stone-300 px-4 py-2.5 text-sm font-bold text-charcoal transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal sm:px-5"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="min-h-11 whitespace-nowrap rounded-full bg-charcoal px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal sm:px-5"
              >
                Accept all
              </button>
            </div>
          </div>
        </section>
  ) : null;

  return (
    <>
      {bannerHost ? createPortal(banner, bannerHost) : banner}

      {preferences && !preferencesOpen && !chatOpen && (
        <button
          type="button"
          data-cookie-control
          onClick={() => openPreferences()}
          style={{ zIndex: 2147483000 }}
          className="fixed bottom-4 left-4 z-[90] inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-[#faf7f1] text-stone-600 shadow-md transition-colors hover:border-[#ad3d0b] hover:bg-white hover:text-[#ad3d0b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ad3d0b]"
          title="Cookie preferences"
          aria-label="Open cookie preferences"
        >
          <Cookie className="h-[18px] w-[18px]" aria-hidden="true" />
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
                Allow scheduling
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
              description="Google Analytics and Microsoft Clarity help us understand visits and improve the site."
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
              title="Scheduling"
              description="Cal.com provides booking. It loads only when Functional is enabled. Live chat with Hassan needs no cookies and works either way."
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
