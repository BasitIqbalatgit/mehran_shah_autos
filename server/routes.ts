// server/routes.ts
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactSchema } from "@shared/schema";
import { sendContactEmail, sendBookingConfirmation } from "./mail";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking routes
  app.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const newBooking = await storage.createBooking(bookingData);
      
      // Send booking confirmation email
      await sendBookingConfirmation(bookingData);
      
      res.status(201).json(newBooking);
    } catch (error) {
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Invalid booking data" 
      });
    }
  });
  
  // Contact form routes
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const newContact = await storage.createContact(contactData);
      
      // Send notification email
      await sendContactEmail(contactData);
      
      res.status(201).json(newContact);
    } catch (error) {
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Invalid contact data" 
      });
    }
  });

  // Vehicle data routes
  app.get("/api/vehicles/:type", (req, res) => {
    const { type } = req.params;
    const validTypes = ["economy", "luxury", "suv", "commercial"];
    
    if (!validTypes.includes(type)) {
      return res.status(400).json({ message: "Invalid vehicle type" });
    }
    
    // In a real app, this would come from a database
    const vehiclesByType = {
      economy: [
        { id: "mehran", name: "Suzuki Mehran", baseRate: 3500 },
        { id: "alto", name: "Suzuki Alto", baseRate: 4000 },
        { id: "wagonr", name: "Suzuki Wagon R", baseRate: 4500 },
        { id: "swift", name: "Suzuki Swift", baseRate: 5000 }
      ],
      luxury: [
        { id: "civic", name: "Honda Civic", baseRate: 8000 },
        { id: "corolla", name: "Toyota Corolla", baseRate: 7500 },
        { id: "accord", name: "Honda Accord", baseRate: 10000 },
        { id: "camry", name: "Toyota Camry", baseRate: 12000 }
      ],
      suv: [
        { id: "fortuner", name: "Toyota Fortuner", baseRate: 15000 },
        { id: "brv", name: "Honda BR-V", baseRate: 9000 },
        { id: "sportage", name: "Kia Sportage", baseRate: 12000 },
        { id: "rush", name: "Toyota Rush", baseRate: 10000 }
      ],
      commercial: [
        { id: "bolan", name: "Suzuki Bolan", baseRate: 5000 },
        { id: "ravi", name: "Suzuki Ravi", baseRate: 4500 },
        { id: "hiace", name: "Toyota Hiace", baseRate: 8000 },
        { id: "shehzore", name: "Shehzore", baseRate: 7000 }
      ]
    };
    
    res.json(vehiclesByType[type as keyof typeof vehiclesByType]);
  });

  const httpServer = createServer(app);

  return httpServer;
}
