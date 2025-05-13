import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Car from './3d/Car';

export default function VehicleShowcase() {
  const [carColor, setCarColor] = useState('#d6c8a6'); // Default to primary beige color
  const [rotationDirection, setRotationDirection] = useState('none');
  
  const colors = [
    { name: "Classic Beige", value: "#d6c8a6" },
    { name: "Metallic Blue", value: "#3b82f6" },
    { name: "Vibrant Red", value: "#ef4444" },
    { name: "Silver Gray", value: "#d1d5db" }
  ];
  
  const specs = {
    engine: "800cc",
    fuelEfficiency: "18 km/l",
    seating: "4 Persons",
    transmission: "Manual"
  };
  
  return (
    <section id="vehicle-showcase" className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Interactive Vehicle Showcase</h2>
          <p className="text-lg max-w-2xl mx-auto">Explore our vehicles with customizable options</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 w-full">
            <div className="bg-secondary-light rounded-lg p-8 h-80 flex items-center justify-center relative">
              {/* Simplified Car Component */}
              <Car 
                color={carColor} 
                rotationDirection={rotationDirection}
              />
              
              {/* Rotation Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
                <button 
                  className="bg-white text-secondary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition"
                  onClick={() => {
                    setRotationDirection('left');
                    setTimeout(() => setRotationDirection('none'), 1000);
                  }}
                  aria-label="Rotate left"
                >
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button 
                  className="bg-white text-secondary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition"
                  onClick={() => {
                    setRotationDirection('right');
                    setTimeout(() => setRotationDirection('none'), 1000);
                  }}
                  aria-label="Rotate right"
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
              
              {/* Color Options */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
                {colors.map((color, index) => (
                  <button 
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 transition`}
                    style={{ 
                      backgroundColor: color.value,
                      borderColor: color.value === carColor ? 'white' : 'transparent'
                    }}
                    onClick={() => setCarColor(color.value)}
                    aria-label={`Change to ${color.name}`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-secondary-light rounded-lg p-8 animate-on-scroll">
              <h3 className="font-heading font-semibold text-2xl mb-4">Suzuki Mehran - A Pakistani Icon</h3>
              <p className="mb-4">The Suzuki Mehran, Pakistan's most beloved economy car, offers reliability and affordability that's stood the test of time.</p>
              
              <div className="space-y-4 mb-6">
                {Object.entries(specs).map(([key, value], index) => (
                  <div key={index} className="flex justify-between border-b border-white/20 pb-2">
                    <span>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-primary hover:bg-primary-dark text-secondary font-medium py-2 px-4 rounded transition flex-1">
                  Rent Now
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white hover:bg-neutral-200 text-secondary font-medium py-2 px-4 rounded transition flex-1"
                >
                  More Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
