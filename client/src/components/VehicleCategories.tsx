import { vehicleModels, VehicleType } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import img1 from "@/assets/car1.jfif";
import img2 from "@/assets/car2.jfif";
import img3 from "@/assets/car3.jfif";
import img4 from "@/assets/car4.jfif";
type CategoryInfo = {
  title: string;
  description: string;
  type: VehicleType;
  image: string;
  brands: string[];
  features: string[];
  delay?: number;
};

// Extract all brand names from vehicle models
const getBrands = (type: VehicleType): string[] => {
  const brands = new Set<string>();
  vehicleModels[type].forEach(vehicle => {
    const brand = vehicle.name.split(' ')[0]; // Extract first word as brand
    brands.add(brand);
  });
  return Array.from(brands);
};

const categories: CategoryInfo[] = [
  {
    title: "Economy",
    description: "Fuel-efficient and affordable options for everyday commuting and budget-friendly travel.",
    type: "economy",
    image: img1,
    brands: getBrands("economy"),
    features: ["Fuel Efficient", "Budget Friendly", "Easy to Park", "Low Maintenance"]
  },
  {
    title: "Luxury",
    description: "Premium vehicles with advanced features, sophisticated comfort, and exceptional performance.",
    type: "luxury",
    image: img2,
    brands: getBrands("luxury"),
    features: ["Premium Comfort", "Advanced Technology", "Powerful Engine", "Elegant Design"],
    delay: 100
  },
  {
    title: "SUVs",
    description: "Spacious, versatile vehicles with higher ground clearance, perfect for families and adventurers.",
    type: "suv",
    image: img3,
    brands: getBrands("suv"),
    features: ["Spacious Interior", "All-terrain Capability", "Enhanced Safety", "Higher Seating Position"],
    delay: 200
  },
  {
    title: "Commercial",
    description: "Reliable vans and light trucks designed for business transport, deliveries, and logistics needs.",
    type: "commercial",
    image: img4,
    brands: getBrands("commercial"),
    features: ["Large Capacity", "Heavy Duty", "Multiple Seating", "Business Ready"],
    delay: 300
  }
];

export default function VehicleCategories() {
  return (
    <section id="vehicles" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary mb-3">Explore Our Fleet</h2>
          <p className="text-lg text-neutral-800 max-w-2xl mx-auto">Discover our diverse collection of vehicles from leading brands, perfectly suited for every need and occasion</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="col-span-1 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-200 animate-on-scroll group"
              data-delay={category.delay || 0}
            >
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={category.image} 
                    alt={`${category.title} vehicles`} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                  <h3 className="text-white font-heading font-semibold text-xl p-4">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-neutral-800 mb-4 line-clamp-2 h-10">{category.description}</p>
                
                {/* Brands display */}
                <div className="mb-3">
                  <h4 className="text-xs font-medium text-neutral-600 mb-1">Available Brands:</h4>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {category.brands.map((brand, bIndex) => (
                      <Badge key={bIndex} variant="outline" className="bg-neutral-100">
                        {brand}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Features display */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-neutral-600 mb-1">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {category.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-xs">
                        <span className="text-green-500 mr-1">✓</span> {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-medium py-2 rounded transition"
                  onClick={() => {
                    const showcase = document.getElementById('vehicle-showcase');
                    if (showcase) showcase.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore {category.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
