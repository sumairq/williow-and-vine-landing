import Image from "next/image"
import { H2, H4, H5, Label, Overline, BodySmall, Caption } from "@/app/components/ui/typography"
import { Button } from "@/app/components/ui/button"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

type Property = {
  image: string
  alt: string
  status: "For Sale" | "To Rent" | "Off Market" | "New Instruction" | "Under Offer"
  name: string
  location: string
  price: string
  beds: number
  size: string
}

const PROPERTIES: Property[] = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    alt: "Contemporary detached home with large glazing",
    status: "For Sale",
    name: "Elmwood House",
    location: "Beaconsfield, Buckinghamshire",
    price: "£2.95M",
    beds: 5,
    size: "4,820 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
    alt: "Traditional red-brick family home",
    status: "New Instruction",
    name: "Fairfax Manor",
    location: "Virginia Water, Surrey",
    price: "£4.2M",
    beds: 6,
    size: "6,100 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=600&q=80",
    alt: "White rendered modern home with pool",
    status: "For Sale",
    name: "Clifton Villa",
    location: "Esher, Surrey",
    price: "£3.75M",
    beds: 5,
    size: "5,200 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=600&q=80",
    alt: "Stone country cottage with gardens",
    status: "Under Offer",
    name: "Orchard Cottage",
    location: "Burford, Oxfordshire",
    price: "£1.85M",
    beds: 4,
    size: "3,150 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=600&q=80",
    alt: "Grand Edwardian manor house",
    status: "Off Market",
    name: "Cavendish Hall",
    location: "Marlow, Buckinghamshire",
    price: "£7.5M",
    beds: 8,
    size: "9,400 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80",
    alt: "Detached family home with double garage",
    status: "For Sale",
    name: "Lansdowne House",
    location: "Cobham, Surrey",
    price: "£2.1M",
    beds: 5,
    size: "3,800 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    alt: "Modern villa with landscaped gardens",
    status: "New Instruction",
    name: "The Pavilion",
    location: "Weybridge, Surrey",
    price: "£5.1M",
    beds: 6,
    size: "6,700 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=600&q=80",
    alt: "Arts and Crafts house in leafy setting",
    status: "For Sale",
    name: "Heather Lodge",
    location: "Gerrards Cross, Bucks",
    price: "£1.65M",
    beds: 4,
    size: "2,950 sq ft",
  },
]

const STATUS_COLOURS: Record<Property["status"], string> = {
  "For Sale":        "bg-[var(--color-ink)] text-[var(--color-paper)]",
  "To Rent":         "bg-[var(--color-ink)] text-[var(--color-paper)]",
  "New Instruction": "bg-[var(--color-gold)] text-[var(--color-paper)]",
  "Off Market":      "bg-[var(--color-paper)] text-[var(--color-ink)]",
  "Under Offer":     "bg-[var(--color-paper-alt)] text-[var(--color-ink-muted)]",
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group border border-[var(--color-border)] bg-white overflow-hidden flex flex-col cursor-pointer hover:border-[var(--color-ink-subtle)] transition-colors duration-300">

      {/* Image */}
      <div className="relative h-44 overflow-hidden shrink-0">
        <Image
          src={property.image}
          alt={property.alt}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span className={cn(
            "font-sans text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1",
            STATUS_COLOURS[property.status]
          )}>
            {property.status}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-1">
        <H5 className="text-[var(--color-ink)] mb-0.5 leading-snug">{property.name}</H5>
        <Caption className="block mb-4">{property.location}</Caption>

        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[var(--color-border)]">
          <div>
            <Label className="text-[var(--color-ink-subtle)] block mb-0.5">Beds</Label>
            <BodySmall className="text-[var(--color-ink)] font-medium">{property.beds}</BodySmall>
          </div>
          <div>
            <Label className="text-[var(--color-ink-subtle)] block mb-0.5">Size</Label>
            <BodySmall className="text-[var(--color-ink)] font-medium">{property.size}</BodySmall>
          </div>
        </div>

        <H4 className="text-[var(--color-ink)] mt-auto">{property.price}</H4>
      </div>
    </div>
  )
}

export function PropertiesSection() {
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
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.name} property={property} />
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
