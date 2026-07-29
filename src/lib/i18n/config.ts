/**
 * Locale configuration for the multilingual pages.
 *
 * English is the default locale and is served WITHOUT a prefix, so every
 * existing English URL (`/`, `/pricing`, `/blog/...`, `/services/...`) is
 * unchanged. Only French and German are prefixed (`/fr/...`, `/de/...`).
 *
 * There is deliberately no IP or Accept-Language redirect anywhere in the
 * codebase: any user or crawler can request any locale URL directly and will
 * be served that locale.
 */

export const SITE_URL = "https://www.pandacodegen.com";

export const locales = ["en", "fr", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Locale names written in their own language, for the visible switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

/** Full BCP 47 tags used for og:locale and JSON-LD inLanguage. */
export const localeTags: Record<Locale, string> = {
  en: "en-US",
  fr: "fr-FR",
  de: "de-DE",
};

/** The pages that exist in every locale. */
export const localizedPages = ["home", "services", "pricing", "contact", "about"] as const;
export type LocalizedPage = (typeof localizedPages)[number];

/**
 * Path map. English paths are the pre-existing production URLs and must not
 * change. Locale paths reuse the same slugs under a locale prefix.
 */
export const routes: Record<LocalizedPage, Record<Locale, string>> = {
  home: { en: "/", fr: "/fr", de: "/de" },
  services: { en: "/services", fr: "/fr/services", de: "/de/services" },
  pricing: { en: "/pricing", fr: "/fr/pricing", de: "/de/pricing" },
  contact: { en: "/contact", fr: "/fr/contact", de: "/de/contact" },
  about: { en: "/about", fr: "/fr/about", de: "/de/about" },
};

export function pathFor(page: LocalizedPage, locale: Locale): string {
  return routes[page][locale];
}

export function urlFor(page: LocalizedPage, locale: Locale): string {
  const path = routes[page][locale];
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Reciprocal hreflang set for one page: every locale (including the page's own
 * locale) plus x-default pointing at English.
 */
export function languageAlternates(page: LocalizedPage): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = urlFor(page, locale);
  }
  languages["x-default"] = urlFor(page, defaultLocale);
  return languages;
}

/**
 * `alternates` block for `generateMetadata` / `export const metadata`.
 * The canonical is always self-referencing: the French page canonicals to the
 * French URL, not to English.
 */
export function alternatesFor(page: LocalizedPage, locale: Locale) {
  return {
    canonical: urlFor(page, locale),
    languages: languageAlternates(page),
  };
}

/** Derives the active locale from a pathname. Used for `<html lang>`. */
export function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return (locales as readonly string[]).includes(segment) && segment !== defaultLocale
    ? (segment as Locale)
    : defaultLocale;
}

/**
 * Finds which localized page a pathname refers to, or null when the path has
 * no translated equivalent (for example a blog post). Used by the switcher so
 * it never links to a page that does not exist.
 */
export function pageFromPathname(pathname: string): LocalizedPage | null {
  const normalized = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  for (const page of localizedPages) {
    for (const locale of locales) {
      if (routes[page][locale] === normalized) return page;
    }
  }
  return null;
}
