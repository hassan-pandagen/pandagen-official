import raw from './ai-referral-data.json';

/**
 * Typed access to the first-party AI referral dataset.
 *
 * WHY EVERY FIGURE IS COMPUTED HERE RATHER THAN TYPED INTO PROSE
 * The same reason market-share.ts exists. A percentage typed into a sentence is
 * a number nobody can re-derive, and when one row changes the prose silently
 * disagrees with the table beside it. Everything below is derived from the rows,
 * so appending a future window updates the sentences and the table together.
 *
 * WHAT IS DELIBERATELY NOT HERE
 * There is no conversion-rate accessor. The lead card and the order card do not
 * share a window and repeat orders appear to inherit the original lead source;
 * computing across them produced Claude at 133%, which is impossible. Adding one
 * would make a broken number easy to render, so the omission is the safeguard.
 */

export interface SourceRow {
    source: string;
    orders: number;
    revenueUsd: number;
    kind: string;
}

const DATA = raw as unknown as {
    source: { business: string; relationship: string; system: string; method: string; limitation: string };
    orderWindow: { from: string; to: string; label: string; totalOrders: number; totalRevenueUsd: number; note: string; verifiedAt: string };
    bySource: SourceRow[];
    corroboration: Record<string, string | number>;
    outlierDisclosure: { source: string; orders: number; revenueUsd: number; note: string };
};

export const provenance = DATA.source;
export const window_ = DATA.orderWindow;
export const corroboration = DATA.corroboration;
export const outlier = DATA.outlierDisclosure;

/** Rows sorted by revenue, which is the order a reader scans for. */
export const rows: SourceRow[] = [...DATA.bySource].sort((a, b) => b.revenueUsd - a.revenueUsd);

/** Kinds that are not acquisition channels, so a like-for-like share can be taken. */
const NON_ACQUISITION = new Set(['retention', 'unclassified']);

export const totalOrders = rows.reduce((n, r) => n + r.orders, 0);
export const totalRevenue = rows.reduce((n, r) => n + r.revenueUsd, 0);

// A build-time guard, not decoration. If a row is edited without the declared
// total moving, the page must not render two figures that disagree.
if (totalOrders !== DATA.orderWindow.totalOrders) {
    throw new Error(
        `ai-referral-data.json: rows sum to ${totalOrders} orders but orderWindow.totalOrders ` +
        `says ${DATA.orderWindow.totalOrders}. Reconcile before rendering.`
    );
}
if (Math.abs(totalRevenue - DATA.orderWindow.totalRevenueUsd) > 0.01) {
    throw new Error(
        `ai-referral-data.json: rows sum to ${totalRevenue.toFixed(2)} but orderWindow ` +
        `declares ${DATA.orderWindow.totalRevenueUsd.toFixed(2)}.`
    );
}

export const aiRows = rows.filter((r) => r.kind === 'ai-assistant');
export const aiOrders = aiRows.reduce((n, r) => n + r.orders, 0);
export const aiRevenue = aiRows.reduce((n, r) => n + r.revenueUsd, 0);

const acquisitionRevenue = rows
    .filter((r) => !NON_ACQUISITION.has(r.kind))
    .reduce((n, r) => n + r.revenueUsd, 0);

export function row(source: string): SourceRow {
    const found = rows.find((r) => r.source === source);
    if (!found) throw new Error(`No source "${source}" in ai-referral-data.json.`);
    return found;
}

export const usd = (n: number) =>
    `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const pct = (n: number, of: number) => `${((n / of) * 100).toFixed(1)}%`;

/** AI as a share of ALL revenue. The conservative figure, used in the headline. */
export const aiShareOfAll = pct(aiRevenue, totalRevenue);

/** AI as a share of ACQUISITION revenue, excluding retention and unclassified. */
export const aiShareOfAcquisition = pct(aiRevenue, acquisitionRevenue);

export const siteAov = totalRevenue / totalOrders;

export function aov(source: string): number {
    const r = row(source);
    return r.orders === 0 ? 0 : r.revenueUsd / r.orders;
}

/** "6.7x" — computed, never typed, because it is the headline claim. */
export const chatgptVsGoogleAds =
    (row('ChatGPT').revenueUsd / row('Google Ad').revenueUsd).toFixed(1);

/** Sources that recorded a genuine zero. Published as zeroes on purpose. */
export const trueZeroes = rows.filter((r) => r.orders === 0).map((r) => r.source);
