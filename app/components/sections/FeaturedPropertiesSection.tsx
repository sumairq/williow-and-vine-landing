import Image from "next/image"
import { H2, H3, H4, H5, Label, Overline, BodySmall } from "@/app/components/ui/typography"
import { Button } from "@/app/components/ui/button"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

type FeaturedProperty = {
  image: string
  alt: string
  status: string
  name: string
  location: string
  price: string
  specs?: { label: string; value: string }[]
}

const PROPERTIES: FeaturedProperty[] = [
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
    alt: "Harrington House — luxury manor with pool",
    status: "Off Market",
    name: "Harrington House",
    location: "Chiltern Hills, Buckinghamshire",
    price: "£18.5M",
    specs: [
      { label: "Bedrooms",  value: "6 Principal" },
      { label: "Grounds",   value: "42 Acres"    },
      { label: "Type",      value: "Grade I Listed" },
      { label: "Reception", value: "4 Rooms"     },
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80",
    alt: "Ashwood Pavilion — contemporary riverside home",
    status: "New Listing",
    name: "Ashwood Pavilion",
    location: "Richmond Hill, Surrey",
    price: "£6.75M",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80",
    alt: "Thornfield Lodge — country house",
    status: "For Sale",
    name: "Thornfield Lodge",
    location: "Henley-on-Thames, Oxfordshire",
    price: "£3.25M",
  },
]

type FeaturedCardProps = {
  property: FeaturedProperty
  tall?: boolean
  className?: string
}

function FeaturedCard({ property, tall = false, className }: FeaturedCardProps) {
  return (
    <div className={cn("relative overflow-hidden group cursor-pointer", className)}>

      {/* Image */}
      <Image
        src={property.image}
        alt={property.alt}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

      {/* Status badge */}
      <div className="absolute top-5 left-5">
        <Overline>{property.status}</Overline>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

        {/* Specs — tall card only */}
        {tall && property.specs && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6 pb-6 border-b border-white/20">
            {property.specs.map(({ label, value }) => (
              <div key={label}>
                <Label className="text-white/50 block mb-0.5">{label}</Label>
                <BodySmall className="text-white font-medium">{value}</BodySmall>
              </div>
            ))}
          </div>
        )}

        <H3 className="text-white mb-1">{property.name}</H3>
        <H5 className="text-white/70 font-normal mb-5">{property.location}</H5>

        <div className="flex items-center justify-between gap-4">
          <H4 className="text-white">{property.price}</H4>
          <Button variant="gold" size="sm">View Property</Button>
        </div>
      </div>
    </div>
  )
}

export function FeaturedPropertiesSection() {
  return (
    <section className="bg-[var(--color-paper)] py-section">
      <div className="max-w-7xl mx-auto px-4 md:px-container">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <Overline className="mb-3 block">Featured Properties</Overline>
            <H2 className="text-[var(--color-ink)]">Exceptional Homes</H2>
          </div>
          <a
            href="/properties"
            className="hidden md:block font-sans text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors pb-1 border-b border-[var(--color-border)] hover:border-[var(--color-ink)]"
          >
            View all properties →
          </a>
        </div>

        {/* 2-col × 2-row grid — left card spans both rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:h-[680px] gap-gutter">
          <FeaturedCard
            property={PROPERTIES[0]}
            tall
            className="h-[420px] md:h-auto md:row-span-2"
          />
          <FeaturedCard
            property={PROPERTIES[1]}
            className="h-[280px] md:h-auto"
          />
          <FeaturedCard
            property={PROPERTIES[2]}
            className="h-[280px] md:h-auto"
          />
        </div>

      </div>
    </section>
  )
}
