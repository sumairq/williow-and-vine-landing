@AGENTS.md

# Meridian Estates — Architecture Reference

## Project Overview

Luxury real estate website built section by section. Brand name: **Meridian Estates**. UK market, established 1987. Aesthetic: refined, editorial, high-end — warm neutrals, serif headings, gold accents.

---

## Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.6 |
| Runtime | React | 19.2.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS v4 (CSS-first, no config file) | ^4 |
| Package manager | pnpm | — |
| Dev server | Turbopack (`next dev`) | — |

**No `tailwind.config.js`** — Tailwind v4 is configured entirely in `app/globals.css` via `@import "tailwindcss"` and `@theme inline { ... }`.

---

## File Structure

```
app/
  globals.css                      # Design tokens + Tailwind theme
  layout.tsx                       # Root layout: fonts, Navbar, Footer, <main>
  page.tsx                         # Homepage (composes sections)
  design-system/page.tsx           # Design system showcase route

  components/
    ui/
      typography.tsx               # All text primitives
      button.tsx                   # Button component
      layout.tsx                   # Container, Section, Stack, Inline, Grid
      property-card.tsx            # Standard property listing card
    layout/
      Navbar.tsx                   # Fixed, scroll-aware, transparent-on-hero
      Footer.tsx                   # 4-col grid, brand + link columns
    sections/
      HeroSection.tsx              # Full-viewport hero with search bar
      FeaturedPropertiesSection.tsx # Asymmetric 2×2 featured grid
```

---

## Design Tokens (`app/globals.css`)

### Colors (CSS custom properties)
```css
--color-ink:        #1A1917   /* primary text */
--color-ink-muted:  #6B6966   /* secondary text */
--color-ink-subtle: #9C9894   /* tertiary / placeholder */
--color-paper:      #FAF8F5   /* page background */
--color-paper-alt:  #F0EDE8   /* footer / alternate bg */
--color-gold:       #B8985A   /* brand accent */
--color-gold-light: #D4B97A   /* gold hover state */
--color-border:     #E3DFDA   /* dividers */
```

### Spacing — 3-tier system

**Tier 1 — Primitives (4pt grid):** `--space-1` (0.25rem) through `--space-32` (8rem)

**Tier 2 — Semantic (t-shirt sizes):**
`--space-xs` (0.5rem) · `--space-sm` (1rem) · `--space-md` (1.5rem) · `--space-lg` (2.5rem) · `--space-xl` (4rem) · `--space-2xl` (6rem) · `--space-3xl` (8rem)

**Tier 3 — Layout roles (these become Tailwind utilities):**
| Token | Value | Tailwind utility |
|---|---|---|
| `--space-section` | 5rem | `py-section` |
| `--space-container` | 3rem | `px-container` |
| `--space-card` | 2rem | `p-card` |
| `--space-gutter` | 1.5rem | `gap-gutter` |
| `--space-stack` | 1rem | `gap-stack` |
| `--space-inline` | 0.5rem | `gap-inline` |

---

## Typography (`app/components/ui/typography.tsx`)

### Fonts
- **Display/Headings (H1–H3):** `Playfair Display` — loaded via `next/font/google`, CSS var `--font-playfair`, Tailwind class `font-display`
- **Body/UI (H4–H6, body, labels):** `Geist Sans` — CSS var `--font-geist-sans`, Tailwind class `font-sans`
- **Mono:** `Geist Mono` — CSS var `--font-geist-mono`, Tailwind class `font-mono`

### Component exports
| Component | Element | Key classes |
|---|---|---|
| `Display` | `<span>` | `font-display text-8xl font-bold tracking-tighter leading-none` |
| `H1` | `<h1>` | `font-display text-5xl font-bold tracking-tight leading-tight` |
| `H2` | `<h2>` | `font-display text-4xl font-semibold tracking-tight leading-tight` |
| `H3` | `<h3>` | `font-display text-3xl font-semibold tracking-tight leading-snug` |
| `H4` | `<h4>` | `font-sans text-2xl font-semibold leading-snug` |
| `H5` | `<h5>` | `font-sans text-xl font-medium leading-normal` |
| `H6` | `<h6>` | `font-sans text-lg font-medium leading-normal` |
| `BodyLarge` | `<p>` | `font-sans text-lg font-normal leading-relaxed` |
| `Body` | `<p>` | `font-sans text-base font-normal leading-relaxed` |
| `BodySmall` | `<p>` | `font-sans text-sm font-normal leading-relaxed` |
| `Caption` | `<span>` | `font-sans text-xs text-[var(--color-ink-subtle)]` |
| `Label` | `<span>` | `font-sans text-xs font-semibold uppercase tracking-widest` |
| `Overline` | `<span>` | `font-sans text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]` |

