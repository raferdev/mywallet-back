import express from "express";
import getHome from "../controllers/home/getHome.js";
import getLogs from "../controllers/home/getLogs.js";
import persistTokenMdw from "../middlewares/persistTokenMdw.js";
const homeRoute = express.Router();
homeRoute.get("/home", persistTokenMdw, getHome);
homeRoute.get("/home/logs",persistTokenMdw,getLogs)
export default homeRoute;
