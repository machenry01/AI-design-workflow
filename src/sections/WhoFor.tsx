import { useReveal } from '@/hooks/useReveal';

const FOR_YOU = [
  'Already use AI but keep getting generic results.',
  'Want AI to help you think, not just generate.',
  'Want a better process for knowing what to ask.',
  'Want to use AI without losing your design judgment.',
  'Want something practical you can actually return to while working.',
];

const NOT_FOR_YOU = [
  'You want a giant list of copy-and-paste prompts.',
  'You want AI to replace your design thinking.',
  'You are looking for a get-rich-quick AI guide.',
];

export default function WhoFor() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative grain bg-warm-grey py-20 md:py-32 overflow-hidden">
      <div ref={ref} className="relative max-w-[1100px] mx-auto px-5 md:px-8">
        {/* Headline */}
        <h2
          className={`font-bold tracking-tight text-ink reveal-up ${visible ? 'is-visible' : ''}`}
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4.5rem)', lineHeight: '1.0', letterSpacing: '-0.02em' }}
        >
          THIS IS FOR YOU
          <br />
          IF YOU...
        </h2>

        {/* For you list */}
        <div className="mt-12 md:mt-16 space-y-4 md:space-y-5">
          {FOR_YOU.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 reveal-up ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <div className="mt-2.5 w-6 h-px bg-electric shrink-0" />
              <p className="text-lg md:text-2xl font-medium text-ink leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 md:mt-16 mb-10 md:mb-12">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-ink/10" />
            <span className="text-xs uppercase tracking-[0.2em] text-ink/40 font-semibold">
              Not For You If
            </span>
            <div className="flex-1 h-px bg-ink/10" />
          </div>
        </div>

        {/* Not for you list */}
        <div className="space-y-3 md:space-y-4">
          {NOT_FOR_YOU.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 reveal-up ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${500 + i * 80}ms` }}
            >
              <div className="mt-2.5 w-6 h-px bg-ink/20 shrink-0" />
              <p className="text-base md:text-xl font-medium text-ink/50 leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
