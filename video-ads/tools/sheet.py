"""Contact sheet from stills: python tools/sheet.py <dir> <prefix> <out.png> [cols] [thumb_w]"""
import sys, glob, os
from PIL import Image, ImageDraw, ImageFont
d, prefix, out = sys.argv[1], sys.argv[2], sys.argv[3]
cols = int(sys.argv[4]) if len(sys.argv) > 4 else 4
tw = int(sys.argv[5]) if len(sys.argv) > 5 else 480
fs = [f for f in glob.glob(os.path.join(d, prefix + "-*.png"))]
fs.sort(key=lambda f: float(f.rsplit("-", 1)[1][:-4]))
ims = [Image.open(f).convert("RGB") for f in fs]
th = int(ims[0].size[1] * tw / ims[0].size[0])
lab = 30
rows = (len(ims) + cols - 1) // cols
sheet = Image.new("RGB", (cols * tw + (cols + 1) * 12, rows * (th + lab) + (rows + 1) * 12), (245, 244, 240))
dr = ImageDraw.Draw(sheet)
try:
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 18)
except Exception:
    font = ImageFont.load_default()
for i, (f, im) in enumerate(zip(fs, ims)):
    x = 12 + (i % cols) * (tw + 12); y = 12 + (i // cols) * (th + lab + 12)
    sheet.paste(im.resize((tw, th), Image.LANCZOS), (x, y + lab))
    dr.text((x, y + 4), f"{float(f.rsplit('-', 1)[1][:-4]):.2f} s", fill=(28, 25, 23), font=font)
sheet.save(out)
print(out, sheet.size)
