import jwt from "jsonwebtoken";
import User from "../models/Users.js";
import ErrorResponse from "../utils/errorResponse.js";

export const protect = async (req, _res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    const message = "Unauthorised to access this route";
    return next(new ErrorResponse(message, 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  try {
    const user = await User.findById(decoded.id);

    if (!user) {
      const message = "User not found";
      return next(new ErrorResponse(message, 404));
    }

    req.user = user;

    next();
  } catch (error) {
    return next(error.message);
  }
};
