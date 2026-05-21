import { Label, BodySmall } from "@/app/components/ui/typography"

const COUNTRIES = ["Spain", "England", "France", "Italy", "Monaco"] as const
const PROPERTY_TYPES = ["Villa", "Apartment", "Townhouse", "Estate", "Penthouse"] as const
const LISTING_STATUSES = [
  "For Sale",
  "To Rent",
  "Off Market",
  "New Listing",
  "Under Offer",
] as const

const fieldClass =
  "w-full bg-white border border-[var(--color-border)] px-4 py-3 font-sans text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-subtle)] outline-none focus:border-[var(--color-ink)] transition-colors"

function CheckboxGroup({
  legend,
  options,
  name,
}: {
  legend: string
  options: readonly string[]
  name: string
}) {
  return (
    <fieldset>
      <legend className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-ink-muted)] mb-3">
        {legend}
      </legend>
      <div className="flex flex-col gap-2.5">
        {options.map((opt) => (
          <label
            key={opt}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              name={name}
              value={opt}
              className="h-4 w-4 accent-[var(--color-gold)] cursor-pointer"
            />
            <BodySmall className="text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)] transition-colors">
              {opt}
            </BodySmall>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export function FiltersSidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-8">

      {/* Location */}
      <div>
        <Label className="text-[var(--color-ink)] block mb-4">Location</Label>
        <div className="flex flex-col gap-3">
          <select className={fieldClass} defaultValue="">
            <option value="">All countries</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search by city…"
            className={fieldClass}
          />
        </div>
      </div>

      {/* Listing */}
      <div className="border-t border-[var(--color-border)] pt-8 flex flex-col gap-6">
        <Label className="text-[var(--color-ink)] block">Listing</Label>
        <CheckboxGroup
          legend="Property Type"
          options={PROPERTY_TYPES}
          name="type"
        />
        <CheckboxGroup
          legend="Listing Status"
          options={LISTING_STATUSES}
          name="status"
        />
      </div>

      {/* Reset */}
      <div className="border-t border-[var(--color-border)] pt-6">
        <button
          type="reset"
          className="font-sans text-xs font-semibold uppercase tracking-widest text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors cursor-pointer"
        >
          Reset filters
        </button>
      </div>

    </aside>
  )
}
