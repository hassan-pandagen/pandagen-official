"""Fail the build if the hub layer stops linking the way the taxonomy says it does.

WHAT THIS CATCHES
  1. A post with no UP-link to its topic hub (or, for a service-owned cluster,
     to the service page that owns the intent). An orphaned post is invisible
     to the cluster it is supposed to support.
  2. A post that never links its cluster's money page. A guide that argues a
     case and offers no commercial next step is a dead end for the reader and
     leaks the cluster's authority.
  3. A post with fewer than 2 or more than 4 same-hub sibling links. Under 2 is
     an isolated page; over 4 tends to mean a link dump rather than an editorial
     choice.
  4. A hub that renders no member posts, or whose money-page link is missing.

WHY IT READS BUILT HTML AND NOT THE TAXONOMY SOURCE
  The taxonomy is authored in TypeScript, and a Python guard that reparsed it
  would be testing the intent rather than the shipped page. So the hub pages ARE
  the artifact: each one renders its own membership and its own money-page link,
  and this reads that back. If a hub renders correctly and a post does not link
  it, the disagreement is real and in the output, which is where it matters.
  Same reasoning as metrics_guard.py reading .next rather than the .tsx files.

CALIBRATION -- READ BEFORE TRUSTING A COUNT FROM THIS SCRIPT
  Verify one true positive AND one false positive by hand before acting on any
  number here. Four separate detectors on this project matched the wrong thing
  and every one was caught by opening a file, never by reading a total.

  Two specific traps in this script's own matching:
    - Sibling links are counted as DISTINCT post ids, not as href occurrences.
      A card whose <a> wraps both an image and a heading emits the same href
      several times; counting occurrences reported 9 siblings on a page with 3.
    - Href matching must tolerate a trailing slash and a query string. Matching
      the bare string missed real links on pages that emitted "?ref=".

  BOTH OF THIS SCRIPT'S OWN FIRST-RUN FAILURE CLASSES WERE ITS OWN BUGS:
    - It counted same-hub links ANYWHERE in the document, so wordpress-killer
      failed at 12. Opening the page showed twelve contextual prose links with
      descriptive anchors ("our guide to WordPress plugins and site speed").
      That is exemplary internal linking. The sibling count is now scoped to the
      two marked structural blocks (data-topic-uplink, data-related-posts) and
      body links are deliberately not counted at all.
    - It resolved each post to ONE hub by taking the first hub file that listed
      it, alphabetically. Seven posts genuinely belong to two clusters, and the
      app picks the primary by an explicit priority order. So the guard demanded
      /blog/topic/seo-and-ai-search from a page that correctly linked
      /blog/topic/website-migration. A post now satisfies the check by linking
      ANY hub that lists it, which is what "an UP-link to its cluster" means.

  The lesson both times: the failing pages were right and the detector was
  wrong. Read the page before believing the count.

USAGE
  python scripts/link_guard.py          # after `next build`
  python scripts/link_guard.py --json   # machine-readable, for CI

EXIT CODES
  0 clean · 1 violations found · 2 could not run (no build output)
"""

from __future__ import annotations
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
BUILD = ROOT / ".next" / "server" / "app"
HUB_DIR = BUILD / "blog" / "topic"

MIN_SIBLINGS = 2
MAX_SIBLINGS = 4

# Matches href="/blog/slug", tolerating a trailing slash or a query string, and
# excluding the /blog/topic/ hub routes.
POST_HREF = re.compile(r'href="/blog/(?!topic/)([a-z0-9][a-z0-9-]*)/?(?:\?[^"]*)?"')
HUB_HREF = re.compile(r'href="/blog/topic/([a-z0-9-]+)/?(?:\?[^"]*)?"')


def read(path: pathlib.Path) -> str:
    return path.read_text(encoding="utf-8", errors="ignore")


def href_present(html: str, href: str) -> bool:
    """True when the page links `href`, allowing a trailing slash or query."""
    pattern = re.compile(r'href="' + re.escape(href) + r'/?(?:\?[^"]*)?"')
    return bool(pattern.search(html))


def structural_blocks(html: str) -> list[str]:
    """The two blocks that carry a post's deliberate sibling links.

    Everything from the marker attribute to the end of the document is close
    enough: both markers sit near the foot of the article, and taking a generous
    tail cannot pull in body prose that appears above them. Parsing the DOM to
    find the exact closing tag would be more precise and would add a dependency
    for no gain the failure modes need.
    """
    blocks = []
    for marker in ('data-related-posts', 'data-topic-uplink'):
        i = html.find(marker)
        if i != -1:
            blocks.append(html[i:])
    return blocks


def load_hubs() -> dict[str, dict]:
    """Read each hub page back: its members and its money page, as rendered."""
    if not HUB_DIR.exists():
        print("link_guard: no hub pages in build output. Run `next build` first.", file=sys.stderr)
        sys.exit(2)

    hubs: dict[str, dict] = {}
    for f in sorted(HUB_DIR.glob("*.html")):
        html = read(f)
        slug = f.stem
        members = []
        for post in POST_HREF.findall(html):
            if post not in members:
                members.append(post)

        # The money page is the one non-blog internal link the hub renders twice:
        # once in the intro prose and once in the closing section. Taking it from
        # the CTA href keeps this independent of the prose.
        cta = re.search(r'href="(/(?:services/[a-z-]+|partners|pricing|free-audit|editorial-policy))/?"', html)
        hubs[slug] = {
            "file": f.name,
            "members": members,
            "money": cta.group(1) if cta else None,
        }
    return hubs


