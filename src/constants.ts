export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  materials: string[];
  dimensions: string;
  images: string[];
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "selene-sofa",
    name: "Selene Modular Sofa",
    category: "Living",
    price: "From R 235,000",
    description: "Named after the Greek goddess of the moon, the Selene Sofa embodies ethereal comfort. Its low profile and deep seating invite a sense of weightless repose.",
    materials: ["Italian Nubuck Leather", "Brushed Chrome Base", "High-Density Memory Foam"],
    dimensions: "320cm W x 110cm D x 68cm H",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=2000"
    ],
    featured: true
  },
  {
    id: "apollo-dining-table",
    name: "Apollo Marble Table",
    category: "Dining",
    price: "From R 170,000",
    description: "A monolith of precision. The Apollo table features a hand-selected Nero Marquina marble top supported by a sculptural lunar-inspired base.",
    materials: ["Nero Marquina Marble", "Cast Aluminum", "Hand-Polished Finish"],
    dimensions: "240cm L x 110cm W x 75cm H",
    images: [
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=2000"
    ],
    featured: true
  },
  {
    id: "luna-lounge-chair",
    name: "Luna Lounge Chair",
    category: "Living",
    price: "From R 80,000",
    description: "The Luna Lounge Chair is a celestial curve of comfort. Designed to cradle the body in a state of perfect stillness.",
    materials: ["Bouclé Fabric", "Solid Walnut Frame", "Stainless Steel Accents"],
    dimensions: "85cm W x 90cm D x 78cm H",
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=2000"
    ],
    featured: true
  },
  {
    id: "eclipse-bed",
    name: "Eclipse Bed Frame",
    category: "Bedroom",
    price: "From R 295,000",
    description: "An sanctuary of silence. The Eclipse bed features an oversized upholstered headboard with integrated ambient moonlight lighting.",
    materials: ["Velvet Upholstery", "Integrated LED", "Steel Internal Frame"],
    dimensions: "220cm W x 240cm L x 120cm H",
    images: [
      "https://images.unsplash.com/photo-1505693419148-403bb09938a1?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=2000"
    ]
  },
  {
    id: "solstice-daybed",
    name: "Solstice Daybed",
    category: "Outdoor",
    price: "From R 135,000",
    description: "Designed for the ultimate outdoor sanctuary. The Solstice Daybed features weather-resistant fabrics and a sculptural frame that catches the light at every angle.",
    materials: ["Marine-Grade Aluminum", "Sunbrella Performance Fabric", "Quick-Dry Foam"],
    dimensions: "210cm W x 160cm D x 75cm H",
    images: [
      "https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=2000"
    ],
    featured: true
  },
  {
    id: "zenith-outdoor-table",
    name: "Zenith Outdoor Table",
    category: "Outdoor",
    price: "From R 110,000",
    description: "A minimalist centerpiece for alfresco dining. The Zenith table combines industrial precision with organic warmth.",
    materials: ["Teak Wood", "Powder-Coated Steel", "Stainless Steel Hardware"],
    dimensions: "220cm L x 100cm W x 74cm H",
    images: [
      "https://images.unsplash.com/photo-1622397333309-3056849bc70b?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1590059305856-78809499878d?auto=format&fit=crop&q=80&w=2000"
    ]
  }
];

export const COLLECTIONS = [
  { name: "Living", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" },
  { name: "Dining", image: "https://images.unsplash.com/photo-1617806118233-18e1db207fa6?auto=format&fit=crop&q=80&w=2000" },
  { name: "Bedroom", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=2000" },
  { name: "Outdoor", image: "https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?auto=format&fit=crop&q=80&w=2000" },
  { name: "Bespoke", image: "https://images.unsplash.com/photo-1616486341351-79b52752ad4f?auto=format&fit=crop&q=80&w=2000" }
];
