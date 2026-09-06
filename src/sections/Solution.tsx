import { useReveal } from '@/hooks/useReveal';
import BookMockup from '@/components/BookMockup';

const WORKFLOW_ROW1 = ['FRAME', 'RESEARCH', 'EXPLORE', 'DEFINE', 'BUILD'];
const WORKFLOW_ROW2 = ['CRITIQUE', 'REFINE', 'PRESENT', 'DELIVER', 'LEARN'];

export default function Solution() {
  const { ref: introRef, visible: introVisible } = useReveal<HTMLDivElement>();
  const { ref: wfRef, visible: wfVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="solution" className="relative grain bg-warm-white py-20 md:py-32 overflow-hidden">
      <div className="relative max-w-[1300px] mx-auto px-5 md:px-8">
        {/* Book + intro */}
        <div ref={introRef} className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center mb-16 md:mb-24">
          <div className="flex justify-center">
            <BookMockup className="scale-90" />
          </div>
          <div>
            <h2
              className={`font-bold tracking-tight text-ink reveal-up ${introVisible ? 'is-visible' : ''}`}
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                lineHeight: '1.0',
                letterSpacing: '-0.02em',
                opacity: introVisible ? 1 : undefined,
                transform: introVisible ? undefined : undefined,
              }}
            >
              <span className={introVisible ? 'is-visible' : ''} style={{ display: 'block' }}>
                A BETTER WAY
              </span>
              <span className={introVisible ? 'is-visible' : ''} style={{ display: 'block', transitionDelay: '100ms' }}>
                TO WORK WITH <span className="text-electric">AI.</span>
              </span>
            </h2>
            <p
              className={`mt-6 text-lg md:text-xl text-ink/60 font-medium leading-relaxed max-w-xl reveal-up ${introVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '250ms' }}
            >
              The AI Design Workflow is a practical field guide for designers who already know how to
              design — and want to learn how to think alongside AI without handing over their judgment.
            </p>
          </div>
        </div>

        {/* Workflow visualization */}
        <div ref={wfRef} className="mt-8">
          <div className="text-center mb-12">
            <span className={`text-xs uppercase tracking-[0.2em] text-ink/40 font-semibold reveal-up ${wfVisible ? 'is-visible' : ''}`}>
              The Ten-Stage Workflow
            </span>
          </div>

          {/* Row 1: FRAME → RESEARCH → EXPLORE → DEFINE → BUILD */}
          <div className="flex flex-col items-center gap-0">
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-3 md:gap-0">
              {WORKFLOW_ROW1.map((stage, i) => (
                <div key={stage} className="flex items-center">
                  <div
                    className={`workflow-node ${wfVisible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <div className="flex items-center gap-3 px-4 py-3 md:px-5 md:py-4 rounded-xl border border-ink/10 bg-warm-white hover:border-electric/30 hover:bg-electric/5 transition-colors">
                      <span className="text-xs font-bold text-electric tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm md:text-base font-semibold tracking-tight text-ink whitespace-nowrap">
                        {stage}
                      </span>
                    </div>
                  </div>
                  {i < WORKFLOW_ROW1.length - 1 && (
                    <div className="hidden md:block mx-1">
                      <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                        <line
                          className={`workflow-line ${wfVisible ? 'is-visible' : ''}`}
                          x1="0" y1="6" x2="28" y2="6"
                          stroke="#4B58FF" strokeWidth="1.5"
                          style={{ transitionDelay: `${i * 150 + 100}ms` }}
                        />
                        <path d="M28 6 L24 3 M28 6 L24 9" stroke="#4B58FF" strokeWidth="1.5" fill="none" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Connector down */}
            <div className="my-2 md:my-3">
              <svg width="12" height="40" viewBox="0 0 12 40" fill="none" className="mx-auto">
                <line
                  className={`workflow-line ${wfVisible ? 'is-visible' : ''}`}
                  x1="6" y1="0" x2="6" y2="34"
                  stroke="#4B58FF" strokeWidth="1.5"
                  style={{ transitionDelay: '750ms' }}
                />
                <path d="M6 34 L3 30 M6 34 L9 30" stroke="#4B58FF" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            {/* Row 2: CRITIQUE → REFINE → PRESENT → DELIVER → LEARN */}
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-3 md:gap-0">
              {WORKFLOW_ROW2.map((stage, i) => (
                <div key={stage} className="flex items-center">
                  <div
                    className={`workflow-node ${wfVisible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: `${900 + i * 150}ms` }}
                  >
                    <div className="flex items-center gap-3 px-4 py-3 md:px-5 md:py-4 rounded-xl border border-ink/10 bg-warm-white hover:border-electric/30 hover:bg-electric/5 transition-colors">
                      <span className="text-xs font-bold text-electric tabular-nums">
                        {String(i + 6).padStart(2, '0')}
                      </span>
                      <span className="text-sm md:text-base font-semibold tracking-tight text-ink whitespace-nowrap">
                        {stage}
                      </span>
                    </div>
                  </div>
                  {i < WORKFLOW_ROW2.length - 1 && (
                    <div className="hidden md:block mx-1">
                      <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                        <line
                          className={`workflow-line ${wfVisible ? 'is-visible' : ''}`}
                          x1="0" y1="6" x2="28" y2="6"
                          stroke="#4B58FF" strokeWidth="1.5"
                          style={{ transitionDelay: `${900 + i * 150 + 100}ms` }}
                        />
                        <path d="M28 6 L24 3 M28 6 L24 9" stroke="#4B58FF" strokeWidth="1.5" fill="none" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
