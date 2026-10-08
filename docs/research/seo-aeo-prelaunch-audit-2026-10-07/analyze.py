import collections,json,re,sys
from pathlib import Path
from urllib.parse import urlparse
sys.stdout.reconfigure(encoding='utf-8')
ROOT=Path(__file__).resolve().parent
local=json.loads((ROOT/'local-pages.json').read_text(encoding='utf-8'))
live=json.loads((ROOT/'live-pages.json').read_text(encoding='utf-8'))
local=list({x['path']:x for x in local}.values())
live=list({x['path']:x for x in live}.values())
def normpath(p): return p.rstrip('/') or '/'
def internal(h):
 u=urlparse(h)
 return normpath(u.path) if (h.startswith('/') or u.hostname in ('www.pandacodegen.com','pandacodegen.com','localhost')) else None
def nodes(v):
 if isinstance(v,dict):
  if '@type' in v: yield v
  for k,x in v.items(): yield from nodes(x)
 elif isinstance(v,list):
  for x in v: yield from nodes(x)
def norm(s): return re.sub(r'[^a-z0-9]','',str(s).lower())
def summarize(data):
 pages=[x for x in data if x['in_sitemap']]
 inlinks=collections.defaultdict(set); bodyin=collections.defaultdict(set)
 for p in pages:
  for field,dest in [('links',inlinks),('body_links',bodyin)]:
   for a in p.get(field,[]):
    t=internal(a['href'])
    if t and t!=normpath(p['path']):dest[t].add(normpath(p['path']))
 dup={}
 for k in ('title','description','canonical'):
  groups=collections.defaultdict(list)
  for p in pages:
   v=p.get('meta',{}).get(k,'') if k=='description' else p.get(k,'')
   if v:groups[str(v)].append(p['path'] or '/')
  dup[k]=[v for v in groups.values() if len(v)>1]
 inventory=[];faq_mismatch=[];schema_types=collections.Counter()
 for p in pages:
  sn=list(nodes(p.get('schemas',[])))
  schema_types.update(str(n['@type']) for n in sn)
  for n in sn:
   if n.get('@type')=='Question' and norm(n.get('name','')) not in norm(p.get('text','')):
    faq_mismatch.append({'path':p['path'],'question':n.get('name')})
  external={urlparse(a['href']).hostname for a in p.get('body_links',[]) if a['href'].startswith('http') and not internal(a['href'])}
  inventory.append({'path':p['path'] or '/','status':p.get('status'),'title':p.get('title'),'words':p.get('words'),
   'h1':p.get('h1'),'description':p.get('meta',{}).get('description'),'inlinks':len(inlinks[normpath(p['path'])]),
   'body_inlinks':len(bodyin[normpath(p['path'])]),'external_body_domains':sorted(x for x in external if x),
   'schema_types':sorted(set(str(n['@type']) for n in sn)), 'tables':p.get('tables')})
 return {'page_count':len(pages),'duplicates':dup,'schema_types':dict(schema_types),
  'faq_question_not_in_extracted_text':faq_mismatch,'inventory':inventory,
  'missing_alt_attributes':[(p['path'],i['src']) for p in pages for i in p.get('images',[]) if i['alt'] is None],
  'errors':[(p['path'],p.get('status'),p.get('error')) for p in pages if p.get('status')!=200]}

result={'local':summarize(local),'live':summarize(live)}
lp={normpath(p['path']):p for p in local if p['in_sitemap']}; vp={normpath(p['path']):p for p in live if p['in_sitemap']}
result['added_sitemap_urls']=sorted(lp.keys()-vp.keys()); result['removed_sitemap_urls']=sorted(vp.keys()-lp.keys())
result['changed_titles']=[{'path':p,'live':vp[p].get('title'),'local':lp[p].get('title')} for p in sorted(lp.keys()&vp.keys()) if lp[p].get('title')!=vp[p].get('title')]
result['redirect_targets']=[{'from':p['path'],'status':p.get('status'),'to':p.get('final')} for p in local if not p['in_sitemap']]
(ROOT/'analysis.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
for label in ('local','live'):
 s=result[label]
 print(label,{k:v for k,v in s.items() if k not in ('inventory','schema_types','faq_question_not_in_extracted_text')})
 print('FAQ mismatch',s['faq_question_not_in_extracted_text'][:12],len(s['faq_question_not_in_extracted_text']))
 print('No inbound',[(p['path'],p['body_inlinks']) for p in s['inventory'] if p['inlinks']==0])
 print('Low body inbound',[(p['path'],p['body_inlinks']) for p in s['inventory'] if p['body_inlinks']<2])
 print('Schema types',s['schema_types'])
print('NEW',result['added_sitemap_urls']);print('REMOVED',result['removed_sitemap_urls']);print('TITLES',result['changed_titles'])
