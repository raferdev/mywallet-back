import "dotenv/config";
import express from "express";
import cors from "cors";
import rootRoute from "./routes/rootRoute.js";
import authRoute from "./routes/authRoute.js";
import homeRoute from "./routes/homeRoute.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(rootRoute);
app.use(authRoute);
app.use(homeRoute)
app.listen(process.env.PORTA);
