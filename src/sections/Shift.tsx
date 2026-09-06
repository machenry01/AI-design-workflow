import { useReveal } from '@/hooks/useReveal';

export default function Shift() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative grain grain-light overflow-hidden py-20 md:py-32" style={{ background: 'linear-gradient(180deg, #4B58FF 0%, #2A35D0 100%)' }}>
      {/* Ambient forms */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative max-w-[1200px] mx-auto px-5 md:px-8 text-center">
        {/* Large statement */}
        <h2
          className="font-bold tracking-tight text-white"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: '0.98', letterSpacing: '-0.03em' }}
        >
          <span
            className={`word-reveal inline-block ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: visible ? '0ms' : '0ms' }}
          >
            THE PROBLEM
          </span>{' '}
          <br className="md:hidden" />
          <span
            className={`word-reveal inline-block ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: visible ? '100ms' : '0ms' }}
          >
            ISN'T THE TOOL.
          </span>
        </h2>
        <h2
          className="font-bold tracking-tight text-white/60 mt-3"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: '0.98', letterSpacing: '-0.03em' }}
        >
          <span
            className={`word-reveal inline-block ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: visible ? '300ms' : '0ms' }}
          >
            IT'S THE
          </span>{' '}
          <span
            className={`word-reveal inline-block text-white ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: visible ? '400ms' : '0ms' }}
          >
            WORKFLOW.
          </span>
        </h2>

        {/* Supporting copy */}
        <div className="mt-10 max-w-2xl mx-auto space-y-4">
          <p
            className={`word-reveal text-lg md:text-xl text-white/80 font-medium block ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: visible ? '600ms' : '0ms' }}
          >
            The advantage isn't knowing which AI tool to open.
          </p>
          <p
            className={`word-reveal text-lg md:text-xl text-white/60 block ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: visible ? '700ms' : '0ms' }}
          >
            Everyone has access to the tools now.
          </p>
          <p
            className={`word-reveal text-lg md:text-xl text-white/80 font-medium block ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: visible ? '850ms' : '0ms' }}
          >
            The advantage is knowing how to frame the problem, give the right context, ask better
            questions, evaluate the response and decide what happens next.
          </p>
        </div>

        {/* Product introduction */}
        <div className="mt-14 md:mt-20">
          <div
            className={`word-reveal inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: visible ? '1100ms' : '0ms' }}
          >
            <div className="w-2 h-2 rounded-full bg-white subtle-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
              Introducing
            </span>
          </div>
          <h3
            className={`word-reveal font-bold tracking-tight text-white mt-6 ${visible ? 'is-visible' : ''}`}
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.0', letterSpacing: '-0.02em', transitionDelay: visible ? '1200ms' : '0ms' }}
          >
            THE AI DESIGN WORKFLOW
          </h3>
        </div>
      </div>
    </section>
  );
}
