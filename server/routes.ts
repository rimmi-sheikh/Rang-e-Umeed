import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // PDF download route
  app.get("/api/download/:filename", (req, res) => {
    const filename = req.params.filename;
    
    // Security: Sanitize filename to prevent path traversal
    const sanitizedFilename = path.basename(filename);
    if (sanitizedFilename !== filename || filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
      return res.status(400).json({ 
        message: "Invalid filename",
        error: "Filename contains invalid characters"
      });
    }
    
    const pdfDir = path.join(process.cwd(), "public", "pdfs");
    const filePath = path.join(pdfDir, sanitizedFilename);
    
    // Ensure the resolved path is within the allowed directory
    if (!filePath.startsWith(pdfDir)) {
      return res.status(400).json({ 
        message: "Invalid file path",
        error: "File path is outside allowed directory"
      });
    }
    
    // Check if file exists
    if (fs.existsSync(filePath)) {
      res.download(filePath, sanitizedFilename);
    } else {
      // For demo purposes, return a placeholder response
      res.status(404).json({ 
        message: "PDF not yet available. This is a demo website - the actual PDF guide will be added by the organization.",
        filename: sanitizedFilename 
      });
    }
  });

  // PDF viewing route
  app.get("/api/view/:filename", (req, res) => {
    const filename = req.params.filename;
    
    // Security: Sanitize filename to prevent path traversal
    const sanitizedFilename = path.basename(filename);
    if (sanitizedFilename !== filename || filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
      return res.status(400).json({ 
        message: "Invalid filename",
        error: "Filename contains invalid characters"
      });
    }
    
    const pdfDir = path.join(process.cwd(), "public", "pdfs");
    const filePath = path.join(pdfDir, sanitizedFilename);
    
    // Ensure the resolved path is within the allowed directory
    if (!filePath.startsWith(pdfDir)) {
      return res.status(400).json({ 
        message: "Invalid file path",
        error: "File path is outside allowed directory"
      });
    }
    
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
        filename: sanitizedFilename 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
