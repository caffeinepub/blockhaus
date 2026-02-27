export interface ProductVariant {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isBestSeller?: boolean;
  variants?: {
    sizes?: ProductVariant[];
    colors?: ProductVariant[];
  };
  details?: string[];
}

export const products: Product[] = [
  // ── MIRRORS ──────────────────────────────────────────────────────────────
  {
    id: 'tufted-border-mirror',
    name: 'Tufted Border Mirror',
    tagline: 'The statement piece your wall deserves.',
    description:
      'Our best-selling Tufted Border Mirror merges Bauhaus geometry with artisanal craft. Each mirror is hand-tufted with bold geometric patterns in our signature red, blue, and orange palette — a functional sculpture for the modern home.',
    price: 'From $480',
    image: '/assets/generated/product-tufted-border-mirror.dim_800x800.png',
    category: 'Mirrors',
    isBestSeller: true,
    variants: {
      sizes: [
        { label: '50cm Round', value: '50cm-round' },
        { label: '70cm Round', value: '70cm-round' },
        { label: '60x80cm Rect', value: '60x80-rect' },
        { label: '80x100cm Rect', value: '80x100-rect' },
      ],
      colors: [
        { label: 'Red & Blue', value: 'red-blue' },
        { label: 'Orange & White', value: 'orange-white' },
        { label: 'Full Spectrum', value: 'full-spectrum' },
      ],
    },
    details: [
      'Hand-tufted by skilled artisans',
      '100% wool pile on cotton canvas',
      'Solid wood frame backing',
      'Ready to hang — hardware included',
      'Custom sizes available on request',
    ],
  },
  {
    id: 'arch-tufted-mirror',
    name: 'Arch Tufted Mirror',
    tagline: 'Soft curves, bold craft.',
    description:
      'The Arch Tufted Mirror brings an arched silhouette to our signature tufted border technique. A hand-crafted wool frame in warm earth tones and bold primaries makes this piece a focal point in any entryway or bedroom.',
    price: 'From $520',
    image: '/assets/generated/mirror-product-2.dim_800x1000.png',
    category: 'Mirrors',
    variants: {
      sizes: [
        { label: '60x90cm Arch', value: '60x90-arch' },
        { label: '70x110cm Arch', value: '70x110-arch' },
        { label: '80x130cm Arch', value: '80x130-arch' },
      ],
      colors: [
        { label: 'Terracotta & Cream', value: 'terracotta-cream' },
        { label: 'Cobalt & White', value: 'cobalt-white' },
        { label: 'Full Spectrum', value: 'full-spectrum' },
      ],
    },
    details: [
      'Hand-tufted wool border on arched frame',
      'Solid birch wood backing',
      'Ready to hang — D-ring hardware included',
      'Bevelled mirror glass',
      'Custom colorways available',
    ],
  },
  {
    id: 'oval-tufted-mirror',
    name: 'Oval Tufted Mirror',
    tagline: 'Timeless form, handcrafted edge.',
    description:
      'Our Oval Tufted Mirror softens the Bauhaus grid with an elegant oval form. The hand-tufted wool border features concentric geometric bands that draw the eye inward — a meditative object as much as a mirror.',
    price: 'From $460',
    image: '/assets/generated/mirror-product-3.dim_800x1000.png',
    category: 'Mirrors',
    variants: {
      sizes: [
        { label: '55x75cm Oval', value: '55x75-oval' },
        { label: '65x90cm Oval', value: '65x90-oval' },
        { label: '75x110cm Oval', value: '75x110-oval' },
      ],
      colors: [
        { label: 'Red & Black', value: 'red-black' },
        { label: 'Orange & Blue', value: 'orange-blue' },
        { label: 'Monochrome', value: 'monochrome' },
      ],
    },
    details: [
      'Hand-tufted concentric wool border',
      'Oval bevelled mirror glass',
      'Solid wood backing with hanging hardware',
      'Spot clean wool border only',
      'Made to order — 3–5 week lead time',
    ],
  },
  {
    id: 'square-tufted-mirror',
    name: 'Square Tufted Mirror',
    tagline: 'Pure geometry. Pure craft.',
    description:
      'The Square Tufted Mirror is a love letter to Bauhaus form. A perfectly proportioned square mirror framed by a thick hand-tufted wool border with bold primary-colour blocking — rigorous, beautiful, and entirely handmade.',
    price: 'From $440',
    image: '/assets/generated/mirror-product-4.dim_800x1000.png',
    category: 'Mirrors',
    variants: {
      sizes: [
        { label: '60x60cm', value: '60x60' },
        { label: '80x80cm', value: '80x80' },
        { label: '100x100cm', value: '100x100' },
      ],
      colors: [
        { label: 'Primary Blocks', value: 'primary-blocks' },
        { label: 'Blue & White', value: 'blue-white' },
        { label: 'Red & Cream', value: 'red-cream' },
      ],
    },
    details: [
      'Hand-tufted wool border — colour-blocked design',
      'Square bevelled mirror glass',
      'Solid MDF backing',
      'Ready to hang — hardware included',
      'Custom sizes on request',
    ],
  },

  // ── RUGS ─────────────────────────────────────────────────────────────────
  {
    id: 'tufted-rug',
    name: 'Tufted Rug',
    tagline: 'Geometry underfoot. Art in every step.',
    description:
      'Inspired by the Bauhaus masters, our Tufted Rugs bring bold geometric patterns to your floors. Each rug is hand-tufted using premium wool, creating a tactile artwork that anchors any room with purpose and beauty.',
    price: 'From $320',
    image: '/assets/generated/product-tufted-rug.dim_800x800.png',
    category: 'Rugs',
    variants: {
      sizes: [
        { label: '120x180cm', value: '120x180' },
        { label: '160x230cm', value: '160x230' },
        { label: '200x300cm', value: '200x300' },
        { label: 'Custom', value: 'custom' },
      ],
      colors: [
        { label: 'Red & White', value: 'red-white' },
        { label: 'Blue & Orange', value: 'blue-orange' },
        { label: 'Full Palette', value: 'full-palette' },
      ],
    },
    details: [
      'Hand-tufted premium wool pile',
      'Cotton canvas backing with non-slip latex',
      'Geometric Bauhaus-inspired pattern',
      'Professionally finished edges',
      'Spot clean recommended',
    ],
  },
  {
    id: 'stripe-tufted-rug',
    name: 'Stripe Tufted Rug',
    tagline: 'Bold lines. Soft underfoot.',
    description:
      'The Stripe Tufted Rug distils the Bauhaus palette into clean horizontal bands of colour. Hand-tufted in premium wool with alternating pile heights, the stripes create a subtle tactile rhythm across the floor.',
    price: 'From $290',
    image: '/assets/generated/rug-product-2.dim_800x1000.png',
    category: 'Rugs',
    variants: {
      sizes: [
        { label: '120x180cm', value: '120x180' },
        { label: '160x230cm', value: '160x230' },
        { label: '200x300cm', value: '200x300' },
      ],
      colors: [
        { label: 'Red & Cream', value: 'red-cream' },
        { label: 'Blue & White', value: 'blue-white' },
        { label: 'Orange & Black', value: 'orange-black' },
      ],
    },
    details: [
      'Hand-tufted wool — alternating pile heights',
      'Cotton canvas backing with non-slip latex',
      'Bold stripe pattern in Bauhaus palette',
      'Bound edges for durability',
      'Professional cleaning recommended',
    ],
  },
  {
    id: 'circle-tufted-rug',
    name: 'Circle Tufted Rug',
    tagline: 'A focal point for every room.',
    description:
      'Our Circle Tufted Rug centres the room with a bold concentric-circle motif hand-tufted in contrasting wool colours. Inspired by Bauhaus target compositions, it transforms any floor into a canvas.',
    price: 'From $350',
    image: '/assets/generated/rug-product-3.dim_800x1000.png',
    category: 'Rugs',
    variants: {
      sizes: [
        { label: '150cm Round', value: '150-round' },
        { label: '200cm Round', value: '200-round' },
        { label: '250cm Round', value: '250-round' },
      ],
      colors: [
        { label: 'Red & Blue', value: 'red-blue' },
        { label: 'Orange & White', value: 'orange-white' },
        { label: 'Monochrome', value: 'monochrome' },
      ],
    },
    details: [
      'Hand-tufted concentric circle design',
      'Premium wool pile on cotton canvas',
      'Non-slip latex backing',
      'Round shape — no raw edges',
      'Spot clean only',
    ],
  },
  {
    id: 'grid-tufted-rug',
    name: 'Grid Tufted Rug',
    tagline: 'Structure beneath your feet.',
    description:
      'The Grid Tufted Rug is a floor-level homage to Bauhaus grid theory. A precise hand-tufted grid pattern in contrasting wool colours creates a graphic, architectural statement that works in any modern interior.',
    price: 'From $310',
    image: '/assets/generated/rug-product-4.dim_800x1000.png',
    category: 'Rugs',
    variants: {
      sizes: [
        { label: '120x180cm', value: '120x180' },
        { label: '160x230cm', value: '160x230' },
        { label: '200x300cm', value: '200x300' },
        { label: 'Custom', value: 'custom' },
      ],
      colors: [
        { label: 'Black & White', value: 'black-white' },
        { label: 'Red & Cream', value: 'red-cream' },
        { label: 'Blue & Orange', value: 'blue-orange' },
      ],
    },
    details: [
      'Hand-tufted grid pattern in contrasting wool',
      'Cotton canvas backing with non-slip latex',
      'Flat-weave grid sections with cut-pile accents',
      'Professionally bound edges',
      'Vacuum regularly; spot clean as needed',
    ],
  },

  // ── PILLOW CASES ─────────────────────────────────────────────────────────
  {
    id: 'tufted-pillowcase',
    name: 'Tufted Pillow Case',
    tagline: 'Soft geometry. Bold comfort.',
    description:
      'Transform your living space with our Tufted Pillow Cases. Each piece features hand-tufted geometric patterns in our Bauhaus-inspired palette, bringing sculptural texture and bold color to your sofa or bed.',
    price: 'From $95',
    image: '/assets/generated/product-tufted-pillowcase.dim_800x800.png',
    category: 'Pillows',
    variants: {
      sizes: [
        { label: '45x45cm', value: '45x45' },
        { label: '50x50cm', value: '50x50' },
        { label: '30x50cm Lumbar', value: '30x50-lumbar' },
      ],
      colors: [
        { label: 'Red Stripe', value: 'red-stripe' },
        { label: 'Blue Block', value: 'blue-block' },
        { label: 'Orange Geo', value: 'orange-geo' },
      ],
    },
    details: [
      'Hand-tufted wool on cotton base',
      'Hidden zipper closure',
      'Insert not included',
      'Dry clean only',
      'Each piece is unique — slight variations expected',
    ],
  },
  {
    id: 'arch-tufted-pillowcase',
    name: 'Arch Tufted Pillow Case',
    tagline: 'Curved lines, handcrafted texture.',
    description:
      'The Arch Tufted Pillow Case features a bold arched motif hand-tufted in contrasting wool colours. Inspired by Bauhaus architectural forms, it adds sculptural depth and graphic energy to any sofa or bed.',
    price: 'From $105',
    image: '/assets/generated/pillow-product-2.dim_800x1000.png',
    category: 'Pillows',
    variants: {
      sizes: [
        { label: '45x45cm', value: '45x45' },
        { label: '50x50cm', value: '50x50' },
        { label: '30x50cm Lumbar', value: '30x50-lumbar' },
      ],
      colors: [
        { label: 'Cobalt & Cream', value: 'cobalt-cream' },
        { label: 'Red & White', value: 'red-white' },
        { label: 'Orange & Black', value: 'orange-black' },
      ],
    },
    details: [
      'Hand-tufted arch motif in wool',
      'Cotton canvas backing',
      'Concealed zip closure',
      'Insert not included',
      'Dry clean only',
    ],
  },
  {
    id: 'circle-tufted-pillowcase',
    name: 'Circle Tufted Pillow Case',
    tagline: 'Round forms, endless texture.',
    description:
      'Our Circle Tufted Pillow Case brings the Bauhaus target motif to your soft furnishings. Concentric circles hand-tufted in bold contrasting wools create a tactile, graphic cushion that commands attention.',
    price: 'From $110',
    image: '/assets/generated/pillow-product-3.dim_800x1000.png',
    category: 'Pillows',
    variants: {
      sizes: [
        { label: '45x45cm', value: '45x45' },
        { label: '50x50cm', value: '50x50' },
      ],
      colors: [
        { label: 'Red & Blue', value: 'red-blue' },
        { label: 'Orange & White', value: 'orange-white' },
        { label: 'Monochrome', value: 'monochrome' },
      ],
    },
    details: [
      'Hand-tufted concentric circle design',
      'Premium wool pile on cotton base',
      'Hidden zipper closure',
      'Insert not included',
      'Dry clean only',
    ],
  },
  {
    id: 'stripe-tufted-pillowcase',
    name: 'Stripe Tufted Pillow Case',
    tagline: 'Linear rhythm. Tactile luxury.',
    description:
      'The Stripe Tufted Pillow Case translates the Bauhaus love of line into a soft furnishing. Bold horizontal stripes hand-tufted in alternating pile heights create a cushion that is as satisfying to touch as it is to look at.',
    price: 'From $98',
    image: '/assets/generated/pillow-product-4.dim_800x1000.png',
    category: 'Pillows',
    variants: {
      sizes: [
        { label: '45x45cm', value: '45x45' },
        { label: '50x50cm', value: '50x50' },
        { label: '30x50cm Lumbar', value: '30x50-lumbar' },
      ],
      colors: [
        { label: 'Red & Cream', value: 'red-cream' },
        { label: 'Blue & White', value: 'blue-white' },
        { label: 'Orange & Black', value: 'orange-black' },
      ],
    },
    details: [
      'Hand-tufted stripe pattern — alternating pile heights',
      'Cotton canvas backing',
      'Concealed zip closure',
      'Insert not included',
      'Dry clean only',
    ],
  },

  // ── MIRROR RUGS ──────────────────────────────────────────────────────────
  {
    id: 'tufted-mirror-rug',
    name: 'Tufted Mirror Rug',
    tagline: 'Where reflection meets craft.',
    description:
      'The Tufted Mirror Rug is our most innovative creation — a floor piece that frames a mirror within a hand-tufted textile border. A conversation piece that blurs the line between functional object and art installation.',
    price: 'From $650',
    image: '/assets/generated/product-tufted-mirror-rug.dim_800x800.png',
    category: 'Mirror Rugs',
    variants: {
      sizes: [
        { label: '80x120cm', value: '80x120' },
        { label: '100x150cm', value: '100x150' },
        { label: 'Custom', value: 'custom' },
      ],
      colors: [
        { label: 'Red & Orange', value: 'red-orange' },
        { label: 'Blue & White', value: 'blue-white' },
        { label: 'Full Spectrum', value: 'full-spectrum' },
      ],
    },
    details: [
      'Hand-tufted wool border',
      'Integrated mirror panel',
      'Solid backing for stability',
      'Floor or wall mountable',
      'Made to order — 4-6 week lead time',
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
