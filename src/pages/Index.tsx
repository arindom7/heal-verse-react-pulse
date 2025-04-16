
import { Helmet } from 'react-helmet';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { Testimonials } from '../components/home/Testimonials';
import { CallToAction } from '../components/home/CallToAction';
import { FeaturedDoctors } from '../components/home/FeaturedDoctors';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Heliofy - Healthcare at Your Fingertips</title>
        <meta name="description" content="Connect with top doctors, analyze prescriptions, and get expert medical advice from the comfort of your home, anytime." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <FeaturedDoctors />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
