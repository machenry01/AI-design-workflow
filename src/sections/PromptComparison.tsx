import { useReveal } from '@/hooks/useReveal';

const CONCEPTS = ['CONTEXT', 'PERSPECTIVE', 'CONSTRAINTS', 'EVALUATION', 'ASSUMPTIONS', 'ITERATION'];

const STRUCTURED_PROMPT = `Review this landing page from three perspectives: a first-time visitor with no category knowledge, a conversion-focused product marketer, and a senior product designer.

Evaluate the page independently from each perspective.

Identify the highest-impact problems before proposing solutions.

Separate structural problems from visual problems.

Rank issues by potential impact rather than visual obviousness.

State the assumptions you're making.

Do not recommend solutions until the underlying problem has been established.`;

export default function PromptComparison() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative grain grain-light bg-ink text-white py-20 md:py-32 overflow-hidden">
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(75,88,255,0.1) 0%, transparent 70%)' }}
      />

      <div ref={ref} className="relative max-w-[1300px] mx-auto px-5 md:px-8">
        <div className={`text-center mb-12 section-reveal ${visible ? 'is-visible' : ''}`}>
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">
            The "Oh, I Get It" Moment
          </span>
        </div>

        {/* Comparison */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Generic prompt */}
          <div className={`section-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <div className="border border-white/10 rounded-2xl p-6 md:p-8 bg-white/[0.03] h-full">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-xs uppercase tracking-[0.15em] text-white/40 font-medium">
                  Generic Prompt
                </span>
              </div>
              <p className="text-lg md:text-xl text-white/50 font-medium italic leading-relaxed">
                "Give me ideas for improving this landing page."
              </p>
              <div className="mt-6 space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/20 mt-2.5 shrink-0" />
                    <p className="text-sm text-white/30 leading-relaxed">
                      {['Add a hero section with a stronger headline', 'Use more whitespace', 'Try a different color palette'][i - 1]}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-sm font-semibold text-white/60">
                  MORE IDEAS <span className="text-white/30 mx-1">≠</span> BETTER THINKING.
                </p>
              </div>
            </div>
          </div>

          {/* Structured prompt */}
          <div className={`section-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="border border-electric/30 rounded-2xl p-6 md:p-8 bg-electric/[0.06] h-full relative overflow-hidden">
              <div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(75,88,255,0.15) 0%, transparent 70%)' }}
              />
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-electric subtle-pulse" />
                  <span className="text-xs uppercase tracking-[0.15em] text-electric font-medium">
                    Structured Approach
                  </span>
                </div>
                <div className="space-y-3">
                  {STRUCTURED_PROMPT.split('\n\n').map((para, i) => (
                    <p key={i} className="text-sm md:text-base text-white/80 leading-relaxed font-medium">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-electric/20">
                  <p className="text-sm font-semibold text-electric">
                    STRUCTURED THINKING → BETTER OUTPUT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Concepts */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 section-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
          {CONCEPTS.map((concept) => (
            <div
              key={concept}
              className="px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-sm font-semibold text-electric tracking-wide"
            >
              {concept}
            </div>
          ))}
        </div>

        {/* Headline */}
        <div className={`text-center max-w-3xl mx-auto section-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <h2
            className="font-bold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', lineHeight: '1.0', letterSpacing: '-0.02em' }}
          >
            IT'S NOT ABOUT WRITING LONGER PROMPTS.
          </h2>
          <h2
            className="font-bold tracking-tight text-electric mt-2"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', lineHeight: '1.0', letterSpacing: '-0.02em' }}
          >
            IT'S ABOUT THINKING BETTER BEFORE YOU WRITE THEM.
          </h2>
        </div>
      </div>
    </section>
  );
}
