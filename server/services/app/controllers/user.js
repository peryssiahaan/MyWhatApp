const { User } = require("../models");
const { validateHashHelperFunc } = require("../helpers/hasher");
const { tokenize } = require("../helpers/authenticate");

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password, username } = req.body;
      const data = await User.create({ email, password, username });
      const { dataValues } = data;
      const { password: pass, ...realReturn } = dataValues;
      res.status(201).json(realReturn);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "empty_email" };
      if (!password) throw { name: "empty_password" };

      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "invalid_ep" };
      const validUser = validateHashHelperFunc(password, user.password);
      if (!validUser) throw { name: "invalid_ep" };

      const access_token = tokenize({ id: user.id, email: user.email });
      res.status(200).json({ access_token, username: user.username });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
