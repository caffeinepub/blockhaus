import { useNavigate } from '@tanstack/react-router';
import { products } from '../data/products';

// Show only the 4 flagship products (one per category) as a homepage preview
const previewProducts = products.filter((p) =>
  ['tufted-border-mirror', 'tufted-rug', 'tufted-pillowcase', 'tufted-mirror-rug'].includes(p.id)
);

export default function ProductGrid() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-brand-offwhite py-20 px-6 md:px-10">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex items-end justify-between">
          <div>
            <p
              className="font-body text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: 'oklch(0.52 0.22 27)' }}
            >
              Handcrafted Collection
            </p>
            <h2
              className="font-display leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'oklch(0.10 0 0)' }}
            >
              OUR COLLECTION
            </h2>
          </div>
          <button
            className="hidden md:block btn-bauhaus btn-bauhaus-outline-dark text-xs"
            onClick={() => navigate({ to: '/products', search: { category: undefined } })}
          >
            View All
          </button>
        </div>

        {/* Geometric divider */}
        <div className="flex mt-6 h-1">
          <div className="w-16" style={{ backgroundColor: 'oklch(0.52 0.22 27)' }} />
          <div className="w-8" style={{ backgroundColor: 'oklch(0.32 0.14 258)' }} />
          <div className="w-8" style={{ backgroundColor: 'oklch(0.68 0.18 52)' }} />
          <div className="flex-1" style={{ backgroundColor: 'oklch(0.88 0 0)' }} />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-0 border-2 border-brand-black">
        {previewProducts.map((product, index) => (
          <div
            key={product.id}
            className={`product-card-hover group cursor-pointer bg-brand-white border-brand-black ${
              index % 2 === 0 ? 'border-r-0 sm:border-r-2' : ''
            } ${index < 2 ? 'border-b-2' : ''}`}
            onClick={() => navigate({ to: `/products/${product.id}` })}
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-brand-offwhite aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.isBestSeller && (
                <div
                  className="absolute top-4 right-4 px-3 py-1"
                  style={{ backgroundColor: 'oklch(0.52 0.22 27)' }}
                >
                  <span
                    className="font-body text-xs font-semibold tracking-widest uppercase"
                    style={{ color: 'oklch(0.99 0 0)' }}
                  >
                    Best Seller
                  </span>
                </div>
              )}
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ backgroundColor: 'oklch(0.10 0 0 / 0.4)' }}
              >
                <span
                  className="btn-bauhaus btn-bauhaus-outline-white text-xs"
                  style={{ pointerEvents: 'none' }}
                >
                  View Product
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 border-t-2 border-brand-black">
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="font-body text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: 'oklch(0.52 0.22 27)' }}
                  >
                    {product.category}
                  </p>
                  <h3
                    className="font-display text-2xl leading-tight mb-1"
                    style={{ color: 'oklch(0.10 0 0)' }}
                  >
                    {product.name.toUpperCase()}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground">
                    {product.tagline}
                  </p>
                </div>
                <p
                  className="font-body text-sm font-semibold whitespace-nowrap ml-4 mt-1"
                  style={{ color: 'oklch(0.10 0 0)' }}
                >
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View All */}
      <div className="md:hidden mt-8 flex justify-center">
        <button
          className="btn-bauhaus btn-bauhaus-outline-dark"
          onClick={() => navigate({ to: '/products', search: { category: undefined } })}
        >
          View All Products
        </button>
      </div>
    </section>
  );
}
