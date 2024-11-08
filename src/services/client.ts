import { getClientDetailRepo } from "../repo/client";

export const getClientDetailService = async (clientid: number) => {
  const result = await getClientDetailRepo(clientid);
  return result;
};
