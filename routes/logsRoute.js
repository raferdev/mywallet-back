import express from "express";
import postNewDeb from "../controllers/logs/postNewDeb.js";
import postNewPay from "../controllers/logs/postNewPay.js";
import persistTokenMdw from "../middlewares/persistTokenMdw.js";
const logsRoute = express.Router();
logsRoute.post("/home/new-deposit",persistTokenMdw,postNewDeb)
logsRoute.post("/home/new-payment",persistTokenMdw,postNewPay)
export default logsRoute;