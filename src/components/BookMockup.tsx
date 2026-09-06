import { useEffect, useRef, useState } from 'react';

const COVER_ASPECT = '1630 / 2030';

export default function BookMockup({ className = '' }: { className?: string }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Skip mouse-reactive 3D on touch/coarse-pointer devices for performance
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const scene = sceneRef.current;
    const book = bookRef.current;
    if (!scene || !book) return;

    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = scene.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rotY = 8 + x * 18;
        const rotX = -y * 12;
        const shadowX = x * 20;
        const shadowY = y * 10 + 20;
        book.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
        const shadow = scene.querySelector('.book-shadow') as HTMLDivElement | null;
        if (shadow) {
          shadow.style.transform = `translateX(${shadowX}px) translateY(${shadowY}px) scale(0.95)`;
          shadow.style.opacity = String(0.3 + Math.abs(x) * 0.15);
        }
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(rafId);
      book.style.transform = 'rotateY(8deg) rotateX(0deg)';
      const shadow = scene.querySelector('.book-shadow') as HTMLDivElement | null;
      if (shadow) {
        shadow.style.transform = 'translateX(0) translateY(20px) scale(0.95)';
        shadow.style.opacity = '0.3';
      }
    };

    scene.addEventListener('mousemove', handleMouseMove);
    scene.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      scene.removeEventListener('mousemove', handleMouseMove);
      scene.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={sceneRef} className={`book-scene relative flex items-center justify-center ${className}`}>
      <div
        className="book-shadow absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[55%] h-6 rounded-full bg-black/30 blur-2xl transition-all duration-300"
        style={{ opacity: 0.3 }}
      />

      <div
        ref={bookRef}
        className="book-3d relative"
        style={{ transform: 'rotateY(8deg) rotateX(0deg)' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          src="/images/cover-md.webp"
          srcSet="/images/cover-sm.webp 500w, /images/cover-md.webp 800w, /images/cover-lg.webp 1200w"
          sizes="(max-width: 768px) 50vw, 28vw"
          alt="The AI Design Workflow field guide cover"
          width={1630}
          height={2030}
          className="book-cover-face block object-cover rounded-r-[3px] rounded-l-[1px]"
          style={{
            width: 'clamp(220px, 28vw, 340px)',
            aspectRatio: COVER_ASPECT,
            boxShadow: isHovering
              ? '0 30px 80px -12px rgba(75,88,255,0.25), 0 20px 60px -20px rgba(0,0,0,0.5)'
              : '0 20px 60px -20px rgba(0,0,0,0.4)',
            transition: 'box-shadow 0.4s ease',
          }}
        />
      </div>
    </div>
  );
}
