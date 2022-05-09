import express from "express";
import getLogout from "../controllers/logout/getLogout.js";
import persistTokenMdw from "../middlewares/persistTokenMdw.js";
const logoutRoute = express.Router();
logoutRoute.get("/logout",persistTokenMdw,getLogout)
export default logoutRoute;