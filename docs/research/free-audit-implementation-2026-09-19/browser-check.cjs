const {chromium}=require('C:/Users/hassa/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright');
const fs=require('fs');
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 const output='docs/research/free-audit-implementation-2026-09-19';fs.mkdirSync(output,{recursive:true});
 const results=[];
 for(const width of [390,1440]){
  const page=await browser.newPage({viewport:{width,height:900}});
  const submissions=[];const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/api/audit/analyze',r=>r.fulfill({json:{success:true,leadToken:'report-fixture',reviewToken:'review-fixture',data:{pageSpeedAvailable:true,performanceScore:64,fcp:2100,platformDetected:'WordPress',deepChecks:{htmlFetched:true,checks:[{id:'crawl',name:'Indexability signals',status:'warn',score:50,findings:['A noindex directive was found on this page.'],fix:'Confirm whether this page should be indexed before changing it.'}]}}}}));
  await page.route('**/api/audit/submit-lead',r=>{submissions.push(r.request().postDataJSON());return r.fulfill({json:{success:true,dueAt:submissions.at(-1).action==='review'?'2026-09-20T12:00:00Z':null}})});
  await page.goto('http://localhost:3018/free-audit',{waitUntil:'networkidle'});
  const reject=page.getByRole('button',{name:'Reject optional',exact:true});if(await reject.isVisible())await reject.click();
  await page.locator('#audit-url').fill('example.com');
  await page.getByLabel('Your platform (optional)').selectOption('Wix');
  await page.getByRole('button',{name:'Check my website',exact:true}).click();
  await page.getByRole('heading',{name:'Your findings and next steps'}).waitFor();
  await page.getByRole('button',{name:'Email my audit report',exact:true}).click();
  await page.locator('#audit-email').fill('test@example.com');
  await page.getByRole('dialog').getByRole('button',{name:'Email my audit report',exact:true}).click();
  await page.getByRole('heading',{name:'Audit report sent'}).waitFor();
  await page.getByRole('button',{name:'Close',exact:true}).click();
  await page.getByRole('button',{name:'Request my free founder review',exact:true}).click();
  await page.locator('#audit-concern').fill('Our contact page is slow on mobile.');
  await page.locator('#audit-pages').fill('https://example.com/contact');
  await page.screenshot({path:`${output}/review-${width}.png`,fullPage:false});
  await page.getByRole('dialog').getByRole('button',{name:'Request my free founder review',exact:true}).click();
  await page.getByRole('heading',{name:'Founder review requested'}).waitFor();
  await page.getByRole('button',{name:'Close',exact:true}).click();
  await page.getByRole('dialog').waitFor({state:'hidden'});
  await page.evaluate(()=>window.scrollTo(0,0));
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
  await page.screenshot({path:`${output}/results-${width}.png`,fullPage:true});
  if(submissions.length!==2||submissions[0].leadToken!=='report-fixture'||submissions[1].leadToken!=='review-fixture'||overflow||errors.length)throw Error(JSON.stringify({submissions,overflow,errors}));
  results.push({width,reportThenReview:true,overflow,errors,submissionCount:submissions.length});await page.close();
 }
 fs.writeFileSync(`${output}/browser-checks.json`,JSON.stringify(results,null,2));console.log(JSON.stringify(results));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
