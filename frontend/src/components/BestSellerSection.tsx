import { useNavigate } from '@tanstack/react-router';
import { products } from '../data/products';

export default function BestSellerSection() {
  const navigate = useNavigate();
  const bestSeller = products.find((p) => p.isBestSeller)!;

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
      {/* Image Side */}
      <div className="relative overflow-hidden bg-brand-offwhite order-2 md:order-1">
        <img
          src={bestSeller.image}
          alt={bestSeller.name}
          className="w-full h-full object-cover"
          style={{ minHeight: '500px' }}
        />
        {/* Best Seller Badge */}
        <div
          className="absolute top-6 left-6 px-4 py-2"
          style={{ backgroundColor: 'oklch(0.52 0.22 27)' }}
        >
          <span
            className="font-body text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'oklch(0.99 0 0)' }}
          >
            Best Seller
          </span>
        </div>
      </div>

      {/* Text Side */}
      <div
        className="flex flex-col justify-center px-10 md:px-16 py-16 order-1 md:order-2"
        style={{ backgroundColor: 'oklch(0.32 0.14 258)' }}
      >
        {/* Eyebrow */}
        <p
          className="font-body text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ color: 'oklch(0.68 0.18 52)' }}
        >
          Our Most Loved
        </p>

        {/* Product Name */}
        <h2
          className="font-display leading-none mb-6"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            color: 'oklch(0.99 0 0)',
            lineHeight: 0.95,
          }}
        >
          {bestSeller.name.toUpperCase()}
        </h2>

        {/* Divider */}
        <div
          className="w-12 h-1 mb-6"
          style={{ backgroundColor: 'oklch(0.52 0.22 27)' }}
        />

        {/* Description */}
        <p
          className="font-body text-sm leading-relaxed mb-4 max-w-sm"
          style={{ color: 'oklch(0.85 0 0)' }}
        >
          {bestSeller.description}
        </p>

        {/* Price */}
        <p
          className="font-body text-xl font-semibold mb-8"
          style={{ color: 'oklch(0.99 0 0)' }}
        >
          {bestSeller.price}
        </p>

        {/* CTA */}
        <div className="flex gap-4">
          <button
            className="btn-bauhaus btn-bauhaus-outline-white"
            onClick={() => navigate({ to: `/products/${bestSeller.id}` })}
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
