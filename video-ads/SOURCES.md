# Sources for every claim

Repository revision used for facts and captures: `63a6bdce767ab5dee8ed2c4027e948a72a7d8729` (branch `claude/sweet-pasteur-m4lbah`, HEAD = the redesign commit "feat: complete launch typography, previews and responsive polish"). Paths are repository-relative.

## Film 01: A website that fits your business

### Numeric and commercial claims

| On screen or spoken | Exact wording in film | Source |
|---|---|---|
| Starting price | "Custom websites from $1,500." (end card) | `src/data/company-facts.ts` line 113, COMMERCIAL › Starter: "From $1,500. Up to 7 pages…"; line 105, Minimum project size: "Custom website builds start at the published Starter price of $1,500." |
| WordPress pricing | "WordPress quoted to scope." (end card) | `src/data/company-facts.ts` line 105: "WordPress builds and focused improvements are quoted to their own scope"; `OFFER_LINE` line 150: "WordPress websites quoted to scope" |
| Price agreed before building | VO L4 "with the scope and price agreed before building"; 9:16 and 1:1 anchor "Scope and price agreed first." | `src/data/company-facts.ts` line 117, Fixed scope and changes: "The price is fixed once the written scope is agreed. Additional work is priced separately…" |
| Homepage hero paragraph (real capture, visible briefly in the opening homepage framing) | "Work with Hassan and Imran on a business website or online store your team can edit. We can build on WordPress, create a custom site or improve what you already have. You get an agreed price, written instructions and a live editing walkthrough." | `src/components/pages/home/HomeDesign.tsx` (lines 96–100); backed by `src/data/company-facts.ts` line 80, Primary offer: "…with a written scope, documentation and an editing walkthrough." |
| Homepage price line (real capture, outlined) | "Custom builds from $1,500. WordPress quoted to scope. Price agreed before work starts." | Rendered by `src/components/pages/home/HomeDesign.tsx` line 122; captured locally from `/` (screens/home-desktop.png, screens/home-mobile-top.png) |

No other numbers appear in the film. The UI text "Step 1 of 1" and "1 of 3" belongs to the example illustration and the step counter; it makes no claim.

### People

| Claim | Source |
|---|---|
| "Work directly with Hassan and Imran"; founder cards "Hassan Jamal" and "Imran Raza Ladhani" | `src/data/company-facts.ts` line 66, Founders: "Hassan Jamal and Imran Raza Ladhani"; line 80, Primary offer: "The founders work directly with clients…" |
| Card title "Co-founder" | `src/app/contact/ContactPageClient.tsx` line 180 |
| Founder photographs | `public/team/hassan.png`, `public/team/imran-editorial.png`: the same photographs the site uses on /contact and on the homepage button. No footage, voice or likeness was generated. |

### Case-study claims

| Project | Shown | Claim in film | Relationship label in film | Source |
|---|---|---|---|---|
| Emblematic Studio | `public/work/emblematic-studio-quote-start.png` (copied to `refs/`) | "A custom-built quote request for a patch studio." · "Sends the brief and artwork to the studio." | INDEPENDENT CLIENT | `src/data/company-facts.ts` line 308: "A website and quote experience for a New York custom patch studio… The only part that runs on a server is the quote form, which emails the brief and any artwork to the studio." `src/data/case-study-facts.json` › emblematic-studio: relationship "Independent client", disclosure "PandaCodeGen has no ownership or financial stake in the business." "Custom build": `src/app/work/emblematic-studio/page.tsx` lines 8–21 (a Next.js 16 static site built from a typed registry, with a custom quote form) and line 59 ("custom motion work"). |
| Ladies 4 Jesus | `public/work/ladies-4-jesus.png`, `public/work/ladies-4-jesus-editor-devotional.png` | "Moved from WordPress. The owner publishes without a developer." · "The owner updates entries here." | INDEPENDENT CLIENT | `src/data/migration-projects.ts` line 22: "A WordPress community website rebuilt with Next.js and Sanity, so the owner can publish content and moderate visitor submissions without a developer." `src/data/case-study-facts.json` › ladies-4-jesus: relationship "Independent client". Marker position: `src/components/pages/services/editor-preview-data.ts` lists the content menu, the editing panel and Publish for this image; the marker points at the selected entry in the content list (16:9 and 1:1) or at the editing panel (9:16). |
| PandaCodeGen homepage | Local captures of `/` at 1440×900 @2x and 390×844 @3x | The homepage copy itself | n/a (own site) | Captured from the dev server started at the commit above |

