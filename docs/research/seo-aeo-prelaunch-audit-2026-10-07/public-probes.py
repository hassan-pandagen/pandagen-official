"""Read-only bounded public source probes; no authenticated requests or forms."""
import json,sys
from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import urlparse
from urllib.error import HTTPError
from bs4 import BeautifulSoup
sys.stdout.reconfigure(encoding='utf-8')
urls=['https://bonobopress.com/','https://pagepro.co/services/sanity-development',
      'https://www.pandacodegen.com/robots.txt','https://www.pandacodegen.com/llms.txt']
data=[]
for url in urls:
 try:
  r=urlopen(Request(url,headers={'User-Agent':'PandaCodeGen-ReadOnly-Audit/1.0'}),timeout=25)
  raw=r.read(2_000_001);assert len(raw)<2_000_001
  s=BeautifulSoup(raw.decode('utf-8','replace'),'html.parser')
  mail=[a['href'] for a in s.select('a[href^="mailto:"]')]
  contact_links=[{'text':a.get_text(' ',strip=True),'href':a.get('href')} for a in s.select('a[href]') if any(t in a.get_text(' ',strip=True).lower() for t in ('touch','contact'))]
  for a in s.select('[data-cfemail]'):
   b=bytes.fromhex(a['data-cfemail']);mail.append('mailto:'+''.join(chr(x^b[0]) for x in b[1:]))
  for el in s.select('script,style,nav,footer'):el.decompose()
  obj={'url':url,'status':r.status,'final':r.geturl(),'mail_links':mail,'contact_links':contact_links,'text':s.get_text(' ',strip=True)}
 except Exception as e: obj={'url':url,'error':str(e)}
 data.append(obj);print(json.dumps(obj,ensure_ascii=False)[:4000])
Path(__file__).with_name('public-probes.json').write_text(json.dumps(data,indent=2,ensure_ascii=False),encoding='utf-8')
