"use client";

import { motion } from "@/components/ui/motion";
import { ExternalLink, ArrowRight, ArrowRightLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { metricValue, withdrawalNotice } from "@/data/case-study-facts";

/** A metric that must render as a number, or null when we do not have it. */
function numericMetric(slug: string, id: string): number | null {
  const raw = metricValue(slug, id);
  if (!raw) return null;
  const n = Number(raw.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
}

/**
 * One stat tile. Only ever rendered for a figure we hold: absent figures are
 * filtered out upstream rather than drawn as an em-dash, so a card with nothing
 * to show drops the row instead of displaying empty slots under live labels.
 * It must still never render a zero or the word describing why it is absent.
 */
function Stat({ value, label, tone }: { value: string | number; label: string; tone: string }) {
  return (
    <div>
      <p className={`text-2xl font-black leading-none tracking-tight ${tone}`}>{value}</p>
      <p className="text-[10px] text-stone-500 uppercase tracking-wider mt-1 font-bold">{label}</p>
    </div>
  );
}

/** The figures we hold for a client, in display order, absent ones dropped. */
type StatTile = { value: string | number; label: string; tone: string };

function presentStats(client: CaseStudyClient): StatTile[] {
  const all: { value: string | number | null; label: string; tone: string }[] = [
    { value: client.pagespeed, label: "PageSpeed", tone: "text-emerald-600" },
    { value: client.loadTime, label: "Load Time", tone: "text-charcoal" },
    { value: client.saved, label: "Outcome", tone: "text-cognac" },
  ];
  return all.filter((s): s is StatTile => s.value !== null && s.value !== undefined && s.value !== "");
}

export type CaseStudyClient = {
  name: string;
  url: string;
  href: string;
  category: string;
  platform: string;
  /**
   * The three stat tiles. `null` means "we do not have this figure" and renders
   * as a muted em-dash.
   *
   * These were `pagespeed: number` and `loadTime: string` until 10 Aug 2026, and
   * both encodings produced a lie. `0` rendered as a bold zero next to a
   * withdrawal note; the string "Withdrawn" rendered as though it were the
   * measurement. Absent is its own state and has to be representable as one.
   */
  pagespeed: number | null;
  loadTime: string | null;
  saved: string | null;
  note: string;
  /**
   * Screenshot under /public/work. Omitted where we do not have one yet — the
   * card then renders text-only rather than showing a placeholder, because a
   * stand-in image on a "real clients" grid is the one thing worse than no
   * image. Saforne and Obare still need captures.
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
    pagespeed: 92,
    loadTime: "< 1s",
    saved: "~$55/mo",
    image: "/work/panda-patches.png",
    imageAlt: "Panda Patches storefront, showing custom patch products and a quote form.",
    note: "Founder-affiliated, not an independent client: owned and operated by co-founder Imran Raza Ladhani, with PandaCodeGen building and maintaining the platform but holding no ownership stake. Migrated from WordPress + WooCommerce. The owner reports the entire plugin and hosting stack now runs on about $55/mo total tooling (Supabase ~$25, Vercel ~$20, and ~$10 for the FAL Flux Schnell AI patch generator), and over 1 million patches delivered to date.",
  },
  myCustomPatches: {
    name: "MyCustomPatches",
    url: "mycustompatches.net",
    href: "https://mycustompatches.net",
    category: "Custom Patches (US Market)",
    platform: "WordPress → Custom",
    // Read from case-study-facts.json, not declared here. Every withdrawn metric
    // resolves to null and renders as an em-dash; restoring one after
    // reconciliation is a one-file edit that reaches this card automatically.
    pagespeed: numericMetric("mycustompatches", "pagespeed"),
    loadTime: metricValue("mycustompatches", "load-time"),
    saved: metricValue("mycustompatches", "hosting-cost"),
    image: "/work/mycustompatches.png",
    imageAlt: "MyCustomPatches storefront home page.",
    note: `Independent client. WordPress to custom Next.js migration. ${withdrawalNotice("mycustompatches") ?? ""}`.trim(),
  },
  saforne: {
    name: "Saforne",
    url: "saforne.com",
    href: "https://saforne.com",
    category: "Luxury Leather DTC",
    platform: "Custom Next.js Build",
    pagespeed: 96,
    loadTime: "< 1s",
    saved: "Premium UX",
    note: "Handcrafted UK leather brand. Custom ecommerce with Stripe, Sanity, multi-currency support. Recently launched, still being refined.",
  },
  obare: {
    name: "Obare Magazine",
    url: "obare.vercel.app",
    href: "https://obare.vercel.app",
    category: "Editorial Magazine",
    platform: "Wix → Custom",
    pagespeed: 95,
    loadTime: "< 1s",
    saved: "225K IG",
    note: "Editorial design magazine with 225K Instagram following. Migrated from Wix to custom Next.js for $1,350. Build delivered in 7 days; launching on the client's domain.",
  },
};

type Props = {
  /** Which client key to feature first (most relevant to this service page). */
  highlight?: keyof typeof ALL_CLIENTS;
  /** Optional override for the section heading. Pass the WHOLE heading. */
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
  subheading = "Four stores we built or migrated. Live URLs, verifiable PageSpeed scores, honest before/after numbers.",
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
            const stats = presentStats(client);
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
              className="group block overflow-hidden rounded-2xl bg-white border border-stone-200 hover:border-cognac/40 shadow-card hover:shadow-elevated transition-[border-color,box-shadow] duration-200"
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
              <div className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-1">{client.category}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-charcoal group-hover:text-cognac transition-colors truncate">{client.name}</h3>
                  <p className="text-sm text-stone-500 mt-1">{client.url}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-600 group-hover:text-cognac transition-colors shrink-0 mt-1" />
              </div>

              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-stone-50 border border-stone-200 text-[11px] font-bold text-cognac mb-4">
                <ArrowRightLeft className="w-3 h-3" /> {client.platform}
              </div>

              <p className="text-sm text-stone-600 leading-relaxed mb-5">{client.note}</p>

              {/* Only the figures we actually hold. Three em-dashes under three
                  labels read as a broken template, not as honesty; the note
                  above already says which figures were withdrawn and why. */}
              {stats.length > 0 && (
                <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 border-t border-stone-200">
                  {stats.map((s) => (
                    <Stat key={s.label} value={s.value} label={s.label} tone={s.tone} />
                  ))}
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
