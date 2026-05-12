# ContentLockup Specification

## Overview
- **Target file:** `src/components/ContentLockup.tsx`
- **Screenshot:** `docs/design-references/duncraig-road-desktop-full.png` (middle sections)
- **Interaction model:** scroll-driven (split-line text reveal animation)
- **Used twice:** once for "Overview", once for "Project Details"

## DOM Structure
```
<section class="content-lockup" id="overview"> (or id="project-details")
  <h2 class="content-lockup__title">Overview</h2>   ← left column (small)
  <div class="content-lockup__content">              ← right column
    <div class="content-lockup__secondary">
      <p class="content-lockup__secondary-content">  ← em dash decoration line
        –––
      </p>
    </div>
    <div class="content-lockup__body">
      <p> ... body text ...</p>
    </div>
    <!-- For Overview section only: anchor button -->
    <a href="#project-details" class="anchor-btn">
      → Project Details
    </a>
  </div>
</section>
```

## Computed Styles

### section.content-lockup
- padding-block: var(--padding-section--xl) = 10rem (mobile) → 16rem (desktop)
- display: grid
- gap: var(--gap-container--md) var(--gap-section--md) = 1.25rem 3rem
- align-content: center
- color: var(--color--text)
- **Desktop:** grid-template-columns: var(--small-col-width, 19.25rem) 1fr → at 1280px: 27.375rem 1fr
- **Mobile:** single column (stacked)

### content-lockup__title (h2, left col)
- font-family: var(--font-neue-montreal)
- letter-spacing: -0.01em
- font-size: 1rem (mobile) → 1.25rem → 1.5rem (desktop)
- font-weight: 400
- color: var(--color--text-subtle) = rgba(255,255,255,0.6)
- line-height: 1.2
- margin: 0
- visibility: hidden initially → animated in (split-line)

### content-lockup__body (large body text)
- font-weight: 400
- letter-spacing: -0.01em
- font-size: 2.25rem (but actually check: overview uses large text, project details uses smaller)
- Actually from CSS: font-size: 2.25rem → but the overview body text size is closer to 1.5rem
- line-height: 1.3
- visibility: hidden initially → animated in (split-line)
- margin-right: 0.5px (sub-pixel rendering fix)

### content-lockup__secondary (em-dash decorative line)
- color: var(--color--text-brand) = #9b926a
- font-size: 0.875rem
- letter-spacing: 0.1em

### anchor button (→ Project Details)
- display: inline-flex; align-items: center; gap: 0.5rem
- font-size: 0.875rem
- color: var(--color--text-subtle)
- border-bottom: 1px solid var(--color--border-subtle)
- padding-bottom: 0.25rem
- transition: color 0.2s, border-color 0.2s
- Hover: color: var(--color--text-strong), border-color: var(--color--border)
- Arrow character: → (unicode) or ArrowRightIcon

## States & Behaviors

### Split-line reveal animation
- **Trigger:** IntersectionObserver, fires when section is 10% into viewport
- **Elements animated:** h2.title, each paragraph line of body text
- **State A (before):** visibility: hidden; transform: translateY(110%)
- **State B (after):** visibility: visible; transform: translateY(0)
- **Transition:** transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), staggered 80ms per line
- **Implementation:** split text into lines with split-line spans, IntersectionObserver adds class "animate-in"

### Hover on anchor button
- color: rgba(255,255,255,0.6) → #ffffff
- border-color: rgba(255,255,255,0.1) → rgba(255,255,255,0.3)
- transition: 0.2s ease

## Per-State Content

### Overview instance (id="overview")
- Section title: "Overview"
- Em-dash decoration: "–––"
- Body text (large, ~2rem):
  "Known as "Marvellangelo", this Applecross home became the backdrop for a tiling project that tested Marvell Tile and Stones' skill, stamina, and precision. With brick tiles laid overhead on a soaring arched ceiling, each calculation, cut, and placement became a statement of craftsmanship—a balance of engineering, artistry, and purpose."
- Anchor: "→ Project Details" linking to "#project-details"

### Project Details instance (id="project-details")
- Section title: "Project Details"
- Em-dash decoration: "–––"
- Body text (smaller, ~1.25rem):
  "For this Applecross home —nicknamed "Marvellangelo" — Marvell Tile and Stone transformed an arched ceiling into a breathtaking brick-tiled masterpiece. Precision was everything: every tile was set overhead with a consistent 6.4mm grout joint, each measure checked to maintain rhythm, symmetry, and balance across the vault. Days of preparation went into calculating the curve so that it resolved into full bricks at its base.

  The installation tested the team's physical endurance and technical skill. Working against gravity, perched on ladders, and craning upward, each brick was locked into perfect alignment – no mean feat! Edges were finished with a refined "bird beak" detail, while joints were filled with 5mm raked-back black resin grout, creating sharp shadow lines that created depth and drama. The result? A truly stunning soaring ceiling that fuses mathematics, engineering, strength, and artistry — a true standout achievement for our team and Perth's interior design landscape."

## Responsive Behavior
- **Desktop (1440px):** 2-column grid (19.25rem left + 1fr right), body text ~2rem for overview
- **Tablet (768px):** 2-column, narrower
- **Mobile (390px):** single column stack, title above body
- **Breakpoint:** 2-column at ~768px
