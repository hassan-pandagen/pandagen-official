"""Find pages that discuss a metric but never name it the way people search for it.

The one AI-Overview citation this site has actually observed was won by a passage
that NAMED things: a named tool with its constraint and named fields. The most
common gap found in the 5-7 Aug captures was not a missing fact -- it was a fact
present under the wrong name. `how-to-fix-slow-wordpress` carried correct TTFB
bands while the string "TTFB" appeared zero times, so no extractor matching that
term could ever find them.

Rule: for each well-known metric, a page that uses ONE form (acronym or expansion)
and never the other is flagged. Both forms should appear at least once, because
readers and extractors split between them.

Measured against the RENDERED article text, not the JSX source, for the same
reason wordcount_audit does: source contains prop values and class strings that
never reach the page. Run `next build` first.

    python scripts/entity_naming_audit.py
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG_SRC = ROOT / "src" / "app" / "blog"
BUILD = ROOT / ".next" / "server" / "app" / "blog"

# (acronym, expansion regex, human label)
#
# ONLY metrics whose ACRONYM is the dominant form in tools and in search. The
# first version of this list included CWV, CMS, CAPI and CRO and was 71 hits,
# almost all false: nobody searches "CWV" -- Google's own docs say "Core Web
# Vitals", Meta says "Conversions API", and "content management system" is not a
# gap when the page says it in full. Adding those acronyms to thirty pages would
# be noise. The test for adding a pair here is: would a reader or an extractor
# plausibly search the ACRONYM and miss a page that only spells it out?
PAIRS = [
    (r"\bTTFB\b", r"time to first byte", "TTFB / Time to First Byte"),
    (r"\bLCP\b", r"largest contentful paint", "LCP / Largest Contentful Paint"),
    (r"\bINP\b", r"interaction to next paint", "INP / Interaction to Next Paint"),
    (r"\bCLS\b", r"cumulative layout shift", "CLS / Cumulative Layout Shift"),
    (r"\bHPOS\b", r"high[- ]performance order storage", "HPOS / High-Performance Order Storage"),
]


def article_text(html: str) -> str:
    m = re.search(r"<article\b[^>]*>(.*?)</article>", html, re.DOTALL)
    body = m.group(1) if m else html
    for pat in [r"<script\b.*?</script>", r"<style\b.*?</style>", r"<svg\b.*?</svg>"]:
        body = re.sub(pat, " ", body, flags=re.DOTALL | re.I)
    body = re.sub(r'\s(?:class|style|href|src|d|viewBox)="[^"]*"', " ", body)
    body = re.sub(r"<[^>]+>", " ", body)
    body = re.sub(r"&[#a-zA-Z0-9]+;", " ", body)
    return " ".join(body.split())


def main() -> int:
    if not BUILD.exists():
        print("ERROR: no build output. Run `npx next build` first.")
        return 1

    rows = []
    for d in sorted(BLOG_SRC.iterdir()):
        html = BUILD / f"{d.name}.html"
        if not html.exists():
            continue
        text = article_text(html.read_text(encoding="utf-8", errors="ignore"))
        for acro, expan, label in PAIRS:
            a = len(re.findall(acro, text))
            e = len(re.findall(expan, text, re.I))
            # only interesting when the page clearly discusses it via one form
            if a and not e:
                rows.append((d.name, label, f"acronym x{a}, expansion x0", "expansion missing"))
            elif e and not a:
                rows.append((d.name, label, f"expansion x{e}, acronym x0", "ACRONYM MISSING"))

    print(f"{len(rows)} naming gaps across {len(list(BLOG_SRC.iterdir()))} posts\n")
    missing_acro = [r for r in rows if r[3] == "ACRONYM MISSING"]
    print(f"-- ACRONYM MISSING ({len(missing_acro)}) -- the searched term is absent, highest value\n")
    for name, label, counts, _ in missing_acro:
        print(f"  {name:<46} {label:<38} {counts}")
    print(f"\n-- expansion missing ({len(rows) - len(missing_acro)}) -- lower value, acronym is usually the search term\n")
    for name, label, counts, kind in rows:
        if kind != "ACRONYM MISSING":
            print(f"  {name:<46} {label:<38} {counts}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
