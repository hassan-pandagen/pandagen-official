# Group C: technical SEO and protected fields (new build, 4 Oct 2026)

Site audited: the new build at http://localhost:3400 (production `next start`). All 151 URLs in its sitemap.xml were crawled twice: once with JavaScript off (what the server sends) and once with JavaScript on (what a browser shows). Raw data is in `audit\C-raw\` (file list at the end).

Labels: CONFIRMED means I observed it directly. INFERRED means it is my reading of the likely effect.

## Top findings (ranked by impact)

1. **The Google updates guide is out of date in its meta description and its body.** CONFIRMED. Google's Search Status Dashboard now lists a "September 2026 spam update" (start 24 Sep 2026; I read the dashboard on 4 Oct 2026). The page still says "Google has confirmed 39 ranking updates since November 2021" (meta description and opening) and "The most recent is the August 2026 spam update". The same "39" sentence also appears on the /blog and /blog/topic/seo-and-ai-search cards. Source: `src/data/google-updates.ts` (header says "re-read 13 Sep 2026"; `REGISTER_UPDATED = '13 September 2026'`). The core count (16) still holds. The total and spam count each need +1. This is number-only drift, so it is low risk to fix, but the fix goes in the data file, not the copy.
2. **Service-page H1s and most H2s are slogans with no topic words.** CONFIRMED. For example, /services/wordpress-migration has the H1 "Your WordPress site. A clear next step." even though its top GSC query is "wordpress to next.js migration services" (151 impressions in 90 days). The /services/ai-seo H1 "Make your answers easy to find." drops "AI SEO", which the live H1 has. The /services/ecommerce H1 is "A store built around the order." The /blog H1 is "Good questions. Worth a read." where the live one says "Web Development, Ecommerce and SEO Guides". Nine service pages share the H2 "A clear route to done." The page titles still carry the keywords, so the risk is moderate. INFERRED impact.
3. **48 headings on 27 pages run two words together in the HTML text.** CONFIRMED in the DOM. Examples: "A store builtaround the order.", "Your WordPress site.A clear nextstep.", "Know whoyou're buildingwith.", "HassanJamal", plus the footer's "Have somethingin mind?" on every page. Each heading is two block `<span>`s with no space between them. People see a line break, but `textContent` and any HTML-to-text tool without CSS get one joined word. INFERRED impact: this matters most for non-rendering AI crawlers, the audience this site is built for. The fix is a `{" "}` between the spans. List: `C-raw\heading-joins.json`.
4. **47 blog posts show two FAQ headings in a row.** CONFIRMED and visible. An H2 "Frequently asked questions" is followed straight away by a second H2 "Frequently Asked Questions". The page adds `<BlogHeader id="faq">` (e.g. `src/app/blog/wix-too-slow/page.tsx:422`) and `FAQAccordion` renders its own `<h2 id="faq-heading">` (`src/components/ui/FAQAccordion.tsx:33-35`). This is a template-level fix.
5. **Snippet lengths: 127 of 151 meta descriptions and 41 of 151 titles are likely to be cut off.** CONFIRMED measurement; truncation INFERRED. Descriptions have a median of 163 characters, and 23 are over 185 (worst: /work/enterprise-ops and /work/ladies-4-jesus at 252). Over-long titles: all 11 topic hubs (74 to 86 characters), 10 of 11 work pages (up to 89), and /about/hassan and /about/imran, which also repeat the brand ("...at PandaCodeGen | PandaCodeGen").
6. **/services/wordpress is a live 200 page in the new build but a 308 redirect on the live site.** CONFIRMED. The new build serves its own page there (self-canonical, in the sitemap). Live, it 308-redirects to /services/wordpress-migration, and `REDESIGN_ROLLOUT_PLAN_2026-09-26.md` line 9 says it "is a redirect". Either the plan or the build is out of date. This belongs with the migration-safety group.
7. **Protected-field wording drift (needs sign-off, not a number swap).** CONFIRMED.
   - /blog/nextjs-hosting-zero-cost: the title says "the 100GB Cap", but the body says the 100 GB is "a fair-use guideline, not an itemised plan allowance".
   - /blog/top-custom-web-development-agencies-usa-2026: the title says "Top...", but the meta description says "A non-ranked 2026 shortlist".
   - /about: the meta description says "trading since February 2026", but the /about page itself never states it (only /ai-info/team-and-company does).
