import User from "../models/Users.js";
import ErrorResponse from "../utils/errorResponse.js";

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    return sendToken(user, res, 201);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    return next(
      new ErrorResponse("Please provide an email and a password", 400)
    );
  }

  // TODO: check why +password required and what .select() does.
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorResponse("Invalid email", 401));
    }

    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return next(new ErrorResponse("Invalid password", 401));
    }

    return sendToken(user, res, 200);
  } catch (error) {
    next(error);
  }
};

const sendToken = (user, res, status) => {
  const token = user.getSignedToken();
  res.status(status).json({
    success: true,
    leagues: user.leagues,
    username: user.username,
    token,
  });
};
