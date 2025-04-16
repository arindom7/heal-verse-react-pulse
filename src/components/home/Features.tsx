
import { useRef } from 'react';
import { 
  Stethoscope, 
  FileText, 
  Clock, 
  Shield, 
  Award, 
  MessageCircle 
} from "lucide-react";
import { motion, useInView } from 'framer-motion';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  return (
    <motion.div 
      ref={ref}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: "easeOut" }}
    >
      <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-medical-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export const Features = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const features = [
    {
      icon: <Stethoscope size={24} />,
      title: "Expert Doctors",
      description: "Connect with board-certified doctors specializing in various fields of medicine.",
      delay: 100
    },
    {
      icon: <FileText size={24} />,
      title: "Prescription Analysis",
      description: "Advanced AI-powered tools to analyze and explain your prescriptions in detail.",
      delay: 200
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Availability",
      description: "Get medical assistance anytime, day or night, from anywhere in the world.",
      delay: 300
    },
    {
      icon: <Shield size={24} />,
      title: "Secure & Private",
      description: "Your health data is protected with end-to-end encryption and HIPAA compliance.",
      delay: 400
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Instant Consultation",
      description: "No waiting rooms. Get connected to a doctor within minutes.",
      delay: 500
    },
    {
      icon: <Award size={24} />,
      title: "Quality Care",
      description: "We maintain the highest standards of medical care and patient satisfaction.",
      delay: 600
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Telemedicine Platform</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with exceptional medical expertise to provide you with the best healthcare experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
