import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Star, Clock, ThumbsUp, Award } from "lucide-react";
import { useAnimeEffect } from "@/hooks/useAnimeEffect";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  reviewCount: number;
  experience: string;
  availability: string;
  bio: string;
  verified: boolean;
  price: string;
}

interface DoctorCardProps {
  doctor: Doctor;
  index: number;
}

export const DoctorCard = ({ doctor, index }: DoctorCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const cardRef = useAnimeEffect<HTMLDivElement>({
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    delay: 100 * index,
    easing: 'easeOutQuad'
  });

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 card-hover opacity-0"
    >
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="relative">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow" 
            />
            {doctor.verified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full">
                <Award size={14} />
              </div>
            )}
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="text-xl font-semibold">{doctor.name}</h3>
              <div className="mt-2 sm:mt-0 flex items-center justify-center sm:justify-start">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm font-medium">{doctor.rating}</span>
                <span className="text-sm text-gray-500 ml-1">({doctor.reviewCount} reviews)</span>
              </div>
            </div>
            
            <p className="text-medical-primary font-medium mt-1">{doctor.specialty}</p>
            
            <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <Clock size={12} className="mr-1" /> {doctor.experience} exp
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <ThumbsUp size={12} className="mr-1" /> {doctor.availability}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                ${doctor.price} / session
              </span>
            </div>
          </div>
        </div>
        
        <div className={`mt-4 ${expanded ? 'block' : 'hidden sm:block'}`}>
          <p className="text-gray-600 text-sm line-clamp-2 sm:line-clamp-none">{doctor.bio}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mt-5 gap-3">
          <Button 
            className="btn-primary w-full sm:w-auto"
          >
            <Calendar className="mr-2 h-4 w-4" /> Book Appointment
          </Button>
          <Button 
            variant="outline" 
            className="w-full sm:w-auto"
          >
            View Profile
          </Button>
          <Button 
            variant="ghost" 
            className="text-xs sm:hidden w-full" 
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>
    </div>
  );
};
