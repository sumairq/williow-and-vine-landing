import Image from "next/image"
import { notFound } from "next/navigation"
import {
  H1,
  H2,
  H5,
  Body,
  BodySmall,
  Caption,
  Label,
  Overline,
} from "@/app/components/ui/typography"
import { ListingCard } from "@/app/components/ui/listing-card"
import { RegionCard } from "@/app/components/ui/region-card"
import { REGIONS } from "@/app/data/regions"
import { PROPERTIES } from "@/app/data/properties"

export function generateStaticParams() {
  return REGIONS.map((r) => ({ slug: r.slug }))
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const region = REGIONS.find((r) => r.slug === slug)
  if (!region) notFound()

  const featuredListings = PROPERTIES.filter(
    (p) => p.country === region.country
  ).slice(0, 3)

  const otherRegions = (() => {
    const sameCountry = REGIONS.filter(
      (r) => r.slug !== region.slug && r.country === region.country
    )
    const rest = REGIONS.filter(
      (r) => r.slug !== region.slug && r.country !== region.country
    )
    return [...sameCountry, ...rest].slice(0, 3)
  })()

  return (
    <>
      {/* Hero band */}
      <section className="relative -mt-16 flex items-end bg-[var(--color-paper)]">
        <Image
          src={region.image}
          alt={region.alt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/80" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-container pt-40 pb-16">
          <Overline className="mb-4 block">{region.country}</Overline>
          <H1 className="text-white mb-4">{region.name}</H1>
          <Caption className="text-white/70">
            {region.propertiesCount} properties currently represented
          </Caption>
        </div>
      </section>

      {/* About */}
      <section className="bg-[var(--color-paper)] py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-4">
              <Overline className="block mb-3">About the area</Overline>
              <H2 className="text-[var(--color-ink)]">{region.tagline}</H2>
            </div>
            <div className="md:col-span-7 md:col-start-6 flex flex-col gap-5">
              {region.about.map((paragraph, i) => (
                <Body key={i} className="text-[var(--color-ink-muted)]">
                  {paragraph}
                </Body>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[var(--color-paper-alt)] py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-container">
          <Overline className="block mb-3">What sets it apart</Overline>
          <H2 className="text-[var(--color-ink)] mb-10">
            How we work in {region.name}
          </H2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {region.highlights.map((highlight, i) => (
              <div
                key={highlight}
                className="bg-white border border-[var(--color-border)] p-card flex flex-col gap-4"
              >
                <Label className="text-[var(--color-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </Label>
                <H5 className="text-[var(--color-ink)]">{highlight}</H5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured listings */}
      <section className="bg-[var(--color-paper)] py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-container">

          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Overline className="block mb-3">Available now</Overline>
              <H2 className="text-[var(--color-ink)]">
                Properties in {region.name}
              </H2>
            </div>
            <a
              href="/properties"
              className="font-sans text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors pb-1 border-b border-[var(--color-border)] hover:border-[var(--color-ink)]"
            >
              View all listings →
            </a>
          </div>

          {featuredListings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {featuredListings.map((property) => (
                <ListingCard key={property.name} property={property} />
              ))}
            </div>
          ) : (
            <div className="border border-[var(--color-border)] bg-white p-card flex flex-col gap-3 max-w-xl">
              <BodySmall className="text-[var(--color-ink-muted)]">
                No listings are currently published for {region.name}.
                Off-market stock turns over quietly here — please register your
                interest so we can be in touch when the right property surfaces.
              </BodySmall>
              <a
                href="/contact"
                className="font-sans text-xs font-semibold uppercase tracking-widest text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors self-start pb-1 border-b border-[var(--color-ink)] hover:border-[var(--color-gold)]"
              >
                Register interest
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Discover more */}
      <section className="bg-[var(--color-paper-alt)] py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-container">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Overline className="block mb-3">Continue exploring</Overline>
              <H2 className="text-[var(--color-ink)]">Other destinations</H2>
            </div>
            <a
              href="/locations"
              className="font-sans text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors pb-1 border-b border-[var(--color-border)] hover:border-[var(--color-ink)]"
            >
              All locations →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {otherRegions.map((r) => (
              <RegionCard key={r.slug} region={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
