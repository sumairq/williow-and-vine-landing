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
| Charts | Recharts (client-only, used on `/about`) | ^3.8 |
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
    page.tsx                       # /properties — hero band + sidebar filters + 3-col listing grid
    _components/
      FiltersSidebar.tsx           # Location + Listing filters (private to route)

  locations/
    page.tsx                       # /locations — hero band + 3-col grid of all 12 regions
    [slug]/page.tsx                # /locations/<slug> — per-region detail (hero, about, highlights, listings, more)

  about/
    page.tsx                       # /about — hero, story, metrics, donut chart, leadership, values
    _components/
      PortfolioDonut.tsx           # Recharts donut + custom legend (client component)

  contact/
    page.tsx                       # /contact — full-bleed overlay, headline left, form right (client)

  data/
    properties.ts                  # PROPERTIES + Property/PropertyStatus/PropertyType/PropertyCountry
    regions.ts                     # REGIONS array — 12 regions used by /locations + PopularRegionsSection
    about.ts                       # METRICS, PORTFOLIO_BY_COUNTRY, LEADERSHIP, VALUES (+ PORTFOLIO_TOTAL)

  components/
    ui/
      typography.tsx               # All text primitives
      button.tsx                   # Button component
      layout.tsx                   # Container, Section, Stack, Inline, Grid
      property-card.tsx            # Specs-grid card with gradient placeholder (legacy, design-system only)
      listing-card.tsx             # Image-led listing card — shared by /properties, /locations/[slug], PropertiesSection
      region-card.tsx              # Destination card with image + gradient + Learn More — used by /locations + /locations/[slug] "Other destinations"
    layout/
      Navbar.tsx                   # Fixed, scroll-aware, transparent-on-hero
      Footer.tsx                   # 4-col grid, brand + link columns
    sections/
      HeroSection.tsx              # Full-viewport hero with search bar
      FeaturedPropertiesSection.tsx # Asymmetric 2×2 featured grid
      PropertiesSection.tsx        # 4-col × 2-row browse grid + View More button
      PopularRegionsSection.tsx    # 3-col × 2-row destination cards with overlay (inline card; links to /locations/<slug>)
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
Image-led listing card used by `PropertiesSection`, the `/properties` page, and the featured-listings strip on `/locations/[slug]`. Props: `property: Property` (from `@/app/data/properties`). Structure: `next/image fill` thumbnail (`h-44`) with hover zoom + colour-coded status badge overlay, then `H5` name, location `Caption`, beds/size `Label`+`BodySmall` row, `H4` price. Status colours come from a local `STATUS_COLOURS` record keyed by `PropertyStatus`.

### `RegionCard` (`app/components/ui/region-card.tsx`)
Destination card. Props: `region: Region` (from `@/app/data/regions`) + optional `className` to override the default `h-[260px] lg:h-[400px]` sizing. Structure: `<a href="/locations/{slug}">` wrapping `next/image fill` with hover zoom, bottom-heavy gradient overlay (deepens on hover), and a content stack of `Caption {country} · {count} properties` + `H3 {name}` + ghost "Learn More" pill that fills white on hover. Used on `/locations` index and the "Other destinations" footer of `/locations/[slug]`. `PopularRegionsSection` uses an *inline* copy of this design (slightly different sizing for its asymmetric grid) — keep both visually consistent if either is edited.

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
- **Listing** group (separated by `border-t pt-8`): `Label` heading, then two `CheckboxGroup`s — Property Type (Villa, Apartment, Townhouse, Estate, Penthouse) and Listing Status (For Sale, To Rent, Off Market, New Listing, Under Offer)
- `CheckboxGroup` renders a `<fieldset>` with a `<legend>` styled like an Overline + stacked `<label>` rows. Native checkboxes use `accent-[var(--color-gold)]` for the check colour
- Footer: text-only "Reset filters" `<button type="reset">` (no handler)

### `/locations` (`app/locations/page.tsx`)
- Server component. Page background `--color-paper`
- **Hero band**: same `-mt-16` overlay pattern as `/properties`, with an Unsplash background, dark gradient, gold `Overline` "Where We Operate" and white `H1 "Locations"` aligned bottom-left in the content panel
- **Region grid**: `max-w-7xl mx-auto px-4 md:px-container py-section` containing a `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter` of all 12 `<RegionCard>`s

