
import { useState } from "react";
import { Helmet } from 'react-helmet';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PrescriptionHeader } from '../components/prescription/PrescriptionHeader';
import { PrescriptionAnalysisForm } from '../components/prescription/PrescriptionAnalysisForm';
import { PrescriptionResult, AnalysisResult } from '../components/prescription/PrescriptionResult';
import { analyzePrescription } from '../services/prescriptionService';
import { useToast } from '@/hooks/use-toast';

const PrescriptionAnalysis = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const handleAnalysisSubmit = async (query: string) => {
    try {
      setIsLoading(true);
      // In a real app, we would call the GROQ API here
      const analysisResult = await analyzePrescription(query);
      setResult(analysisResult);
    } catch (error) {
      console.error("Error analyzing prescription:", error);
      toast({
        title: "Error",
        description: "There was an error analyzing your prescription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Prescription Analysis - HealVerse</title>
        <meta name="description" content="Get detailed insights about your medications, potential interactions, and personalized health information." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <PrescriptionHeader />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <PrescriptionAnalysisForm 
              onSubmit={handleAnalysisSubmit}
              isLoading={isLoading}
            />
            <PrescriptionResult result={result} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrescriptionAnalysis;
