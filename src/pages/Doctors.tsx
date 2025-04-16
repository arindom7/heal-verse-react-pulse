
import { useState } from "react";
import { Helmet } from 'react-helmet';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { DoctorHeader } from '../components/doctors/DoctorHeader';
import { DoctorFilters } from '../components/doctors/DoctorFilters';
import { DoctorList } from '../components/doctors/DoctorList';

const Doctors = () => {
  const [filters, setFilters] = useState({
    search: "",
    specialty: "",
    availability: ""
  });

  const handleFilterChange = (newFilters: {
    search: string;
    specialty: string;
    availability: string;
  }) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Helmet>
        <title>Find a Doctor - Heliofy</title>
        <meta name="description" content="Connect with board-certified specialists who provide personalized care through secure video consultations." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <DoctorHeader />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <DoctorFilters onFilterChange={handleFilterChange} />
            <DoctorList filters={filters} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Doctors;
