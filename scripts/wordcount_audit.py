"""Check schema wordCount / timeRequired against the actual visible prose.

wordCount was wrong on 28 of 65 posts once already. It goes stale silently every
time a section is added, and nothing else in the gate catches it -- tsc, eslint
and next build are all happy with a number that is off by 40%.

Counts words inside JSX text nodes only: strips imports, tags, className values,
JSX expressions and schema/metadata blocks, so it measures what a reader sees
rather than what the file contains.

    python scripts/wordcount_audit.py           # report drift
    python scripts/wordcount_audit.py --fix     # rewrite wordCount + timeRequired

Tolerance is 12%: prose counting is approximate and churning the number on every
small edit would make dateModified meaningless.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG = ROOT / "src" / "app" / "blog"
TOLERANCE = 0.12
WPM = 200


def visible_words(src: str) -> int:
    # drop everything before the component body -- imports, metadata, JSON-LD
    m = re.search(r"export default function", src)
    body = src[m.start():] if m else src
    body = re.sub(r"\{/\*.*?\*/\}", " ", body, flags=re.DOTALL)
    body = re.sub(r"className=\"[^\"]*\"", " ", body)
    body = re.sub(r"href=\"[^\"]*\"", " ", body)
    # JSX expression containers that are not plain strings
    body = re.sub(r"\{[^{}\"']*\}", " ", body)
    body = re.sub(r"<[^>]+>", " ", body)
    body = re.sub(r"&[a-z]+;", "'", body)
    words = re.findall(r"[A-Za-z][A-Za-z'\-]*", body)
    return len(words)


def main() -> int:
    fix = "--fix" in sys.argv
    drift = []
    for d in sorted(BLOG.iterdir()):
        f = d / "page.tsx"
        if not f.exists():
            continue
        src = f.read_text(encoding="utf-8")
        m = re.search(r'wordCount:\s*(\d+)', src) or re.search(r'"wordCount":\s*(\d+)', src)
        if not m:
            continue
        declared = int(m.group(1))
        actual = visible_words(src)
        if declared == 0:
            continue
        off = abs(actual - declared) / declared
        if off > TOLERANCE:
            drift.append((d.name, declared, actual, off))
            if fix:
                mins = max(1, round(actual / WPM))
                src = re.sub(r'("?wordCount"?:\s*)\d+', rf"\g<1>{actual}", src)
                src = re.sub(r'("?timeRequired"?:\s*")PT\d+M(")', rf"\g<1>PT{mins}M\g<2>", src)
                f.write_text(src, encoding="utf-8")

    print(f"{len(drift)} posts outside {int(TOLERANCE*100)}% tolerance"
          + (" - REWRITTEN" if fix else ""))
    for name, dec, act, off in sorted(drift, key=lambda r: -r[3]):
        print(f"  {name:<48} declared {dec:>5}  actual {act:>5}  ({off*100:.0f}% off)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
