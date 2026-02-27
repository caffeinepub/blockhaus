import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-brand-white">
      {/* Header */}
      <div
        className="w-full px-6 md:px-10 py-20 border-b-2 border-brand-black"
        style={{ backgroundColor: 'oklch(0.10 0 0)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="font-body text-xs font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: 'oklch(0.68 0.18 52)' }}
          >
            Get in Touch
          </p>
          <h1
            className="font-display leading-none"
            style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', color: 'oklch(0.99 0 0)' }}
          >
            CONTACT
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <h2
            className="font-display text-4xl mb-6"
            style={{ color: 'oklch(0.10 0 0)' }}
          >
            LET'S TALK
          </h2>
          <div className="flex mb-8 h-1">
            <div className="w-10" style={{ backgroundColor: 'oklch(0.52 0.22 27)' }} />
            <div className="w-6" style={{ backgroundColor: 'oklch(0.32 0.14 258)' }} />
            <div className="w-6" style={{ backgroundColor: 'oklch(0.68 0.18 52)' }} />
          </div>
          <p
            className="font-body text-sm leading-relaxed mb-8"
            style={{ color: 'oklch(0.35 0 0)' }}
          >
            Whether you're interested in a custom piece, have a question about our products, or simply want to talk about Bauhaus design — we'd love to hear from you.
          </p>

          <div className="space-y-6">
            {[
              { label: 'Email', value: 'hello@blockhaus.com' },
              { label: 'Custom Orders', value: '4–6 week lead time' },
              { label: 'Returns', value: 'Risk-free 30-day returns' },
            ].map((item) => (
              <div key={item.label} className="border-l-4 pl-4" style={{ borderColor: 'oklch(0.52 0.22 27)' }}>
                <p
                  className="font-body text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: 'oklch(0.52 0.22 27)' }}
                >
                  {item.label}
                </p>
                <p className="font-body text-sm" style={{ color: 'oklch(0.10 0 0)' }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div
              className="border-2 border-brand-black p-10 flex flex-col items-center justify-center text-center"
              style={{ minHeight: '400px' }}
            >
              <div
                className="w-12 h-12 mb-6"
                style={{ backgroundColor: 'oklch(0.52 0.22 27)' }}
              />
              <h3
                className="font-display text-3xl mb-3"
                style={{ color: 'oklch(0.10 0 0)' }}
              >
                MESSAGE SENT
              </h3>
              <p className="font-body text-sm" style={{ color: 'oklch(0.45 0 0)' }}>
                We'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-0 border-2 border-brand-black">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?' },
              ].map((field) => (
                <div key={field.id} className="border-b-2 border-brand-black">
                  <label
                    htmlFor={field.id}
                    className="block font-body text-xs font-semibold tracking-widest uppercase px-6 pt-4 pb-1"
                    style={{ color: 'oklch(0.52 0.22 27)' }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    required
                    className="w-full px-6 pb-4 pt-1 font-body text-sm bg-transparent outline-none"
                    style={{ color: 'oklch(0.10 0 0)' }}
                  />
                </div>
              ))}
              <div className="border-b-2 border-brand-black">
                <label
                  htmlFor="message"
                  className="block font-body text-xs font-semibold tracking-widest uppercase px-6 pt-4 pb-1"
                  style={{ color: 'oklch(0.52 0.22 27)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us more..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-6 pb-4 pt-1 font-body text-sm bg-transparent outline-none resize-none"
                  style={{ color: 'oklch(0.10 0 0)' }}
                />
              </div>
              <div className="p-6">
                <button
                  type="submit"
                  className="btn-bauhaus btn-bauhaus-primary w-full text-center"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
