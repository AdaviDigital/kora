/**
 * KORA — Product Catalogue
 * Static in-memory dataset. In production, swap KORA_PRODUCTS for a fetch()
 * call to your commerce API (see README "Connecting a real backend").
 */
const KORA_PRODUCTS = [
  {
    id: "kr-001",
    slug: "obsidian-oversized-hoodie",
    name: "Obsidian Oversized Hoodie",
    category: "men",
    tags: ["hoodies", "new"],
    price: 68000,
    compareAt: null,
    isNew: true,
    rating: 4.8,
    reviews: 132,
    colors: [
      { name: "Jet Black", hex: "#141414" },
      { name: "Bone", hex: "#e7e1d4" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    soldOut: [],
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Heavyweight 420gsm brushed fleece, cut oversized with a dropped shoulder. The Obsidian Hoodie anchors every Kora drop — built for layering, engineered to outlast seasons.",
    details: [
      "420gsm 100% combed cotton fleece",
      "Dropped shoulder, boxy oversized fit",
      "Ribbed cuffs and hem, kangaroo pocket",
      "Gold foil Kora wordmark at chest",
      "Pre-shrunk — true to size"
    ]
  },
  {
    id: "kr-002",
    slug: "gold-line-track-jacket",
    name: "Gold Line Track Jacket",
    category: "men",
    tags: ["jackets"],
    price: 92000,
    compareAt: 115000,
    isNew: false,
    rating: 4.6,
    reviews: 87,
    colors: [
      { name: "Black / Gold", hex: "#141414" },
      { name: "Graphite", hex: "#3a3a3d" }
    ],
    sizes: ["S", "M", "L", "XL"],
    soldOut: ["S"],
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "A tailored track jacket with a single gold piping line tracing the logo's signature flourish. Zips to the chin, stays sharp from studio to street.",
    details: [
      "Matte tricot shell, satin lining",
      "Embroidered flourish motif on sleeve",
      "Full-length zip with chin guard",
      "Ribbed collar, cuff and hem"
    ]
  },
  {
    id: "kr-003",
    slug: "midnight-cargo-pant",
    name: "Midnight Cargo Pant",
    category: "men",
    tags: ["bottoms"],
    price: 71000,
    compareAt: null,
    isNew: false,
    rating: 4.7,
    reviews: 64,
    colors: [{ name: "Black", hex: "#141414" }],
    sizes: ["28", "30", "32", "34", "36"],
    soldOut: [],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Six-pocket utility cargo built from brushed twill with a tapered leg. Hardware finished in antique gold to match the wordmark.",
    details: [
      "Brushed cotton twill, mid-weight",
      "Tapered leg, adjustable ankle cuff",
      "Six pockets, antique gold hardware",
      "Reinforced knee stitching"
    ]
  },
  {
    id: "kr-004",
    slug: "bone-cropped-hoodie",
    name: "Bone Cropped Hoodie",
    category: "women",
    tags: ["hoodies", "new"],
    price: 62000,
    compareAt: null,
    isNew: true,
    rating: 4.9,
    reviews: 156,
    colors: [
      { name: "Bone", hex: "#e7e1d4" },
      { name: "Jet Black", hex: "#141414" },
      { name: "Rust", hex: "#a13d2e" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    soldOut: [],
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Cropped silhouette in the same 420gsm fleece as our signature hoodie. Raw hem, relaxed body, engineered for high-waist styling.",
    details: [
      "420gsm combed cotton fleece",
      "Cropped body, raw-cut hem",
      "Dropped shoulder, relaxed sleeve",
      "Gold foil wordmark at chest"
    ]
  },
  {
    id: "kr-005",
    slug: "rust-satin-bomber",
    name: "Rust Satin Bomber",
    category: "women",
    tags: ["jackets"],
    price: 98000,
    compareAt: 128000,
    isNew: false,
    rating: 4.7,
    reviews: 71,
    colors: [
      { name: "Rust", hex: "#a13d2e" },
      { name: "Black", hex: "#141414" }
    ],
    sizes: ["XS", "S", "M", "L"],
    soldOut: ["XS"],
    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Liquid satin bomber with a quilted lining and gold snap hardware. Cut with a dropped shoulder so it layers clean over hoodies.",
    details: [
      "Satin shell, quilted lining",
      "Antique gold snap closures",
      "Ribbed collar, cuff and hem",
      "Interior zip pocket"
    ]
  },
  {
    id: "kr-006",
    slug: "ivory-wide-leg-trouser",
    name: "Ivory Wide-Leg Trouser",
    category: "women",
    tags: ["bottoms"],
    price: 74000,
    compareAt: null,
    isNew: false,
    rating: 4.5,
    reviews: 40,
    colors: [{ name: "Ivory", hex: "#e7e1d4" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    soldOut: [],
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521139329070-1a3be5e9a0bc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Fluid wide-leg trouser in a heavy drape twill. Pressed centre crease, high rise, finished with a concealed gold-tone hook closure.",
    details: [
      "Heavy drape twill, high rise",
      "Wide leg, pressed centre crease",
      "Concealed hook and zip closure",
      "Side seam pockets"
    ]
  },
  {
    id: "kr-007",
    slug: "mini-flourish-hoodie",
    name: "Mini Flourish Hoodie",
    category: "kids",
    tags: ["hoodies", "new"],
    price: 34000,
    compareAt: null,
    isNew: true,
    rating: 4.9,
    reviews: 58,
    colors: [
      { name: "Jet Black", hex: "#141414" },
      { name: "Bone", hex: "#e7e1d4" }
    ],
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"],
    soldOut: [],
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519457851564-71ba36bef9c1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503457574465-52bfe57cae35?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "The signature hoodie, scaled down. Same 420gsm fleece, same gold foil wordmark, sized for the next generation of the Kora family.",
    details: [
      "420gsm combed cotton fleece",
      "Soft brushed interior for all-day wear",
      "Ribbed cuffs and hem",
      "Gold foil wordmark, machine washable"
    ]
  },
  {
    id: "kr-008",
    slug: "junior-cargo-jogger",
    name: "Junior Cargo Jogger",
    category: "kids",
    tags: ["bottoms"],
    price: 28000,
    compareAt: null,
    isNew: false,
    rating: 4.6,
    reviews: 33,
    colors: [{ name: "Black", hex: "#141414" }],
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    soldOut: ["4-5Y"],
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200&auto=format&fit=crop&sat=-30",
      "https://images.unsplash.com/photo-1503457574465-52bfe57cae35?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519457851564-71ba36bef9c1?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Reinforced-knee cargo joggers built for the playground. Elastic waist, tapered cuff, sized for growing legs.",
    details: [
      "Cotton-blend twill, reinforced knees",
      "Elasticated waist with drawcord",
      "Six utility pockets",
      "Machine washable, colourfast"
    ]
  },
  {
    id: "kr-009",
    slug: "flourish-crewneck",
    name: "Flourish Crewneck",
    category: "unisex",
    tags: ["hoodies"],
    price: 54000,
    compareAt: null,
    isNew: false,
    rating: 4.7,
    reviews: 98,
    colors: [
      { name: "Jet Black", hex: "#141414" },
      { name: "Graphite", hex: "#3a3a3d" },
      { name: "Bone", hex: "#e7e1d4" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    soldOut: [],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478186966605-9c47958a0c67?q=80&w=1200&auto=format&fit=crop"
    ],
    description: "Unisex crewneck with the flourish motif embroidered at the collarbone. Heavyweight, garment-dyed for a broken-in feel from day one.",
    details: [
      "380gsm garment-dyed fleece",
      "Embroidered flourish at chest",
      "Ribbed crew collar, cuff and hem",
      "Unisex block fit"
    ]
  },
  {
    id: "kr-010",
    slug: "kora-strap-cap",
    name: "Kora Strap Cap",
    category: "accessories",
    tags: ["headwear", "new"],
    price: 18000,
    compareAt: null,
    isNew: true,
    rating: 4.8,
    reviews: 44,
    colors: [
      { name: "Jet Black", hex: "#141414" },
      { name: "Gold", hex: "#c9a24b" }
    ],
    sizes: ["One Size"],
    soldOut: [],
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop&sat=-40",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop&sat=-40",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop&sat=-40"
    ],
    description: "Structured six-panel cap with a raised gold embroidered K and adjustable brass strap back.",
    details: [
      "Structured six-panel construction",
      "Raised embroidered K at front",
      "Adjustable brass strap closure",
      "One size fits most"
    ]
  },
  {
    id: "kr-011",
    slug: "gold-tab-tote",
    name: "Gold Tab Canvas Tote",
    category: "accessories",
    tags: ["bags"],
    price: 22000,
    compareAt: null,
    isNew: false,
    rating: 4.6,
    reviews: 27,
    colors: [{ name: "Bone", hex: "#e7e1d4" }],
    sizes: ["One Size"],
    soldOut: [],
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop&sat=-20"
    ],
    description: "14oz heavyweight canvas tote with a leather gold-foil tab and reinforced base. Built to carry the whole drop.",
    details: [
      "14oz heavyweight cotton canvas",
      "Leather tab, gold foil wordmark",
      "Reinforced base and stitched handles",
      "Interior slip pocket"
    ]
  },
  {
    id: "kr-012",
    slug: "rust-graphic-tee",
    name: "Rust Graphic Tee",
    category: "unisex",
    tags: ["tees", "sale"],
    price: 26000,
    compareAt: 34000,
    isNew: false,
    rating: 4.5,
    reviews: 112,
    colors: [
      { name: "Rust", hex: "#a13d2e" },
      { name: "Jet Black", hex: "#141414" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    soldOut: [],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop&sat=40",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop&sat=40",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1200&auto=format&fit=crop&sat=40",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1200&auto=format&fit=crop&sat=40"
    ],
    description: "Heavyweight 240gsm tee with the flourish graphic printed oversized across the back. Boxy fit, garment-washed for softness.",
    details: [
      "240gsm heavyweight cotton jersey",
      "Oversized back print, chest logo",
      "Boxy fit, garment-washed",
      "Ribbed crew neckline"
    ]
  }
];

const KORA_CATEGORY_LABELS = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  unisex: "Unisex",
  accessories: "Accessories"
};

function koraFormatPrice(amount) {
  return "\u20A6" + Number(amount).toLocaleString("en-NG");
}

function koraGetProductBySlug(slug) {
  return KORA_PRODUCTS.find((p) => p.slug === slug);
}

function koraGetRelated(product, count = 4) {
  return KORA_PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, count).length
    ? KORA_PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, count)
    : KORA_PRODUCTS.filter((p) => p.id !== product.id).slice(0, count);
}
