# Project Media Slots

Drop your project video/image files into this folder using **exactly** these filenames.
Until the file exists, the site shows a dashed placeholder with the expected filename.

Supported types:
- Videos: `.mp4` / `.webm` / `.mov` / `.m4v` (autoplay, loop, muted) — recommended for these projects
- Images: `.png` / `.jpg` / `.jpeg` / `.gif` / `.webp`

If you want a different file extension (e.g. swap an `.mp4` for `.png`),
edit the matching `filename` field in `src/sections/ProjectsSection.tsx`.

---

## Project 01 — Reels (Client · Bitis)

Includes work for Bitis, Bitis Kids, Bitis Hunter, Bitis Gosto.

| Filename                                | Position                       |
| --------------------------------------- | ------------------------------ |
| `project-01-reels-col1-top.mp4`         | Left column, top (small)       |
| `project-01-reels-col1-bottom.mp4`      | Left column, bottom (medium)   |
| `project-01-reels-col2.mp4`             | Right column, full tall hero   |

## Project 02 — TVC (Client · VFIS School)

| Filename                                | Position                       |
| --------------------------------------- | ------------------------------ |
| `project-02-tvc-col1-top.mp4`           | Left column, top (small)       |
| `project-02-tvc-col1-bottom.mp4`        | Left column, bottom (medium)   |
| `project-02-tvc-col2.mp4`               | Right column, full tall hero   |

## Project 03 — MV "Tết Là Nhà" (Client · CEE TEAM)

| Filename                                | Position                       |
| --------------------------------------- | ------------------------------ |
| `project-03-mv-col1-top.mp4`            | Left column, top (small)       |
| `project-03-mv-col1-bottom.mp4`         | Left column, bottom (medium)   |
| `project-03-mv-col2.mp4`                | Right column, full tall hero   |

---

## Notes

- Files in `public/` are served at the site root, no build step needed — drop file in and refresh.
- For videos, keep them short (< 10 MB) and use H.264 `.mp4` for max compatibility.
- For images, ~1200–1600 px on the long edge keeps load fast.
- Vercel free tier: 100 GB bandwidth/month — keep media sizes reasonable.
