"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contact.belongsTo(models.User, { foreignKey: "TargetId" });
    }
  }
  Contact.init(
    {
      UserId: DataTypes.INTEGER,
      TargetId: DataTypes.INTEGER,
      alias: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Contact",
    }
  );
  return Contact;
};
