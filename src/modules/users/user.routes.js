import express from "express";
import { signIn, signUp } from "./user.controller.js";
import { checkEmail } from "../../middleware/checkEamil.js";

const userRoute = express.Router();

userRoute.post("/signUp", checkEmail, signUp);
userRoute.post("/signIn", signIn);

export default userRoute;
