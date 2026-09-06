import { useReveal } from '@/hooks/useReveal';

const PROBLEM_STATEMENTS = [
  "You've probably already used AI for design.",
  'You ask it for ideas.',
  'You ask it to critique a screen.',
  'You ask it for UX suggestions.',
  'You ask it to improve a concept.',
];

export default function Problem() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="problem" className="relative grain grain-light bg-ink text-white py-20 md:py-32 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(75,88,255,0.12) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative max-w-[1200px] mx-auto px-5 md:px-8">
        <div className={`section-reveal ${visible ? 'is-visible' : ''}`}>
          <h2
            className="font-bold tracking-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: '1.0', letterSpacing: '-0.02em' }}
          >
            AI MADE IT EASY TO GET <span className="text-electric">AN ANSWER.</span>
          </h2>
          <h2
            className="font-bold tracking-tight mt-2"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: '1.0', letterSpacing: '-0.02em' }}
          >
            NOT TO GET THE <span className="text-electric">RIGHT</span> ONE.
          </h2>
        </div>

        <div className={`mt-12 md:mt-16 max-w-2xl space-y-3 section-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          {PROBLEM_STATEMENTS.map((line, i) => (
            <p key={i} className="text-lg md:text-xl text-white/70 font-medium">
              {line}
            </p>
          ))}
        </div>

        <div className={`mt-10 max-w-2xl section-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '250ms' }}>
          <p className="text-lg md:text-xl text-white/50 font-medium">
            Sometimes it's useful.
          </p>
          <p className="text-lg md:text-xl text-white/50 font-medium mt-1">
            Sometimes it gives you ten polished answers that don't actually solve the problem.
          </p>

          <div className="mt-10 pt-10 border-t border-white/10">
            <p className="text-xl md:text-2xl font-semibold text-white">
              The issue isn't that AI isn't powerful.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-electric mt-2">
              The issue is what happens BEFORE and AFTER the prompt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
