"use client";

import { usePathname } from "next/navigation";
import { localeFromPathname } from "@/lib/i18n/config";

/**
 * Renders the document shell so that `<html lang>` reflects the active locale
 * in the server-rendered HTML (not only after hydration).
 *
 * `usePathname` is resolved during static rendering, so every prerendered page
 * ships the correct `lang` attribute in its HTML source and the route stays
 * static. Reading the request headers in the root layout would have produced
 * the same value but would have opted every route, including the 77 blog
 * routes, out of static generation.
 */
export default function HtmlShell({
  bodyClassName,
  children,
}: {
  bodyClassName: string;
  children: React.ReactNode;
}) {
  const locale = localeFromPathname(usePathname() ?? "/");

  return (
    <html lang={locale}>
      <body className={bodyClassName} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
