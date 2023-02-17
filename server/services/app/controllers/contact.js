const { User, Contact } = require("../models");

class ContactController {
  static async addContact(req, res, next) {
    try {
      const { id } = req.User;
      const { email, alias } = req.body;

      const userData = await User.findOne({ where: { email } });
      if (!userData) throw { name: "not_found" };

      const [contactData, isCreated] = await Contact.findOrCreate({
        where: {
          UserId: id,
          TargetId: userData.id,
        },
        defaults: {
          alias,
        },
      });

      res.status(201).json(contactData);
    } catch (error) {
      next(error);
    }
  }

  static async getContact(req, res, next) {
    try {
      const { id } = req.User;

      const userContactData = await Contact.findAll({
        where: { UserId: id },
        include: { model: User, attributes: ["email"] },
      });
      res.status(200).json(userContactData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ContactController;
