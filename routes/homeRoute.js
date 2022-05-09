import express from "express";
import getHome from "../controllers/home/getHome.js";
import persistTokenMdw from "../middlewares/persistTokenMdw.js";
const homeRoute = express.Router();
homeRoute.get("/home", persistTokenMdw, getHome);
export default homeRoute;
