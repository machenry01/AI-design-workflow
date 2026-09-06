import { useEffect, useRef, useState } from 'react';
import BookMockup from '@/components/BookMockup';
import CTAButton from '@/components/CTAButton';
import { PRICE } from '@/lib/config';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const headlineLines = [
    ['AI', "ISN'T"],
    ['THE', 'DESIGNER.'],
    ['YOU', 'ARE.'],
  ];

  return (
    <section id="hero" className="relative grain overflow-hidden bg-warm-white pt-32 pb-16 md:pt-36 md:pb-24">
      {/* Background environment */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft abstract forms */}
        <div
          className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full blur-[120px] drift"
          style={{ background: 'radial-gradient(circle, rgba(75,88,255,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] rounded-full blur-[100px] drift2"
          style={{ background: 'radial-gradient(circle, rgba(75,88,255,0.05) 0%, transparent 70%)' }}
        />
        {/* Subtle gradient base */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #F7F7F5 0%, #F0F0EB 50%, #F7F7F5 100%)' }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="order-2 lg:order-1">
            {/* Metadata */}
            <div
              className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-electric subtle-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-ink/50 font-medium">
                A Practical Field Guide
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-bold tracking-tight text-ink"
              style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)', lineHeight: '0.95', letterSpacing: '-0.03em' }}
            >
              {headlineLines.map((line, lineIdx) => (
                <div key={lineIdx} className="overflow-hidden">
                  <div
                    className="transition-all duration-700 ease-out"
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? 'translateY(0)' : 'translateY(100%)',
                      transitionDelay: `${200 + lineIdx * 120}ms`,
                    }}
                  >
                    {line.map((word, wordIdx) => (
                      <span
                        key={`${lineIdx}-${wordIdx}`}
                        className={word === 'ARE.' ? 'text-electric' : ''}
                      >
                        {word}{' '}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </h1>

            {/* Subhead */}
            <p
              className="mt-6 text-sub text-ink/70 font-medium max-w-xl transition-all duration-700"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '600ms',
              }}
            >
              A practical field guide to thinking, prompting and working better with AI as a designer.
            </p>

            {/* Supporting paragraph */}
            <p
              className="mt-4 text-base text-ink/55 leading-relaxed max-w-xl transition-all duration-700"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '750ms',
              }}
            >
              AI can generate ideas, explore directions, critique work and accelerate production. But
              knowing what to ask, what to reject and what deserves another iteration is still your job.
              That's what this guide is about.
            </p>

            {/* CTA */}
            <div
              className="mt-8 transition-all duration-700"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '900ms',
              }}
            >
              <CTAButton
                label={`GET THE AI DESIGN WORKFLOW — ${PRICE}`}
                size="xl"
                className="w-full sm:w-auto"
              />
            </div>

            {/* Meta below CTA */}
            <div
              className="mt-4 flex items-center gap-4 text-sm text-ink/45 transition-all duration-700"
              style={{
                opacity: mounted ? 1 : 0,
                transitionDelay: '1050ms',
              }}
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink/30" />
                29-page digital field guide
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink/30" />
                Instant digital access
              </span>
            </div>
          </div>

          {/* RIGHT — Book */}
          <div
            className="order-1 lg:order-2 flex justify-center transition-all duration-1000"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(30px)',
              transitionDelay: '400ms',
            }}
          >
            <BookMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
