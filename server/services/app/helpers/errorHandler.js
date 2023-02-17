function errorHandler(err, req, res, next) {
  console.log(err);
  let code, message;

  switch (err.name) {
    case "empty_email":
      code = 400;
      message = "Email is required";
      break;
    case "empty_password":
      code = 400;
      message = "Password is required";
      break;
    case "invalid_ep":
      code = 401;
      message = "Invalid email or password";
      break;
    case "SequelizeUniqueConstraintError":
    case "SequelizeValidationError":
      code = 400;
      message = err.errors[0].message;
      break;
    case "invalid_token":
    case "JsonWebTokenError":
      code = 403;
      message = "Invalid Token";
      break;
    case "not_found":
      code = 404;
      message = "Data not found";
      break;
    default:
      code = 500;
      message = "Internal server error";
      break;
  }

  res.status(code).json({ message });
}

module.exports = errorHandler;
