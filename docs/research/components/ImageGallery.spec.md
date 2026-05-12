# ImageGallery Specification

## Overview
- **Target file:** `src/components/ImageGallery.tsx`
- **Screenshot:** `docs/design-references/duncraig-road-desktop-full.png` (below hero)
- **Interaction model:** scroll-driven (parallax on images)

## DOM Structure
```
<div class="image-gallery"> (display: grid, gap: var(--gap-component--lg))
  <!-- Row 1: full-left large + half-right small -->
  <div class="block"> (display: flex, gap: var(--gap-component--lg))
    <div class="block-image block--half block--left"> (parallax wrapper)
      <div class="block-image__inner">
        <img src="/images/gallery-1.jpg" alt="Large glass window and detailed brick tiled ceiling.">
      </div>
    </div>
    <div class="block-image block--half block--right"> (parallax wrapper)
      <div class="block-image__inner">
        <img src="/images/gallery-2.jpg" alt="Luxurious, well-lit, curved, brick, tiled ceiling.">
      </div>
    </div>
  </div>

  <!-- Row 2: half-left large + half-right small -->
  <div class="block">
    <div class="block-image block--half block--left">
      <img src="/images/gallery-3.jpg" alt="Precision brick, tiled ceiling framed by wooden cabinets.">
    </div>
    <div class="block-image block--half block--right">
      <img src="/images/gallery-4.jpg" alt="Luxurious brick tiling.">
    </div>
  </div>

  <!-- Row 3: full width -->
  <div class="block">
    <div class="block-image block--full">
      <img src="/images/gallery-5.jpg" alt="">
    </div>
  </div>
</div>
```

## Computed Styles

### .image-gallery (container)
- display: grid
- gap: var(--gap-component--lg) = 0.75rem
- padding-bottom: var(--padding-section--xl) = 10rem (mobile) → 16rem (desktop)
- background-color: var(--color--bg) = #35311f
- position: relative; z-index: 1

### .block (row)
- display: flex
- gap: var(--gap-component--lg) = 0.75rem

### .block-image (individual image cell)
- width: var(--image-size, 100%)
- position: relative
- overflow: hidden

### .block--full
- --image-size: 100%

### .block--half (used for paired images)
- --image-size: 50%
- Note: in original, left images are ~60% and right ~40% based on visual (480w vs 240w srcset)
- More precisely: left is 480/(480+240) = 66.7%, right is 33.3%

### .block--left
- justify-content: flex-start

### .block--right
- justify-content: flex-end

### .block-image__parallax (parallax container)
- position: relative
- overflow: hidden

### .block-image__parallax::before (aspect ratio holder)
- content: ""
- display: block
- width: 100%
- padding-top: var(--aspect-ratio, 100%)
- Row 1: aspect ~416/480 = 86.7% for left, ~416/240 = 173.3% for right

### images inside gallery
- width: 100%
- height: auto
- transform: translateZ(0) (GPU compositing hint)
- display: block

## States & Behaviors

### Parallax scroll effect
- **Trigger:** scroll listener (or IntersectionObserver + rAF)
- **Effect:** `transform: translateY(${offset}px)` on image, where offset = scrollProgress × 60px
- **Direction:** images move slightly slower than scroll (positive offset when scrolling down)
- **Transition:** none (JS-driven each frame via Lenis scroll callback)
- **Implementation:** register scroll listener in useEffect, calculate element's viewport position, apply translateY

## Assets
- gallery-1.jpg: `/images/gallery-1.jpg` — large, landscape, brick ceiling with window
- gallery-2.jpg: `/images/gallery-2.jpg` — portrait, curved brick ceiling
- gallery-3.jpg: `/images/gallery-3.jpg` — large, landscape, brick ceiling with wood cabinets
- gallery-4.jpg: `/images/gallery-4.jpg` — portrait, brick tiling close-up
- gallery-5.jpg: `/images/gallery-5.jpg` — full-width landscape

## Alts
- gallery-1: "Large glass window and detailed brick tiled ceiling."
- gallery-2: "Luxurious, well-lit, curved, brick, tiled ceiling."
- gallery-3: "Precision brick, tiled ceiling framed by wooden cabinets."
- gallery-4: "Luxurious brick tiling."
- gallery-5: "" (decorative)

## Responsive Behavior
- **Desktop (1440px):** 2-column rows for rows 1&2, full width row 3
- **Tablet (768px):** same 2-column layout
- **Mobile (390px):** stack images to single column (flex-direction: column on each block)
- **Breakpoint:** ~640px stack to single column
