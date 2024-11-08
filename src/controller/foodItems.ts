import { Response } from "express";
import { Request } from "express";
import { getFooditemsFromTabService } from "../services/fooditems";

export const getFoodItemsFromTabController = async (
  req: Request,
  res: Response
) => {
  const result = await getFooditemsFromTabService(Number(req.params.tabid));
  return res.json(result);
};