### Illustrations (not evidence)

The "Your Business" page, phone screens, enquiry form and editor in S1–S3 and S6 are drawn for the film and tagged **EXAMPLE PAGE** or **EXAMPLE JOURNEY** on screen whenever they're visible. They show a generic service business and make no claim about any client. `you@example.com` is a reserved example domain.

### Claims deliberately left out

Delivery times, Lighthouse targets, support days, page counts, hosting, AI-referral figures, MyCustomPatches performance figures (withdrawn), rankings, conversions and any monthly-plan statement. None of them are needed for this film's one idea.

## Film 01 v2/v3: Tell us what you need

| On screen or spoken | Source |
|---|---|
| "Work with experts. Talk directly to the founders who build it, not a sales agent." · the struck-out sales/account/project manager chain | `src/data/company-facts.ts` line 80 (the founders work directly with clients) and NOT_A_FIT line 194 ("The work is done by two founders, remotely"; no large in-house team) |
| "A website that search engines and AI assistants can read" | `src/data/company-facts.ts` line 76: new builds include readable content, descriptive titles and headings, structured data and sitemap/indexing checks; "indexing, rankings and citations are not guaranteed" (the film's small print) |
| "Confirmations, reminders and invoices that send themselves" · the booking → confirmation → reminder → PDF invoice flow | `src/data/business-features.ts` (order/booking emails, reminders that stop for paid or cancelled items, branded PDF invoices), built per agreed scope |
| "Still paying for apps that don't quite fit?" | `src/data/business-features.ts` `costs` and FAQ: compare build and running costs with the subscriptions a tool could replace; keep useful tools |
| "Tools built around how you work" | `src/data/company-facts.ts` line 84 (custom work: integrations and internal tools) |

No prices, client names, founder names or photos, project results or numbers appear in v3. The AI-assistant chat, app tiles, to-do list, example website, workflow and engine are original illustrations.

## Film 02: Website promo (HyperFrames)

Every page in the film is a capture of the redesigned site at the commit above, running locally (`tools/capture-promo.mjs`). No numbers, prices, client names or people appear.

| On screen | Source |
|---|---|
| "We design and build websites that work." (headline over the wall of pages) | General description of the service: `src/data/company-facts.ts` (Primary offer, line 80) |
| List: "Designed for your business" · "A page for every service" · "Routine work, automated" · "A clear plan to launch" | Each lands on the page section that says it: hero "Websites built for the way you do business." (`src/components/pages/home/HomeDesign.tsx` line 92); services list (`src/components/redesign/ServicesStack.tsx`); "You run the business. We automate the busywork." (`src/data/business-features.ts` line 3); "From First Call to Launch." four stages (`src/components/redesign/ProcessSplit.tsx` line 76) |
| "Looks sharp on every phone." · chips "Easy to read" · "Easy to tap" · "Quick to load" | The mobile homepage itself, shown scrolling. "Quick to load": `src/data/company-facts.ts` line 137, Performance acceptance ("A 90+ Lighthouse handover target on mobile and desktop…") |
| "Easy for Google and AI to read." + fine print "Rankings and AI answers aren't guaranteed." · chips "Same details everywhere" · "Structured data" · "Claims with sources" | `src/components/redesign/ServicesStack.tsx` lines 69–70, Search & AI Foundations: "a business described the same way everywhere, structured data that matches what visitors see, and claims backed by a source. We cannot guarantee a citation." The section is shown as captured. |
| "We automate the busywork." · cards 01–04 · badges "Email sent" · "Reminder sent" · "Invoice sent" · "Details synced" | Cards are the site's own (`src/data/business-features.ts` lines 11–29). The badges are illustrative states of the automation each card describes (order/booking emails, reminders, PDF invoices, entering details once). |
| "Work with experts. Talk to the founders." · You → Sales rep / Account manager / Project manager (crossed out) → The founders who build it · "Direct line" | `src/data/company-facts.ts` line 80: "The founders work directly with clients…"; the homepage's "Founder-built, not farmed out." section ("no account managers"). The middle roles are the illustration's own, as in Film 01. |
| End card "Let's build yours." · "Talk to the founders →" · pandacodegen.com | The site's primary CTA label ("Talk to the founders", site header) and domain |
| Hook "Is your website working for you?" · generic grey site "yourbusiness.com" · "Where do I book?" | Illustration drawn for the film; represents no real business (`yourbusiness.com` is shown only as an address-bar label) |
