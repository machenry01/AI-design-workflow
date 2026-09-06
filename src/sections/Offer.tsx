import { useReveal } from '@/hooks/useReveal';
import BookMockup from '@/components/BookMockup';
import CTAButton from '@/components/CTAButton';
import { PRICE, PRODUCT_NAME, PRODUCT_SUBTITLE, PRODUCT_FORMAT } from '@/lib/config';

export default function Offer() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative grain grain-light bg-ink text-white py-20 md:py-32 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(75,88,255,0.12) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative max-w-[1300px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Book */}
          <div className={`flex justify-center section-reveal ${visible ? 'is-visible' : ''}`}>
            <BookMockup className="scale-100 md:scale-110" lazy />
          </div>

          {/* Offer */}
          <div className={`section-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-electric subtle-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
                {PRODUCT_SUBTITLE}
              </span>
            </div>

            <h2
              className="font-bold tracking-tight text-white"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: '1.0', letterSpacing: '-0.02em' }}
            >
              {PRODUCT_NAME.toUpperCase()}
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-sm text-white/50">{PRODUCT_FORMAT}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-sm text-white/50">Instant digital access</span>
            </div>

            <p className="mt-8 text-lg md:text-xl text-white/60 font-medium leading-relaxed max-w-md">
              A focused field guide for building a more deliberate way of working with AI.
            </p>

            <div className="mt-8">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-bold tracking-tight text-white">{PRICE}</span>
                <span className="text-sm text-white/40">one-time payment</span>
              </div>
            </div>

            <div className="mt-8">
              <CTAButton size="xl" className="w-full sm:w-auto" />
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-white/40">
              <div className="w-1 h-1 rounded-full bg-electric" />
              <span>Instant digital access after purchase.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
