# Project Media Slots

Drop your project images/videos into this folder using **exactly** these filenames.
Until the file exists, the site shows a dashed placeholder with the expected filename.

Supported types:
- Images: `.png` / `.jpg` / `.jpeg` / `.gif` / `.webp`
- Videos: `.mp4` / `.webm` / `.mov` / `.m4v` (autoplay, loop, muted)

If you want a different file extension (e.g. swap an image for a video),
edit the matching `filename` field in `src/sections/ProjectsSection.tsx`.

---

## Project 01 — Nextlevel Studio (Client)

| Filename                                  | Position                       |
| ----------------------------------------- | ------------------------------ |
| `project-01-nextlevel-col1-top.png`       | Left column, top (small)       |
| `project-01-nextlevel-col1-bottom.png`    | Left column, bottom (medium)   |
| `project-01-nextlevel-col2.png`           | Right column, full tall image  |

## Project 02 — Aura Brand Identity (Personal)

| Filename                                  | Position                       |
| ----------------------------------------- | ------------------------------ |
| `project-02-aura-col1-top.png`            | Left column, top (small)       |
| `project-02-aura-col1-bottom.png`         | Left column, bottom (medium)   |
| `project-02-aura-col2.png`                | Right column, full tall image  |

## Project 03 — Solaris Digital (Client)

| Filename                                  | Position                       |
| ----------------------------------------- | ------------------------------ |
| `project-03-solaris-col1-top.png`         | Left column, top (small)       |
| `project-03-solaris-col1-bottom.png`      | Left column, bottom (medium)   |
| `project-03-solaris-col2.png`             | Right column, full tall image  |

---

## Notes

- Files in `public/` are served at the site root, no build step needed —
  just drop the file in and refresh.
- Recommended dimensions: ~1200–1600 px on the long edge keeps load fast.
- For videos, keep them short (< 10 MB) and use H.264 `.mp4` for max compatibility.
