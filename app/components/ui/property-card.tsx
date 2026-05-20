import { H3, H5, Body, BodySmall, Label, Overline } from "./typography"
import { Button } from "./button"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}

type Spec = {
  label: string
  value: string
}

type Property = {
  ref: string
  status: string
  name: string
  location: string
  description: string
  price: string
  specs: Spec[]
  imageGradient?: string
}

type PropertyCardProps = {
  property: Property
  className?: string
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  const {
    ref,
    status,
    name,
    location,
    description,
    price,
    specs,
    imageGradient = "linear-gradient(135deg, #E8E4DF 0%, #D4C9BC 50%, #C4B9AC 100%)",
  } = property

  return (
    <div
      className={cn(
        "border border-[var(--color-border)] bg-white overflow-hidden flex flex-col",
        className
      )}
    >
      {/* Image area */}
      <div
        className="h-56 relative shrink-0"
        style={{ background: imageGradient }}
      >
        <div className="absolute top-4 left-4">
          <Overline>{status}</Overline>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="font-mono text-xs text-[var(--color-ink-subtle)]"
            style={{ letterSpacing: "0.08em" }}>
            {ref}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-card flex flex-col flex-1">
        <H3 className="text-[var(--color-ink)] mb-1">{name}</H3>
        <H5 className="text-[var(--color-ink-muted)] font-normal mb-4">{location}</H5>
        <Body className="text-[var(--color-ink-muted)] line-clamp-3 mb-6">{description}</Body>

        {/* Specs */}
        <div className="border-t border-[var(--color-border)] pt-4 mb-6 grid grid-cols-2 gap-3">
          {specs.map(({ label, value }) => (
            <div key={label}>
              <Label className="text-[var(--color-ink-subtle)] block mb-0.5">{label}</Label>
              <BodySmall className="text-[var(--color-ink)] font-medium">{value}</BodySmall>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-4">
          <H5 className="text-[var(--color-ink)]">{price}</H5>
          <Button variant="outline" size="sm">View Property</Button>
        </div>
      </div>
    </div>
  )
}
