
import { useRef, useEffect } from 'react';
import anime from 'animejs'; // Import directly

export const PrescriptionHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    anime({
      targets: headerRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 1000,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <div 
      ref={headerRef}
      className="bg-gradient-to-r from-medical-secondary to-medical-accent py-16 md:py-20 opacity-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Prescription Analysis Tool
        </h1>
        <p className="text-blue-50 text-lg md:text-xl max-w-3xl mx-auto">
          Get detailed insights about your medications, potential interactions, and personalized health information.
        </p>
      </div>
    </div>
  );
};
