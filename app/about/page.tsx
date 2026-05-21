import Image from "next/image"
import {
  Display,
  H1,
  H2,
  H5,
  Body,
  BodySmall,
  Caption,
  Label,
  Overline,
} from "@/app/components/ui/typography"
import {
  METRICS,
  LEADERSHIP,
  VALUES,
  PORTFOLIO_TOTAL,
} from "@/app/data/about"
import { PortfolioDonut } from "./_components/PortfolioDonut"

export default function AboutPage() {
  return (
    <>
      {/* Hero band */}
      <section className="relative -mt-16 flex items-end bg-[var(--color-paper)]">
        <Image
          src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1920&q=80"
          alt="Editorial interior of a London residence"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/80" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-container pt-40 pb-16">
          <div className="max-w-2xl">
            <Overline className="mb-4 block">About Us</Overline>
            <H1 className="text-white">Established 1987</H1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[var(--color-paper)] py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-4">
              <Overline className="block mb-3">Our story</Overline>
              <H2 className="text-[var(--color-ink)]">
                Three principles, kept for nearly four decades.
              </H2>
            </div>
            <div className="md:col-span-7 md:col-start-6 flex flex-col gap-5">
              <Body className="text-[var(--color-ink-muted)]">
                Meridian Estates was founded above a stationers on South Audley
                Street in Mayfair in 1987, with a single listing: a
                Grade-II terrace owned by a family who wanted the sale handled
                privately. Almost four decades on, our practice has grown to
                twelve destinations across Britain and the Mediterranean, but
                the brief has not changed.
              </Body>
              <Body className="text-[var(--color-ink-muted)]">
                We act exclusively for private clients. We hold our own
                listings, employ our own counsel in every jurisdiction we
                operate in, and we do not advertise the majority of what we
                sell. Long-standing relationships, kept across two and three
                generations of clients, remain the engine of the firm.
              </Body>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[var(--color-paper-alt)] py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-container">
          <div className="mb-10">
            <Overline className="block mb-3">By the numbers</Overline>
            <H2 className="text-[var(--color-ink)]">Our track record</H2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="bg-white border border-[var(--color-border)] p-card flex flex-col gap-3"
              >
                <Display className="text-[var(--color-ink)] text-6xl md:text-7xl">
                  {metric.value}
                </Display>
                <Label className="text-[var(--color-ink)]">
                  {metric.label}
                </Label>
                {metric.caption && (
                  <Caption className="text-[var(--color-ink-muted)]">
                    {metric.caption}
                  </Caption>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio donut */}
      <section className="bg-[var(--color-paper)] py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-container">
          <div className="mb-10">
            <Overline className="block mb-3">Portfolio composition</Overline>
            <H2 className="text-[var(--color-ink)] text-balance">
              Portfolio by country
            </H2>
          </div>

          <div className="bg-white border border-[var(--color-border)] p-card md:p-10">
            <PortfolioDonut />
            <Caption className="block mt-8 text-[var(--color-ink-subtle)]">
              Snapshot of {PORTFOLIO_TOTAL} active listings across the
              practice, May 2026.
            </Caption>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[var(--color-paper-alt)] py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-container">
          <div className="mb-10">
            <Overline className="block mb-3">Leadership</Overline>
            <H2 className="text-[var(--color-ink)]">Our leadership</H2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {LEADERSHIP.map((leader) => (
              <article
                key={leader.name}
                className="bg-white border border-[var(--color-border)] flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-paper-alt)]">
                  <Image
                    src={leader.image}
                    alt={leader.alt}
                    fill
                    className="object-cover object-top grayscale"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-card flex flex-col gap-2">
                  <H5 className="text-[var(--color-ink)]">{leader.name}</H5>
                  <Overline>{leader.role}</Overline>
                  <BodySmall className="text-[var(--color-ink-muted)] mt-2">
                    {leader.bio}
                  </BodySmall>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-paper)] py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-container">
          <div className="mb-10">
            <Overline className="block mb-3">How we work</Overline>
            <H2 className="text-[var(--color-ink)] text-balance">
              What we stand for
            </H2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className="flex flex-col gap-4 border-t border-[var(--color-border)] pt-6"
              >
                <Label className="text-[var(--color-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </Label>
                <H5 className="text-[var(--color-ink)]">{value.title}</H5>
                <BodySmall className="text-[var(--color-ink-muted)]">
                  {value.body}
                </BodySmall>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
