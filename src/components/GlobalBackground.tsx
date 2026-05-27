import React from 'react';

export const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#FAFAFC]">
      {/* Drifting Premium Pastel Orbs */}
      <div className="absolute rounded-full filter blur-[90px] opacity-60 w-[800px] h-[800px] bg-radial from-purple-600/20 via-purple-800/5 to-transparent top-[-250px] left-[-150px] animate-orb-1" />
      <div className="absolute rounded-full filter blur-[80px] opacity-55 w-[650px] h-[650px] bg-radial from-amber-500/20 via-amber-600/5 to-transparent top-[35vh] right-[-150px] animate-orb-2" />
      <div className="absolute rounded-full filter blur-[85px] opacity-50 w-[600px] h-[600px] bg-radial from-purple-500/15 via-purple-900/5 to-transparent bottom-[-100px] left-[25%] animate-orb-3" />

      {/* High-fidelity light architectural grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,0,0,0.6) 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,0,0,0.6) 0%, transparent 100%)'
        }}
      />

      {/* Ultra-subtle procedural noise */}
      <div className="absolute inset-0 opacity-[0.015] bg-noise" />
    </div>
  );
};
