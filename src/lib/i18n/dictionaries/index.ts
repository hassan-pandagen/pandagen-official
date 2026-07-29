import type { Locale } from "../config";
import type { Dictionary } from "./types";
import fr from "./fr";
import de from "./de";

/**
 * Only the non-default locales need a dictionary. The English pages keep their
 * own existing components and copy, so English URLs and content are untouched.
 */
export type TranslatedLocale = Exclude<Locale, "en">;

export const dictionaries: Record<TranslatedLocale, Dictionary> = { fr, de };

export function getDictionary(locale: TranslatedLocale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary } from "./types";
