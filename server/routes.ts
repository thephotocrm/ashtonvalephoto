import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertReviewSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Inquiries
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error creating inquiry:", error);
        res.status(500).json({ message: "Failed to submit inquiry" });
      }
    }
  });

  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ message: "Failed to fetch inquiries" });
    }
  });

  app.get("/api/inquiries/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid inquiry ID" });
        return;
      }
      
      const inquiry = await storage.getInquiryById(id);
      if (!inquiry) {
        res.status(404).json({ message: "Inquiry not found" });
        return;
      }
      
      res.json(inquiry);
    } catch (error) {
      console.error("Error fetching inquiry:", error);
      res.status(500).json({ message: "Failed to fetch inquiry" });
    }
  });

  app.patch("/api/inquiries/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid inquiry ID" });
        return;
      }
      
      if (!status || typeof status !== "string") {
        res.status(400).json({ message: "Status is required" });
        return;
      }
      
      const inquiry = await storage.updateInquiryStatus(id, status);
      if (!inquiry) {
        res.status(404).json({ message: "Inquiry not found" });
        return;
      }
      
      res.json(inquiry);
    } catch (error) {
      console.error("Error updating inquiry:", error);
      res.status(500).json({ message: "Failed to update inquiry" });
    }
  });

  // Photographers
  app.get("/api/photographers", async (req, res) => {
    try {
      const photographers = await storage.getPhotographers();
      res.json(photographers);
    } catch (error) {
      console.error("Error fetching photographers:", error);
      res.status(500).json({ message: "Failed to fetch photographers" });
    }
  });

  app.get("/api/photographers/featured", async (req, res) => {
    try {
      const photographers = await storage.getFeaturedPhotographers();
      res.json(photographers);
    } catch (error) {
      console.error("Error fetching featured photographers:", error);
      res.status(500).json({ message: "Failed to fetch photographers" });
    }
  });

  app.get("/api/photographers/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid photographer ID" });
        return;
      }
      
      const photographer = await storage.getPhotographerById(id);
      if (!photographer) {
        res.status(404).json({ message: "Photographer not found" });
        return;
      }
      
      res.json(photographer);
    } catch (error) {
      console.error("Error fetching photographer:", error);
      res.status(500).json({ message: "Failed to fetch photographer" });
    }
  });

  // Portfolio
  app.get("/api/portfolio", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      const items = await storage.getPortfolioItems(category);
      res.json(items);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
      res.status(500).json({ message: "Failed to fetch portfolio" });
    }
  });

  app.get("/api/portfolio/featured", async (req, res) => {
    try {
      const items = await storage.getFeaturedPortfolioItems();
      res.json(items);
    } catch (error) {
      console.error("Error fetching featured portfolio:", error);
      res.status(500).json({ message: "Failed to fetch portfolio" });
    }
  });

  // Reviews
  app.get("/api/reviews", async (req, res) => {
    try {
      const reviews = await storage.getReviews();
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  });

  app.get("/api/reviews/featured", async (req, res) => {
    try {
      const reviews = await storage.getFeaturedReviews();
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching featured reviews:", error);
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  });

  app.post("/api/reviews", async (req, res) => {
    try {
      const validatedData = insertReviewSchema.parse(req.body);
      const review = await storage.createReview(validatedData);
      res.status(201).json(review);
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error creating review:", error);
        res.status(500).json({ message: "Failed to submit review" });
      }
    }
  });

  return httpServer;
}
