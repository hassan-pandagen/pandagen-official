"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  localeFromPathname,
  localeNames,
  locales,
  pageFromPathname,
  routes,
} from "@/lib/i18n/config";

/**
 * Visible language switcher. It shows language names rather than flags, and
 * links to the equivalent page in each locale.
 *
 * It renders nothing on routes that have no translated equivalent (blog posts,
 * legal pages, individual service pages) so it never points at a URL that does
 * not exist. Navigation is a plain link: no IP or Accept-Language redirect is
 * involved anywhere, so any visitor or crawler can request any locale directly.
 */
export default function LocaleSwitcher({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const pathname = usePathname() ?? "/";
  const page = pageFromPathname(pathname);
  if (!page) return null;

  const activeLocale = localeFromPathname(pathname);

  return (
    <nav aria-label={label ?? "Language"} className={className}>
      <ul className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li className="text-[11px] font-bold uppercase tracking-widest text-stone-600">
          {label ?? "Language"}
        </li>
        {locales.map((locale) => {
          const isActive = locale === activeLocale;
          return (
            <li key={locale} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-stone-300">
                /
              </span>
              <Link
                href={routes[page][locale]}
                hrefLang={locale}
                lang={locale}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "inline-flex min-h-6 items-center font-bold text-cognac"
                    : "inline-flex min-h-6 items-center text-stone-600 transition-colors hover:text-cognac"
                }
              >
                {localeNames[locale]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
