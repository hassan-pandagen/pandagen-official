"""Audit and fix schema `wordCount` / `timeRequired` against the RENDERED article.

THE DEFINITION, settled 6 Aug 2026 and not to be re-litigated per post:

    wordCount is the word count of the ARTICLE TEXT, matching schema.org's own
    definition ("the number of words in the text of the Article") and what a
    search engine or extractor counts. It is measured from the prerendered HTML
    in .next/server/app/blog/<slug>.html, scoped to the <article> element, with
    site chrome removed: breadcrumb, back-link, author block, related posts,
    CTA blocks, script/style/svg, and the FAQ block.

Why rendered HTML and not the JSX source: the JSX contains prop values,
className strings and component calls whose text never reaches the page, while
the components it renders contain text that does. Counting the source measures
the file; counting the built HTML measures the page. Only the second is what
"necessary for SEO" can mean.

Why the FAQ is excluded: it is already asserted separately as FAQPage
structured data, so counting it inside Article wordCount double-counts it.

Run `next build` first -- this reads build output, not source.

    python scripts/wordcount_audit.py           # report drift
    python scripts/wordcount_audit.py --fix     # rewrite wordCount + timeRequired

Tolerance is 10%: prose counting is approximate, and churning the number on
every small edit would make dateModified meaningless.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG_SRC = ROOT / "src" / "app" / "blog"
BUILD = ROOT / ".next" / "server" / "app" / "blog"
BLOG_TS = ROOT / "src" / "data" / "blog.ts"

TOLERANCE = 0.10
WPM = 200

DROP_BLOCKS = [
    r"<script\b.*?</script>",
    r"<style\b.*?</style>",
    r"<svg\b.*?</svg>",
    r"<nav\b.*?</nav>",
    # FAQ block: counted as FAQPage schema instead, so counting it here double-counts
    r'<section[^>]*aria-labelledby="faq-heading".*?</section>',
]

# The RelatedPosts component renders INSIDE <article> and its card titles and deks
# inflated every count by 30-130% on the first attempt. Cut there.
# NB: ">Related Articles<" is the component. "Related reading" is an H2 some authors
# wrote as real body copy -- do not confuse them.
# data-topic-uplink is the TopicUpLink aside, added with the hub layer on 9 Aug
# 2026. It renders inside <article>, immediately above RelatedPosts, and is
# navigation rather than article prose -- the same argument that excludes the
# related-posts cards. Listed first because it appears first; the cut takes the
# earliest marker found, so this also removes RelatedPosts below it.
# Left in, it added ~45 words to all 77 counts: under the 10% tolerance for long
# posts and over it for the shortest, which is the worst kind of drift because
# it looks like nothing is wrong until one post trips.
END_MARKERS = ["data-topic-uplink", ">Related Articles<", ">Keep reading<", ">More from the blog<"]


def article_words(html: str) -> int:
    m = re.search(r"<article\b[^>]*>(.*?)</article>", html, re.DOTALL)
    body = m.group(1) if m else html

    # Start at the H1. Everything before it is breadcrumb and the back-link.
    h1 = re.search(r"<h1\b", body)
    if h1:
        body = body[h1.start():]

    # Stop at the related-posts component. Back up to the start of the enclosing
    # tag -- cutting on the text marker leaves a dangling "<h2 class=..." whose
    # class string is then counted as words.
    cut = min((body.find(mk) for mk in END_MARKERS if body.find(mk) != -1), default=-1)
    if cut != -1:
        tag_start = body.rfind("<", 0, cut)
        body = body[: tag_start if tag_start != -1 else cut]

    # Trailing CTA block: the last <section> carrying a button is the conversion
    # panel, not article prose.
    for mm in reversed(list(re.finditer(r"<section\b", body))):
        tail = body[mm.start():]
        if "<button" in tail and len(tail) < 3000:
            body = body[: mm.start()]
            break

    for pat in DROP_BLOCKS:
        body = re.sub(pat, " ", body, flags=re.DOTALL | re.IGNORECASE)
    # Attributes must go before tag-stripping so no partial tag can leak class text.
    body = re.sub(r'\s(?:class|style|d|viewBox|href|src)="[^"]*"', " ", body)
    body = re.sub(r"<[^>]+>", " ", body)
    body = re.sub(r"&[#a-zA-Z0-9]+;", " ", body)
    return len(re.findall(r"[A-Za-z0-9][A-Za-z0-9'’\-]*", body))


def main() -> int:
    if not BUILD.exists():
        print("ERROR: no build output. Run `npx next build` first.")
        return 1

    fix = "--fix" in sys.argv
    rows, changed = [], 0
    blog_ts = BLOG_TS.read_text(encoding="utf-8")

    for d in sorted(BLOG_SRC.iterdir()):
        page = d / "page.tsx"
        html = BUILD / f"{d.name}.html"
        if not page.exists() or not html.exists():
            continue
        src = page.read_text(encoding="utf-8")
        m = re.search(r'"?wordCount"?:\s*(\d+)', src)
        if not m:
            continue
        declared, actual = int(m.group(1)), article_words(
            html.read_text(encoding="utf-8", errors="ignore"))
        off = abs(actual - declared) / max(declared, 1)
        if off > TOLERANCE:
            rows.append((d.name, declared, actual, off))
            if fix:
                mins = max(1, round(actual / WPM))
                src = re.sub(r'("?wordCount"?:\s*)\d+', rf"\g<1>{actual}", src)
                src = re.sub(r'("?timeRequired"?:\s*")PT\d+M(")', rf"\g<1>PT{mins}M\g<2>", src)
                page.write_text(src, encoding="utf-8")
                i = blog_ts.find(f'id: "{d.name}"')
                if i >= 0:
                    j = blog_ts.find('id: "', i + 10)
                    end = j if j > 0 else len(blog_ts)
                    seg = re.sub(r'(readTime:\s*")[^"]*(")', rf"\g<1>{mins} min\g<2>",
                                 blog_ts[i:end], count=1)
                    blog_ts = blog_ts[:i] + seg + blog_ts[end:]
                changed += 1

    if fix and changed:
        BLOG_TS.write_text(blog_ts, encoding="utf-8")

    print(f"{len(rows)} of 77 outside {int(TOLERANCE * 100)}% tolerance"
          + (f" - {changed} REWRITTEN" if fix else ""))
    for name, dec, act, off in sorted(rows, key=lambda r: -r[3]):
        print(f"  {name:<48} declared {dec:>5}  article {act:>5}  ({off * 100:.0f}%)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
