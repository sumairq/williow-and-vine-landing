"use client"

import { useState, useEffect } from "react"
import { Label } from "@/app/components/ui/typography"

const NAV_LINKS = [
  { label: "Properties", href: "/properties" },
  { label: "Locations",  href: "/locations"  },
  { label: "About",      href: "/about"      },
  { label: "Contact",    href: "/contact"    },
]

export function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    handler()
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const transparent = !scrolled && !open

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-[var(--color-paper)]/95 backdrop-blur-sm border-b border-[var(--color-border)]",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-container h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-4 h-4 border border-[var(--color-gold)] rotate-45" />
          <Label
            className={[
              "text-sm tracking-[0.2em] transition-colors",
              transparent ? "text-white" : "text-[var(--color-ink)]",
            ].join(" ")}
          >
            Meridian
          </Label>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={[
                "font-sans text-sm transition-colors",
                transparent
                  ? "text-white/80 hover:text-white"
                  : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]",
              ].join(" ")}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className={[
            "hidden md:inline-block font-sans text-xs font-semibold uppercase tracking-widest px-4 py-2 border transition-colors",
            transparent
              ? "border-white/60 text-white hover:border-white hover:bg-white/10"
              : "border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]",
          ].join(" ")}
        >
          Book a Viewing
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={[
              "block h-px w-6 transition-all origin-center",
              transparent ? "bg-white" : "bg-[var(--color-ink)]",
            ].join(" ")}
            style={open ? { transform: "translateY(4px) rotate(45deg)" } : undefined}
          />
          <span
            className={[
              "block h-px w-6 transition-all origin-center",
              transparent ? "bg-white" : "bg-[var(--color-ink)]",
            ].join(" ")}
            style={open ? { transform: "translateY(-4px) rotate(-45deg)" } : undefined}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-paper)] px-4 py-6">
          <nav className="flex flex-col gap-1 mb-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-sans text-base text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors py-3 border-b border-[var(--color-border)] last:border-0"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="/contact"
            className="block w-full text-center font-sans text-sm font-semibold uppercase tracking-widest px-6 py-3 bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[#2E2D2A] transition-colors"
            onClick={() => setOpen(false)}
          >
            Book a Viewing
          </a>
        </div>
      )}
    </header>
  )
}
