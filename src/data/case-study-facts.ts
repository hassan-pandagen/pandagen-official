import raw from './case-study-facts.json';

/**
 * Typed access to the case-study metrics.
 *
 * The data lives in case-study-facts.json rather than in this file so that the
 * TypeScript render path and scripts/metrics_guard.py read the exact same bytes.
 * A guard that reparsed a .ts file could drift from what the site renders, which
 * is the failure mode this whole structure exists to remove.
 *
 * Read the $comment block in the JSON before changing anything here.
 */

export type MetricStatus = 'verified' | 'withdrawn';

export interface MetricMethod {
    kind: 'lab' | 'field' | 'invoice' | 'record';
    date: string;
    note: string;
}

export interface CaseStudyMetric {
    id: string;
    label: string;
    value?: string;
    before?: string;
    after?: string;
    status: MetricStatus;
    method?: MetricMethod;
    approvedBy?: string;
    approvedDate?: string;
    withdrawnDate?: string;
    withdrawnReason?: string;
    /**
     * True when the figure can never return, as distinct from awaiting evidence.
     *
     * A withdrawal defaults to "pending reconciliation", which tells the reader
     * the number is coming back. For the MyCustomPatches hosting cost that stopped
     * being true on 10 Aug 2026: no invoices were ever kept, and the client does
     * not recall the amount. There is nothing to reconcile against, so continuing
     * to say "pending" would be a false promise repeated on every surface.
     *
     * A permanent metric must never be restored from anyone's memory.
     */
    permanent?: boolean;
}

export interface CaseStudy {
    name: string;
    /**
     * The legal entity behind the trading name, where they differ.
     *
     * This exists because the proof and the story were filed under two different
     * names with nothing joining them: the Clutch review is signed "Executive,
     * MC Patches LLC" and the case study is titled "MyCustomPatches". A reader
     * or a grounding model arriving at one had no stated route to the other,
     * which quietly weakens the only third-party-verified review on the site.
     * State the identity once, here, and let every surface render it.
     */
    legalEntity?: string;
    relationship: string;
    /**
     * The verbatim sentence every surface renders to declare this relationship.
     *
     * Required. An audit on 10 Aug 2026 found 3 of 6 /work pages with no
     * disclosure at all — including the independent-client case study that never
     * said so on its own page, and an "enterprise operations platform" that is
     * actually our own internal CRM. Undisclosed founder-affiliated work
     * presented as a case study is the single most damaging thing this site
     * could publish, so it is a build failure rather than a convention.
     */
    disclosure: string;
    href: string;
    /** Public domain, also the anchor scripts/metrics_guard.py scopes card checks to. */
    url?: string;
    metrics: CaseStudyMetric[];
}

/**
 * "MyCustomPatches (operated by MC Patches LLC)" — or just the name when there
 * is no separate legal entity. Use this anywhere the client is introduced, so
 * the Clutch review and the case study resolve to the same organisation.
 */
export function clientIdentity(slug: string): string {
    const study = caseStudy(slug);
    return study.legalEntity ? `${study.name} (operated by ${study.legalEntity})` : study.name;
}

const STUDIES = raw.caseStudies as unknown as Record<string, CaseStudy>;

export function caseStudy(slug: string): CaseStudy {
    const study = STUDIES[slug];
    if (!study) throw new Error(`No case-study facts for "${slug}". Add it to case-study-facts.json.`);
    return study;
}

/**
 * Metrics safe to state as fact.
 *
 * Throws if a verified metric has no method. A number without a method is the
 * thing that drifted last time, so this is a hard failure at build rather than a
 * convention someone has to remember.
 */
export function verifiedMetrics(slug: string): CaseStudyMetric[] {
    return caseStudy(slug).metrics.filter(m => {
        if (m.status !== 'verified') return false;
        if (!m.method) {
            throw new Error(
                `Metric "${m.id}" on "${slug}" is verified but has no method. ` +
                `Add { kind, date, note } or set status to "withdrawn".`
            );
        }
        return true;
    });
}

