import MarqueeStrip from '../components/MarqueeStrip';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-white">
      {/* Hero */}
      <div
        className="w-full px-6 md:px-10 py-24 border-b-2 border-brand-black"
        style={{ backgroundColor: 'oklch(0.10 0 0)' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="font-body text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'oklch(0.68 0.18 52)' }}
            >
              Our Philosophy
            </p>
            <h1
              className="font-display leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', color: 'oklch(0.99 0 0)', lineHeight: 0.9 }}
            >
              ABOUT
              <br />
              <span style={{ color: 'oklch(0.52 0.22 27)' }}>BLOCK</span>
              <span style={{ color: 'oklch(0.99 0 0)' }}>HAUS</span>
            </h1>
          </div>
          <div>
            <p
              className="font-body text-base leading-relaxed"
              style={{ color: 'oklch(0.75 0 0)' }}
            >
              We are a luxury home goods brand rooted in the principles of the Bauhaus movement — the radical idea that art, craft, and industry can coexist in perfect harmony.
            </p>
          </div>
        </div>
      </div>

      <MarqueeStrip bgColor="red" />

      {/* Story Sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-brand-black">
          {[
            {
              title: 'THE CRAFT',
              color: 'oklch(0.52 0.22 27)',
              body: 'Every Blockhaus piece is hand-tufted by skilled artisans using traditional techniques passed down through generations. We use only premium wool and natural materials, ensuring each piece is built to last a lifetime.',
            },
            {
              title: 'THE FORM',
              color: 'oklch(0.32 0.14 258)',
              body: 'Our designs are rooted in Bauhaus geometry — bold shapes, deliberate asymmetry, and a strict palette of red, blue, orange, and white. Form is never arbitrary; every line and color serves a purpose.',
            },
            {
              title: 'THE SPACE',
              color: 'oklch(0.68 0.18 52)',
              body: 'We believe your home is your most important canvas. Our pieces are designed to transform spaces — to bring intention, beauty, and a sense of artistic purpose to the rooms you live in every day.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-10 border-brand-black ${i < 2 ? 'border-r-0 md:border-r-2' : ''}`}
            >
              <div
                className="w-8 h-8 mb-6"
                style={{ backgroundColor: item.color }}
              />
              <h3
                className="font-display text-3xl mb-4"
                style={{ color: 'oklch(0.10 0 0)' }}
              >
                {item.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: 'oklch(0.35 0 0)' }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Story Image */}
      <div className="w-full relative" style={{ height: '500px' }}>
        <img
          src="/assets/generated/brand-story.dim_1200x800.png"
          alt="Blockhaus artisan at work"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: 'oklch(0.10 0 0 / 0.5)' }}
        >
          <blockquote
            className="font-display text-center px-6"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', color: 'oklch(0.99 0 0)', maxWidth: '800px', lineHeight: 1.1 }}
          >
            "ART AND CRAFT ARE ONE. FORM FOLLOWS FUNCTION. BEAUTY IS NEVER ACCIDENTAL."
          </blockquote>
        </div>
      </div>

      <MarqueeStrip bgColor="orange" />
    </main>
  );
}
