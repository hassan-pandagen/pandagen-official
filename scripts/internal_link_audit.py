"""Audit actual HTML anchors, HTTP targets, fragments and site reachability.

Uses only the standard library. Run against an owned local production server:
  python scripts/internal_link_audit.py --base http://127.0.0.1:3004 --output report.json
No external requests, API calls, form submissions or JavaScript execution.
The contextual graph excludes site navigation and footer links. A missing contextual
inlink is a review candidate, not automatically a defect or a ranking claim.
"""
from __future__ import annotations

import argparse
from collections import defaultdict, deque
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.error import HTTPError, URLError
from urllib.parse import unquote, urljoin, urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener
import xml.etree.ElementTree as ET

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}
PUBLIC_HOSTS = {"pandacodegen.com", "www.pandacodegen.com"}
SITE_NAV_LABELS = {"Primary navigation", "Mobile navigation", "Deutsche Navigation", "Navigation fran\u00e7aise", "Startseite", "Accueil"}


class Document(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.anchors = []
        self.ids = set()
        self.title = ""
        self.noindex = False

    def handle_starttag(self, tag, attrs):
        attr = dict(attrs)
        if attr.get("id"):
            self.ids.add(attr["id"])
        if tag == "a" and attr.get("name"):
            self.ids.add(attr["name"])
        if tag == "meta" and attr.get("name", "").lower() == "robots":
            self.noindex = "noindex" in attr.get("content", "").lower()
        # Related-guide navigation and article headers are content. The site menu
        # is a dialog outside the header, so excluding only <nav> miscounts it.
        global_nav = tag == "nav" and attr.get("aria-label") in SITE_NAV_LABELS
        if global_nav:
            # The localized header is not sticky. Classify its earlier logo link
            # and subsequent language controls as site navigation as well.
            for index in range(len(self.stack) - 1, -1, -1):
                if self.stack[index][0] == "header":
                    for anchor in self.anchors[self.stack[index][2]:]:
                        anchor["chrome"] = True
                    for j in range(index, len(self.stack)):
                        node = self.stack[j]
                        self.stack[j] = (node[0], True, node[2])
                    break
        site_chrome = (tag == "footer" or attr.get("id") in {"site-menu", "mobile-site-menu"}
                       or (tag == "header" and re.search(r"\b(sticky|fixed)\b", attr.get("class", "")))
                       or global_nav)
        chrome = bool(site_chrome) or any(x[1] for x in self.stack)
        if tag == "a" and "href" in attr:
            self.anchors.append({"href": attr["href"], "text": "", "aria_label": attr.get("aria-label", ""), "rel": attr.get("rel", ""), "chrome": chrome})
        if tag == "img" and any(x[0] == "a" for x in self.stack) and self.anchors:
            self.anchors[-1]["text"] += " " + attr.get("alt", "")
        if tag not in VOID:
            self.stack.append((tag, chrome, len(self.anchors)))

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                self.stack = self.stack[:i]
                break

    def handle_data(self, data):
        tags = {x[0] for x in self.stack}
        if tags & {"script", "style"}:
            return
        if "title" in tags:
            self.title += data
        if "a" in tags and self.anchors:
            self.anchors[-1]["text"] += data


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def fetch(base, path):
    try:
        response = build_opener(NoRedirect()).open(Request(base + path, headers={"User-Agent": "PandaCodeGen-local-internal-link-audit/1.0"}), timeout=20)
    except HTTPError as error:
        response = error
    except (URLError, TimeoutError, OSError) as error:
        return {"status": 0, "error": str(error), "anchors": [], "ids": []}
    with response:
        result = {"status": response.code, "type": response.headers.get("Content-Type", ""), "location": response.headers.get("Location", ""), "anchors": [], "ids": []}
        if "html" in result["type"] or path == "/sitemap.xml":
            raw = response.read(3_000_001)
            if len(raw) > 3_000_000:
                result["error"] = "Body exceeded audit limit"
            html = raw.decode("utf-8", errors="replace")
            if path == "/sitemap.xml":
                result["xml"] = html
            else:
                doc = Document()
                doc.feed(html)
                for anchor in doc.anchors:
                    anchor["text"] = " ".join(anchor["text"].split())
                result.update(anchors=doc.anchors, ids=sorted(doc.ids), title=doc.title, noindex=doc.noindex)
        return result


def internal_target(href, source, local_host):
    url = urlsplit(urljoin("https://www.pandacodegen.com" + source, href))
    if url.scheme not in {"http", "https"} or url.hostname not in PUBLIC_HOSTS | {local_host}:
        return None
    path = url.path or "/"
    if path.startswith(("/api/", "/_next/", "/_vercel/", "/cdn-cgi/")):
        return None
    # Query views do not create new page nodes; their anchors still target pages.
    return path, unquote(url.fragment)


def audit(base, workers, manifest=None):
    local_host = urlsplit(base).hostname
    sitemap = fetch(base, "/sitemap.xml")
    if sitemap["status"] != 200 or "xml" not in sitemap:
        raise RuntimeError("Sitemap could not be fetched")
    root = ET.fromstring(sitemap["xml"])
    sitemap_paths = sorted({urlsplit(el.text).path or "/" for el in root.iter() if el.tag.endswith("}loc") and el.text})
    not_found_path = "/this-page-does-not-exist"
    expected_redirects = {}
    if manifest:
        for rule in json.loads(Path(manifest).read_text(encoding="utf-8"))["redirects"]:
            if ":" not in rule["source"] and not rule.get("has") and not rule.get("missing"):
                expected_redirects[rule["source"]] = rule
    pending = set(sitemap_paths) | {not_found_path} | expected_redirects.keys()
    records = {}
    with ThreadPoolExecutor(max_workers=workers) as pool:
        while pending:
            batch = sorted(pending - records.keys())
            if not batch:
                break
            if len(records) + len(batch) > 650:
                raise RuntimeError("Exceeded 650-target safety limit")
            pending = set()
            for path, record in zip(batch, pool.map(lambda path: fetch(base, path), batch)):
                records[path] = record
                for link in record["anchors"]:
                    target = internal_target(link["href"], path, local_host)
                    if target and target[0] not in records:
                        pending.add(target[0])
                if record.get("location"):
                    target = internal_target(record["location"], path, local_host)
                    if target and target[0] not in records:
                        pending.add(target[0])
    graph, body_graph = defaultdict(set), defaultdict(set)
    incoming, body_incoming = defaultdict(set), defaultdict(set)
    broken, redirects, fragments, empty, nofollow, placeholder = [], [], [], [], [], []
    for source, record in records.items():
        if (record["status"] != 200 and source != not_found_path) or "html" not in record.get("type", ""):
            continue
        for anchor in record["anchors"]:
            target = internal_target(anchor["href"], source, local_host)
            if not target:
                continue
            path, fragment = target
            item = {"source": source, "target": anchor["href"], "anchor": anchor["text"] or anchor["aria_label"], "chrome": anchor["chrome"]}
            if anchor["href"] in {"", "#"}:
                placeholder.append(item)
                continue
            result = records.get(path, {})
            status = result.get("status", 0)
            same_404_fragment = source == not_found_path and path == source and bool(fragment) and status == 404
            if (status >= 400 and not same_404_fragment) or status == 0 or result.get("error"):
                broken.append(dict(item, status=status, error=result.get("error")))
                continue
            if 300 <= status < 400:
                redirects.append(dict(item, status=status, location=result.get("location")))
                seen = set()
                while 300 <= result.get("status", 0) < 400 and path not in seen:
                    seen.add(path)
                    final = internal_target(result.get("location", ""), path, local_host)
                    if not final:
                        break
                    path = final[0]
                    result = records.get(path, {})
                if result.get("status") != 200:
                    broken.append(dict(item, status=result.get("status", 0), error="Redirect did not resolve to 200"))
                    continue
            if fragment and "html" in result.get("type", "") and fragment not in result["ids"] and not fragment.startswith(":~:text="):
                fragments.append(item)
            if not item["anchor"]:
                empty.append(item)
            if "nofollow" in anchor["rel"].split():
                nofollow.append(item)
            if "html" in result.get("type", "") and source != path and source != not_found_path:
                graph[source].add(path)
                incoming[path].add(source)
                if not anchor["chrome"]:
                    body_graph[source].add(path)
                    body_incoming[path].add(source)
    depth = {"/": 0}
    queue = deque(["/"])
    while queue:
        source = queue.popleft()
        for target in graph[source]:
            if target not in depth:
                depth[target] = depth[source] + 1
                queue.append(target)
    pages = {path: {"status": record["status"], "title": record.get("title", ""), "noindex": record.get("noindex", False), "depth": depth.get(path), "inlinks": sorted(incoming[path]), "contextual_inlinks": sorted(body_incoming[path]), "outlinks": sorted(graph[path]), "contextual_outlinks": sorted(body_graph[path])} for path, record in records.items() if "html" in record.get("type", "")}
    legacy_checks = []
    for source, rule in expected_redirects.items():
        record = records[source]
        target = internal_target(record.get("location", ""), source, local_host)
        expected = internal_target(rule["destination"], source, local_host)
        legacy_checks.append({"source": source, "status": record["status"], "location": record.get("location"), "pass": record["status"] == rule["statusCode"] and target == expected and records.get(target[0] if target else "", {}).get("status") == 200})
    report = {
        "base": base,
        "scope": (
            "Initial HTML anchors; local HTTP verification including 404 utility links; "
            "site header/menu/footer excluded only from contextual graph. Related-guide "
            "navigation and article headers retained. Query views collapsed to path. "
            "External URLs and API endpoints not fetched."
        ),
        "summary": {
            "sitemap_pages": len(sitemap_paths),
            "checked_targets": len(records),
            "html_pages": len(pages),
            "anchor_occurrences": sum(len(r["anchors"]) for r in records.values()),
            "broken_links": len(broken),
            "redirecting_links": len(redirects),
            "missing_fragments": len(fragments),
            "empty_anchors": len(empty),
            "internal_nofollow": len(nofollow),
            "placeholder_links": len(placeholder),
            "unreachable_sitemap_pages": len(set(sitemap_paths) - depth.keys()),
            "max_sitemap_depth": max((depth[p] for p in sitemap_paths if p in depth), default=0),
            "legacy_redirects_checked": len(legacy_checks),
            "legacy_redirect_failures": sum(not c["pass"] for c in legacy_checks),
            "not_found_status": records[not_found_path]["status"],
        },
        "sitemap_paths": sitemap_paths,
        "broken_links": broken,
        "redirecting_links": redirects,
        "missing_fragments": fragments,
        "empty_anchors": empty,
        "internal_nofollow": nofollow,
        "placeholder_links": placeholder,
        "unreachable": sorted(set(sitemap_paths) - depth.keys()),
        "without_contextual_inlinks": sorted(p for p in sitemap_paths if p != "/" and not body_incoming[p]),
        "legacy_redirects": legacy_checks,
        "targets": {
            path: {key: value for key, value in record.items() if key in {"status", "type", "location", "error", "noindex"}}
            for path, record in sorted(records.items())
        },
        "pages": pages,
    }
    return report


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base", required=True)
    parser.add_argument("--output", required=True)
    parser.add_argument("--workers", type=int, default=6)
    parser.add_argument("--redirects-manifest", help="Optional Next.js routes-manifest.json for static legacy redirect checks")
    args = parser.parse_args()
    base = args.base.rstrip("/")
    if urlsplit(base).hostname not in {"127.0.0.1", "localhost", "::1"}:
        parser.error("Use an owned local server; live-site requests are outside this script's scope")
    report = audit(base, args.workers, args.redirects_manifest)
    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(json.dumps(report["summary"], indent=2))
    print("Report:", output)
    if (report["broken_links"] or report["missing_fragments"] or report["unreachable"]
            or report["summary"]["legacy_redirect_failures"] or report["summary"]["not_found_status"] != 404):
        raise SystemExit(1)


if __name__ == "__main__":
    main()
