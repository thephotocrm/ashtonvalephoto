import type { Express } from "express";
import { createServer, type Server } from "http";
import rateLimit from "express-rate-limit";
import { storage } from "./storage";
import { insertInquirySchema, insertReviewSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { isMetaCapiConfigured, sendLeadEvent } from "./services/meta-capi";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  const submissionLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: { message: "Too many submissions. Please try again in a few minutes." },
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) =>
      req.headers["x-forwarded-for"]?.toString().split(",")[0].trim() ||
      req.ip ||
      "unknown",
  });

  // Inquiries
  app.post("/api/inquiries", submissionLimiter, async (req, res) => {
    // Honeypot: bots auto-fill this hidden field; humans never see it
    if (req.body.website) {
      console.log("Honeypot triggered on /api/inquiries — skipping submission");
      res.status(200).json({ id: Date.now(), status: "pending" });
      return;
    }

    try {
      const validatedData = insertInquirySchema.parse(req.body);

      // Send data to Zapier webhook (fire-and-forget)
      fetch("https://hooks.zapier.com/hooks/catch/13593170/u0rplw1/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      }).catch((err) => console.error("Zapier webhook error:", err));

      // Try to save to database
      let inquiry: any = null;
      try {
        inquiry = await storage.createInquiry(validatedData);
      } catch (dbError) {
        console.error("Database insert failed (lead still sent to Zapier):", dbError);
      }

      // Send Lead event to Meta Conversions API (fire-and-forget)
      if (isMetaCapiConfigured()) {
        sendLeadEvent({
          email: validatedData.email,
          phone: validatedData.phone,
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          userAgent: req.headers["user-agent"],
          ipAddress: req.ip || req.headers["x-forwarded-for"]?.toString().split(",")[0],
          eventSourceUrl: req.headers.referer || req.headers.origin,
          eventId: inquiry ? `inquiry_${inquiry.id}` : `inquiry_${Date.now()}`,
        });
      }

      res.status(201).json(inquiry || { id: Date.now(), ...validatedData, status: "pending" });
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

  app.post("/api/reviews", submissionLimiter, async (req, res) => {
    // Honeypot check
    if (req.body.website) {
      console.log("Honeypot triggered on /api/reviews — skipping submission");
      res.status(200).json({ id: Date.now(), status: "success" });
      return;
    }

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
