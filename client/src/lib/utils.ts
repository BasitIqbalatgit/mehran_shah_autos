import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type VehicleType = "economy" | "luxury" | "suv" | "commercial";

export type VehicleModel = {
  id: string;
  name: string;
  category: VehicleType;
  baseRate: number;
  image: string;
};

export const vehicleModels: Record<VehicleType, VehicleModel[]> = {
  economy: [
    { id: "mehran", name: "Suzuki Mehran", category: "economy", baseRate: 3500, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "alto", name: "Suzuki Alto", category: "economy", baseRate: 4000, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "wagonr", name: "Suzuki Wagon R", category: "economy", baseRate: 4500, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "swift", name: "Suzuki Swift", category: "economy", baseRate: 5000, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" }
  ],
  luxury: [
    { id: "civic", name: "Honda Civic", category: "luxury", baseRate: 8000, image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "corolla", name: "Toyota Corolla", category: "luxury", baseRate: 7500, image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "accord", name: "Honda Accord", category: "luxury", baseRate: 10000, image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "camry", name: "Toyota Camry", category: "luxury", baseRate: 12000, image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" }
  ],
  suv: [
    { id: "fortuner", name: "Toyota Fortuner", category: "suv", baseRate: 15000, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "brv", name: "Honda BR-V", category: "suv", baseRate: 9000, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "sportage", name: "Kia Sportage", category: "suv", baseRate: 12000, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "rush", name: "Toyota Rush", category: "suv", baseRate: 10000, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" }
  ],
  commercial: [
    { id: "bolan", name: "Suzuki Bolan", category: "commercial", baseRate: 5000, image: "https://images.unsplash.com/photo-1566207474742-de921626ad0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "ravi", name: "Suzuki Ravi", category: "commercial", baseRate: 4500, image: "https://images.unsplash.com/photo-1566207474742-de921626ad0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "hiace", name: "Toyota Hiace", category: "commercial", baseRate: 8000, image: "https://images.unsplash.com/photo-1566207474742-de921626ad0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "shehzore", name: "Shehzore", category: "commercial", baseRate: 7000, image: "https://images.unsplash.com/photo-1566207474742-de921626ad0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" }
  ]
};

export const calculatePrice = (
  baseRate: number, 
  duration: number, 
  isRent: boolean, 
  additionalServices: {
    driver: boolean;
    insurance: boolean;
    fuel: boolean;
  }
) => {
  // Base calculation
  let total = baseRate * duration;
  
  // Apply monthly discount for leasing
  if (!isRent) {
    total = total * 22; // Approximating a month as 22 working days
    total = total * 0.7; // 30% discount for monthly rate
  }
  
  // Add additional services
  if (additionalServices.driver) {
    total += 1500 * (isRent ? duration : duration * 22);
  }
  
  if (additionalServices.insurance) {
    total += 1000 * (isRent ? duration : duration * 22);
  }
  
  if (additionalServices.fuel) {
    total += 3000; // One-time fuel charge
  }
  
  return Math.round(total);
};
