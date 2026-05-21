import type { PropertyCountry } from "./properties"

export type Region = {
  slug: string
  name: string
  country: PropertyCountry
  image: string
  alt: string
  propertiesCount: number
  tagline: string
  about: [string, string]
  highlights: string[]
}

export const REGIONS: Region[] = [
  {
    slug: "marbella",
    name: "Marbella",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury villa with pool in Marbella",
    propertiesCount: 38,
    tagline: "Andalusian gold coast — villas above the Golden Mile.",
    about: [
      "Marbella has been a fixture of the Andalusian coast for half a century, and the Golden Mile and La Zagaleta remain the benchmarks against which Mediterranean prime is measured.",
      "Our office handles new-build contemporary villas, restored cortijos in the foothills, and a small portfolio of seafront apartments in Puerto Banús.",
    ],
    highlights: [
      "Forty-minute transfer from Málaga International",
      "Year-round sailing from Puerto Banús",
      "Tax residency advice in-house",
    ],
  },
  {
    slug: "mayfair",
    name: "Mayfair",
    country: "England",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    alt: "Georgian townhouses in Mayfair London",
    propertiesCount: 61,
    tagline: "Discreet stucco-fronted townhouses in the heart of W1.",
    about: [
      "Mayfair remains the most consistently demanded W1 postcode for international buyers — a square mile of Grade-II terraces, members' clubs and discreet mews tucked behind Park Lane.",
      "We act for buyers across freehold townhouses, lateral conversions on Mount Street and Grosvenor Square, and a steady flow of off-market opportunities through long-standing relationships with the estates.",
    ],
    highlights: [
      "Direct access to the Grosvenor and Crown estates",
      "Twenty-four-hour porterage on the majority of mansion blocks",
      "Five minutes to Hyde Park, ten to Bond Street",
    ],
  },
  {
    slug: "cote-dazur",
    name: "Côte d'Azur",
    country: "France",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80",
    alt: "Coastal view of the French Riviera",
    propertiesCount: 24,
    tagline: "Belle-époque villas between Cannes and Cap Ferrat.",
    about: [
      "The stretch from Cannes east to the Italian border is still the deepest market for prime waterfront in continental Europe — belle-époque villas on Cap d'Antibes, contemporary builds above Èze, and a handful of palace-quarter apartments in Cannes.",
      "We work closely with French notaires and tax counsel to make cross-border transactions straightforward for British and Middle-Eastern clients.",
    ],
    highlights: [
      "Helicopter transfer from Nice to Monaco in seven minutes",
      "Bilingual French-qualified solicitor on the team",
      "Discreet representation at the Cannes property fair",
    ],
  },
  {
    slug: "tuscany",
    name: "Tuscany",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1200&q=80",
    alt: "Rolling hills and vineyards of Tuscany",
    propertiesCount: 17,
    tagline: "Vineyards, restored borghi and Renaissance palazzi.",
    about: [
      "Our Tuscan listings concentrate on the Chianti Classico belt between Florence and Siena, the Val d'Orcia, and a small selection of restored palazzi inside the walls of Florence and Lucca.",
      "Buyers typically come for working vineyards, multi-house borghi suitable for hospitality, or principal residences with significant land — and we maintain relationships with restoration architects across the region.",
    ],
    highlights: [
      "Working-vineyard expertise with three in-house oenologists",
      "Florence airport one hour from most properties",
      "Heritage restoration grants assessed at viewing",
    ],
  },
  {
    slug: "monte-carlo",
    name: "Monte Carlo",
    country: "Monaco",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
    alt: "Monaco harbour and skyline",
    propertiesCount: 12,
    tagline: "Carré d'Or apartments and harbour-facing penthouses.",
    about: [
      "Monaco's principal market is the Carré d'Or — the five streets behind the Casino — together with the harbour-front Larvotto and the new One Monte-Carlo lateral apartments.",
      "We act for residence-card applicants on long lets as well as outright purchase, and coordinate with the Monégasque banks on lombard structures where appropriate.",
    ],
    highlights: [
      "Residence card support through the Direction de la Sûreté Publique",
      "Two-minute walk to the Casino and Café de Paris",
      "Yacht-berth assistance for Port Hercules and Cap d'Ail",
    ],
  },
  {
    slug: "the-cotswolds",
    name: "The Cotswolds",
    country: "England",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    alt: "Quintessential Cotswolds village",
    propertiesCount: 45,
    tagline: "Honey-stone manors across north Oxfordshire and Gloucestershire.",
    about: [
      "The Cotswolds remain the most consistently sought-after country market within ninety minutes of central London, anchored by Daylesford, Chipping Norton and the Soho Farmhouse triangle.",
      "Our listings span listed manors, small country estates with arable land, and contemporary new-builds in honey-stone produced by a handful of trusted developers.",
    ],
    highlights: [
      "Eighty minutes by car from Notting Hill",
      "Sporting rights and shoot management advice",
      "Three of the country's top prep schools within reach",
    ],
  },
  {
    slug: "ibiza",
    name: "Ibiza",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    alt: "Whitewashed villa above the Ibizan coast",
    propertiesCount: 19,
    tagline: "Whitewashed fincas above the north-coast bays.",
    about: [
      "Ibiza's prime market lies away from the south-coast clubs — restored fincas in San Juan and Santa Gertrudis, contemporary villas above Cala Jondal, and a small portfolio in the walled old town of Dalt Vila.",
      "We focus on the year-round market and avoid pure short-let stock, working with a small panel of local architects on extension and replacement schemes.",
    ],
    highlights: [
      "Direct flights from Farnborough and Northolt",
      "Hostería and licence advice for working fincas",
      "Heritage permissions handled in-house",
    ],
  },
  {
    slug: "knightsbridge",
    name: "Knightsbridge",
    country: "England",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
    alt: "Stucco-fronted Knightsbridge townhouses",
    propertiesCount: 33,
    tagline: "Lateral mansion-block flats and stucco terraces above Harrods.",
    about: [
      "Knightsbridge offers the deepest stock of large lateral apartments in central London — the Knightsbridge, One Hyde Park, and a string of red-brick mansion blocks along Hans Crescent and Lowndes Square.",
      "We act for buyers across new-build, period mansion blocks and the small remaining freehold townhouse market in Walton Street and Pont Street.",
    ],
    highlights: [
      "Twenty-four-hour concierge on every mansion-block listing",
      "Direct access to Hyde Park and Harrods",
      "Strong rental yields for non-resident owners",
    ],
  },
  {
    slug: "provence",
    name: "Provence",
    country: "France",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=1200&q=80",
    alt: "Stone bastide in the Provençal countryside",
    propertiesCount: 21,
    tagline: "Bastides, mas and lavender estates in the Luberon.",
    about: [
      "Our Provençal book is anchored in the Luberon triangle of Gordes, Ménerbes and Bonnieux, with secondary activity around Aix-en-Provence and the Alpilles north of Saint-Rémy.",
      "Most listings are working bastides or restored mas with olive groves; we maintain relationships with regional architects for renovation programmes and pool consents.",
    ],
    highlights: [
      "Marseille and Avignon both inside an hour",
      "Olive-grove and lavender consultancy in-house",
      "Heritage architect introductions on every property",
    ],
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    alt: "Haussmannian rooftops across central Paris",
    propertiesCount: 28,
    tagline: "Haussmannian piano-nobile floors in the 6th, 7th and 16th.",
    about: [
      "Paris remains the largest single market for Haussmannian piano-nobile floors anywhere — concentrated in the 6th and 7th arrondissements on the Left Bank, and the 16th and 8th on the Right.",
      "We act on both apartment acquisitions and the rarer hôtel particulier market, working closely with French notaires and tax counsel on cross-border purchases.",
    ],
    highlights: [
      "Two-hour fifteen-minute Eurostar from St Pancras",
      "Bilingual French-qualified solicitor on the team",
      "Hôtel particulier specialists with thirty-year track record",
    ],
  },
  {
    slug: "lake-como",
    name: "Lake Como",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?auto=format&fit=crop&w=1200&q=80",
    alt: "Villa on the shores of Lake Como",
    propertiesCount: 14,
    tagline: "Lakefront villas between Bellagio and Cernobbio.",
    about: [
      "Lake Como's prime stock sits on the western shore between Cernobbio and Tremezzo, with a smaller but rising market on the Bellagio peninsula and along the Lecco branch to the east.",
      "Almost every listing is a period villa with private mooring; we work with the Soprintendenza on consents and with a panel of restoration specialists across the lake.",
    ],
    highlights: [
      "Milan Malpensa under an hour by car",
      "Mooring and boathouse consents handled in-house",
      "Heritage restoration architects on retainer",
    ],
  },
  {
    slug: "amalfi-coast",
    name: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=1200&q=80",
    alt: "Cliffside villas above the Amalfi Coast",
    propertiesCount: 11,
    tagline: "Cliffside villas in Positano, Praiano and Ravello.",
    about: [
      "The Amalfi market is concentrated in three towns — Positano, Praiano and Ravello — with a thin but coveted secondary market on Capri across the Gulf.",
      "Stock is tightly held and almost always sold off-market; we maintain long-term relationships with the principal local families and a small group of legal advisors in Naples.",
    ],
    highlights: [
      "Capri tender service for off-island viewings",
      "Naples-based legal counsel on every transaction",
      "Heritage and seascape protection advice in-house",
    ],
  },
]
