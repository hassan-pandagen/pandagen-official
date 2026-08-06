"use client";

import { captureFirstTouch } from "@/lib/analytics/trafficSource";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export const CONSENT_STORAGE_KEY = "pandacodegen_consent_v1";
const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;

export type OptionalConsentCategory = "analytics" | "marketing" | "functional";
export type ConsentPromptReason = "general" | "calendar" | "chat";

export interface ConsentPreferences {
  version: typeof CONSENT_VERSION;
  essential: true;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  updatedAt: string;
}

interface ConsentChoices {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface ConsentContextValue {
  preferences: ConsentPreferences | null;
  ready: boolean;
  preferencesOpen: boolean;
  promptReason: ConsentPromptReason;
  openPreferences: (reason?: ConsentPromptReason) => void;
  closePreferences: () => void;
  saveChoices: (choices: ConsentChoices) => void;
  acceptAll: () => void;
  rejectOptional: () => void;
}

declare global {
  interface Window {
    __PCG_CONSENT__?: ConsentPreferences | null;
    __openCookiePreferences?: (reason?: ConsentPromptReason) => void;
    __calOpenPending?: boolean;
    __tawkOpenPending?: boolean;
  }
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

const subscribeToHydration = () => () => undefined;
const getClientReadySnapshot = () => true;
const getServerReadySnapshot = () => false;

function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

function parseStoredConsent(raw: string | null): ConsentPreferences | null {
  if (!raw) return null;

  try {
    const value = JSON.parse(raw) as Partial<ConsentPreferences>;
    const updatedAt = Date.parse(value.updatedAt ?? "");
    const isCurrent =
      value.version === CONSENT_VERSION &&
      value.essential === true &&
      isBoolean(value.analytics) &&
      isBoolean(value.marketing) &&
      isBoolean(value.functional) &&
      Number.isFinite(updatedAt) &&
      Date.now() - updatedAt <= CONSENT_MAX_AGE_MS;

    return isCurrent ? (value as ConsentPreferences) : null;
  } catch {
    return null;
  }
}

function globalPrivacyControlEnabled(): boolean {
  if (typeof navigator === "undefined") return false;
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

function applyGlobalPrivacyControl(preferences: ConsentPreferences | null): ConsentPreferences | null {
  return preferences && globalPrivacyControlEnabled() && preferences.marketing
    ? { ...preferences, marketing: false }
    : preferences;
}

export function readStoredConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;
  if (window.__PCG_CONSENT__) return applyGlobalPrivacyControl(window.__PCG_CONSENT__);

  try {
    return applyGlobalPrivacyControl(parseStoredConsent(window.localStorage.getItem(CONSENT_STORAGE_KEY)));
  } catch {
    return null;
  }
}

/** Event helpers use this guard so pre-consent events are dropped, never queued. */
export function hasConsent(category: OptionalConsentCategory): boolean {
  return readStoredConsent()?.[category] === true;
}

function expireFirstPartyCookie(name: string) {
  const base = `${encodeURIComponent(name)}=; Max-Age=0; path=/; SameSite=Lax`;
  document.cookie = base;

  const hostname = window.location.hostname;
  if (hostname && hostname !== "localhost") {
    document.cookie = `${base}; domain=${hostname}`;
    document.cookie = `${base}; domain=.${hostname.replace(/^www\./, "")}`;
  }
}

function clearMatchingStorage(storage: Storage, matcher: (key: string) => boolean) {
  const keys: string[] = [];
  for (let index = 0; index < storage.length; index += 1) {
    const key = storage.key(index);
    if (key && key !== CONSENT_STORAGE_KEY && matcher(key)) keys.push(key);
  }
  keys.forEach((key) => storage.removeItem(key));
}

function clearDeniedVendorData(choices: ConsentChoices) {
  if (typeof window === "undefined") return;

  try {
    const cookieNames = document.cookie
      .split(";")
      .map((cookie) => decodeURIComponent(cookie.split("=")[0]?.trim() ?? ""))
      .filter(Boolean);

    cookieNames.forEach((name) => {
      const analyticsCookie = /^(_ga|_gid|_gat|_clck|_clsk|CLID|ANONCHK|MR|MUID|SM)/i.test(name);
      const marketingCookie = /^(_fbp|_fbc|fr)$/i.test(name);
      const functionalCookie = /^(TawkConnectionTime|twk_idm_key|twk_uuid|__tawkuuid|cal-)/i.test(name);

      if (
        (!choices.analytics && analyticsCookie) ||
        (!choices.marketing && marketingCookie) ||
        (!choices.functional && functionalCookie)
      ) {
        expireFirstPartyCookie(name);
      }
    });

    if (!choices.functional) {
      window.localStorage.removeItem("trafficSource");
      window.sessionStorage.removeItem("visitorGeo");
      clearMatchingStorage(window.localStorage, (key) => /^(tawk|twk|cal)/i.test(key));
      clearMatchingStorage(window.sessionStorage, (key) => /^(tawk|twk|cal)/i.test(key));
    }
    if (!choices.analytics) {
      clearMatchingStorage(window.localStorage, (key) => /^(_ga|_cl|clarity)/i.test(key));
      clearMatchingStorage(window.sessionStorage, (key) => /^(_ga|_cl|clarity)/i.test(key));
    }
    if (!choices.marketing) {
      clearMatchingStorage(window.localStorage, (key) => /^(_fb|fbp|fbc)/i.test(key));
      clearMatchingStorage(window.sessionStorage, (key) => /^(_fb|fbp|fbc)/i.test(key));
    }
  } catch {
    // Storage/cookie access can be disabled by the browser. Consent gating still
    // prevents new vendor code from mounting in that situation.
  }
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  // First-touch attribution, recorded before the referrer is lost to
  // in-site navigation. Storage only; no network call and no consent
  // implication, so it runs regardless of preferences.
  useEffect(() => {
    captureFirstTouch();
  }, []);

  const [preferences, setPreferences] = useState<ConsentPreferences | null>(readStoredConsent);
  const ready = useSyncExternalStore(
    subscribeToHydration,
    getClientReadySnapshot,
    getServerReadySnapshot,
  );
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [promptReason, setPromptReason] = useState<ConsentPromptReason>("general");

  useEffect(() => {
    window.__PCG_CONSENT__ = preferences;

    try {
      if (!preferences) {
        window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      } else {
        window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
      }
    } catch {
      // Storage may be unavailable; the in-memory default-deny state still applies.
    }

    clearDeniedVendorData({
      analytics: preferences?.analytics ?? false,
      marketing: preferences?.marketing ?? false,
      functional: preferences?.functional ?? false,
    });
  }, [preferences]);

  useEffect(() => {
    const syncConsentAcrossTabs = (event: StorageEvent) => {
      if (event.key !== CONSENT_STORAGE_KEY) return;

      const next = applyGlobalPrivacyControl(parseStoredConsent(event.newValue));
      const revokedPreviouslyAllowedCategory = Boolean(
        preferences &&
          ((!next?.analytics && preferences.analytics) ||
            (!next?.marketing && preferences.marketing) ||
            (!next?.functional && preferences.functional)),
      );

      window.__PCG_CONSENT__ = next;
      clearDeniedVendorData({
        analytics: next?.analytics ?? false,
        marketing: next?.marketing ?? false,
        functional: next?.functional ?? false,
      });

      if (revokedPreviouslyAllowedCategory) {
        window.location.reload();
        return;
      }

      setPreferences(next);
    };

    window.addEventListener("storage", syncConsentAcrossTabs);
    return () => window.removeEventListener("storage", syncConsentAcrossTabs);
  }, [preferences]);

  const openPreferences = useCallback((reason: ConsentPromptReason = "general") => {
    setPromptReason(reason);
    setPreferencesOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setPreferencesOpen(false);
    setPromptReason("general");
  }, []);

  useEffect(() => {
    window.__openCookiePreferences = openPreferences;
    return () => {
      delete window.__openCookiePreferences;
    };
  }, [openPreferences]);

  const saveChoices = useCallback(
    (choices: ConsentChoices) => {
      const next: ConsentPreferences = {
        version: CONSENT_VERSION,
        essential: true,
        analytics: choices.analytics,
        marketing: choices.marketing && !globalPrivacyControlEnabled(),
        functional: choices.functional,
        updatedAt: new Date().toISOString(),
      };

      const revokedPreviouslyAllowedCategory = Boolean(
        preferences &&
          ((!next.analytics && preferences.analytics) ||
            (!next.marketing && preferences.marketing) ||
            (!next.functional && preferences.functional)),
      );

      window.__PCG_CONSENT__ = next;
      try {
        window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // The in-memory choice still controls this page when storage is blocked.
      }

      clearDeniedVendorData(next);
      setPreferences(next);
      setPreferencesOpen(false);
      setPromptReason("general");

      // Third-party widgets can create iframes and globals outside React's tree.
      // A reload after withdrawal guarantees they are no longer active.
      if (revokedPreviouslyAllowedCategory) {
        window.setTimeout(() => window.location.reload(), 0);
      }
    },
    [preferences],
  );

  const acceptAll = useCallback(() => {
    saveChoices({ analytics: true, marketing: true, functional: true });
  }, [saveChoices]);

  const rejectOptional = useCallback(() => {
    saveChoices({ analytics: false, marketing: false, functional: false });
  }, [saveChoices]);

  const value = useMemo<ConsentContextValue>(
    () => ({
      preferences,
      ready,
      preferencesOpen,
      promptReason,
      openPreferences,
      closePreferences,
      saveChoices,
      acceptAll,
      rejectOptional,
    }),
    [
      preferences,
      ready,
      preferencesOpen,
      promptReason,
      openPreferences,
      closePreferences,
      saveChoices,
      acceptAll,
      rejectOptional,
    ],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentContextValue {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent must be used inside ConsentProvider");
  return context;
}