/** Metrics currently pulled. Every surface renders the note instead of the number. */
export function withdrawnMetrics(slug: string): CaseStudyMetric[] {
    return caseStudy(slug).metrics.filter(m => m.status === 'withdrawn');
}

/** Every case-study slug, so surfaces and guards iterate the same list. */
export function allCaseStudySlugs(): string[] {
    return Object.keys(STUDIES);
}

/** The relationship sentence for a study. Throws rather than render nothing. */
export function disclosure(slug: string): string {
    const text = caseStudy(slug).disclosure;
    if (!text) {
        throw new Error(
            `Case study "${slug}" has no disclosure. Every /work page must state its ` +
            `relationship; add one to case-study-facts.json.`
        );
    }
    return text;
}

/** True when the work is founder-affiliated rather than an outside client. */
export function isFounderAffiliated(slug: string): boolean {
    return caseStudy(slug).relationship.toLowerCase().startsWith('founder');
}

/**
 * A single metric's value, or null when it is withdrawn or does not exist.
 *
 * Renderers must treat null as "print an em-dash", never as 0 and never as the
 * word "Withdrawn" in a slot sized for a number. Both of those have shipped:
 * `pagespeed: 0` rendered a bold zero next to a withdrawal note, and a card on
 * /services/ecommerce printed "Withdrawn" as a value beside a fabricated 95.
 *
 * Use this instead of hardcoding a figure. A card that reads its number from
 * here cannot invent one, which is the failure metrics_guard could not catch:
 * it searches for the real withdrawn values leaking, and 95 was never a real
 * value of anything.
 */
export function metricValue(slug: string, id: string): string | null {
    const metric = caseStudy(slug).metrics.find(m => m.id === id);
    if (!metric || metric.status !== 'verified') return null;
    return metric.value ?? null;
}

/** True when anything is withdrawn, so surfaces know to show the disclosure. */
export function hasWithdrawn(slug: string): boolean {
    return withdrawnMetrics(slug).length > 0;
}

/**
 * One dated sentence for any surface that needs the disclosure inline.
 *
 * Splits pending from permanent. "Withdrawn pending reconciliation" is a promise
 * that the number is coming back, and for the hosting figure that promise became
 * false on 10 Aug 2026: no invoices were ever kept, and the only person who could
 * attest to it does not recall it. Saying "pending" about a figure that can never
 * return is a small lie told on every surface at once, which is exactly the shape
 * of problem this file exists to prevent.
 */
export function withdrawalNotice(slug: string): string | null {
    const pulled = withdrawnMetrics(slug);
    if (pulled.length === 0) return null;
    const date = pulled[0].withdrawnDate;

    const pending = pulled.filter(m => !m.permanent);
    const permanent = pulled.filter(m => m.permanent);
    const list = (ms: CaseStudyMetric[]) => ms.map(m => m.label.toLowerCase()).join(', ');

    const parts: string[] = [];
    if (pending.length) {
        parts.push(
            `Performance figures for this project (${list(pending)}) were withdrawn on ${date} ` +
            `pending reconciliation of the original test records. They are not stated anywhere ` +
            `on this site until they are re-measured with a documented method.`
        );
    }
    if (permanent.length) {
        parts.push(
            `The ${list(permanent)} figure${permanent.length > 1 ? 's are' : ' is'} retired ` +
            `permanently rather than pending: no records were kept and the client does not ` +
            `recall the amount, so there is nothing to reconcile against and it will not return.`
        );
    }
    return parts.join(' ');
}

/**
 * Short factual phrase for titles and meta descriptions, built only from
 * verified metrics. Metadata is where the drift was worst, because nobody
 * re-reads a <title> when they correct the body.
 */
export function metaFacts(slug: string): string {
    return verifiedMetrics(slug)
        .filter(m => ['delivery-days', 'urls-migrated', 'templates', 'downtime'].includes(m.id))
        .map(m => {
            if (m.id === 'delivery-days') return `migrated in ${m.value}`;
            if (m.id === 'urls-migrated') return `${m.value} URLs`;
            if (m.id === 'templates') return `${m.value} templates`;
            if (m.id === 'downtime') return `${m.value} downtime`;
            return `${m.label} ${m.value}`;
        })
        .join(', ');
}
