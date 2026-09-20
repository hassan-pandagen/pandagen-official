"use client";

import { motion } from "@/components/ui/motion";
import { ExternalLink, ArrowRight, ArrowRightLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  disclosure,
  verifiedMetrics,
  withdrawalNotice,
  type CaseStudyMetric,
} from "@/data/case-study-facts";

/**
 * One stat tile. Only ever rendered for a verified metric read out of
 * case-study-facts.json, so it cannot display a zero, the word describing why a
 * figure is absent, or a number nobody can source.
 */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-[7rem]">
      <p className="text-xl md:text-2xl font-black leading-none tracking-tight text-charcoal">{value}</p>
      <p className="text-[10px] text-stone-500 uppercase tracking-wider mt-1.5 font-bold">{label}</p>
    </div>
  );
}

export type CaseStudyClient = {
  name: string;
  url: string;
  href: string;
  category: string;
  platform: string;
  /**
   * What this client got, in a buyer's terms. This leads the card.
   *
   * It used to open with the relationship disclosure and, for MyCustomPatches,
   * with ~70 words on why three figures had been withdrawn — so the first thing
   * a prospect read was our bookkeeping rather than the work. The disclosure and
   * the withdrawal are both still rendered verbatim, below, where they belong.
   */
  lead: string;
  /**
   * Slug in case-study-facts.json. Its verified metrics and its verbatim
   * disclosure render from there; a client without one renders neither.
   *
   * There is no field here for a figure, deliberately. Until 20 Sep 2026 this
   * file typed PageSpeed 92 / 96 / 95 and three "< 1s" load times directly into
   * the roster for clients that have no entry in the source of truth at all.
   * metrics_guard.py never caught them because it can only police metrics the
   * JSON declares, and case-study-facts.ts already records that the 95 "was
   * never a real value of anything". If a number belongs on a card, it goes in
   * case-study-facts.json with a method first.
   */
  slug?: string;
  /** Which of that slug's verified metrics to surface, in order. */
  statIds?: string[];
  /**
   * Screenshot under /public/work. Omitted where we do not have one — the card
   * then renders text-only rather than showing a placeholder, because a
   * stand-in image on a "real clients" grid is the one thing worse than no
   * image.
   *
   * Obare has none because https://obare.vercel.app returned 404 when captures
   * were taken on 2026-09-20. Do not add one until that card points at a live
   * URL; see the note on the obare entry below.
   */
  image?: string;
  imageAlt?: string;
};

// The full 4-client roster. Individual service pages can reorder
// via the `highlight` prop to put the most-relevant client first.
const ALL_CLIENTS: Record<string, CaseStudyClient> = {
  pandaPatches: {
    name: "Panda Patches",
    url: "pandapatches.com",
    href: "https://pandapatches.com",
    category: "Custom Patches E-Commerce",
    platform: "WordPress → Custom",
    slug: "panda-patches",
    statIds: ["monthly-revenue"],
    image: "/work/panda-patches.png",
    imageAlt: "Panda Patches storefront, showing custom patch products and a quote form.",
    lead: "Our own WordPress and WooCommerce store, rebuilt on Next.js with a Sanity editor, custom product pricing and checkout, and a separate Supabase system running orders, production and reporting.",
  },
  myCustomPatches: {
    name: "MyCustomPatches",
    url: "mycustompatches.net",
    href: "https://mycustompatches.net",
    category: "Custom Patches (US Market)",
    platform: "WordPress → Custom",
    slug: "mycustompatches",
    // Verified and method-backed in case-study-facts.json. These were sitting
    // unused while the card rendered three em-dashes under PageSpeed / Load
    // Time / Outcome — labels whose figures are withdrawn — so the one client
    // with genuinely evidenced delivery facts showed none of them.
    statIds: ["delivery-days", "urls-migrated", "downtime"],
    image: "/work/mycustompatches.png",
    imageAlt: "MyCustomPatches storefront home page.",
    lead: "A WordPress store rebuilt as a custom Next.js storefront, with every URL inventoried before cutover and the DNS switch monitored start to finish.",
  },
  saforne: {
    name: "Saforne",
    url: "saforne.com",
    href: "https://saforne.com",
    category: "Luxury Leather DTC",
    platform: "Custom Next.js Build",
    image: "/work/saforne.png",
    imageAlt: "Saforne storefront home page, showing the hooded jacket hero.",
    lead: "A handcrafted UK leather brand's storefront, built custom on Next.js with Stripe payments, a Sanity editor and multi-currency pricing. Recently launched and still being refined.",
  },
  // UNRESOLVED as of 2026-09-20: https://obare.vercel.app returns HTTP 404, so
  // this card links a prospect from a "Real Clients" grid to a dead page.
  // Needs the live domain, or removal from the roster. Do not paper over it by
  // dropping the link and keeping the card.
  //
  // The lead below now matches what the Wix migration post already says
  // (src/app/blog/wix-migration-cost/page.tsx:279) — "in its final stages
  // rather than launched, so treat this as a work note rather than a case
  // study". The card previously contradicted that, presenting it as delivered
  // work with three measured-looking scores.
  obare: {
    name: "Obare Magazine",
    url: "obare.vercel.app",
    href: "https://obare.vercel.app",
    category: "Editorial Magazine",
    platform: "Wix → Custom",
    lead: "An editorial magazine moving off Wix to Next.js with Sanity as the editor, running eight content categories. In its final stages rather than launched, so this is a work note rather than a case study.",
  },
};

