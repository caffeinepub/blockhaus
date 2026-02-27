import { useNavigate } from '@tanstack/react-router';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '92vh' }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/blockhaus-hero.dim_1920x1080.png')`,
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, oklch(0.10 0 0 / 0.72) 0%, oklch(0.10 0 0 / 0.25) 60%, transparent 100%)' }}
      />

      {/* Geometric accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-2"
        style={{ backgroundColor: 'oklch(0.52 0.22 27)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-10 md:px-20 pb-20 pt-32" style={{ minHeight: '92vh' }}>
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p
            className="font-body text-xs font-semibold tracking-[0.3em] uppercase mb-6"
            style={{ color: 'oklch(0.68 0.18 52)' }}
          >
            Luxury Home Goods — Bauhaus Inspired
          </p>

          {/* Headline */}
          <h1
            className="font-display leading-none mb-6"
            style={{
              fontSize: 'clamp(4rem, 10vw, 9rem)',
              color: 'oklch(0.99 0 0)',
              lineHeight: 0.9,
            }}
          >
            CRAFT.
            <br />
            <span style={{ color: 'oklch(0.52 0.22 27)' }}>FORM.</span>
            <br />
            SPACE.
          </h1>

          {/* Tagline */}
          <p
            className="font-body text-base md:text-lg font-light mb-10 max-w-md leading-relaxed"
            style={{ color: 'oklch(0.85 0 0)' }}
          >
            Handcrafted tufted textiles where Bauhaus geometry meets the warmth of home.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              className="btn-bauhaus btn-bauhaus-outline-white"
              onClick={() => navigate({ to: '/products', search: { category: undefined } })}
            >
              Shop Now
            </button>
            <button
              className="btn-bauhaus"
              style={{
                backgroundColor: 'oklch(0.52 0.22 27)',
                color: 'oklch(0.99 0 0)',
                borderColor: 'oklch(0.52 0.22 27)',
              }}
              onClick={() =>
                navigate({
                  to: '/products/$productId',
                  params: { productId: 'tufted-border-mirror' },
                })
              }
            >
              Best Seller
            </button>
          </div>
        </div>

        {/* Bottom geometric strip */}
        <div className="absolute bottom-0 left-0 right-0 flex h-1">
          <div className="flex-1" style={{ backgroundColor: 'oklch(0.52 0.22 27)' }} />
          <div className="flex-1" style={{ backgroundColor: 'oklch(0.32 0.14 258)' }} />
          <div className="flex-1" style={{ backgroundColor: 'oklch(0.68 0.18 52)' }} />
          <div className="flex-1" style={{ backgroundColor: 'oklch(0.99 0 0)' }} />
        </div>
      </div>
    </section>
  );
}
