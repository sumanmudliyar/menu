import { DataTypes, Model } from "sequelize";
import { local_sequelize } from "../connection";
import Tabs from "./tabs";

class foodItem extends Model {}

foodItem.init(
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tabId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: local_sequelize,
    modelName: "foodItem",
    paranoid: false,
  }
);

export default foodItem;
