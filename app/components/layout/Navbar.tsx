"use client"

import { useState } from "react"
import { Label } from "@/app/components/ui/typography"
import { Button } from "@/app/components/ui/button"

const NAV_LINKS = [
  { label: "Properties", href: "/properties" },
  { label: "Locations",  href: "/locations"  },
  { label: "About",      href: "/about"      },
  { label: "Contact",    href: "/contact"    },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-paper)]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-container h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-4 h-4 border border-[var(--color-gold)] rotate-45" />
          <Label className="text-[var(--color-ink)] text-sm tracking-[0.2em]">Meridian</Label>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="outline" size="sm">Request Viewing</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className="block h-px w-6 bg-[var(--color-ink)] transition-transform origin-center"
            style={open ? { transform: "translateY(4px) rotate(45deg)" } : undefined}
          />
          <span
            className="block h-px w-6 bg-[var(--color-ink)] transition-transform origin-center"
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
          <Button variant="primary" size="md" className="w-full justify-center">
            Request Viewing
          </Button>
        </div>
      )}
    </header>
  )
}
