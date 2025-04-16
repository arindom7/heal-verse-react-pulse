
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnimeEffect } from "@/hooks/useAnimeEffect";

export const Hero = () => {
  const heroRef = useAnimeEffect<HTMLDivElement>({
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 1200,
    easing: 'easeOutExpo',
  });

  const imageRef = useAnimeEffect<HTMLDivElement>({
    opacity: [0, 1],
    translateX: [50, 0],
    duration: 1200,
    easing: 'easeOutExpo',
    delay: 300,
  });

  return (
    <section className="pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className="space-y-8">
            <div>
              <div className="inline-block py-1 px-3 rounded-full bg-blue-50 text-medical-primary mb-4">
                <span className="text-sm font-medium flex items-center">
                  #1 Telemedicine Platform <CheckCircle size={16} className="ml-1" />
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Healthcare at Your <span className="text-medical-primary">Fingertips</span>
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Connect with top doctors, analyze prescriptions, and get expert medical advice from the comfort of your home, anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary font-medium text-base">
                Find a Doctor <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="font-medium text-base">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="pt-4">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                        alt={`User ${i}`} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold">2,000+ Patients</div>
                  <div className="text-sm text-gray-500">Trust our services</div>
                </div>
              </div>
            </div>
          </div>
          <div 
            ref={imageRef} 
            className="hidden lg:block relative"
          >
            <div className="relative z-10 animate-float">
              <img 
                src="https://img.freepik.com/free-photo/young-woman-doctor-white-coat-with-stethoscope-looking-camera-smiling-confident-standing-white-background_141793-88566.jpg" 
                alt="Doctor" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
                <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle />
                </div>
                <div>
                  <div className="font-semibold">Verified Doctors</div>
                  <div className="text-sm text-gray-500">100% Certified</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">Available 24/7</div>
                <div className="text-xs text-gray-500">Emergency Support</div>
              </div>
            </div>
            <div className="absolute h-80 w-80 bg-blue-100 rounded-full -z-10 -bottom-10 -right-10 opacity-60"></div>
            <div className="absolute h-60 w-60 bg-teal-100 rounded-full -z-10 -top-10 -left-10 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
