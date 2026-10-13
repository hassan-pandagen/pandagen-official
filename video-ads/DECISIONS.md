# Decisions log

One line per call, newest last. "Brief" means the campaign brief pasted on 13 Oct 2026.

## Campaign

- **Revision.** Worked from `63a6bdce` (HEAD of `claude/sweet-pasteur-m4lbah`), the redesign commit the brief names. No newer commit existed in this checkout.
- **Order of work.** The owner asked to see one finished film before the other five are made, so only Film 01 is rendered. Films 02–06 wait for sign-off on it.
- **Workspace.** All video work lives in `video-ads/` with its own `package.json`. The website's code, dependencies, pricing and deployment settings are untouched. Nothing is committed or pushed yet, because the GitHub repository is public and pushing would publish unreleased ads. Where the source and MP4s should live is the owner's call.
- **Direction.** C, annotated paper (see `Directions.html`). It keeps the site's paper and type and adds one teaching device: a numbered cognac marker with a note of eight words or fewer, one at a time. Charcoal is kept for the end card, the way the site keeps it for its contact block.
- **Wordmark.** `public/logo.png` is the wordmark set in Zodiak, but its full stop is an older orange (#EA580C). The current nav colours the stop with `T.accent`, so `brand/wordmark-ink.png` recolours only the stop to #AD3D0B and `brand/wordmark-paper.png` uses paper + #E8763A on charcoal. Zodiak itself isn't bundled: its licence forbids repository distribution, and Fontshare is blocked in this environment.
- **Fonts.** Anton (display), PT Serif (descriptions and the one italic phrase), Inter (labels, captions, controls), all from `public/fonts/site/` with their OFL notices copied to `brand/fonts/`.
- **Contrast.** Measured: ink/paper 14.41, body/paper 9.76, quiet/paper 5.58, accent/paper 5.02 (used for large italic only), accentText/paper 7.78 (all small labels), white/accent 6.09 (markers, buttons), paper/charcoal 14.41, onDarkQuiet/charcoal 7.04, onDarkAccent/charcoal 5.90, caption text on 94 % charcoal ≈ 14.
- **Voice.** Kokoro-82M (Apache-2.0) via kokoro-onnx, voice `af_heart` (US English, the model's highest-rated voice), speed 1.0. A synthetic narrator, not an imitation of either founder. ElevenLabs or HeyGen voices would cost money and need accounts, so they weren't used.
- **Music.** Synthesised from a fixed seed in `tools/audio.py`: 96 BPM, D-major pad, bass from the explanation onwards, a soft off-beat pulse through the steps and proof. One three-note motif (A–D–F♯) marks the next step appearing, its return in the payoff, and the end card. No third-party music.
- **Loudness.** A -4 dBFS peak limiter, then two-pass linear loudnorm to -16 LUFS integrated / -1.5 dBTP. The voice sits about 13 dB above the ducked bed.
- **Frame rate.** 60 fps, as the render contract asks (`t += 1/60`). Files stay small (5–8 MB for 35 s at CRF 16) because the picture is flat graphics, so no separate upload copy was needed.
- **Vertical safe area.** 9:16 keeps every essential word inside y 270–1248 and x ≤ 930 (Meta Reels: top 14 %, bottom 35 %, the right-hand rail). Visuals may continue below that band; text doesn't. That leaves the lower third mostly paper in some beats, which is deliberate.
- **Spelling.** US-first campaign, so on-screen text uses US spelling ("inquiries", "fall"), changed after the design review. The site and the brief say "enquiries"; the spoken word is identical, so the voice wasn't regenerated.

## Film 01

- **Hook.** The brief's anchor, "Looks good. Does it work for you?", word for word. "Looks good." is on screen from frame 0, so the thumbnail carries the hook. The missing next step (dashed outline plus "How do I ask for a quote?") lands at 2.2 s, inside the first three seconds.
- **The "attractive page".** An invented, tagged example page ("Your Business"), not a client's site, so no real business is shown with a missing enquiry path.
- **Mobile journey.** Three example screens (services → request a quote → team editor) land on the three phrases of the voice line. Tagged EXAMPLE JOURNEY with a 1/2/3 OF 3 counter.
- **Proof.** Ladies 4 Jesus (independent client, moved from WordPress: real site, then its real Sanity editor) plays over "Improve your current website, build on WordPress". Emblematic Studio (independent client, custom build: real quote-start page) plays over "or choose a custom site where it fits". The order was swapped after the design review so each project sits under the matching words.
- **Resolve.** In 16:9 the real homepage carries this beat without an extra headline. 9:16 and 1:1 use the free headline slot for founder cards, then "Scope and price agreed first."
- **Payoff.** The opening example page returns with its Request a quote button: "Looks good. The next step is clear."
- **VO edit.** L5 adds "at pandacodegen.com" so audio-only listeners hear where to go. L1–L4 match the brief's script except for punctuation.
- **Price end card.** Used the brief's optional "Custom websites from $1,500." with "WordPress quoted to scope." legible beside it (paper and onDarkQuiet on charcoal, 7.04:1 or better).
- **Captions.** Burned in as a separate charcoal plate with a fixed bottom edge, never overlapping a headline. SRTs are wrapped per aspect: 42, 34 and 28 characters per line.
- **Screens tidy-up.** Captures hide three floating overlays: the Next.js dev badge (dev servers only), the cookie choices control and the Panda Assistant launcher button. Nothing in the page content was altered. The in-page assistant card and every word of copy are as the site renders them.

## After the design review (Film 01)

- An independent review agent found no blockers and seven should-fix items. All seven were addressed: right-rail clearance, opaque captions with crops ending above them, the hook's next step inside 3 s, larger labels, larger 16:9 captions and end card, case-study order, and homepage crops. See `out/01-business-website/review/design-review.md` and `before-after.png`.
- **Kept deliberately:** the Emblematic crop's light-grey text (the client's own design), and the voice saying "pandacodegen.com" while the card shows "/contact".
- **16:9 founder cards** sit as a row under the homepage price line, inside the empty part of the frame, so they cover no page text.
- **9:16 and 1:1 screenshot windows** end at the caption band. The space below is left to the platform's interface in 9:16.
