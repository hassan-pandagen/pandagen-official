# Live AI Overview capture, and what it changed in the draft

Captured 17 September 2026. This replaces the labelled WebSearch proxy used in the first
`ai-overview-gap-fill` pass, which ran when Firecrawl was awaiting OAuth and the Percuity
MCP had disconnected. Raw capture:
[`ai-overview-capture-2026-09-17.json`](../../evidence-audit/keyword-evidence/ai-overview-capture-2026-09-17.json).

## Method, and the part that needed a person

Playwright 1.63.0 driving real Chrome, not the bundled Chromium, with a persistent profile,
`locale: en-US` and `timezoneId: America/New_York`. Google queried with `gl=us&hl=en&pws=0`,
per the skill's geo warning.

Google served its `/sorry/index` captcha to the bundled Chromium and to real Chrome alike, on a
cold profile. That rules out the binary as the sole cause but does not isolate what triggered it:
an automation signature, IP reputation, the fresh profile and request rate are all consistent with
what was observed. Treat the cause as unknown. The captcha was solved by hand in the open window,
and the cleared cookie carried to the other two queries.

Perplexity was attempted on all three queries as a cross-check. It returned a Cloudflare
interstitial: zero characters of answer text, no citations. Nothing from it is used here.

All three Google queries returned a genuine AI Overview, labelled as such.

| Query | Overview | Length |
| --- | --- | --- |
| ai built website checklist | yes | 2,140 chars |
| how to test a website before launch | yes | 1,772 chars |
| why is my contact form not sending | yes | 2,106 chars |

## What else was on the page, in this one session

One session, one geo, one moment. These are reported titles in the order they appeared, not rank
positions, durable rankings or anything about search volume. Destination hosts were read from the
rendered SERP text because the `h3` hrefs were Google redirect URLs. The titles and the full SERP
text are retained in the JSON so the ordering can be rechecked.

Titles for "ai built website checklist", in the order shown: Orbit Media (AI
readiness, a different intent), Wix's builder product page, local-business-consulting.com
("15-point checklist ... forms, accessibility, SEO, security, ownership"), pagelensai.com,
bakry.tech ("1. Confirm ownership and recovery access — P0 · 2. Create and test a rollback
or restore path — P0 · 3. Remove exposed secrets"). The Overview itself cites two YouTube
videos, codeble.com.au and Wix.

bakry.tech is the closest competitor: evidence-first, priority-ranked, and already covering
ownership, rollback and secrets. Our check 8 covers ownership, restore and rollback, so that
ground is held. Checking after launch is not by itself the gap either; earlier research already
found competitors covering recurring checks. The distinction that holds up is the recordable
result, the stated pass criteria and instructions an owner can finish. Note also that its neighbour in the results is titled "10 Checks Before
Launch" against our proposed "8 Checks Before Launch and After Changes"; the differentiator
has to be the second half of that title, and the draft has to earn it.

## Sub-fact diff

Covered already, no change needed: test every button, link and form; interactive elements
that are static placeholders; leftover generated filler copy; ownership, rollback and
recovery; spam folder.

Deliberately not added, because they belong to another page's job. Speed, Lighthouse and
image compression; the browser matrix; sitemaps, redirects and meta descriptions, which the
Lovable indexing guide owns; brand voice. Adding a generic launch-QA ladder here is exactly
the commodity content this article is differentiating from.

Four gaps filled:

| Gap | Source query | Where it went |
| --- | --- | --- |
| Sender authentication, SPF and DKIM | why is my contact form not sending | Check 2, plus a new FAQ entry |
| Phone, postal address and opening hours named specifically | ai built website checklist | Check 1 |
| Tablet width, not phone alone | how to test a website before launch | Check 5 |
| Things that lapse on a date, not on a change | how to test a website before launch | When to repeat the checks |

The launch Overview mentions SSL. The domain, certificate, renewal and payment-detail wording that
went into the article is a reasonable editorial extension of that, not a verbatim fact the Overview
establishes.

The first is the substantive one. Sender authentication is the first cause that Overview suggests,
which says nothing about how often it is the actual cause, and the draft had zero mentions of SPF,
DKIM or DMARC. It belongs in check 2 because it is
the stage immediately after the sending service reports success, which is where the draft
stopped. Both sources were fetched and verified before use:

- [Google Workspace](https://knowledge.workspace.google.com/admin/support/troubleshooting/troubleshoot-gmail-not-getting-contact-form-messages):
  "Contact form messages are typically authenticated with SPF, SMTP relay, or DKIM." And:
  "When other services send email for your domain, you must update your SPF record to include
  these senders. If you don't, messages from these senders are more likely to be marked as spam."
- [Resend](https://resend.com/docs/add-a-domain): "Provide the DKIM and SPF configurations
  (`TXT` and `MX` or `CNAME` records) to your DNS provider."

Both returned HTTP 200 on a link check after insertion.

## One claim from the Overview that was not used

That Overview's third cause is a misconfigured "From" address, specifically setting it to the
visitor's own email and tripping anti-spoofing filters. It is attributed there to WP Mail
SMTP, a WordPress plugin vendor. The Google Workspace page says nothing about the From
address; asked directly, it returned no such content. The claim is plausible and commonly
repeated, but it is not supported by the primary source we would cite, so it is left out.

The same Overview is heavily WordPress-framed throughout: PHP `mail()`, SMTP plugins, Contact
Form 7. Our article is not WordPress-specific and did not adopt that framing.

## Draft state after the pass

After a review of this pass, four sentences were corrected for asserting frequencies and an
exclusivity the evidence does not carry, the DNS paragraph was shortened to follow the provider's
own branch rather than naming DNS as the next cause, and three overlapping email FAQs were merged
into one. 2,700 up to 3,036 and back to 2,826 words, 14 H2s unchanged, 5 FAQ entries, 0 em dashes.
The byline reads Reviewed, not Published, and the worksheet link stays 404 in public until the
article and the worksheet deploy together.
