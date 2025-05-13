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
    { id: "mehran", name: "Suzuki Mehran", category: "economy", baseRate: 3500, image: "https://images.unsplash.com/photo-1549399542-7e8f2e928464?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "alto", name: "Suzuki Alto", category: "economy", baseRate: 4000, image: "https://images.unsplash.com/photo-1549317661-bd32c8017f52?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "wagonr", name: "Suzuki Wagon R", category: "economy", baseRate: 4500, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "swift", name: "Suzuki Swift", category: "economy", baseRate: 5000, image: "https://images.unsplash.com/photo-1607853554439-0069ec2de99b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "kwid", name: "Renault Kwid", category: "economy", baseRate: 4200, image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "santro", name: "Hyundai Santro", category: "economy", baseRate: 4300, image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" }
  ],
  luxury: [
    { id: "civic", name: "Honda Civic", category: "luxury", baseRate: 8000, image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "corolla", name: "Toyota Corolla", category: "luxury", baseRate: 7500, image: "https://images.unsplash.com/photo-1629421889558-e2315ffc3ebc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "accord", name: "Honda Accord", category: "luxury", baseRate: 10000, image: "https://images.unsplash.com/photo-1574007477600-91e667faacd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "camry", name: "Toyota Camry", category: "luxury", baseRate: 12000, image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "elantra", name: "Hyundai Elantra", category: "luxury", baseRate: 9000, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "bmw3", name: "BMW 3 Series", category: "luxury", baseRate: 15000, image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" }
  ],
  suv: [
    { id: "fortuner", name: "Toyota Fortuner", category: "suv", baseRate: 15000, image: "https://images.unsplash.com/photo-1625395005127-bae85ed8d61a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "brv", name: "Honda BR-V", category: "suv", baseRate: 9000, image: "https://images.unsplash.com/photo-1614372088886-7e54611c7f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "sportage", name: "Kia Sportage", category: "suv", baseRate: 12000, image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "rush", name: "Toyota Rush", category: "suv", baseRate: 10000, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "tucson", name: "Hyundai Tucson", category: "suv", baseRate: 13000, image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "pajero", name: "Mitsubishi Pajero", category: "suv", baseRate: 14000, image: "https://images.unsplash.com/photo-1541800658-391c691d0aaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" }
  ],
  commercial: [
    { id: "bolan", name: "Suzuki Bolan", category: "commercial", baseRate: 5000, image: "https://images.unsplash.com/photo-1566207474742-de921626ad0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "ravi", name: "Suzuki Ravi", category: "commercial", baseRate: 4500, image: "https://images.unsplash.com/photo-1616407638297-576cf7e995fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "hiace", name: "Toyota Hiace", category: "commercial", baseRate: 8000, image: "https://images.unsplash.com/photo-1545211801-7b30a09af7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "shehzore", name: "Shehzore", category: "commercial", baseRate: 7000, image: "https://images.unsplash.com/photo-1616790037733-7cbffba0a7bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "porter", name: "Hyundai Porter", category: "commercial", baseRate: 6000, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" },
    { id: "coaster", name: "Toyota Coaster", category: "commercial", baseRate: 12000, image: "https://images.unsplash.com/photo-1549726787-68fe86155b30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" }
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
