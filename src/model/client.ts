import { DataTypes, Model } from "sequelize";
import { local_sequelize } from "../connection";

class client extends Model {}

client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: local_sequelize,
    modelName: "client",
    paranoid: true,
  }
);

export default client;
