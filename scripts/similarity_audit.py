"""Pairwise near-duplicate audit across the blog corpus.

Decides one question: is "Crawled - currently not indexed" on 25 posts caused by
near-duplicate templating, or not? That hypothesis was never measured, and
consolidating pages on a hunch would risk real traffic.

Method: strip JSX/markup to visible prose, drop the shared boilerplate that every
post carries (nav, CTA, author block) by removing any 5-gram that appears in more
than half the corpus, then Jaccard-compare word 5-grams pairwise.

    python scripts/similarity_audit.py
"""

import re
from collections import Counter
from itertools import combinations
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = ROOT / "src" / "app" / "blog"

N = 5           # shingle size, in words
BOILERPLATE = 0.5   # a shingle in >50% of posts is chrome, not content
REPORT = 0.10   # print pairs at or above this Jaccard


def prose(path: Path) -> str:
    src = path.read_text(encoding="utf-8", errors="ignore")
    # imports, JSX expressions, tags, entities -> leave visible words only
    src = re.sub(r"^import .*$", " ", src, flags=re.MULTILINE)
    src = re.sub(r"\{/\*.*?\*/\}", " ", src, flags=re.DOTALL)
    src = re.sub(r"className=\"[^\"]*\"", " ", src)
    src = re.sub(r"<[^>]+>", " ", src)
    src = re.sub(r"&[a-z]+;", " ", src)
    src = re.sub(r"[^A-Za-z0-9$%. ]", " ", src)
    return " ".join(src.lower().split())


def shingles(text: str) -> set:
    words = text.split()
    return {" ".join(words[i:i + N]) for i in range(len(words) - N + 1)}


def main() -> int:
    posts = sorted(p for p in BLOG_DIR.iterdir() if (p / "page.tsx").exists())
    sets = {p.name: shingles(prose(p / "page.tsx")) for p in posts}

    df = Counter()
    for s in sets.values():
        df.update(s)
    cutoff = len(sets) * BOILERPLATE
    chrome = {sh for sh, c in df.items() if c > cutoff}
    for name in sets:
        sets[name] -= chrome

    print(f"{len(posts)} posts | {len(chrome)} boilerplate shingles removed\n")

    pairs = []
    for a, b in combinations(sorted(sets), 2):
        sa, sb = sets[a], sets[b]
        if not sa or not sb:
            continue
        j = len(sa & sb) / len(sa | sb)
        if j >= REPORT:
            pairs.append((j, a, b))

    pairs.sort(reverse=True)
    if not pairs:
        print(f"No pair reaches Jaccard {REPORT:.2f}.")
        print("Near-duplicate templating is NOT supported by this measurement.")
    else:
        print(f"PAIRS AT OR ABOVE JACCARD {REPORT:.2f}  ({len(pairs)} pairs)\n")
        for j, a, b in pairs[:40]:
            print(f"  {j:.3f}  {a}\n         {b}")

    # per-post worst case: which posts have a very similar twin at all
    worst = {}
    for j, a, b in pairs:
        worst[a] = max(worst.get(a, 0), j)
        worst[b] = max(worst.get(b, 0), j)
    if worst:
        print("\nPOSTS BY CLOSEST TWIN")
        for name, j in sorted(worst.items(), key=lambda kv: -kv[1])[:25]:
            print(f"  {j:.3f}  {name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
