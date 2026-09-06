import BookMockup from '@/components/BookMockup';
import CTAButton from '@/components/CTAButton';
import { PRICE } from '@/lib/config';

export default function Hero() {
  return (
    <section id="hero" className="relative grain overflow-hidden bg-warm-white pt-32 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full blur-[120px] drift"
          style={{ background: 'radial-gradient(circle, rgba(75,88,255,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] rounded-full blur-[100px] drift2"
          style={{ background: 'radial-gradient(circle, rgba(75,88,255,0.05) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #F7F7F5 0%, #F0F0EB 50%, #F7F7F5 100%)' }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <div
              className="flex items-center gap-3 mb-6 hero-fade-in"
              style={{ animationDelay: '0ms' }}
            >
              <div className="w-2 h-2 rounded-full bg-electric subtle-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-ink/50 font-medium">
                A Practical Field Guide
              </span>
            </div>

            <h1
              className="font-bold tracking-tight text-ink"
              style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)', lineHeight: '0.95', letterSpacing: '-0.03em' }}
            >
              <div className="overflow-hidden">
                <div className="hero-slide-up" style={{ animationDelay: '0ms' }}>
                  AI ISN'T THE DESIGNER.
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="hero-slide-up" style={{ animationDelay: '100ms' }}>
                  YOU <span className="text-electric">ARE.</span>
                </div>
              </div>
            </h1>

            <p
              className="mt-6 text-sub text-ink/70 font-medium max-w-xl hero-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              A practical field guide to thinking, prompting and working better with AI as a designer.
            </p>

            <p
              className="mt-4 text-base text-ink/55 leading-relaxed max-w-xl hero-fade-in"
              style={{ animationDelay: '300ms' }}
            >
              AI can generate ideas, explore directions, critique work and accelerate production. But
              knowing what to ask, what to reject and what deserves another iteration is still your job.
              That's what this guide is about.
            </p>

            <div
              className="mt-8 hero-fade-in"
              style={{ animationDelay: '400ms' }}
            >
              <CTAButton
                label={`GET THE AI DESIGN WORKFLOW — ${PRICE}`}
                size="xl"
                className="w-full sm:w-auto"
              />
            </div>

            <div
              className="mt-4 flex items-center gap-4 text-sm text-ink/45 hero-fade-in"
              style={{ animationDelay: '500ms' }}
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
          <div className="order-1 lg:order-2 flex justify-center hero-fade-in" style={{ animationDelay: '100ms' }}>
            <BookMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
