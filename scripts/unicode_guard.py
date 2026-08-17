"""Report characters that should not reach a reader, from the BUILT output.

WHY THIS EXISTS
  "and why em dashes ??" has been a standing instruction since July, and it was
  being enforced only on whichever pages someone happened to look at. The first
  full scan found 117 em dashes in visible text across 39 pages, including all
  six /work case studies. A rule nobody checks is a preference, not a rule.

WHY IT READS BUILT HTML AND NOT SOURCE
  Source contains em dashes in comments and docblocks, which are fine and
  numerous (442 across 67 files). Only what renders matters. Same reasoning as
  metrics_guard.py and link_guard.py: the shipped page is the artifact.

WHAT IS DELIBERATELY ALLOWED
  - Anything inside <script>, which includes the RSC payload.
  - An em dash inside an element marked aria-hidden="true". That is the house
    convention for an ABSENT VALUE (CaseStudyGrid.tsx:25 renders `present ?
    value : "—"`), and it is a glyph rather than prose.
  - Curly quotes and apostrophes. Those are correct typography, not a tell.

WHAT IT FLAGS
  1. Em dash and en dash in visible prose.
  2. Invisible characters: zero-width space, ZWNJ, ZWJ, BOM, word joiner, soft
     hyphen, line and paragraph separators. These break diffs, corrupt search
     snippets and silently skew word counts. The site currently has ZERO of
     these, and this check exists so it stays that way.

REPORT-ONLY UNTIL THE BACKLOG IS CLEARED
  Exits 0 while `--strict` is absent, exactly like dupe_prose.py. Turning a
  guard on with 117 known violations would mean either a broken build or an
  instantly ignored one. Add --strict to guard:all once the count is zero.

USAGE
  python scripts/unicode_guard.py            # report, exit 0
  python scripts/unicode_guard.py --strict   # exit 1 if anything is found
  python scripts/unicode_guard.py --json
"""

from __future__ import annotations
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
BUILD = ROOT / ".next" / "server" / "app"

SCRIPT = re.compile(r"<script.*?</script>", re.S)
ARIA_HIDDEN = re.compile(r'<[a-z]+[^>]*aria-hidden="true"[^>]*>.*?</[a-z]+>', re.S)
TAG = re.compile(r"<[^>]+>")

INVISIBLE = {
    "​": "ZERO WIDTH SPACE",
    "‌": "ZERO WIDTH NON-JOINER",
    "‍": "ZERO WIDTH JOINER",
    "﻿": "BOM / ZERO WIDTH NO-BREAK SPACE",
    "⁠": "WORD JOINER",
    "­": "SOFT HYPHEN",
    " ": "LINE SEPARATOR",
    " ": "PARAGRAPH SEPARATOR",
    "᠎": "MONGOLIAN VOWEL SEPARATOR",
}
DASHES = {"—": "EM DASH", "–": "EN DASH"}


def visible_text(html: str) -> str:
    html = SCRIPT.sub("", html)
    html = ARIA_HIDDEN.sub("", html)
    return re.sub(r"\s+", " ", TAG.sub(" ", html))


def main() -> int:
    strict = "--strict" in sys.argv
    as_json = "--json" in sys.argv
    if not BUILD.exists():
        print("unicode_guard: no build output. Run `next build` first.", file=sys.stderr)
        return 2

    findings: list[dict] = []
    pages = 0
    for f in sorted(BUILD.rglob("*.html")):
        pages += 1
        text = visible_text(f.read_text(encoding="utf-8", errors="ignore"))
        page = "/" + f.relative_to(BUILD).as_posix().removesuffix(".html")
        for ch, name in {**DASHES, **INVISIBLE}.items():
            n = text.count(ch)
            if not n:
                continue
            m = re.search(r".{0,60}" + re.escape(ch) + r".{0,60}", text)
            findings.append({
                "page": page,
                "char": f"U+{ord(ch):04X}",
                "name": name,
                "count": n,
                "invisible": ch in INVISIBLE,
                "sample": (m.group(0).strip() if m else ""),
            })

    if as_json:
        print(json.dumps({"pages": pages, "findings": findings}, indent=2))
        return 1 if (strict and findings) else 0

    total = sum(f["count"] for f in findings)
    invisible = sum(f["count"] for f in findings if f["invisible"])
    print(f"unicode_guard: {pages} built pages")
    if not findings:
        print("  OK - no em dashes or invisible characters in visible text")
        return 0

    print(f"  {total} occurrences on {len({f['page'] for f in findings})} pages "
          f"({invisible} invisible)")
    by_page: dict[str, int] = {}
    for f in findings:
        by_page[f["page"]] = by_page.get(f["page"], 0) + f["count"]
    for page, n in sorted(by_page.items(), key=lambda x: -x[1])[:20]:
        print(f"    {n:>3}  {page}")
    if len(by_page) > 20:
        print(f"    ... and {len(by_page) - 20} more pages")
    if invisible:
        print("\n  INVISIBLE CHARACTERS, fix these first:")
        for f in findings:
            if f["invisible"]:
                print(f"    {f['count']:>3}  {f['char']} {f['name']}  {f['page']}")
    return 1 if strict else 0


if __name__ == "__main__":
    raise SystemExit(main())
