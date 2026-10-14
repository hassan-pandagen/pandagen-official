# Film 02 · Website promo (HyperFrames)

**Format reference:** the owner pointed at "Web Design Promotional Video – After Effects Template" (YouTube `g7xkVEWrX8E`, template by alexeguy). YouTube is blocked in this environment, so the video itself wasn't watched. The film follows that genre: real site pages on tilted 3D planes, a wall of pages, laptop and phone mock-ups with the site scrolling, short kinetic headlines, check-mark callouts, and a music-only track that cuts on the bar. No footage, music or design was taken from the template.

**Length:** 43.2 s (18 bars at 100 BPM). **Voice:** none, like the template; every word is on screen. **Built with:** HyperFrames 0.8.153 (HTML + GSAP compositions in `compositions/`).

**Audience:** owners of small and growing businesses whose website isn't bringing in work.
**Promise:** PandaCodeGen designs and builds websites that work, makes them readable by search and AI, automates routine work, and you deal with the founders directly.
**CTA:** Talk to the founders → pandacodegen.com

## Shot list

| Time | Scene | On screen | Picture |
|---|---|---|---|
| 0.0–4.8 | s01 hook | IS YOUR WEBSITE / *working for you?* | A generic grey placeholder site. A cursor looks for a way to book, finds a dashed gap where the button should be; chip "Where do I book?" |
| 4.8–9.6 | s02 wall | WE DESIGN AND BUILD / *websites that work.* | Wall of real PandaCodeGen pages on a tilted plane, columns sliding past each other, then rushing toward the camera |
| 9.6–19.2 | s03 laptop tour | WHAT YOU GET · 01 Designed for your business · 02 A page for every service · 03 Routine work, automated · 04 A clear plan to launch | Laptop with pandacodegen.com; the page scrolls to the matching section on each bar: hero, services, automation, process |
| 19.2–24.0 | s04 phone | LOOKS SHARP / *on every phone.* · chips: Easy to read · Easy to tap · Quick to load | Phone spins in; the mobile homepage scrolls |
| 24.0–28.8 | s05 search | EASY FOR GOOGLE / *and AI to read.* · fine print "Rankings and AI answers aren't guaranteed." · chips: Same details everywhere · Structured data · Claims with sources | The site's own "Search & AI Foundations" section; a reading line passes down it |
| 28.8–33.6 | s06 automation | WE AUTOMATE / *the busywork.* · badges: Email sent · Reminder sent · Invoice sent · Details synced | The site's four automation cards fly in; each one "runs" on the beat |
| 33.6–38.4 | s07 founders | WORK WITH EXPERTS. / *Talk to the founders.* · You · Sales rep · Account manager · Project manager · The founders who build it · Direct line | The three middlemen are crossed out and drop away, leaving one line |
| 38.4–43.2 | s08 end card | PandaCodeGen. · LET'S BUILD / *yours.* · [Talk to the founders →] · pandacodegen.com | Charcoal rises over the frame; the button's arrow nudges once |

## Sound

Music only, synthesised by `audio/make_audio.py`: intro with a filtered arpeggio and a riser, drop and impact on the first cut (4.8 s), four-on-the-floor groove through the tour, phone, search and automation scenes, a half-time breakdown under "Talk to the founders", and an impact plus a four-note bell on the end card. Whooshes on every cut; ticks, pops and rising dings when list lines, chips and badges appear.

## What the film deliberately doesn't show

No founder names or photos, no client names, logos or quotes, no "independent client" labels, no prices, no invented search or AI results. Page sections that carry any of those were left out of the captures (see `tools/capture-promo.mjs`).
