"use client";

import { Analytics } from "@vercel/analytics/react";
import FacebookPixel from "@/components/FacebookPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import CalEmbed from "@/components/ui/CalEmbed";
import { useConsent } from "./ConsentProvider";

export default function ConsentManagedServices() {
  const { preferences, ready } = useConsent();
  const hostname = typeof window === "undefined" ? "" : window.location.hostname;
  const isHostedEnvironment =
    hostname !== "" &&
    hostname !== "localhost" &&
    hostname !== "127.0.0.1" &&
    hostname !== "::1";

  return (
    <>
      {/* Stays mounted so a blocked booking CTA can open a just-in-time
          preference prompt. It makes no vendor request until permitted.
          Tawk.to was removed 7 Oct 2026: live chat now runs inside the
          assistant panel through /api/live-chat. */}
      <CalEmbed />

      {/* Vercel Web Analytics remains outside this consent gate. Its counts
          can differ from consent-gated GA4 and are not a census of all visits:
          blockers, script failures and counting methods still affect them. */}
      {isHostedEnvironment && <Analytics />}

      {ready && preferences?.analytics && (
        <>
          <GoogleAnalytics />
          <MicrosoftClarity />
          <WebVitalsReporter />
        </>
      )}

      {ready && preferences?.marketing && <FacebookPixel />}
    </>
  );
}
