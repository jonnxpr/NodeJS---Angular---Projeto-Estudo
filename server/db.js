import { Sequelize } from "sequelize";
const sequelize = new Sequelize("postgres://postgres:51525354aff@localhost:5433/gamedb", { dialect: "postgres" });

export default sequelize;
