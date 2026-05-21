"use client"

import { useState } from "react"
import Image from "next/image"
import { H1, Body, Overline, Caption } from "@/app/components/ui/typography"
import { Button } from "@/app/components/ui/button"

type SearchMode = "sale" | "rent"

function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 text-[var(--color-ink-subtle)]"
      aria-hidden
    >
      <path
        d="M8 1.5A4.5 4.5 0 0 0 3.5 6c0 3 4.5 8.5 4.5 8.5S12.5 9 12.5 6A4.5 4.5 0 0 0 8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function HeroSection() {
  const [mode, setMode] = useState<SearchMode>("sale")

  return (
    <section className="relative min-h-screen -mt-16 flex items-center justify-center">

      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
        alt="Luxury residential property"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-container text-center py-32">

        <Overline className="mb-6 block">
          Exclusive Residential Properties
        </Overline>

        <H1 className="text-white mb-5">
          Find Your Exceptional Home
        </H1>

        <Body className="text-white/70 mb-10 mx-auto">
          Prime residential and country estate specialists across London
          and the Home Counties, trusted since 1987.
        </Body>

        {/* Search panel */}
        <div className="bg-white w-full mx-auto shadow-2xl">

          {/* Mode toggle */}
          <div className="flex">
            {(["sale", "rent"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={[
                  "flex-1 py-3 font-sans text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer",
                  mode === m
                    ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
                    : "bg-white text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]",
                ].join(" ")}
              >
                {m === "sale" ? "For Sale" : "To Rent"}
              </button>
            ))}
          </div>

          {/* Input row */}
          <form
            className="flex items-stretch border-t border-[var(--color-border)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center gap-3 flex-1 px-5 py-4 min-w-0">
              <PinIcon />
              <input
                type="text"
                placeholder="Location, postcode or property name…"
                className="flex-1 min-w-0 font-sans text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-subtle)] outline-none bg-transparent"
              />
            </div>
            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="shrink-0 rounded-none"
            >
              Search
            </Button>
          </form>
        </div>

        {/* Trust bar */}
        <div className="mt-8 flex items-center justify-center gap-5 flex-wrap">
          {["2,400+ Properties", "35 Years Experience", "RICS Regulated"].map((stat, i, arr) => (
            <span key={stat} className="flex items-center gap-5">
              <Caption className="text-white/60">{stat}</Caption>
              {i < arr.length - 1 && (
                <span className="text-white/25 text-xs select-none">|</span>
              )}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
