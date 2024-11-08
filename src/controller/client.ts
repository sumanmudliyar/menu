import { Response } from "express";
import { Request } from "express";
import { getClientDetailService } from "../services/client";

export const getClientDetailController = async (
  req: Request,
  res: Response
) => {
    
  const result = await getClientDetailService(Number(req.params.clientid));
  return res.json(result);
};
