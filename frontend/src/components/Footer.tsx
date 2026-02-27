import { Link } from '@tanstack/react-router';
import { SiInstagram, SiPinterest, SiFacebook } from 'react-icons/si';
import { Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = [
  { label: 'Tufted Rugs', href: '/products/tufted-rug' },
  { label: 'Tufted Pillow Cases', href: '/products/tufted-pillowcase' },
  { label: 'Tufted Mirror Rug', href: '/products/tufted-mirror-rug' },
  { label: 'Tufted Border Mirrors', href: '/products/tufted-border-mirror' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'blockhaus');

  return (
    <footer
      className="w-full border-t-4 border-brand-red"
      style={{ backgroundColor: 'oklch(0.10 0 0)' }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <span
              className="font-display text-3xl tracking-widest leading-none"
              style={{ color: 'oklch(0.99 0 0)' }}
            >
              BLOCK
            </span>
            <span
              className="font-display text-3xl tracking-widest leading-none"
              style={{ color: 'oklch(0.52 0.22 27)' }}
            >
              HAUS
            </span>
          </div>
          <p
            className="font-body text-xs leading-relaxed mb-6 max-w-xs"
            style={{ color: 'oklch(0.65 0 0)' }}
          >
            Bauhaus-inspired luxury home goods. Handcrafted tufted textiles where geometry meets warmth.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="transition-colors"
              style={{ color: 'oklch(0.65 0 0)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.52 0.22 27)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.65 0 0)')}
            >
              <SiInstagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="transition-colors"
              style={{ color: 'oklch(0.65 0 0)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.52 0.22 27)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.65 0 0)')}
            >
              <SiPinterest size={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="transition-colors"
              style={{ color: 'oklch(0.65 0 0)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.52 0.22 27)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.65 0 0)')}
            >
              <SiFacebook size={18} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4
            className="font-body text-xs font-semibold tracking-[0.25em] uppercase mb-5"
            style={{ color: 'oklch(0.99 0 0)' }}
          >
            Navigate
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="font-body text-xs transition-colors"
                  style={{ color: 'oklch(0.65 0 0)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.99 0 0)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.65 0 0)')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4
            className="font-body text-xs font-semibold tracking-[0.25em] uppercase mb-5"
            style={{ color: 'oklch(0.99 0 0)' }}
          >
            Products
          </h4>
          <ul className="space-y-3">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="font-body text-xs transition-colors"
                  style={{ color: 'oklch(0.65 0 0)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.99 0 0)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.65 0 0)')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Info */}
        <div>
          <h4
            className="font-body text-xs font-semibold tracking-[0.25em] uppercase mb-5"
            style={{ color: 'oklch(0.99 0 0)' }}
          >
            Contact
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:hello@blockhaus.com"
                className="font-body text-xs transition-colors"
                style={{ color: 'oklch(0.65 0 0)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(0.99 0 0)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(0.65 0 0)')}
              >
                hello@blockhaus.com
              </a>
            </li>
            <li>
              <p className="font-body text-xs" style={{ color: 'oklch(0.65 0 0)' }}>
                Custom orders welcome
              </p>
            </li>
            <li>
              <p className="font-body text-xs" style={{ color: 'oklch(0.65 0 0)' }}>
                4–6 week lead time
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Geometric color bar */}
      <div className="flex h-1">
        <div className="flex-1" style={{ backgroundColor: 'oklch(0.52 0.22 27)' }} />
        <div className="flex-1" style={{ backgroundColor: 'oklch(0.32 0.14 258)' }} />
        <div className="flex-1" style={{ backgroundColor: 'oklch(0.68 0.18 52)' }} />
        <div className="flex-1" style={{ backgroundColor: 'oklch(0.99 0 0)' }} />
      </div>

      {/* Bottom Bar */}
      <div
        className="px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid oklch(0.20 0 0)' }}
      >
        <p className="font-body text-xs" style={{ color: 'oklch(0.45 0 0)' }}>
          © {year} Blockhaus. All rights reserved.
        </p>
        <p className="font-body text-xs flex items-center gap-1" style={{ color: 'oklch(0.45 0 0)' }}>
          Built with{' '}
          <Heart
            size={12}
            fill="oklch(0.52 0.22 27)"
            stroke="oklch(0.52 0.22 27)"
            className="inline"
          />{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors"
            style={{ color: 'oklch(0.52 0.22 27)' }}
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
