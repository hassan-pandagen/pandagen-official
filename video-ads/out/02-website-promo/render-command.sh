#!/usr/bin/env bash
# Exact commands used for Film 02 (run from video-ads/). See films/02-website-promo/render.sh.
# 1. Site sections (redesigned site running locally: npx next dev -p 3001 in the repo root)
node tools/capture-promo.mjs http://localhost:3001 films/02-website-promo/assets/site
# 2. Music, effects and mix (Python with numpy + soundfile)
(cd films/02-website-promo && python audio/make_audio.py)
# 3. Four MP4s: HyperFrames 0.8.153, 60 fps, CRF 16; audio replaced with audio/mix.wav as AAC 256 kb/s
bash films/02-website-promo/render.sh
