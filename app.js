import "dotenv/config";
import express from "express";
import cors from "cors";
import rootRoute from "./routes/rootRoute.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(rootRoute);
app.listen(process.env.PORTA);