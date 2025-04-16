
import { motion } from 'framer-motion';

export const PrescriptionHeader = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-medical-secondary to-medical-accent py-16 md:py-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Prescription Analysis Tool
        </h1>
        <p className="text-blue-50 text-lg md:text-xl max-w-3xl mx-auto">
          Get detailed insights about your medications, potential interactions, and personalized health information.
        </p>
      </div>
    </motion.div>
  );
};
