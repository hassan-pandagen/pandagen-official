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
NEEDS_RECHECK = {
    "cheap-web-developer",          # recorded "no AI Overview served"
    "shopify-store-speed-optimization",  # recorded "no PAA"
}

CAPTURED = {
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
}

# Verified stale by grepping the live SERP snippet against src/ — Google is serving
# pre-remediation copy that no longer exists in the repo.
STALE_INDEX = {
    "nextjs-hosting-zero-cost",
    "shopify-app-costs-real-monthly-bill",
    "shopify-dawn-theme-slow",
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
