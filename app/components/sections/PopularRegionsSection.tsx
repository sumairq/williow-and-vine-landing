import Image from "next/image"
import { H2, H3, Overline, Caption } from "@/app/components/ui/typography"

type Region = {
  image: string
  alt: string
  country: string
  name: string
  properties: number
}

const REGIONS: Region[] = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury villa with pool in Marbella",
    country: "Spain",
    name: "Marbella",
    properties: 38,
  },
  {
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    alt: "Georgian townhouses in Mayfair London",
    country: "England",
    name: "Mayfair",
    properties: 61,
  },
  {
    image: "https://images.unsplash.com/photo-1533165083432-4b36783e23b2?auto=format&fit=crop&w=800&q=80",
    alt: "Coastal view of the French Riviera",
    country: "France",
    name: "Côte d'Azur",
    properties: 24,
  },
  {
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=800&q=80",
    alt: "Rolling hills and vineyards of Tuscany",
    country: "Italy",
    name: "Tuscany",
    properties: 17,
  },
  {
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80",
    alt: "Monaco harbour and skyline",
    country: "Monaco",
    name: "Monte Carlo",
    properties: 12,
  },
  {
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    alt: "Quintessential Cotswolds village",
    country: "England",
    name: "The Cotswolds",
    properties: 45,
  },
]

function RegionCard({ region }: { region: Region }) {
  return (
    <div className="relative overflow-hidden group cursor-pointer h-[260px] lg:h-auto">

      {/* Background image */}
      <Image
        src={region.image}
        alt={region.alt}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-108"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 group-hover:from-black/90 transition-colors duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <Caption className="text-white/55 block mb-1.5 tracking-widest uppercase text-[10px]">
          {region.country} · {region.properties} properties
        </Caption>
        <H3 className="text-white mb-5">{region.name}</H3>
        <button className="font-sans text-[10px] font-semibold uppercase tracking-widest px-4 py-2 border border-white/50 text-white hover:bg-white hover:text-[var(--color-ink)] transition-colors duration-300 cursor-pointer">
          Learn More
        </button>
      </div>

    </div>
  )
}

export function PopularRegionsSection() {
  return (
    <section className="bg-[var(--color-paper-alt)] py-section">
      <div className="max-w-7xl mx-auto px-4 md:px-container">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <Overline className="mb-3 block">Where We Operate</Overline>
            <H2 className="text-[var(--color-ink)]">Popular Destinations</H2>
          </div>
          <a
            href="/locations"
            className="hidden md:block font-sans text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors pb-1 border-b border-[var(--color-border)] hover:border-[var(--color-ink)]"
          >
            All locations →
          </a>
        </div>

        {/* 3-col × 2-row grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:h-[560px] gap-gutter">
          {REGIONS.map((region) => (
            <RegionCard key={region.name} region={region} />
          ))}
        </div>

      </div>
    </section>
  )
}
