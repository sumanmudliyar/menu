import { getFooditemsFromTabRepo } from "../repo/foodItems";
import { findFoodPicture } from "./tabs";
import path from "path";

export const getFooditemsFromTabService = async (tabId: Number) => {
  const resultResponse = await getFooditemsFromTabRepo(Number(tabId));

  let foodItems: any[] = await Promise.all(
    resultResponse?.map(async (fooditem: any) => {
      const foodPicture = await findFoodPicture(
        path.join(__dirname, "../../uploads/food"),
        fooditem?.id
      );

      const foodpictureURL = foodPicture?.map((filePath) => {
        return "uploads/food/" + path.basename(filePath);
      });

      console.log("foodpictureURL", foodpictureURL);

      return {
        ...fooditem,
        foodpictureURL,
      };
    })
  );

  return foodItems;
};
