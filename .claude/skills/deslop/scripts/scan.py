"""Measure a draft against Graphite's measured AI tells and human style baselines.

    python .claude/skills/deslop/scripts/scan.py draft.md
    python .claude/skills/deslop/scripts/scan.py http://localhost:3001/blog/wix-too-slow
    python .claude/skills/deslop/scripts/scan.py --list urls.txt --rank
    git log -1 --format=%B | python .claude/skills/deslop/scripts/scan.py -

What it reports, per input:
  1. Style numbers next to the human and model averages from Graphite's corpus:
     sentence length and its spread, word length, vocabulary variety (MTLD),
     commas, exclamation marks, semicolons, em dashes. Then contractions and
     first/second person, which have no Graphite figure but are the top human
     themes in that study.
  2. Every phrase from references/measured-tells.json found in the text, with
     the model whose list it comes from and how many times the human rate it is.

A hit means "reread this sentence", nothing more. The ratios describe two
corpora of web articles written to one fixed prompt; they say nothing about who
wrote the sentence in front of you. Do not edit to make the numbers move, and
never quote this output as evidence of authorship (grammatical-signals.md).

HTML input: only <main> is read, so the site menu, header and footer do not
count, and breadcrumbs (<nav>) inside it are dropped too.
"""

from __future__ import annotations

import argparse
import html as htmllib
import json
import math
import pathlib
import re
import statistics
import sys
import urllib.request

DATA = pathlib.Path(__file__).resolve().parent.parent / "references" / "measured-tells.json"
SHORT = {"claude-opus-5-5": "Opus 5.5", "claude-opus-5": "Opus 5", "gpt-6-astra": "GPT-6 Astra", "gemini-3-1-pro": "Gemini 3.1"}

# Feature names exactly as Graphite's features files spell them.
STYLE = [
    ("sent_mean", "Avg sentence length (words)", "sentence length, mean (words)"),
    ("sent_sd", "Sentence length (std)", "sentence length, spread (SD)"),
    ("word_len", "Avg word length", "word length (characters)"),
    ("mtld", "Lexical diversity (MTLD)", "vocabulary variety (MTLD)"),
    ("commas", "Commas / 1k words", "commas per 1k words"),
    ("excl", "Exclamation marks / 1k words", "exclamation marks per 1k"),
    ("semi", "Semicolons / 1k words", "semicolons per 1k"),
    ("dash", "Em-dashes / 1k words", "em dashes per 1k (house style: 0)"),
]
PRONOUN_S = {"it", "that", "there", "here", "what", "who", "let", "he", "she", "where", "how", "everyone", "nobody"}


# ── reading input ────────────────────────────────────────────────────────────
def read_input(src: str) -> tuple[str, str]:
    if src == "-":
        return "stdin", sys.stdin.read()
    if re.match(r"https?://", src):
        req = urllib.request.Request(src, headers={"User-Agent": "deslop-scan"})
        with urllib.request.urlopen(req, timeout=60) as r:  # noqa: S310 (user-supplied URL, read-only)
            return src, html_to_text(r.read().decode("utf-8", "replace"))
    path = pathlib.Path(src)
    raw = path.read_text(encoding="utf-8", errors="replace")
    if path.suffix.lower() in {".html", ".htm"}:
        return src, html_to_text(raw)
    if path.suffix.lower() in {".tsx", ".jsx", ".ts", ".js"}:
        sys.exit(f"{src}: scan the rendered page instead (its URL), source files mix code and copy")
    return src, raw


def html_to_text(raw: str) -> str:
    start, end = raw.find("<main"), raw.rfind("</main>")
    if start != -1 and end != -1:
        raw = raw[start:end]
    raw = re.sub(r"<(script|style|noscript|svg|nav|template)\b[\s\S]*?</\1>", " ", raw, flags=re.I)
    raw = re.sub(r"<[^>]+aria-hidden=\"true\"[^>]*>[^<]*</[^>]+>", " ", raw, flags=re.I)
    # Line breaks in HTML source are just spaces; only block tags end a block.
    # (Without this, a hand-wrapped essay splits into one "sentence" per line.)
    raw = re.sub(r"\s+", " ", raw)
    raw = re.sub(r"(?:<br\s*/?>\s*){2,}", "\n", raw, flags=re.I)
    raw = re.sub(r"<(?:/p|/li|/h[1-6]|/div|/section|/blockquote|/td|/tr|/dt|/dd|/figcaption|p|li|h[1-6]|tr)\b[^>]*>", "\n", raw, flags=re.I)
    raw = re.sub(r"<[^>]+>", " ", raw)
    text = htmllib.unescape(raw)
    return "\n".join(line.strip() for line in re.sub(r"[ \t ]+", " ", text).splitlines() if line.strip())


# ── text measures ────────────────────────────────────────────────────────────
def normalise(text: str) -> str:
    return text.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')


