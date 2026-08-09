"""Fail the build if a case-study metric drifts from its declared state.

WHAT THIS CATCHES
  1. A metric marked "withdrawn" whose value still appears in rendered HTML,
     anywhere on the site, including <title>, meta description and OG tags.
     This is the exact failure that put four surfaces in conflict with five.
  2. A withdrawn metric's LABEL rendering next to a numeral. Check 1 knows the
     real values; it is blind to an INVENTED one. See the note on check 2 below
     for the card that shipped "95" and passed this guard cleanly.
  3. A metric marked "verified" that renders its number with no method visible
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

    # 2. A withdrawn metric's LABEL may not render next to a numeral.
    #
    #    Check 1 searches for the real withdrawn values leaking. It cannot catch
    #    an INVENTED one. On 10 Aug 2026 /services/ecommerce rendered a
    #    MyCustomPatches card with PageSpeed "95" -- a number that was never a
    #    measurement of anything, sitting beside two tiles reading "Withdrawn".
    #    It matched nothing on the withdrawn-values list, so the guard passed it,
    #    and the same page carried our sentence promising these figures are "not
    #    stated anywhere on this site".
    #
    #    So this checks the shape instead of the value: if a withdrawn metric's
    #    label appears near the client's name, no digit may appear beside it.
    #    An em-dash is the only correct rendering of an absent figure.
    #    A stat tile flattens to "<value> <caption>", so the value is whatever
    #    sits immediately BEFORE the caption:
    #        "95 PageSpeed Withdrawn Load Time"   <- both failures, one tile apart
    #        "— PageSpeed Withdrawn Load Time"    <- pagespeed correct, load time not
    #    Tuned to 16 chars deliberately. At 60 it reported the digits from the
    #    NEXT CLIENT'S card, naming '92' and '145+' on a page whose actual defect
    #    was '95'. Right page, wrong evidence, which is worse than silence
    #    because it sends the reader to the wrong component.
    VALUE_SLOT = 16
    for m in withdrawn:
        name = studies_by_slug[m["slug"]]["name"]
        label = m.get("label")
        if not label:
            continue
        # A caption is often the label minus its qualifier: the facts file says
        # "Mobile PageSpeed" and the tile says "PageSpeed".
        captions = {label}
        head, _, tail = label.partition(" ")
        if tail and head.lower() in {"mobile", "desktop", "average", "median"}:
            captions.add(tail)

        for page, text in pages:
            hit_found = False
            # Anchor on the card's DOMAIN, not the client's name.
            #
            # Three anchors were tried against real output before this one held:
            #   proximity to the name  -> reported Panda Patches' 92 as this
            #                             client's PageSpeed on a four-card grid
            #   forward window on name -> matched "WordPress 3.8s Load Time", a
            #                             generic illustration, and the "90+
            #                             PageSpeed" acceptance target
            #   forward window on URL  -> lands 205 chars from the real defect
            #                             and nothing else
            # The domain appears in the card and essentially nowhere else, which
            # is exactly the property an anchor needs.
            #
            # KNOWN LIMIT, on purpose: pages that render figures without the
            # domain (/work, the homepage) are not covered by THIS check. They
            # are still covered by check 1, which knows the real values. Narrow
            # and right beats broad and noisy -- a guard that fires on correct
            # copy gets switched off, and then it catches nothing at all.
            url = studies_by_slug[m["slug"]].get("url")
            if not url:
                continue
            CARD = 600
            regions = [(m0.end(), text[m0.end(): m0.end() + CARD])
                       for m0 in re.finditer(re.escape(url), text, re.I)]
            for caption in captions:
                if hit_found:
                    break
                for offset, region in regions:
                    hit = re.search(re.escape(caption), region, re.I)
                    if not hit:
                        continue
                    slot = region[max(0, hit.start() - VALUE_SLOT): hit.start()]
                    digits = [d for d in re.findall(r"(?<![\w-])\d[\d.,]*\+?(?![\w-])", slot)
                              if not re.fullmatch(r"20\d\d", d)]
                    # "Withdrawn" is a status, never a measurement. Rendered in a
                    # slot sized for a number it reads as one.
                    word_as_value = re.search(r"\bwithdrawn\b\s*$", slot, re.I)
                    if not digits and not word_as_value:
                        continue
                    shown = ", ".join(digits) if digits else "the word 'Withdrawn'"
                    failures.append({
                        "type": "withdrawn-label-beside-number",
                        "metric": m["id"], "slug": m["slug"], "value": shown,
                        "page": page,
                        "fix": f'"{caption}" on {page} renders {shown} as its value, near '
                               f'"{name}", but metric "{m["id"]}" is withdrawn. An absent figure '
                               f'renders as an em-dash. If that number is real it belongs in '
                               f'case-study-facts.json with a method, not in a component.',
                    })
                    hit_found = True
                    break

    # 3. A verified metric that renders must show its method on that page.
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
