"""AI-Overview capture ledger.

Replaces the lost prog2.py capture counter. The tracker carried three different
totals (18/77, 19/77, 34/77) because each was counted by a different rule and
none was re-derivable. This is the single source of truth: an explicit list of
slugs with a logged capture, checked against the blog directory so a typo or a
renamed post fails loudly instead of silently changing the count.

Add a slug here in the same commit that logs its capture in BLOG_PASS_TRACKER.md.

    python scripts/capture_ledger.py
"""

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = ROOT / "src" / "app" / "blog"

# Captured with the WEAKER pre-3-Aug method: searched `main` only, did not expand
# PAA. Two of these returned "no AI Overview" and that reading is not trustworthy.
# Both pre-3-Aug "absence" readings were re-checked on 6 Aug with the corrected
# method. cheap-web-developer: the "no AI Overview" reading is now WRONG -- an
# Overview with 8 sources and a PAA block are both present. shopify-store-speed-
# optimization: "no PAA" CONFIRMED, still none. Nothing outstanding.
NEEDS_RECHECK: set[str] = set()

CAPTURED = {
    "saas-price-increases-2026-tracker",  # 8 Aug -- EXPERIMENT TREATMENT, edited 8 Aug; refused vendor-marketing stats, gave the DIY method

    "wix-vs-custom-website",           # 8 Aug -- EXPERIMENT TREATMENT, edited 8 Aug; added launch timeline + removed dup paragraph

    "leaving-webflow-2026",            # 8 Aug -- EXPERIMENT TREATMENT, edited 8 Aug; named Framer/AI-tools/headless destinations

    "aeo-web-performance-glossary",    # 8 Aug -- glossary had NO individual LCP/INP/CLS entries; CLS threshold absent entirely

    "aeo-playbook-built-into-every-website",  # 8 Aug -- published the citable-passage template derived from an observed citation

    "for-agencies-offer-custom-web-development",  # 8 Aug -- added the after-launch/retainer gap

    "top-custom-web-development-agencies-usa-2026",  # 8 Aug -- answer is 100% directories; added how to read a directory ranking

    "wordpress-april-2026-evidence",   # 8 Aug -- added the "updated != clean" residual-risk section; refused unverified AIO incidents

    "google-universal-commerce-protocol-what-it-means-for-your-store",  # 8 Aug -- added UCP/MCP/A2A/AP2 disambiguation, the two PAA questions

    "why-we-chose-nextjs-over-wordpress-2026",  # 8 Aug -- AIO argues our side with claims we reject; corrected the no-admin one

    "agentic-browsing-pagespeed-score", # 8 Aug -- NO EDIT NEEDED; page already ahead of the AIO. llms.txt is no longer inert

    "shopify-plus-still-slow",         # 8 Aug -- AIO agrees with us; gap was the app-isolation procedure

    "shopify-stocky-sunset-date-2026", # 8 Aug -- 23 days to sunset; added Feb 2 delist, POS Pro, irreversibility triage

    "shopify-slow-losing-sales",       # 8 Aug -- AIO repeats the exact claims our July remediation deleted

    "meta-conversions-api-setup-cost", # 8 Aug -- AIO ranks paths by price; we rank by what each can carry

    "spending-more-on-ads-fewer-orders-tracking",  # 8 Aug -- AIO never mentions tracking as a cause; added the recorded-vs-real test

    "website-developer-agency",        # 8 Aug -- AIO names Clutch/Reddit as the verification step; we had zero coverage of it

    "woocommerce-vs-custom-website",   # 8 Aug -- AIO says custom takes "several months"; answered with our own published 22d / 10wk receipts

    "shopify-vs-custom-website",       # 8 Aug -- AIO reads "custom website" as self-hosted WooCommerce, not a bespoke build

    "wordpress-vs-custom-code-real-cost-3-years",  # 8 Aug -- AIO concludes WP is cheaper; our page was method-only with no numbers

    "website-rebuild-cost-2026",       # 8 Aug -- AIO bands sit far above our tiers; added hourly/per-page/annual units

    "why-is-my-website-loading-so-slow",  # 2 Aug -- logged retroactively 8 Aug; capture recorded in prose, not the structured header, so the ledger missed it

    "website-migration-cost-2026",     # 8 Aug -- AIO top source is a Reddit thread; gap was 301 + host-only price + scoping units

    "how-to-speed-up-your-website",    # 8 Aug -- AIO is the generic checklist; gap was ordering + missing terms

    "core-web-vitals-explained",       # 7 Aug -- AIO is 9/9 Google-owned docs; competed on interpretation, not definition
    "google-algorithm-updates",        # 7 Aug -- capture exposed 2 missed updates; page rewritten as evergreen register 8 Aug

    # 2 Aug — batch 1, serial
    "nextjs-hosting-zero-cost",
    "gohighlevel-website-speed",
    "woocommerce-too-slow",
    # 2 Aug — batch 2, parallel audit / serial apply
    "top-nextjs-agencies-2026",
    "is-squarespace-bad-for-seo",
    "shopify-store-speed-optimization",
    "cheap-web-developer",
    # 2 Aug — batch 3, final four money pages of the 32
    "gohighlevel-keep-crm-replace-website",
    "fix-meta-ad-tracking-2026",
    "saas-software-pricing-audit-2026",
    "pagepro-alternatives",
    # 2 Aug — logged in-row as "AI-OVERVIEW CAPTURE RUN"
    "nextjs-sanity-stack",
    "lovable-site-not-showing-on-google",
    "custom-website-5000-whats-included",
    "will-migrating-hurt-my-seo",
    "how-long-does-a-custom-website-take",
    "do-you-own-your-website",
    "build-vs-buy-software-2026-cost-comparison",
    "how-to-cut-saas-bill-2026",
    "webflow-user-accounts-sunset-date-2026",
    # 3 Aug — own sections, corrected method
    "webflow-migration-cost",
    "best-website-builder-for-gohighlevel-agencies",
    "what-is-headless-commerce",
    "wordpress-migration-cost",
    "how-website-speed-affects-seo",
    "how-to-achieve-100-pagespeed",
    "woocommerce-migration-cost",
    # 5 Aug — corrected method + AIO-container citation test
    "shopify-app-costs-real-monthly-bill",
    "divi-theme-slow",
    "cloudflare-emdash-wordpress-replacement",
    "shopify-dawn-theme-slow",
    "webflow-true-cost",
    "squarespace-migration-cost",
    "how-to-migrate-wordpress-to-nextjs",
    "how-much-does-a-website-cost",
    "wix-migration-cost",
    "wix-too-slow",
    "webflow-vs-custom-website",
    "squarespace-vs-custom-website",
    "squarespace-too-slow",
    # 7 Aug
    "wordpress-vs-nextjs",
    "shopify-conversion-rate-speed-fix",
    "elementor-kills-seo",
    "why-competitor-outranks-you",
    "shopify-headless",
    "wordpress-plugins-destroy-speed",
    "how-to-fix-slow-wordpress",
    "website-redesign-cost",
    "wordpress-killer",
    "wordpress-ai-security-risk-2026",
    "wordpress-traffic-drop-speed",
}

