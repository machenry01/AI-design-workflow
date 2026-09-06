import { useEffect, useRef, useState } from 'react';

export default function BookMockup({ className = '' }: { className?: string }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
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
        const shadow = scene.querySelector('.book-shadow') as HTMLDivElement;
        if (shadow) {
          shadow.style.transform = `translateX(${shadowX}px) translateY(${shadowY}px) scale(0.95)`;
          shadow.style.opacity = `${0.3 + Math.abs(x) * 0.15}`;
        }
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(rafId);
      book.style.transform = 'rotateY(8deg) rotateX(0deg)';
      const shadow = scene.querySelector('.book-shadow') as HTMLDivElement;
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
          src="/images/The-AI-Design-Workflow-Cover.png"
          alt="The AI Design Workflow field guide cover"
          className="book-cover-face block object-contain rounded-r-[3px] rounded-l-[1px]"
          style={{
            width: 'clamp(220px, 28vw, 340px)',
            aspectRatio: '1365 / 1536',
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
