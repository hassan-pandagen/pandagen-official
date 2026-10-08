import Link from "next/link";
import type { ReactNode } from "react";
import PreviewShell from "@/components/redesign/PreviewShell";
import styles from "@/components/redesign/Restyled.module.css";
import LocaleSwitcher from "@/components/i18n/LocaleSwitcher";

// ─────────────────────────────────────────────────────────────────────────────
// The redesign's shell for pages that keep their existing content: policies,
// contact, free audit, partners, the /ai-info reference pages, the founder
// profiles, and the French and German pages. Built by another session as the
// /preview/[...path] catch-all (29 Sep 2026); moved here on 30 Sep 2026 so the
// live routes can use it through their layout.tsx files, leaving the page
// files (several with pending edits) untouched.
//
// The page underneath still renders its own old header and footer; the
// stylesheet hides them and PreviewShell supplies the new ones. Locale pages
// keep their own translated footer and get a translated top bar instead.
// Measured before the switch: no low-contrast text across 3,003 text
// elements on all 24 pages, visible titles, working forms, no overflow.
// ─────────────────────────────────────────────────────────────────────────────

export type RestyledKind = "legal" | "commercial" | "reference" | "profile" | "locale";

const LOCALE_PAGES = ["home", "services", "pricing", "contact", "about"] as const;

function LocaleNav({ locale }: { locale: "fr" | "de" }) {
  const labels =
    locale === "fr"
      ? { home: "Accueil", services: "Services", pricing: "Tarifs", contact: "Contact", about: "À propos", talk: "Parler aux fondateurs", menu: "Menu", language: "Langue" }
      : { home: "Startseite", services: "Leistungen", pricing: "Preise", contact: "Kontakt", about: "Über uns", talk: "Mit den Gründern sprechen", menu: "Menü", language: "Sprache" };
  const links = LOCALE_PAGES.map((page) => ({ href: `/${locale}${page === "home" ? "" : `/${page}`}`, label: labels[page] }));

  return (
    <nav className={styles.localeNav} lang={locale} aria-label={locale === "fr" ? "Navigation française" : "Deutsche Navigation"}>
      <Link className={styles.localeBrand} href={`/${locale}`}>PandaCodeGen<span>.</span></Link>
      <div className={styles.localeLinks}>
        {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        <Link href="/blog">Blog</Link>
        {/* English, French and German, each linking to this page in that language. */}
        <LocaleSwitcher label={labels.language} className="text-sm" compact />
      </div>
      <Link className={styles.localeCta} href={`/${locale}/contact`}>{labels.talk} <span aria-hidden="true">↗</span></Link>
      <details className={styles.localeMenu}>
        <summary>{labels.menu}</summary>
        <div>
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link href="/blog">Blog</Link>
          <LocaleSwitcher label={labels.language} className="text-sm" />
        </div>
      </details>
    </nav>
  );
}

export default function RestyledShell({ kind, locale, footerLinksOnly = false, children }: { kind: RestyledKind; locale?: "fr" | "de"; footerLinksOnly?: boolean; children: ReactNode }) {
  const isLocale = kind === "locale" && locale;
  return (
    <PreviewShell condensed contentTag="div" showChrome={!isLocale} footerLinksOnly={footerLinksOnly}>
      {isLocale && <LocaleNav locale={locale} />}
      <div className={styles.surface} data-kind={kind} data-locale={isLocale ? locale : undefined} lang={isLocale ? locale : undefined}>
        {children}
      </div>
    </PreviewShell>
  );
}
