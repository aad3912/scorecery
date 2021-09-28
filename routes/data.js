import { Router } from "express";
import { protect } from "../middleware/auth.js";
import { addLeagues, removeLeague } from "../controllers/data.js";

const privateRouter = Router();

// Add protect middleware for private routes
privateRouter.route("/leagues/add").post(protect, addLeagues);
privateRouter.route("/leagues/remove").post(protect, removeLeague);

export default privateRouter;
