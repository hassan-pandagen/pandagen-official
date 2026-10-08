# AI information page: before and after

Reviewed 2 October 2026. Scope: [`/ai-info`](../../../src/app/ai-info/page.tsx), the owner-supplied LinkedIn screenshots, current shared company facts, and the public guidance linked below. This is a local copy and structure change, not evidence of search impact.

## What the example establishes

The screenshots show a LinkedIn author attributing a Google AI Overview mention of Nectiv to a published “AI Instructions” page. They show a citation beside some facts about that company. They do not establish that the page caused the mention: there is no controlled before-and-after observation, and Google chooses links by query. The LinkedIn post itself was not readable in the web tool, so the screenshots are the only copy of the post examined here. The underlying [Nectiv page](https://nectivdigital.com/ai-instructions) **was** inspected directly on 2 October. It contains basic identity, key personnel, ideal clients, services, methods, common use cases, and a short set of instructions for assistants. Its live appearance in Google AI Overviews was not independently verified.

Google's [AI features guidance](https://developers.google.com/search/docs/appearance/ai-features) says that a supporting page must be indexed and eligible for a snippet, and that no special AI file, markup or optimization is required. Its [July 2026 guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says Google Search ignores `llms.txt`; it recommends useful, public, well-structured content, links and visible facts. [Organization markup guidance](https://developers.google.com/search/docs/appearance/structured-data/organization) permits a descriptive entity record and says it should agree with the page. [OpenAI's publisher FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) says access for OAI-SearchBot helps ChatGPT read page summaries and snippets. None of those sources promises a citation for PandaCodeGen.

The useful part of the example is its specific, inspectable information: who the business serves, what it does, and where the supporting facts come from. That is a sound editorial choice regardless of which system reads the page. Nectiv's explicit ideal-client and use-case lists led to one further improvement here: the local page now opens with the company's legal and trading identity, founders, dates, address and service area, followed by concrete client situations. These details are rendered from the existing fact source, and the address is clearly labelled as an office rather than a walk-in service location. The page remains readable for a person considering a project.

## Copy comparison

| Subject | Before | After |
|---|---|---|
| Opening | A custom Next.js studio described mainly through platforms and migration. | Names WordPress websites, custom sites, stores and software, and invites a visitor to describe the desired work before choosing a platform. |
| Identity at a glance | The legal name, founding distinction and address were available only deeper in the reference set. | A short fact list on the main page presents the trading and legal names, founders, trading and LLC formation dates, mailing office and service area from `COMPANY`. |
| Intended customer | Implied by a long list of services. | Names three specific situations: an editable WordPress site, a repair-versus-migration decision, and a store or connected workflow. |
| Founder relationship | A duplicated standalone assertion. | Names Hassan's engineering role and Imran's marketing role in the first short-answer section, then links to `/about`. |
| New WordPress builds | Absent from the older summary and FAQ. | Explicitly available when they fit, with a direct link to `/services/wordpress`; migration links separately to `/services/wordpress-migration`. |
| Price | “Work starts at” $1,500 implied one floor for all builds. | Labels Starter, Growth and Scale as **custom website** starting points. WordPress builds and focused improvements are quoted to scope. Tier details, payment and refunds draw from `COMMERCIAL`. |
| Project proof | Mentioned MyCustomPatches and Panda Patches in one paragraph. | Links Emblematic Studio, MyCustomPatches, Ladies 4 Jesus and Panda Patches with each record's client or founder relationship. It explicitly says these examples are custom builds. |
| Guidance for summarizing | No concise guidance for readers or assistants on how to use the linked facts. | A short, visible section says to cite the relevant service, pricing or project record, preserve the client versus founder-owned distinction, and keep custom-build starting prices and project results in their stated scope. |
| Repetition | A full company-fact grid, a second independent list of company claims, and more summaries below. | One short-answer section, a price section and direct links to the detailed company, service, commercial and evidence records. |
| Search claims | A statement about the site's own AI Overview citation sat alongside unrelated business facts. | No claim that this reference page earns citations or search traffic. |
| Page date | The visible page and `AboutPage` markup said it was published on 15 February 2026, but the local history does not establish that publication date. | Removed the unverified publication date and retained the actual 2 October update date. |

The `FAQPage` answers are rendered from the same `faqs` list that produces the visible FAQ. The page's `Organization.description` now uses the same `ORGANIZATION_DESCRIPTION` as the visible introduction. The written price list and answers read `COMMERCIAL` values so routine fact updates need one source edit.

The linked pricing reference now labels Starter, Growth and Scale as custom-build starting points and states that WordPress work is separately scoped. The team and migration reference pages use the current offer and a narrower date label: 10 September was the original evidence review, not a claim that every updated fact was rechecked that day. Their structured-data and sitemap modification dates reflect the 2 October edits.

## Evidence audit — `/ai-info` — 2 October 2026

**Consequential areas checked:** service scope, WordPress availability, price scope, founder roles, handover, project relationship, and search causation. **Blocking defects remaining in this page:** none found in those areas.

| Earlier wording or presentation | Finding | Change |
|---|---|---|
| One $1,500 entry point for all projects | Overstated scope once WordPress builds and small improvements became explicit offers. | Custom tiers are labelled as such; WordPress and focused work are quoted to scope. |
| Every build characterized as server-rendered Next.js | Incompatible with offering WordPress projects. | Removed the platform-wide assertion. |
| “100% of fees” refund claim | More specific than the shared refund policy, which depends on signed terms and exceptions. | Removed the separately typed claim; the FAQ now reads the shared refund fact. |
| Founder-owned Panda Patches near client evidence | Relationship could be missed in a summary. | Lists the relationship beside each project link. |
| AI Overview example treated as a playbook | The post does not isolate what caused the observed mention. | Retained the public reference page for clarity and sourcing, without a visibility promise. |
| Project evidence reference date | The page's `dateModified` remained 8 August, and the sitemap said 19 September, while its shared project list contains additions through 1 October. | Updated both to 2 October, when this reference was reviewed. |

**Should fix elsewhere:** Any external company profile still describing PandaCodeGen only as an off-WordPress custom studio needs its own authorized update. The main service comparison report tracks that work. If a delivered WordPress client project is later published, add it to the evidence records before citing it here.

**Not checked:** The author's search conditions and whether the cited Nectiv page actually caused the AI Overview mention; the live Google result shown in the screenshot; a live production crawl or Rich Results Test after deployment; every historical figure in the linked project records; whether a completed WordPress build is ready for publication. These limits do not alter the narrower conclusion that the revised local page states the current offer more clearly.

**Evidence boundary for the page:** It can describe PandaCodeGen's own offer, people, price terms and labelled work. It cannot say a special AI information page causes Google or ChatGPT to cite the site. After deployment, monitor the page's indexed status and Search Console impressions, clicks and available generative-AI report data; compare a stated period with its baseline. Any movement is an observation, not proof that this one page caused it.
