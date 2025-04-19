import { ArrowRight, FileSearch, CheckCircle, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div>
              <div className="inline-block py-1 px-3 rounded-full bg-blue-50 text-medical-primary mb-4">
                <span className="text-sm font-medium flex items-center">
                  Advanced Prescription Analysis <CheckCircle size={16} className="ml-1" />
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Understand Your <span className="text-medical-primary">Medications</span> Better
              </h1>
            </div>
            <p className="text-lg text-gray-600">
              Our intelligent prescription analysis tool helps you identify potential drug interactions, understand side effects, and get personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary font-medium text-base" asChild>
                <Link to="/prescription-analysis">
                  Analyze Prescription <FileSearch className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="font-medium text-base" asChild>
                <Link to="/doctors">
                  Find a Doctor <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="font-medium text-base" asChild>
                <Link to="/contact">
                  Contact Us <Mail className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="font-medium text-base" asChild>
                <Link to="/about">
                  About Us <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative z-10 animate-float">
              <img 
                src="https://img.freepik.com/free-vector/prescription-drug-concept-illustration_114360-7213.jpg" 
                alt="Prescription Analysis" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
                <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <FileSearch />
                </div>
                <div>
                  <div className="font-semibold">Advanced Analysis</div>
                  <div className="text-sm text-gray-500">AI-powered insights</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">Fast Results</div>
                <div className="text-xs text-gray-500">In seconds</div>
              </div>
            </div>
            <div className="absolute h-80 w-80 bg-blue-100 rounded-full -z-10 -bottom-10 -right-10 opacity-60"></div>
            <div className="absolute h-60 w-60 bg-teal-100 rounded-full -z-10 -top-10 -left-10 opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
