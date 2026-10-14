"""Copy the portfolio front pages Film 02 shows from public/work/ into assets/work/ (JPEG, q90) and cut
the three UI cards for the "pop-out" shot. Run from films/02-website-promo:  python3 tools/prepare_work.py
Only page screenshots the site already publishes are used. Left out on purpose: admin/CRM/editor screens
in the wall, and the Panda Patches homepage (it shows other companies' logos)."""
import os
from PIL import Image

SRC = os.path.join("..", "..", "..", "public", "work")
OUT = os.path.join("assets", "work")
os.makedirs(OUT, exist_ok=True)
PAGES = [
    "sleek-jackets-hero", "sleek-jackets-collection", "sleek-jackets-core-edit", "sleek-jackets-details",
    "medical-template-hero", "medical-template-areas", "medical-template-care", "medical-template-non-surgical",
    "northdeck-group-home", "northdeck-group-environments", "northdeck-group-process", "northdeck-group-scenario",
    "northdeck-group-services-intro", "northdeck-group-systems",
    "emblematic-studio-home", "emblematic-studio-embroidered", "emblematic-studio-library", "emblematic-studio-direction-test",
    "mycustompatches", "mycustompatches-categories", "mycustompatches-process", "mycustompatches-product-template",
    "ladies-4-jesus-hero", "ladies-4-jesus-sections", "ladies-4-jesus-devotionals",
    "panda-publisher", "panda-publisher-library", "panda-publisher-journey",
    "saforne", "a-step-above-medical-preview-homepage",
]
for p in PAGES:
    im = Image.open(os.path.join(SRC, p + ".png")).convert("RGB")
    im.save(os.path.join(OUT, p + ".jpg"), quality=90, optimize=True)

# UI cards from the Panda Patches quote calculator (1440x560 and 740x520 source images).
cfg = Image.open(os.path.join(SRC, "panda-patches-calculator-configure.png")).convert("RGB")
sub = Image.open(os.path.join(SRC, "panda-patches-calculator-submit.png")).convert("RGB")
cfg.crop((750, 80, 1380, 185)).save(os.path.join(OUT, "ui-backing-shape.png"))   # Select backing / Select shape
cfg.crop((750, 285, 1380, 523)).save(os.path.join(OUT, "ui-size-quantity.png"))  # Size and quantity
sub.crop((20, 145, 720, 335)).save(os.path.join(OUT, "ui-upload.png"))          # Upload your artwork
print("ok", len(PAGES), "pages")
