import {
  Display,
  H1, H2, H3, H4, H5, H6,
  BodyLarge, Body, BodySmall,
  Caption, Label, Overline,
} from "@/app/components/ui/typography"

function Divider() {
  return (
    <div className="flex items-center gap-4 my-2">
      <div className="h-px flex-1 bg-[var(--color-border)]" />
      <div className="w-1 h-1 rounded-full bg-[var(--color-gold)]" />
      <div className="h-px flex-1 bg-[var(--color-border)]" />
    </div>
  )
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-8">
      <span className="font-mono text-xs text-[var(--color-gold)] tabular-nums">{index}</span>
      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-subtle)]">
        {title}
      </span>
      <div className="h-px flex-1 bg-[var(--color-border)]" />
    </div>
  )
}

export default function TypographyShowcase() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)]">

      {/* ── Header ── */}
      <header className="border-b border-[var(--color-border)] px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border border-[var(--color-gold)] rotate-45" />
          <Label className="text-[var(--color-ink)]">Meridian</Label>
        </div>
        <Caption>Typography System · v1.0</Caption>
      </header>

      <main className="max-w-4xl mx-auto px-12 py-20 space-y-20">

        {/* ── Display Hero ── */}
        <section className="relative">
          <Overline className="mb-5 block">Design System</Overline>
          <Display className="text-[var(--color-ink)]">
            Type&shy;graphy
          </Display>
          <div className="mt-6 flex items-center gap-6">
            <div className="h-px w-16 bg-[var(--color-gold)]" />
            <BodyLarge className="text-[var(--color-ink-muted)] max-w-sm">
              A refined type scale for luxury real estate. Every weight, every
              size, placed with intention.
            </BodyLarge>
          </div>
        </section>

        <Divider />

        {/* ── Headings ── */}
        <section>
          <SectionHeader index="01" title="Headings" />

          <div className="space-y-8">
            <div className="group">
              <div className="flex items-baseline gap-4 mb-1">
                <Caption>H1 · text-5xl · font-bold</Caption>
              </div>
              <H1 className="text-[var(--color-ink)]">
                Extraordinary Residences
              </H1>
            </div>

            <div className="h-px bg-[var(--color-border)]" />

            <div>
              <Caption className="block mb-1">H2 · text-4xl · font-semibold</Caption>
              <H2 className="text-[var(--color-ink)]">
                Where Architecture Meets Artistry
              </H2>
            </div>

            <div className="h-px bg-[var(--color-border)]" />

            <div>
              <Caption className="block mb-1">H3 · text-3xl · font-semibold</Caption>
              <H3 className="text-[var(--color-ink)]">
                Curated Properties in Coveted Locations
              </H3>
            </div>

            <div className="h-px bg-[var(--color-border)]" />

            <div>
              <Caption className="block mb-1">H4 · text-2xl · font-semibold</Caption>
              <H4 className="text-[var(--color-ink)]">
                Private &amp; Exclusive Collection
              </H4>
            </div>

            <div className="h-px bg-[var(--color-border)]" />

            <div>
              <Caption className="block mb-1">H5 · text-xl · font-medium</Caption>
              <H5 className="text-[var(--color-ink)]">
                Featured Estate Properties
              </H5>
            </div>

            <div className="h-px bg-[var(--color-border)]" />

            <div>
              <Caption className="block mb-1">H6 · text-lg · font-medium</Caption>
              <H6 className="text-[var(--color-ink)]">
                Premium Listing Category
              </H6>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Body Text ── */}
        <section>
          <SectionHeader index="02" title="Body Text" />

          <div className="space-y-10">
            <div>
              <Caption className="block mb-3">Body Large · text-lg · leading-relaxed</Caption>
              <BodyLarge className="text-[var(--color-ink)] max-w-2xl">
                Nestled within a private enclave of rolling hills, this singular
                estate commands sweeping panoramic views across protected
                conservation land. Designed by a Pritzker Prize laureate, every
                detail reflects an unwavering pursuit of perfection — from the
                hand-laid travertine terraces to the museum-calibre gallery wing.
              </BodyLarge>
            </div>

            <div className="h-px bg-[var(--color-border)]" />

            <div>
              <Caption className="block mb-3">Body · text-base · leading-relaxed</Caption>
              <Body className="text-[var(--color-ink-muted)] max-w-2xl">
                The interiors flow seamlessly from formal reception rooms to intimate
                family spaces, each volume calibrated for both grand entertaining and
                quiet contemplation. Rare stone, bespoke joinery, and curated
                hardware selections distinguish every room. The kitchen and scullery
                are equipped to a professional standard, with direct access to a
                landscaped kitchen garden.
              </Body>
            </div>

            <div className="h-px bg-[var(--color-border)]" />

            <div>
              <Caption className="block mb-3">Body Small · text-sm · leading-relaxed</Caption>
              <BodySmall className="text-[var(--color-ink-subtle)] max-w-2xl">
                Total gross internal area 11,400 sq ft across three floors.
                Grounds extend to 42 acres, including formal gardens, a lake, and
                an equestrian facility. Subject to planning permission for a further
                3,200 sq ft annexe. Freehold. Available by private appointment only.
              </BodySmall>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Utility ── */}
        <section>
          <SectionHeader index="03" title="Labels & Utility" />

          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-2 p-6 bg-[var(--color-paper-alt)] border border-[var(--color-border)]">
              <Caption className="block mb-3">Overline</Caption>
              <Overline>Exclusive Listing</Overline>
              <div className="h-px bg-[var(--color-border)] my-3" />
              <Overline>Prime Location</Overline>
              <div className="h-px bg-[var(--color-border)] my-3" />
              <Overline>Off Market</Overline>
            </div>

            <div className="space-y-2 p-6 bg-[var(--color-paper-alt)] border border-[var(--color-border)]">
              <Caption className="block mb-3">Label</Caption>
              <Label className="text-[var(--color-ink)] block">Property Type</Label>
              <div className="h-px bg-[var(--color-border)] my-3" />
              <Label className="text-[var(--color-ink)] block">Bedrooms</Label>
              <div className="h-px bg-[var(--color-border)] my-3" />
              <Label className="text-[var(--color-ink)] block">Guide Price</Label>
            </div>

            <div className="space-y-2 p-6 bg-[var(--color-paper-alt)] border border-[var(--color-border)]">
              <Caption className="block mb-3">Caption</Caption>
              <Caption className="block">All figures are approximate</Caption>
              <div className="h-px bg-[var(--color-border)] my-3" />
              <Caption className="block">Subject to contract</Caption>
              <div className="h-px bg-[var(--color-border)] my-3" />
              <Caption className="block">© 2026 Meridian Estates</Caption>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── In-Context Card ── */}
        <section>
          <SectionHeader index="04" title="In Context" />

          <div className="border border-[var(--color-border)] bg-white overflow-hidden">
            {/* Image placeholder */}
            <div
              className="h-56 w-full relative"
              style={{
                background: "linear-gradient(135deg, #E8E4DF 0%, #D4C9BC 50%, #C4B9AC 100%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Display className="text-[#B0A090]/30 text-[10rem] leading-none select-none">
                  M
                </Display>
              </div>
              <div className="absolute top-5 left-5">
                <Overline>Off Market · Private Sale</Overline>
              </div>
              <div className="absolute bottom-5 right-5">
                <span
                  className="font-mono text-xs text-[var(--color-ink-subtle)]"
                  style={{ letterSpacing: "0.08em" }}
                >
                  REF 2026-0041
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <H3 className="text-[var(--color-ink)] mb-2">
                    Harrington House
                  </H3>
                  <H5 className="text-[var(--color-ink-muted)] font-normal mb-5">
                    Chiltern Hills, Buckinghamshire
                  </H5>
                  <Body className="text-[var(--color-ink-muted)] max-w-lg">
                    An exceptional Grade I listed manor house of unparalleled provenance,
                    set within 42 acres of formal gardens and parkland. Six principal
                    bedroom suites, a ballroom, and a private lake.
                  </Body>
                </div>

                <div className="text-right shrink-0">
                  <BodySmall className="text-[var(--color-ink-subtle)] mb-1">Guide Price</BodySmall>
                  <H4 className="text-[var(--color-ink)]">£18.5M</H4>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--color-border)] grid grid-cols-4 gap-6">
                {[
                  { label: "Type", value: "Manor House" },
                  { label: "Bedrooms", value: "6 Principal" },
                  { label: "Reception", value: "4 Rooms" },
                  { label: "Grounds", value: "42 Acres" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <Label className="text-[var(--color-ink-subtle)] block mb-1">
                      {label}
                    </Label>
                    <BodySmall className="text-[var(--color-ink)] font-medium">
                      {value}
                    </BodySmall>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Caption>
                  Viewing strictly by appointment. All measurements are approximate.
                  Details provided are for guidance only and do not form part of any
                  contract. Meridian Estates Ltd is a member of The Property Ombudsman.
                </Caption>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[var(--color-border)] px-12 py-6 flex items-center justify-between mt-20">
        <Caption>Meridian Estates · Typography System · 2026</Caption>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border border-[var(--color-gold)] rotate-45" />
        </div>
      </footer>

    </div>
  )
}
