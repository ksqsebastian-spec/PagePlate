# NextProjectCard Specification

## Overview
- **Target file:** `src/components/NextProjectCard.tsx`
- **Screenshot:** `docs/design-references/duncraig-road-desktop-full.png` (bottom)
- **Interaction model:** scroll-driven (sticky reveal — CSS position sticky)

## DOM Structure
```
<div style="grid-row: 2; grid-column: 1/-1">  ← twin (pointer-events: none, placeholder height)
<div class="project-card project-card--light">  ← sticky card
  <a href="/projects/eco-outdoor/" class="project-card__link">
    <p class="project-card__heading">Next Project</p>
    <div class="project-card__title-wrapper">
      <h2>Eco</h2>
      <h2>Outdoor</h2>
    </div>
    <div class="project-card__thumbnail-wrapper">
      <img class="project-card__thumbnail"
           src="/images/next-project-eco-thumb.jpg"
           alt="">
    </div>
  </a>
</div>
```

## Computed Styles

### .project-card (sticky container)
- height: var(--100lvh) = 100lvh
- grid-row: 2; grid-column: 1/-1
- background-color: var(--color--bg) = #35311f (dark theme variant)
- display: flex
- position: sticky; bottom: 0; left: 0; right: 0; width: 100%
- align-items: center; justify-content: center; flex-direction: column
- gap: var(--gap-container--md) = 1.25rem
- z-index: -1

### .project-card__link
- display: flex; flex-direction: column; align-items: center; gap: inherit
- color: var(--color--text-strong) = #ffffff
- text-decoration: none
- cursor: pointer

### .project-card__heading (p - "Next Project" label)
- font-weight: 400; line-height: 1.2; letter-spacing: -0.01em
- font-size: 1rem (mobile) → 1.25rem → 1.5rem (desktop)
- color: var(--color--text-subtle) = rgba(255,255,255,0.6)
- margin: 0

### .project-card__title-wrapper
- text-align: center

### title (h2 - "Eco Outdoor")
- font-family: var(--font-neue-montreal)
- font-weight: 400
- font-size: 3rem (mobile) → 4.5rem → 6rem (desktop)
- letter-spacing: -0.01em
- line-height: 0.95
- color: var(--color--text-strong) = #ffffff
- Note: split across two h2 elements: "Eco" and "Outdoor"

### .project-card__thumbnail-wrapper
- width: 8.75rem (140px); height: 8.75rem (140px)
- border-radius: 50%
- overflow: hidden
- position: relative

### .project-card__thumbnail (img)
- width: 100%; height: 100%
- object-fit: cover
- border-radius: 50%

## States & Behaviors

### Sticky scroll reveal
- **Mechanism:** Pure CSS `position: sticky; bottom: 0; z-index: -1`
- **Effect:** Card sits at bottom of screen, page content scrolls over it; once all page content is past, card is fully revealed
- **No JS needed** — CSS-only sticky behavior
- Twin div (pointer-events: none) holds height so footer can scroll over

### Hover on link
- **Trigger:** hover over the whole card link
- **Effect:** subtle scale or color shift on thumbnail
- Thumbnail: `transform: scale(1.05)` on hover, transition: 0.4s ease

## Assets
- Thumbnail: `/images/next-project-eco-thumb.jpg` (140×140, circular crop)

## Text Content (verbatim)
- Label: "Next Project"
- Title line 1: "Eco"
- Title line 2: "Outdoor"
- Link href: `/projects/eco-outdoor/`

## Responsive Behavior
- **Desktop (1440px):** full viewport height, large title ~6rem, circular thumbnail 140px
- **Tablet (768px):** title ~4.5rem
- **Mobile (390px):** title ~3rem, thumbnail same size
- **Breakpoint:** ~768px, ~480px
