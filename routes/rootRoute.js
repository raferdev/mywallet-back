import express from "express";
import { getRoot } from "../controllers/root/getRoot.js";
const rootRoute = express.Router();
rootRoute.get('/',getRoot);
export default rootRoute;