import Image from "next/image"
import { H3, Caption } from "@/app/components/ui/typography"
import type { Region } from "@/app/data/regions"

export function RegionCard({
  region,
  className = "h-[260px] lg:h-[400px]",
}: {
  region: Region
  className?: string
}) {
  return (
    <a
      href={`/locations/${region.slug}`}
      className={`relative overflow-hidden group cursor-pointer block ${className}`}
    >
      <Image
        src={region.image}
        alt={region.alt}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-108"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 group-hover:from-black/90 transition-colors duration-500" />

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
