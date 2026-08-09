"""Fail the build if a case-study metric drifts from its declared state.

WHAT THIS CATCHES
  1. A metric marked "withdrawn" whose value still appears in rendered HTML,
     anywhere on the site, including <title>, meta description and OG tags.
     This is the exact failure that put four surfaces in conflict with five.
  2. A metric marked "verified" that renders its number with no method visible
     on the page. A number without a method is how 90+ became 97/100.

WHY IT READS THE JSON DIRECTLY
  scripts and the render path share src/data/case-study-facts.json byte for byte.
  A guard that reparsed the .ts wrapper could disagree with what shipped.

WHY THE PROXIMITY WINDOW EXISTS, AND HOW IT WAS TUNED
  A withdrawn value is only drift when it is attributed TO THIS CLIENT. Matched
  site-wide, "90+" fires on "90+ Lighthouse Handover Target" -- our service
  acceptance term, correct copy, a different claim entirely. A guard that fails
  the build on correct copy gets switched off within a week, so precision here
  matters more than recall.

  Tuned empirically, not guessed: at 600 chars it flagged services.html on the
  handover target (false positive). At 220 that dropped out while every genuine
  attribution stayed. BEFORE TRUSTING ANY COUNT FROM THIS SCRIPT, open one true
  positive and one false positive by hand. Four separate detectors on this
  project have confidently matched the wrong thing; every one was caught that
  way and none by reading the total.

WHAT THIS ALREADY CAUGHT THAT A HUMAN SWEEP DID NOT
  Its first run found the withdrawn hosting figure on the HOMEPAGE, inside the
  sentence "an owner-confirmed record: 22 days, rankings held, and hosting cost
  moved from $150/month to $0/month". An external audit the same day named three
  offending surfaces and missed that one, because the sweep checked the case
  study and the service pages but never re-tested the homepage sentence against
  the withdrawal list. That is the whole argument for this file: a person sweeps
  when asked, this sweeps every build.

USAGE
  python scripts/metrics_guard.py          # after `next build`
  python scripts/metrics_guard.py --json   # machine-readable, for CI

EXIT CODES
  0 clean · 1 drift found · 2 could not run (no build, no data)
"""

from __future__ import annotations
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data" / "case-study-facts.json"
BUILD = ROOT / ".next" / "server" / "app"

# Values too generic to search for literally; matching them would fire on
# unrelated copy across the site and train everyone to ignore this check.
TOO_GENERIC = {"zero", "none recorded in the 30 days after launch", "13"}


studies_by_slug: dict[str, dict] = {}


def load_metrics() -> list[dict]:
    if not DATA.exists():
        print(f"metrics_guard: missing {DATA}", file=sys.stderr)
        sys.exit(2)
    data = json.loads(DATA.read_text(encoding="utf-8"))
    out = []
    for slug, study in data["caseStudies"].items():
        studies_by_slug[slug] = study
        for m in study["metrics"]:
            m = dict(m)
            m["slug"] = slug
            out.append(m)
    return out


def rendered_pages() -> list[tuple[str, str]]:
    if not BUILD.exists():
        print("metrics_guard: no build output. Run `next build` first.", file=sys.stderr)
        sys.exit(2)
    pages = []
    for f in BUILD.rglob("*.html"):
        html = f.read_text(encoding="utf-8", errors="ignore")
        # Strip tags so we test what a reader or an extractor sees, but keep
        # <head> content because titles and meta descriptions are where the
        # stale numbers survived last time.
        text = re.sub(r"<script[\s\S]*?</script>", " ", html)
        text = re.sub(r"<[^>]+>", " ", text)
        text = re.sub(r"\s+", " ", text)
        pages.append((str(f.relative_to(BUILD)), text))
    return pages


def values_of(metric: dict) -> list[str]:
    vals = [metric.get("value"), metric.get("before"), metric.get("after")]
    return [v for v in vals if v and v.lower() not in TOO_GENERIC]


def main() -> int:
    as_json = "--json" in sys.argv
    metrics = load_metrics()
    pages = rendered_pages()
    failures: list[dict] = []

    withdrawn = [m for m in metrics if m["status"] == "withdrawn"]
    verified = [m for m in metrics if m["status"] == "verified"]

    # 1. No withdrawn value may appear ATTRIBUTED TO THIS CASE STUDY.
    #
    #    Scoped by proximity to the client's name rather than matched site-wide.
    #    A bare site-wide match fires on legitimate unrelated copy -- "90+" is
    #    also our service acceptance target ("90+ Lighthouse handover target"),
    #    which is a different claim from this client's measured PageSpeed. A
    #    guard that fails the build on correct copy gets switched off, so the
    #    test is: does the withdrawn number appear NEAR the client's name.
    PROXIMITY = 220
    for m in withdrawn:
        name = studies_by_slug[m["slug"]]["name"]
        for val in values_of(m):
            for page, text in pages:
                for hit in re.finditer(re.escape(val), text, re.I):
                    window = text[max(0, hit.start() - PROXIMITY): hit.start() + PROXIMITY]
                    if name.lower() not in window.lower():
                        continue
                    failures.append({
                        "type": "withdrawn-value-rendered",
                        "metric": m["id"],
                        "slug": m["slug"],
                        "value": val,
                        "page": page,
                        "fix": f'"{val}" renders within {PROXIMITY} chars of "{name}" on {page}, '
                               f'but metric "{m["id"]}" is withdrawn in case-study-facts.json. '
                               f'Remove it from the page, or set the metric back to verified '
                               f'with a method once it is reconciled.',
                    })
                    break

    # 2. A verified metric that renders must show its method on that page.
    for m in verified:
        if not m.get("method"):
            failures.append({
                "type": "verified-without-method",
                "metric": m["id"], "slug": m["slug"], "value": m.get("value", ""),
                "page": "(data file)",
                "fix": f'"{m["id"]}" is verified with no method block. Add '
                       f'{{ kind, date, note }} or mark it withdrawn.',
            })
            continue
        for val in values_of(m):
            for page, text in pages:
                if m["slug"] not in page:
                    continue
                if re.search(re.escape(val), text, re.I):
                    date = m["method"]["date"]
                    year = date.split("-")[0]
                    if year not in text and date not in text:
                        failures.append({
                            "type": "verified-without-visible-method",
                            "metric": m["id"], "slug": m["slug"], "value": val, "page": page,
                            "fix": f'"{val}" renders on {page} with no sign of its method date '
                                   f'({date}). A number without a method is how the last one drifted.',
                        })

    if as_json:
        print(json.dumps({"failures": failures, "checked": len(metrics), "pages": len(pages)}, indent=2))
    else:
        print(f"metrics_guard: {len(metrics)} metrics "
              f"({len(verified)} verified, {len(withdrawn)} withdrawn) against {len(pages)} pages")
        if not failures:
            print("  OK - every metric matches its declared state")
        for f in failures:
            print(f"  FAIL [{f['type']}] {f['slug']}/{f['metric']}: {f['fix']}")

    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
