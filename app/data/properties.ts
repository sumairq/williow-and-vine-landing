export type PropertyStatus =
  | "For Sale"
  | "To Rent"
  | "Off Market"
  | "New Instruction"
  | "Under Offer"

export type PropertyType =
  | "Villa"
  | "Apartment"
  | "Townhouse"
  | "Estate"
  | "Penthouse"

export type PropertyCountry =
  | "Spain"
  | "England"
  | "France"
  | "Italy"
  | "Monaco"

export type Property = {
  image: string
  alt: string
  status: PropertyStatus
  name: string
  location: string
  country: PropertyCountry
  type: PropertyType
  price: string
  beds: number
  size: string
}

export const PROPERTIES: Property[] = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    alt: "Contemporary detached home with large glazing",
    status: "For Sale",
    name: "Elmwood House",
    location: "Beaconsfield, Buckinghamshire",
    country: "England",
    type: "Villa",
    price: "£2.95M",
    beds: 5,
    size: "4,820 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
    alt: "Traditional red-brick family home",
    status: "New Instruction",
    name: "Fairfax Manor",
    location: "Virginia Water, Surrey",
    country: "England",
    type: "Estate",
    price: "£4.2M",
    beds: 6,
    size: "6,100 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=600&q=80",
    alt: "White rendered modern home with pool",
    status: "For Sale",
    name: "Clifton Villa",
    location: "Esher, Surrey",
    country: "England",
    type: "Villa",
    price: "£3.75M",
    beds: 5,
    size: "5,200 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=600&q=80",
    alt: "Stone country cottage with gardens",
    status: "Under Offer",
    name: "Orchard Cottage",
    location: "Burford, Oxfordshire",
    country: "England",
    type: "Townhouse",
    price: "£1.85M",
    beds: 4,
    size: "3,150 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=600&q=80",
    alt: "Grand Edwardian manor house",
    status: "Off Market",
    name: "Cavendish Hall",
    location: "Marlow, Buckinghamshire",
    country: "England",
    type: "Estate",
    price: "£7.5M",
    beds: 8,
    size: "9,400 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80",
    alt: "Detached family home with double garage",
    status: "For Sale",
    name: "Lansdowne House",
    location: "Cobham, Surrey",
    country: "England",
    type: "Villa",
    price: "£2.1M",
    beds: 5,
    size: "3,800 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
    alt: "Modern villa with landscaped gardens",
    status: "New Instruction",
    name: "The Pavilion",
    location: "Weybridge, Surrey",
    country: "England",
    type: "Villa",
    price: "£5.1M",
    beds: 6,
    size: "6,700 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=600&q=80",
    alt: "Arts and Crafts house in leafy setting",
    status: "For Sale",
    name: "Heather Lodge",
    location: "Gerrards Cross, Buckinghamshire",
    country: "England",
    type: "Townhouse",
    price: "£1.65M",
    beds: 4,
    size: "2,950 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80",
    alt: "Mediterranean villa with sea view",
    status: "For Sale",
    name: "Villa Almeria",
    location: "Marbella, Andalusia",
    country: "Spain",
    type: "Villa",
    price: "€6.4M",
    beds: 7,
    size: "8,200 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
    alt: "Penthouse apartment with terrace",
    status: "To Rent",
    name: "Résidence Lumière",
    location: "Cannes, Côte d'Azur",
    country: "France",
    type: "Penthouse",
    price: "€32,000 / mo",
    beds: 3,
    size: "2,400 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
    alt: "Tuscan farmhouse with vineyards",
    status: "For Sale",
    name: "Casa del Borgo",
    location: "Chianti, Tuscany",
    country: "Italy",
    type: "Estate",
    price: "€4.9M",
    beds: 6,
    size: "7,100 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    alt: "Harbour-facing apartment in Monte Carlo",
    status: "New Instruction",
    name: "Le Belvédère",
    location: "Monte Carlo",
    country: "Monaco",
    type: "Apartment",
    price: "€12.5M",
    beds: 4,
    size: "3,600 sq ft",
  },
]
