import client from "../model/client";

export const getClientDetailRepo = async (clientid: any) => {
  const result = await client.findOne({
    where: {
      id: clientid,
    },
  });

  return result;
};
