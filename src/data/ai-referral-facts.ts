import raw from './ai-referral-data.json';

/*
 * Notes on ai-referral-data.json, moved here from its "$comment" key on 30 Sep 2026.
 * The JSON is bundled into browser code wherever a client component
 * imports this module, so anything in the JSON, notes included, ships to
 * the browser. A comment here does not. Keep notes here, not in the JSON.
 *
 * FIRST-PARTY AI REFERRAL DATA from Panda Patches, a founder-affiliated store.
 *
 * WHY THIS FILE EXISTS. Almost no business can break out AI assistants as a
 * revenue source. Most report near-zero AI traffic, and the reason is
 * measurement rather than reality: ChatGPT strips referrers, its mobile apps
 * do not pass them, and a large share of people read an answer and then type
 * the domain directly. Panda Patches captures referrer WHERE IT SURVIVES and
 * asks the customer where it does not, which is why these numbers are not zero.
 *
 * RELATIONSHIP, STATED NOT BURIED. Panda Patches is owned and operated by a
 * PandaCodeGen co-founder. This is operating experience, not independent client
 * proof, and any page rendering it must say so.
 *
 * WHAT IS DELIBERATELY ABSENT: lead-to-order conversion rates. The lead card
 * and the order card do not share a window, and repeat orders appear to inherit
 * the original lead source. Computing a rate across them produced Claude at
 * 133% and Facebook at 96%, which is structurally impossible. Rather than
 * publish a softened version of a broken number, the rate is omitted and this
 * note explains why. Do not add it back without confirming both cards cover
 * the same range and that repeat orders are excluded.
 */

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
