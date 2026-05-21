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
  page.tsx                         # Homepage (composes sections in order)
  design-system/page.tsx           # Design system showcase route
  properties/
    page.tsx                       # /properties — sidebar filters + 3-col listing grid
    _components/
      FiltersSidebar.tsx           # Location + Listing filters (private to route)

  data/
    properties.ts                  # Shared Property type + PROPERTIES array (used by /properties and PropertiesSection)

  components/
    ui/
      typography.tsx               # All text primitives
      button.tsx                   # Button component
      layout.tsx                   # Container, Section, Stack, Inline, Grid
      property-card.tsx            # Specs-grid card with gradient placeholder (unused in sections)
      listing-card.tsx             # Image-led listing card — shared by /properties and PropertiesSection
    layout/
      Navbar.tsx                   # Fixed, scroll-aware, transparent-on-hero
      Footer.tsx                   # 4-col grid, brand + link columns
    sections/
      HeroSection.tsx              # Full-viewport hero with search bar
      FeaturedPropertiesSection.tsx # Asymmetric 2×2 featured grid
      PropertiesSection.tsx        # 4-col × 2-row browse grid + View More button
      PopularRegionsSection.tsx    # 3-col × 2-row destination cards with overlay
      BlogSection.tsx              # Journal: large post (left) + 3 horizontal posts (right)
      TestimonialsSection.tsx      # Carousel: quote cards with portrait image + fade transition

public/
  images/
    943fdb66-b5b4-49ff-876e-954fc9d03745.png  # B&W portrait — used in testimonials
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
Specs-grid card with gradient placeholder image. Props: `ref`, `status`, `name`, `location`, `description`, `price`, `specs[]`, `imageGradient?`. Uses `outline` button + `H3/H5/Body/Label/BodySmall`. **Currently unused — kept around for the design-system showcase.** New listing pages should use `ListingCard` instead.

### `ListingCard` (`app/components/ui/listing-card.tsx`)
Image-led listing card used by both `PropertiesSection` and the `/properties` page. Props: `property: Property` (from `@/app/data/properties`). Structure: `next/image fill` thumbnail (`h-44`) with hover zoom + colour-coded status badge overlay, then `H5` name, location `Caption`, beds/size `Label`+`BodySmall` row, `H4` price. Status colours come from a local `STATUS_COLOURS` record keyed by `PropertyStatus`.

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
- Background: `--color-paper`
- Asymmetric CSS grid: `grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:h-[680px] gap-gutter`
- Left card spans both rows (`md:row-span-2`), right cards half-height
- `FeaturedCard` internal component: `next/image fill` + gradient overlay + hover zoom (`group-hover:scale-105`)
- Tall (left) card shows specs grid above name/price; short cards show name/location/price only
- Section header: Overline + H2 + "View all properties →" link (desktop only)

### `PropertiesSection` (`app/components/sections/PropertiesSection.tsx`)
- Background: `--color-paper-alt`
- Shows the first 8 entries of `PROPERTIES` (from `@/app/data/properties`) in a `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter` grid (2 rows on desktop)
- Cards are rendered by the shared `<ListingCard>` component (`app/components/ui/listing-card.tsx`) — status colour map lives there
- "View More Properties" `outline` button centred below grid — no action attached
- Section header: Overline + H2 (left) + property count caption (right, desktop only)

### `PopularRegionsSection` (`app/components/sections/PopularRegionsSection.tsx`)
- Background: `--color-paper-alt`
- 6 destination cards in `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:h-[560px] gap-gutter`
- Destinations: Marbella · Mayfair · Côte d'Azur · Tuscany · Monte Carlo · The Cotswolds
- Each card: full-bleed `next/image fill` + bottom-heavy gradient overlay that deepens on hover, image zoom on hover
- Overlay content: country + property count (caption), destination name (H3), ghost "Learn More" button (white border, fills white on hover)
- Mobile: `h-[260px]` per card; desktop height set by container (`lg:h-[560px]`)
- Section header: Overline + H2 (left) + "All locations →" link (right, desktop only)

### `BlogSection` (`app/components/sections/BlogSection.tsx`)
- Background: `--color-paper`
- 2-column asymmetric grid: `grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-gutter`
- Left column: `LargePostCard` spanning all 3 rows (`md:row-span-3`) — full-bleed image on top, white content panel below (title, excerpt, author/date/read time)
- Right column: 3 `SmallPostCard`s stacked — fixed-width thumbnail (`w-36`) on left, Overline + H6 title + meta on right
- Both card types: image zoom on hover, title transitions to gold on hover
- Section header: Overline + H2 (left) + "All articles →" link (right, desktop only)
- 4 posts with Unsplash images; categories: Market Insights, Interior Design, Country Estates, Buying Guide

