"use client"

import Image from "next/image"
import {
  H1,
  H3,
  Body,
  BodySmall,
  Label,
  Overline,
} from "@/app/components/ui/typography"

const COUNTRIES = [
  "United Kingdom",
  "France",
  "Spain",
  "Italy",
  "Monaco",
  "Switzerland",
  "Portugal",
  "United States",
  "United Arab Emirates",
  "Other",
] as const

const INQUIRY_TYPES = ["General", "Book Property Tour", "Sell House", "Rent"] as const

const fieldClass =
  "w-full bg-white border border-[var(--color-border)] px-4 py-3 font-sans text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-subtle)] outline-none focus:border-[var(--color-ink)] transition-colors"

export default function ContactPage() {
  return (
    <section className="relative -mt-16 min-h-screen bg-[var(--color-ink)]">
      <Image
        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1920&q=80"
        alt="Editorial interior, soft daylight"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-container pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-x-16 items-start">

          {/* Heading column */}
          <div className="lg:col-span-5 lg:pt-6">
            <Overline className="text-white/70 mb-5 block">Contact</Overline>
            <H1 className="text-white text-balance mb-6">
              You Have Questions, We Have Answers
            </H1>
            <Body className="text-white/65">
              A member of our team will be in touch within one working day,
              discreetly and without obligation.
            </Body>
          </div>

          {/* Form column */}
          <div className="lg:col-span-6 lg:col-start-7">
            <form
              className="bg-white border border-[var(--color-border)] p-6 md:p-10 flex flex-col gap-7"
              onSubmit={(e) => e.preventDefault()}
            >
              <H3 className="text-[var(--color-ink)]">Tell Us What You Need</H3>

              {/* First / Last name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="First Name" name="firstName" />
                <Field label="Last Name" name="lastName" />
              </div>

              {/* Country / Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label className="text-[var(--color-ink)]">Country</Label>
                  <select className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      Select country
                    </option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+44 20 7000 0000"
                />
              </div>

              {/* Email */}
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="name@example.com"
              />

              {/* Type of inquiry pills */}
              <div className="flex flex-col gap-3">
                <Label className="text-[var(--color-ink)]">
                  Type of Inquiry
                </Label>
                <div className="flex flex-wrap gap-2.5">
                  {INQUIRY_TYPES.map((type, i) => (
                    <label
                      key={type}
                      className="cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="inquiry"
                        value={type}
                        defaultChecked={i === 0}
                        className="peer sr-only"
                      />
                      <span
                        className="
                          inline-block px-5 py-2.5 rounded-full
                          font-sans text-xs font-semibold uppercase tracking-widest
                          border border-[var(--color-border)] text-[var(--color-ink-muted)]
                          transition-colors duration-200
                          not-peer-checked:hover:border-[var(--color-ink-subtle)] not-peer-checked:hover:text-[var(--color-ink)]
                          peer-checked:bg-[var(--color-ink)] peer-checked:text-[var(--color-paper)] peer-checked:border-[var(--color-ink)]
                          peer-checked:hover:bg-[var(--color-gold)] peer-checked:hover:border-[var(--color-gold)]
                          peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-gold)]
                        "
                      >
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <Label className="text-[var(--color-ink)]">Message</Label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about what you're looking for…"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              {/* Footer: opt-in + submit */}
              <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-6 pt-3 border-t border-[var(--color-border)]">
                <label className="flex items-start gap-3 cursor-pointer sm:flex-1 sm:min-w-0">
                  <input
                    type="checkbox"
                    name="optIn"
                    className="mt-1 h-4 w-4 accent-[var(--color-gold)] cursor-pointer shrink-0"
                  />
                  <BodySmall className="text-[var(--color-ink-muted)]">
                    I&apos;d like to receive exclusive offers and updates.
                  </BodySmall>
                </label>
                <button
                  type="submit"
                  className="
                    shrink-0 self-start sm:self-auto
                    font-sans text-xs font-semibold uppercase tracking-widest
                    px-8 py-4 bg-[var(--color-ink)] text-[var(--color-paper)]
                    hover:bg-[var(--color-gold)] transition-colors duration-300
                    cursor-pointer
                  "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-[var(--color-ink)]">{label}</Label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={fieldClass}
      />
    </div>
  )
}
