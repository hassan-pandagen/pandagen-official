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

RE-VERIFYING
  Open the `source` URL, read the current value off the vendor's own page, and
  update BOTH `value` and `verifiedAt`. Never bump the date without re-reading
  the page: a verifiedAt that moves without the value being checked is worse
  than a stale one, because it launders a guess as a verification.

USAGE
  python scripts/spec_freshness.py            # report
  python scripts/spec_freshness.py --json     # machine-readable
  python scripts/spec_freshness.py --today 2027-03-01   # test the thresholds

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
DATA = ROOT / "src" / "data" / "spec-facts.json"

WARN_DAYS = 90
FAIL_DAYS = 180


def main() -> int:
    as_json = "--json" in sys.argv

    today = dt.date.today()
    if "--today" in sys.argv:
        today = dt.date.fromisoformat(sys.argv[sys.argv.index("--today") + 1])

    if not DATA.exists():
        print(f"spec_freshness: missing {DATA}", file=sys.stderr)
        return 2

    specs = json.loads(DATA.read_text(encoding="utf-8"))["specs"]

    warnings, failures = [], []
    for spec_id, s in specs.items():
        for required in ("value", "verifiedAt", "source"):
            if not s.get(required):
                failures.append({
                    "id": spec_id, "age": None,
                    "fix": f'"{spec_id}" has no {required}. Every published third-party '
                           f'spec needs a value, a verified-at date and the vendor URL.',
                })
                break
        else:
            age = (today - dt.date.fromisoformat(s["verifiedAt"])).days
            entry = {
                "id": spec_id, "age": age, "vendor": s["vendor"],
                "value": s["value"], "source": s["source"],
                "fix": f'"{s["vendor"]} {s["label"]}" = {s["value"]}, last verified '
                       f'{s["verifiedAt"]} ({age} days ago). Re-read {s["source"]}, then '
                       f'update BOTH value and verifiedAt.',
            }
            if age >= FAIL_DAYS:
                failures.append(entry)
            elif age >= WARN_DAYS:
                warnings.append(entry)

    if as_json:
        print(json.dumps({"today": today.isoformat(), "warnings": warnings,
                          "failures": failures, "checked": len(specs)}, indent=2))
    else:
        print(f"spec_freshness: {len(specs)} third-party specs, as of {today} "
              f"(warn {WARN_DAYS}d / fail {FAIL_DAYS}d)")
        if not warnings and not failures:
            oldest = max(((today - dt.date.fromisoformat(s["verifiedAt"])).days
                          for s in specs.values() if s.get("verifiedAt")), default=0)
            print(f"  OK - every spec verified within {WARN_DAYS} days (oldest: {oldest}d)")
        for w in warnings:
            print(f"  WARN {w['id']}: {w['fix']}")
        for f in failures:
            print(f"  FAIL {f['id']}: {f['fix']}")

    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
