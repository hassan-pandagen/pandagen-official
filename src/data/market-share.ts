import raw from './market-share.json';

/*
 * Notes on market-share.json, moved here from its "$comment" key on 30 Sep 2026.
 * The JSON is bundled into browser code wherever a client component
 * imports this module, so anything in the JSON, notes included, ships to
 * the browser. A comment here does not. Keep notes here, not in the JSON.
 *
 * CMS MARKET SHARE, A TIME SERIES. Third file of its kind, and separate on purpose.
 *
 * spec-facts.json  vendor prices and limits, 90/180-day staleness clock.
 * research-facts.json  published studies, superseded by their next edition.
 * market-share.json  a series that GROWS. Each reading is appended, never
 * edited, so the shape of the trend is the asset and a correction to one
 * year cannot silently rewrite the story of another.
 *
 * READ OFF THE SOURCE TABLE, NOT A SUMMARY. The figures below were parsed
 * from the rendered table on the source URL. The flattened page text was
 * parsed first and produced a WRONG alignment: rows with fewer values were
 * assumed to be left-aligned, which put Adobe Systems and Google Systems in
 * 2015-2019 when the table actually places them from 2023. Empty cells carry
 * the meaning. Parse the cells, never the text.
 *
 * WHY ADOBE SYSTEMS AND GOOGLE SYSTEMS ARE EXCLUDED. Both appear abruptly in
 * 2023 at 1.7% and 1.2% with no prior history and decline from there. A series
 * that begins mid-way at a high value is far more likely a reclassification on
 * the publisher's side than real adoption, and we will not narrate a taxonomy
 * change as a market movement.
 *
 * WHAT THIS MEASURES. Share of the top 10 million websites, of sites whose CMS
 * is known. It is not share of new builds, not share of revenue, and not share
 * of the market you sell into. A platform can lose share while growing.
 *
 * THE SERIES STARTS 2015 because that is where the source's yearly report
 * starts. Do not extrapolate backwards; earlier figures exist elsewhere on
 * different methods and splicing them would produce a fake trend.
 */

/**
 * Typed access to the CMS market-share time series.
 *
 * WHY THIS IS NOT spec-facts.ts OR research-facts.ts
 * A vendor price is a point that goes stale. A study is a point that gets
 * superseded. This is a SERIES, and the series is the asset: the story is the
 * shape, not any single reading. So readings are appended and never edited,
 * and every derived figure below is computed rather than typed, which means a
 * corrected reading propagates to every sentence that depends on it.
 *
 * DO NOT WRITE A NUMBER FROM THIS INTO PROSE BY HAND. Use the helpers. The
 * whole point is that next year's reading changes the article without anyone
 * having to remember which paragraphs mentioned a percentage.
 */

export interface Platform {
    name: string;
    group: 'self-hosted' | 'hosted-builder' | 'hosted-commerce';
    /** Aligned to `periods`. null means the platform is absent from that reading. */
    series: (number | null)[];
}

export interface SeriesSource {
    publisher: string;
    study: string;
    url: string;
    method: string;
    limitation: string;
    /** Why the newest column is a dated reading rather than a live figure, plus the latest spot-check. */
    currency: string;
    verifiedAt: string;
    /** Date the newest column was last re-checked against the publisher. */
    spotCheckedAt: string;
}

export const periods = raw.periods as string[];
export const source = raw.source as SeriesSource;
export const platforms = raw.platforms as unknown as Platform[];

function platform(name: string): Platform {
    const found = platforms.find((p) => p.name === name);
    if (!found) {
        throw new Error(
            `No platform "${name}" in market-share.json. Add a full series there ` +
            `rather than typing a figure into a page.`
        );
    }
    return found;
}

/** The most recent non-null reading, with the period it was taken in. */
export function latest(name: string): { value: number; period: string } {
    const p = platform(name);
    for (let i = p.series.length - 1; i >= 0; i--) {
        const v = p.series[i];
        if (v !== null) return { value: v, period: periods[i] };
    }
    throw new Error(`"${name}" has no readings at all.`);
}

/** The first non-null reading, which is when the platform enters the series. */
export function first(name: string): { value: number; period: string } {
    const p = platform(name);
    for (let i = 0; i < p.series.length; i++) {
        const v = p.series[i];
        if (v !== null) return { value: v, period: periods[i] };
    }
    throw new Error(`"${name}" has no readings at all.`);
}

/** The highest reading and when it happened. This is what finds a peak. */
export function peak(name: string): { value: number; period: string } {
    const p = platform(name);
    let best = -1, at = 0;
    p.series.forEach((v, i) => {
        if (v !== null && v > best) { best = v; at = i; }
    });
    return { value: best, period: periods[at] };
}

/** Percentage points between the peak and the latest reading. */
export function fallFromPeak(name: string): number {
    return Number((peak(name).value - latest(name).value).toFixed(1));
}

/** Combined share of a group at a given period index (default: latest). */
export function groupShare(group: Platform['group'], index = periods.length - 1): number {
    const total = platforms
        .filter((p) => p.group === group)
        .reduce((sum, p) => sum + (p.series[index] ?? 0), 0);
    return Number(total.toFixed(1));
}

/** How many consecutive latest readings are identical, ie. how long it has been flat. */
export function flatFor(name: string): number {
    const s = platform(name).series.filter((v): v is number => v !== null);
    const last = s[s.length - 1];
    let n = 0;
    for (let i = s.length - 1; i >= 0 && s[i] === last; i--) n++;
    return n;
}

/** Year label for a period key, eg. "2026-08" -> "2026". */
export function year(period: string): string {
    return period.slice(0, 4);
}
