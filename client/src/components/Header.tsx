import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scrolling effect on header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-3"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* 3D Model Placeholder - In reality this would be a ThreeJS/R3F component */}
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-secondary font-heading font-bold text-xl">MSA</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-secondary text-xl">Mehran Shah Autos</h1>
              <p className="text-xs text-neutral-800">Your Automotive Solutions Partner</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="font-medium text-neutral-800 hover:text-secondary transition-all duration-300 hover:scale-105 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#vehicles" className="font-medium text-neutral-800 hover:text-secondary transition-all duration-300 hover:scale-105 relative group">
              Vehicles
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="font-medium text-neutral-800 hover:text-secondary transition-all duration-300 hover:scale-105 relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="font-medium text-neutral-800 hover:text-secondary transition-all duration-300 hover:scale-105 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="font-medium text-neutral-800 hover:text-secondary transition-all duration-300 hover:scale-105 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#booking" className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition-all duration-300 hover:scale-105 hover:shadow-lg transform">Book Now</a>
          </nav>
          
          <button 
            className="md:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3 py-3">
            <a 
              href="#services" 
              className="font-medium text-neutral-800 hover:text-secondary transition-all duration-300 px-2 py-1 hover:pl-4 hover:bg-neutral-100 rounded-md flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-5 text-primary">
                <i className="fas fa-chevron-right mr-2 opacity-0 group-hover:opacity-100"></i>
              </span>
              Services
            </a>
            <a 
              href="#vehicles" 
              className="font-medium text-neutral-800 hover:text-secondary transition-all duration-300 px-2 py-1 hover:pl-4 hover:bg-neutral-100 rounded-md flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-5 text-primary">
                <i className="fas fa-chevron-right mr-2 opacity-0 group-hover:opacity-100"></i>
              </span>
              Vehicles
            </a>
            <a 
              href="#pricing" 
              className="font-medium text-neutral-800 hover:text-secondary transition-all duration-300 px-2 py-1 hover:pl-4 hover:bg-neutral-100 rounded-md flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-5 text-primary">
                <i className="fas fa-chevron-right mr-2 opacity-0 group-hover:opacity-100"></i>
              </span>
              Pricing
            </a>
            <a 
              href="#about" 
              className="font-medium text-neutral-800 hover:text-secondary transition-all duration-300 px-2 py-1 hover:pl-4 hover:bg-neutral-100 rounded-md flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-5 text-primary">
                <i className="fas fa-chevron-right mr-2 opacity-0 group-hover:opacity-100"></i>
              </span>
              About
            </a>
            <a 
              href="#contact" 
              className="font-medium text-neutral-800 hover:text-secondary transition-all duration-300 px-2 py-1 hover:pl-4 hover:bg-neutral-100 rounded-md flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-5 text-primary">
                <i className="fas fa-chevron-right mr-2 opacity-0 group-hover:opacity-100"></i>
              </span>
              Contact
            </a>
            <a 
              href="#booking" 
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition-all duration-300 text-center hover:shadow-md transform hover:translate-y-[-2px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
