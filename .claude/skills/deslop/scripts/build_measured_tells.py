"""Build references/measured-tells.json from Graphite's published AI Tells data.

Graphite's study pages load their explorer tables from public JSON files
(graphite.io/articles/ai-tells/*.json and /articles/ai-tells-opus-5-5-update/*.json).
This script downloads the model-vs-human files, keeps the tells that are both
strong and recurring, and writes the subset scan.py reads.

Why a subset. The raw lists hold about 1,300 tells per model and include topic
artifacts: Opus 5.5's trigrams include "a website stores" and "reheating
leftovers", which come from the corpus topics, not from how the model writes.
On a site about websites, the first would fire on every page. A tell that turns
up in hundreds of different articles is a habit; one that turns up in twenty is
probably a topic. So each kind needs a minimum ratio AND a minimum article count.

Rerun when Graphite adds a model: add it to MODELS, run, read the diff.

    python .claude/skills/deslop/scripts/build_measured_tells.py
"""

from __future__ import annotations

import json
import math
import pathlib
import urllib.request

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE.parent / "references" / "measured-tells.json"
CACHE = HERE / ".graphite-cache"  # gitignored; delete to force a fresh download

BASE = "https://graphite.io/articles"
MODELS = {
    # key: (label, folder, file stem)
    "claude-opus-5-5": ("Claude Opus 5.5", "ai-tells-opus-5-5-update", "claude-opus-5-5-vs-human"),
    "claude-opus-5": ("Claude Opus 5", "ai-tells", "claude-opus-5-vs-human"),
    "gpt-6-astra": ("GPT-6 Astra", "ai-tells", "gpt-6-astra-vs-human"),
    "gemini-3-1-pro": ("Gemini 3.1 Pro", "ai-tells", "gemini-3-1-pro-preview-vs-human"),
}
# (minimum ratio, minimum distinct articles). Graphite's own floors are 2x and
# 500/250/100/120 articles; these are stricter so a hit is worth a reread.
KEEP = {
    "unigrams": (8.0, 300),
    "bigrams": (10.0, 150),
    "trigrams": (10.0, 80),
    "frames": (8.0, 150),
}
# Dropped after reading the kept lists on 1 Oct 2026. Two kinds: phrases that come
# from the corpus topics ("to minutes until" is recipe text with the numbers
# stripped), and plain procedural wording a site about websites uses correctly
# ("confirm that the", "which pages are"). Add to this rather than lowering KEEP.
EXCLUDE = {
    "a website stores", "ads but they", "certain cookies may", "and reheating leftovers",
    "to minutes until", "long term health", "which pages are", "confirm that the",
    "the platform is", "the platform",
}
# A frame built only from these ("it _ the _ the", "a _ does not") matches most
# English sentences. The first scan of the blog found such frames among the most
# frequent hits on pages that had no stylistic problem there. Keep one only when
# its ratio is overwhelming.
FUNCTION_WORDS = set(
    "a an the and or but nor so yet if then than as at by for from in into of on onto to with "
    "is are was were be been being am do does did not no can could may might must shall should "
    "will would it its this that these those there here what which who whom whose how why when "
    "where all any each every both either neither more most same such one i you he she we they "
    "me him her us them my your his our their".split()
)


def fetch(folder: str, name: str) -> list[dict]:
    CACHE.mkdir(exist_ok=True)
    path = CACHE / f"{folder}__{name}.json"
    if not path.exists():
        url = f"{BASE}/{folder}/{name}.json"
        with urllib.request.urlopen(url, timeout=60) as r:  # noqa: S310 (fixed https host)
            path.write_bytes(r.read())
    return json.loads(path.read_text(encoding="utf-8"))


def ratio(row: dict) -> float:
    s = row["ratio"].replace("×", "").replace("x", "").replace(",", "")
    return math.inf if "∞" in s else float(s)


def main() -> None:
    out = {
        "$source": [
            "Graphite, AI Tells (16 Sep 2026): https://graphite.io/five-percent/research/ai-tells",
            "Graphite, AI Tells: Opus 5.5 Update (1 Oct 2026): https://graphite.io/five-percent/research/ai-tells-opus-5-5-update",
            "Method: 10,000 pre-ChatGPT human web articles vs 10,000 per model on the same topics, one fixed prompt. "
            "ratio = the tell's length-normalised rate in that model's articles / its rate in human articles. "
            "docs = distinct model articles containing it. Frames: '_' is a gap of one to three less common words.",
            "Population ratios, not verdicts. Graphite: 'we do not recommend classifying authorship based on individual tells.'",
        ],
        "$built_with": "scripts/build_measured_tells.py",
        "$keep": KEEP,
        "models": {},
    }
    for key, (label, folder, stem) in MODELS.items():
        model = {"label": label, "tells": [], "themes": [], "features": []}
        for kind, (min_ratio, min_docs) in KEEP.items():
            for row in fetch(folder, f"{stem}-{kind}"):
                if row["side"] != "left" or row["tell"] in EXCLUDE:
                    continue
                r = ratio(row)
                # A frame with two fixed words ("than _ a"), or one made only of
                # function words, matches ordinary sentences; keep those only when
                # strong ("why _ matters" is 92x).
                fixed = row["tell"].replace("_", " ").split()
                weak = len(fixed) < 3 or all(w in FUNCTION_WORDS for w in fixed)
                if kind == "frames" and weak and r < 30:
                    continue
                if r >= min_ratio and row["docs"] >= min_docs:
                    model["tells"].append({
                        "tell": row["tell"], "kind": kind[:-1],
                        "ratio": None if math.isinf(r) else round(r, 1), "docs": row["docs"],
                    })
        model["tells"].sort(key=lambda t: (-(t["ratio"] or 1e9), -t["docs"]))
        model["themes"] = fetch(folder, f"{stem}-themes")
        model["features"] = fetch(folder, f"{stem}-features")
        out["models"][key] = model
        print(f"{label}: {len(model['tells'])} tells kept")
    out["human_themes"] = fetch("ai-tells", "human-aggregated-themes")
    OUT.write_text(json.dumps(out, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"wrote {OUT.relative_to(HERE.parent.parent.parent.parent)} ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
