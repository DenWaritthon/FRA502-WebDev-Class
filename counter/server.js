import express from "express";
import path from "path";
import fs from "fs";
import morgan from "morgan";
import pg from "pg";
import { fileURLToPath } from "url";
import 'dotenv/config';

const { Pool } = pg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configure server settings
const appName = process.env.APP_NAME;
const username = process.env.USER;
const mountBase = `/${username}/${appName}`;

const socketPath = `/home/${username}/apps/${appName}/app.sock`;
const distPath = path.join(__dirname, "dist");

// Postgres connection pool
const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT ),
  user: process.env.PGUSER ,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

// Middleware setup
app.use(express.json());
app.use(morgan("dev"));

// Serve static files
const apiBase = `${mountBase}/api`;

// Health check endpoint
app.get("/api/health", async (_req, res) => {
  const r = await pool.query("SELECT 1 AS ok");
  res.json({ ok: r.rows[0].ok });
});

// Save Counter Data
app.post("/api/save", async (req, res) => {
  const { male_count, female_count, total_count } = req.body;

  const query = "INSERT INTO counter_logs (male_count, female_count, total_count)VALUES ($1, $2, $3)";
  const values = [male_count, female_count, total_count];

  try {
    await pool.query(query, values);
    res.json({ message: "Counter data saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while saving counter data" });
  }
});

// Get Counter Logs
app.get("/api/logs/:from/:to", async (req, res) => {
  const { from, to } = req.params;
  console.log("PARAMS:", req.params, "URL:", req.originalUrl);

  if (!from || !to) {
    return res.status(400).json({ error: "from and to are required" });
  }

  const fromIso = decodeURIComponent(from);
  const toIso = decodeURIComponent(to);
  if (Number.isNaN(Date.parse(fromIso)) || Number.isNaN(Date.parse(toIso))) {
    return res.status(400).json({ error: "invalid date format" });
  }

  const query = `
    SELECT id, male_count, female_count, total_count, created_at
    FROM counter_logs
    WHERE created_at >= $1::timestamptz
      AND created_at <  $2::timestamptz
    ORDER BY created_at DESC
    LIMIT 500;
  `;

  try {
    const result = await pool.query(query, [fromIso, toIso]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred while fetching logs" });
  }
});

// Serve static files for the frontend
app.use(mountBase, express.static(distPath));
app.use("/", express.static(distPath));

// Fallback to index.html for client-side routing
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Start the server
if (fs.existsSync(socketPath)) fs.unlinkSync(socketPath);

app.listen(socketPath, () => {
  console.log(`${appName} is running on socket: ${socketPath}`);
  fs.chmodSync(socketPath, "777");
});