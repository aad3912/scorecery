import { Router } from "express";
import * as authController from "../controllers/auth.js";

const authRouter = Router();

authRouter.route("/register").post(authController.register);
authRouter.route("/login").post(authController.login);

export default authRouter;
