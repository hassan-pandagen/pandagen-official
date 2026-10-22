/**
 * Advertising click IDs and campaign tags, kept for the browser session.
 *
 * A lead who arrives from an ad and fills in a form three pages later should still carry
 * the click that brought them. These values are read from the landing URL and held in
 * session storage only, so they go when the tab closes. They are also cleared when the
 * visitor denies marketing (see clearDeniedVendorData in ConsentProvider).
 *
 * The newest value wins: ad platforms attribute a conversion to the last click, so a
 * second gclid on a later landing replaces the first.
 *
 * This file must not import the consent module: trafficSource.ts imports it, and the
 * consent provider imports trafficSource.
 */

export const CLICK_IDS_KEY = "pcg_click_ids";

const PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type ClickParam = (typeof PARAMS)[number];
export type ClickIds = Partial<Record<ClickParam, string>> & {
  /** When the current fbclid was first seen, in ms. Meta's fbc value needs it. */
  fbclid_at?: number;
};

export function readClickIds(): ClickIds {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(CLICK_IDS_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : null;
    return parsed && typeof parsed === "object" ? (parsed as ClickIds) : {};
  } catch {
    return {};
  }
}

export function captureClickIds(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const found: ClickIds = {};
    for (const key of PARAMS) {
      const value = params.get(key)?.trim();
      if (value) found[key] = value.slice(0, 300);
    }
    if (Object.keys(found).length === 0) return;

    const stored = readClickIds();
    const next: ClickIds = { ...stored, ...found };
    if (found.fbclid && found.fbclid !== stored.fbclid) next.fbclid_at = Date.now();
    window.sessionStorage.setItem(CLICK_IDS_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable (private mode, blocked cookies): the lead simply has no click ID */
  }
}
