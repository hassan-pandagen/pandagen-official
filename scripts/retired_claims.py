"""Fail the build when a claim we already corrected reappears in the prose.

WHAT THIS CATCHES
  A statement about a third party that was true once, was found to be false,
  was fixed, and has come back -- through a rewrite, a merge, a copy-paste from
  an older post, or a new author who learned the old behaviour and was never
  told it changed.

WHY IT EXISTS
  On 31 Aug 2026, woocommerce-too-slow was found to be describing WooCommerce's
  pre-7.8 cart-fragments behaviour as current. It had been wrong for three
  years. The part worth building a guard over: spec-facts.json already held the
  correct value, verified six days earlier, citing the same vendor post used to
  confirm the error. Nobody had failed to do the research. The prose and the
  data had simply drifted apart and nothing in the build compared them.

  spec_freshness.py watches the DATA going stale. This watches the PROSE going
  back.

WHAT IT IS NOT
  Not a fact-checker. It knows only what src/data/retired-claims.json tells it,
  so it cannot find a wrong claim nobody has caught yet. It is a regression
  test: each entry is a bug that must never reopen.

WHY IT FAILS IMMEDIATELY, RATHER THAN WARNING FIRST
  Unlike a stale spec, there is no clock here and no grace to give. Every entry
  is a statement already known to be false on the day it is committed. There is
  no window in which publishing it is defensible, so there is no warn tier.

TWO ESCAPE HATCHES, AND WHY BOTH ARE NEEDED
  A guard that fires on the corrected text gets switched off, so patterns need a
  way to tell an assertion from a discussion of one:

  historicalOk    The corrected page often has to explain what the old behaviour
                  WAS in order to be useful. "WooCommerce used to enqueue it on
                  every page" is the fix, not the bug. When a historical marker
                  sits just before the match, the match is allowed.

  requiresNearby  Sometimes the retired phrasing is legitimate as part of a
                  fuller account. Naming get_refreshed_fragments is fine as long
                  as the page also names the request that actually adds the item.
                  The match is allowed when the page carries the current fact
                  somewhere.

USAGE
  python scripts/retired_claims.py            # report
  python scripts/retired_claims.py --json     # machine-readable
  python scripts/retired_claims.py --list     # what is being guarded, and why

EXIT CODES
  0 clean - 1 a retired claim is back - 2 could not run
"""

from __future__ import annotations

import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "src" / "data" / "retired-claims.json"
SCAN_DIRS = [ROOT / "src" / "app", ROOT / "src" / "components", ROOT / "src" / "data"]
SCAN_SUFFIXES = {".tsx", ".ts", ".md", ".mdx"}

# Files that exist to record what changed. The retired wording is the subject
# matter there, so scanning them would guarantee a false positive.
SKIP_NAMES = {"retired-claims.json", "spec-facts.json"}

# Words that mark prose as describing the past rather than asserting the present.
# Checked in the 90 characters before a match, which comfortably covers the
# clause the verb sits in without reaching the previous sentence.
HISTORICAL_MARKERS = (
    "used to", "before that", "prior to", "changed in", "until ",
    "no longer", "previously", "up to woocommerce", "in earlier",
    "older versions", "historically", "was enqueued", "at the time",
)
LOOKBACK = 90


def load_registry() -> list[dict]:
    try:
        raw = json.loads(REGISTRY.read_text(encoding="utf-8"))
    except FileNotFoundError:
        print(f"retired_claims: registry not found at {REGISTRY}", file=sys.stderr)
        raise SystemExit(2)
    except json.JSONDecodeError as exc:
        print(f"retired_claims: registry is not valid JSON -- {exc}", file=sys.stderr)
        raise SystemExit(2)

    claims = raw.get("claims", [])
    for claim in claims:
        for field in ("id", "pattern", "retiredAssertion", "whatChanged"):
            if not claim.get(field):
                print(
                    f"retired_claims: entry {claim.get('id', '<unnamed>')} is missing "
                    f"'{field}'. Every entry must say what it forbids and why.",
                    file=sys.stderr,
                )
                raise SystemExit(2)
        try:
            claim["_regex"] = re.compile(claim["pattern"], re.IGNORECASE | re.DOTALL)
        except re.error as exc:
            print(
                f"retired_claims: entry {claim['id']} has an invalid pattern -- {exc}",
                file=sys.stderr,
            )
            raise SystemExit(2)
    return claims


def iter_files():
    for base in SCAN_DIRS:
        if not base.exists():
            continue
        for path in base.rglob("*"):
            if (
                path.is_file()
                and path.suffix in SCAN_SUFFIXES
                and path.name not in SKIP_NAMES
            ):
                yield path


def line_of(text: str, index: int) -> int:
    return text.count("\n", 0, index) + 1


def check_file(path: pathlib.Path, claims: list[dict]) -> list[dict]:
    text = path.read_text(encoding="utf-8", errors="replace")
    hits: list[dict] = []

    for claim in claims:
        nearby = claim.get("requiresNearby") or []
        # Evaluated once per file: the current fact may sit anywhere on the page.
        satisfied = any(token.lower() in text.lower() for token in nearby)

        for match in claim["_regex"].finditer(text):
            if claim.get("historicalOk"):
                window = text[max(0, match.start() - LOOKBACK):match.start()].lower()
                if any(marker in window for marker in HISTORICAL_MARKERS):
                    continue
            if nearby and satisfied:
                continue
            hits.append({
                "claim": claim["id"],
                "vendor": claim.get("vendor", ""),
                "file": str(path.relative_to(ROOT)).replace("\\", "/"),
                "line": line_of(text, match.start()),
                "matched": " ".join(match.group(0).split())[:120],
                "retiredAssertion": claim["retiredAssertion"],
                "whatChanged": claim["whatChanged"],
                "supersededBy": claim.get("supersededBy"),
                "source": claim.get("source", ""),
            })
    return hits


def main() -> int:
    args = set(sys.argv[1:])
    claims = load_registry()

    if "--list" in args:
        print(f"Guarding {len(claims)} retired claims\n")
        for claim in claims:
            print(f"  {claim['id']}  [{claim.get('vendor', '')}]")
            print(f"    was:  {claim['retiredAssertion']}")
            print(f"    now:  {claim['whatChanged']}")
            print(f"    fixed {claim.get('correctedOn', '?')}  {claim.get('source', '')}\n")
        return 0

    hits: list[dict] = []
    scanned = 0
    for path in iter_files():
        scanned += 1
        hits.extend(check_file(path, claims))

    if "--json" in args:
        print(json.dumps({"scanned": scanned, "guarded": len(claims), "hits": hits}, indent=2))
        return 1 if hits else 0

    if not hits:
        print(f"retired_claims: clean. {len(claims)} retired claims guarded across {scanned} files.")
        return 0

    print(f"retired_claims: {len(hits)} RETIRED CLAIM(S) BACK IN THE PROSE\n")
    for hit in hits:
        print(f"  {hit['file']}:{hit['line']}")
        print(f"    matched:  {hit['matched']}")
        print(f"    retired:  {hit['retiredAssertion']}")
        print(f"    because:  {hit['whatChanged']}")
        if hit["supersededBy"]:
            print(f"    truth is in spec-facts.json under: {hit['supersededBy']}")
        if hit["source"]:
            print(f"    source:   {hit['source']}")
        print()
    print("Each of these was already found to be false and removed once. Fix the prose.")
    print("If the vendor has changed behaviour BACK, update src/data/retired-claims.json")
    print("and re-verify the source before deleting the entry.")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
