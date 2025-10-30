import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import catalogRoutes from "./routes/catalogRoutes.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
connectDB();

app.use("/api/catalog", catalogRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
