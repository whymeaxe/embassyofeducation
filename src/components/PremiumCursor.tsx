import React, { useEffect, useRef, useState } from 'react';

export const PremiumCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);

  useEffect(() => {
    // Detect mobile / touch devices to gracefully hide custom cursor
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive-hover') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    let animationFrameId: number;

    const render = () => {
      // Interpolate ring position for smooth floating feel
      ringX.current += (mouseX.current - ringX.current - 14) * 0.15;
      ringY.current += (mouseY.current - ringY.current - 14) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX.current}px, ${ringY.current}px)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny golden precise dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-amber-500 rounded-full pointer-events-none z-[9998] transition-opacity duration-300 shadow-sm"
      />

      {/* Elegant smooth ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9997] rounded-full transition-all duration-300 ease-out ${
          isHovered
            ? 'w-12 h-12 bg-amber-500/10 border border-amber-600/40 -ml-2.5 -mt-2.5'
            : 'w-7 h-7 border border-amber-600/40'
        }`}
      />
    </>
  );
};
