import { Label, BodySmall, Caption, Overline } from "@/app/components/ui/typography"

const FOOTER_LINKS: Record<string, { label: string; href: string }[]> = {
  Properties: [
    { label: "All Listings",  href: "/properties"            },
    { label: "For Sale",      href: "/properties/sale"       },
    { label: "Off Market",    href: "/properties/off-market" },
    { label: "New Homes",     href: "/properties/new-homes"  },
  ],
  Company: [
    { label: "About Us",  href: "/about"        },
    { label: "Our Team",  href: "/about/team"   },
    { label: "Careers",   href: "/careers"      },
    { label: "Press",     href: "/press"        },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy"    },
    { label: "Terms of Use",   href: "/terms"      },
    { label: "Cookie Policy",  href: "/cookies"    },
    { label: "Complaints",     href: "/complaints" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-paper-alt)]">
      <div className="max-w-7xl mx-auto px-4 md:px-container py-16">

        {/* Top: brand + link columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-4 border border-[var(--color-gold)] rotate-45 shrink-0" />
              <Label className="text-[var(--color-ink)] tracking-[0.2em]">Meridian</Label>
            </div>
            <BodySmall className="text-[var(--color-ink-muted)] mb-4 leading-relaxed">
              Exceptional properties for discerning buyers. Specialists in prime
              residential and country estates.
            </BodySmall>
            <Overline>Est. 1987</Overline>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <Label className="text-[var(--color-ink)] block mb-5">{title}</Label>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} className="group inline-block">
                      <BodySmall className="text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)] transition-colors">
                        {label}
                      </BodySmall>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <Caption>© 2026 Meridian Estates Ltd. All rights reserved.</Caption>
          <Caption>Member of The Property Ombudsman · RICS Regulated</Caption>
        </div>
      </div>
    </footer>
  )
}
