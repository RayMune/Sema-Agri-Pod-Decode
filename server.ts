import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from the root
app.use(express.static(__dirname));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Serve index.html for all other routes
app.get("*", async (req, res) => {
  const fs = await import("fs/promises");
  let html = await fs.readFile(path.join(__dirname, "index.html"), "utf-8");
  
  // Inject the API key from the environment
  const apiKey = process.env.GEMINI_API_KEY || "";
  html = html.replace('const API_KEY = "process.env.GEMINI_API_KEY";', `const API_KEY = "${apiKey}";`);
  
  res.send(html);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Sema Agri-Pod server running on http://localhost:${PORT}`);
});
