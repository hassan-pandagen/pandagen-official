"use client";

import { useReportWebVitals } from "next/web-vitals";
import { trackGAEvent } from "@/components/GoogleAnalytics";

const recentMetricSignatures = new Map<string, number>();

// 18 Nov 2026, dev handoff item 5: web_vital was half of all GA4 events. Sample about
// 10% of sessions; the choice is made once per browser session so a sampled session
// reports all of its metrics.
const WEB_VITALS_SAMPLE_RATE = 0.1;
const SAMPLE_KEY = "pcg_web_vitals_sampled";
let sessionSampled: boolean | undefined;

function inSample(): boolean {
  if (sessionSampled !== undefined) return sessionSampled;
  try {
    const stored = window.sessionStorage.getItem(SAMPLE_KEY);
    if (stored === "1" || stored === "0") return (sessionSampled = stored === "1");
    sessionSampled = Math.random() < WEB_VITALS_SAMPLE_RATE;
    window.sessionStorage.setItem(SAMPLE_KEY, sessionSampled ? "1" : "0");
  } catch {
    // Storage blocked: decide for this page load only.
    sessionSampled = Math.random() < WEB_VITALS_SAMPLE_RATE;
  }
  return sessionSampled;
}

const reportWebVital: Parameters<typeof useReportWebVitals>[0] = (metric) => {
  // FID was replaced by INP as a Core Web Vital in 2024. Next.js may still
  // surface it as a legacy diagnostic, but sending both invites stale reports.
  if (metric.name === "FID") return;
  if (!inSample()) return;

  const pagePath = window.location.pathname;
  const signature = [
    metric.name,
    metric.value,
    metric.delta,
    metric.navigationType,
    pagePath,
  ].join(":");
  const now = Date.now();
  const lastSeenAt = recentMetricSignatures.get(signature);
  if (lastSeenAt && now - lastSeenAt < 10_000) return;
  recentMetricSignatures.set(signature, now);
  for (const [key, recordedAt] of recentMetricSignatures) {
    if (now - recordedAt >= 10_000) recentMetricSignatures.delete(key);
  }

  trackGAEvent("web_vital", {
    metric_name: metric.name,
    metric_value: metric.value,
    metric_delta: metric.delta,
    metric_id: metric.id,
    metric_rating: metric.rating,
    navigation_type: metric.navigationType,
    page_path: pagePath,
    sample_rate: WEB_VITALS_SAMPLE_RATE,
  });
};

/**
 * Sends consented real-user performance measurements to GA4. The component is
 * mounted only by ConsentManagedServices after Analytics consent, so it does
 * not create pre-consent storage or network activity.
 */
export default function WebVitalsReporter() {
  // Keep the callback identity stable. A new function on each render can
  // register duplicate reporters and send the same navigation metric twice.
  useReportWebVitals(reportWebVital);

  return null;
}
