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
    { id: "mehran", name: "Suzuki Mehran", category: "economy", baseRate: 3500, image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Alto-800/7694/1669791483268/front-left-side-47.jpg" },
    { id: "alto", name: "Suzuki Alto", category: "economy", baseRate: 4000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/26581/alto-exterior-right-front-three-quarter-169.jpeg" },
    { id: "wagonr", name: "Suzuki Wagon R", category: "economy", baseRate: 4500, image: "https://s3.caradvice.com.au/wp-content/uploads/2020/08/2020-Suzuki-Ignis-front-quarter.jpg" },
    { id: "swift", name: "Suzuki Swift", category: "economy", baseRate: 5000, image: "https://www.suzuki.com.ph/automobile/sites/default/files/2023-10/Swift_GL_MT_speedy-blue-metallic.png" },
    { id: "kwid", name: "Renault Kwid", category: "economy", baseRate: 4200, image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/141125/kwid-exterior-right-front-three-quarter.jpeg" },
    { id: "santro", name: "Hyundai Santro", category: "economy", baseRate: 4300, image: "https://imgd.aeplcdn.com/1920x1080/n/q0oj0va_1521334.jpg?q=75" }
  ],
  luxury: [
    { id: "civic", name: "Honda Civic", category: "luxury", baseRate: 8000, image: "https://auto.suzuki.com.pk/images/feature-slide111.jpg" },
    { id: "corolla", name: "Toyota Corolla", category: "luxury", baseRate: 7500, image: "https://global.toyota/pages/news/images/2019/03/18/1100/20190318_01_00_s.jpg" },
    { id: "accord", name: "Honda Accord", category: "luxury", baseRate: 10000, image: "https://www.motorbiscuit.com/wp-content/uploads/2023/01/2023-Honda-Accord-white-car-driving-down-a-mountainous-road-in-the-daytime-with-a-blurred-background.jpg" },
    { id: "camry", name: "Toyota Camry", category: "luxury", baseRate: 12000, image: "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/chrome/white/2023TOC040001_1280_01.jpg" },
    { id: "elantra", name: "Hyundai Elantra", category: "luxury", baseRate: 9000, image: "https://www.hyundai-motor.com.tw/images/car/elantra/2024/visual-slide1.jpg" },
    { id: "bmw3", name: "BMW 3 Series", category: "luxury", baseRate: 15000, image: "https://www.topgear.com/sites/default/files/2022/05/P90462345_highRes_the-all-new-bmw-330e.jpg" }
  ],
  suv: [
    { id: "fortuner", name: "Toyota Fortuner", category: "suv", baseRate: 15000, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-19.jpeg" },
    { id: "brv", name: "Honda BR-V", category: "suv", baseRate: 9000, image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Honda-BRV/6182/1544773284756/front-left-side-47.jpg" },
    { id: "sportage", name: "Kia Sportage", category: "suv", baseRate: 12000, image: "https://www.kia.com/content/dam/kia/us/en/vehicles/sportage/2023/trims/sx-prestige-awd/exterior/whatsthefeature/2023-sportage-sx-prestige-awd-everlasting-silver-beauty-cover.png" },
    { id: "rush", name: "Toyota Rush", category: "suv", baseRate: 10000, image: "https://imgcdn.zigwheels.ph/medium/gallery/color/34/135/toyota-rush-color-571108.jpg" },
    { id: "tucson", name: "Hyundai Tucson", category: "suv", baseRate: 13000, image: "https://www.hyundai.com/content/dam/hyundai/au/en/models/tucson/tucson-2021/gallery/1600x900/AU_Tucson_Gallery_Exterior_1600x900_5.jpg" },
    { id: "pajero", name: "Mitsubishi Pajero", category: "suv", baseRate: 14000, image: "https://www.pakwheels.com/blog/wp-content/uploads/2021/05/pajero-1-696x464.jpg" }
  ],
  commercial: [
    { id: "bolan", name: "Suzuki Bolan", category: "commercial", baseRate: 5000, image: "https://suzukifortmotors.com/wp-content/uploads/2020/01/ravi.png" },
    { id: "ravi", name: "Suzuki Ravi", category: "commercial", baseRate: 4500, image: "https://suzuki.com.pk/wp-content/uploads/2018/10/Ravi.jpg" },
    { id: "hiace", name: "Toyota Hiace", category: "commercial", baseRate: 8000, image: "https://toyota-indus.com/wp-content/uploads/2020/01/hiace-comm-Ambulance-Colors-White.png" },
    { id: "shehzore", name: "Shehzore", category: "commercial", baseRate: 7000, image: "https://fastly-production.24c.in/hello-ar/dev/uploads/197bce4b-9fdc-4c08-afcd-1d95af8e7f09/8e6c022c-6c39-490a-9b8a-2bd49a04e3ac/83.jpg" },
    { id: "porter", name: "Hyundai Porter", category: "commercial", baseRate: 6000, image: "https://www.auto-data.net/images/f98/Hyundai-Porter-II_1.jpg" },
    { id: "coaster", name: "Toyota Coaster", category: "commercial", baseRate: 12000, image: "https://toyota-indus.com/wp-content/uploads/2020/01/coaster-Colors-White.png" }
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
