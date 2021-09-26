const getPrivateData = (_req, res, _next) => {
  res.status(200).json({
    success: true,
    message: "Congratulations, you are now logged in!",
  });
};

export default getPrivateData;
