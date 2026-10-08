"""Fail the build when a third-party platform spec has gone stale.

WHAT THIS CATCHES
  A vendor's price or limit that we published, that nobody has re-checked since,
  and that is now presented to readers and answer engines as current fact.

WHY IT EXISTS
  49% of this site's search impressions are year-qualified queries -- "vercel
  free tier bandwidth 100gb 2025", "...limit 100gb 2026". In the Vercel cluster
  it is 69%. Half the demand is explicitly asking AS OF WHEN. A site that
  answers those queries with an undated, unmaintained number is wrong twice: it
  fails the query intent, and eventually it is simply false.

  These are OTHER COMPANIES' numbers. We do not control them, we are not told
  when they change, and the only defence is a clock.

WHY WARN THEN FAIL, RATHER THAN FAIL IMMEDIATELY
  A hard failure the morning a fact crosses a threshold would block an unrelated
  urgent deploy for a reason nobody introduced that day. So: WARN at 90 days,
  which is a nudge with a whole quarter of slack, and FAIL at 180, by which
  point the number has been unverified for half a year and publishing it is a
  claim we cannot support. The window is deliberately generous because a guard
  that cries wolf gets switched off -- the same argument as metrics_guard's
  proximity tuning.

REVIEW TIERS (added 4 Oct 2026)
  One clock for every fact was the gap. Vercel changed three facts between 8
  and 16 Sep 2026, 37 to 45 days after they were last read, and this guard
  stayed green because 90 days had not passed. So an entry can now carry
  "reviewDays": it WARNS at reviewDays and FAILS at twice that. Entries without
  it use the file default (90 for specs, so 90/180 as before). The 1:2 ratio is
  the one the original 90/180 used: a warning always leaves as long again to
  re-read the page before the build blocks.

  Tiers set on 4 Oct 2026, one reason each:
    30  vercel-*                 The Vercel cluster drives most of the site's
                                 impressions, 69% of its queries ask "as of
                                 when", and Vercel changed three of these facts
                                 in Sep 2026 without notice. Re-reading when
                                 the warning fires means a change like the
                                 Flat Rate CDN switch sits unnoticed for about
                                 a month at most, not three.
    30  emdash-current-version,  EmDash shipped 1.0 on 28 Sep 2026 and 1.1.0
        emdash-registry-plugin-  three days later; a release number and a
        count                    registry count on a weeks-old product move
                                 weekly.
    60  shopify-plan-*           List prices rendered on the Shopify headless
                                 and store-speed posts, blog.ts and the
                                 services data; shopify.com/pricing
                                 geo-redirects, so a re-read can come back in
                                 the wrong currency without anyone noticing.
    60  shopify-oxygen-hosting,  Which plans include hosting and what the
        shopify-headless-        Headless channel costs are pricing terms, on
        channel-price            the same pages as the plan prices.
    60  webflow-*-price, the     Webflow plan and add-on prices. Webflow sells
        three webflow add-ons    Site and Workspace plans separately and the
                                 help article for monthly prices blocks
                                 fetchers, so these need a human re-read often.
    60  wix-headless-price       A vendor's entry-price wording ("free to
                                 start") is marketing copy and changes with it.
   365  shopify-hydrogen-license A licence; changes would be announced.
   365  emdash-1-0-release-date  A past release date does not change.
   365  woocommerce-blocks-      A past default ("from 8.3") does not change.
        checkout-default
   365  google-goto-redirect-    A dated confirmation of a past event.
        confirmed
  Everything else stays on the 90-day default: API scopes, platform limits,
  CVE scores, dated statistics and feature descriptions.

  There are no Squarespace or GoHighLevel plan prices in the registry. Those
  prices are typed into post prose, where scripts/stamp_freshness.py is the
  only thing that looks at their "checked <date>" stamps.

RESEARCH FINDINGS (src/data/research-facts.json)
  Watched by the same loop with a 180-day default (fail at 360). A published
  study does not decay like a price: it is superseded when the next edition
  appears, and the ones cited here are yearly. Twice a year is often enough to
  notice a new edition; a year unchecked is too long to keep calling it the
  latest. The two W3Techs adoption figures carry "reviewDays": 90 because
  W3Techs updates its survey continuously, so the number on the page drifts.

RE-VERIFYING
  Open the `source` URL, read the current value off the vendor's own page, and
  update BOTH `value` and `verifiedAt`. Never bump the date without re-reading
  the page: a verifiedAt that moves without the value being checked is worse
  than a stale one, because it launders a guess as a verification.

USAGE
  python scripts/spec_freshness.py            # report
  python scripts/spec_freshness.py --json     # machine-readable
  python scripts/spec_freshness.py --today 2027-03-01   # test the thresholds

  The report also lists entries that no file under src/ references. They are
  still checked, but they protect nothing a reader sees, so the fresh count
  overstates coverage by that many.

EXIT CODES
  0 fresh (warnings still print) - 1 something is past the fail threshold -
  2 could not run
"""

from __future__ import annotations
import datetime as dt
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "src"

