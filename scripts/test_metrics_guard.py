"""Regression fixtures for withdrawn client counts in body, metadata and schema."""
import contextlib
import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location("metrics_guard", Path(__file__).with_name("metrics_guard.py"))
guard = importlib.util.module_from_spec(spec)
spec.loader.exec_module(guard)


class WithdrawnCountTests(unittest.TestCase):
    def check_html(self, html, page="index.html"):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            file = root / page
            file.parent.mkdir(parents=True, exist_ok=True)
            file.write_text(html, encoding="utf-8")
            data = root / "facts.json"
            data.write_text(json.dumps({"caseStudies": {"mycustompatches": {
                "name": "MyCustomPatches", "href": "/work/mycustompatches",
                "metrics": [{"id": "urls-migrated", "label": "URLs migrated", "value": "200+", "status": "withdrawn"}]
            }}}), encoding="utf-8")
            with patch.object(guard, "BUILD", root), patch.object(guard, "DATA", data), contextlib.redirect_stdout(io.StringIO()):
                return guard.main()

    def test_spelled_and_numeric_client_counts_fail(self):
        for count in ["200+", "200-plus", "200 plus", "two hundred plus", "two-hundred-plus"]:
            with self.subTest(count=count):
                self.assertEqual(self.check_html(f"<p>MyCustomPatches: {count} pages.</p>"), 1)

    def test_metadata_and_schema_counts_fail(self):
        self.assertEqual(self.check_html('<meta name="description" content="MyCustomPatches: 200-plus pages">'), 1)
        self.assertEqual(self.check_html('<script type="application/ld+json">{"description":"MyCustomPatches: two hundred plus pages"}</script>'), 1)

    def test_own_case_page_needs_no_nearby_name(self):
        self.assertEqual(self.check_html('<p>200-plus pages.</p>', "work/mycustompatches.html"), 1)

    def test_other_site_count_and_corrected_copy_pass(self):
        self.assertEqual(self.check_html('<p>A different business has 200-plus pages.</p>'), 0)
        self.assertEqual(self.check_html('<p>MyCustomPatches: about 22 days. No replacement page count is published.</p>'), 0)


if __name__ == "__main__":
    unittest.main()
