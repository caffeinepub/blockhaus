import { useNavigate, useSearch } from '@tanstack/react-router';
import { products } from '../data/products';

export default function ProductsPage() {
  const navigate = useNavigate();
  const search = useSearch({ from: '/products' });
  const activeCategory = (search as { category?: string })?.category ?? null;

  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <main className="min-h-screen bg-brand-offwhite">
      {/* Page Header */}
      <div
        className="w-full px-6 md:px-10 py-16 border-b-2 border-brand-black"
        style={{ backgroundColor: 'oklch(0.10 0 0)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="font-body text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: 'oklch(0.68 0.18 52)' }}
          >
            Handcrafted Luxury
          </p>
          <h1
            className="font-display leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', color: 'oklch(0.99 0 0)' }}
          >
            {activeCategory ? activeCategory.toUpperCase() : 'ALL PRODUCTS'}
          </h1>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="border-b-2 border-brand-black bg-brand-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-0 overflow-x-auto">
            <button
              className="px-5 py-4 font-body text-xs font-semibold tracking-widest uppercase border-r-2 border-brand-black transition-all duration-200 whitespace-nowrap"
              style={{
                backgroundColor: !activeCategory ? 'oklch(0.10 0 0)' : 'transparent',
                color: !activeCategory ? 'oklch(0.99 0 0)' : 'oklch(0.45 0 0)',
              }}
              onClick={() => navigate({ to: '/products', search: { category: undefined } })}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-4 font-body text-xs font-semibold tracking-widest uppercase border-r-2 border-brand-black transition-all duration-200 whitespace-nowrap"
                style={{
                  backgroundColor: activeCategory === cat ? 'oklch(0.10 0 0)' : 'transparent',
                  color: activeCategory === cat ? 'oklch(0.99 0 0)' : 'oklch(0.45 0 0)',
                }}
                onClick={() =>
                  navigate({ to: '/products', search: { category: cat } })
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-display text-4xl" style={{ color: 'oklch(0.10 0 0)' }}>
              NO PRODUCTS FOUND
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-brand-black">
            {filteredProducts.map((product, index) => {
              const cols = 3;
              const totalItems = filteredProducts.length;
              const lastRowStart = totalItems - (totalItems % cols || cols);
              const isLastRow = index >= lastRowStart;
              const isLastInRow = (index + 1) % cols === 0;

              return (
                <div
                  key={product.id}
                  className={`group cursor-pointer bg-brand-white border-brand-black transition-all duration-300 ${
                    !isLastInRow ? 'border-r-0 sm:border-r-2' : ''
                  } ${!isLastRow ? 'border-b-2' : ''}`}
                  onClick={() => navigate({ to: `/products/${product.id}` })}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-brand-offwhite aspect-[4/5]">
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
                        <p className="font-body text-xs text-muted-foreground">{product.tagline}</p>
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
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
