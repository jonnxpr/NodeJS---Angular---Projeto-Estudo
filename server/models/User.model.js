import { DATE, INTEGER, STRING } from "sequelize";
import { define } from "../db.js";

const User = define("user", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: STRING,
    allowNull: false,
  },

  email: {
    type: STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: STRING,
    allowNull: false,
  },

  createdAt: {
    type: DATE,
    allowNull: false,
  },

  updatedAt: {
    type: DATE,
    allowNull: false,
  },
});

module.exports = {
  initialize: (sequelize) => {
    this.model = sequelize.define("user", User);
  },

  createUser: (user) => {
    return this.model.create(user);
  },
};

export default User;
