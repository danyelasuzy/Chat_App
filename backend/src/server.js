import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { server } from "./lib/socket.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/{*any}", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  console.log(`Socket.IO server is running on http://localhost:${PORT}`);
  connectDB();
});
