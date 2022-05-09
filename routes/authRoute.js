import express from "express";
import postLogin from "../controllers/auth/postLogin.js";
import postSignUp from "../controllers/auth/postSignUp.js";
import authDuplicateMdw from "../middlewares/auth/authDuplicateMdw.js";
import authJoiMdw from "../middlewares/auth/authJoiMdw.js";
import authLoginJoiMdw from "../middlewares/auth/authLoginJoiMdw.js";
const authRoute = express.Router();
authRoute.get('/sign-in',authLoginJoiMdw,postLogin);
authRoute.post('/sign-up',authJoiMdw,authDuplicateMdw,postSignUp)
export default authRoute;