
import { useRef, useEffect } from 'react';
import anime from 'animejs'; // Import directly

export const DoctorHeader = () => {
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
      className="bg-gradient-to-r from-medical-primary to-medical-secondary py-16 md:py-20 opacity-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Meet Our Expert Doctors
        </h1>
        <p className="text-blue-50 text-lg md:text-xl max-w-3xl mx-auto">
          Connect with board-certified specialists who provide personalized care through secure video consultations.
        </p>
      </div>
    </div>
  );
};
