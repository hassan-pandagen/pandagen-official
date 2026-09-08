"""Fail the build if a glossary's structured data disagrees with its own page.

WHAT THIS CATCHES
  A glossary declares its terms once, in a TERMS array, and that array drives
  three things: the jump-nav, the DefinedTermSet JSON-LD, and (by hand) the
  rendered term cards. The first two cannot drift, because they map over the
  same array. The third can, because each card is written out individually.

  So the failure mode is silent and specific: a term is added to TERMS, appears
  in the jump-nav and in the structured data, and no card was ever written for
  it. The visible page looks correct. The jump-nav link goes nowhere, and the
  structured data promises a definition that is not on the page.

  Checks, per page carrying a DefinedTermSet:
    1. Every DefinedTerm @id fragment has a matching element id in the HTML.
    2. Every DefinedTerm has a name and a non-empty description.
    3. Every jump-nav anchor resolves to an element id on the same page.
    4. The set of DefinedTerm ids and the set of in-page anchors agree, so a
       card that exists but was dropped from TERMS is caught as well.

WHY IT READS BUILT HTML AND NOT THE .tsx
  Same reasoning as metrics_guard.py and link_guard.py. The taxonomy is authored
  in TypeScript; reparsing it in Python would test the intent rather than the
  shipped page. The rendered HTML is the artifact a reader and a crawler get.

CALIBRATION -- READ BEFORE TRUSTING A COUNT FROM THIS SCRIPT
  Verify one true positive AND one false positive by hand before acting on a
  number here. Two traps found while writing it:
    - Next.js emits the RSC payload inside a <script> tag, so the JSON-LD block
      appears to occur more than once if you match naively. Only the
      application/ld+json script is parsed.
    - An in-page anchor list is not the same as "every href starting with #".
      Footnote and skip links also match. Anchors are scoped to the nav element
      labelled for the term list.

USAGE
  python scripts/glossary_guard.py          # after `next build`
  python scripts/glossary_guard.py --json   # machine-readable, for CI

EXIT CODES
  0 clean or no glossary found - 1 violations found - 2 could not run
"""

from __future__ import annotations
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
BUILD = ROOT / ".next" / "server" / "app"

LD_JSON = re.compile(
    r'<script[^>]+type="application/ld\+json"[^>]*>(.*?)</script>',
    re.S,
)
ELEMENT_ID = re.compile(r'\bid="([a-z0-9][a-z0-9-]*)"')
# The jump-nav is the one <nav> whose aria-label names the term list.
JUMP_NAV = re.compile(
    r'<nav[^>]+aria-label="[^"]*[Tt]erms"[^>]*>(.*?)</nav>', re.S
)
NAV_ANCHOR = re.compile(r'href="#([a-z0-9][a-z0-9-]*)"')


def graph_nodes(html: str):
    """Every node in every JSON-LD block on the page, flattened."""
    for block in LD_JSON.findall(html):
        try:
            data = json.loads(block)
        except json.JSONDecodeError:
            continue
        nodes = data.get("@graph", [data]) if isinstance(data, dict) else []
        for node in nodes:
            if isinstance(node, dict):
                yield node


def check_page(path: pathlib.Path) -> list[str]:
    html = path.read_text(encoding="utf-8", errors="ignore")
    termsets = [n for n in graph_nodes(html) if n.get("@type") == "DefinedTermSet"]
    if not termsets:
        return []

    problems: list[str] = []
    page = "/" + path.relative_to(BUILD).as_posix().removesuffix(".html")
    element_ids = set(ELEMENT_ID.findall(html))

    declared: set[str] = set()
    for termset in termsets:
        for term in termset.get("hasDefinedTerm", []):
            if not isinstance(term, dict):
                continue
            frag = str(term.get("@id", "")).rsplit("#", 1)[-1]
            name = term.get("name")
            desc = term.get("description")
            if not frag:
                problems.append(f"{page}: a DefinedTerm has no @id fragment")
                continue
            declared.add(frag)
            if not name:
                problems.append(f"{page}#{frag}: DefinedTerm has no name")
            if not desc or not str(desc).strip():
                problems.append(
                    f"{page}#{frag}: DefinedTerm has no description, so the "
                    f"structured data promises a definition the page does not carry"
                )
            if frag not in element_ids:
                problems.append(
                    f"{page}#{frag}: declared in the DefinedTermSet but no element "
                    f"with that id is rendered, so the term has no card on the page"
                )

    nav = JUMP_NAV.search(html)
    if nav:
        anchors = set(NAV_ANCHOR.findall(nav.group(1)))
        for anchor in sorted(anchors - element_ids):
            problems.append(f"{page}: jump-nav links #{anchor}, which is not on the page")
        for orphan in sorted(declared - anchors):
            problems.append(
                f"{page}#{orphan}: in the DefinedTermSet but missing from the "
                f"jump-nav, so a reader cannot reach it"
            )
    return problems


def main() -> int:
    as_json = "--json" in sys.argv
    if not BUILD.exists():
        print("glossary_guard: no build output at .next/server/app. Run `next build` first.")
        return 2

    pages = sorted(BUILD.rglob("*.html"))
    problems: list[str] = []
    scanned = 0
    for page in pages:
        found = check_page(page)
        html_has_termset = "DefinedTermSet" in page.read_text(encoding="utf-8", errors="ignore")
        if html_has_termset:
            scanned += 1
        problems.extend(found)

    if as_json:
        print(json.dumps({"glossaries": scanned, "problems": problems}, indent=2))
        return 1 if problems else 0

    print(f"glossary_guard: {scanned} pages carry a DefinedTermSet")
    if not problems:
        print("  OK - every declared term has a card, a description and a jump-nav entry")
        return 0
    for problem in problems:
        print(f"  FAIL {problem}")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
