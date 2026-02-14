"use client";

import { useEffect } from "react";

export default function PreconnectLinks() {
  useEffect(() => {
    // Add preconnect hints for critical external resources
    const links = [
      { rel: "preconnect", href: "https://app.cal.com" },
      { rel: "preconnect", href: "https://capig.madgicx.ai" },
      { rel: "preconnect", href: "https://connect.facebook.net" },
      { rel: "dns-prefetch", href: "https://app.cal.com" },
      { rel: "dns-prefetch", href: "https://connect.facebook.net" },
    ];

    links.forEach(({ rel, href }) => {
      // Check if link already exists
      const existingLink = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
      if (!existingLink) {
        const link = document.createElement("link");
        link.rel = rel;
        link.href = href;
        if (rel === "preconnect") {
          link.crossOrigin = "anonymous";
        }
        document.head.appendChild(link);
      }
    });
  }, []);

  return null;
}
