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

/** One dated sentence for any surface that needs the disclosure inline. */
export function withdrawalNotice(slug: string): string | null {
    const pulled = withdrawnMetrics(slug);
    if (pulled.length === 0) return null;
    const date = pulled[0].withdrawnDate;
    const labels = pulled.map(m => m.label.toLowerCase()).join(', ');
    return `Performance figures for this project (${labels}) were withdrawn on ${date} pending reconciliation of the original test records. They are not stated anywhere on this site until they are re-measured with a documented method.`;
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
