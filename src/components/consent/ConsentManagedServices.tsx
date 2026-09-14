"use client";

import { Analytics } from "@vercel/analytics/react";
import FacebookPixel from "@/components/FacebookPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import TawkToChat from "@/components/TawkToChat";
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
      {/* These stay mounted so blocked booking/chat CTAs can open a just-in-time
          preference prompt. They make no vendor request until permitted. */}
      <CalEmbed />
      <TawkToChat />

      {/* Moved OUT of the consent gate 14 Sep 2026. Vercel Web Analytics is
          cookieless -- a visitor is a hash of the request, valid one day and
          discarded after 24h -- so it needs no consent and reports on everyone.
          Gated, it only ever saw visitors who accepted cookies, which is why
          the site has had no reliable page-view or referrer figures. GA4,
          Clarity and the Pixel stay gated: they do set identifiers. */}
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
