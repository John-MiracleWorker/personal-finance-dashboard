import 'dotenv/config';
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);

// Database connection
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is required");
}

const sql = postgres(connectionString);
const db = drizzle(sql);

// Session configuration
const PgSession = connectPgSimple(session);

app.use(session({
  store: new PgSession({
    conString: connectionString,
    tableName: 'session',
    createTableIfMissing: true,
  }),
  secret: process.env.SESSION_SECRET || 'your-secret-key-here',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  },
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In production, serve static files from the built client
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../dist/public")));
}

// API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Basic user endpoint
app.get("/api/user", (req, res) => {
  // For now, return a default user
  // This will be replaced with proper authentication
  res.json({
    id: "1",
    name: "Trent",
    email: "trent@example.com",
  });
});

// Catch-all handler for client-side routing in production
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/public/index.html"));
  });
}

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});

export { app, server, db };