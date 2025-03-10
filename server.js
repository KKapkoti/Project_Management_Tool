//server.js
import express from "express";
import 'dotenv/config';
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";

connectDB();

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.use('/api', projectRoutes);

const PORT = process.env.SERVER_PORT || 9000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
