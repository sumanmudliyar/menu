import express from "express";
import { getFoodItemsFromTabController } from "../controller/foodItems";
import { getTabsByClientIdController } from "../controller/tabs";

const router = express.Router();

router.post("/fooditem/:tabid", getFoodItemsFromTabController);
router.get("/allTabs", getTabsByClientIdController);

export default router;
