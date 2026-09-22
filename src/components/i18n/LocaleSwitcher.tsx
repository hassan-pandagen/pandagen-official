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
 * `fallbackToHome` relaxes the hiding, not the rule. On an untranslated route
 * it offers each OTHER language's home page instead of rendering nothing. Those
 * roots always exist, so "never link to a page that does not exist" still
 * holds; what changes is that the switcher stops claiming this page has a
 * translation, which is why the label changes with it and the current language
 * is dropped from the list rather than linking you to your own homepage.
 *
 * Added 23 Sep 2026. Only 7 of 146 sitemap URLs linked to either locale root,
 * because the switcher sits in the header and footer of every page but returned
 * null on all but five routes per language. The footer opts in; the header does
 * not, since two bare letters there cannot carry the distinction.
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
  fallbackToHome = false,
}: {
  label?: string;
  className?: string;
  compact?: boolean;
  fallbackToHome?: boolean;
}) {
  const pathname = usePathname() ?? "/";
  const page = pageFromPathname(pathname);
  if (!page && !fallbackToHome) return null;

  const activeLocale = localeFromPathname(pathname);
  const translated = page !== null;
  const targetPage = page ?? "home";
  const shownLocales = translated ? locales : locales.filter((l) => l !== activeLocale);
  const navLabel = translated ? (label ?? "Language") : "Other languages";

  return (
    <nav aria-label={navLabel} className={className}>
      <ul
        className={
          compact
            ? "flex items-center gap-x-1.5"
            : "flex flex-wrap items-center gap-x-2 gap-y-1"
        }
      >
        {!compact && (
          <li className="text-[11px] font-bold uppercase tracking-widest text-stone-600">
            {navLabel}
          </li>
        )}
        {shownLocales.map((locale, index) => {
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
                href={routes[targetPage][locale]}
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
