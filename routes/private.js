import { Router } from "express";
import getPrivateData from "../controllers/private.js";
import { protect } from "../middleware/auth.js";

const privateRouter = Router();

// Add protect middleware for private routes
privateRouter.route("/").get(protect, getPrivateData);

export default privateRouter;
