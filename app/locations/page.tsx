import Image from "next/image"
import { H1, Overline } from "@/app/components/ui/typography"
import { RegionCard } from "@/app/components/ui/region-card"
import { REGIONS } from "@/app/data/regions"

export default function LocationsPage() {
  return (
    <section className="bg-[var(--color-paper)]">

      {/* Hero band — bleeds under fixed navbar */}
      <div className="relative -mt-16 flex items-end">

        <Image
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80"
          alt="Aerial view of European rooftops at dusk"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/80" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-container pt-32 pb-16">
          <div className="max-w-2xl">
            <Overline className="mb-4 block">Where We Operate</Overline>
            <H1 className="text-white mb-5">Locations</H1>
            {/* <Body className="text-white/75">
              Twelve destinations across Britain and the Mediterranean where our
              principals have worked for decades, each with a dedicated desk and
              local counsel.
            </Body> */}
          </div>
        </div>
      </div>

      {/* Region grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-container py-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {REGIONS.map((region) => (
            <RegionCard key={region.slug} region={region} />
          ))}
        </div>
      </div>

    </section>
  )
}
