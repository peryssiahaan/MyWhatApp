"use strict";
const { Model } = require("sequelize");
const { hashHelperFunc } = require("../helpers/hasher");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg: "email must be unique" },
        validate: {
          notNull: { msg: "email cannot be null" },
          notEmpty: { msg: "email cannot be empty" },
          isEmail: { msg: "not a valid email format" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "password cannot be null" },
          notEmpty: { msg: "password cannot be empty" },
          len: {
            args: [[4, 10]],
            msg: "password length must between 4 and 10",
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "username cannot be null" },
          notEmpty: { msg: "username cannot be empty" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((instance) => {
    instance.password = hashHelperFunc(instance.password);
  });
  return User;
};
