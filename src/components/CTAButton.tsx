import { ArrowRight } from 'lucide-react';
import { SELAR_URL, PRICE } from '@/lib/config';

interface CTAButtonProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'blue' | 'light' | 'outline';
  className?: string;
  showArrow?: boolean;
}

export default function CTAButton({
  label = `GET THE GUIDE — ${PRICE}`,
  size = 'lg',
  variant = 'blue',
  className = '',
  showArrow = true,
}: CTAButtonProps) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-7 py-3.5 text-base',
    xl: 'px-8 py-4 text-lg',
  };

  const variants = {
    blue: 'bg-electric text-white hover:bg-electric-dark',
    light: 'bg-warm-white text-ink hover:bg-white',
    outline: 'border-2 border-electric text-electric hover:bg-electric hover:text-white',
  };

  return (
    <a
      href={SELAR_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-btn inline-flex items-center gap-2 rounded-xl font-semibold tracking-tight ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span>{label}</span>
      {showArrow && <ArrowRight size={size === 'xl' ? 22 : 18} className="cta-arrow" strokeWidth={2.5} />}
    </a>
  );
}
