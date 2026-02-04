"use client";

import { useEffect } from "react";

export default function PreconnectLinks() {
  useEffect(() => {
    // Add preconnect hints for external resources
    const links = [
      { rel: "preconnect", href: "https://cal.com" },
      { rel: "dns-prefetch", href: "https://cal.com" },
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
