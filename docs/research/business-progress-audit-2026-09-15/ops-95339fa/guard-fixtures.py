"""Reproduce the read-only metrics-guard audit using isolated synthetic HTML.

Run: python docs/research/business-progress-audit-2026-09-15/ops-95339fa/guard-fixtures.py

Loads the current repository guard and a subset of its real metric declarations.
All fixture facts and HTML exist only in an automatically cleaned temporary
directory. Does not alter application files, the real registry or .next output.
This is an audit harness, not an application regression-test suite.
"""

from __future__ import annotations

import contextlib
import datetime
import importlib.util
import io
import json
import pathlib
import subprocess
import sys
import tempfile

sys.dont_write_bytecode = True
ROOT = pathlib.Path(__file__).resolve().parents[4]
OUTPUT = pathlib.Path(__file__).with_name("guard-fixture-results.json")
spec = importlib.util.spec_from_file_location("guard_audit", ROOT / "scripts" / "metrics_guard.py")
guard = importlib.util.module_from_spec(spec)
spec.loader.exec_module(guard)
original = json.loads(guard.DATA.read_text(encoding="utf-8"))
study = original["caseStudies"]["enterprise-ops"]
ids = {
    "production-rows-imported", "process-automation", "efficiency-gain",
    "developer-rating", "hours-saved-weekly",
}
fixture = {
    "caseStudies": {
        "enterprise-ops": {
            **study,
            "metrics": [metric for metric in study["metrics"] if metric["id"] in ids],
        }
    }
}

# The second tuple member records the audit's intended policy outcome, not a
# promise that the current guard implements every detector. False negatives
# are the finding this harness preserves.
cases = {
    "baseline_current_metric_and_method": (
        False,
        "<h1>Enterprise operations platform</h1><p>1,779 legacy production rows imported. Method: reconciled workbook, 2026-09-15.</p>",
    ),
    "withdrawn_meta_only": (
        True,
        '<head><meta name="description" content="95% process automation"></head><h1>Enterprise operations platform</h1>',
    ),
    "withdrawn_og_only": (
        True,
        '<head><meta property="og:description" content="95% process automation"></head><h1>Enterprise operations platform</h1>',
    ),
    "withdrawn_twitter_only": (
        True,
        '<head><meta name="twitter:description" content="95% process automation"></head><h1>Enterprise operations platform</h1>',
    ),
    "withdrawn_jsonld_only": (
        True,
        '<script type="application/ld+json">{"description":"95% process automation"}</script><h1>Enterprise operations platform</h1>',
    ),
    "withdrawn_far_from_name_own_page": (
        True,
        "<h1>Enterprise operations platform</h1>" + ("a " * 1000) + "<p>95% process automation</p>",
    ),
    "verified_method_missing_no_year": (
        True,
        "<h1>Enterprise operations platform</h1><p>1,779 legacy production rows imported.</p>",
    ),
    "verified_method_missing_copyright_year": (
        True,
        "<h1>Enterprise operations platform</h1><p>1,779 legacy production rows imported.</p><footer>Copyright 2026</footer>",
    ),
    "verified_method_missing_metadata_year_only": (
        True,
        '<meta name="description" content="2026"><h1>Enterprise operations platform</h1><p>1,779 legacy production rows imported.</p>',
    ),
    "verified_value_changed": (
        True,
        "<h1>Enterprise operations platform</h1><p>1,780 legacy production rows imported. 2026-09-15.</p>",
    ),
    "undeclared_numeric_claim": (
        True,
        "<h1>Enterprise operations platform</h1><p>99% process automation. 2026-09-15.</p>",
    ),
    "withdrawn_multiplication_symbol": (
        True,
        "<h1>Enterprise operations platform</h1><p>10\u00d7 efficiency gain. 2026-09-15.</p>",
    ),
    "withdrawn_registered_ascii_x": (
        True,
        "<h1>Enterprise operations platform</h1><p>10x efficiency gain. 2026-09-15.</p>",
    ),
    "withdrawn_numeric_entity": (
        True,
        "<h1>Enterprise operations platform</h1><p>95&#37; process automation.</p>",
    ),
    "withdrawn_single_quote_metadata": (
        True,
        "<meta name='description' content='95% process automation'><h1>Enterprise operations platform</h1>",
    ),
    "withdrawn_without_value_registered": (
        True,
        "<h1>Enterprise operations platform</h1><p>40 hours saved weekly. 2026-09-15.</p>",
    ),
}

results = []
with tempfile.TemporaryDirectory(prefix="ops-metrics-audit-") as tmp:
    root = pathlib.Path(tmp)
    guard.DATA = root / "facts.json"
    guard.DATA.write_text(json.dumps(fixture), encoding="utf-8")
    guard.BUILD = root / "build"
    (guard.BUILD / "work").mkdir(parents=True)
    htmlpath = guard.BUILD / "work" / "enterprise-ops.html"
    saved_argv = sys.argv
    try:
        sys.argv = ["metrics_guard.py", "--json"]
        for name, (should_fail, html) in cases.items():
            htmlpath.write_text(html, encoding="utf-8")
            guard.studies_by_slug.clear()
            out = io.StringIO()
            with contextlib.redirect_stdout(out):
                status = guard.main()
            parsed = json.loads(out.getvalue())
            results.append({
                "case": name,
                "shouldFailUnderAuditPolicy": should_fail,
                "exit": status,
                "matchesAuditPolicy": (status == 1) == should_fail,
                "failureTypes": [failure["type"] for failure in parsed["failures"]],
                "guardResult": parsed,
            })
    finally:
        sys.argv = saved_argv

report = {
    "capturedAt": datetime.datetime.now(datetime.timezone.utc).isoformat(),
    "head": subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT, text=True).strip(),
    "guard": "scripts/metrics_guard.py",
    "registry": "src/data/case-study-facts.json",
    "case": "enterprise-ops",
    "fixtureIsolation": "TemporaryDirectory; actual DATA and BUILD paths overridden; no application or real .next mutations",
    "interpretation": "Synthetic detector audit only. Does not validate the real-world correctness of metric declarations or current deployed output.",
    "results": results,
}
OUTPUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
print(json.dumps({
    "output": str(OUTPUT.relative_to(ROOT)),
    "head": report["head"],
    "fixtures": len(results),
    "falseNegatives": [result["case"] for result in results if not result["matchesAuditPolicy"]],
}, indent=2))
