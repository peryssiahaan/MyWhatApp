const { User } = require("../models");
const { detokenize } = require("../helpers/authenticate");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;

    if (!access_token) throw { name: "invalid_token" };
    const payload = detokenize(access_token);
    const data = await User.findOne({ where: { id: payload.id } });
    if (!data) throw { name: "invalid_token" };

    req.User = { id: data.id };

    console.log(payload);
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;
