
import { useRef, useEffect } from 'react';
import { AlertOctagon, AlertCircle, CheckCircle, Info, ExternalLink, Pill } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import * as anime from 'animejs';

export interface AnalysisResult {
  medications: Medication[];
  interactions: Interaction[];
  recommendations: string[];
  summary: string;
}

interface Medication {
  name: string;
  purpose: string;
  dosage: string;
  sideEffects: string[];
  warnings: string[];
}

interface Interaction {
  medications: string[];
  severity: "Low" | "Moderate" | "High";
  description: string;
}

interface PrescriptionResultProps {
  result: AnalysisResult | null;
}

export const PrescriptionResult = ({ result }: PrescriptionResultProps) => {
  const resultRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (result && resultRef.current) {
      anime.default({
        targets: resultRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutQuad'
      });
    }
  }, [result]);

  if (!result) return null;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Low":
        return "bg-yellow-100 text-yellow-800";
      case "Moderate":
        return "bg-orange-100 text-orange-800";
      case "High":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "Low":
        return <Info size={16} className="text-yellow-600" />;
      case "Moderate":
        return <AlertCircle size={16} className="text-orange-600" />;
      case "High":
        return <AlertOctagon size={16} className="text-red-600" />;
      default:
        return <Info size={16} className="text-gray-600" />;
    }
  };

  return (
    <div ref={resultRef} className="bg-white rounded-lg shadow-md p-6 mt-8 opacity-0">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>
        <p className="text-gray-700">{result.summary}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">
            <Pill size={14} />
          </span>
          Medications
        </h3>
        <div className="space-y-6">
          {result.medications.map((med, index) => (
            <div 
              key={index} 
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-lg font-medium text-medical-primary">
                  {med.name}
                </h4>
                <Badge variant="outline" className="mt-2 md:mt-0">
                  {med.dosage}
                </Badge>
              </div>
              <p className="text-gray-700 mb-3">{med.purpose}</p>
              
              <div className="mt-3">
                <h5 className="font-medium text-sm text-gray-700 mb-1">Side Effects:</h5>
                <div className="flex flex-wrap gap-1">
                  {med.sideEffects.map((effect, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                    >
                      {effect}
                    </span>
                  ))}
                </div>
              </div>
              
              {med.warnings.length > 0 && (
                <div className="mt-3">
                  <h5 className="font-medium text-sm text-gray-700 mb-1">Warnings:</h5>
                  <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                    {med.warnings.map((warning, i) => (
                      <li key={i}>{warning}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {result.interactions.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-2">
              <AlertOctagon size={14} />
            </span>
            Potential Interactions
          </h3>
          <div className="space-y-4">
            {result.interactions.map((interaction, index) => (
              <div 
                key={index} 
                className={`border-l-4 ${
                  interaction.severity === "Low" ? "border-yellow-400" :
                  interaction.severity === "Moderate" ? "border-orange-400" :
                  "border-red-400"
                } pl-4 py-2`}
              >
                <div className="flex items-center mb-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(interaction.severity)} mr-2`}>
                    {getSeverityIcon(interaction.severity)}
                    <span className="ml-1">{interaction.severity} Risk</span>
                  </span>
                  <span className="text-sm font-medium">
                    {interaction.medications.join(" + ")}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{interaction.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
            <CheckCircle size={14} />
          </span>
          Recommendations
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          {result.recommendations.map((rec, index) => (
            <li key={index} className="text-gray-700">{rec}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Button className="btn-primary">
          <span>Book Doctor Consultation</span>
        </Button>
        <Button variant="outline">
          <span>Download Report</span>
        </Button>
        <Button variant="link" className="text-medical-primary">
          <span>Learn More</span>
          <ExternalLink size={16} className="ml-1" />
        </Button>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <AlertCircle size={14} className="inline mr-1" />
        This analysis is for informational purposes only and does not constitute medical advice. Always consult with a healthcare professional.
      </div>
    </div>
  );
};
