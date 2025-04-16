
import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, FileSearch, Pill } from "lucide-react";
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CallToAction = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="bg-gradient-to-r from-medical-primary to-medical-secondary rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Understand Your Medications Better</h2>
              <p className="text-blue-50 mb-6 text-lg">
                Our advanced prescription analysis tool helps you identify potential interactions, understand side effects, and get personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white text-medical-primary border-white hover:bg-blue-50 font-medium"
                  asChild
                >
                  <Link to="/prescription-analysis">
                    Analyze Prescription <FileSearch className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10 font-medium">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <motion.div
                  initial={{ y: -8 }}
                  animate={{ y: 8 }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 2,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="https://img.freepik.com/free-vector/prescription-drug-concept-illustration_114360-7213.jpg"
                    alt="Prescription Analysis"
                    className="max-h-64 rounded-lg shadow-lg"
                  />
                </motion.div>
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                  <Pill className="h-8 w-8 text-medical-primary" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
