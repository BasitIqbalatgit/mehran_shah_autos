import { useState, useEffect } from 'react';
import { vehicleModels, calculatePrice, VehicleType } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type AdditionalServices = {
  driver: boolean;
  insurance: boolean;
  fuel: boolean;
};

export default function PricingAndOffers() {
  const [isRent, setIsRent] = useState(true);
  const [vehicleCategory, setVehicleCategory] = useState<VehicleType>('economy');
  const [duration, setDuration] = useState(1);
  const [additionalServices, setAdditionalServices] = useState<AdditionalServices>({
    driver: false,
    insurance: false,
    fuel: false
  });
  
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Calculate price whenever inputs change
  useEffect(() => {
    const selectedVehicle = vehicleModels[vehicleCategory][0]; // Use first vehicle of category
    const price = calculatePrice(
      selectedVehicle.baseRate,
      duration,
      isRent,
      additionalServices
    );
    setTotalPrice(price);
  }, [vehicleCategory, duration, isRent, additionalServices]);
  
  const getMaxDuration = () => isRent ? 30 : 36;
  
  const formatDuration = () => {
    if (isRent) {
      return duration > 1 ? `${duration} Days` : `${duration} Day`;
    } else {
      return duration > 1 ? `${duration} Months` : `${duration} Month`;
    }
  };
  
  // Special offers data
  const specialOffers = [
    {
      title: "Weekend Special",
      bgColor: "bg-primary",
      textColor: "text-secondary",
      features: [
        "Free car delivery and pickup",
        "Complimentary car sanitization",
        "100km free mileage daily"
      ],
      buttonText: "Claim Offer",
      buttonAction: () => window.location.href = "#booking"
    },
    {
      title: "Corporate Deals",
      bgColor: "bg-secondary",
      textColor: "text-white",
      features: [
        "Up to 30% off on monthly contracts",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      buttonText: "Contact Sales",
      buttonAction: () => window.location.href = "#contact",
      delay: 100
    },
    {
      title: "Family Package",
      bgColor: "bg-primary",
      textColor: "text-secondary",
      features: [
        "Child seats included",
        "Extra luggage space",
        "15% off on weekly rentals"
      ],
      buttonText: "Book Package",
      buttonAction: () => window.location.href = "#booking",
      delay: 200
    }
  ];
  
  return (
    <section id="pricing" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary mb-3">Pricing & Special Offers</h2>
          <p className="text-lg text-neutral-800 max-w-2xl mx-auto">Transparent pricing with flexible options for every budget</p>
        </div>
        
        {/* Dynamic Price Calculator */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12 animate-on-scroll">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="font-heading font-semibold text-2xl text-secondary mb-4">Price Calculator</h3>
              
              {/* Service Type Toggle */}
              <div className="flex rounded-md overflow-hidden mb-6 border border-neutral-300">
                <button 
                  className={`flex-1 py-2 px-4 text-center ${isRent ? 'bg-secondary text-white' : 'bg-white text-secondary'}`}
                  onClick={() => setIsRent(true)}
                >
                  Rent
                </button>
                <button 
                  className={`flex-1 py-2 px-4 text-center ${!isRent ? 'bg-secondary text-white' : 'bg-white text-secondary'}`}
                  onClick={() => setIsRent(false)}
                >
                  Lease
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">Vehicle Category</label>
                  <select 
                    className="w-full border border-neutral-300 rounded p-2 focus:ring-2 focus:ring-secondary focus:border-transparent"
                    value={vehicleCategory}
                    onChange={(e) => setVehicleCategory(e.target.value as VehicleType)}
                  >
                    <option value="economy">Economy</option>
                    <option value="luxury">Luxury</option>
                    <option value="suv">SUV</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">Duration</label>
                  <div className="flex items-center">
                    <div className="flex-1 mr-3">
                      <Slider 
                        value={[duration]}
                        min={1}
                        max={getMaxDuration()}
                        step={1}
                        onValueChange={(value) => setDuration(value[0])}
                      />
                    </div>
                    <span className="text-lg font-medium text-secondary min-w-[80px] text-right">
                      {formatDuration()}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">Additional Services</label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox 
                        id="driver" 
                        checked={additionalServices.driver}
                        onCheckedChange={(checked) => 
                          setAdditionalServices(prev => ({...prev, driver: checked === true}))
                        }
                      />
                      <Label htmlFor="driver" className="ml-2">Driver (PKR 1,500/day)</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="insurance" 
                        checked={additionalServices.insurance}
                        onCheckedChange={(checked) => 
                          setAdditionalServices(prev => ({...prev, insurance: checked === true}))
                        }
                      />
                      <Label htmlFor="insurance" className="ml-2">Comprehensive Insurance (PKR 1,000/day)</Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox 
                        id="fuel" 
                        checked={additionalServices.fuel}
                        onCheckedChange={(checked) => 
                          setAdditionalServices(prev => ({...prev, fuel: checked === true}))
                        }
                      />
                      <Label htmlFor="fuel" className="ml-2">Full Tank Fuel (From PKR 3,000)</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-neutral-100 p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-2xl text-secondary mb-4">Estimated Price</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Base Rate:</span>
                  <span className="font-medium">
                    PKR {vehicleModels[vehicleCategory][0].baseRate}/day
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Duration ({formatDuration()}):</span>
                  <span className="font-medium">
                    PKR {isRent 
                      ? vehicleModels[vehicleCategory][0].baseRate * duration
                      : Math.round(vehicleModels[vehicleCategory][0].baseRate * duration * 22 * 0.7)
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Additional Services:</span>
                  <span className="font-medium">
                    PKR {totalPrice - (
                      isRent 
                        ? vehicleModels[vehicleCategory][0].baseRate * duration
                        : Math.round(vehicleModels[vehicleCategory][0].baseRate * duration * 22 * 0.7)
                    )}
                  </span>
                </div>
                <div className="h-px bg-neutral-300 my-2"></div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-secondary">PKR {totalPrice.toLocaleString()}</span>
                </div>
              </div>
              
              <button 
                className="w-full bg-accent hover:bg-accent-dark text-white font-medium py-3 rounded transition"
                onClick={() => window.location.href = "#booking"}
              >
                Book Now
              </button>
              
              <p className="text-xs text-neutral-600 mt-4">
                * Prices may vary based on availability and season. Final price will be confirmed at booking.
              </p>
            </div>
          </div>
        </div>
        
        {/* Special Offers */}
        <h3 className="font-heading font-semibold text-2xl text-secondary mb-6 text-center animate-on-scroll">Special Offers</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialOffers.map((offer, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover transition duration-300 animate-on-scroll"
              data-delay={offer.delay || 0}
            >
              <div className={cn(offer.bgColor, "p-4")}>
                <h4 className={cn("font-heading font-semibold text-xl", offer.textColor)}>
                  {offer.title}
                </h4>
              </div>
              <div className="p-6">
                <p className="text-neutral-800 mb-4">
                  {index === 0 
                    ? "Get 20% off on all weekend rentals (Friday to Sunday) for any vehicle category."
                    : index === 1
                      ? "Special rates for companies with dedicated fleet management and priority service."
                      : "Perfect for family trips with spacious SUVs and special amenities for children."
                  }
                </p>
                <ul className="space-y-2 mb-6">
                  {offer.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i> {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-medium py-2 rounded transition"
                  onClick={offer.buttonAction}
                >
                  {offer.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
