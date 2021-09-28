import { Router } from "express";
import { protect } from "../middleware/auth.js";
import { addLeagues, removeLeague } from "../controllers/data.js";

const privateRouter = Router();

// Add protect middleware for private routes
privateRouter.route("/leagues/add").get(protect, addLeagues);
privateRouter.route("/leagues/remove").get(protect, removeLeague);

export default privateRouter;
