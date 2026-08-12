"""Find prose sentences typed into more than one source file.

WHAT THIS CATCHES
  The same sentence hand-written into several files, which is how facts drift.
  Every drift incident on this project started here:
    - a BAA sentence in company-facts.ts, ai-info/page.tsx and llms-txt.ts, so
      correcting it meant finding all three
    - a case-study roster in CaseStudyGrid.tsx and services/ecommerce, where the
      copy grew a fabricated PageSpeed of 95
    - performance metrics as prose in 25+ places, which is why
      case-study-facts.json exists

WHAT IT DELIBERATELY DOES NOT CATCH
  Rendered duplication. A sentence appearing on 100 pages because 100 pages
  import one component is the GOAL, not the bug. This reads source only.

THE FILTER, AND WHY EACH RULE IS THERE
  The first version of this check returned 142 findings and every one was
  garbage: Tailwind class strings and JSX scaffolding. The regex used [^"] to
  match string contents, which also matches newlines, so it swallowed whole
  blocks of code between two unrelated quote marks.

  So a candidate must now:
    - contain no newline           (kills multi-line code blocks)
    - contain no { } < > = $       (kills JSX, template literals, expressions)
    - have 8+ spaces               (class strings are long with few spaces)
    - match no Tailwind token      (flex, rounded, text-, hover:, md: ...)
    - start with a capital or quote and end in . ? !   (looks like a sentence)

  BEFORE TRUSTING A COUNT FROM THIS SCRIPT, read ten findings. Nine detectors on
  this project have confidently matched the wrong thing, and every one was caught
  by reading output rather than totals.

USAGE
  python scripts/dupe_prose.py            # report
  python scripts/dupe_prose.py --json     # machine-readable
  python scripts/dupe_prose.py --min 3    # only sentences in 3+ files

EXIT CODES
  0 always. This is a report, not a gate: some duplication is a deliberate
  trade-off, and a check that fails the build on a judgement call gets switched
  off. Use it when auditing, not on every commit.
"""

from __future__ import annotations
import json
import pathlib
import re
import sys
from collections import defaultdict

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "src"

TAILWIND = re.compile(
    r"\b(flex|grid|rounded|text-|bg-|border|px-|py-|pt-|pb-|mt-|mb-|mx-|my-|gap-|"
    r"hover:|focus:|sm:|md:|lg:|xl:|font-|leading-|tracking-|w-|h-|max-w-|min-h-|"
    r"shadow|opacity|absolute|relative|inline-|justify-|items-)"
)
SENTENCE_START = re.compile(r"^[A-Z\"']")
STRING = re.compile(r'"([^"\n]{70,600})"' r"|'([^'\n]{70,600})'")


def is_prose(value: str) -> bool:
    if any(c in value for c in "{}<>=$"):
        return False
    if value.count(" ") < 8:
        return False
    if TAILWIND.search(value):
        return False
    if not SENTENCE_START.match(value):
        return False
    return value.rstrip().endswith((".", "?", "!"))


def main() -> int:
    as_json = "--json" in sys.argv
    minimum = 2
    if "--min" in sys.argv:
        minimum = int(sys.argv[sys.argv.index("--min") + 1])

    seen: dict[str, set[str]] = defaultdict(set)
    files = list(SRC.rglob("*.tsx")) + list(SRC.rglob("*.ts"))
    for path in files:
        text = path.read_text(encoding="utf-8", errors="ignore")
        for match in STRING.finditer(text):
            value = (match.group(1) or match.group(2) or "").strip()
            if is_prose(value):
                seen[value].add(str(path.relative_to(ROOT)).replace("\\", "/"))

    dupes = {k: sorted(v) for k, v in seen.items() if len(v) >= minimum}
    ranked = sorted(dupes.items(), key=lambda kv: (-len(kv[1]), -len(kv[0])))

    if as_json:
        print(json.dumps(
            {"scanned": len(files), "duplicated": len(dupes),
             "findings": [{"files": v, "sentence": k} for k, v in ranked]},
            indent=2))
    else:
        print(f"dupe_prose: {len(files)} source files, "
              f"{len(dupes)} sentences appearing in {minimum}+ of them")
        if not dupes:
            print("  OK - no prose sentence is typed into more than one file")
        for sentence, in_files in ranked:
            print(f"\n  [{len(in_files)}x] {sentence[:130]}")
            for f in in_files:
                print(f"        {f}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
