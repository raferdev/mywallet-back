import express from "express";
import postSignUp from "../controllers/auth/postSignUp.js";
import authDuplicateMdw from "../middlewares/authDuplicateMdw.js";
import authJoiMdw from "../middlewares/authJoiMdw.js";
const authRoute = express.Router();
authRoute.get('/login',);
authRoute.post('/sign-up',authJoiMdw,authDuplicateMdw,postSignUp)
export default authRoute;