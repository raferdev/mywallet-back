import express from "express";
import postNewDeb from "../controllers/logs/postNewDeb.js";
import postNewPay from "../controllers/logs/postNewPay.js";
import attStorageMdw from "../middlewares/attStorageMdw.js";
import logsJoiMdw from "../middlewares/logsJoiMdw.js";
import logStorageMdw from "../middlewares/logStorageMdw.js";
import persistTokenMdw from "../middlewares/persistTokenMdw.js";
import subStorageMdw from "../middlewares/subStorageMdw.js";
const logsRoute = express.Router();
logsRoute.post("/home/new-deposit",persistTokenMdw,logsJoiMdw,logStorageMdw,attStorageMdw,postNewDeb)
logsRoute.post("/home/new-payment",persistTokenMdw,logsJoiMdw,logStorageMdw,subStorageMdw,postNewPay)
export default logsRoute;