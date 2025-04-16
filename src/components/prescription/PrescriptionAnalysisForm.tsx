
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Upload, 
  AlertCircle, 
  Pill, 
  FileText, 
  Camera,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

interface PrescriptionAnalysisFormProps {
  onSubmit: (query: string) => Promise<void>;
  isLoading: boolean;
}

export const PrescriptionAnalysisForm = ({ onSubmit, isLoading }: PrescriptionAnalysisFormProps) => {
  const [query, setQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState<"text" | "upload" | "camera">("text");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    await onSubmit(query);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "text":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter your prescription or medication details
              </label>
              <Textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Example: Lisinopril 10mg, Metformin 500mg, Simvastatin 20mg..."
                className="min-h-[150px] resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Have a specific question?
              </label>
              <Input
                type="text"
                placeholder="E.g., Are there any interactions between these medications?"
              />
            </div>
            <motion.div 
              className="text-xs text-medical-primary flex items-start p-3 bg-blue-50 rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm mb-1">Analysis tips</p>
                <p>For the most accurate analysis, include:</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Full medication names</li>
                  <li>Dosage (e.g., 10mg)</li> 
                  <li>Frequency (e.g., twice daily)</li>
                  <li>Duration of treatment if known</li>
                </ul>
              </div>
            </motion.div>
          </div>
        );
      case "upload":
        return (
          <div className="flex flex-col items-center justify-center py-10 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-700 font-medium">Upload a photo of your prescription</p>
            <p className="text-sm text-gray-500 mt-1 mb-4">JPG, PNG or PDF up to 10MB</p>
            <Button variant="outline">Select File</Button>
          </div>
        );
      case "camera":
        return (
          <div className="flex flex-col items-center justify-center py-10 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
            <Camera className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-700 font-medium">Take a photo of your prescription</p>
            <p className="text-sm text-gray-500 mt-1 mb-4">Position your prescription within the frame</p>
            <Button variant="outline">Open Camera</Button>
          </div>
        );
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <div className="mb-6 flex items-center">
        <Pill className="h-6 w-6 text-medical-primary mr-2" />
        <h3 className="text-xl font-semibold">Instant Prescription Analysis</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 border-b mb-6">
          <button
            type="button"
            className={`px-4 py-3 ${
              selectedTab === "text"
                ? "border-b-2 border-medical-primary text-medical-primary"
                : "text-gray-500 hover:text-medical-primary"
            } transition-colors`}
            onClick={() => setSelectedTab("text")}
          >
            <span className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Text Input
            </span>
          </button>
          <button
            type="button"
            className={`px-4 py-3 ${
              selectedTab === "upload"
                ? "border-b-2 border-medical-primary text-medical-primary"
                : "text-gray-500 hover:text-medical-primary"
            } transition-colors`}
            onClick={() => setSelectedTab("upload")}
          >
            <span className="flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </span>
          </button>
          <button
            type="button"
            className={`px-4 py-3 ${
              selectedTab === "camera"
                ? "border-b-2 border-medical-primary text-medical-primary"
                : "text-gray-500 hover:text-medical-primary"
            } transition-colors`}
            onClick={() => setSelectedTab("camera")}
          >
            <span className="flex items-center">
              <Camera className="h-4 w-4 mr-2" />
              Camera
            </span>
          </button>
        </div>
        
        {renderTabContent()}
        
        <div className="mt-6 flex justify-end">
          <Button 
            type="submit" 
            className="bg-medical-primary hover:bg-medical-primary/90 text-white px-6 py-2.5"
            disabled={!query.trim() || isLoading}
          >
            {isLoading ? (
              <>
                <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
                Analyzing...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Analyze Prescription
              </>
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};