All components accept a `className` prop for overrides. Internal `cn()` helper merges classes.

---

## UI Components

### `Button` (`app/components/ui/button.tsx`)
Variants: `primary` (bg-ink) · `outline` (border-ink, fills on hover) · `ghost` (transparent) · `gold` (bg-gold)
Sizes: `sm` (px-4 py-2 text-xs) · `md` (px-6 py-3 text-sm) · `lg` (px-8 py-4 text-sm)
All: `font-sans font-semibold uppercase tracking-widest transition-colors`

### `PropertyCard` (`app/components/ui/property-card.tsx`)
Standard listing card with gradient placeholder image. Props: `ref`, `status`, `name`, `location`, `description`, `price`, `specs[]`, `imageGradient?`. Uses `outline` button + `H3/H5/Body/Label/BodySmall`. **Not used in sections yet — sections use their own card components.**

### Layout primitives (`app/components/ui/layout.tsx`)
- `Container`: `max-w-4xl mx-auto px-4 md:px-container w-full`
- `Section`: `py-section`
- `Stack`: `flex flex-col gap-stack`
- `Inline`: `flex flex-row items-center gap-inline`
- `Grid`: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter`

Note: sections use `max-w-7xl` directly rather than `<Container>` so they can span wider.

---

## Layout Shell

### Root layout (`app/layout.tsx`)
```
<html class="[font vars] h-full antialiased">
  <body class="min-h-full flex flex-col">
    <Navbar />                     ← fixed, h-16
    <main class="flex-1 pt-16">   ← pt-16 offsets fixed navbar
      {children}
    </main>
    <Footer />
  </body>
</html>
```

### Navbar (`app/components/layout/Navbar.tsx`) — `"use client"`
- Fixed at top, `z-50`, `h-16`
- **Transparent** when `scrollY <= 20` AND mobile menu is closed → white text on hero
- **Solid** (`bg-paper/95 backdrop-blur-sm border-border`) once scrolled or menu opens
- Nav links: Properties · Locations · About · Contact
- Desktop CTA: "Request Viewing" (bordered button, right side)
- Mobile: 2-bar hamburger → animated × → full-width dropdown with links + filled CTA
- Max-width: `max-w-7xl mx-auto px-4 md:px-container`

### Footer (`app/components/layout/Footer.tsx`)
- `bg-paper-alt`, `border-t border-border`
- 4-col grid (`md:grid-cols-4`): brand column + Properties / Company / Legal link columns
- Bottom bar: copyright + "Member of The Property Ombudsman · RICS Regulated"

---

## Sections (Homepage)

### `HeroSection` (`app/components/sections/HeroSection.tsx`) — `"use client"`
- Full-viewport (`min-h-screen`), `-mt-16` to bleed behind fixed navbar
- Unsplash background image via `next/image` with `fill` + `priority`
- Dark gradient overlay: `from-black/65 via-black/45 to-black/75`
- Content: `max-w-7xl mx-auto px-4 md:px-container text-center`
- Search bar: For Sale / To Rent toggle (`useState`) + location input + gold Search button
- Trust bar: "2,400+ Properties · 35 Years Experience · RICS Regulated"

### `FeaturedPropertiesSection` (`app/components/sections/FeaturedPropertiesSection.tsx`)
- Asymmetric CSS grid: `grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:h-[680px] gap-gutter`
- Left card spans both rows (`md:row-span-2`), right cards half-height
- `FeaturedCard` internal component: `next/image fill` + gradient overlay + hover zoom (`group-hover:scale-105`)
- Tall (left) card shows specs grid above name/price; short cards show name/location/price only
- Section header: Overline + H2 + "View all properties →" link (desktop only)

---

## Images

All images from Unsplash. Remote pattern is whitelisted in `next.config.ts`:
```ts
images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] }
```
Always use `next/image`. For full-bleed cards, use `fill` prop + `relative overflow-hidden` on the parent. **Restart the dev server after editing `next.config.ts`** — hot reload does not pick up config changes.

---

## Known Gotchas

- `@theme { ... }` triggers an IDE CSS linter warning ("unknown at-rule") — this is harmless, ignore it
- Hero uses `-mt-16` to cancel `<main>`'s `pt-16`, letting it fill the full viewport behind the navbar
- After killing/restarting the dev server, check for port 3000 conflicts: `lsof -ti :3000 | xargs kill -9`
- Sections manage their own max-width (`max-w-7xl`) rather than using the `<Container>` primitive
