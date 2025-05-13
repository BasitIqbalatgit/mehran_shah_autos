import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { vehicleModels, VehicleModel, VehicleType } from '@/lib/utils';
import { VehicleImageSlider } from './VehicleImageSlider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function VehicleShowcase() {
  const [selectedType, setSelectedType] = useState<VehicleType>('luxury');
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleModel>(vehicleModels.luxury[0]);
  
  // Define vehicle specifications dynamically based on selected vehicle
  const getSpecs = (vehicle: VehicleModel) => {
    const baseSpecs: Record<string, Record<string, string>> = {
      'mehran': {
        engine: "800cc",
        fuelEfficiency: "18 km/l",
        seating: "4 Persons",
        transmission: "Manual"
      },
      'civic': {
        engine: "1800cc",
        fuelEfficiency: "14 km/l",
        seating: "5 Persons",
        transmission: "CVT / Manual"
      },
      'fortuner': {
        engine: "2800cc",
        fuelEfficiency: "10 km/l",
        seating: "7 Persons",
        transmission: "Automatic"
      },
      'hiace': {
        engine: "2700cc",
        fuelEfficiency: "9 km/l",
        seating: "12 Persons",
        transmission: "Manual"
      }
    };
    
    // Default specs for any vehicle
    const defaultSpecs = {
      engine: "1600cc",
      fuelEfficiency: "12 km/l",
      seating: "5 Persons",
      transmission: "Manual"
    };
    
    return baseSpecs[vehicle.id] || defaultSpecs;
  };
  
  const handleCategoryChange = (type: VehicleType) => {
    setSelectedType(type);
    setSelectedVehicle(vehicleModels[type][0]);
  };
  
  const handleVehicleChange = (vehicle: VehicleModel) => {
    setSelectedVehicle(vehicle);
  };
  
  const specs = getSpecs(selectedVehicle);
  
  return (
    <section id="vehicle-showcase" className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Interactive Vehicle Showcase</h2>
          <p className="text-lg max-w-2xl mx-auto">Explore our extensive fleet with detailed specifications</p>
        </div>
        
        <Tabs defaultValue="luxury" onValueChange={(value) => handleCategoryChange(value as VehicleType)} className="mb-8">
          <TabsList className="grid grid-cols-4 max-w-md mx-auto mb-8">
            <TabsTrigger value="economy">Economy</TabsTrigger>
            <TabsTrigger value="luxury">Luxury</TabsTrigger>
            <TabsTrigger value="suv">SUVs</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 w-full">
            <div className="rounded-lg h-80 flex items-center justify-center relative overflow-hidden">
              {/* Vehicle Image Slider */}
              <VehicleImageSlider 
                vehicles={vehicleModels[selectedType]} 
                onSelectVehicle={handleVehicleChange}
                selectedVehicleId={selectedVehicle?.id}
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-secondary-light rounded-lg p-6 md:p-8 animate-on-scroll shadow-lg">
              <h3 className="font-heading font-semibold text-xl md:text-2xl mb-4">
                {selectedVehicle.name}
              </h3>
              
              <p className="mb-4 text-sm md:text-base">
                {selectedVehicle.name} offers an exceptional {selectedVehicle.category} driving experience with 
                reliable performance and comfortable features, perfect for all your transportation needs.
              </p>
              
              <div className="space-y-3 mb-6">
                {Object.entries(specs).map(([key, value], index) => (
                  <div key={index} className="flex justify-between border-b border-white/20 pb-2 text-sm md:text-base">
                    <span>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
                <div className="flex justify-between border-b border-white/20 pb-2 text-sm md:text-base">
                  <span>Daily Rate</span>
                  <span className="font-medium text-primary">PKR {selectedVehicle.baseRate}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary hover:bg-primary-dark text-secondary font-medium py-2 px-4 rounded transition flex-1"
                  onClick={() => {
                    const bookingForm = document.getElementById('booking');
                    if (bookingForm) bookingForm.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Rent Now
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-neutral-200 text-secondary font-medium py-2 px-4 rounded transition flex-1"
                >
                  Details & Reviews
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
