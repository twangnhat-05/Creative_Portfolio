# Project Media Slots

Each project card has 3 media slots:
- **Col 1 Top** + **Col 1 Bottom** → static **PNG images**
- **Col 2 (Hero, right side, full height)** → animated **GIF**

Drop your files into this folder with **exactly** these filenames.
Until a file exists, the site shows a dashed placeholder with the expected filename.

---

## Project 01 — Reels (Client · Bitis)

Includes work for Bitis, Bitis Kids, Bitis Hunter, Bitis Gosto.

| Filename                                | Type | Position                       |
| --------------------------------------- | ---- | ------------------------------ |
| `project-01-reels-col1-top.png`         | PNG  | Left column, top (small)       |
| `project-01-reels-col1-bottom.png`      | PNG  | Left column, bottom (medium)   |
| `project-01-reels-col2.gif`             | GIF  | Right column, full tall hero   |

## Project 02 — TVC (Client · VFIS School)

| Filename                                | Type | Position                       |
| --------------------------------------- | ---- | ------------------------------ |
| `project-02-tvc-col1-top.png`           | PNG  | Left column, top (small)       |
| `project-02-tvc-col1-bottom.png`        | PNG  | Left column, bottom (medium)   |
| `project-02-tvc-col2.gif`               | GIF  | Right column, full tall hero   |

## Project 03 — MV "Tết Là Nhà" (Client · CEE TEAM)

| Filename                                | Type | Position                       |
| --------------------------------------- | ---- | ------------------------------ |
| `project-03-mv-col1-top.png`            | PNG  | Left column, top (small)       |
| `project-03-mv-col1-bottom.png`         | PNG  | Left column, bottom (medium)   |
| `project-03-mv-col2.gif`                | GIF  | Right column, full tall hero   |

---

## Specs & tips

**PNG images (col1 top + bottom):**
- ~1200–1600 px on the long edge
- Crop tight to the subject — the slot is short and wide
- Under ~500 KB each after compression (use TinyPNG / Squoosh)

**GIF hero (col2):**
- Tall portrait-ish crop preferred (slot is the full card height, ~60% width)
- 3–6 seconds, looping
- **Keep under ~3 MB** — GIFs balloon fast. Use https://ezgif.com/optimize to compress
- 480p (~720 × 1080) is usually plenty; the slot rarely renders above 600px wide
- Reduce frame rate to 15–20 fps if file size is tight

**Want a different format for any slot?** Edit `src/sections/ProjectsSection.tsx`
— each slot has its own `filename` field. You can swap `.gif` → `.mp4` or
`.png` → `.webp` per slot. MediaSlot auto-detects video vs image.

**Vercel bandwidth note:** free tier = 100 GB/month. 9 project files at
~3 MB each = ~27 MB total — totally fine.
