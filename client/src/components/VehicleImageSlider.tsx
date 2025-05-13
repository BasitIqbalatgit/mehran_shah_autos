import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VehicleModel } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface VehicleSliderProps {
  vehicles: VehicleModel[];
  onSelectVehicle?: (vehicle: VehicleModel) => void;
  selectedVehicleId?: string;
}

export function VehicleImageSlider({ 
  vehicles,
  onSelectVehicle,
  selectedVehicleId
}: VehicleSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Find the index of the selected vehicle if provided
  useEffect(() => {
    if (selectedVehicleId) {
      const index = vehicles.findIndex(v => v.id === selectedVehicleId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [selectedVehicleId, vehicles]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1;
      if (onSelectVehicle) {
        onSelectVehicle(vehicles[newIndex]);
      }
      return newIndex;
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === vehicles.length - 1 ? 0 : prevIndex + 1;
      if (onSelectVehicle) {
        onSelectVehicle(vehicles[newIndex]);
      }
      return newIndex;
    });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  if (!vehicles.length) {
    return <div className="w-full h-full flex items-center justify-center">No vehicles available</div>;
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg bg-secondary-light">
      {/* Main image */}
      <div className="relative h-full w-full">
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
        >
          <img 
            src={vehicles[currentIndex].image} 
            alt={vehicles[currentIndex].name}
            className="object-cover w-full h-full"
          />
          
          {/* Overlay with vehicle info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white font-semibold text-xl">{vehicles[currentIndex].name}</h3>
            <p className="text-white/80 flex justify-between">
              <span>Base rate: PKR {vehicles[currentIndex].baseRate}/day</span>
              <span>{currentIndex + 1} of {vehicles.length}</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <Button
        variant="secondary" 
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full z-10"
        onClick={goToPrevious}
        aria-label="Previous vehicle"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="secondary" 
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full z-10"
        onClick={goToNext}
        aria-label="Next vehicle"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      {/* Dot indicators */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2">
        {vehicles.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => {
              setCurrentIndex(index);
              if (onSelectVehicle) {
                onSelectVehicle(vehicles[index]);
              }
            }}
            aria-label={`Go to vehicle ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}