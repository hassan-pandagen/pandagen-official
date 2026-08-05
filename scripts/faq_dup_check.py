"""Every FAQ answer in blog.ts must be unique.

Answers feed FAQPage JSON-LD across the whole corpus. Two pages asserting the
same answer text is a duplicate-content signal in structured data, and it is the
easiest thing to introduce by accident when mirroring a body edit into an FAQ -
the temptation is to paste the paragraph you just wrote.

Replaces an inline one-liner that kept breaking on shell escaping.

    python scripts/faq_dup_check.py     # exits 1 if any answer repeats
"""

import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG_TS = ROOT / "src" / "data" / "blog.ts"

ANSWER = re.compile(r'answer:\s*"((?:[^"\\]|\\.)*)"')


def main() -> int:
    src = BLOG_TS.read_text(encoding="utf-8")
    answers = ANSWER.findall(src)
    dups = [(a, c) for a, c in Counter(answers).items() if c > 1]

    print(f"FAQ answers: {len(answers)} | distinct: {len(set(answers))}")
    if not dups:
        print("OK    no duplicate answers")
        return 0
    for a, c in dups:
        print(f"DUP x{c}: {a[:110]}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
