#!/usr/bin/env bash
# Film 02 (website promo, HyperFrames): renders the four MP4s and muxes each with the frozen mix.
#   bash films/02-website-promo/render.sh            (from video-ads/, or anywhere)
# Needs Node 22+, FFmpeg, and the HyperFrames CLI (HF overrides the command; default pins 0.8.153).
# Optional first steps: node tools/capture-promo.mjs (site sections) and python audio/make_audio.py (sound).
set -euo pipefail
cd "$(dirname "$0")"
HERE=$(pwd)
HF=${HF:-"npx --yes hyperframes@0.8.153"}
OUT="$HERE/../../out/02-website-promo"
mkdir -p "$HERE/renders" "$OUT"
node build.mjs

render() { # <project dir> <name>
  (cd "$1" && $HF render --fps 60 --crf 16 --workers 3 --output "$HERE/renders/$2.mp4")
  # HyperFrames encodes the video (H.264 High, yuv420p, BT.709, CRF 16, 60 fps). The audio is replaced
  # with audio/mix.wav as AAC-LC 256 kb/s so every export carries the same measured mix.
  ffmpeg -loglevel error -y -i "$HERE/renders/$2.mp4" -i "$HERE/audio/mix.wav" -map 0:v -map 1:a \
    -c:v copy -c:a aac -b:a 256k -ar 48000 -ac 2 -shortest -movflags +faststart "$OUT/$2.mp4"
}
render . master_16x9
render formats/9x16 social_9x16
render formats/1x1 square_1x1
render formats/9x16-reduced reduced_motion_9x16
echo "done: $OUT"
