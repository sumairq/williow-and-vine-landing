"use client"

import { useState } from "react"
import Image from "next/image"
import { H2, H4, Overline, BodySmall, Caption } from "@/app/components/ui/typography"

const PORTRAIT = "/images/943fdb66-b5b4-49ff-876e-954fc9d03745.png"

type Testimonial = {
  quote: string
  name: string
  title: string
  location: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Meridian handled our search with an exceptional level of discretion and professionalism. Within six weeks they had found us a property that simply wasn't on the market — exactly what we had been looking for.",
    name: "Sophie Whitmore",
    title: "Private Client",
    location: "Mayfair, London",
  },
  {
    quote:
      "After three years of searching with other agents, Meridian found us our Cotswolds estate in under two months. Their knowledge of off-market stock is genuinely unmatched in the industry.",
    name: "Edward Bancroft",
    title: "Director, Bancroft Capital",
    location: "Burford, Oxfordshire",
  },
  {
    quote:
      "The team guided us through every step of purchasing our first country home — from viewing to exchange — with patience and real expertise. We would not hesitate to recommend Meridian to anyone.",
    name: "Charlotte & James Forsythe",
    title: "Private Clients",
    location: "Virginia Water, Surrey",
  },
  {
    quote:
      "I have worked with Meridian on several acquisitions over the past decade. Their off-market access and deep understanding of what constitutes true value at the top end of the market is second to none.",
    name: "Alexander Kwan",
    title: "Property Investor",
    location: "Hong Kong & London",
  },
  {
    quote:
      "Selling a Grade I listed house requires an agent who truly understands the buyer pool. Meridian achieved a price well above our expectations and managed the entire process with absolute care.",
    name: "Isabella Norwood",
    title: "Private Client",
    location: "Henley-on-Thames, Oxfordshire",
  },
]

function QuoteIcon() {
  return (
    <svg
      width="36"
      height="28"
      viewBox="0 0 36 28"
      fill="none"
      aria-hidden
      className="text-[var(--color-gold)] mb-5 shrink-0"
    >
      <path
        d="M0 28V17.2C0 12.667 1.067 8.8 3.2 5.6 5.333 2.4 8.533 0.533 12.8 0l1.6 2.8C11.467 3.6 9.2 5.067 7.6 7.2 6 9.333 5.2 11.733 5.2 14.4H12V28H0Zm20 0V17.2c0-4.533 1.067-8.4 3.2-11.6C25.333 2.4 28.533.533 32.8 0l1.6 2.8c-2.933.8-5.2 2.267-6.8 4.4C26 9.333 25.2 11.733 25.2 14.4H32V28H20Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  function goTo(index: number) {
    if (index === current) return
    setFading(true)
    setTimeout(() => {
      setCurrent(index)
      setFading(false)
    }, 180)
  }

  function prev() {
    goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  function next() {
    goTo((current + 1) % TESTIMONIALS.length)
  }

  const t = TESTIMONIALS[current]

  return (
    <section className="bg-[var(--color-paper-alt)] py-section">
      <div className="max-w-7xl mx-auto px-4 md:px-container">

        {/* Header */}
        <div className="text-center mb-12">
          <Overline className="mb-3 block">Testimonials</Overline>
          <H2 className="text-[var(--color-ink)]">What People Say About Us</H2>
        </div>

        {/* Card */}
        <div
          className="border border-[var(--color-border)] bg-white overflow-hidden transition-opacity duration-200"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <div className="flex flex-col md:flex-row">

            {/* Image panel */}
            <div className="relative w-full md:w-72 shrink-0 bg-[var(--color-paper-alt)] flex items-end justify-center min-h-[280px] md:min-h-0 overflow-hidden">
              <Image
                src={PORTRAIT}
                alt={t.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>

            {/* Quote panel */}
            <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-12 flex-1">
              <QuoteIcon />
              <p className="font-display text-xl md:text-2xl text-[var(--color-ink)] leading-relaxed italic mb-8">
                "{t.quote}"
              </p>
              <div>
                <H4 className="text-[var(--color-ink)] mb-0.5">{t.name}</H4>
                <BodySmall className="text-[var(--color-ink-muted)]">{t.title}</BodySmall>
                <Caption className="block mt-1 tracking-widest uppercase text-[10px]">{t.location}</Caption>
              </div>
            </div>

          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">

          {/* Dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="cursor-pointer transition-all duration-300"
              >
                <span
                  className="block h-px transition-all duration-300"
                  style={{
                    width: i === current ? "2rem" : "0.75rem",
                    backgroundColor: i === current
                      ? "var(--color-ink)"
                      : "var(--color-border)",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 flex items-center justify-center border border-[var(--color-border)] text-[var(--color-ink-muted)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)] transition-colors cursor-pointer"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 flex items-center justify-center border border-[var(--color-border)] text-[var(--color-ink-muted)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)] transition-colors cursor-pointer"
            >
              <ChevronRight />
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}