8. **Structured data is clean but partly decorative.** CONFIRMED. All JSON-LD blocks parse. All 740 FAQ questions are visible on the page and present in the server HTML. Every page has exactly one absolute, self-referencing canonical, and no title or description is duplicated. FAQPage gets no Google rich result at all (dropped 7 May 2026; docs removed 15 June 2026); the repo already records this in `src/data/blog.ts:30-35`. SoftwareApplication sits inside `Article.about` on 33 pages without `offers` or a rating, which Google requires for Software App results. My guess is that this shows up as invalid items in Search Console (INFERRED). The live site already has the same markup, so it is not new.
9. **The EmDash post is consistent.** CONFIRMED. Title, meta, H1, H2s and all FAQ questions match a body that says "1.0 shipped 28 September 2026, current release 1.1.0". No field still says beta. The blog card excerpt ("reached 1.0 in September 2026") matches too. The card, schema `dateModified` and sitemap `lastmod` agree for all 88 posts.
10. **Mobile is sound.** CONFIRMED. None of the 24 template pages scrolls sideways at 390px, and the body font is 16px everywhere. Small points: glossary definitions render at 14 to 15px (77 of 91 text blocks on /blog/web-accessibility-glossary). On the home page, the review-source links are 17px tall and sit too close to the card links to meet the WCAG 2.5.8 spacing rule. Footer links are 16 to 19px tall but pass that rule's spacing exception.

---

## Part 1: Technical SEO audit (technical-seo-audit skill)

### Step 0 answers (from observation)
- Platform: Next.js 16.3.6 App Router, server-rendered. Most fixes are template-level (one component per family).
- Sitemap and robots: `/sitemap.xml` lists 151 URLs, and every one returned 200. robots.txt allows everything except `/api/` and `/_next/data/` and points to the sitemap. Preview routes (`/preview/*`) return `noindex, nofollow`. CONFIRMED.
- Structured data exists on all 151 pages. Every page carries a site-wide graph of WebSite, Organization, Person, ContactPoint and PostalAddress, plus types specific to the page.
- Templates: home, services (11), blog posts (88), topic hubs (11), blog index, work (11), about (3), ai-info (5), locale /de and /fr (11), legal (5), plus single pages (pricing, contact, partners, manifesto, free-audit).

### Checks that passed site-wide (CONFIRMED, all 151 URLs)
- Exactly one `<title>`, one meta description, one canonical. Every canonical is absolute and points to the page itself (the home page uses `https://www.pandacodegen.com`, matching the sitemap and hreflang).
- No duplicate titles. No duplicate meta descriptions.
- Viewport present everywhere: `width=device-width, initial-scale=1, maximum-scale=5`.
- No `noindex` on any sitemap URL.
- Exactly one H1 on every page, in both the server and the rendered DOM. No skipped heading levels (no H1 to H3 jumps) anywhere.
- The title, canonical and JSON-LD count do not change after JavaScript runs.
- og:title, og:description, og:url, og:image, og:type and twitter:card are on every page, and og:url always matches the canonical. og:site_name is missing on 128 pages and og:locale on 140 English pages. Both are optional.
- hreflang: the en/fr/de/x-default sets on home, services, pricing, contact and about are reciprocal. `lang` is correct on all 151 pages (141 en, 5 fr, 5 de).
- Server HTML against rendered text (all 151 pages, line by line): the only text that appears client-side only is the cookie banner and two widget counters ("ON THIS PAGE 13 sections", "REVIEWING REQUIREMENT 0 OF 4"). All body content, tables and FAQ answers are in the server HTML. I spot-checked strings such as "$61,020.51" and "22.5%" on /blog/ai-referral-revenue-2026 and "Saforne" on the home page.

