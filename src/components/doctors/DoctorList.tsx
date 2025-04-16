
import { useState, useEffect } from "react";
import { DoctorCard, Doctor } from "./DoctorCard";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useAnimeEffect } from "@/hooks/useAnimeEffect";

// Mock doctor data
const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.9,
    reviewCount: 124,
    experience: "15 years",
    availability: "Available Today",
    bio: "Dr. Johnson is a board-certified cardiologist with extensive experience in treating heart conditions. She specializes in preventive cardiology and heart disease management.",
    verified: true,
    price: "120"
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
    reviewCount: 98,
    experience: "10 years",
    availability: "Available Now",
    bio: "Dr. Chen is a dermatologist specializing in both medical and cosmetic dermatology. He has expertise in treating skin conditions like acne, eczema, and psoriasis.",
    verified: true,
    price: "100"
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    rating: 4.9,
    reviewCount: 156,
    experience: "12 years",
    availability: "Next 3 Days",
    bio: "Dr. Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children of all ages, from newborns to adolescents.",
    verified: true,
    price: "90"
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Neurology",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 4.7,
    reviewCount: 87,
    experience: "17 years",
    availability: "This Week",
    bio: "Dr. Wilson is a neurologist specializing in the diagnosis and treatment of disorders of the nervous system, including the brain, spinal cord, and peripheral nerves.",
    verified: false,
    price: "150"
  },
  {
    id: "5",
    name: "Dr. Lisa Patel",
    specialty: "Psychiatry",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    rating: 4.8,
    reviewCount: 112,
    experience: "9 years",
    availability: "Available Today",
    bio: "Dr. Patel is a psychiatrist who treats a wide range of mental health conditions. She takes a holistic approach to mental wellness, focusing on both medication management and therapy.",
    verified: true,
    price: "130"
  },
  {
    id: "6",
    name: "Dr. Robert Thompson",
    specialty: "Orthopedics",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 4.9,
    reviewCount: 203,
    experience: "20 years",
    availability: "Next 3 Days",
    bio: "Dr. Thompson is an orthopedic surgeon specializing in sports medicine and joint replacement surgery, with extensive experience in treating musculoskeletal conditions.",
    verified: true,
    price: "160"
  }
];

interface DoctorListProps {
  filters: {
    search: string;
    specialty: string;
    availability: string;
  };
}

export const DoctorList = ({ filters }: DoctorListProps) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);
  
  const loadMoreRef = useAnimeEffect<HTMLDivElement>({
    opacity: [0, 1],
    duration: 800,
    delay: 800,
    easing: 'easeOutQuad'
  });

  useEffect(() => {
    // Simulate API call with delay
    setLoading(true);
    const timer = setTimeout(() => {
      let filteredDoctors = [...mockDoctors];
      
      // Apply search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filteredDoctors = filteredDoctors.filter(
          (doctor) =>
            doctor.name.toLowerCase().includes(searchTerm) ||
            doctor.specialty.toLowerCase().includes(searchTerm) ||
            doctor.bio.toLowerCase().includes(searchTerm)
        );
      }
      
      // Apply specialty filter
      if (filters.specialty) {
        filteredDoctors = filteredDoctors.filter(
          (doctor) => doctor.specialty === filters.specialty
        );
      }
      
      // Apply availability filter
      if (filters.availability) {
        filteredDoctors = filteredDoctors.filter(
          (doctor) => doctor.availability === filters.availability
        );
      }
      
      setDoctors(filteredDoctors);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [filters]);
  
  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, doctors.length));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader className="h-10 w-10 text-medical-primary animate-spin" />
      </div>
    );
  }

  if (doctors.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-medium text-gray-700">No doctors found</h3>
        <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-6">
        {doctors.slice(0, visibleCount).map((doctor, index) => (
          <DoctorCard key={doctor.id} doctor={doctor} index={index} />
        ))}
      </div>
      
      {visibleCount < doctors.length && (
        <div ref={loadMoreRef} className="mt-8 text-center opacity-0">
          <Button
            variant="outline"
            onClick={loadMore}
            className="px-6"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};
