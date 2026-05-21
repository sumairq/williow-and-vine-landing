export type Metric = {
  value: string
  label: string
  caption?: string
}

export type PortfolioSlice = {
  country: string
  count: number
}

export type Leader = {
  name: string
  role: string
  bio: string
  image: string
  alt: string
}

export type Value = {
  title: string
  body: string
}

export const METRICS: Metric[] = [
  {
    value: "£2.4bn",
    label: "Transacted",
    caption: "Combined value of sales since 2010",
  },
  {
    value: "38",
    label: "Years",
    caption: "Founded in London, 1987",
  },
  {
    value: "12",
    label: "Destinations",
    caption: "Across Britain and the Mediterranean",
  },
  {
    value: "1,200+",
    label: "Listings",
    caption: "Completed for private clients",
  },
]

export const PORTFOLIO_BY_COUNTRY: PortfolioSlice[] = [
  { country: "England", count: 140 },
  { country: "France", count: 73 },
  { country: "Spain", count: 57 },
  { country: "Italy", count: 42 },
  { country: "Monaco", count: 18 },
]

export const PORTFOLIO_TOTAL = PORTFOLIO_BY_COUNTRY.reduce(
  (sum, slice) => sum + slice.count,
  0
)

export const LEADERSHIP: Leader[] = [
  {
    name: "Henry Ashworth",
    role: "Founder & Chairman",
    bio: "Founded the firm in Mayfair in 1987 after a decade at Knight Frank's country house department.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    alt: "Portrait of Henry Ashworth",
  },
  {
    name: "Isabella Vance",
    role: "Managing Partner",
    bio: "Leads day-to-day operations across the London office; previously partner at a boutique private-client firm.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    alt: "Portrait of Isabella Vance",
  },
  {
    name: "Charles Whitfield",
    role: "Head of International",
    bio: "Oversees the Mediterranean desks from Cannes; thirty years of cross-border transactions in southern Europe.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    alt: "Portrait of Charles Whitfield",
  },
  {
    name: "Eleanor Bridgewater",
    role: "Head of Country Estates",
    bio: "Specialist in Cotswolds, Home Counties and Scottish sporting estates; trained as a chartered surveyor at RICS.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    alt: "Portrait of Eleanor Bridgewater",
  },
]

export const VALUES: Value[] = [
  {
    title: "Discretion",
    body: "A majority of our listings never reach the open market. We work for clients who expect their interests, and ours, to remain private.",
  },
  {
    title: "Local counsel",
    body: "Every destination has a dedicated desk with French, Italian or Spanish-qualified counsel on call — not a referral chain across firms.",
  },
  {
    title: "Long-standing relationships",
    body: "Sixty-three percent of our listings in the last five years came from previous clients or their direct referrals.",
  },
]
