
import { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import * as anime from 'animejs';

export const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime.default({
            targets: ctaRef.current,
            opacity: [0, 1],
            scale: [0.95, 1],
            duration: 800,
            easing: 'easeOutQuad'
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ctaRef}
          className="bg-gradient-to-r from-medical-primary to-medical-secondary rounded-2xl shadow-xl p-8 md:p-12 opacity-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start your healthcare journey today</h2>
              <p className="text-blue-50 mb-6 text-lg">
                Get access to top doctors, personalized care, and advanced prescription analysis tools with just a few clicks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="outline" className="bg-white text-medical-primary border-white hover:bg-blue-50 font-medium">
                  Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10 font-medium">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img 
                src="https://img.freepik.com/free-vector/medical-video-call-consultation-illustration_88138-415.jpg"
                alt="Telemedicine Illustration"
                className="max-h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
