# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/duncraig-road-desktop-full.png` (bottom)
- **Interaction model:** static + hover on links

## DOM Structure
```
<footer class="footer footer--dark">
  <a class="footer__logo" href="/"> <MarvellLogo /> </a>
  <div class="footer__content">
    <p>© 2025 Marvell Tile & Stone</p>
    <ul class="footer__links">
      <li><a href="/privacy-policy/">Privacy</a></li>
      <li><a href="/terms-and-conditions/">Terms & Conditions</a></li>
    </ul>
    <p>Website by <a href="https://www.humaan.com/">Humaan</a></p>
  </div>
  <ul class="footer__socials">
    <li><a href="https://www.instagram.com/marvelltileandstone/" aria-label="Instagram"><InstagramIcon /></a></li>
    <li><a href="https://www.facebook.com/marvelltileandstone/" aria-label="Facebook"><FacebookIcon /></a></li>
  </ul>
</footer>
```

## Computed Styles

### footer (container)
- padding: var(--padding-section--sm) = 1.5rem (mobile) → 3rem (desktop)
- color: var(--color--text-subtle) = rgba(255,255,255,0.6)
- display: grid
- grid-template-areas: "logo logo" "content socials" (mobile) → "logo content socials" (desktop)
- gap: 1.5rem var(--gap-component--lg) = 1.5rem 0.75rem
- font-weight: 400; line-height: 1.2; letter-spacing: -0.01em
- font-size: 0.75rem (mobile) → 0.875rem → 1rem (desktop)
- background-color: var(--color--bg) = #35311f

### footer--dark (vars override)
- --color--bg: #35311f
- --color--text-subtle: rgba(255,255,255,0.6)
- --color--text-strong: #ffffff

### footer__logo
- grid-area: logo
- color: #b1a781 (warm gold)
- display: flex; align-items: center
- width: fit-content

### footer__content
- grid-area: content
- display: flex; flex-direction: column; gap: 0.5rem
- color: var(--color--text-subtle)

### footer links (a elements)
- color: var(--color--text-subtle) = rgba(255,255,255,0.6)
- Hover: color: var(--color--text-strong) = #ffffff
- Transition: color 0.2s ease

### footer__links (ul)
- display: flex; gap: 1rem
- list-style: none; padding: 0; margin: 0

### footer__socials (ul)
- grid-area: socials
- display: flex; gap: 0.75rem; align-items: center; justify-content: flex-end
- list-style: none; padding: 0; margin: 0

### social icon links
- color: var(--color--text-subtle)
- Hover: color: var(--color--text-strong)
- Transition: color 0.2s ease
- width/height: 1.25rem (20px)

## States & Behaviors

### Link hover
- color: rgba(255,255,255,0.6) → #ffffff
- transition: color 0.2s ease

## Assets
- MarvellLogo from icons.tsx
- InstagramIcon from icons.tsx
- FacebookIcon from icons.tsx

## Text Content (verbatim)
- Copyright: "© 2025 Marvell Tile & Stone"
- Links: "Privacy" → /privacy-policy/, "Terms & Conditions" → /terms-and-conditions/
- Credit: "Website by Humaan" → https://www.humaan.com/
- Instagram: https://www.instagram.com/marvelltileandstone/
- Facebook: https://www.facebook.com/marvelltileandstone/

## Responsive Behavior
- **Desktop (1440px):** 3-column row: logo | content | socials
- **Mobile (390px):** logo spans full width, then content + socials side by side below
- **Breakpoint:** single vs 3-col at ~480px
