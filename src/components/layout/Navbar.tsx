
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Prescription Analysis", href: "/prescription-analysis" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-medical-primary font-bold text-2xl">
                Helio<span className="text-medical-secondary">fy</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:space-x-8 md:items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-medical-primary border-transparent hover:border-medical-primary px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="ml-4 btn-primary">Sign In</Button>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-medical-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-medical-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full btn-primary">Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};
