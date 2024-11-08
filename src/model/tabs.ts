import { DataTypes, Model } from "sequelize";
import { local_sequelize } from "../connection";

class Tabs extends Model {}

Tabs.init(
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

    sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: local_sequelize,
    modelName: "tabs",
    paranoid: true,
  }
);

export default Tabs;
