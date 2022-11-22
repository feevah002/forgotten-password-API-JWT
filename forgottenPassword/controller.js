const repository = require("./repository");

exports.signUpController = async (req, res, next) => {
  
  const signupService = await repository.signup(req.body);
  return res.json(signupService);
};


exports.resetPasswordRequestController = async (req, res, next) => {
  const requestPasswordResetService = await repository.requestPasswordReset(
    req.body.email
  );
  return res.json(requestPasswordResetService);
};


exports.resetPasswordController = async (req, res, next) => {
  const resetPasswordService = await repository.resetPassword(
    req.body.userId,
    req.body.token,
    req.body.password
  );
  return res.json(resetPasswordService);
};

