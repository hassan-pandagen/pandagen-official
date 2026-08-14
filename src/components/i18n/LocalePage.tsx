import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, Check, Quote, ShieldCheck } from "lucide-react";
import {
  SITE_URL,
  localeTags,
  localizedPages,
  routes,
  urlFor,
  type Locale,
  type LocalizedPage,
} from "@/lib/i18n/config";
import { getDictionary, type TranslatedLocale } from "@/lib/i18n/dictionaries";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import type { PricingContent, ContactContent, HomeContent } from "@/lib/i18n/dictionaries/types";
import LocaleSwitcher from "./LocaleSwitcher";

const CONTACT_EMAIL = "info@pandacodegen.com";

/**
 * Renders one localized page (French or German) for the five pages that are
 * translated: home, services, pricing, contact and about.
 *
 * English keeps its own existing components and URLs; nothing here is shared
 * with, or able to change, the English routes.
 */
export default function LocalePage({
  locale,
  page,
}: {
  locale: TranslatedLocale;
  page: LocalizedPage;
}) {
  const dict = getDictionary(locale);
  const content = dict[page];
  const pricing = page === "pricing" ? (content as PricingContent) : null;
  const contact = page === "contact" ? (content as ContactContent) : null;
  // The localized homepage mirrors the English homepage section-for-section,
  // minus the interactive tools, which stay English-only rather than being
  // half-translated.
  const home = page === "home" ? (content as HomeContent) : null;

  return (
    <main className="min-h-screen overflow-x-hidden bg-paper text-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(locale, page, dict[page].meta, content.faq)) }}
      />

      <LocaleHeader locale={locale} dict={dict} />

      {/* HERO
          The homepage mirrors the English two column hero: copy on the left, the
          enquiry form on the right. Switching language should not change the shape
          of the page, so this deliberately reuses the English grid, type scale and
          background treatment rather than a locale-specific layout. Inner pages keep
          the single column rule, which is what their English counterparts use. */}
      {home ? (
        /* The English header is fixed, so its hero needs pt-28 just to clear it.
           This header sits in normal flow, so the same padding would stack on top of
           the header height and push the headline down a screen. */
        <section className="relative overflow-hidden border-b border-stone-300 bg-paper px-6 pb-12 pt-8 md:pb-16 md:pt-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              opacity: 0.03,
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[10%] top-1/3 hidden h-[500px] w-[500px] rounded-full bg-stone-200/50 blur-[140px] md:block"
          />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex min-h-8 items-center rounded-full border border-stone-300 bg-white px-4 text-sm font-semibold text-stone-700">
                {content.hero.eyebrow}
              </p>
              <h1
                className="mb-4 font-bold tracking-tight text-charcoal"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                {content.hero.title}{" "}
                <span className="font-serif font-normal italic text-cognac">{content.hero.titleAccent}</span>
              </h1>
              <p className="mb-6 max-w-xl text-lg font-medium leading-snug text-stone-700 md:text-xl">
                {content.hero.lead}
              </p>
              {/* French and German CTA labels run well past the English ones, so these
                  wrap where English does not. text-balance splits them at an even
                  phrase boundary instead of orphaning a single word, and the shared
                  basis keeps both buttons the same width. */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={routes.contact[locale]}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 text-balance rounded-2xl bg-charcoal px-6 py-3 text-center font-bold leading-snug text-white transition-colors hover:bg-cognac sm:basis-0"
                >
                  <span>{dict.common.ctaPrimary}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
                <Link
                  href={routes.pricing[locale]}
                  className="inline-flex min-h-12 flex-1 items-center justify-center text-balance rounded-2xl border border-stone-400 bg-white px-6 py-3 text-center font-bold leading-snug text-charcoal transition-colors hover:border-charcoal sm:basis-0"
                >
                  {dict.common.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="relative lg:-mt-4">
              <HeroLeadForm copy={dict.leadForm} locale={locale} />
            </div>
          </div>
        </section>
      ) : (
        <section className="border-b border-stone-300 px-6 pb-14 pt-14 md:pb-20 md:pt-20">
          <div className="mx-auto max-w-5xl border-l-2 border-cognac pl-5 md:pl-8">
            <p className="mb-6 inline-flex min-h-8 items-center rounded-full border border-stone-300 bg-white px-4 text-sm font-semibold text-stone-700">
              {content.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {content.hero.title}{" "}
              <span className="font-serif font-normal italic text-cognac">{content.hero.titleAccent}</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-stone-700">{content.hero.lead}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={routes.contact[locale]}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 font-bold text-white transition-colors hover:bg-cognac"
              >
                {dict.common.ctaPrimary} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={routes.pricing[locale]}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-400 bg-white px-6 font-bold text-charcoal transition-colors hover:border-charcoal"
              >
                {dict.common.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ANSWER-FIRST SUMMARY */}
      <section className="px-6 py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <p data-speakable="true" className="text-base leading-relaxed text-stone-700 md:text-lg">
            {content.summary}
          </p>
        </div>
      </section>

      {/* HOME: migration continuity ledger */}
      {home ? <HomeContinuity block={home.continuity} /> : null}

      {/* HOME: what we build */}
      {home ? <HomeBuild block={home.build} /> : null}

      {/* HOME: who it is for */}
      {home ? <HomeAudience block={home.audience} /> : null}

      {/* HOME: how the process works */}
      {home ? <HomeProcess block={home.process} /> : null}

      {/* HOME: decision controls */}
      {home ? <HomeControls block={home.controls} /> : null}

      {/* PRICING TIERS */}
      {pricing ? (
        <section className="border-y border-stone-200 bg-white px-6 py-14 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-3xl font-bold text-charcoal md:text-4xl">{pricing.tiersHeading}</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {pricing.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex flex-col rounded-3xl border border-stone-200 bg-stone-50 p-7 shadow-xs"
                >
                  <h3 className="text-xl font-bold text-charcoal">{tier.name}</h3>
                  <p className="mt-1 text-sm text-stone-600">{tier.fit}</p>
                  <p className="mt-5 text-4xl font-black tracking-tight text-charcoal">{tier.price}</p>
                  <p className="mt-2 inline-block rounded-md border border-stone-200 bg-white px-3 py-1 text-sm font-bold text-stone-700">
                    {tier.priceNote}
                  </p>
                  <ul className="mt-6 grow space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-stone-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cognac" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={routes.contact[locale]}
                    className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-charcoal px-5 font-bold text-white transition-colors hover:bg-cognac"
                  >
                    {dict.common.ctaPrimary}
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-stone-600">{pricing.currencyNote}</p>
          </div>
        </section>
      ) : null}

      {/* SECTIONS */}
      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          {content.sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-stone-200 bg-white p-7 shadow-xs">
              <h2 className="text-xl font-bold text-charcoal md:text-2xl">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-stone-600">{section.body}</p>
              {section.bullets ? (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-stone-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cognac" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* PRICING TERMS */}
      {pricing ? (
        <section className="px-6 pb-14 md:pb-20">
          <div className="mx-auto max-w-3xl rounded-3xl border border-stone-300 bg-white p-8 shadow-xs md:p-10">
            <h2 className="mb-8 text-2xl font-bold text-charcoal">{pricing.termsHeading}</h2>
            <div className="space-y-5">
              {pricing.terms.map((term) => (
                <div
                  key={term.number}
                  className="flex items-start gap-4 border-b border-stone-100 pb-5 last:border-b-0 last:pb-0"
                >
                  <div className="w-6 shrink-0 pt-0.5 text-xs font-black tracking-widest text-stone-600">
                    {term.number}
                  </div>
                  <div>
                    <div className="mb-1 font-bold text-charcoal">{term.title}</div>
                    <div className="text-sm leading-relaxed text-stone-600">{term.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CONTACT DETAILS */}
      {contact ? (
        <section className="px-6 pb-14 md:pb-20">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-stone-300 bg-white p-8 shadow-xs">
              <h2 className="text-2xl font-bold text-charcoal">{contact.checklistHeading}</h2>
              <ul className="mt-5 space-y-3">
                {contact.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-stone-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cognac" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-stone-300 bg-white p-8 shadow-xs">
              <dl className="space-y-5">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-stone-600">
                    {contact.emailLabel}
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-bold text-charcoal underline underline-offset-2 hover:text-cognac"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-stone-600">
                    {contact.addressLabel}
                  </dt>
                  <dd className="mt-1">
                    <address className="not-italic leading-relaxed text-stone-600">
                      701 Tillery St Ste 12
                      <br />
                      Austin, TX 78702, United States
                    </address>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-stone-600">{contact.formNote}</p>
              <Link
                href="/contact"
                hrefLang="en"
                lang="en"
                className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-stone-400 bg-white px-6 font-bold text-charcoal transition-colors hover:border-charcoal"
              >
                {contact.formLinkLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* The enquiry itself is completed in the visitor's own language. Sending a
              French or German reader to the English form at the moment they decide to
              get in touch is the one handoff worth avoiding. */}
          <div className="mx-auto mt-6 max-w-5xl">
            <HeroLeadForm copy={dict.leadForm} locale={locale} />
          </div>
        </section>
      ) : null}

      {/* HOME: who does the work */}
      {home ? <HomeFounders block={home.founders} /> : null}

      {/* HOME: the anti-agency position */}
      {home ? <HomeAntiAgency block={home.antiAgency} ctaLabel={dict.common.ctaPrimary} contactHref={routes.contact[locale]} /> : null}

      {/* HOME: public reviews and owner-confirmed records */}
      {home ? <HomeProof block={home.proof} /> : null}

      {/* FAQ */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-charcoal">{dict.common.faqHeading}</h2>
          <div className="space-y-5">
            {content.faq.map((entry) => (
              <div key={entry.q} className="rounded-2xl border border-stone-300 bg-white p-6">
                <h3 className="mb-3 text-lg font-bold text-charcoal">{entry.q}</h3>
                <p className="text-sm leading-relaxed text-stone-600">{entry.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME: closing call to action */}
      {home ? (
        <HomeClosing
          block={home.closing}
          primaryLabel={dict.common.ctaPrimary}
          secondaryLabel={dict.common.ctaSecondary}
          contactHref={routes.contact[locale]}
          pricingHref={routes.pricing[locale]}
        />
      ) : null}

      <LocaleFooter locale={locale} dict={dict} page={page} />
    </main>
  );
}

/* ------------------------------------------------------------------ *
 * Homepage-only sections.
 *
 * These mirror the argument of the English homepage components with their
 * own translated markup. The English components are untouched: nothing here
 * imports from, or is imported by, an English route.
 * ------------------------------------------------------------------ */

function HomeContinuity({ block }: { block: HomeContent["continuity"] }) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal px-6 py-16 text-white md:py-24">
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-cognac/25 blur-3xl"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f2a17c]">{block.eyebrow}</p>
          <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            {block.title}{" "}
            <span className="font-serif font-normal italic text-[#f2a17c]">{block.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-stone-300 md:text-lg md:leading-8">{block.lead}</p>
        </div>

        <figure className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#211c18]">
          <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-7">
            <div>
              <p className="font-serif text-xl italic text-white">{block.ledgerTitle}</p>
              <p className="mt-1 text-xs text-stone-400">{block.ledgerNote}</p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#f2a17c]/30 bg-[#f2a17c]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ffc2a6]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f2a17c]" aria-hidden="true" />
              {block.badge}
            </div>
          </div>

          <div className="hidden grid-cols-[1fr_1.35fr_1.15fr] gap-5 border-b border-white/10 px-7 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400 md:grid">
            <span>{block.columns.area}</span>
            <span>{block.columns.control}</span>
            <span>{block.columns.evidence}</span>
          </div>

          <ul>
            {block.rows.map((row) => (
              <li
                key={row.area}
                className="grid gap-4 border-b border-white/10 px-5 py-5 last:border-b-0 md:grid-cols-[1fr_1.35fr_1.15fr] md:gap-5 md:px-7 md:py-6"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cognac" aria-hidden="true" />
                  <span className="font-semibold text-white">{row.area}</span>
                </div>
                <span className="text-sm leading-6 text-stone-300">{row.control}</span>
                <span className="inline-flex items-start gap-2 text-sm font-semibold leading-6 text-[#ffc2a6]">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {row.evidence}
                </span>
              </li>
            ))}
          </ul>

          <figcaption className="border-t border-white/10 bg-black/15 px-5 py-4 text-xs leading-5 text-stone-400 md:px-7">
            {block.caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function HomeBuild({ block }: { block: HomeContent["build"] }) {
  return (
    <section className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl md:text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-cognac">{block.eyebrow}</span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-charcoal md:text-5xl">
            {block.title}{" "}
            <span className="font-serif font-normal italic text-cognac md:block">{block.titleAccent}</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-700">{block.lead}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {block.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col rounded-3xl border border-stone-200 bg-white p-7 shadow-xs md:p-8"
            >
              <h3 className="font-serif text-2xl font-bold text-charcoal">{pillar.title}</h3>
              <p className="mt-3 grow leading-relaxed text-stone-600">{pillar.body}</p>
              {pillar.bullets ? (
                <ul className="mt-5 space-y-2 border-t border-stone-200 pt-5">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-stone-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cognac" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 md:p-7">
          <p className="text-xs font-bold uppercase tracking-widest text-stone-600">{block.platformsLabel}</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {block.platforms.map((platform) => (
              <li
                key={platform}
                className="rounded-full border border-stone-300 bg-stone-50 px-4 py-1.5 text-sm font-semibold text-charcoal"
              >
                {platform}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HomeAudience({ block }: { block: HomeContent["audience"] }) {
  return (
    <section className="border-y border-stone-200 bg-white px-6 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cognac">{block.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal md:text-5xl">{block.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">{block.lead}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {block.segments.map((segment) => (
            <article
              key={segment.signal}
              className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-stone-300"
            >
              <div className="flex-1 p-7 pb-6 md:p-9">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-cognac">{block.signalLabel}</p>
                <p className="font-serif text-xl italic leading-snug text-charcoal md:text-2xl">{segment.signal}</p>
              </div>
              <div className="border-t border-stone-200 bg-stone-100/70 px-7 py-5 md:px-9">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-stone-600">
                  {block.approachLabel}
                </p>
                <p className="text-sm leading-relaxed text-stone-600 md:text-[15px]">{segment.approach}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeProcess({ block }: { block: HomeContent["process"] }) {
  return (
    <section className="px-6 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal md:text-5xl">
            {block.title} <span className="font-serif italic text-cognac">{block.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-stone-600">{block.lead}</p>
        </div>

        <ol className="grid gap-5 md:grid-cols-2">
          {block.steps.map((step) => (
            <li key={step.number} className="flex flex-col gap-4 rounded-2xl border border-stone-300 bg-white p-7">
              <div className="text-[11px] font-black uppercase tracking-widest text-cognac">
                {block.stepLabel} {step.number}
              </div>
              <h3 className="font-serif text-3xl font-bold leading-tight text-charcoal">{step.title}</h3>
              <p className="leading-relaxed text-stone-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function HomeControls({ block }: { block: HomeContent["controls"] }) {
  return (
    <section className="border-y border-stone-200 bg-white px-6 py-14 text-charcoal md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-cognac">{block.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">{block.title}</h2>
          <p className="mt-6 text-lg leading-8 text-stone-700">{block.lead}</p>
        </div>
        <div className="mt-12 grid border-t border-stone-300 md:grid-cols-3">
          {block.items.map((item, index) => (
            <article
              key={item.number}
              className={`border-b border-stone-300 p-7 md:p-9 ${index < block.items.length - 1 ? "md:border-r" : ""}`}
            >
              <span className="font-mono text-sm text-stone-600">{item.number}</span>
              <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFounders({ block }: { block: HomeContent["founders"] }) {
  return (
    <section className="bg-[#0d1117] px-6 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-cognac">{block.eyebrow}</p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            {block.title} <span className="font-serif italic text-cognac">{block.titleAccent}</span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-stone-600">{block.lead}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {block.people.map((person) => (
            <article key={person.name} className="rounded-2xl border border-white/10 bg-[#161b27] p-8">
              <div className="text-lg font-bold leading-tight text-white">{person.name}</div>
              <div className="text-sm font-semibold text-cognac">{person.role}</div>
              <p className="mt-5 leading-relaxed text-stone-400">{person.bio}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {person.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-stone-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-stone-500">{block.note}</p>
      </div>
    </section>
  );
}

function HomeAntiAgency({
  block,
  ctaLabel,
  contactHref,
}: {
  block: HomeContent["antiAgency"];
  ctaLabel: string;
  contactHref: string;
}) {
  return (
    <section className="bg-[#0C0A09] px-6 py-14 text-white md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-stone-600">
            {block.eyebrow}
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">{block.title}</h2>
          <p className="text-xl leading-relaxed text-stone-600">{block.lead}</p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {block.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-white bg-white p-8 text-center shadow-xl"
            >
              <h3 className="mb-3 text-xl font-bold text-charcoal">{pillar.title}</h3>
              <p className="leading-relaxed text-stone-500">{pillar.body}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white">{block.ctaTitle}</p>
            <p className="mt-1 text-sm text-stone-600">{block.ctaBody}</p>
          </div>
          <Link
            href={contactHref}
            className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-white px-8 font-bold text-charcoal transition-colors hover:bg-stone-100"
          >
            {ctaLabel} <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeProof({ block }: { block: HomeContent["proof"] }) {
  return (
    <section className="border-y border-stone-300 bg-paper px-6 py-14 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-lg">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cognac">{block.eyebrow}</p>
            <h2 className="mt-5 text-3xl font-bold leading-[1.05] tracking-[-0.03em] md:text-5xl">
              {block.title} <span className="font-serif font-normal italic text-cognac">{block.titleAccent}</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">{block.lead}</p>
            <p className="mt-4 text-sm leading-6 text-stone-600">{block.quoteLanguageNote}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://clutch.co/profile/panda-code-gen#reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-300 bg-white px-4 text-sm font-bold text-charcoal transition-colors hover:border-cognac hover:text-cognac"
              >
                {block.clutchLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.trustpilot.com/review/pandacodegen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-300 bg-white px-4 text-sm font-bold text-charcoal transition-colors hover:border-cognac hover:text-cognac"
              >
                {block.trustpilotLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-charcoal bg-charcoal p-7 text-white md:col-span-2 md:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#ffc2a6]">{block.record.label}</p>
              <p className="mt-5 font-serif text-6xl italic leading-none text-[#f2a17c]">{block.record.value}</p>
              <p className="mt-4 font-bold text-white">{block.record.title}</p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-400">{block.record.body}</p>
            </div>

            {block.quotes.map((entry) => (
              <figure
                key={entry.quote}
                className="rounded-[1.75rem] border border-stone-300 bg-white p-7 text-charcoal md:p-8"
              >
                <Quote className="h-7 w-7 text-cognac" aria-hidden="true" />
                <blockquote
                  lang="en"
                  className="mt-6 font-serif text-xl italic leading-snug text-charcoal md:text-2xl"
                >
                  {entry.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-stone-200 pt-5">
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-cognac hover:text-charcoal"
                  >
                    {entry.source} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <span className="block text-xs text-stone-600">{entry.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-y border-cognac/30 py-6">
          <div className="row-span-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cognac/10 text-cognac">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cognac">{block.affiliation.label}</p>
          <p className="text-xl font-bold text-charcoal">{block.affiliation.title}</p>
          <p className="text-sm text-stone-600">{block.affiliation.body}</p>
        </div>
      </div>
    </section>
  );
}

function HomeClosing({
  block,
  primaryLabel,
  secondaryLabel,
  contactHref,
  pricingHref,
}: {
  block: HomeContent["closing"];
  primaryLabel: string;
  secondaryLabel: string;
  contactHref: string;
  pricingHref: string;
}) {
  return (
    <section className="border-t border-stone-200 bg-white px-6 py-14 md:py-20">
      <div className="mx-auto max-w-3xl border-l-2 border-cognac pl-5 md:pl-8">
        <h2 className="text-3xl font-bold tracking-tight text-charcoal md:text-4xl">{block.title}</h2>
        <p className="mt-5 text-lg leading-8 text-stone-700">{block.body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={contactHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 font-bold text-white transition-colors hover:bg-cognac"
          >
            {primaryLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={pricingHref}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-400 bg-white px-6 font-bold text-charcoal transition-colors hover:border-charcoal"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

function LocaleHeader({
  locale,
  dict,
}: {
  locale: TranslatedLocale;
  dict: ReturnType<typeof getDictionary>;
}) {
  return (
    <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
      {/* Same container as the English header so the logo and nav line up at the
          same x-position when a visitor switches language. */}
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href={routes.home[locale]} className="text-2xl font-bold tracking-tight text-charcoal">
          PandaCodeGen<span className="text-cognac">.</span>
        </Link>
        <nav aria-label={dict.nav.home} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
          {localizedPages.map((item) => (
            <Link
              key={item}
              href={routes[item][locale]}
              className="text-stone-600 transition-colors hover:text-cognac"
            >
              {dict.nav[item]}
            </Link>
          ))}
          <Link href="/blog" hrefLang="en" lang="en" className="text-stone-600 transition-colors hover:text-cognac">
            {dict.nav.blog}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <LocaleSwitcher label={dict.common.languageLabel} className="text-sm" />
          {/* The English header carries a primary CTA here; without it the localized
              header reads as a cut-down version of the same site. */}
          <Link
            href={routes.contact[locale]}
            className="hidden min-h-11 items-center justify-center rounded-full bg-charcoal px-5 text-sm font-bold text-white transition-colors hover:bg-cognac lg:inline-flex"
          >
            {dict.common.ctaPrimary}
          </Link>
        </div>
      </div>
    </header>
  );
}

function LocaleFooter({
  locale,
  dict,
  page,
}: {
  locale: TranslatedLocale;
  dict: ReturnType<typeof getDictionary>;
  page: LocalizedPage;
}) {
  return (
    <footer className="border-t border-stone-200 bg-[#F5F5F4]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Link href={routes.home[locale]} className="text-2xl font-bold tracking-tight text-charcoal">
            PandaCodeGen<span className="text-cognac">.</span>
          </Link>
          <ul className="mt-5 space-y-2 text-sm text-stone-600">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-charcoal">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <address className="not-italic leading-relaxed">
                701 Tillery St Ste 12
                <br />
                Austin, TX 78702, United States
              </address>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 border-b border-stone-300 pb-3 text-xs font-bold uppercase tracking-widest text-charcoal">
            {dict.nav.services}
          </h2>
          <ul className="space-y-2 text-sm">
            {localizedPages.map((item) => (
              <li key={item}>
                <Link href={routes[item][locale]} className="text-stone-600 hover:text-charcoal">
                  {dict.nav[item]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 border-b border-stone-300 pb-3 text-xs font-bold uppercase tracking-widest text-charcoal">
            {dict.common.languageLabel}
          </h2>
          <LocaleSwitcher label={dict.common.languageLabel} className="text-sm" />
          <p className="mt-5 text-sm leading-relaxed text-stone-600">{dict.common.englishSourceNote}</p>
          <Link
            href={routes[page].en}
            hrefLang="en"
            lang="en"
            className="mt-3 inline-flex min-h-8 items-center text-sm font-bold text-cognac underline underline-offset-2"
          >
            {dict.common.englishSourceLinkLabel}
          </Link>
        </div>
      </div>

      <div className="border-t border-stone-200 bg-white py-5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-xs font-medium uppercase tracking-wide text-stone-600 md:flex-row md:items-center md:justify-between">
          <span>&copy; 2026 PandaCodeGen. All rights reserved.</span>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" hrefLang="en" lang="en" className="hover:text-cognac">
              Privacy
            </Link>
            <Link href="/terms" hrefLang="en" lang="en" className="hover:text-cognac">
              Terms
            </Link>
            <Link href="/cookies" hrefLang="en" lang="en" className="hover:text-cognac">
              Cookies
            </Link>
            <Link href="/security" hrefLang="en" lang="en" className="hover:text-cognac">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function buildSchema(
  locale: Locale,
  page: LocalizedPage,
  meta: { title: string; description: string },
  faq: { q: string; a: string }[]
) {
  const url = urlFor(page, locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: meta.title,
        description: meta.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: localeTags[locale],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement:
          page === "home"
            ? [{ "@type": "ListItem", position: 1, name: "PandaCodeGen", item: url }]
            : [
                { "@type": "ListItem", position: 1, name: "PandaCodeGen", item: urlFor("home", locale) },
                { "@type": "ListItem", position: 2, name: meta.title, item: url },
              ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: localeTags[locale],
        mainEntity: faq.map((entry) => ({
          "@type": "Question",
          name: entry.q,
          acceptedAnswer: { "@type": "Answer", text: entry.a },
        })),
      },
    ],
  };
}
