import { useEffect, useRef } from 'react';

const COVER_ASPECT = '1630 / 2030';
const BOOK_DEPTH = 14;

const PAGE_TEXTURE = `repeating-linear-gradient(
  to bottom,
  #e6e3dc 0px,
  #e6e3dc 2px,
  #d4d1c8 2px,
  #d4d1c8 3px
)`;

const SHADOW_REST = '0 14px 36px -14px rgba(0,0,0,0.28)';
const SHADOW_HOVER = '0 20px 50px -10px rgba(75,88,255,0.12), 0 12px 30px -12px rgba(0,0,0,0.3)';

interface BookMockupProps {
  className?: string;
  lazy?: boolean;
}

export default function BookMockup({ className = '', lazy = false }: BookMockupProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const scene = sceneRef.current;
    const book = bookRef.current;
    if (!scene || !book) return;

    let rafId = 0;
    let rect: DOMRect | null = null;

    const handleMouseEnter = () => {
      rect = scene.getBoundingClientRect();
      if (imgRef.current) imgRef.current.style.boxShadow = SHADOW_HOVER;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!rect) rect = scene.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rotY = 8 + x * 5;
        const rotX = -y * 4;
        book.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
        if (shadowRef.current) {
          shadowRef.current.style.transform = `translateX(${x * 14}px) translateY(${y * 5 + 18}px) scale(0.93)`;
          shadowRef.current.style.opacity = String(0.22 + Math.abs(x) * 0.08);
        }
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(rafId);
      rect = null;
      book.style.transform = 'rotateY(8deg) rotateX(0deg)';
      if (shadowRef.current) {
        shadowRef.current.style.transform = 'translateX(0) translateY(18px) scale(0.93)';
        shadowRef.current.style.opacity = '0.22';
      }
      if (imgRef.current) imgRef.current.style.boxShadow = SHADOW_REST;
    };

    scene.addEventListener('mouseenter', handleMouseEnter);
    scene.addEventListener('mousemove', handleMouseMove);
    scene.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      scene.removeEventListener('mouseenter', handleMouseEnter);
      scene.removeEventListener('mousemove', handleMouseMove);
      scene.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={sceneRef} className={`book-scene relative flex items-center justify-center ${className}`}>
      <div
        ref={shadowRef}
        className="book-shadow absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[50%] h-4 rounded-full bg-black/20 blur-2xl"
        style={{ opacity: 0.22, transform: 'translateX(0) translateY(18px) scale(0.93)' }}
      />

      <div
        ref={bookRef}
        className="book-3d relative"
        style={{ transform: 'rotateY(8deg) rotateX(0deg)' }}
      >
        {/* Back cover */}
        <div
          className="book-back-cover absolute inset-0 bg-[#0d0d0d] rounded-[2px]"
          style={{ transform: `translateZ(-${BOOK_DEPTH}px)` }}
        />

        {/* Spine — left edge */}
        <div
          className="book-spine absolute top-0 bottom-0"
          style={{
            left: `-${BOOK_DEPTH}px`,
            width: `${BOOK_DEPTH}px`,
            background: 'linear-gradient(to right, #0a0a0a, #161616)',
            transform: 'rotateY(90deg)',
            transformOrigin: 'right center',
            borderRadius: '1px',
          }}
        />

        {/* Fore-edge — right edge */}
        <div
          className="book-fore-edge absolute top-0 bottom-0"
          style={{
            right: `-${BOOK_DEPTH}px`,
            width: `${BOOK_DEPTH}px`,
            background: PAGE_TEXTURE,
            transform: 'rotateY(-90deg)',
            transformOrigin: 'left center',
            borderRadius: '1px',
          }}
        />

        {/* Tail edge — bottom */}
        <div
          className="book-tail-edge absolute left-0 right-0"
          style={{
            bottom: `-${BOOK_DEPTH}px`,
            height: `${BOOK_DEPTH}px`,
            background: PAGE_TEXTURE,
            transform: 'rotateX(-90deg)',
            transformOrigin: 'center top',
            borderRadius: '1px',
          }}
        />

        {/* Top edge */}
        <div
          className="book-top-edge absolute left-0 right-0"
          style={{
            top: `-${BOOK_DEPTH}px`,
            height: `${BOOK_DEPTH}px`,
            background: PAGE_TEXTURE,
            transform: 'rotateX(90deg)',
            transformOrigin: 'center bottom',
            borderRadius: '1px',
          }}
        />

        {/* Front cover */}
        <img
          ref={imgRef}
          src="/images/cover-md.webp"
          srcSet="/images/cover-sm.webp 500w, /images/cover-md.webp 800w, /images/cover-lg.webp 1200w"
          sizes="(max-width: 768px) 50vw, 28vw"
          alt="The AI Design Workflow field guide cover"
          width={1630}
          height={2030}
          loading={lazy ? 'lazy' : 'eager'}
          decoding={lazy ? 'async' : 'auto'}
          // @ts-expect-error fetchPriority is valid HTML but not in React's types yet
          fetchpriority={lazy ? 'auto' : 'high'}
          className="book-cover-face block object-cover rounded-r-[3px] rounded-l-[1px] relative"
          style={{
            width: 'clamp(220px, 28vw, 340px)',
            aspectRatio: COVER_ASPECT,
            boxShadow: SHADOW_REST,
            transition: 'box-shadow 0.4s ease',
          }}
        />
      </div>
    </div>
  );
}
