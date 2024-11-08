import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// console.log(process.env.DB_HOST);

// export const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   "nsnsnygg@bb^9!##jdjdjdj",
//   {
//     host: "" + process.env.DB_HOST,
//     port: Number(process.env.DB_PORT),
//     logging: console.log,
//     dialect:
//       "mariadb" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
//   }
// );

export const humhubDatabase = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: console.log,
  }
);
