# ProjectHero Specification

## Overview
- **Target file:** `src/components/ProjectHero.tsx`
- **Screenshot:** `docs/design-references/duncraig-road-desktop-full.png` (top section)
- **Interaction model:** static (image fills viewport, text overlay)

## DOM Structure
```
<section class="hero"> (display: grid, full viewport height)
  <div class="hero__image-wrapper"> (grid-area: 1/-1, position: relative, z-index: -1)
    <picture> → <img src="/images/hero-main.jpg" alt="A luxurious wardrobe featuring a unique brick tiled ceiling.">
  </div>
  <div class="hero__content"> (grid-area: 1/-1, dark overlay + grid rows)
    <div class="hero__header"> (grid-area: 1/-1, centered)
      <h1 class="hero__title">Duncraig Road</h1>
      <p class="hero__subtitle">Brick Slip Installation & Natural Stone Floor Tiling</p>
    </div>
    <div class="hero__footer"> (bottom of content, project meta + scroll button)
      <dl class="hero__meta"> (Builder, Architect, Designer, Photographer)
      <a href="#project-details" class="hero__scroll-btn">
        <ArrowDownIcon />
      </a>
    </div>
  </div>
</section>
```

## Computed Styles

### section.hero
- display: grid
- height: 100svh (var(--100svh))
- background-color: var(--color--bg) = #35311f
- overflow: hidden

### hero__image-wrapper
- grid-area: 1 / -1 (spans full grid)
- width: 100%; height: var(--100svh)
- position: relative; z-index: -1

### hero image (img)
- width: 100%; height: 100%
- object-fit: cover
- display: block

### hero__content (overlay)
- grid-area: 1 / -1 (overlays image)
- background-color: rgba(0, 0, 0, 0.3)
- color: var(--color--text) = rgba(255,255,255,0.7)
- display: grid
- grid-template-rows: 1fr auto
- padding: var(--container-gutter) = 20px sides (desktop: 48px)

### hero__header
- grid-area: 1/1/-1/-1
- align-self: center
- justify-items: center
- text-align: center
- justify-self: center
- display: grid; gap: 1rem

### hero__title (h1)
- font-family: var(--font-neue-montreal)
- font-weight: 400
- letter-spacing: -0.01em
- font-size: 3.5rem (mobile) → 4.5rem (desktop ≥768px)
- color: var(--color--text-strong) = #ffffff
- line-height: 0.95
- margin: 0
- visibility: hidden initially (animated in)
- font-feature-settings: "kern" off
- font-kerning: none

### hero__subtitle (p)
- font-family: var(--font-neue-montreal)
- font-size: 1rem → 1.25rem
- font-weight: 400
- color: var(--color--text) = rgba(255,255,255,0.7)
- letter-spacing: -0.01em
- text-align: center

### hero__meta (project credits)
- display: grid or flex, bottom of hero
- font-size: 0.75rem → 0.875rem
- color: var(--color--text-subtle) = rgba(255,255,255,0.6)
- letter-spacing: -0.01em
- gap: 0.5rem

### meta item
- display: flex; gap: 0.5rem
- dt: color subtle; dd: color text-strong (#fff)

### scroll button (a)
- display: flex; align-items: center; justify-content: center
- padding: 0.75rem
- border-radius: 50%
- border: 1px solid var(--color--border) = rgba(255,255,255,0.3)
- color: var(--color--text-strong)
- transition: background-color 0.2s, border-color 0.2s
- Hover: background-color: rgba(255,255,255,0.1)

## States & Behaviors

### Title reveal animation
- **Initial:** visibility: hidden; transform: translateY(20px); opacity: 0
- **On mount (after 300ms delay):** visibility: visible; transform: translateY(0); opacity: 1
- **Transition:** 0.8s cubic-bezier(0.16, 1, 0.3, 1)
- **Implementation:** useEffect with setTimeout, add CSS class

### Subtitle/meta reveal
- Same pattern, staggered 150ms after title

## Assets
- Hero image: `/images/hero-main.jpg`
- Alt: "A luxurious wardrobe featuring a unique brick tiled ceiling."
- ArrowDownIcon from icons.tsx

## Text Content (verbatim)
- Title: **Duncraig Road**
- Subtitle: Brick Slip Installation & Natural Stone Floor Tiling
- Builder: RK Brine Master Builder
- Architect: Peter Moran Architect
- Designer: Staple Design
- Photographer: Maguire Imagery
- Scroll button: links to `#overview` anchor

## Responsive Behavior
- **Desktop (1440px):** full viewport, title 4.5rem centered
- **Tablet (768px):** same, title 3.5rem
- **Mobile (390px):** title 3.5rem, meta wraps to 2 columns or single column
- **Breakpoint:** font-size changes at ~768px