def tokens_of(text: str) -> list[str]:
    # Graphite stripped numbers, URLs and punctuation before counting n-grams
    # ("to minutes until" is "20 to 30 minutes until"), so the same is done here.
    text = re.sub(r"https?://\S+", " ", text.lower())
    return [t for t in re.findall(r"[a-z0-9]+(?:'[a-z]+)?", text) if not t.isdigit()]


def sentences_of(text: str) -> list[str]:
    out = []
    for block in text.splitlines():
        out += [s for s in re.split(r"(?<=[.!?])\s+(?=[\"'(A-Z0-9])", block) if len(tokens_of(s)) >= 3]
    return out


def mtld(tokens: list[str], threshold: float = 0.72) -> float:
    def one_pass(seq: list[str]) -> float:
        factors, types, count = 0.0, set(), 0
        for t in seq:
            count += 1
            types.add(t)
            if len(types) / count <= threshold:
                factors, types, count = factors + 1, set(), 0
        if count:
            factors += (1 - len(types) / count) / (1 - threshold)
        return len(seq) / factors if factors else float("nan")
    if len(tokens) < 300:  # too unstable below this; Graphite's articles average ~800 words
        return float("nan")
    return (one_pass(tokens) + one_pass(tokens[::-1])) / 2


def style(text: str, toks: list[str]) -> dict:
    n = max(len(toks), 1)
    per_k = lambda count: 1000 * count / n  # noqa: E731
    lens = [len(tokens_of(s)) for s in sentences_of(text)]
    words = re.findall(r"[A-Za-z]+", text)
    contractions = sum(
        1 for t in toks
        if re.search(r"n't$|'(re|ve|ll|m|d)$", t) or (t.endswith("'s") and t[:-2] in PRONOUN_S)
    )
    return {
        "words": len(toks), "sentences": len(lens),
        "sent_mean": statistics.mean(lens) if lens else float("nan"),
        "sent_sd": statistics.pstdev(lens) if len(lens) > 1 else float("nan"),
        "word_len": statistics.mean(len(w) for w in words) if words else float("nan"),
        "mtld": mtld(toks),
        "commas": per_k(text.count(",")), "excl": per_k(text.count("!")),
        "semi": per_k(text.count(";")), "dash": per_k(text.count("—") + text.count(" -- ")),
        "contractions": per_k(contractions),
        "first_person": per_k(sum(t in {"i", "me", "my", "we", "our", "us", "i'm", "we're", "we've", "i've"} for t in toks)),
        "second_person": per_k(sum(t in {"you", "your", "you're", "you'll", "you've", "you'd", "yours"} for t in toks)),
    }


# ── tell matching ────────────────────────────────────────────────────────────
def load_tells(models: list[str]):
    """One entry per distinct tell, carrying every selected model's ratio for it."""
    data = json.loads(DATA.read_text(encoding="utf-8"))
    grams: dict[tuple[str, ...], dict] = {}
    frames: dict[str, dict] = {}
    for key in models:
        for t in data["models"][key]["tells"]:
            if t["kind"] == "frame":
                entry = frames.setdefault(t["tell"], {"tell": t["tell"], "kind": "frame", "models": {}})
            else:
                entry = grams.setdefault(tuple(t["tell"].split()), {"tell": t["tell"], "kind": t["kind"], "models": {}})
            entry["models"][key] = t["ratio"]
    compiled = []
    for entry in frames.values():
        # "_" is Graphite's gap of one to three less common words.
        parts = [re.escape(p.strip()) for p in entry["tell"].split("_")]
        body = r"(?: [a-z0-9']+){1,3} ".join(parts)
        compiled.append((re.compile(rf"(?:^| ){body}(?= |$)"), entry))
    return data, grams, compiled


def find_hits(text: str, grams, frames) -> list[dict]:
    hits: dict[str, dict] = {}

    def add(entry: dict, context: str) -> None:
        h = hits.setdefault(entry["kind"] + ":" + entry["tell"], {**entry, "count": 0, "contexts": []})
        h["count"] += 1
        if len(h["contexts"]) < 3 and context not in h["contexts"]:
            h["contexts"].append(context)

    # Longest first, and a match that half-overlaps words an earlier match
    # already took is skipped: "this guide walks you" is one habit, not two
    # trigrams plus a bigram plus a frame.
    def fresh(span: set[int], covered: set[int]) -> bool:
        return len(span & covered) * 2 < len(span)

    for block in text.splitlines():
        toks = tokens_of(block)
        covered: set[int] = set()
        for n in (3, 2, 1):
            for i in range(len(toks) - n + 1):
                entry = grams.get(tuple(toks[i:i + n]))
                span = set(range(i, i + n))
                if entry and fresh(span, covered):
                    covered |= span
                    add(entry, " ".join(toks[max(0, i - 6): i + n + 6]))
        joined = " ".join(toks)
        for rx, entry in frames:
            for m in rx.finditer(joined):
                first = joined[: m.start() + (joined[m.start()] == " ")].count(" ")
                span = set(range(first, first + len(m.group().split())))
                if fresh(span, covered):
                    covered |= span
                    add(entry, joined[max(0, m.start() - 40): m.end() + 40].strip())
    strongest = lambda h: max(math.inf if r is None else r for r in h["models"].values())  # noqa: E731
    return sorted(hits.values(), key=lambda h: (-strongest(h), -h["count"]))


