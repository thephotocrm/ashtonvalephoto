import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectMetaTags } from "./seo";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Read index.html into memory once
  const indexHtml = fs.readFileSync(
    path.resolve(distPath, "index.html"),
    "utf-8",
  );

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (req, res) => {
    const html = injectMetaTags(indexHtml, req.originalUrl);
    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  });
}
