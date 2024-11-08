import { Response } from "express";
import { Request } from "express";
import { createTabService, getTabsByClientService } from "../services/tabs";

export const getTabsByClientIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getTabsByClientService(Number(req.query.clientid));
    return res.json(result);
  } catch (error) {
    return res.json("error");
  }
};

export const createTabController = async (req: Request, res: Response) => {
  try {
    const result = await createTabService(req.body.tabname, req.body.clientid);
    return res.json(result);
  } catch (error) {
    return res.json("create tab error");
  }
};
