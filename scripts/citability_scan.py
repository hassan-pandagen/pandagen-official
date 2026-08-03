"""Mechanical passes of citability-audit across the repaired corpus.

Detects, per post:
  - every H2 (BlogHeader) and the first prose block under it
  - whether that block leads with an answer, using proxies:
      * does the H2 name a thing a searcher wants a NUMBER for (cost/price/how much)?
      * does the paragraph under it contain a figure?
      * does the paragraph open with a definition/qualifier stem instead of an answer?
  - hedge stems and how often each is restated
  - vague referents where an entity name belongs
  - structure counts (tables, lists, ordered lists)

Judgement stays with the human. This only finds candidates.
"""
import io, os, re, sys, json
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = r"d:\Projects\pandagen-official\src\app\blog"

DONE = """nextjs-sanity-stack aeo-web-performance-glossary lovable-site-not-showing-on-google
fix-meta-ad-tracking-2026 wix-migration-cost woocommerce-migration-cost woocommerce-vs-custom-website
agentic-browsing-pagespeed-score custom-website-5000-whats-included meta-conversions-api-setup-cost
spending-more-on-ads-fewer-orders-tracking will-migrating-hurt-my-seo how-long-does-a-custom-website-take
do-you-own-your-website saas-price-increases-2026-tracker build-vs-buy-software-2026-cost-comparison
how-to-cut-saas-bill-2026 saas-software-pricing-audit-2026 top-nextjs-agencies-2026
wordpress-april-2026-evidence aeo-playbook-built-into-every-website website-developer-agency
how-much-does-a-website-cost why-is-my-website-loading-so-slow shopify-store-speed-optimization
is-squarespace-bad-for-seo gohighlevel-keep-crm-replace-website pagepro-alternatives
website-redesign-cost cheap-web-developer how-to-speed-up-your-website
website-migration-cost-2026""".split()

# H2 promises a number if it contains any of these
NUM_PROMISE = re.compile(r"\b(cost|price|pricing|how much|fee|rate|budget|spend|cheap|worth|roi)\b", re.I)
# a figure of some kind
HAS_FIGURE = re.compile(r"\$\s?[\d,]+|\b\d+\s?(?:%|percent|ms|seconds?|minutes?|days?|weeks?|months?|KB|MB|GB)\b|\b\d{2,}\b")
# openers that genuinely WITHHOLD the answer (narrow on purpose: "Most X start at $N"
# and "A migration is worth it when..." are answer-first, not delayed)
DELAY_OPEN = re.compile(
    r"^(there is no|there are no|it depends|this depends|neither|nobody|"
    r"(prices?|costs?|results?|scope|figures?) (vary|varies|depend)|"
    r"before (you|any|comparing|deciding)|do not |"
    r"a (lighthouse|quote|score|case study|passing scan) [a-z ]{0,20}is (a |an )?(lab|not))", re.I)
HEDGE = re.compile(
    r"do(?:es)? not (?:guarantee|promise|establish|prove|mean|imply)|"
    r"is not (?:a |an )?(?:promise|guarantee|benchmark|evidence|proof|prediction|substitute)|"
    r"cannot be (?:inferred|established|guaranteed)|no universal|not a market|"
    r"should not be (?:treated|used|compared)|we do not publish|not attributable|"
    r"do not (?:promise|assume|multiply|treat|apply|publish)|results (?:may|will) (?:differ|vary)", re.I)
VAGUE = re.compile(r"\bthe platform\b|\bthe tool\b|\bthis provider\b|\bthe framework\b|\bthe vendor\b|\bthe standard\b", re.I)

def strip_tags(x):
    x = re.sub(r"\{\"\s*\"\}", " ", x)
    x = re.sub(r"<[^>]+>", " ", x)
    x = re.sub(r"&apos;", "'", x)
    x = re.sub(r"&[a-z]+;", " ", x)
    x = re.sub(r"\{[^{}]*\}", " ", x)
    return re.sub(r"\s+", " ", x).strip()

rows = []
for slug in DONE:
    p = os.path.join(ROOT, slug, "page.tsx")
    if not os.path.exists(p):
        rows.append({"slug": slug, "error": "missing"}); continue
    src = io.open(p, encoding="utf-8").read()
    body = src[src.index("export default function"):] if "export default function" in src else src

    # H2s and what follows
    parts = re.split(r"<BlogHeader[^>]*>", body)
    heads = re.findall(r"<BlogHeader[^>]*>(.*?)</BlogHeader>", body, re.S)
    findings = []
    for i, h in enumerate(heads):
        htxt = strip_tags(h)
        after = parts[i+1] if i+1 < len(parts) else ""
        after = after.split("<BlogHeader")[0]
        m = re.search(r"<BlogText[^>]*>(.*?)</BlogText>", after, re.S)
        para = strip_tags(m.group(1)) if m else ""
        if not para:
            m2 = re.search(r"items=\{\[(.*?)\]\}", after, re.S)
            para = strip_tags(m2.group(1))[:400] if m2 else ""
        section_text = strip_tags(after)          # includes tables, lists, formula blocks
        promises = bool(NUM_PROMISE.search(htxt))
        # a figure anywhere in the section counts, and a figure in the H2 itself counts
        figure = bool(HAS_FIGURE.search(section_text) or HAS_FIGURE.search(htxt))
        delayed = bool(DELAY_OPEN.match(para))
        words = len(para.split())
        bad = (promises and not figure) or delayed
        if bad:
            findings.append({
                "h2": htxt[:70],
                "promises_number": promises,
                "has_figure": figure,
                "delayed_open": delayed,
                "words": words,
                "opens": " ".join(para.split()[:14]),
            })

    hedges = [m.group(0).lower() for m in HEDGE.finditer(body)]
    hedge_counts = {}
    for x in hedges: hedge_counts[x] = hedge_counts.get(x, 0) + 1
    worst = max(hedge_counts.values()) if hedge_counts else 0

    rows.append({
        "slug": slug,
        "h2_total": len(heads),
        "flagged": len(findings),
        "num_promise_no_figure": sum(1 for f in findings if f["promises_number"] and not f["has_figure"]),
        "hedge_distinct": len(hedge_counts),
        "hedge_worst": worst,
        "vague": len(VAGUE.findall(body)),
        "tables": body.count("<table"),
        "lists": body.count("<BlogList") + body.count("<ul"),
        "findings": findings,
    })

io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "citability_report.json"), "w", encoding="utf-8").write(
    json.dumps(rows, indent=1))

print(f"{'post':<44}{'H2':>4}{'FLAG':>6}{'$?':>5}{'hedge':>7}{'vague':>7}{'tbl':>5}")
print("-" * 78)
for r in sorted(rows, key=lambda x: -x.get("num_promise_no_figure", 0)):
    if "error" in r: print(f"{r['slug']:<44} MISSING"); continue
    print(f"{r['slug']:<44}{r['h2_total']:>4}{r['flagged']:>6}{r['num_promise_no_figure']:>5}"
          f"{r['hedge_distinct']}/{r['hedge_worst']:<5}{r['vague']:>7}{r['tables']:>5}")
tot = sum(r.get("num_promise_no_figure", 0) for r in rows)
fl = sum(r.get("flagged", 0) for r in rows)
print("-" * 78)
print(f"TOTAL: {fl} flagged H2s across 32 posts; {tot} of them promise a number and give none")
