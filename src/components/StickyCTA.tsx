import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SELAR_URL, PRICE } from '@/lib/config';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar when hero is out of view
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`sticky-cta fixed bottom-0 left-0 right-0 z-40 ${visible ? 'is-visible' : ''}`}
    >
      <div className="bg-ink/95 backdrop-blur-md border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4">
          {/* Left */}
          <div className="hidden sm:block">
            <div className="text-xs font-bold tracking-tight text-white">THE AI DESIGN WORKFLOW</div>
            <div className="text-[10px] uppercase tracking-[0.1em] text-white/40">Field Guide — Edition One</div>
          </div>

          {/* Mobile compact title */}
          <div className="sm:hidden text-xs font-bold text-white tracking-tight">
            AI DESIGN WORKFLOW
          </div>

          {/* Center price */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-lg font-bold text-white">{PRICE}</span>
            <span className="text-xs text-white/40">·</span>
            <span className="text-xs text-white/50">29-page digital PDF</span>
          </div>

          {/* Right CTA */}
          <a
            href={SELAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn inline-flex items-center gap-2 rounded-lg bg-electric px-5 md:px-6 py-2.5 md:py-3 text-sm font-semibold text-white hover:bg-electric-dark whitespace-nowrap"
          >
            <span>GET THE GUIDE</span>
            <ArrowRight size={16} className="cta-arrow" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </div>
  );
}