# Confirmed present in an AI Overview source panel, by querying the AIO container
# directly. Grepping page text for the domain also matches the organic result and
# will read as a citation when it is not.
CITED = {
    "nextjs-hosting-zero-cost": "vercel free tier bandwidth 100gb 2026 (2 Aug)",
    "best-website-builder-for-gohighlevel-agencies": "best website builder for gohighlevel agencies (3 Aug)",
    "shopify-app-costs-real-monthly-bill": "how much do shopify apps cost per month (5 Aug, 21 sites)",
    "shopify-dawn-theme-slow": "shopify dawn theme pagespeed score (5 Aug, 7 sites)",
    "how-to-migrate-wordpress-to-nextjs": "how to migrate wordpress to nextjs (5 Aug, 21 sites) - INLINE, twice, inside the Overview body",
    "wix-migration-cost": "wix migration cost (6 Aug, 9 sites)",
    "wordpress-traffic-drop-speed": "wordpress traffic dropped suddenly (7 Aug, 8 sites) - INLINE, in the Overview body",
}

# Verified stale by grepping the live SERP snippet against src/ — Google is serving
# pre-remediation copy that no longer exists in the repo.
STALE_INDEX = {
    "nextjs-hosting-zero-cost",
    "shopify-app-costs-real-monthly-bill",
    "shopify-dawn-theme-slow",
    "wix-migration-cost",  # SERP title "Real Price by Site Size" is in no current revision
}


def main() -> int:
    posts = {p.name for p in BLOG_DIR.iterdir() if p.is_dir()}

    unknown = sorted(CAPTURED - posts)
    if unknown:
        print("ERROR: ledger names slugs that are not posts:")
        for slug in unknown:
            print(f"  {slug}")
        return 1

    remaining = sorted(posts - CAPTURED)
    pct = 100 * len(CAPTURED) / len(posts)

    print(f"AI-Overview captures   {len(CAPTURED)}/{len(posts)}   {pct:.0f}%")
    print(f"REMAINING              {len(remaining)}")
    print(f"needs re-check         {len(NEEDS_RECHECK)}  (weaker pre-3-Aug method)")
    print(f"confirmed AIO citations {len(CITED)}")
    print(f"stale in the index      {len(STALE_INDEX)}")
    print("\nREMAINING POSTS")
    for slug in remaining:
        print(f"  {slug}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