# (kind, file, top-level key, default reviewDays). Warn at reviewDays, fail at
# FAIL_MULTIPLIER times it. The spec default keeps the original 90/180.
SOURCES = [
    ("spec", SRC / "data" / "spec-facts.json", "specs", 90),
    ("research", SRC / "data" / "research-facts.json", "findings", 180),
]
FAIL_MULTIPLIER = 2

# Files that can reference a fact id. The JSON files themselves are not scanned.
REF_SUFFIXES = {".ts", ".tsx", ".js", ".jsx", ".mjs"}


def describe(kind: str, fact: dict) -> str:
    if kind == "spec":
        return f'{fact.get("vendor", "?")} {fact.get("label", "?")}'
    return f'{fact.get("study", "?")} ({fact.get("publisher", "?").split(",")[0]})'


def review_days(fact_id: str, fact: dict, default: int) -> tuple[int, str | None]:
    """The entry's own reviewDays, or the file default. Returns (days, error)."""
    raw = fact.get("reviewDays", default)
    if isinstance(raw, bool) or not isinstance(raw, int) or raw <= 0:
        return default, (f'"{fact_id}" has reviewDays {raw!r}. It must be a positive '
                         f'whole number of days, or left out to use the default ({default}).')
    return raw, None


def unreferenced(ids: list[str]) -> list[str]:
    """Ids that no source file under src/ mentions in quotes."""
    texts = []
    for path in SRC.rglob("*"):
        if path.suffix in REF_SUFFIXES and path.is_file():
            try:
                texts.append(path.read_text(encoding="utf-8", errors="ignore"))
            except OSError:
                continue
    blob = "\n".join(texts)
    return [i for i in ids
            if f'"{i}"' not in blob and f"'{i}'" not in blob and f"`{i}`" not in blob]


def main() -> int:
    as_json = "--json" in sys.argv

    today = dt.date.today()
    if "--today" in sys.argv:
        today = dt.date.fromisoformat(sys.argv[sys.argv.index("--today") + 1])

    warnings, failures, counts, tiers, unused = [], [], {}, {}, {}
    closest = None  # (days left before warning, id)

    for kind, path, key, default in SOURCES:
        if not path.exists():
            print(f"spec_freshness: missing {path}", file=sys.stderr)
            return 2
        facts = json.loads(path.read_text(encoding="utf-8"))[key]
        counts[kind] = len(facts)
        unused[kind] = unreferenced(list(facts))

        for fact_id, s in facts.items():
            warn_days, err = review_days(fact_id, s, default)
            if err:
                failures.append({"id": fact_id, "kind": kind, "age": None, "fix": err})
                continue
            fail_days = warn_days * FAIL_MULTIPLIER
            tiers.setdefault((kind, warn_days), 0)
            tiers[(kind, warn_days)] += 1

            for required in ("value", "verifiedAt", "source"):
                if not s.get(required):
                    failures.append({
                        "id": fact_id, "kind": kind, "age": None,
                        "fix": f'"{fact_id}" has no {required}. Every published third-party '
                               f'fact needs a value, a verified-at date and the source URL.',
                    })
                    break
            else:
                age = (today - dt.date.fromisoformat(s["verifiedAt"])).days
                entry = {
                    "id": fact_id, "kind": kind, "age": age,
                    "warnDays": warn_days, "failDays": fail_days,
                    "value": s["value"], "source": s["source"],
                    "fix": f'"{describe(kind, s)}" = {s["value"]}, last verified '
                           f'{s["verifiedAt"]} ({age} days ago; this entry warns at '
                           f'{warn_days}d and fails at {fail_days}d). Re-read {s["source"]}, '
                           f'then update BOTH value and verifiedAt.',
                }
                if kind == "spec":
                    entry["vendor"] = s.get("vendor")
                if age >= fail_days:
                    failures.append(entry)
                elif age >= warn_days:
                    warnings.append(entry)
                else:
                    left = warn_days - age
                    if closest is None or left < closest[0]:
                        closest = (left, fact_id)

    if as_json:
        print(json.dumps({
            "today": today.isoformat(), "warnings": warnings, "failures": failures,
            "checked": sum(counts.values()), "counts": counts,
            "tiers": [{"kind": k, "warnDays": d, "failDays": d * FAIL_MULTIPLIER, "entries": n}
                      for (k, d), n in sorted(tiers.items())],
            "unreferenced": unused,
        }, indent=2))
    else:
        print(f"spec_freshness: {counts['spec']} third-party specs and "
              f"{counts['research']} research findings, as of {today}")
        tier_text = ", ".join(
            f"{n} {k} at {d}/{d * FAIL_MULTIPLIER}d" for (k, d), n in sorted(tiers.items()))
        print(f"  tiers (warn/fail): {tier_text}")
        if not warnings and not failures:
            if closest:
                print(f"  OK - every fact is inside its review window "
                      f"(next to warn: {closest[1]}, in {closest[0]}d)")
            else:
                print("  OK - every fact is inside its review window")
        for w in warnings:
            print(f"  WARN {w['id']}: {w['fix']}")
        for f in failures:
            print(f"  FAIL {f['id']}: {f['fix']}")
        for kind, ids in unused.items():
            if ids:
                print(f"  NOTE {len(ids)} {kind} entries are not referenced by any file "
                      f"under src/, so they protect nothing a reader sees: {', '.join(ids)}")

    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
