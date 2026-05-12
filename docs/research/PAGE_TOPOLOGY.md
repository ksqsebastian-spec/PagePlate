# Page Topology — Duncraig Road | Marvell Tile & Stone

URL: https://www.marvellco.com.au/projects/duncraig-road/

## Overall Layout
- Single-scroll page, no pagination
- Smooth scroll via **Lenis** library (`.lenis` class on html element)
- Background: `#35311f` (warm dark brown) throughout most sections
- `--scroll-bar-width` and `--vw/--vh` CSS vars set dynamically by JS

## Section Order (top to bottom)

| # | Name | Component | Position | Interaction Model |
|---|------|-----------|----------|-------------------|
| 1 | NavBar | `NavBar` | `position: fixed`, top-centered, z-index above all | scroll-driven (glassmorphism pill, slides in/out) |
| 2 | Hero | `ProjectHero` | flow, full viewport height | static (image + overlay) |
| 3 | Image Gallery | `ImageGallery` | flow | scroll-driven (parallax on images) |
| 4 | Overview | `ContentLockup` | flow, two-column | scroll-driven (split-line text animation into view) |
| 5 | Project Details | `ContentLockup` | flow, two-column | scroll-driven (split-line text animation into view) |
| 6 | Next Project Card | `NextProjectCard` | `position: sticky, bottom: 0`, z-index: -1 | scroll-driven (reveals as you scroll past content) |
| 7 | Footer | `Footer` | flow | static (hover on links) |
| ∞ | Page Transition Overlay | `PageTransitionImageContext` | `position: fixed`, fullscreen | click-driven (page navigation) |

## Z-Index Layers
1. NavBar: fixed, above all content
2. Page content: normal flow
3. NextProjectCard: sticky bottom, z-index: -1 (revealed by scroll)
4. PageTransitionImageContext: fixed fullscreen overlay (navigation)

## Dependencies
- NavBar overlays everything (z-index highest)
- NextProjectCard must be behind page content (z-index: -1) so page scrolls over it
- Footer sits on top of NextProjectCard
- Lenis must be initialized before any scroll-driven components

## Scroll Behavior Notes
- Lenis smooth scroll: confirmed via `lenis` string in HTML
- NavBar translates Y on scroll (--y CSS var updated by JS)
- Images in gallery have parallax (`Parallax_parallax__hTrTO` class, `transform` updated by JS)
- Text in ContentLockup has split-line enter animation (`visibility: hidden` initially, animated in)
- Hero title has `visibility: hidden` initially (GSAP/CSS animation reveal)
