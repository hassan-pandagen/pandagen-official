"use client";

import { useReportWebVitals } from "next/web-vitals";
import { trackGAEvent } from "@/components/GoogleAnalytics";

const recentMetricSignatures = new Map<string, number>();

const reportWebVital: Parameters<typeof useReportWebVitals>[0] = (metric) => {
  // FID was replaced by INP as a Core Web Vital in 2024. Next.js may still
  // surface it as a legacy diagnostic, but sending both invites stale reports.
  if (metric.name === "FID") return;

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
