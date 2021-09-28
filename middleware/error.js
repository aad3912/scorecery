import ErrorResponse from "../utils/errorResponse.js";

const BAD_REQUEST = 400;
const SERVER_ERROR = 500;

const MONGO_DUPLICATE_VALUE = 11000;

const errorHandler = (err, _req, res, _next) => {
  let error = { message: err.message, statusCode: err.statusCode };
  if (err.code === MONGO_DUPLICATE_VALUE) {
    const message = "Email has already been used before";
    error = new ErrorResponse(message, BAD_REQUEST);
  } else if (err.name === "validationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, BAD_REQUEST);
  }
  res.status(error.statusCode || SERVER_ERROR).json({
    success: false,
    error: error.message || "Server Error",
  });
};

export default errorHandler;
