import type { Metadata } from "next";
import { ogImageForPath } from "@/lib/seo/og";
import {
  alternatesFor,
  localeTags,
  locales,
  routes,
  urlFor,
  type LocalizedPage,
} from "./config";
import { getDictionary, type TranslatedLocale } from "./dictionaries";

/**
 * Builds the metadata for a localized page:
 *  - a self-referencing canonical (the French page canonicals to itself),
 *  - reciprocal `hreflang` alternates covering every locale including itself,
 *  - `x-default` pointing at the English version.
 */
export function localeMetadata(locale: TranslatedLocale, page: LocalizedPage): Metadata {
  const { meta } = getDictionary(locale)[page];
  const url = urlFor(page, locale);

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: alternatesFor(page, locale),
    openGraph: {
      type: "website",
      url,
      siteName: "PandaCodeGen",
      title: meta.title,
      description: meta.description,
      locale: localeTags[locale].replace("-", "_"),
      alternateLocale: locales
        .filter((other) => other !== locale)
        .map((other) => localeTags[other].replace("-", "_")),
      images: [ogImageForPath(routes[page].en)],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImageForPath(routes[page].en)],
    },
  };
}
