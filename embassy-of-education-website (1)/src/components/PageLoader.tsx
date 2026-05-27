import React, { useEffect, useState } from 'react';

export const PageLoader: React.FC = () => {
  const [percentage, setPercentage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 8;
      if (current >= 100) {
        current = 100;
        setPercentage(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => setIsUnmounted(true), 800);
        }, 400);
      } else {
        setPercentage(Math.floor(current));
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  if (isUnmounted) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#FAFAFC] z-[9999] flex flex-col items-center justify-center gap-7 transition-all duration-800 ease-in-out ${
        isLoaded ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Brand Wordmark */}
      <div className="text-[11px] font-semibold tracking-[6px] uppercase text-slate-400">
        <b className="text-amber-500 font-bold">Embassy</b> of Education
      </div>

      {/* Progress Bar Track */}
      <div className="w-44 h-[2px] bg-purple-950/10 rounded-full overflow-hidden relative">
        <div
          className="h-full bg-gradient-to-r from-purple-600 via-purple-500 to-amber-500 rounded-full transition-all duration-100 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Percentage Output */}
      <div className="text-[10px] tracking-[3px] text-slate-400 font-mono">
        {percentage}%
      </div>
    </div>
  );
};