### `TestimonialsSection` (`app/components/sections/TestimonialsSection.tsx`) — `"use client"`
- Background: `--color-paper-alt`
- Carousel showing one testimonial at a time; 5 testimonials total
- Card layout: image panel on the left (`md:w-72`, `object-cover object-top`) + quote panel on the right
- Quote panel: gold SVG quotation mark, italic `font-display` quote text, name (H4), title (BodySmall), location (Caption)
- Portrait image: `public/images/943fdb66-b5b4-49ff-876e-954fc9d03745.png` (B&W, used for all slides)
- Fade transition: `setFading(true)` → 180ms timeout → swap index → `setFading(false)`; opacity driven by inline style
- Controls: dash-style dot indicators (active dot widens to `2rem`) on left; prev/next chevron buttons on right
- Section header: centred Overline + H2

---

## Routes

### Homepage (`app/page.tsx`)
Composes the homepage sections in the order listed below.

### `/properties` (`app/properties/page.tsx`)
- Server component. Page background `--color-paper`
- **Hero band** at the top: `relative -mt-16 flex items-end` to bleed behind the fixed navbar (mirrors `HeroSection`'s `-mt-16` trick). Unsplash `next/image fill` + dark `from-black/65 via-black/50 to-black/80` gradient. Content panel: `relative z-10 max-w-7xl mx-auto px-4 md:px-container pt-32 pb-16` with `Overline` (gold) + white `H1 "Properties"`. The band ends right above the content grid so the Location filter sits immediately below it
- **Content** below: `max-w-7xl mx-auto px-4 md:px-container py-section` containing `grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-10 lg:gap-14` — left sidebar (`<FiltersSidebar>`), right content column
- Right column: result-count `Caption` above a `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter` grid of `<ListingCard>`s rendering the full `PROPERTIES` array
- Filters are UI-only — controls render but don't filter the grid yet

### `FiltersSidebar` (`app/properties/_components/FiltersSidebar.tsx`)
- `<aside>` with `lg:sticky lg:top-24 lg:self-start`, `flex flex-col gap-8`
- **Location** group: `Label` heading + native `<select>` (All countries + Spain/England/France/Italy/Monaco) + city `<input>`. Both inputs share `fieldClass`: `w-full bg-white border border-[var(--color-border)] px-4 py-3 text-sm`
- **Listing** group (separated by `border-t pt-8`): `Label` heading, then two `CheckboxGroup`s — Property Type (Villa, Apartment, Townhouse, Estate, Penthouse) and Listing Status (For Sale, To Rent, Off Market, New Instruction, Under Offer)
- `CheckboxGroup` renders a `<fieldset>` with a `<legend>` styled like an Overline + stacked `<label>` rows. Native checkboxes use `accent-[var(--color-gold)]` for the check colour
- Footer: text-only "Reset filters" `<button type="reset">` (no handler)

### Design system showcase (`app/design-system/page.tsx`)
Showcase route for typography, buttons, and the legacy `PropertyCard`.

---

## Shared Data (`app/data/properties.ts`)

Single source of truth for property listings. Exports:
- `PropertyStatus` — `"For Sale" | "To Rent" | "Off Market" | "New Instruction" | "Under Offer"`
- `PropertyType` — `"Villa" | "Apartment" | "Townhouse" | "Estate" | "Penthouse"`
- `PropertyCountry` — `"Spain" | "England" | "France" | "Italy" | "Monaco"`
- `Property` — `{ image, alt, status, name, location, country, type, price, beds, size }`
- `PROPERTIES: Property[]` — 12 hardcoded listings spread across the 5 countries

Consumers: `PropertiesSection` (slices the first 8), `/properties` (renders all 12). When adding properties keep at least one entry per country so the (future) location filter has something to match.

---

## Homepage Section Order (`app/page.tsx`)

1. `HeroSection`
2. `FeaturedPropertiesSection`
3. `PropertiesSection`
4. `PopularRegionsSection`
5. `BlogSection`
6. `TestimonialsSection`

Sections alternate between `--color-paper` and `--color-paper-alt` backgrounds for visual rhythm.

---

## Images

Remote Unsplash images are whitelisted in `next.config.ts`:
```ts
images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] }
```
Local images live in `public/images/` and are referenced as `/images/<filename>`.

Always use `next/image`. For full-bleed cards use the `fill` prop with `relative overflow-hidden` on the parent and an appropriate `sizes` attribute. **Restart the dev server after editing `next.config.ts`** — hot reload does not pick up config changes.

---

## Known Gotchas

- `@theme { ... }` triggers an IDE CSS linter warning ("unknown at-rule") — this is harmless, ignore it
- Hero uses `-mt-16` to cancel `<main>`'s `pt-16`, letting it fill the full viewport behind the navbar
- After killing/restarting the dev server, check for port 3000 conflicts: `lsof -ti :3000 | xargs kill -9`
- Sections manage their own max-width (`max-w-7xl`) rather than using the `<Container>` primitive
