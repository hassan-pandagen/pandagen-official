# Free data sources and outreach sender

Checked 16 September 2026. The owner chose public research for this pass and proposed `hassan@mail.pandacodegen.com` as the sender. The owner subsequently confirmed Zoho as its provider.

## Recommended free setup

Start with **Ahrefs Free for PandaCodeGen**, verified through a supported ownership method, and the existing **Google Search Console Links report**. Use the standalone competitor checker and optionally a free Semrush account to supplement public discovery. These improve coverage; none establishes that an unreported link cannot exist.

| Source | Verified free access | Practical use and limit |
| --- | --- | --- |
| [Ahrefs Free](https://help.ahrefs.com/en/articles/13002606-what-can-i-use-for-free-in-ahrefs) | Site Explorer for verified sites; up to 1,000 backlinks and keywords visible at once. | Establish the observed PandaCodeGen baseline. It does not unlock full reports for competitors you do not own. |
| [Ahrefs standalone Backlink Checker](https://ahrefs.com/backlink-checker) | [Official FAQ](https://ahrefs.com/faq) currently describes the top 20 backlinks for any domain without an account. | Useful competitor sample, not a full export or guaranteed list of the best outreach prospects. Older descriptions saying 100 links were not used. |
| [Semrush Backlinks](https://www.semrush.com/kb/21-backlinks) | Without the SEO Toolkit: 10 requests/day and 10 results/report. | Small samples for our domain and competitors. Export permissions vary by subscription; free web access does not establish API/MCP access. |
| [Semrush free account](https://www.semrush.com/blog/what-can-i-do-with-a-free-account-from-semrush/) | Official guide says no credit card is required for a free account. | Choose the free account rather than assuming a paid trial is necessary. |
| [Search Console Links report](https://support.google.com/webmasters/answer/9049606) | Own-property link reports; latest-link and sample exports. | Existing Google access is useful for link inventory even though it cannot discover demand outside existing rankings. Google explicitly says this is a sample, can include removed links, and does not identify nofollow. |

Keep a dated source export rather than copying totals into a document. Capture source, domain/subdomain scope, date, active versus historical setting, referring URL, target, anchor and link attributes when available. Deduplicate referring domains separately from individual referring pages. A domain that already links to PandaCodeGen can still be a useful new-page/editorial opportunity, but is not a new referring-domain win.

No paid subscription was started and no account was created during this audit. Plugin discovery found Ahrefs and Semrush integrations, but neither was connected. A free website account does not automatically confer integration/API permissions.

## Sender assessment

**Use Hassan Jamal / PandaCodeGen as the display identity.** The proposed founder address is suitable for personal, relevant outreach if it is an operational mailbox. A subdomain by itself does not make a message more trustworthy or guarantee inbox placement.

Public DNS was read on 16 September 2026:

| Record | Observed |
| --- | --- |
| `mail.pandacodegen.com` MX | `mx.zoho.com` priority 10; `mx2.zoho.com` priority 20 |
| Subdomain SPF | `v=spf1 include:zoho.com ~all` |
| `_dmarc.mail.pandacodegen.com` | `v=DMARC1; p=quarantine; rua=mailto:hassan@mail.pandacodegen.com` |
| Root DMARC | `v=DMARC1; p=none;` |

This points to Zoho for inbound mail and advertises Zoho for SPF. It does **not** prove the individual mailbox exists, receives replies, has DKIM configured, or sends with aligned authentication. DKIM was not checked because the selector was not supplied; no conclusion was drawn from that. [Google's sender guidance](https://support.google.com/mail/answer/81126) explains authentication requirements and alignment.

At the initial research pass, no sender credentials, mailbox connection, or signed-in browser were available. Plugin search found Zoho CRM, not a verified Zoho Mail connector; these are different products. Browser inventory returned no available browser. Do not substitute a website's transactional sender or an unrelated Gmail account. The subsequent direct MCP connection is recorded below.

### Supported Zoho Mail connection found in follow-up

Zoho provides its own hosted Mail MCP connection. Its [official overview](https://www.zoho.com/mail/help/mcp/getting-started.html) says this works with free and paid Mail accounts across data centres. This does not establish unlimited free MCP usage; current service limits apply.

The account owner can sign into [Zoho MCP](https://mcp.zoho.com/), create a server, choose **Add Tools → Zoho Mail**, and connect it to a compatible MCP client through OAuth. Use Authorization on Demand for the owner's account. See [official server setup](https://www.zoho.com/mail/help/mcp/mcp-server-configuration.html).

For this campaign, the relevant [Mail tools](https://www.zoho.com/mail/help/mcp/zoho-mail-mcp-tools.html) are `getMailAccounts`, `getAccountDetails`, `getAllFolders`, `listEmails`, `SearchEmails`, `getMessageContent` and `sendEmail`; the connected server exposes `sendReplyEmail` for later correspondence. Reading Sent permits duplicate checks before sending. Deletion/admin operations are not needed.

Zoho treats the generated endpoint as sensitive. Configure it privately in the client's MCP connection settings rather than putting it into this repository or conversation. No app password is needed for the documented OAuth MCP route. The owner subsequently supplied the endpoint. A direct initialization returned HTTP 401 with OAuth resource metadata, confirming that sign-in was still required. The server was then added as `zoho-mail` in the owner's local Codex configuration and its OAuth browser flow started. The owner completed sign-in and the CLI returned `Successfully logged in` with exit code 0. The current session's callable tool catalog has not loaded the new Mail server, so account verification and sending remain pending a client/MCP refresh. No mail was sent. The endpoint and credentials are not recorded in this repository. The connection enables mailbox operations; the Sanity/Vercel application forms and Supabase community still have separate access requirements.

After the client refresh, the original Zoho Mail tools became callable. `getMailAccounts` succeeded but returned only `hello@pandapatches.com`, with sending identities `hello@pandapatches.com` and `billing@pandapatches.com`. The requested `hassan@mail.pandacodegen.com` address was not present. No message searches, message reads, or sends were performed in the Panda Patches mailbox. The owner then created a separate `PandaCodeGen-Backlink` MCP server while signed into the PandaCodeGen Zoho account. It was added to Codex as `zoho-backlink`, and its OAuth login completed successfully on 17 September 2026. A subsequent restart still resolved the old account because both Zoho servers export the same tool namespace. The old `zoho-mail` registration was therefore removed, leaving only the authenticated `zoho-backlink` server. After the final refresh, account discovery verified `hassan@mail.pandacodegen.com` as the primary and active sending identity. A duplicate search found no earlier message to DC House. The prepared citation-correction email was accepted by Zoho and independently verified in Sent under provider message ID `1789653768507155301`.

The owner has authorized relevant personalized outreach. The outstanding requirement is **access to the intended sending mailbox**, not another approval of the overall task. Once available, check Sent for duplicates, send only the eligible prepared messages, and record the actual provider message ID and timestamp in the outreach ledger. Do not mark a prepared email or form as sent.
