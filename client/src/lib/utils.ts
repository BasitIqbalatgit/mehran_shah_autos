import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type VehicleType = "economy" | "luxury" | "suv" | "commercial";
import img1 from "@/assets/honda civic.jfif";
import img2 from "@/assets/car1.jfif";
import img3 from "@/assets/car2.jfif";
import img4 from "@/assets/car3.jfif";
import img5 from "@/assets/car4.jfif";
import img6 from "@/assets/car5.jfif";
import img7 from "@/assets/car6.jfif";
import img8 from "@/assets/mercedes.jfif";
import img9 from "@/assets/vision.jfif";

export type VehicleModel = {
  id: string;
  name: string;
  category: VehicleType;
  baseRate: number;
  image: string;
};

export const vehicleModels: Record<VehicleType, VehicleModel[]> = {
  economy: [
    { id: "mehran", name: "Suzuki Mehran", category: "economy", baseRate: 3500, image: img2 },
    { id: "alto", name: "Suzuki Alto", category: "economy", baseRate: 4000, image: img3 },
    { id: "wagonr", name: "Suzuki Wagon R", category: "economy", baseRate: 4500, image: img4 },
    { id: "swift", name: "Suzuki Swift", category: "economy", baseRate: 5000, image: img5 },
    { id: "kwid", name: "Renault Kwid", category: "economy", baseRate: 4200, image: img6 },
    { id: "santro", name: "Hyundai Santro", category: "economy", baseRate: 4300, image: img7 }
  ],
  luxury: [
    { id: "civic", name: "Honda Civic", category: "luxury", baseRate: 8000, image: img1 },
    { id: "corolla", name: "Toyota Corolla", category: "luxury", baseRate: 7500, image: img8 },
    { id: "accord", name: "Honda Accord", category: "luxury", baseRate: 10000, image: img9 },
    { id: "camry", name: "Toyota Camry", category: "luxury", baseRate: 12000, image: img5 },
    { id: "elantra", name: "Hyundai Elantra", category: "luxury", baseRate: 9000, image: img6 },
    { id: "bmw3", name: "BMW 3 Series", category: "luxury", baseRate: 15000, image: img7 }
  ],
  suv: [
    { id: "fortuner", name: "Toyota Fortuner", category: "suv", baseRate: 15000, image: img4 },
    { id: "brv", name: "Honda BR-V", category: "suv", baseRate: 9000, image: img3 },
    { id: "sportage", name: "Kia Sportage", category: "suv", baseRate: 12000, image: img4 },
    { id: "rush", name: "Toyota Rush", category: "suv", baseRate: 10000, image: img5 },
    { id: "tucson", name: "Hyundai Tucson", category: "suv", baseRate: 13000, image: img6 },
    { id: "pajero", name: "Mitsubishi Pajero", category: "suv", baseRate: 14000, image: img7 }
  ],
  commercial: [
    { id: "bolan", name: "Suzuki Bolan", category: "commercial", baseRate: 5000, image: img6 },
    { id: "ravi", name: "Suzuki Ravi", category: "commercial", baseRate: 4500, image: img3 },
    { id: "hiace", name: "Toyota Hiace", category: "commercial", baseRate: 8000, image: img4 },
    { id: "shehzore", name: "Shehzore", category: "commercial", baseRate: 7000, image: img5 },
    { id: "porter", name: "Hyundai Porter", category: "commercial", baseRate: 6000, image: img6 },
    { id: "coaster", name: "Toyota Coaster", category: "commercial", baseRate: 12000, image: img7 }
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
