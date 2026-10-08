"""Warn when a hand-typed "checked <date>" stamp in a page has grown old.

WHAT THIS CATCHES
  Dates typed straight into prose to say when something was last looked at:
  "prices checked August 2, 2026", "Reviewed July 24, 2026", "re-checked on
  13 September 2026", "as of October 2026". Each one tells the reader that the
  sentence around it was true on that day. Nothing else in the build reads
  them, so they age silently.

WHY IT EXISTS
  spec_freshness.py watches the facts in src/data/spec-facts.json and
  research-facts.json. Most third-party facts on this site are not there: on
  4 Oct 2026 only 15 of the 88 blog page files read either registry, while
  the audit that day counted 37 rendered posts carrying dates like these,
  typed by hand. The shopify-app-costs
  post, for one, prices 13 apps "on August 2, 2026" in prose only. This is the
  cheap half of the fix: it can't tell whether the fact is still true, but it
  can tell when the date next to it is old.

WHAT IT IS NOT
  Not a fact-checker. A stamp that is old may still be right; re-read the
  source, then update the date (or move the fact into spec-facts.json and
  render it with spec(), which puts it on spec_freshness.py's clock). Some
  matches are event dates rather than check dates ("as of 8 September 2026,
  Vercel..."). Those will show up here once they are old; ignore them.

WHY IT ONLY WARNS
  Many stamps are legitimately older than the threshold: a dated post can say
  what was true on the day it was written. Failing the build on those would get
  this switched off. It exits 0 and prints a count. When the old stamps have
  been worked through, run it with --strict (exit 1 on any old stamp) and add
  it to guard:all.

DATES
  Month precision ("as of August 2026") is read as the last day of that month,
  so a month stamp is never reported as older than it could be.

USAGE
  python scripts/stamp_freshness.py               # report
  python scripts/stamp_freshness.py --days 60     # different threshold
  python scripts/stamp_freshness.py --today 2027-01-01
  python scripts/stamp_freshness.py --json
  python scripts/stamp_freshness.py --strict      # exit 1 on any old stamp

EXIT CODES
  0 ran (warnings still print) - 1 only with --strict and an old stamp -
  2 could not run
"""

from __future__ import annotations
import calendar
import datetime as dt
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
TARGETS = ["src/app/**/page.tsx", "src/data/blog.ts"]
DEFAULT_DAYS = 90
TOP = 10

MONTHS = {name.lower(): i for i, name in enumerate(calendar.month_name) if name}
MONTHS.update({name.lower(): i for i, name in enumerate(calendar.month_abbr) if name})
MONTHS["sept"] = 9
MONTH_RE = r"(?:" + "|".join(sorted(MONTHS, key=len, reverse=True)) + r")\.?"

# Whitespace in JSX can be a real space, a newline, or {" "}.
GAP = r'(?:\s|\{\s*"\s*"\s*\})+'

KEYWORD = r"\b(?:re-?checked|checked|verified|reviewed|as\s+of)"
# Short forms: "checked August 2", "checked it on", "re-checked on".
# Long form, only before "on": "checked against the official pages linked above on".
FILLER = (
    rf"(?:(?:{GAP}(?:it|them|this|these|again))?(?:{GAP}(?:on|in))?"
    rf"|{GAP}(?:against|the)\b[^.;:<>{{}}]{{0,60}}?{GAP}on)"
)
DATE = (
    rf"(?P<mdy>(?P<m1>{MONTH_RE}){GAP}(?P<d1>\d{{1,2}}),?{GAP}(?P<y1>20\d\d))"
    rf"|(?P<dmy>(?P<d2>\d{{1,2}}){GAP}(?P<m2>{MONTH_RE}),?{GAP}(?P<y2>20\d\d))"
    rf"|(?P<iso>(?P<y3>20\d\d)-(?P<m3>\d\d)-(?P<d3>\d\d))"
    rf"|(?P<my>(?P<m4>{MONTH_RE}){GAP}(?P<y4>20\d\d))"
)
STAMP = re.compile(rf"{KEYWORD}{FILLER}{GAP}(?:{DATE})\b", re.IGNORECASE)


def month_num(token: str) -> int:
    return MONTHS[token.lower().rstrip(".")]


