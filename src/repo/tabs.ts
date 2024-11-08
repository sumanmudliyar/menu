import { local_sequelize } from "../connection";
import Tabs from "../model/tabs";
const { QueryTypes } = require("sequelize");

export const getTabsOfClientRepo = async (clientid: number) => {
  const getTabs = await local_sequelize.query(
    `select*from tabs where clientId='${clientid} order by sequence asc'`,
    {
      type: QueryTypes.SELECT,
    }
  );

  return getTabs;
};

export const createTabRepo = async (tabname: string, clientid: number) => {
  const createTab = await Tabs.create({
    name: tabname,
    clientId: clientid,
  });
  return createTab;
};
