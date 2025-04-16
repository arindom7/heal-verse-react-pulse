
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
  Camera
} from "lucide-react";
import { useAnimeEffect } from "@/hooks/useAnimeEffect";

interface PrescriptionAnalysisFormProps {
  onSubmit: (query: string) => Promise<void>;
  isLoading: boolean;
}

export const PrescriptionAnalysisForm = ({ onSubmit, isLoading }: PrescriptionAnalysisFormProps) => {
  const [query, setQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState<"text" | "upload" | "camera">("text");
  
  const formRef = useAnimeEffect<HTMLDivElement>({
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    delay: 300,
    easing: 'easeOutQuad'
  });

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
                className="min-h-[120px]"
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
            <div className="text-xs text-gray-500">
              <AlertCircle className="inline h-3 w-3 mr-1" /> For accurate analysis, please include medication names, dosage, and frequency if available.
            </div>
          </div>
        );
      case "upload":
        return (
          <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-700 font-medium">Upload a photo of your prescription</p>
            <p className="text-sm text-gray-500 mt-1 mb-4">JPG, PNG or PDF up to 10MB</p>
            <Button variant="outline">Select File</Button>
          </div>
        );
      case "camera":
        return (
          <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <Camera className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-700 font-medium">Take a photo of your prescription</p>
            <p className="text-sm text-gray-500 mt-1 mb-4">Position your prescription within the frame</p>
            <Button variant="outline">Open Camera</Button>
          </div>
        );
    }
  };

  return (
    <div 
      ref={formRef}
      className="bg-white rounded-lg shadow-md p-6 opacity-0"
    >
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 border-b mb-6">
          <button
            type="button"
            className={`px-4 py-2 ${
              selectedTab === "text"
                ? "border-b-2 border-medical-primary text-medical-primary"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("text")}
          >
            <span className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Text Input
            </span>
          </button>
          <button
            type="button"
            className={`px-4 py-2 ${
              selectedTab === "upload"
                ? "border-b-2 border-medical-primary text-medical-primary"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("upload")}
          >
            <span className="flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </span>
          </button>
          <button
            type="button"
            className={`px-4 py-2 ${
              selectedTab === "camera"
                ? "border-b-2 border-medical-primary text-medical-primary"
                : "text-gray-500"
            }`}
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
            className="btn-primary"
            disabled={!query.trim() || isLoading}
          >
            <Search className="mr-2 h-4 w-4" />
            {isLoading ? "Analyzing..." : "Analyze Prescription"}
          </Button>
        </div>
      </form>
    </div>
  );
};
