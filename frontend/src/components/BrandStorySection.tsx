import { useNavigate } from '@tanstack/react-router';

export default function BrandStorySection() {
  const navigate = useNavigate();

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
      {/* Text Side */}
      <div
        className="flex flex-col justify-center px-10 md:px-16 py-20"
        style={{ backgroundColor: 'oklch(0.99 0 0)' }}
      >
        {/* Eyebrow */}
        <p
          className="font-body text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ color: 'oklch(0.52 0.22 27)' }}
        >
          Our Philosophy
        </p>

        {/* Heading */}
        <h2
          className="font-display leading-none mb-6"
          style={{
            fontSize: 'clamp(2rem, 4vw, 4rem)',
            color: 'oklch(0.10 0 0)',
            lineHeight: 0.95,
          }}
        >
          THE BLOCKHAUS
          <br />
          <span style={{ color: 'oklch(0.32 0.14 258)' }}>STORY</span>
        </h2>

        {/* Geometric divider */}
        <div className="flex mb-8 h-1">
          <div className="w-10" style={{ backgroundColor: 'oklch(0.52 0.22 27)' }} />
          <div className="w-6" style={{ backgroundColor: 'oklch(0.32 0.14 258)' }} />
          <div className="w-6" style={{ backgroundColor: 'oklch(0.68 0.18 52)' }} />
        </div>

        <p
          className="font-body text-sm leading-relaxed mb-4 max-w-md"
          style={{ color: 'oklch(0.30 0 0)' }}
        >
          Blockhaus was born from a deep reverence for the Bauhaus movement — the belief that art and craft are inseparable, that beauty must serve function, and that geometry is the universal language of design.
        </p>
        <p
          className="font-body text-sm leading-relaxed mb-4 max-w-md"
          style={{ color: 'oklch(0.30 0 0)' }}
        >
          Every piece in our collection is hand-tufted by skilled artisans who share our obsession with precision and texture. We work with premium wool and natural materials, creating objects that are as tactile as they are visual.
        </p>
        <p
          className="font-body text-sm leading-relaxed mb-8 max-w-md"
          style={{ color: 'oklch(0.30 0 0)' }}
        >
          Our palette — red, blue, orange, white — is not arbitrary. These are the colors of the Bauhaus masters, chosen for their psychological power and visual clarity. In every rug, mirror, and pillow, we carry that legacy forward.
        </p>

        <button
          className="btn-bauhaus btn-bauhaus-outline-dark self-start"
          onClick={() => navigate({ to: '/about' })}
        >
          Our Story
        </button>
      </div>

      {/* Image Side */}
      <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
        <img
          src="/assets/generated/brand-story.dim_1200x800.png"
          alt="Blockhaus artisan crafting tufted textile"
          className="w-full h-full object-cover"
          style={{ minHeight: '500px' }}
        />
        {/* Geometric overlay accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2 flex"
        >
          <div className="flex-1" style={{ backgroundColor: 'oklch(0.52 0.22 27)' }} />
          <div className="flex-1" style={{ backgroundColor: 'oklch(0.32 0.14 258)' }} />
          <div className="flex-1" style={{ backgroundColor: 'oklch(0.68 0.18 52)' }} />
        </div>
      </div>
    </section>
  );
}
