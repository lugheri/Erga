import {Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DATABASE as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: parseInt(process.env.PORT as string),
    timezone: '-3:00',
  }
)

