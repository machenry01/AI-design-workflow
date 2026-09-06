import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { ChevronDown } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

const FAQS = [
  {
    q: 'What exactly is this?',
    a: 'A 29-page digital field guide (PDF) that teaches designers a practical workflow for thinking, prompting and working better with AI — without handing over your design judgment.',
  },
  {
    q: 'Who is this for?',
    a: 'Designers who already know how to design and want to integrate AI into their process more deliberately. If you want AI to help you think rather than just generate, this is for you.',
  },
  {
    q: 'Is this a list of prompts?',
    a: 'No. This is about building a better workflow around AI — framing problems, giving context, evaluating responses, and deciding what happens next. It is not a copy-and-paste prompt library.',
  },
  {
    q: 'What format is it?',
    a: 'A 29-page digital PDF. You get instant access after purchase. No shipping, no waiting.',
  },
  {
    q: 'How much does it cost?',
    a: '₦7,500 one-time payment for instant digital access.',
  },
  {
    q: 'What happens after I buy?',
    a: 'You will be redirected to a secure checkout. After payment, you will receive instant access to download the PDF.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-base md:text-lg font-semibold text-ink tracking-tight">{q}</span>
        <ChevronDown
          size={20}
          className="text-ink/40 shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? '200px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="pb-5 text-base text-ink/55 leading-relaxed max-w-2xl">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="relative grain bg-warm-white py-20 md:py-32 overflow-hidden">
      <div ref={ref} className="relative max-w-[900px] mx-auto px-5 md:px-8">
        <div className={`text-center mb-12 section-reveal ${visible ? 'is-visible' : ''}`}>
          <span className="text-xs uppercase tracking-[0.2em] text-ink/40 font-semibold">
            FAQ
          </span>
          <h2
            className="mt-3 font-bold tracking-tight text-ink"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: '1.0', letterSpacing: '-0.02em' }}
          >
            QUESTIONS
          </h2>
        </div>

        <div className={`section-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className={`mt-12 text-center section-reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
          <CTAButton size="lg" />
        </div>
      </div>
    </section>
  );
}
