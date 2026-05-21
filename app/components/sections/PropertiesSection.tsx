import { H2, Overline, Caption } from "@/app/components/ui/typography"
import { Button } from "@/app/components/ui/button"
import { ListingCard } from "@/app/components/ui/listing-card"
import { PROPERTIES } from "@/app/data/properties"

export function PropertiesSection() {
  const featured = PROPERTIES.slice(0, 8)

  return (
    <section className="bg-[var(--color-paper-alt)] py-section">
      <div className="max-w-7xl mx-auto px-4 md:px-container">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <Overline className="mb-3 block">Browse Listings</Overline>
            <H2 className="text-[var(--color-ink)]">Current Properties</H2>
          </div>
          <Caption className="hidden md:block pb-1">
            Showing 8 of 247 properties
          </Caption>
        </div>

        {/* 4-col × 2-row grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {featured.map((property) => (
            <ListingCard key={property.name} property={property} />
          ))}
        </div>

        {/* View More */}
        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg">
            View More Properties
          </Button>
        </div>

      </div>
    </section>
  )
}