def parse(m: re.Match) -> tuple[dt.date, str] | None:
    """The stamp's date and its precision ("day" or "month")."""
    try:
        if m.group("mdy"):
            return dt.date(int(m.group("y1")), month_num(m.group("m1")), int(m.group("d1"))), "day"
        if m.group("dmy"):
            return dt.date(int(m.group("y2")), month_num(m.group("m2")), int(m.group("d2"))), "day"
        if m.group("iso"):
            return dt.date(int(m.group("y3")), int(m.group("m3")), int(m.group("d3"))), "day"
        if m.group("my"):
            y, mo = int(m.group("y4")), month_num(m.group("m4"))
            return dt.date(y, mo, calendar.monthrange(y, mo)[1]), "month"
    except (ValueError, KeyError):
        return None
    return None


def files() -> list[pathlib.Path]:
    found: set[pathlib.Path] = set()
    for pattern in TARGETS:
        found.update(p for p in ROOT.glob(pattern) if p.is_file())
    return sorted(found)


def tidy(text: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r'\{\s*"\s*"\s*\}', " ", text)).strip()


def main() -> int:
    as_json = "--json" in sys.argv
    strict = "--strict" in sys.argv
    today = dt.date.today()
    days = DEFAULT_DAYS
    try:
        if "--today" in sys.argv:
            today = dt.date.fromisoformat(sys.argv[sys.argv.index("--today") + 1])
        if "--days" in sys.argv:
            days = int(sys.argv[sys.argv.index("--days") + 1])
    except (IndexError, ValueError) as exc:
        print(f"stamp_freshness: bad argument ({exc})", file=sys.stderr)
        return 2

    paths = files()
    if not paths:
        print("stamp_freshness: no files matched " + ", ".join(TARGETS), file=sys.stderr)
        return 2

    stamps, unparsed = [], []
    for path in paths:
        text = path.read_text(encoding="utf-8", errors="ignore")
        rel = path.relative_to(ROOT).as_posix()
        for m in STAMP.finditer(text):
            line = text.count("\n", 0, m.start()) + 1
            parsed = parse(m)
            if parsed is None:
                unparsed.append({"file": rel, "line": line, "text": tidy(m.group(0))})
                continue
            date, precision = parsed
            if precision == "month" and date.replace(day=1) <= today < date:
                date = today  # "as of October 2026" written in October is not future-dated
            stamps.append({
                "file": rel, "line": line, "date": date.isoformat(),
                "precision": precision, "age": (today - date).days,
                "text": tidy(m.group(0)),
            })

    stamps.sort(key=lambda s: (-s["age"], s["file"], s["line"]))
    old = [s for s in stamps if s["age"] >= days]
    future = [s for s in stamps if s["age"] < 0]
    n_files = len({s["file"] for s in stamps})

    if as_json:
        print(json.dumps({
            "today": today.isoformat(), "thresholdDays": days, "stamps": len(stamps),
            "files": n_files, "old": old, "future": future, "unparsed": unparsed,
            "oldest": stamps[:TOP],
        }, indent=2))
    else:
        print(f"stamp_freshness: {len(stamps)} hand-typed date stamps in {n_files} files, "
              f"as of {today} (warn at {days} days, warn only)")
        if old:
            print(f"  {len(old)} stamps are {days}+ days old. Re-read the source, then update "
                  f"the date or move the fact into spec-facts.json:")
            for s in old:
                print(f"  WARN {s['file']}:{s['line']}  {s['age']}d  \"{s['text']}\"")
        else:
            print(f"  OK - none older than {days} days. Oldest {min(TOP, len(stamps))}:")
            for s in stamps[:TOP]:
                print(f"    {s['file']}:{s['line']}  {s['age']}d  \"{s['text']}\"")
        for s in future:
            print(f"  NOTE {s['file']}:{s['line']} is dated in the future: \"{s['text']}\"")
        for u in unparsed:
            print(f"  NOTE {u['file']}:{u['line']} looks like a stamp but the date "
                  f"did not parse: \"{u['text']}\"")

    return 1 if (strict and old) else 0


if __name__ == "__main__":
    sys.exit(main())