### Per template family

**Home (/)**
- Meta: title "Custom Website Design & Development | PandaCodeGen" is fine. The description is 151 characters / 980px, slightly over the ~920px desktop line.
- Schema: WebSite, Organization, WebPage, SpeakableSpecification and FAQPage (5 questions, all visible). There is no BreadcrumbList, which is normal for a home page.
- Headings: the H1 is fine. The founder cards' H3s join words ("HassanJamal", "Imran RazaLadhani").
- Mobile (390px): no overflow. 22 of 82 text blocks are under 16px (12 to 15px labels such as "SCOPE AND PRICE AGREED BEFORE WORK STARTS"). The review-source links ("Trustpilot, August 2026") are 17px tall next to a card link and fail the 2.5.8 spacing check.

**Services (/services and 10 sub-pages)**
- Meta: titles over ~600px on /services (64 characters), /services/ecommerce (68) and /services/ai-seo (61). All 11 descriptions are over ~920px; /services/ai-seo is the longest at 231 characters.
- Schema: CollectionPage or WebPage, BreadcrumbList and FAQPage. All FAQ questions are visible.
- Headings: H1s are slogans, and 10 of 11 join words in the HTML text (finding 3). Nine pages share the H2 "A clear route to done.". H2s rarely name the service or platform (finding 2).
- /services/wordpress: see finding 6.

**Blog posts (88)**
- Meta: posts use their own title with no brand suffix (commit bff28a86). 10 titles are over ~600px, the longest being /blog/ai-referral-revenue-2026 at 76 characters. 82 of 88 descriptions are over ~920px.
- Schema: Article (with author, datePublished, dateModified and image) on all posts except /blog/webflow-user-accounts-sunset-date-2026, whose Article has no `image`. Most posts also carry FAQPage, BreadcrumbList and Speakable (89 pages, `cssSelector: ["h1","h2","[data-speakable='true']"]`). The h2 selector also picks up the cookie banner's H2s.
  - SoftwareApplication sits inside `about` on 31 posts, 2 work pages and /blog/cloudflare-emdash-wordpress-replacement. Example: `{"@type":"SoftwareApplication","name":"EmDash",...}` with no offers or rating.
  - Other types: Dataset (3 posts), DefinedTermSet (2 glossaries; 26 and 29 terms, matching their titles), SoftwareSourceCode (1).
- Article `headline` matches the `<title>`, not the H1, on 77 posts. Google does not require the two to match. Noted only.
- Headings: duplicate FAQ H2 on 47 posts (finding 4). The cookie banner adds two H2s ("Your privacy choices", "Cookie preferences") to every rendered page. The footer is in the DOM twice (one copy hidden), each with an H2 and about 20 H3 link labels.
- Mobile: no overflow on the 4 posts tested. /blog/web-accessibility-glossary has 77 of 91 text blocks at 14 to 15px.

