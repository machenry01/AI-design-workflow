import { useReveal } from '@/hooks/useReveal';

const PROBLEM_STATEMENTS = [
  "You've probably already used AI for design.",
  'You ask it for ideas.',
  'You ask it to critique a screen.',
  'You ask it for UX suggestions.',
  'You ask it to improve a concept.',
];

export default function Problem() {
  const { ref: headRef, visible: headVisible } = useReveal<HTMLDivElement>();
  const { ref: bodyRef, visible: bodyVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="problem" className="relative grain grain-light bg-ink text-white py-20 md:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(75,88,255,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Headline */}
        <div ref={headRef}>
          <h2
            className="font-bold tracking-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: '1.0', letterSpacing: '-0.02em' }}
          >
            {['AI', 'MADE', 'IT', 'EASY', 'TO', 'GET', 'AN', 'ANSWER.'].map((word, i) => (
              <span
                key={i}
                className={`word-reveal inline-block ${headVisible ? 'is-visible' : ''}`}
                style={{
                  transitionDelay: headVisible ? `${i * 70}ms` : '0ms',
                }}
              >
                <span className={word === 'ANSWER.' ? 'text-electric' : ''}>{word}&nbsp;</span>
              </span>
            ))}
          </h2>
          <h2
            className="font-bold tracking-tight mt-2"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: '1.0', letterSpacing: '-0.02em' }}
          >
            {['NOT', 'TO', 'GET', 'THE', 'RIGHT', 'ONE.'].map((word, i) => (
              <span
                key={i}
                className={`word-reveal inline-block ${headVisible ? 'is-visible' : ''}`}
                style={{
                  transitionDelay: headVisible ? `${560 + i * 70}ms` : '0ms',
                }}
              >
                <span className={word === 'RIGHT' ? 'text-electric' : ''}>{word}&nbsp;</span>
              </span>
            ))}
          </h2>
        </div>

        {/* Body — short blocks */}
        <div ref={bodyRef} className="mt-12 md:mt-16 max-w-2xl space-y-3">
          {PROBLEM_STATEMENTS.map((line, i) => (
            <p
              key={i}
              className={`word-reveal text-lg md:text-xl text-white/70 font-medium block ${bodyVisible ? 'is-visible' : ''}`}
              style={{
                transitionDelay: bodyVisible ? `${i * 100}ms` : '0ms',
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Conclusion */}
        <div ref={bodyRef} className="mt-10 max-w-2xl">
          <p
            className={`word-reveal text-lg md:text-xl text-white/50 font-medium block ${bodyVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: bodyVisible ? '600ms' : '0ms' }}
          >
            Sometimes it's useful.
          </p>
          <p
            className={`word-reveal text-lg md:text-xl text-white/50 font-medium block mt-1 ${bodyVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: bodyVisible ? '700ms' : '0ms' }}
          >
            Sometimes it gives you ten polished answers that don't actually solve the problem.
          </p>

          <div className="mt-10 pt-10 border-t border-white/10">
            <p
              className={`word-reveal text-xl md:text-2xl font-semibold text-white block ${bodyVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: bodyVisible ? '900ms' : '0ms' }}
            >
              The issue isn't that AI isn't powerful.
            </p>
            <p
              className={`word-reveal text-xl md:text-2xl font-semibold text-electric block mt-2 ${bodyVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: bodyVisible ? '1000ms' : '0ms' }}
            >
              The issue is what happens BEFORE and AFTER the prompt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