def main() -> int:
    as_json = "--json" in sys.argv
    if not BUILD.exists():
        print("link_guard: no build output. Run `next build` first.", file=sys.stderr)
        return 2

    hubs = load_hubs()
    failures: list[dict] = []

    # Post -> EVERY hub that lists it. Seven posts belong to two clusters and
    # the app picks a primary by explicit priority; the guard must not re-derive
    # that, or it demands a link to a hub the app never chose.
    hubs_of: dict[str, list[str]] = {}
    for slug, hub in hubs.items():
        if not hub["members"]:
            failures.append({
                "type": "empty-hub", "page": hub["file"],
                "fix": f'Hub "{slug}" rendered no member posts. Its cluster in topical-map.ts '
                       f'is empty or its post ids no longer resolve to posts.',
            })
        if not hub["money"]:
            failures.append({
                "type": "hub-without-money-page", "page": hub["file"],
                "fix": f'Hub "{slug}" renders no money-page link. Check pillarHref on its cluster.',
            })
        for post in hub["members"]:
            hubs_of.setdefault(post, []).append(slug)

    post_files = sorted(p for p in (BUILD / "blog").glob("*.html"))
    checked = 0

    for f in post_files:
        post_id = f.stem
        html = read(f)
        checked += 1

        candidates = hubs_of.get(post_id, [])

        if candidates:
            # 1. UP-link to a hub that lists this post. Any of them counts.
            linked = [s for s in candidates if href_present(html, f"/blog/topic/{s}")]
            if not linked:
                failures.append({
                    "type": "missing-up-link", "post": post_id, "page": f.name,
                    "fix": f'"{post_id}" is listed by hub(s) {candidates} but links none of them. '
                           f'TopicUpLink or the breadcrumb is not rendering.',
                })

            # 2. Money page of a hub this post actually links up to.
            for slug in (linked or candidates):
                money = hubs[slug]["money"]
                if money and not href_present(html, money):
                    failures.append({
                        "type": "missing-money-link", "post": post_id, "page": f.name,
                        "fix": f'"{post_id}" never links {money}, the money page its hub '
                               f'"{slug}" points at.',
                    })

            # 3. Structural sibling links only. Body links are not counted; see
            #    the calibration note above for why.
            members = {p for s in (linked or candidates) for p in hubs[s]["members"]}
            siblings = {
                p for block in structural_blocks(html)
                for p in POST_HREF.findall(block)
                if p != post_id and p in members
            }
            if not (MIN_SIBLINGS <= len(siblings) <= MAX_SIBLINGS):
                failures.append({
                    "type": "sibling-count", "post": post_id, "page": f.name,
                    "count": len(siblings),
                    "fix": f'"{post_id}" links {len(siblings)} same-hub siblings in its '
                           f'related-posts and topic blocks; expected {MIN_SIBLINGS}-{MAX_SIBLINGS}.',
                })
        else:
            # Service-owned cluster: no hub exists, so the only requirement that
            # can be checked from rendered output is that the post links SOME
            # /services page. Which one is the taxonomy's business, not the
            # guard's, and asserting it here would duplicate the source of truth.
            if not re.search(r'href="/services/[a-z-]+/?"', html):
                failures.append({
                    "type": "orphan-post", "post": post_id, "page": f.name,
                    "fix": f'"{post_id}" is in no hub and links no /services page. Every post '
                           f'needs a parent: add it to a cluster in topical-map.ts.',
                })

    # 5. Every /work page must render its relationship disclosure.
    #
    #    Added after an audit found 3 of 6 carrying none at all: the
    #    independent-client case study that never said so on its own page, a
    #    founder-affiliated project disclosed in llms.txt but not on the page,
    #    and an "enterprise operations platform" that is our own internal CRM
    #    presented as though it were client work. Undisclosed founder-affiliated
    #    work is the most damaging thing this site could publish, so it fails
    #    the build rather than waiting for the next person to notice.
    facts_path = ROOT / "src" / "data" / "case-study-facts.json"
    if facts_path.exists():
        studies = json.loads(facts_path.read_text(encoding="utf-8"))["caseStudies"]
        work_dir = BUILD / "work"
        for slug, study in studies.items():
            page = work_dir / f"{slug}.html"
            if not page.exists():
                failures.append({
                    "type": "case-study-not-built", "page": f"work/{slug}.html",
                    "fix": f'"{slug}" is in case-study-facts.json but has no built page.',
                })
                continue
            text = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", read(page)))
            # Compare on the first clause: the full sentence survives rendering,
            # but entity-escaping makes an exact whole-string match brittle.
            probe = re.sub(r"\s+", " ", study["disclosure"].split(".")[0]).strip()
            if probe.lower() not in text.lower():
                failures.append({
                    "type": "missing-relationship-disclosure", "page": f"work/{slug}.html",
                    "fix": f'"{slug}" renders no relationship disclosure. Expected "{probe}". '
                           f'Add <RelationshipDisclosure slug="{slug}" /> to the page.',
                })

    if as_json:
        print(json.dumps({"failures": failures, "hubs": len(hubs), "posts": checked}, indent=2))
    else:
        print(f"link_guard: {len(hubs)} hubs, {checked} posts")
        if not failures:
            print("  OK - every post links its hub, its money page, and 2-4 siblings")
        for fail in failures:
            print(f"  FAIL [{fail['type']}] {fail.get('post', fail.get('page'))}: {fail['fix']}")

    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
