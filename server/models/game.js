import { DATE, INTEGER, STRING } from "sequelize";
import sequelize from "../db.js";

const Game = sequelize.define("game", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  game_name: {
    type: STRING,
    allowNull: false,
  },

  genre: {
    type: STRING,
    allowNull: false,
    unique: false,
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

export default Game;
