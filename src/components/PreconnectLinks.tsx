"use client";

export default function PreconnectLinks() {
  return (
    <>
      {/* Facebook Pixel */}
      <link rel="preconnect" href="https://connect.facebook.net" />
      <link rel="dns-prefetch" href="https://connect.facebook.net" />
      {/* Tawk.to live chat */}
      <link rel="preconnect" href="https://embed.tawk.to" />
      <link rel="dns-prefetch" href="https://embed.tawk.to" />
      {/* Trustpilot widget */}
      <link rel="preconnect" href="https://widget.trustpilot.com" />
      <link rel="dns-prefetch" href="https://widget.trustpilot.com" />
    </>
  );
}
