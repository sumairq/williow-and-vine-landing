import Image from "next/image"
import { H1, Overline, Caption } from "@/app/components/ui/typography"
import { ListingCard } from "@/app/components/ui/listing-card"
import { PROPERTIES } from "@/app/data/properties"
import { FiltersSidebar } from "./_components/FiltersSidebar"

export default function PropertiesPage() {
  return (
    <section className="bg-[var(--color-paper)]">

      {/* Hero band — bleeds under fixed navbar */}
      <div className="relative -mt-16 flex items-end">

        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
          alt="Sunlit luxury residence exterior"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/80" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-container pt-32 pb-16">
          <header className="max-w-2xl">
            <Overline className="mb-4 block">Browse the Catalogue</Overline>
            <H1 className="text-white">Properties</H1>
          </header>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-container py-section">
        <div className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-10 lg:gap-14">

          <FiltersSidebar />

          <div className="flex flex-col gap-6">
            <Caption className="block">
              Showing {PROPERTIES.length} of {PROPERTIES.length} properties
            </Caption>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {PROPERTIES.map((property) => (
                <ListingCard key={property.name} property={property} />
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
