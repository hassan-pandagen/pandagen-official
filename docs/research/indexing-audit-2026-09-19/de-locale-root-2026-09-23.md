# /de "URL is unknown to Google" — no site defect found

Investigated 23 September 2026, using the Search Console URL Inspection API
(read-only, newly connected) plus live fetches of the production site.

## Conclusion

**There is nothing to fix in the codebase.** `/de` is technically
indistinguishable from `/fr`, which Google has indexed. The difference is
Google's crawl scheduling, not a defect on our side.

This note exists because the opposite was asserted earlier the same day. The
URL Inspection result for `/de` returned no `sitemap` array and no
`referringUrls`, and that absence was read as evidence the page was missing
from the sitemap and unlinked. It is not. Those fields are empty **because**
Google holds no index record for the URL — they are a consequence of the
unknown state, not its cause. Checked directly, both are present.

## What was checked, and what it returned

| Check | `/de` | `/fr` |
| --- | --- | --- |
| HTTP status | 200 | 200 |
| Canonical | self | self |
| `robots` meta | `index, follow` | `index, follow` |
| hreflang alternates | en, fr, de, x-default | en, fr, de, x-default |
| In `sitemap.xml` | yes | yes |
| Sitemap `priority` / `changefreq` | 0.9 / monthly | 0.9 / monthly |
| Disallowed in robots.txt | no | no |
| Pages linking to it | 7 | 7 |
| Anchors pointing to it | 26 | 26 |
| GSC index state | URL is unknown to Google | Submitted and indexed (crawled 1 Aug) |

The two sitemap entries are adjacent and byte-identical apart from the path.
The homepage anchor markup is identical apart from the locale.

## Note on the GSC UI disagreeing

The Page Indexing report listed `/de` under "Discovered – currently not
indexed" as of its 18 September update, while URL Inspection on 23 September
returned "URL is unknown to Google". These are not contradictory: the report
is a periodic aggregate, Inspection is live, and a URL that is known but never
crawled can legitimately have no index-status record to report. Do not treat
either as proof the page was removed from Google's awareness.

## What would actually move it

Nothing in this repository. The remedy is a URL Inspection → **Request
Indexing** in the Search Console UI. The Indexing API cannot be used: Google
restricts it to `JobPosting` and `BroadcastEvent` pages, and our
`gsc-readonly` connection is scoped to `webmasters.readonly` regardless.

One genuine, non-`/de`-specific weakness did surface: only **7 of 146**
sitemap URLs link to either locale root. That is thin for both languages
equally, and is worth addressing on its own merits rather than as a fix for
this symptom.
