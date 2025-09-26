import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // PDF download route
  app.get("/api/download/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(process.cwd(), "public", "pdfs", filename);
    
    // Check if file exists
    if (fs.existsSync(filePath)) {
      res.download(filePath, filename);
    } else {
      // For demo purposes, return a placeholder response
      res.status(404).json({ 
        message: "PDF not yet available. This is a demo website - the actual PDF guide will be added by the organization.",
        filename: filename 
      });
    }
  });

  // PDF viewing route
  app.get("/api/view/:filename", (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(process.cwd(), "public", "pdfs", filename);
    
    // Check if file exists
    if (fs.existsSync(filePath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline');
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    } else {
      // For demo purposes, return a placeholder response
      res.status(404).json({ 
        message: "PDF not yet available. This is a demo website - the actual PDF guide will be added by the organization.",
        filename: filename 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
