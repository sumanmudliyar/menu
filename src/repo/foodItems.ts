import { local_sequelize } from "../connection";
import foodItem from "../model/foodItem";
const { QueryTypes } = require("sequelize");

export const getFooditemsFromTabRepo = async (tabId: number) => {
  const getFoodItem = await local_sequelize.query(
    `select*from fooditems where tabId='${tabId}'`,
    {
      type: QueryTypes.SELECT,
    }
  );
  return getFoodItem;
};

export const createFoodItemRepo = async (
  name: string,
  description: string,
  price: number,
  tabId: number
) => {
  const createItem = await foodItem.create({
    name,
    description,
    price,
    tabId,
  });
  return createItem;
};
