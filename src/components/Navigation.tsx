import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SELAR_URL, PRICE } from '@/lib/config';

const NAV_LINKS = [
  { label: 'THE PROBLEM', href: '#problem' },
  { label: 'THE GUIDE', href: '#solution' },
  { label: 'INSIDE', href: '#inside' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`nav-bar fixed top-0 left-0 right-0 z-50 ${
          scrolled
            ? 'bg-warm-white/95 md:bg-warm-white/85 py-3 shadow-[0_1px_0_rgba(0,0,0,0.06)] md:backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between gap-4">
          <a href="#top" className="text-sm font-bold tracking-tight text-ink whitespace-nowrap">
            THE AI DESIGN WORKFLOW
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.1em] text-ink/60 hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href={SELAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn inline-flex items-center gap-2 rounded-lg bg-electric px-5 py-2.5 text-sm font-semibold text-white hover:bg-electric-dark"
            >
              GET THE GUIDE — {PRICE}
            </a>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={2.2} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden bg-warm-white flex flex-col">
          <div className="flex items-center justify-between px-5 py-5 border-b border-ink/10">
            <span className="text-sm font-bold tracking-tight">THE AI DESIGN WORKFLOW</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={22} strokeWidth={2.2} />
            </button>
          </div>
          <div className="flex flex-col px-5 py-8 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold tracking-tight py-3 border-b border-ink/5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto p-5">
            <a
              href={SELAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn flex items-center justify-center gap-2 rounded-xl bg-electric px-6 py-4 text-base font-semibold text-white"
            >
              GET THE GUIDE — {PRICE}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
