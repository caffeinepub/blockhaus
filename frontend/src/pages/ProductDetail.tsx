import { useState } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { getProductById } from '../data/products';
import MarqueeStrip from '../components/MarqueeStrip';

export default function ProductDetail() {
  const { productId } = useParams({ from: '/products/$productId' });
  const navigate = useNavigate();
  const product = getProductById(productId);

  const [selectedSize, setSelectedSize] = useState<string>(
    product?.variants?.sizes?.[0]?.value ?? ''
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.variants?.colors?.[0]?.value ?? ''
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-offwhite">
        <h1 className="font-display text-5xl mb-4" style={{ color: 'oklch(0.10 0 0)' }}>
          PRODUCT NOT FOUND
        </h1>
        <button
          className="btn-bauhaus btn-bauhaus-outline-dark"
          onClick={() => navigate({ to: '/products', search: { category: undefined } })}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-brand-white">
      {/* Breadcrumb */}
      <div className="px-6 md:px-10 py-4 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button
            className="flex items-center gap-2 font-body text-xs tracking-widest uppercase transition-colors"
            style={{ color: 'oklch(0.45 0 0)' }}
            onClick={() => navigate({ to: '/products', search: { category: undefined } })}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.52 0.22 27)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.45 0 0)')}
          >
            <ArrowLeft size={14} />
            All Products
          </button>
          <span className="font-body text-xs" style={{ color: 'oklch(0.65 0 0)' }}>
            /
          </span>
          <span className="font-body text-xs" style={{ color: 'oklch(0.10 0 0)' }}>
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16">
        {/* Image */}
        <div className="relative bg-brand-offwhite border-2 border-brand-black mb-8 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
          {product.isBestSeller && (
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
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-start">
          {/* Category */}
          <p
            className="font-body text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: 'oklch(0.52 0.22 27)' }}
          >
            {product.category}
          </p>

          {/* Name */}
          <h1
            className="font-display leading-none mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: 'oklch(0.10 0 0)',
              lineHeight: 0.95,
            }}
          >
            {product.name.toUpperCase()}
          </h1>

          {/* Geometric divider */}
          <div className="flex mb-6 h-1">
            <div className="w-10" style={{ backgroundColor: 'oklch(0.52 0.22 27)' }} />
            <div className="w-6" style={{ backgroundColor: 'oklch(0.32 0.14 258)' }} />
            <div className="w-6" style={{ backgroundColor: 'oklch(0.68 0.18 52)' }} />
          </div>

          {/* Price */}
          <p
            className="font-body text-2xl font-semibold mb-4"
            style={{ color: 'oklch(0.10 0 0)' }}
          >
            {product.price}
          </p>

          {/* Description */}
          <p
            className="font-body text-sm leading-relaxed mb-8"
            style={{ color: 'oklch(0.30 0 0)' }}
          >
            {product.description}
          </p>

          {/* Size Selector */}
          {product.variants?.sizes && (
            <div className="mb-6">
              <p
                className="font-body text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: 'oklch(0.10 0 0)' }}
              >
                Size
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.sizes.map((size) => (
                  <button
                    key={size.value}
                    className="px-4 py-2 font-body text-xs font-semibold tracking-wider uppercase border-2 transition-all duration-200"
                    style={{
                      borderColor: selectedSize === size.value ? 'oklch(0.10 0 0)' : 'oklch(0.80 0 0)',
                      backgroundColor: selectedSize === size.value ? 'oklch(0.10 0 0)' : 'transparent',
                      color: selectedSize === size.value ? 'oklch(0.99 0 0)' : 'oklch(0.10 0 0)',
                    }}
                    onClick={() => setSelectedSize(size.value)}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selector */}
          {product.variants?.colors && (
            <div className="mb-8">
              <p
                className="font-body text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: 'oklch(0.10 0 0)' }}
              >
                Colorway
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.colors.map((color) => (
                  <button
                    key={color.value}
                    className="px-4 py-2 font-body text-xs font-semibold tracking-wider uppercase border-2 transition-all duration-200"
                    style={{
                      borderColor: selectedColor === color.value ? 'oklch(0.52 0.22 27)' : 'oklch(0.80 0 0)',
                      backgroundColor: selectedColor === color.value ? 'oklch(0.52 0.22 27)' : 'transparent',
                      color: selectedColor === color.value ? 'oklch(0.99 0 0)' : 'oklch(0.10 0 0)',
                    }}
                    onClick={() => setSelectedColor(color.value)}
                  >
                    {color.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-8">
            <p
              className="font-body text-xs font-semibold tracking-widest uppercase"
              style={{ color: 'oklch(0.10 0 0)' }}
            >
              Qty
            </p>
            <div className="flex items-center border-2 border-brand-black">
              <button
                className="p-3 transition-colors hover:bg-brand-offwhite"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus size={14} />
              </button>
              <span
                className="px-6 py-3 font-body text-sm font-semibold border-x-2 border-brand-black"
                style={{ color: 'oklch(0.10 0 0)' }}
              >
                {quantity}
              </span>
              <button
                className="p-3 transition-colors hover:bg-brand-offwhite"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            className="btn-bauhaus btn-bauhaus-primary w-full text-center mb-4"
            style={{ fontSize: '0.75rem' }}
          >
            Add to Cart
          </button>

          {/* Product Details */}
          {product.details && (
            <div className="mt-8 border-t-2 border-brand-black pt-8">
              <p
                className="font-body text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: 'oklch(0.10 0 0)' }}
              >
                Product Details
              </p>
              <ul className="space-y-2">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 flex-shrink-0"
                      style={{ backgroundColor: 'oklch(0.52 0.22 27)' }}
                    />
                    <span
                      className="font-body text-xs leading-relaxed"
                      style={{ color: 'oklch(0.30 0 0)' }}
                    >
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <MarqueeStrip bgColor="blue" />
    </main>
  );
}
