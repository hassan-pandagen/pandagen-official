"""Fail the build if a page's meta description is shorter than 25 or longer than 160 characters.

WHY
  Bing Webmaster Tools reports "Meta Description too long or too short" as an
  error outside 25-160 characters, and Google cuts the snippet off at about the
  same length. On 27 Oct 2026 83 of the 162 sitemap pages were over 160 (median
  161, longest 264), so searchers on both engines saw sentences that stopped
  mid-way. All 83 were rewritten the same day; this keeps them there.

WHY IT READS BUILT HTML
  Many descriptions are template strings filled from data files (prices, dates,
  counts), so the source text is not the length that ships. Same reasoning as
  link_guard.py and metrics_guard.py.

USAGE
  python scripts/description_guard.py                 # after `next build`
  python scripts/description_guard.py .next-audit     # a different build dir

EXIT CODES
  0 clean · 1 violations found · 2 could not run (no build output)
"""

from __future__ import annotations

import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MIN, MAX = 25, 160
META = re.compile(r'<meta name="description" content="([^"]*)"')


def main() -> int:
    build_dir = sys.argv[1] if len(sys.argv) > 1 else ".next"
    app = ROOT / build_dir / "server" / "app"
    if not app.exists():
        print(f"description_guard: no build output at {app}. Run `next build` first.")
        return 2

    bad: list[tuple[int, str]] = []
    checked = 0
    for page in sorted(app.rglob("*.html")):
        match = META.search(page.read_text(encoding="utf-8", errors="replace"))
        if not match:
            continue
        checked += 1
        length = len(html.unescape(match.group(1)))
        if not MIN <= length <= MAX:
            bad.append((length, page.relative_to(app).as_posix()))

    if bad:
        print(f"description_guard: {len(bad)} of {checked} pages have a meta description outside {MIN}-{MAX} characters:")
        for length, path in sorted(bad, reverse=True):
            print(f"  {length:>4}  {path}")
        return 1
    print(f"description_guard: all {checked} page descriptions are {MIN}-{MAX} characters.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
