"""Does each migration-cost page say WHICH DIRECTION it prices?

Google reads "<platform> migration cost" as migrating TO that platform - its AI
Overview for `squarespace migration cost` answers "$0 in platform transfer fees"
for arriving. These pages price migrating AWAY. If the title, H1 and description
are all direction-neutral, the click never happens and the page cannot be cited
for either question.

Found independently on webflow-migration-cost and woocommerce migration cost
before this script existed. This measures how wide it goes.

    python scripts/migration_direction_audit.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG = ROOT / "src" / "app" / "blog"

PAGES = [
    "squarespace-migration-cost", "webflow-migration-cost", "wordpress-migration-cost",
    "wix-migration-cost", "website-migration-cost-2026", "website-rebuild-cost-2026",
    "website-redesign-cost", "how-to-migrate-wordpress-to-nextjs", "woocommerce-migration-cost",
    "leaving-webflow-2026", "squarespace-too-slow",
]

# Under GSC "Validate Fix" - must not be edited until it reports.
FROZEN = {
    "webflow-migration-cost", "wordpress-migration-cost", "website-migration-cost-2026",
    "website-redesign-cost", "squarespace-too-slow",
}

AWAY = re.compile(r"\b(from|off|away from|leaving|leave|out of|exit|migrating off)\b", re.I)
TOWARD = re.compile(r"\b(to|onto|into|moving to)\b", re.I)


def field(src: str, pattern: str) -> str:
    m = re.search(pattern, src, re.DOTALL)
    return " ".join(m.group(1).split()) if m else ""


def main() -> int:
    print(f"{'page':<38} {'title':<7} {'H1':<7} {'desc':<7} status")
    print("-" * 78)
    for slug in PAGES:
        f = BLOG / slug / "page.tsx"
        if not f.exists():
            continue
        src = f.read_text(encoding="utf-8", errors="ignore")
        title = field(src, r'const title = "([^"]*)"')
        desc = field(src, r'const description =\s*\n?\s*"([^"]*)"')
        h1m = re.search(r"<h1[^>]*>(.*?)</h1>", src, re.DOTALL)
        h1 = re.sub(r"<[^>]+>", " ", h1m.group(1)) if h1m else ""
        h1 = " ".join(re.sub(r'\{"\s*"\}', " ", h1).split())

        def mark(s: str) -> str:
            if not s:
                return "n/a"
            # direction is only meaningful next to the platform name
            plat = slug.split("-")[0]
            near = re.findall(rf"(\w+)\s+{plat}", s, re.I)
            if any(AWAY.fullmatch(w) for w in near):
                return "AWAY"
            if any(TOWARD.fullmatch(w) for w in near):
                return "TO"
            return "-"

        t, h, d = mark(title), mark(h1), mark(desc)
        neutral = all(x in ("-", "n/a") for x in (t, h, d))
        status = ("AMBIGUOUS" if neutral else "ok")
        if neutral and slug in FROZEN:
            status = "AMBIGUOUS (frozen)"
        print(f"{slug:<38} {t:<7} {h:<7} {d:<7} {status}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
