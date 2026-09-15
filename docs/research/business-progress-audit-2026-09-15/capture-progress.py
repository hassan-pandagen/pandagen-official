"""Read-only before/current page evidence, using the exact September 13 text parser."""
import concurrent.futures
import hashlib
import importlib.util
import json
import pathlib
import subprocess
import sys
import urllib.parse
import xml.etree.ElementTree as ET
from datetime import datetime, timezone

ROOT = pathlib.Path(__file__).resolve().parents[3]
OUT = pathlib.Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location('original_audit_parser', ROOT / 'audit/seo-review-2026-09-12/crawl.py')
collector = importlib.util.module_from_spec(spec)
spec.loader.exec_module(collector)
sys.stdout.reconfigure(encoding='utf-8')

def inspect(url):
    checked = datetime.now(timezone.utc).isoformat()
    try:
        status, final, headers, html, transfer = collector.fetch(url)
        page = collector.Page()
        page.feed(html)
        body = ' '.join(' '.join(page.text).split())
        return {
            'url': url, 'path': urllib.parse.urlsplit(url).path or '/', 'checkedUtc': checked,
            'status': status, 'finalUrl': final, 'sha256': hashlib.sha256(html.encode()).hexdigest(),
            'lang': page.lang, 'titles': page.titles, 'meta': page.meta, 'links': page.links,
            'headings': [{**h, 'text': ' '.join(h['text'].split())} for h in page.headings],
            'anchors': page.anchors, 'ids': page.ids, 'images': page.images, 'schemas': page.schemas,
            'body_text': body, 'words_excluding_semantic_navigation': len(body.split()),
        }
    except Exception as error:
        return {'url': url, 'checkedUtc': checked, 'error': str(error)}

def main():
    base = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3000'
    public = not base.startswith('http://localhost')
    if public:
        paths = ['/', '/services', '/services/custom-engineering', '/services/ecommerce', '/services/ai-seo', '/pricing', '/work', '/contact', '/about', '/ai-info', '/fr', '/de']
    else:
        status, _, _, xml, _ = collector.fetch(base + '/sitemap.xml')
        if status != 200:
            raise RuntimeError(f'Sitemap returned {status}')
        root = ET.fromstring(xml)
        ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
        paths = sorted(set(urllib.parse.urlsplit(u.findtext('s:loc', namespaces=ns)).path or '/' for u in root.findall('s:url', ns)))
    head = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip()
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        rows = list(pool.map(inspect, [base + p for p in paths]))
    result = {
        'checkedUtc': datetime.now(timezone.utc).isoformat(), 'baseUrl': base, 'gitHeadAtStart': head,
        'method': 'Read-only raw HTTP HTML parsed with the same Page class as the September 13 audit. Excludes semantic nav/header/footer, scripts/styles/head/noscript; includes body FAQs and any server-rendered hidden text. No hydration, form submission, indexing or deployment. Word counts are content-volume measures, not readability or conversion scores.',
        'routeSelection': '12 public representative pages' if public else 'All URLs listed in the local sitemap',
        'parserSha256': hashlib.sha256((ROOT/'audit/seo-review-2026-09-12/crawl.py').read_bytes()).hexdigest(),
        'rows': rows,
    }
    filename = 'public-current.json' if public else 'local-current.json'
    OUT.joinpath(filename).write_bytes((json.dumps(result, ensure_ascii=False, indent=2)+'\n').encode('utf-8'))
    if not public:
        before = json.loads((ROOT/'audit/homepage-buyer-review-2026-09-13/live-pages.json').read_text(encoding='utf-8'))
        by_path = {r.get('path'): r for r in rows}
        comparisons = []
        for old in before['pages']:
            route = urllib.parse.urlsplit(old['url']).path or '/'
            new = by_path.get(route, {})
            comparisons.append({
                'path': route, 'beforeWords': len(old.get('body_text','').split()),
                'currentWords': new.get('words_excluding_semantic_navigation'),
                'beforeTitle': old.get('titles'), 'currentTitle': new.get('titles'),
                'beforeH1': [h['text'] for h in old.get('headings',[]) if h['level']==1],
                'currentH1': [h['text'] for h in new.get('headings',[]) if h['level']==1],
                'beforeH2Count': sum(h['level']==2 for h in old.get('headings',[])),
                'currentH2Count': sum(h['level']==2 for h in new.get('headings',[])),
                'currentStatus': new.get('status'),
            })
        OUT.joinpath('before-current-comparison.json').write_bytes((json.dumps({'beforeCapturedUtc':before['checked_at'],'currentCapturedUtc':result['checkedUtc'],'sourceBaseline':'audit/homepage-buyer-review-2026-09-13/live-pages.json','comparisons':comparisons},ensure_ascii=False,indent=2)+'\n').encode('utf-8'))
    print(json.dumps({'file':filename,'checkedUtc':result['checkedUtc'],'head':head,'count':len(rows),'success200':sum(r.get('status')==200 for r in rows),'failures':[{'url':r['url'],'status':r.get('status'),'error':r.get('error')} for r in rows if r.get('status')!=200]},indent=2))

if __name__ == '__main__':
    main()
