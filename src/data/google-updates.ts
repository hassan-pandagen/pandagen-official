/**
 * Every ranking update Google has confirmed on its Search Status Dashboard.
 *
 * Source of truth, and the ONLY acceptable source for this file:
 *   https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history
 *
 * Transcribed 8 Aug 2026, re-read 19 Aug 2026. Names, start dates and durations are copied verbatim
 * from Google's own history table -- not from SEO news coverage, which routinely
 * reports rollout dates that Google never stated. If you update this file, read
 * the dashboard again rather than trusting a secondary report.
 *
 * `days` is the duration expressed as a decimal for arithmetic (a 12 day 4 hour
 * rollout is 12 + 4/24). It exists so the page can compute the median rollout
 * length instead of asserting one, and it must stay consistent with `duration`.
 */

export type UpdateKind = 'core' | 'spam' | 'reviews' | 'helpful-content' | 'discover' | 'page-experience' | 'issue';

export interface GoogleUpdate {
    name: string;
    /** ISO date of the rollout start, as recorded by Google. */
    start: string;
    /** Google's own duration string, verbatim. */
    duration: string;
    /** `duration` as decimal days, for computation only. */
    days: number;
    kind: UpdateKind;
    /**
     * True while Google still shows the rollout as ongoing.
     *
     * An in-progress update has NO duration yet, so it must never reach any
     * statistic or any sentence of the form "finished in X". `UPDATE_STATS.latest`
     * deliberately skips these and `inProgressUpdate` exposes them separately.
     */
    inProgress?: boolean;
}

export const GOOGLE_UPDATES: readonly GoogleUpdate[] = [
    // 2026
    { name: 'August 2026 spam update', start: '2026-08-18', duration: 'still rolling out', days: 0, kind: 'spam', inProgress: true },
    { name: 'June 2026 spam update', start: '2026-06-24', duration: '2 days, 1 hour', days: 2 + 1 / 24, kind: 'spam' },
    { name: 'May 2026 core update', start: '2026-05-21', duration: '11 days, 21 hours', days: 11 + 21 / 24, kind: 'core' },
    { name: 'March 2026 core update', start: '2026-03-27', duration: '12 days, 4 hours', days: 12 + 4 / 24, kind: 'core' },
    { name: 'March 2026 spam update', start: '2026-03-24', duration: '19 hours, 30 minutes', days: 19.5 / 24, kind: 'spam' },
    { name: 'February 2026 Discover update', start: '2026-02-05', duration: '21 days, 17 hours', days: 21 + 17 / 24, kind: 'discover' },

    // 2025
    { name: 'December 2025 core update', start: '2025-12-11', duration: '18 days, 2 hours', days: 18 + 2 / 24, kind: 'core' },
    { name: 'August 2025 spam update', start: '2025-08-26', duration: '26 days, 15 hours', days: 26 + 15 / 24, kind: 'spam' },
    { name: 'June 2025 core update', start: '2025-06-30', duration: '16 days, 18 hours', days: 16 + 18 / 24, kind: 'core' },
    { name: 'March 2025 core update', start: '2025-03-13', duration: '13 days, 21 hours', days: 13 + 21 / 24, kind: 'core' },

    // 2024
    { name: 'December 2024 spam update', start: '2024-12-19', duration: '7 days, 2 hours', days: 7 + 2 / 24, kind: 'spam' },
    { name: 'December 2024 core update', start: '2024-12-12', duration: '6 days, 4 hours', days: 6 + 4 / 24, kind: 'core' },
    { name: 'November 2024 core update', start: '2024-11-11', duration: '23 days, 13 hours', days: 23 + 13 / 24, kind: 'core' },
    { name: 'Ongoing ranking issue', start: '2024-08-15', duration: '4 days, 11 hours', days: 4 + 11 / 24, kind: 'issue' },
    { name: 'August 2024 core update', start: '2024-08-15', duration: '19 days, 4 hours', days: 19 + 4 / 24, kind: 'core' },
    { name: 'June 2024 spam update', start: '2024-06-20', duration: '7 days, 1 hour', days: 7 + 1 / 24, kind: 'spam' },
    { name: 'March 2024 spam update', start: '2024-03-05', duration: '14 days, 21 hours', days: 14 + 21 / 24, kind: 'spam' },
    { name: 'March 2024 core update', start: '2024-03-05', duration: '45 days', days: 45, kind: 'core' },

    // 2023
    { name: 'November 2023 reviews update', start: '2023-11-08', duration: '29 days', days: 29, kind: 'reviews' },
    { name: 'November 2023 core update', start: '2023-11-02', duration: '25 days, 21 hours', days: 25 + 21 / 24, kind: 'core' },
    { name: 'October 2023 core update', start: '2023-10-05', duration: '13 days, 23 hours', days: 13 + 23 / 24, kind: 'core' },
    { name: 'Ongoing ranking issue', start: '2023-10-05', duration: '26 days', days: 26, kind: 'issue' },
    { name: 'October 2023 spam update', start: '2023-10-04', duration: '15 days, 12 hours', days: 15 + 12 / 24, kind: 'spam' },
    { name: 'September 2023 helpful content update', start: '2023-09-14', duration: '13 days, 11 hours', days: 13 + 11 / 24, kind: 'helpful-content' },
    { name: 'August 2023 core update', start: '2023-08-22', duration: '16 days, 3 hours', days: 16 + 3 / 24, kind: 'core' },
    { name: 'April 2023 reviews update', start: '2023-04-12', duration: '13 days, 2 hours', days: 13 + 2 / 24, kind: 'reviews' },
    { name: 'March 2023 core update', start: '2023-03-15', duration: '13 days, 7 hours', days: 13 + 7 / 24, kind: 'core' },
    { name: 'February 2023 product reviews update', start: '2023-02-21', duration: '14 days', days: 14, kind: 'reviews' },

    // 2022
    { name: 'December 2022 link spam update', start: '2022-12-14', duration: '29 days', days: 29, kind: 'spam' },
    { name: 'December 2022 helpful content update', start: '2022-12-05', duration: '38 days', days: 38, kind: 'helpful-content' },
    { name: 'October 2022 spam update', start: '2022-10-19', duration: '2 days', days: 2, kind: 'spam' },
    { name: 'September 2022 product reviews update', start: '2022-09-20', duration: '6 days', days: 6, kind: 'reviews' },
    { name: 'September 2022 core update', start: '2022-09-12', duration: '14 days', days: 14, kind: 'core' },
    { name: 'August 2022 helpful content update', start: '2022-08-25', duration: '15 days', days: 15, kind: 'helpful-content' },
    { name: 'July 2022 product reviews update', start: '2022-07-27', duration: '6 days', days: 6, kind: 'reviews' },
    { name: 'May 2022 core update', start: '2022-05-25', duration: '15 days', days: 15, kind: 'core' },
    { name: 'March 2022 product reviews update', start: '2022-03-23', duration: '14 days', days: 14, kind: 'reviews' },
    { name: 'Page experience update for desktop', start: '2022-02-22', duration: '9 days', days: 9, kind: 'page-experience' },

    // 2021
    { name: 'December 2021 product reviews update', start: '2021-12-01', duration: '20 days', days: 20, kind: 'reviews' },
    { name: 'November 2021 core update', start: '2021-11-17', duration: '13 days', days: 13, kind: 'core' },
    { name: 'November 2021 spam update', start: '2021-11-03', duration: '8 days, 1 hour', days: 8 + 1 / 24, kind: 'spam' },
];

