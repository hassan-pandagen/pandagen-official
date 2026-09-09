"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  localeFromPathname,
  localeNames,
  localeShortNames,
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
 *
 * `compact` is for the fixed header. Measured 9 Sep 2026: the full-name form is
 * 294px wide, wider than the call-to-action button beside it, and at every
 * laptop width from 1280 to 1440 it wrapped and pushed the header from 84px to
 * 104px tall. The compact form shows the two-letter code and carries the full
 * name in visually hidden text, so the accessible name still contains the
 * visible label. The footer and the localised pages keep the full names.
 */
export default function LocaleSwitcher({
  label,
  className = "",
  compact = false,
}: {
  label?: string;
  className?: string;
  compact?: boolean;
}) {
  const pathname = usePathname() ?? "/";
  const page = pageFromPathname(pathname);
  if (!page) return null;

  const activeLocale = localeFromPathname(pathname);

  return (
    <nav aria-label={label ?? "Language"} className={className}>
      <ul
        className={
          compact
            ? "flex items-center gap-x-1.5"
            : "flex flex-wrap items-center gap-x-2 gap-y-1"
        }
      >
        {!compact && (
          <li className="text-[11px] font-bold uppercase tracking-widest text-stone-600">
            {label ?? "Language"}
          </li>
        )}
        {locales.map((locale, index) => {
          const isActive = locale === activeLocale;
          const showSeparator = compact ? index > 0 : true;
          return (
            <li key={locale} className="flex items-center gap-1.5">
              {showSeparator && (
                <span aria-hidden="true" className="text-stone-300">
                  /
                </span>
              )}
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
                {compact ? (
                  <>
                    {localeShortNames[locale]}
                    <span className="sr-only"> {localeNames[locale]}</span>
                  </>
                ) : (
                  localeNames[locale]
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
