import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const submission = insertContactFormSchema.parse(req.body);
      const result = await storage.createContactSubmission(submission);
      res.status(201).json({ 
        message: "Thank you for your message! We'll get back to you soon.",
        data: result 
      });
    } catch (err) {
      if (err instanceof ZodError) {
        const validationError = fromZodError(err);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An error occurred while submitting the form" });
      }
    }
  });

  // Get all contact form submissions
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json(submissions);
    } catch (err) {
      res.status(500).json({ message: "An error occurred while retrieving submissions" });
    }
  });

  return httpServer;
}
