"""Bounded read-only HTML audit. Fetches only a specified, allowlisted origin."""
import concurrent.futures, collections, json, re, sys, time
from pathlib import Path
from urllib.parse import urlparse, urljoin
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from xml.etree import ElementTree as ET
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent
ORIGIN = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3001'
LABEL = sys.argv[2] if len(sys.argv) > 2 else 'local'
assert ORIGIN in ('http://localhost:3001', 'https://www.pandacodegen.com')
assert LABEL in ('local', 'live')
LIMIT = 2_000_000
def fetch(path):
    req = Request(ORIGIN + path, headers={'User-Agent':'PandaCodeGen-ReadOnly-Audit/1.0'})
    start = time.time()
    try:
        r = urlopen(req, timeout=40)
    except HTTPError as e:
        r = e
    raw = r.read(LIMIT+1)
    if len(raw) > LIMIT: raise ValueError('body limit')
    return r.status, r.geturl(), dict(r.headers), raw.decode('utf-8', 'replace'), round(time.time()-start, 3)

def links(node):
    return [{'href':a.get('href',''), 'text':a.get_text(' ',strip=True), 'rel':a.get('rel',[])} for a in node.select('a[href]')]

def page(path):
    try:
        status, final, headers, html, seconds = fetch(path)
        soup = BeautifulSoup(html, 'html.parser')
        schemas=[]; errors=[]
        for s in soup.select('script[type="application/ld+json"]'):
            try: schemas.append(json.loads(s.string or s.get_text()))
            except Exception as e: errors.append(str(e))
        all_links=links(soup)
        images=[{k:i.get(k) for k in ('src','alt','width','height','loading')} for i in soup.select('img')]
        canonical=[i.get('href') for i in soup.select('link[rel="canonical"]')]
        alternate=[{k:i.get(k) for k in ('hreflang','href')} for i in soup.select('link[hreflang]')]
        meta={i.get('name') or i.get('property'):i.get('content') for i in soup.select('meta[content]')}
        for el in soup.select('script,style,nav,footer,[aria-hidden="true"]'): el.decompose()
        main=soup.find('main') or soup
        content=main.get_text(' ',strip=True)
        return {'path':path,'status':status,'final':final,'headers':headers,'seconds':seconds,
                'title':soup.title.get_text(' ',strip=True) if soup.title else '', 'meta':meta,
                'canonical':canonical,'alternates':alternate,'h1':[x.get_text(' ',strip=True) for x in main.select('h1')],
                'h2':[x.get_text(' ',strip=True) for x in main.select('h2')],
                'schemas':schemas,'schema_errors':errors,'links':all_links,'body_links':links(main),
                'images':images,'tables':len(main.select('table')),'words':len(content.split()),'text':content}
    except Exception as e: return {'path':path,'error':str(e)}

status, final, headers, xml, seconds=fetch('/sitemap.xml')
assert status == 200
(ROOT/f'{LABEL}-sitemap.xml').write_text(xml, encoding='utf-8')
tree=ET.fromstring(xml)
paths=sorted(set(urlparse(e.text).path for e in tree.iter() if e.tag.endswith('}loc')))
assert 0 < len(paths) < 350
extras=['/preview','/preview/services/gohighlevel','/preview/services/squarespace','/preview/services/woocommerce',
        '/blog/wordpress-killer','/blog/how-to-cut-saas-bill-2026','/blog/why-is-my-website-loading-so-slow',
        '/blog/webflow-migration-50-to-100-pages','/blog/gohighlevel-migration','/blog/google-march-2026-update',
        '/ai-info/competitor-comparison','/work/panda-codelab','/audit-not-a-real-page-20261007']
results=[]
with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
    for result in pool.map(page, paths+extras):
        result['in_sitemap']=result['path'] in paths
        results.append(result)
        print(f"{len(results)}/{len(paths+extras)} {result['path']} {result.get('status',result.get('error'))}",flush=True)
(ROOT/f'{LABEL}-pages.json').write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'pages':len(results),'sitemap_pages':len(paths),'statuses':dict(collections.Counter(str(x.get('status','error')) for x in results))}))
