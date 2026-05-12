# NavBar Specification

## Overview
- **Target file:** `src/components/NavBar.tsx`
- **Screenshot:** `docs/design-references/duncraig-road-desktop-full.png` (top of page)
- **Interaction model:** scroll-driven (Y translation) + click-driven (submenu)

## DOM Structure
```
<nav> (position: fixed, top: 1.5rem, centered horizontally)
  <ul> (grid auto-flow column, gap 0.25rem, align-items center)
    <li> → <a class="logo"> → <MarvellLogo svg>
    <li> → <button>Projects</button> → <ul class="submenu"> (dropdown)
      → <li><a>Ainslie Street</a></li> × 10 items
    <li> → <a>Profile</a>
    <li> → <a>Contact</a>
```

## Computed Styles

### nav container
- position: fixed
- top: 1.5rem (24px)
- left: 50%
- transform: translate(-50%, var(--y, 0px))  ← JS updates --y on scroll
- padding: 0.25rem (4px)
- border-radius: 8px
- z-index: 100 (above everything)
- background: rgba(0,0,0,0.8) (via ::before pseudo)
- backdrop-filter: blur(20px)
- color: var(--color--text) = rgba(255,255,255,0.7)

### nav::before (glassmorphism bg)
- content: ""
- position: absolute
- border-radius: inherit
- background: rgba(0,0,0,0.8)
- inset: 0
- z-index: -1
- backdrop-filter: blur(20px)
- -webkit-backdrop-filter: blur(20px)

### nav menu (ul)
- display: grid
- grid-auto-flow: column
- gap: 0.25rem
- align-items: center
- list-style: none
- padding: 0; margin: 0

### logo link
- color: #b1a781 (warm gold, slightly lighter than brand)
- width: 1.5rem; height: 1.5rem (including padding)
- padding: 0.5rem
- box-sizing: content-box
- display: flex; align-items: center; justify-content: center
- transition: color 0.3s ease-in-out
- SVG inside: width 1.125rem (18px), height 1rem (16px)

### nav links (button/a elements)
- font-family: inherit (neueMontreal)
- font-size: inherit (~0.875rem)
- color: inherit
- display: inline-flex; align-items: center; justify-content: center
- padding: 0.5rem 0.75rem
- border-radius: 6px
- transition: background-color 0.2s, color 0.2s
- cursor: pointer
- text-rendering: geometricPrecision

### submenu (ul)
- position: absolute
- top: calc(100% + 0.5rem)
- left: 0
- background: rgba(0,0,0,0.9)
- backdrop-filter: blur(20px)
- border-radius: 8px
- padding: 0.5rem
- min-width: 180px
- list-style: none
- **State A (closed):** height: 0px; visibility: hidden; transform: translateY(-20px); overflow: hidden
- **State B (open):** height: auto; visibility: visible; transform: translateY(0); overflow: visible
- transition: height 0.25s ease, transform 0.25s ease, visibility 0.25s

### submenu links
- display: block
- padding: 0.5rem 0.75rem
- font-size: 0.875rem
- color: var(--color--text-subtle)
- border-radius: 4px
- white-space: nowrap
- Hover: background: rgba(255,255,255,0.08)
- Active/current: color: var(--color--text-strong)

## States & Behaviors

### Scroll-driven Y translation
- **Trigger:** scroll listener, JS updates `--y` CSS var on the nav element
- **State A (at top):** `--y: 0px` → `transform: translate(-50%, 0px)` (fully visible)
- **State B (scrolled down fast):** `--y: -80px` → nav slides up off screen
- **State C (scrolled up):** `--y: 0px` → slides back in
- **Implementation:** `useEffect` scroll listener + `element.style.setProperty('--y', ...)`
- **Transition:** none on the var itself; natural via CSS `transform` with no explicit transition (instant)

### Projects submenu toggle
- **Trigger:** click "Projects" button; aria-expanded toggles
- **State A (closed):** height 0, hidden, translateY(-20px)
- **State B (open):** natural height, visible, translateY(0)
- **Transition:** CSS transition on height+transform, 0.25s ease
- Close on: click outside, press Escape, click another nav item

## Assets
- Logo SVG: `<MarvellLogo>` from icons.tsx

## Text Content
- Logo: "Home" (sr-only)
- Nav items: "Projects", "Profile", "Contact"
- Submenu: "Ainslie Street", "Beach Street", "Duncraig Road" (active), "Eco Outdoor", "Excelsior Street", "Forrest Street", "Hubble Street", "Sewell Street", "St. Leonards Ave", "Vivaldi Avenue"

## Responsive Behavior
- **Desktop (1440px):** full horizontal nav pill, all items visible
- **Tablet (768px):** same layout, slightly smaller
- **Mobile (390px):** condensed — logo + hamburger (or just logo + key links)
- **Breakpoint:** layout likely changes at ~480px (reduce to logo + minimal items)