**Topic hubs (/blog/topic/*, 11)**
- Meta: all 11 titles are over ~600px (74 to 86 characters, e.g. "Ecommerce Strategy and Ad Tracking Guides: Headless, Speed, Attribution | PandaCodeGen"). 9 of 11 descriptions are over.
- Schema: CollectionPage, ItemList and BreadcrumbList, all valid. The H1s are descriptive (good).

**Blog index (/blog)**
- H1 "Good questions. Worth a read." is a generic template line and joins words in the HTML text. Live it is "Web Development, Ecommerce and SEO Guides." The page receives 185 impressions over 90 days.
- Schema: CollectionPage, Blog and BlogPosting items (no images on the items, which is fine for a listing).

**Work (/work and 10 case pages)**
- Meta: 10 of 11 titles over ~600px (up to 89 characters, e.g. /work/emblematic-studio). All 11 descriptions over (up to 252 characters).
- H1s are just the brand name ("MyCustomPatches.", "Panda Patches."). The topic only appears in the title and in the Article headline.
- Schema: Article, BreadcrumbList and FAQPage. /work/medical-template, /work/panda-publisher, /work/sleek-jackets, /work/northdeck-group and /work/a-step-above-medical have no BreadcrumbList, unlike the other case pages.

**About (3), ai-info (5), manifesto, partners, contact, pricing, free-audit**
- About: ProfilePage on /about/hassan and /about/imran, with mainEntity pointing to the Person by @id. Valid. Titles are 74 and 84 characters with the brand doubled.
- /about and /manifesto titles are over ~600px. The /about description is 212 characters.
- ai-info pages are clean (only one description is over the limit).

**Locale (/de, /fr and their sub-pages, 11)**
- 4 titles over ~600px and 6 descriptions over. hreflang and `lang` are correct.
- INFERRED: the /de and /fr pages are not translations of the new English designs. For example, /fr/services has the H1 "Capacités et architecture." while /services has "Build what comes next.", and /de/about differs from /about in the same way. hreflang pairs them anyway. Worth a look, not urgent.

**Legal (5)**
- Titles are short (28 to 29 characters: "Privacy Policy | PandaCodeGen" and similar), which is fine.

### Rich-result status of each schema type found (checked 4 Oct 2026)

| Type on site | Google rich result today | Source |
|---|---|---|
| FAQPage (116 pages) | None. Notice: "no longer appear in Google Search starting May 7, 2026"; documentation removed 15 June 2026 | developers.google.com/search/docs/appearance/structured-data/faqpage, read 4 Oct 2026; corroborated by techwyse.com and ppc.land coverage |
| Article / BlogPosting | Supported (in Search Gallery) | Search Gallery, page "last updated 2026-06-15" |
| BreadcrumbList (144 pages) | Supported. The doc says "available on desktop" | .../structured-data/breadcrumb, last updated 2026-09-08 |
| Organization | Supported (in Search Gallery) | Search Gallery, 2026-06-15 |
| ProfilePage | Supported (in Search Gallery) | Search Gallery, 2026-06-15 |
| Dataset | Supported (in Search Gallery) | Search Gallery, 2026-06-15 |
| SoftwareApplication (33 pages, nested) | Supported only with `name` + `offers.price` + (`aggregateRating` or `review`). Ours have none of these | .../structured-data/software-app, last updated 2026-09-08 |
| SpeakableSpecification (89 pages) | Beta. "users in the U.S. that have Google Home devices set to English" | .../structured-data/speakable, last updated 2026-09-08 |
| ItemList | "Carousel" is in the gallery. I did not re-read which content types it covers | Search Gallery, 2026-06-15 |
| WebSite, WebPage, CollectionPage, AboutPage, ContactPage, Blog, DefinedTermSet, SoftwareSourceCode, CreativeWork | Not in the Search Gallery, so no rich result. They are harmless as entity markup | Search Gallery, 2026-06-15 |

The repo already knows FAQPage gives no Google display. Keeping it for Bing and AI crawlers is a stated choice (`src/data/blog.ts:30-35`), and I am not asking for it to change.

### Mobile and rendering (390px, Playwright, iPhone UA, 24 pages, one or more per template)

| Check | Result |
|---|---|
| Horizontal overflow (`scrollWidth > innerWidth`) | None on all 24 pages (390 = 390) |
| Body font | 16px on all 24 |
| Text blocks under 16px | Mostly labels. Notable: /blog/web-accessibility-glossary 77/91 (14 to 15px), /fr/pricing 33/43, /ai-info/pricing-and-guarantees 17/20. Nothing under 12px except one 11px eyebrow on /work |
| Tap targets under 24px (not counting links inside sentences) | 11 to 26 per page, almost all footer links (16 to 19px tall). On / and the glossary these pass the WCAG 2.5.8 spacing exception. Failures: the home page's review-source links next to card links, and the cookie banner's "Cookie Policy" link next to its button |
| Client-only content | None of substance (see above) |

---

## Part 2: Protected-field audit (protected-field-audit skill)

### Step 0 answers
- I found no written policy of protected fields in REDESIGN_ROLLOUT_PLAN or the trackers, so per the skill I used title, meta description and H1 as the baseline. I added H2s and FAQ questions as the brief asked.
- Corrections run through data registries (`src/data/spec-facts.json` via `spec()`, `google-updates.ts` via `UPDATE_STATS`, `company-facts`) and through hand edits. Registry values flow into body text and FAQ answers automatically. Hand-written meta descriptions and titles do not always use them. That gap is where finding 1 lives: the description and body read `UPDATE_STATS`, so they are consistent with each other but stale against Google.

### Method
I extracted every number, year, version, price and superlative from title, meta description, H1, H2 and FAQ questions on all 151 pages. I then searched for each one in the same page's rendered prose (paragraphs, lists, tables and FAQ answers, with `<details>` opened). I read every miss and every count claim by hand, and checked each count claim against the page structure (e.g. counting the numbered H2s and H3s). Raw files: `protected-flags.json` and `ctx-all.txt`.

### Per-page results (only pages with an issue or worth recording)

| Page | Field | Field says | Body / source says | Class |
|---|---|---|---|---|
| /blog/google-algorithm-updates | meta description, opening line, /blog and hub cards | "39 ranking updates since November 2021", "most recent is the August 2026 spam update" | Google dashboard lists a September 2026 spam update starting 24 Sep 2026 (read 4 Oct 2026). Body has the same stale count | Number-only drift, in body and fields. Fix the data file and re-read the dashboard |
| /blog/nextjs-hosting-zero-cost | title | "Is Vercel Free? 2026 Pricing & the 100GB Cap" | "Vercel publishes up to 100 GB a month ... as a fair-use guideline, not as an itemised plan allowance" | Wording/direction. Needs sign-off |
| /blog/top-custom-web-development-agencies-usa-2026 | title vs meta | "Top Custom Web Development Agencies USA (2026)" | Meta: "A non-ranked 2026 shortlist". The FAQ answer says there is "no objective best agency" | Wording tension. Needs sign-off (the title probably targets the query on purpose) |
| /about | meta description | "trading since February 2026" | Not stated on /about. Stated on /ai-info/team-and-company ("has traded since February 2026") | Supported elsewhere, not on this page. Low |
| /blog/google-algorithm-updates | Dataset schema | "41 entries" | Body: 39 updates plus 2 "ranking issue" entries | Consistent (explained in the body). No action |

### Checked and consistent (CONFIRMED)
- **EmDash** (/blog/cloudflare-emdash-wordpress-replacement): the description's "EmDash 1.0 shipped on 28 September 2026" matches the body. The hero line "Stable, version 1.1.0" and the FAQ answers ("current release is 1.1.0", "It is out of beta") agree. The H2 "Is EmDash production ready in 2026?" and the FAQ question "...or still beta?" are both answered as stable. The card excerpt and its cardStat ("1.0 / stable release, 28 Sep 2026") match. The only "beta" mentions in the body are historical (the April launch, and a README that still said "beta preview" on 3 Oct). Other pages that mention EmDash (/blog/wordpress-vs-nextjs, /blog/wordpress-migration-cost, /blog/topic/wordpress, llms.txt) make no version claims.
- **Count claims match the structure**: "12 Causes" (12 numbered H3s), "12 Checks" (12 numbered H2s), "26 Terms" (26 DefinedTerms and 26 H3s), "29 Terms" (29 and 29), "8 Checks" (8 H2s), "eight-step" on /blog/how-to-achieve-100-pagespeed (Steps 1 to 8).
- **Figures in fields that match the body**: /blog/ai-search-visibility-tracking "77 pages, 6,700 AI impressions"; /blog/ai-referral-revenue-2026 "6.7x", "760 orders, $271,620.61"; /blog/cms-market-share-2026 "65.2% in 2022 ... 59% today"; /blog/web-accessibility-statistics-2026 "95.9%"; /work/mycustompatches "about 22 days"; /work/emblematic-studio "22 products"; /work/northdeck-group "12-service"; /pricing "$1,500"; /services/ai-seo "$500 a month"; /fr/pricing and /de/pricing tier prices; /blog/custom-website-5000-whats-included "$5,000".
- **Dated deadlines in titles that have passed**: Stocky "August 31, 2026" and Webflow User Accounts "January 29, 2026". Both bodies say the date has passed. Fine.
- **Blog index cards against posts**: all 88 cards link to live posts. Card "Updated" date, Article `dateModified` and sitemap `lastmod` agree on every post. 17 card titles differ in wording from the post `<title>` (e.g. the card "Wix Migration Cost in 2026: Scope, Tiers and Export Guide" against the title "Wix Migration Cost 2026: What Leaving Wix Costs"). None contradicts the other.

### cardStat values in src/data/blog.ts
- No page in the new build renders them. `BlogPageClient.tsx` is the only consumer, and the new /blog uses `BlogIndexDesign` (`src/app/blog/page.tsx:3`), so the stats have no SEO effect today. CONFIRMED.
- I still checked all 82 against their posts. Two have no support: "12 checks" on cheap-web-developer and on how-to-speed-up-your-website. The second is fine in substance (12 numbered sections). The first has no 12-item list in the post. If the old card design comes back, fix cheap-web-developer first. The google-algorithm-updates cardStat is `${UPDATE_STATS.total}`, so it would update with the data file.

### Is this a pattern from a bulk edit?
No sign of one. The drift is one stale data source (google-updates.ts) plus three hand-written fields. The registry pattern (`spec()`, `UPDATE_STATS`) is keeping fields and bodies in step. The weak point is that registries are only as fresh as their last re-read: google-updates.ts was last read 13 Sep, and a new update arrived 24 Sep.

---

## Not checked, and why
- **Google Rich Results Test / URL Inspection** on the new build: it runs on localhost and is not deployed, so Google's tools cannot reach it. I did not spend gsc-readonly inspection quota on old-site URLs.
- **Search Console enhancement reports** (Software apps, Breadcrumbs): the gsc-readonly tools do not expose them, so the SoftwareApplication point stays INFERRED.
- **Pixel widths** are approximate: canvas measureText with 20px Arial for titles and 14px Arial for descriptions, against ~600px and ~920px. Google's real cut-off varies by device and font.
- **Tap-target spacing** (the WCAG 2.5.8 circle test) was run on 2 pages only (/ and the glossary). The other 22 pages got size counts only.
- **Googlebot's own text extraction** for the joined-word headings: there is no way to observe it locally, so the impact stays INFERRED.
- **Real-device rendering, Core Web Vitals and CrUX**: out of scope for this group, and there is no field data for an undeployed build.
- **Live site**: I made about 20 requests to it (H1s of 6 pages, the /services/wordpress redirect, the EmDash SoftwareApplication markup, llms-full.txt). I did no full live crawl.
- **Body accuracy beyond the field comparison** (the verify-primary-source hand-off): only the Google dashboard was re-checked against its primary source. The EmDash 1.1.0, Vercel and Divi 5 claims were checked for internal consistency only, not re-verified upstream.

## Raw files (C:\Users\hassa\AppData\Local\Temp\claude\c--Projects-pandagen-official\c2200d0e-2cb2-4bdf-ab2d-b343777f4298\scratchpad\audit\C-raw\)
- `crawl-full.json`: all 151 URLs, with server and rendered extracts, JSON-LD types, FAQ visibility and Article fields
- `technical-summary.json`: issues per page with template family, title and description characters and pixels
- `protected-raw.json`, `protected-flags.json`, `protected-flags.txt`, `ctx-all.txt`: protected-field extraction and contexts
- `server-vs-rendered.json`: client-only text per page
- `heading-joins.json`: the 48 headings with joined words
- `mobile-390.json`: mobile checks for 24 pages
- `dates-and-titles.json`: card, schema, sitemap and visible dates, plus card title against title and H1 for 88 posts
- Scripts: `crawl.cjs`, `analyze.cjs`, `protected.cjs`, `protected-analyze.cjs`, `ctx.cjs`, `mobile.cjs`, `spacing.cjs`, `joins.cjs`, `ld.cjs`
