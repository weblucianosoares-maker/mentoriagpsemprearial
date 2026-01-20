import React, { useEffect, useState } from 'react';
import { Button } from './Button';

export const StickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar only after scrolling past the Hero section
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t-4 border-red-600 z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.2)] animate-[slideUp_0.3s_ease-out]">
      <div className="container mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-8 max-w-6xl">
        
        <div className="hidden md:block">
          <p className="text-slate-900 text-lg font-bold">
             Pare de sofrer sozinho. <span className="text-red-600">Garanta sua vaga no GPS agora.</span>
          </p>
        </div>
        
        {/* Mobile simplified text */}
        <div className="md:hidden">
          <p className="text-slate-900 text-sm text-center font-bold">
            Vagas Limitadas. <span className="text-red-600">Risco Zero.</span>
          </p>
        </div>

        <div className="w-full md:w-auto">
          <Button 
            className="w-full md:w-auto py-2 md:py-3 px-6 text-base" 
            variant="success"
          >
            QUERO ENTRAR AGORA
          </Button>
        </div>
      </div>
    </div>
  );
};