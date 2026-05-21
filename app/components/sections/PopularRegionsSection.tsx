import Image from "next/image"
import { H2, H3, Overline, Caption } from "@/app/components/ui/typography"
import { REGIONS, type Region } from "@/app/data/regions"

function RegionCard({ region }: { region: Region }) {
  return (
    <a
      href={`/locations/${region.slug}`}
      className="relative overflow-hidden group cursor-pointer h-[260px] lg:h-auto block"
    >

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
          {region.country} · {region.propertiesCount} properties
        </Caption>
        <H3 className="text-white mb-5">{region.name}</H3>
        <span className="font-sans text-[10px] font-semibold uppercase tracking-widest px-4 py-2 border border-white/50 text-white group-hover:bg-white group-hover:text-[var(--color-ink)] transition-colors duration-300 inline-block">
          Learn More
        </span>
      </div>

    </a>
  )
}

export function PopularRegionsSection() {
  const featured = REGIONS.slice(0, 6)

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
          {featured.map((region) => (
            <RegionCard key={region.slug} region={region} />
          ))}
        </div>

      </div>
    </section>
  )
}
