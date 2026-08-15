import raw from './market-share.json';

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
    verifiedAt: string;
}

export const periods = raw.periods as string[];
export const source = raw.source as SeriesSource;
export const platforms = raw.platforms as unknown as Platform[];

export function platform(name: string): Platform {
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
