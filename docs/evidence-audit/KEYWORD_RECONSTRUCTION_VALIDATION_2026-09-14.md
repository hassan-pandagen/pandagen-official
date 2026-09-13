# Auditor validation of the reconstructed keyword record

Reviewed 14 September 2026. The provider-attribution question is resolved: the supplied record identifies **DataForSEO, accessed through Percuity MCP's `get_keyword_data`, US (`2840`), English (`en`), with difficulty requested**. Its status is an **attributed reconstruction of reported September 13 results, written September 14**. This is usable provisional evidence for prioritization, with the limits below.

Inputs: the supplied [README](../../audit/keyword-volume-2026-09-13/README.md), [reconstructed JSON](../../audit/keyword-volume-2026-09-13/raw-captures.json), and [change-review document](CHANGES_FOR_REVIEW_2026-09-13.md). The original tool responses were not available to authenticate against, and this review did not rerun Percuity or DataForSEO. Checks establish internal consistency and agreement between documents, not independent reproduction of the original results. The supplied files are preserved unchanged by this review.

**Repository preservation remains open:** both supplied source files are untracked and excluded by the `/audit/` rule at [`.gitignore:124`](../../.gitignore#L124). They are locally retrievable, but an ordinary add/commit/push will omit them. Preserve the two files in a versioned evidence location or explicitly track those exact files before relying on their availability to a reviewer using another checkout.

## What the file check establishes

| Check | Result |
|---|---|
| JSON validity | Parses successfully |
| Batch sizes | 20 / 18 / 18 / 16 / 11, matching the account of five calls |
| Keyword rows | 83 rows and 83 unique keyword strings; no duplicates |
| Status and volume | 46 `VIABLE` rows with reported volume; 37 `NO_VOLUME_REPORTED` rows with null volume |
| Independent fields | 14 null-volume rows still have KD; two positive-volume rows have null KD |
| Quoted numeric values | Explicit numeric volume/KD/CPC claims checked in the review agree with the reconstruction; omissions and narrative conflicts are listed below |

In particular, all four commercial AEO rows agree:

| Exact keyword | Reported volume/mo | KD | Reported CPC |
|---|---:|---:|---:|
| ai seo agency | 1,600 | 0 | 45.01 |
| ai seo services | 1,300 | 2 | 41.06 |
| geo agency | 720 | 24 | 44.22 |
| aeo services | 480 | 9 | 41.74 |

These are reconstructed provider estimates for the stated US settings. CPC is transcribed numerically here; the accompanying narrative uses dollar signs, but the JSON does not preserve a currency field. The named measurement period and monthly breakdown are also absent.

## Corrections still needed in the interpretation

**Missing volume is not a diagnosed reporting-floor result.** The defensible wording is: **“No search-volume value was returned for this term under the recorded settings; this does not establish zero demand.”** The reconstruction supplies no definition of Percuity's `NO_VOLUME_REPORTED` mapping or explanation for each null. DataForSEO documents other causes of null volume, including advertising-policy restrictions. There is no evidence those restrictions explain these particular service terms; the point is that null alone does not identify its cause. “Below the reporting floor” and “no measurable volume” are therefore stronger than this record establishes. [DataForSEO on missing volume](https://dataforseo.com/help-center/no-search-volume-data-for-some-keywords).

**KD now has a provider-specific reference.** DataForSEO describes a country-specific model using backlink-derived domain and page scores from the top ten organic results. It is not a site-specific forecast of PandaCodeGen's rankings. The file's `VIABLE` status is also not evidence that a keyword is commercially viable for this business. [DataForSEO KD methodology](https://dataforseo.com/help-center/what-is-keyword-difficulty-and-how-is-it-calculated).

**Keep close variants separate from independent audience counts.** DataForSEO documents that its Google Ads source can group similar keywords. Do not add the four AEO volumes, or adjacent redesign phrases, and describe the sum as distinct searches or buyers. The actual upstream endpoint and Percuity's field mapping were not preserved. [DataForSEO on grouped search volumes](https://dataforseo.com/help-center/sv-broad-exact-phrase-match).

**The review table omits available difficulty values.** `nextjs development agency` has volume **10 and KD 14**, although the review displays a dash for KD. Its grouped missing-volume row also hides KD **12** for `ai ready website`, **19** for `ai optimized website`, and **46** for `llms txt`. Missing volume must not be turned into missing difficulty.

**The AI-builder rationale overstates the absence of reported demand.** These rows are present in the supplied record:

| Exact keyword | Reported volume/mo |
|---|---:|
| are ai website builders good | 10 |
| ai website builder for business | 30 |
| can ai build a website | 320 |

The five named problems/limitations/developer-comparison phrases do have null volume. That supports a narrower statement about those five phrases, not “the only real volume is the head term.” These additional terms do not by themselves justify retitling the cost-decision article: relevance and search intent still need to support any change.

**Volatility is a caution, not a demonstrated finding here.** The README reports six-month arrays showing 2–4× swings, but no monthly arrays survive in the reconstruction. That observation cannot be checked from this file. The age of the category and the statistical rarity of low KD combined with high CPC are also not established by this dataset. Avoid presenting those explanations as measured results.

## Effect on the external keyword priorities

This revises the original research's ordering; it does not replace its customer evidence or establish current Google positions. All figures below come from the [same reconstruction](../../audit/keyword-volume-2026-09-13/raw-captures.json), not a fresh query or a UK capture. The recommended actions are editorial judgments combining that provisional metric evidence with the original niche and page-coverage review.

| Family / exact measured phrase | Reported volume/mo; KD | Recommended use |
|---|---|---|
| website redesign services | 6,600; 10 | Give broad redesign prominent commercial coverage on `/services`, alongside migration. This is the largest reported estimate among the closely relevant service phrases in this shortlist. |
| website migration services | 720; 3 | Keep this a core commercial target on `/services`; define rebuild scope to distinguish the offer from a hosting transfer. |
| seo migration services | 170; 0 | Cover the agreed redirect, URL and launch-check work within the same service destination before considering another overlapping page. |
| website redesign cost | 260; 5 | Improve existing cost/pricing explanations and their links to the commercial destination. |
| website migration seo checklist | 260; 4 | Support the existing migration-risk content with a concrete checklist; avoid a duplicate article if the same task is already served. |
| white label web development | 320; 1 | Improve `/partners` within the actual capacity and pilot offer; commercial expansion remains conditional on delivery capability. |
| wordpress alternative / webflow alternative | 720; 6 / 320; 0 | Reassess existing comparison/exit coverage. Alternative searches may seek software, so volume alone does not establish agency-buying intent. |
| ai seo agency / ai seo services | 1,600; 0 / 1,300; 2 | Prioritize defining one genuine commercial offer. A dedicated page remains conditional on actual scope, pricing and delivery; KD does not make it an easy-ranking promise. |

The Webflow-to-Next.js and GoHighLevel integration/exit phrases retain useful external customer evidence, but this reconstruction supplies no positive volume evidence for the tested spellings. Move them below broad redesign/migration for acquisition investment. Prefer useful sections and improvements to existing platform pages; treat a new GHL exit guide as conditional on incremental value and effort. Do not discard the topics as “not SEO opportunities,” and do not treat absence from a small result sample as proven invisibility.

For AEO, one commercial destination can serve related service terminology and give the informational cluster a relevant destination. It should be supported by actual delivery scope and evidence. Neither this table nor the informational/commercial distinction proves zero cannibalization.

## What a stronger capture should preserve

Use separate US and UK captures with a named 12-month period and monthly rows, English and a recorded search network. Retain the complete original request and response, endpoint/tool version, retrieval timestamp, provider update dates where returned, currency, and any wrapper transformations or status definitions. Preserve each later capture separately; a rerun cannot retroactively authenticate the September 13 response.

Pair demand validation with country/device-controlled search-result checks and existing-page coverage. The former helps estimate demand; the latter tests whether PandaCodeGen is absent and what intent a proposed page must satisfy. Neither can be inferred solely from the site's existing GSC queries.
