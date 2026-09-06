import { useReveal } from '@/hooks/useReveal';

interface PagePreviewProps {
  pageNum: string;
  title: string;
  variant: 'cover' | 'workflow' | 'prompt' | 'critique' | 'frame' | 'refine';
  className?: string;
}

function PagePreview({ pageNum, title, variant, className = '' }: PagePreviewProps) {
  return (
    <div
      className={`page-preview relative bg-warm-white rounded-md overflow-hidden border border-ink/8 ${className}`}
      style={{
        aspectRatio: '3 / 4',
        boxShadow: '0 8px 30px -10px rgba(0,0,0,0.12), 0 2px 8px -4px rgba(0,0,0,0.08)',
      }}
    >
      <div className="absolute inset-0 p-4 md:p-5 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-ink/30 font-medium">
            {pageNum}
          </span>
          <div className="w-1 h-1 rounded-full bg-electric/40" />
        </div>

        {variant === 'cover' && (
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-[10px] uppercase tracking-[0.2em] text-ink/30 mb-2">Field Guide</div>
            <div className="font-bold text-ink leading-tight" style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1.1rem)' }}>
              THE AI DESIGN
              <br />
              WORKFLOW
            </div>
            <div className="mt-2 w-8 h-px bg-electric" />
          </div>
        )}

        {variant === 'workflow' && (
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="text-[9px] font-bold text-ink/70 mb-1">The Workflow</div>
            {['01 Frame', '02 Research', '03 Explore', '04 Define', '05 Build'].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-px bg-electric/40" />
                <span className="text-[8px] md:text-[9px] text-ink/50 font-medium">{s}</span>
              </div>
            ))}
          </div>
        )}

        {variant === 'prompt' && (
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="text-[9px] font-bold text-ink/70 mb-1">Structured Prompt</div>
            <div className="space-y-1">
              {[80, 65, 90, 55].map((w, i) => (
                <div key={i} className="h-1 bg-ink/10 rounded" style={{ width: `${w}%` }} />
              ))}
            </div>
            <div className="mt-2 px-1.5 py-1 rounded bg-electric/10">
              <div className="text-[7px] md:text-[8px] text-electric font-semibold">PERSPECTIVE</div>
            </div>
          </div>
        )}

        {variant === 'critique' && (
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="text-[9px] font-bold text-ink/70 mb-1">Critique Framework</div>
            <div className="space-y-1">
              {['Structural', 'Visual', 'Hierarchy'].map((s, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-sm border border-electric/40" />
                  <span className="text-[7px] md:text-[8px] text-ink/50">{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {variant === 'frame' && (
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-[9px] font-bold text-ink/70 mb-2">01 Frame</div>
            <div className="space-y-1">
              {[90, 70, 85, 60].map((w, i) => (
                <div key={i} className="h-1 bg-ink/8 rounded" style={{ width: `${w}%` }} />
              ))}
            </div>
            <div className="mt-2 text-[7px] md:text-[8px] text-ink/40 italic">
              Define the problem before opening a tool.
            </div>
          </div>
        )}

        {variant === 'refine' && (
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="text-[9px] font-bold text-ink/70 mb-1">07 Refine</div>
            <div className="grid grid-cols-2 gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-3 rounded-sm bg-ink/5" />
              ))}
            </div>
            <div className="mt-1 text-[7px] md:text-[8px] text-ink/40">
              Iterate with intention.
            </div>
          </div>
        )}

        <div className="mt-auto pt-2 border-t border-ink/5">
          <span className="text-[7px] md:text-[8px] uppercase tracking-[0.1em] text-ink/30 font-medium">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

const PAGES = [
  { pageNum: 'p. 04', title: 'The Workflow', variant: 'workflow' as const },
  { pageNum: 'p. 08', title: 'Frame', variant: 'frame' as const },
  { pageNum: 'p. 14', title: 'Structured Prompting', variant: 'prompt' as const },
  { pageNum: 'p. 20', title: 'Critique', variant: 'critique' as const },
  { pageNum: 'p. 24', title: 'Refine', variant: 'refine' as const },
  { pageNum: 'p. 01', title: 'Cover', variant: 'cover' as const },
];

export default function WhatsInside() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="inside" className="relative grain bg-warm-white py-20 md:py-32 overflow-hidden">
      <div ref={ref} className="relative max-w-[1300px] mx-auto px-5 md:px-8">
        {/* Headline */}
        <div className={`text-center mb-4 section-reveal ${visible ? 'is-visible' : ''}`}>
          <span className="text-xs uppercase tracking-[0.2em] text-ink/40 font-semibold">
            What's Inside
          </span>
        </div>
        <h2
          className={`font-bold tracking-tight text-ink text-center section-reveal ${visible ? 'is-visible' : ''}`}
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: '1.0', letterSpacing: '-0.02em', transitionDelay: '100ms' }}
        >
          WHAT'S INSIDE THE GUIDE
        </h2>

        {/* Page previews */}
        <div className="mt-14 md:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {PAGES.map((page, i) => (
              <div
                key={i}
                className={`section-reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${200 + i * 60}ms` }}
              >
                <PagePreview
                  pageNum={page.pageNum}
                  title={page.title}
                  variant={page.variant}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product facts */}
        <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { label: '29 pages', sub: 'Concise & practical' },
            { label: 'Digital PDF', sub: 'Instant access' },
            { label: 'Field Guide', sub: 'Edition One' },
          ].map((fact, i) => (
            <div key={i} className={`text-center section-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: `${500 + i * 80}ms` }}>
              <div className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
                {fact.label}
              </div>
              <div className="text-xs uppercase tracking-[0.1em] text-ink/40 font-medium mt-1">
                {fact.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
