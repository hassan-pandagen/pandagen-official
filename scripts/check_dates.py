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

Added 4 Oct 2026, two more checks:

  * HARD: the visible byline. <BlogAuthor postId="..." published="..."> renders
    "Published X · Updated Y", with Y read from blog.ts lastModified. Its postId
    must be the post's own slug and `published` must equal the JSON-LD
    datePublished, or the reader sees a different date from the one in the markup.
  * WARN ONLY (never changes the exit code): posts whose page.tsx has a git
    commit dated after its lastModified. Most such commits are not content
    changes (CTA labels, links, spacing, styling), so this is a prompt to look,
    not an error. If the later commit changed facts, figures, sections, FAQs or
    meaningful wording, move the post's date in all four places. If it did not,
    leave the date alone: a date-only bump is worse than a stale one.

Usage:  python scripts/check_dates.py
"""
import glob
import io
import os
import re
import subprocess
import sys

DATE = r'([0-9]{4}-[0-9]{2}-[0-9]{2})'
SWEEP = 40  # a commit touching more posts than this is a template sweep, not an edit


def later_commits(lastmods):
    """slug -> [(date, hash, subject)] for commits to its page.tsx after lastModified.

    Root commits are skipped: history was re-rooted on 8 Sep 2026 (39d3c5e3), so
    the root adds every file and says nothing about which post changed that day.
    Commits touching more than SWEEP posts are skipped too and counted: those are
    template sweeps (the 30 Sep redesign move, the 1 Oct split-cover codemod, the
    15 Sep CTA relabel) and would otherwise flag every post on the site.
    Returns (found, skipped_sweeps), or None when git is unavailable.
    """
    try:
        out = subprocess.run(
            ['git', 'log', '--format=%x01%h|%p|%ad|%s', '--date=short', '--name-only', '--', 'src/app/blog'],
            capture_output=True, text=True, encoding='utf-8', errors='replace', check=True,
        ).stdout
    except (OSError, subprocess.CalledProcessError):
        return None
    found = {}
    sweeps = set()
    for block in out.split('\x01')[1:]:
        lines = [l for l in block.split('\n') if l.strip()]
        if not lines:
            continue
        sha, parents, day, subject = (lines[0].split('|', 3) + ['', '', ''])[:4]
        if not parents.strip():
            continue
        posts = [m.group(1) for m in (re.match(r'src/app/blog/([^/]+)/page\.tsx$', n.strip()) for n in lines[1:]) if m]
        if len(posts) > SWEEP:
            sweeps.add(sha)
            continue
        for slug in posts:
            if slug in lastmods and day > lastmods[slug]:
                found.setdefault(slug, []).append((day, sha, subject))
    return found, sweeps


def main() -> int:
    blog = io.open('src/data/blog.ts', encoding='utf-8').read()
    failures = []
    byline_failures = []
    lastmods = {}
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
                lastmods[slug] = lm.group(1)

        tag = re.search(r'<BlogAuthor\b[^>]*?/>', src, re.S)
        by_id = re.search(r'\bpostId="([^"]*)"', tag.group(0)) if tag else None
        by_pub = re.search(r'\bpublished="([^"]*)"', tag.group(0)) if tag else None
        if by_id or by_pub:
            pubs = set(re.findall(r'"?datePublished"?:\s*"' + DATE, src))
            if not pubs:
                const = re.search(r'const PUBLISHED\s*=\s*"' + DATE, src)
                pubs = {const.group(1)} if const else set()
            if not (by_id and by_pub):
                byline_failures.append(f'{slug}: BlogAuthor needs both postId and published')
            elif by_id.group(1) != slug:
                byline_failures.append(f'{slug}: BlogAuthor postId="{by_id.group(1)}" is not this post')
            elif pubs != {by_pub.group(1)}:
                byline_failures.append(
                    f'{slug}: byline published={by_pub.group(1)}; JSON-LD datePublished={",".join(sorted(pubs)) or "missing"}'
                )

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

    rc = 0
    if failures:
        print(f'FAIL  modified-date disagreement in {len(failures)} of {checked} posts:\n')
        for line in failures:
            print(f'  {line}')
        print('\nOne post has one last-modified date. Make all four sources agree.')
        rc = 1
    else:
        print(f'OK    modified dates agree across all sources in {checked} posts')

    if byline_failures:
        print(f'\nFAIL  byline date problem in {len(byline_failures)} posts:\n')
        for line in byline_failures:
            print(f'  {line}')
        rc = 1
    else:
        print('OK    every byline that reads its dates from blog.ts matches its datePublished')

    result = later_commits(lastmods)
    if result is None:
        print('\nWARN  git unavailable, skipped the stale-date check (warning only)')
        return rc
    later, sweeps = result
    if later:
        print(f'\nWARN  {len(later)} posts have page.tsx commits dated after their lastModified (warning only).')
        print(f'      {len(sweeps)} template sweeps touching more than {SWEEP} posts are not counted.')
        print('      Many of these are CTA, link, price-wording or quote corrections. Move the date only if')
        print('      a commit changed facts, figures, sections, FAQs or meaningful wording, in all four places.\n')
        for slug in sorted(later):
            commits = sorted(later[slug], reverse=True)
            day, sha, subject = commits[0]
            subject = subject.encode('ascii', 'replace').decode('ascii')[:70]
            print(f'  {slug}: lastModified {lastmods[slug]}; {len(commits)} later; newest {day} {sha} {subject}')
    return rc


if __name__ == '__main__':
    sys.exit(main())
