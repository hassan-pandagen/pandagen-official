#!/usr/bin/env python
"""
Modified-date invariant check.

One post has ONE last-modified value. It is rendered into four places and they
must agree:

  1. Article.dateModified   (page.tsx JSON-LD)
  2. WebPage.dateModified   (page.tsx JSON-LD)
  3. openGraph.modifiedTime (page.tsx metadata)
  4. lastModified           (blog.ts, which feeds sitemap.xml <lastmod>)

Why this exists: on 3 Aug 2026 five posts were found declaring two different
dateModified values inside the SAME file (Article said one date, WebPage another).
The sitemap sync read whichever appeared first, so the wrong date was already
propagating to Google as a recrawl signal. A disagreement here is not cosmetic --
it tells search engines a page changed on a day it did not.

Exit 1 on any disagreement so CI fails loudly rather than shipping a quiet
contradiction.

Usage:  python scripts/check_dates.py
"""
import glob
import io
import os
import re
import sys

DATE = r'([0-9]{4}-[0-9]{2}-[0-9]{2})'


def main() -> int:
    blog = io.open('src/data/blog.ts', encoding='utf-8').read()
    failures = []
    checked = 0

    for path in sorted(glob.glob('src/app/blog/*/page.tsx')):
        slug = os.path.basename(os.path.dirname(path))
        src = io.open(path, encoding='utf-8').read()

        found = {}

        json_dates = set(re.findall(r'"?dateModified"?:\s*"' + DATE, src))
        if json_dates:
            found['JSON-LD dateModified'] = json_dates

        og = set(re.findall(r'modifiedTime:\s*"' + DATE, src))
        if og:
            found['openGraph.modifiedTime'] = og

        m = re.search(r'id:\s*"%s"' % re.escape(slug), blog)
        if m:
            seg = blog[m.start():m.start() + 2500]
            lm = re.search(r'lastModified:\s*"' + DATE + r'"', seg)
            if lm:
                found['blog.ts lastModified'] = {lm.group(1)}

        if not found:
            continue
        checked += 1

        every = set()
        for values in found.values():
            every |= values

        if len(every) > 1:
            detail = '; '.join(
                f'{name}={",".join(sorted(vals))}' for name, vals in sorted(found.items())
            )
            failures.append(f'{slug}: {detail}')

    if failures:
        print(f'FAIL  modified-date disagreement in {len(failures)} of {checked} posts:\n')
        for line in failures:
            print(f'  {line}')
        print('\nOne post has one last-modified date. Make all four sources agree.')
        return 1

    print(f'OK    modified dates agree across all sources in {checked} posts')
    return 0


if __name__ == '__main__':
    sys.exit(main())
