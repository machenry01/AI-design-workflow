import { useReveal } from '@/hooks/useReveal';
import CTAButton from '@/components/CTAButton';
import { PRICE } from '@/lib/config';

export default function FinalCTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative grain grain-light overflow-hidden py-24 md:py-40" style={{ background: 'linear-gradient(180deg, #4B58FF 0%, #2A35D0 100%)' }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.1) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none drift"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative max-w-[1100px] mx-auto px-5 md:px-8 text-center">
        <div className={`section-reveal ${visible ? 'is-visible' : ''}`}>
          <h2
            className="font-bold tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: '0.98', letterSpacing: '-0.03em' }}
          >
            THE TOOL ISN'T THE ADVANTAGE.
          </h2>
          <h2
            className="font-bold tracking-tight text-white/60 mt-3"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: '0.98', letterSpacing: '-0.03em' }}
          >
            KNOWING HOW TO WORK WITH IT IS.
          </h2>
        </div>

        <p className={`mt-10 text-lg md:text-xl text-white/70 font-medium max-w-xl mx-auto section-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          Start building a more deliberate AI-assisted design workflow.
        </p>

        <div className={`mt-10 section-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '250ms' }}>
          <CTAButton
            label={`GET THE AI DESIGN WORKFLOW — ${PRICE}`}
            size="xl"
            variant="light"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
