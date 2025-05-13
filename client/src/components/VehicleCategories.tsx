import { vehicleModels, VehicleType } from "@/lib/utils";

type CategoryInfo = {
  title: string;
  description: string;
  type: VehicleType;
  image: string;
  vehicles: string[];
  delay?: number;
};

const categories: CategoryInfo[] = [
  {
    title: "Economy",
    description: "Fuel-efficient and affordable options including the iconic Suzuki Mehran.",
    type: "economy",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    vehicles: ["Mehran", "Alto", "Wagon R", "Swift"]
  },
  {
    title: "Luxury",
    description: "Premium vehicles providing exceptional comfort and sophisticated features.",
    type: "luxury",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    vehicles: ["Honda Civic", "Toyota Corolla", "Honda Accord", "Toyota Camry"],
    delay: 100
  },
  {
    title: "SUVs",
    description: "Spacious and versatile SUVs perfect for family trips and outdoor adventures.",
    type: "suv",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    vehicles: ["Toyota Fortuner", "Honda BR-V", "Kia Sportage", "Toyota Rush"],
    delay: 200
  },
  {
    title: "Commercial",
    description: "Reliable commercial vehicles for business transportation and logistics needs.",
    type: "commercial",
    image: "https://images.unsplash.com/photo-1566207474742-de921626ad0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    vehicles: ["Suzuki Bolan", "Suzuki Ravi", "Hiace", "Shehzore"],
    delay: 300
  }
];

export default function VehicleCategories() {
  return (
    <section id="vehicles" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary mb-3">Explore Our Fleet</h2>
          <p className="text-lg text-neutral-800 max-w-2xl mx-auto">From economy to luxury, we have the perfect vehicle for every occasion</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="col-span-1 bg-neutral-100 rounded-lg overflow-hidden shadow-md animate-on-scroll"
              data-delay={category.delay || 0}
            >
              <div className="relative h-48">
                <img 
                  src={category.image} 
                  alt={`${category.title} vehicles`} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-heading font-semibold text-xl p-4">{category.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-neutral-800 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.vehicles.map((vehicle, vIndex) => (
                    <span key={vIndex} className="text-xs bg-primary-light text-secondary px-2 py-1 rounded-full">
                      {vehicle}
                    </span>
                  ))}
                </div>
                <button 
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-medium py-2 rounded transition"
                  onClick={() => {
                    const showcase = document.getElementById('vehicle-showcase');
                    if (showcase) showcase.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Options
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
