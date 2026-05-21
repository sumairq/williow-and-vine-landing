import Image from "next/image"
import { H4, H5, Label, BodySmall, Caption } from "@/app/components/ui/typography"
import type { Property, PropertyStatus } from "@/app/data/properties"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

const STATUS_COLOURS: Record<PropertyStatus, string> = {
  "For Sale":        "bg-[var(--color-ink)] text-[var(--color-paper)]",
  "To Rent":         "bg-[var(--color-ink)] text-[var(--color-paper)]",
  "New Listing": "bg-[var(--color-gold)] text-[var(--color-paper)]",
  "Off Market":      "bg-[var(--color-paper)] text-[var(--color-ink)]",
  "Under Offer":     "bg-[var(--color-paper-alt)] text-[var(--color-ink-muted)]",
}

export function ListingCard({ property }: { property: Property }) {
  return (
    <div className="group border border-[var(--color-border)] bg-white overflow-hidden flex flex-col cursor-pointer hover:border-[var(--color-ink-subtle)] transition-colors duration-300">

      <div className="relative h-44 overflow-hidden shrink-0">
        <Image
          src={property.image}
          alt={property.alt}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-3 left-3">
          <span className={cn(
            "font-sans text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1",
            STATUS_COLOURS[property.status]
          )}>
            {property.status}
          </span>
        </div>
      </div>

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
