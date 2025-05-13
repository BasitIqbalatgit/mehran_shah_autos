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
            <a href="#services" className="font-medium text-neutral-800 hover:text-secondary transition">Services</a>
            <a href="#vehicles" className="font-medium text-neutral-800 hover:text-secondary transition">Vehicles</a>
            <a href="#pricing" className="font-medium text-neutral-800 hover:text-secondary transition">Pricing</a>
            <a href="#about" className="font-medium text-neutral-800 hover:text-secondary transition">About</a>
            <a href="#contact" className="font-medium text-neutral-800 hover:text-secondary transition">Contact</a>
            <a href="#booking" className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition">Book Now</a>
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
              className="font-medium text-neutral-800 hover:text-secondary transition px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#vehicles" 
              className="font-medium text-neutral-800 hover:text-secondary transition px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vehicles
            </a>
            <a 
              href="#pricing" 
              className="font-medium text-neutral-800 hover:text-secondary transition px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="font-medium text-neutral-800 hover:text-secondary transition px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="font-medium text-neutral-800 hover:text-secondary transition px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#booking" 
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition text-center"
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
