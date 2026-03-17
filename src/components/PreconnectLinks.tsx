"use client";

export default function PreconnectLinks() {
  return (
    <>
      {/* Tawk.to, loads lazily on interaction, dns-prefetch only */}
      <link rel="dns-prefetch" href="https://embed.tawk.to" />
      {/* Trustpilot widget, preconnect recommended by Lighthouse */}
      <link rel="preconnect" href="https://widget.trustpilot.com" />
      <link rel="dns-prefetch" href="https://widget.trustpilot.com" />
      {/* Cal.com booking widget - saves 330ms LCP */}
      <link rel="preconnect" href="https://app.cal.com" />
      <link rel="dns-prefetch" href="https://app.cal.com" />
    </>
  );
}
