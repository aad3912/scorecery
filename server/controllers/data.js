import ErrorResponse from "../utils/errorResponse.js";

export const addLeagues = async (req, res, next) => {
  const { leagues } = req.body;
  if (!(leagues && leagues.length)) {
    const message = "Please provide some leagues to add.";
    return next(new ErrorResponse(message, 400));
  }
  const user = req.user;
  try {
    user.addLeagues(leagues);
    await user.save();
    res.status(201).json({
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

export const removeLeague = async (req, res, next) => {
  const { leagueId } = req.body;
  if (typeof leagueId !== "number") {
    const message = "'leagueId' must be provided (as a number).";
    return next(new ErrorResponse(message, 400));
  }

  if (leagueId < 0) {
    const message = "Please chose a (valid) league id.";
    return next(new ErrorResponse(message, 400));
  }

  const user = req.user;
  try {
    user.removeLeague(leagueId);
    await user.save();
    res.status(201).json({
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};
