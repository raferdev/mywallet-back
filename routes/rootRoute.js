import express from "express";
import { getRoot } from "../controllers/root/getRoot.js";
import persistTokenMdw from "../middlewares/persistTokenMdw.js"
const rootRoute = express.Router();
rootRoute.get('/',persistTokenMdw,getRoot);
export default rootRoute;