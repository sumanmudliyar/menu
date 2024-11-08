import express from "express";
import { getClientDetailController } from "../controller/client";

const router = express.Router();

router.get("/getClientDetail/:clientid", getClientDetailController);

export default router;
