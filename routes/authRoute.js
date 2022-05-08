import express from "express";
import postSignUp from "../controllers/auth/postSignUp.js";
const authRoute = express.Router();
authRoute.get('/login',);
authRoute.post('/sign-up',postSignUp)
export default authRoute;