# Behaviors — Duncraig Road | Marvell Tile & Stone

## Global Behaviors

### Lenis Smooth Scroll
- Library: Lenis
- Effect: smoother inertial scrolling across the whole page
- Implementation: wrap page in Lenis, call `lenis.raf` each frame
- CSS class on html: `.lenis` / `.lenis-smooth`

### Custom Cursor
- The site likely has a custom cursor (data-cursor-zone="dark" attributes present on hero and nav)
- OUT OF SCOPE for this clone

### Page Transitions
- `PageTransitionImageContext` fixed overlay for animated project-image reveal on navigation
- OUT OF SCOPE for this clone (mock with instant navigate)

---

## NavBar

### Scroll-triggered visibility
- **Initial state**: `opacity: 1; visibility: visible; --y: 0px`
- **Trigger**: JS scroll listener updates `--y` CSS var
- **Behavior**: translates upward to hide, back down to show
- **Transition**: `transform: translate(-50%, var(--y, 0))` — smooth via CSS transform

### Glassmorphism background
- `background: rgba(0,0,0,0.8)` + `backdrop-filter: blur(20px)`
- `border-radius: 8px` pill shape
- Always visible (no scroll change to background itself)

### Projects submenu
- **Trigger**: click "Projects" button
- **Behavior**: submenu slides down from height 0 to natural height, opacity 0→1
- **State A (closed)**: `height: 0px; visibility: hidden; transform: translateY(-20px)`
- **State B (open)**: `height: auto; visibility: visible; transform: translateY(0)`
- **Transition**: CSS height + transform animation

---

## ProjectHero

### Title animation
- `visibility: hidden` on load, animated in by JS (GSAP or CSS)
- Font: neueMontreal, 4.5rem, weight 400, letter-spacing -0.01em, line-height 0.95
- Implementation: set `visibility: visible` with a CSS delay / transition

### Scroll-to-content button
- Arrow button at bottom of hero links to `#project-details` anchor
- Hover: opacity change

---

## ImageGallery

### Parallax on images
- Each `.Parallax_parallax__hTrTO` element gets `transform: translateY()` updated by scroll
- Effect: images scroll slightly slower than page (classic parallax)
- Implementation: IntersectionObserver + scroll listener, update `transform: translateY(${offset}px)`

---

## ContentLockup

### Split-line text reveal
- `.split-line` children: `overflow: hidden; padding-block: .075em; margin-block: -.275em`
- Individual text lines slide up into view as section enters viewport
- `visibility: hidden` initially, set to `visible` + `transform: translateY(0)` when in view
- **Trigger**: IntersectionObserver (rootMargin ~"-10% 0px")
- **State A**: `visibility: hidden; transform: translateY(100%)`
- **State B**: `visibility: visible; transform: translateY(0)`
- **Transition**: `transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)` staggered

---

## NextProjectCard

### Sticky reveal
- `position: sticky; bottom: 0; z-index: -1`
- Card sits behind page content; as you scroll past the last content section, the card is revealed
- No active JS needed — pure CSS sticky positioning

---

## Footer

### Link hover
- Links: `color: var(--color--text-subtle)` → `color: var(--color--text-strong)` on hover
- **Transition**: `color 0.3s ease-in-out`
