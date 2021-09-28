import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import privateRouter from "./routes/data.js";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/error.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

/* Setup */
dotenv.config(); // access .env variables
connectDB(); // connect to mongodb
const app = express(); // use express
const DEFAULT_PORT = 5000;
const PORT = process.env.PORT || DEFAULT_PORT;

/* Global Middleware */
app.use(cors()); // CORS
app.use(express.json()); // Populates req.body

/* Connect Routes */
app.use("/api/auth", authRouter); // auth
app.use("/api/", privateRouter); // private route
if (process.env.NODE_ENV === "production") {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  app.use(express.static(path.join(__dirname, "front-end", "build")));
  app.get("*", (_req, res) => {
    res
      .status(200)
      .sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (_req, res) => {
    res.status(200).send("Api running");
  });
}

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