/** The dashboard's own earliest entry, so the page can state its coverage window. */
export const REGISTER_START = 'November 2021';
export const REGISTER_UPDATED = '19 August 2026';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** "2026-06-24" -> "24 June 2026". For prose and FAQ answers, where an ISO date reads badly. */
export function longDate(iso: string): string {
    const [y, m, d] = iso.split('-').map(Number);
    return `${d} ${MONTHS[m - 1]} ${y}`;
}

function median(values: number[]): number {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

const coreUpdates = GOOGLE_UPDATES.filter(u => u.kind === 'core');

/**
 * Figures the page quotes. Computed rather than hardcoded so a transcription fix
 * can never leave the prose asserting a number the table no longer supports.
 */
export const UPDATE_STATS = {
    total: GOOGLE_UPDATES.filter(u => u.kind !== 'issue').length,
    coreCount: coreUpdates.length,
    spamCount: GOOGLE_UPDATES.filter(u => u.kind === 'spam').length,
    medianCoreDays: Math.round(median(coreUpdates.map(u => u.days)) * 10) / 10,
    shortestCore: coreUpdates.reduce((a, b) => (a.days < b.days ? a : b)),
    longestCore: coreUpdates.reduce((a, b) => (a.days > b.days ? a : b)),
    // Latest COMPLETED update. The page renders "finished in {duration}" from
    // this, so an in-progress rollout here would publish a false sentence.
    latest: GOOGLE_UPDATES.filter(u => !u.inProgress)[0],
    latestCore: coreUpdates.filter(u => !u.inProgress)[0],
} as const;

/** The rollout Google currently shows as ongoing, or null. Has no duration. */
export const inProgressUpdate: GoogleUpdate | null =
    GOOGLE_UPDATES.find(u => u.inProgress) ?? null;
