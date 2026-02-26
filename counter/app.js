import express from "express";
import pg from "pg";
import morgan from "morgan";
import cors from "cors";
const { Pool } = pg;

// Create an instance of the Express application
const app = express();
const port = 3000;

// PostgreSQL connection configuration
const pool = new Pool({
  host: "localhost", // PostgreSQL server address
  port: 5432, // PostgreSQL default port
  user: "personal", // PostgreSQL username
  password: "3369", // PostgreSQL password
  database: "WebDev", // PostgreSQL database name
});

// Enable CORS for React app
app.use(
  cors({
    origin: "http://localhost:5173", // React app origin address
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// Middleware to parse JSON bodies
app.use(express.json());
app.use(morgan("dev"));

// Home Page
app.get("/counter", (req, res) => {
  res.send(
    "<h1>Welcome to the Home Page</h1>\
    <p>This is the home page of Fun 05 Postgres Counter API.</p>",
  );
});

// Save Counter Data
app.post("/counter/save", async (req, res) => {
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

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});