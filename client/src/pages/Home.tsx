import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VehicleCategories from "@/components/VehicleCategories";
import VehicleShowcase from "@/components/VehicleShowcase";
import PricingAndOffers from "@/components/PricingAndOffers";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingBookingForm from "@/components/FloatingBookingForm";

export default function Home() {
  useEffect(() => {
    // Initialize scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const checkScroll = () => {
      animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        const delay = (el as HTMLElement).dataset.delay || 0;
        
        if (elementTop < window.innerHeight - elementVisible) {
          setTimeout(() => {
            el.classList.add('visible');
          }, Number(delay));
        }
      });
    };
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on page load
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FloatingBookingForm />
      <Services />
      <VehicleCategories />
      <VehicleShowcase />
      <PricingAndOffers />
      <About />
      <Testimonials />
      <Contact />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/923331234567" 
        className="fixed bottom-24 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-40 animate-pulse-slow hover:bg-green-600 transition"
        aria-label="Contact us via WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
      
      {/* Call Button */}
      <a 
        href="tel:+923331234567" 
        className="fixed bottom-40 right-6 bg-accent text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-40 animate-pulse-slow hover:bg-accent-dark transition"
        aria-label="Call us"
      >
        <i className="fas fa-phone-alt text-xl"></i>
      </a>
      
      <Footer />
    </div>
  );
}
