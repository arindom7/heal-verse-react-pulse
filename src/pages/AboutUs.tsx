import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "With over 15 years of experience in healthcare technology, Dr. Johnson leads our medical team and ensures our platform meets the highest standards of medical accuracy and patient care."
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Michael brings his expertise in AI and machine learning to develop cutting-edge healthcare solutions that make medical information accessible to everyone."
    },
    {
      name: "Dr. Priya Patel",
      role: "Patient Experience Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      bio: "Dr. Patel focuses on improving the patient journey through our platform, ensuring that every user has a seamless and supportive experience when managing their health."
    }
  ];

  const values = [
    {
      icon: <Heart className="h-10 w-10 text-medical-primary" />,
      title: "Patient-Centered Care",
      description: "We put patients first, ensuring their needs and well-being are at the center of everything we do."
    },
    {
      icon: <Shield className="h-10 w-10 text-medical-primary" />,
      title: "Medical Accuracy",
      description: "Our platform is built on a foundation of medical accuracy, with all information verified by healthcare professionals."
    },
    {
      icon: <Users className="h-10 w-10 text-medical-primary" />,
      title: "Accessibility",
      description: "We believe healthcare information should be accessible to everyone, regardless of their background or circumstances."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Heliofy</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Heliofy is dedicated to making healthcare information accessible, understandable, and actionable for everyone. 
            Our mission is to empower patients with the knowledge they need to make informed decisions about their health.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Heliofy, we believe that understanding your medications and healthcare options is the first step toward better health outcomes. 
                Our advanced prescription analysis tool helps you identify potential drug interactions, understand side effects, and get personalized recommendations.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2023, Heliofy has grown from a simple prescription analysis tool to a comprehensive healthcare platform that connects patients with doctors, 
                provides educational resources, and offers personalized health insights.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-medical-primary to-medical-secondary rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="mb-4">
                We envision a world where everyone has access to accurate, understandable healthcare information and can make informed decisions about their health.
              </p>
              <p>
                By leveraging technology and medical expertise, we're building a future where healthcare is more accessible, transparent, and patient-centered.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardHeader>
                  <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-none shadow-sm overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-medical-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 