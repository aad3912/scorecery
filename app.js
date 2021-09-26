import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import privateRouter from "./routes/private.js";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/error.js";

/* Setup */
dotenv.config({ path: "./config.env" }); // access .env variables
connectDB(); // connect to mongodb
const app = express(); // use express
const DEFAULT_PORT = 5000;
const PORT = process.env.PORT || DEFAULT_PORT;

/* Global Middleware */
app.use(cors()); // CORS
app.use(express.json()); // Populates req.body

/* Connect Routes */
app.use("/api/auth", authRouter); // auth
app.use("/", privateRouter); // private route

/* Error Handler */
app.use(errorHandler);

/* Setup server on PORT number */
const server = app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}...`)
);

/* Handle errors for unhandled rejections */
process.on("unhandledRejection", (err) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
