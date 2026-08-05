"""Find run-on H1s across the corpus.

The H1 pattern on this site is `Plain text <span>styled tail</span>`. When the
plain part ends without punctuation, the rendered H1 reads as one run-on
sentence - "Webflow vs Custom Website A Four-Factor Decision" - even though the
metadata title for the same page is correctly punctuated. An external audit
caught one instance; this checks whether it is systemic.

Clean separators: : - ? ! - or a trailing word that grammatically continues
(handled by the review, not by this script - it only flags candidates).

    python scripts/h1_runon_audit.py
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG = ROOT / "src" / "app" / "blog"

H1 = re.compile(r"<h1[^>]*>(.*?)</h1>", re.DOTALL)
SPAN = re.compile(r"<span[^>]*>(.*?)</span>", re.DOTALL)
CLEAN_END = re.compile(r"[:—–?!,\-]\s*$")


def main() -> int:
    flagged, checked = [], 0
    for d in sorted(BLOG.iterdir()):
        f = d / "page.tsx"
        if not f.exists():
            continue
        m = H1.search(f.read_text(encoding="utf-8", errors="ignore"))
        if not m:
            continue
        inner = m.group(1)
        sm = SPAN.search(inner)
        if not sm:
            continue
        checked += 1

        def clean(s: str) -> str:
            s = re.sub(r'\{"\s*"\}', " ", s)   # JSX spacer {" "} is whitespace, not text
            s = re.sub(r"<[^>]+>", " ", s)
            s = re.sub(r"&[a-z]+;", "'", s)
            return " ".join(s.split())

        # Only a TAIL span can be a run-on. If real text follows the span, the
        # heading continues and the span is mid-sentence styling, which is fine.
        if clean(inner[sm.end():]):
            continue

        before = clean(inner[: sm.start()])
        if not before:
            continue  # span leads the heading; nothing to separate

        # A tail span after a grammatically continuing word (articles, prepositions,
        # conjunctions) is also fine: "Divi Theme Slow? A <span>2026 Guide</span>".
        if re.search(r"\b(a|an|the|of|for|to|in|on|with|and|or|from|your|is)$", before, re.I):
            continue

        if not CLEAN_END.search(before):
            flagged.append((d.name, before, clean(sm.group(1))))

    print(f"{checked} H1s with a styled span checked | {len(flagged)} flagged\n")
    for name, before, tail in flagged:
        print(f"  {name}")
        print(f"    reads as: {before} {tail}\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