### `/locations/[slug]` (`app/locations/[slug]/page.tsx`)
- Server component. Uses `generateStaticParams()` over `REGIONS` so all 12 detail pages prerender at build time. `params` is a `Promise<{ slug: string }>` per Next 16 App Router; await it inside the page. Unknown slugs call `notFound()` from `next/navigation`
- Section stack (top to bottom):
  1. **Hero band** — region image + Overline `{country}` + white `H1 {name}` + `Caption {propertiesCount} properties`
  2. **About** — 12-col split: left `col-span-4` tagline H2, right `col-span-7 col-start-6` two `<Body>` paragraphs from `region.about`
  3. **Highlights** — `--color-paper-alt`. Numbered (`01`/`02`/`03` gold `Label`) `H5` cards in 3-col grid
  4. **Featured listings** — filters `PROPERTIES` by `country === region.country`, shows up to 3 `<ListingCard>`s. If zero matches, shows a muted "No listings are currently published…" panel with a "Register interest" link to `/contact`
  5. **Discover more** — 3 other `<RegionCard>`s, biased to same country first, then fill from other countries

### `/about` (`app/about/page.tsx`)
- Server component, but embeds a single client island (`<PortfolioDonut>`)
- Sections (top to bottom): hero band → story (12-col split) → metrics → portfolio donut card → leadership grid → values strip
- **Metrics**: 4 cards in `grid-cols-2 lg:grid-cols-4 gap-gutter`, each rendering `<Display>{value}</Display>` + `<Label>{label}</Label>` + optional `<Caption>{caption}</Caption>` from `METRICS`
- **Portfolio donut card**: white framing card (`bg-white border p-card md:p-10`) wrapping `<PortfolioDonut>` plus a `<Caption>` footnote citing `{PORTFOLIO_TOTAL} active listings, May 2026`. Heading uses `text-balance` and **no** narrow `max-w-2xl` wrapper — see "Width-constraint anti-pattern" below
- **Leadership**: 4 cards (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`) with a `next/image fill` portrait in an `aspect-[4/5]` container, `object-top grayscale`, then `H5` name + gold Overline role + `BodySmall` bio
- **Values**: 3-col grid, each with numbered gold `Label` + `H5` title + `BodySmall` body, separated by `border-t pt-6`

### `PortfolioDonut` (`app/about/_components/PortfolioDonut.tsx`) — `"use client"`
Recharts donut + custom legend. Uses brand **hex** values (`#B8985A`, `#1A1917`, `#6B6966`, `#D4B97A`, `#9C9894`) for the five `Cell`s — Recharts passes the colour straight to SVG `fill`, so a hex string is safest. Layout: 12-col grid, `<ResponsiveContainer height={360}>` left (`lg:col-span-7`), legend right (`lg:col-span-5`). Centre label is absolute-positioned over the donut showing `PORTFOLIO_TOTAL` + "Active listings". Tooltip is a small custom dark pill (`bg-ink text-paper`) showing `{country}` + `{count} properties · {percent}%`.

### `/contact` (`app/contact/page.tsx`) — `"use client"`
- Full-bleed background image (`next/image fill priority`) + dark `bg-gradient-to-br from-black/75 via-black/60 to-black/85` covering the entire viewport; `-mt-16` so it bleeds under the navbar
- 12-col grid: heading column `lg:col-span-5` left, form column `lg:col-span-6 lg:col-start-7` (form starts further right with column 6 as a gutter)
- **Heading column** (white on overlay): Overline + H1 "You Have Questions, We Have Answers" (`text-balance`) + supporting `<Body>`
- **Form card** (`bg-white border p-10`): `H3 "Tell Us What You Need"` →
  - First Name / Last Name (`grid-cols-1 md:grid-cols-2`)
  - Country `<select>` (10 options) / Phone Number
  - Email Address (full width)
  - Type of Inquiry — radio pills: General, Book Property Tour, Sell House, Rent. Implemented as `<label><input type="radio" class="peer sr-only" /><span class="… peer-checked:bg-ink peer-checked:text-paper">…</span></label>` so the active state is **CSS-only** (no `useState` for the visual toggle)
  - Message textarea (`rows={5}`, non-resizable)
  - Footer row separated by `border-t`: opt-in checkbox (`accent-gold`, `sm:flex-1 sm:min-w-0` so the label grows into all available space) + dark "Send Message" submit button (`bg-ink hover:bg-gold`)
- `onSubmit={(e) => e.preventDefault()}` — form is UI-only, no backend wiring

### Design system showcase (`app/design-system/page.tsx`)
Showcase route for typography, buttons, and the legacy `PropertyCard`.

---

## Shared Data

### `app/data/properties.ts`
- `PropertyStatus` — `"For Sale" | "To Rent" | "Off Market" | "New Listing" | "Under Offer"`
- `PropertyType` — `"Villa" | "Apartment" | "Townhouse" | "Estate" | "Penthouse"`
- `PropertyCountry` — `"Spain" | "England" | "France" | "Italy" | "Monaco"`
- `Property` — `{ image, alt, status, name, location, country, type, price, beds, size }`
- `PROPERTIES: Property[]` — 12 hardcoded listings spread across the 5 countries

Consumers: `PropertiesSection` (slices the first 8), `/properties` (all 12), `/locations/[slug]` (filters by country).

### `app/data/regions.ts`
- `Region` — `{ slug, name, country, image, alt, propertiesCount, tagline, about: [string, string], highlights: string[] }`
- `REGIONS: Region[]` — 12 entries. The first 6 (Marbella, Mayfair, Côte d'Azur, Tuscany, Monte Carlo, The Cotswolds) match the original `PopularRegionsSection` order so the homepage section can `slice(0, 6)` without visual regression. `country` reuses `PropertyCountry` from `properties.ts`

Consumers: `PopularRegionsSection` (first 6), `/locations` (all 12), `/locations/[slug]` (find by slug + sibling regions for the "Other destinations" footer).

### `app/data/about.ts`
- `Metric { value, label, caption? }` — `METRICS` has 4 entries
- `PortfolioSlice { country, count }` — `PORTFOLIO_BY_COUNTRY` has 5 entries; also exports computed `PORTFOLIO_TOTAL`
- `Leader { name, role, bio, image, alt }` — `LEADERSHIP` has 4 entries with verified Unsplash portraits
- `Value { title, body }` — `VALUES` has 3 entries

All numbers are static / illustrative — there is no CMS or live data layer.

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
- `pnpm exec tsc --noEmit` emits one pre-existing error from `.next/dev/types/validator.ts` claiming `app/components/ui/layout.tsx` doesn't satisfy `LayoutConfig<"/components/ui">`. Next's validator is incorrectly treating that file as a route layout because of its name. It is harmless — ignore it. Any *additional* errors are real
- Recharts colours: pass **hex strings** (e.g. `#B8985A`) to `<Cell fill>`, not `var(--color-…)`. Recharts forwards the value directly into the SVG `fill` attribute, which doesn't always resolve CSS custom properties cleanly
- Unsplash photo IDs go stale silently — `next/image` will render a broken tile if the source 404s. Before committing a new image URL, verify with `curl -sS -o /dev/null -w "%{http_code}" "https://images.unsplash.com/photo-XXX?w=400"` — should return `200`
- Dynamic route `params` is a `Promise` in Next 16 — `await params` before destructuring (or use `use(params)` inside a client component). See `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/dynamic-routes.md`

---

## Width-constraint anti-pattern

**Don't add `max-w-*` to a text wrapper unless the parent is unbounded.** Inside a grid column or flex item, the parent already constrains width — adding a max only ever makes the child narrower, often causing headings to wrap one word per line or labels to cramp next to siblings.

This bit us repeatedly on the About headings (`max-w-2xl` on H2 wrappers caused "one word per line" wrapping) and on the contact form opt-in (`max-w-md` on the `<label>` left no room for the text next to the submit button).

Rules of thumb:
- Inside a grid column or flex child → omit `max-w-*`. The column/flex track is the constraint.
- Want a text block to grow into all remaining space in a flex row → use `flex-1 min-w-0` (not `max-w-md`).
- Headings prone to awkward wraps → add `text-balance` rather than narrowing the wrapper.
- Only apply `max-w-*` directly inside a wide section wrapper (e.g. `max-w-7xl mx-auto`) when you want a deliberate single-column reading width.