# ── report ───────────────────────────────────────────────────────────────────
def fmt(v: float) -> str:
    return "  -  " if v is None or (isinstance(v, float) and math.isnan(v)) else f"{v:5.1f}"


def report(name: str, text: str, data, grams, frames, models: list[str], top: int) -> dict:
    toks = tokens_of(text)
    s = style(text, toks)
    found = find_hits(text, grams, frames)
    # Phrases and frames carry the count. Single words are listed apart: on a
    # technical site "depends", "useful" or "documented" are often just the
    # right word, and the first blog scan showed them swamping the phrase hits.
    hits = [h for h in found if h["kind"] != "unigram"]
    words_hit = sorted((h for h in found if h["kind"] == "unigram"), key=lambda h: -h["count"])
    per_model = {k: sum(h["count"] for h in hits if k in h["models"]) for k in models}
    per_k = {k: 1000 * v / max(len(toks), 1) for k, v in per_model.items()}

    feats = {k: {f["feature"]: f for f in data["models"][k]["features"]} for k in models}
    any_feats = feats[models[0]]
    print(f"\n=== {name}  ({s['words']} words, {s['sentences']} sentences)")
    head = "".join(f"{SHORT[k]:>12}" for k in models)
    print(f"  {'style':<36}{'this text':>10}{'human':>8}{head}")
    for key, feature, label in STYLE:
        human = any_feats.get(feature, {}).get("rightMean")
        cols = "".join(f"{feats[k].get(feature, {}).get('leftMean', '-'):>12}" for k in models)
        print(f"  {label:<36}{fmt(s[key]):>10}{str(human or '-'):>8}{cols}")
    for key, label in [("contractions", "contractions per 1k"), ("first_person", "I / we per 1k"), ("second_person", "you per 1k")]:
        print(f"  {label:<36}{fmt(s[key]):>10}{'(more)':>8}   no Graphite figure; the top human themes")
    if s["sentences"] < 10:
        print("  (under 10 sentences: treat the sentence-length figures as rough)")

    print("  measured phrases found: " + ", ".join(f"{SHORT[k]} {per_model[k]} ({per_k[k]:.1f}/1k words)" for k in models))
    for h in hits[:top]:
        ratios = ", ".join(f"{SHORT[k]} {('inf' if r is None else f'{r:g}x')}" for k, r in h["models"].items())
        print(f"   {h['count']:>2}x  \"{h['tell']}\"  [{h['kind']}; {ratios}]\n        ... {h['contexts'][0]} ...")
    if len(hits) > top:
        print(f"   ... and {len(hits) - top} more (use --top)")
    if words_hit:
        print("  single words models overuse (check only where they rate instead of describe): "
              + ", ".join(f"{h['tell']} {h['count']}" for h in words_hit[:12]))
    return {"name": name, "style": s, "tells_per_model": per_model, "tells_per_1k": per_k, "hits": hits, "words": words_hit}


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("inputs", nargs="*", help="files, URLs, or - for stdin")
    ap.add_argument("--list", help="file with one input per line")
    ap.add_argument("--models", default=",".join(SHORT), help="comma-separated: " + ", ".join(SHORT))
    ap.add_argument("--top", type=int, default=15, help="hits to print per input")
    ap.add_argument("--rank", action="store_true", help="after scanning, rank inputs by tells per 1k words")
    ap.add_argument("--json", help="also write full results to this file")
    args = ap.parse_args()

    inputs = list(args.inputs)
    if args.list:
        inputs += [l.strip() for l in pathlib.Path(args.list).read_text(encoding="utf-8").splitlines() if l.strip()]
    if not inputs:
        ap.error("give at least one file, URL, or -")
    models = [m.strip() for m in args.models.split(",")]
    data, grams, frames = load_tells(models)

    results = []
    for src in inputs:
        try:
            name, text = read_input(src)
        except Exception as err:  # noqa: BLE001 (report and continue with the rest)
            print(f"\n=== {src}: could not read ({err})")
            continue
        results.append(report(name, normalise(text), data, grams, frames, models, args.top))

    if args.rank and len(results) > 1:
        print("\n=== ranked by measured phrases per 1k words (all lists combined)")
        for r in sorted(results, key=lambda r: -sum(r["tells_per_1k"].values())):
            total = sum(r["tells_per_model"].values())
            print(f"  {sum(r['tells_per_1k'].values()):5.1f}/1k  {total:>3} hits  sd {fmt(r['style']['sent_sd'])}  {r['name']}")
    print("\nA hit is a prompt to reread, not a verdict. Graphite: 'we do not recommend classifying authorship based on individual tells.'")
    if args.json:
        pathlib.Path(args.json).write_text(json.dumps(results, indent=1, default=str), encoding="utf-8")


if __name__ == "__main__":
    main()
