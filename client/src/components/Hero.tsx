import { cn } from "@/lib/utils";
import Car from "./3d/Car";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:py-32 bg-gradient-to-r from-secondary to-secondary-dark text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <div className="bg-[url('https://images.unsplash.com/photo-1575844264771-892081089af5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')] bg-cover bg-center h-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              <span className="block">Reviving Legacy,</span>
              <span className="block text-primary">Driving Innovation</span>
            </h1>
            <p className="text-lg mb-8 max-w-xl">
              From the iconic Suzuki Mehran to modern luxury vehicles, we bridge trusted heritage with cutting-edge automotive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#booking" 
                className={cn(
                  "bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6",
                  "rounded-md transition shadow-lg text-center"
                )}
              >
                Book Now
              </a>
              <a 
                href="#vehicles" 
                className={cn(
                  "bg-white hover:bg-neutral-200 text-secondary font-medium py-3 px-6",
                  "rounded-md transition shadow-lg text-center"
                )}
              >
                Explore Fleet
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-64 md:h-80 relative bg-secondary-light rounded-lg shadow-md overflow-hidden">
              {/* Simplified Car Component */}
              <Car color="#d6c8a6" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition">
          <span className="mb-1 text-sm">Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}
