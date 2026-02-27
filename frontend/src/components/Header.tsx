import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { ShoppingBag, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-white border-b-2 border-brand-black">
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0 group">
          <span className="font-display text-2xl tracking-widest text-brand-black leading-none">
            BLOCK
          </span>
          <span
            className="font-display text-2xl tracking-widest leading-none"
            style={{ color: 'oklch(0.52 0.22 27)' }}
          >
            HAUS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-body text-xs font-600 tracking-widest uppercase text-brand-black hover:text-brand-red transition-colors duration-200"
              activeProps={{ className: 'text-brand-red' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            className="relative p-1 text-brand-black hover:text-brand-red transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-1 text-brand-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-white border-t-2 border-brand-black">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-6 py-4 font-body text-xs font-semibold tracking-widest uppercase text-brand-black border-b border-border hover:bg-brand-offwhite transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
