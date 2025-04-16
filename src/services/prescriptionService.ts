
import { AnalysisResult } from "../components/prescription/PrescriptionResult";

// This would typically be calling the GROQ API
export const analyzePrescription = async (query: string): Promise<AnalysisResult> => {
  // Simulate API call with delay
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock response data based on the query
      const hasMedications = query.toLowerCase().includes("metformin") || 
                            query.toLowerCase().includes("lisinopril") ||
                            query.toLowerCase().includes("simvastatin");

      const mockResult: AnalysisResult = {
        medications: [
          {
            name: "Lisinopril",
            purpose: "Used to treat high blood pressure and heart failure",
            dosage: "10mg daily",
            sideEffects: ["Dry cough", "Dizziness", "Headache", "Fatigue"],
            warnings: [
              "May cause lightheadedness when standing up quickly",
              "Contact doctor if experiencing swelling of face, lips, tongue, or throat"
            ]
          },
          {
            name: "Metformin",
            purpose: "Used to treat type 2 diabetes by lowering blood sugar levels",
            dosage: "500mg twice daily",
            sideEffects: ["Nausea", "Stomach upset", "Diarrhea", "Metallic taste"],
            warnings: [
              "Take with meals to minimize stomach upset",
              "Avoid excessive alcohol consumption while taking this medication"
            ]
          },
          {
            name: "Simvastatin",
            purpose: "Used to lower cholesterol and reduce the risk of heart disease",
            dosage: "20mg at bedtime",
            sideEffects: ["Muscle pain", "Headache", "Joint pain", "Nausea"],
            warnings: [
              "Report any unexplained muscle pain or weakness to your doctor",
              "Avoid consuming grapefruit or grapefruit juice while taking this medication"
            ]
          }
        ],
        interactions: [
          {
            medications: ["Metformin", "Lisinopril"],
            severity: "Low",
            description: "These medications may enhance each other's blood pressure lowering effects. Monitor blood sugar levels regularly."
          },
          {
            medications: ["Lisinopril", "Simvastatin"],
            severity: "Moderate",
            description: "These medications may increase the risk of muscle breakdown (rhabdomyolysis) when taken together. Monitor for signs of muscle pain or weakness."
          }
        ],
        recommendations: [
          "Take Lisinopril at the same time each day",
          "Take Metformin with meals to reduce stomach upset",
          "Take Simvastatin in the evening",
          "Monitor your blood pressure and blood sugar levels regularly",
          "Follow up with your doctor in 3 months for follow-up lab work",
          "Report any unusual side effects to your healthcare provider"
        ],
        summary: "Your prescription contains medications for blood pressure, diabetes, and high cholesterol management. There are some potential interactions between these medications, but they are commonly prescribed together with proper monitoring."
      };

      // Return different result if no recognized medication in query
      if (!hasMedications) {
        mockResult.summary = "Based on your input, we've provided a general analysis. For more accurate results, please provide specific medication names and dosages.";
        mockResult.medications = mockResult.medications.slice(0, 1);
        mockResult.interactions = [];
        mockResult.recommendations = [
          "Consult with a healthcare provider for personalized advice",
          "When sharing your prescription information, include drug names, dosages, and frequency",
          "Keep a list of all your medications, including over-the-counter drugs and supplements"
        ];
      }

      resolve(mockResult);
    }, 1500);
  });
};
