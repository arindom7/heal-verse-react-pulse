import { useState, useEffect } from "react";
import { DoctorCard, Doctor } from "./DoctorCard";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { motion } from "framer-motion";

// Expanded mock doctor data
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
  },
  {
    id: "7",
    name: "Dr. Amanda Lee",
    specialty: "Family Medicine",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 4.9,
    reviewCount: 178,
    experience: "11 years",
    availability: "Available Today",
    bio: "Dr. Lee provides comprehensive primary care for patients of all ages. She focuses on preventive medicine and managing chronic conditions for the whole family.",
    verified: true,
    price: "95"
  },
  {
    id: "8",
    name: "Dr. David Miller",
    specialty: "Endocrinology",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 4.7,
    reviewCount: 89,
    experience: "14 years",
    availability: "Next 3 Days",
    bio: "Dr. Miller specializes in diagnosing and treating hormone-related disorders, including diabetes, thyroid issues, and metabolic conditions.",
    verified: false,
    price: "140"
  },
  {
    id: "9",
    name: "Dr. Jennifer Taylor",
    specialty: "Obstetrics & Gynecology",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 4.8,
    reviewCount: 145,
    experience: "13 years",
    availability: "Available Now",
    bio: "Dr. Taylor provides compassionate and comprehensive women's healthcare, from routine gynecological exams to pregnancy care and menopause management.",
    verified: true,
    price: "135"
  },
  {
    id: "10",
    name: "Dr. Richard Brown",
    specialty: "Gastroenterology",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    rating: 4.9,
    reviewCount: 132,
    experience: "16 years",
    availability: "This Week",
    bio: "Dr. Brown is a gastroenterologist who diagnoses and treats conditions affecting the digestive system, including the esophagus, stomach, intestines, liver, and pancreas.",
    verified: true,
    price: "155"
  },
  {
    id: "11",
    name: "Dr. Susan Wright",
    specialty: "Ophthalmology",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
    rating: 4.8,
    reviewCount: 117,
    experience: "18 years",
    availability: "Available Today",
    bio: "Dr. Wright specializes in eye care, from routine exams to complex surgical procedures. She provides comprehensive treatment for various eye conditions.",
    verified: true,
    price: "145"
  },
  {
    id: "12",
    name: "Dr. Thomas Garcia",
    specialty: "Pulmonology",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4.7,
    reviewCount: 104,
    experience: "12 years",
    availability: "Next 3 Days",
    bio: "Dr. Garcia specializes in diagnosing and treating conditions affecting the lungs and respiratory system, including asthma, COPD, and sleep apnea.",
    verified: false,
    price: "130"
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
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            variant="outline"
            onClick={loadMore}
            className="px-6"
          >
            Load More
          </Button>
        </motion.div>
      )}
    </div>
  );
};