/** The verified metrics a card surfaces, read only from the source of truth. */
function statsFor(client: CaseStudyClient): { value: string; label: string }[] {
  if (!client.slug || !client.statIds) return [];
  const verified = verifiedMetrics(client.slug);
  return client.statIds
    .map((id) => verified.find((m) => m.id === id))
    .filter((m): m is CaseStudyMetric => Boolean(m?.value))
    .map((m) => ({ value: m.value as string, label: m.label }));
}

type Props = {
  /** Which client key to feature first (most relevant to this service page). */
  highlight?: keyof typeof ALL_CLIENTS;
  /** Optional override for the heading. Pass the WHOLE heading. */
  heading?: string;
  /** Styled tail rendered after the heading. Pass "" to render none. */
  headingTail?: string;
  /** Optional override for the subheading text. */
  subheading?: string;
  /** Optional override for the small caps label above heading. */
  label?: string;
};

export default function CaseStudyGrid({
  highlight,
  // `heading` is the WHOLE heading. The styled tail used to be a hardcoded
  // "promise." appended after it, which read correctly for the default
  // ("We ship what we" + "promise.") and produced "WordPress to Next.js, done
  // promise." on any page that overrode it. That bug survived three audits
  // because the broken string exists in neither the source nor the HTML: it is
  // split across a <span>, so it is ungreppable from either end.
  // If a caller wants a styled tail, it passes one via `headingTail`.
  heading = "We ship what we",
  headingTail = "promise.",
  // This used to promise "Live URLs, verifiable PageSpeed scores, honest
  // before/after numbers". The grid renders no before/after anywhere, the
  // scores it did render verified against nothing, and one of the four is a
  // magazine rather than a store.
  subheading = "Four projects we have built or migrated, and only the figures we can evidence.",
  label = "Real Clients. Real Migrations.",
}: Props) {
  // Order clients: highlight first (if provided), then the rest in default order
  const defaultOrder: (keyof typeof ALL_CLIENTS)[] = [
    "pandaPatches",
    "myCustomPatches",
    "saforne",
    "obare",
  ];
  const ordered = highlight
    ? [highlight, ...defaultOrder.filter((k) => k !== highlight)]
    : defaultOrder;
  const clients = ordered.map((k) => ALL_CLIENTS[k]);

  return (
    <section id="our-work" className="py-10 md:py-20 px-6 border-y border-stone-200 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-cognac mb-3">{label}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4 tracking-tight leading-tight">
            {heading}
            {headingTail ? <> <span className="font-serif italic text-cognac">{headingTail}</span></> : null}
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg">{subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {clients.map((client, i) => {
            const stats = statsFor(client);
            const relationship = client.slug ? disclosure(client.slug) : null;
            const withdrawn = client.slug ? withdrawalNotice(client.slug) : null;
            return (
              <motion.a
                key={client.name}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-stone-200 hover:border-cognac/40 shadow-card hover:shadow-elevated transition-[border-color,box-shadow] duration-200"
              >
                {client.image && (
                  <div className="relative aspect-16/10 w-full overflow-hidden border-b border-stone-200 bg-stone-50">
                    <Image
                      src={client.image}
                      alt={client.imageAlt ?? `${client.name} website`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-1">{client.category}</p>
                      <h3 className="text-xl md:text-2xl font-bold text-charcoal group-hover:text-cognac transition-colors truncate">{client.name}</h3>
                      <p className="text-sm text-stone-500 mt-1">{client.url}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-stone-600 group-hover:text-cognac transition-colors shrink-0 mt-1" />
                  </div>

                  <div className="inline-flex self-start items-center gap-2 px-2.5 py-1 rounded-full bg-stone-50 border border-stone-200 text-[11px] font-bold text-cognac mb-4">
                    <ArrowRightLeft className="w-3 h-3" /> {client.platform}
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed">{client.lead}</p>

                  {stats.length > 0 && (
                    <div className="flex flex-wrap gap-x-8 gap-y-4 mt-5 pt-5 border-t border-stone-200">
                      {stats.map((s) => (
                        <Stat key={s.label} value={s.value} label={s.label} />
                      ))}
                    </div>
                  )}

                  {/* Rendered verbatim from case-study-facts.json, and kept last
                      rather than first. The disclosure is required and the
                      withdrawal wording is canonical, but neither is what a
                      prospect is here to read. */}
                  {(relationship || withdrawn) && (
                    <div className="mt-5 pt-4 border-t border-stone-200 space-y-2 text-xs leading-relaxed text-stone-500">
                      {relationship && <p>{relationship}</p>}
                      {withdrawn && <p>{withdrawn}</p>}
                    </div>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/work" className="inline-flex items-center gap-2 text-cognac font-semibold hover:underline">
            View all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
