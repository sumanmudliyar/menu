import { createTabRepo, getTabsOfClientRepo } from "../repo/tabs";
import { promises as fs } from "fs";
import path from "path";

export const getTabsByClientService = async (clientid: number) => {
  const result = await getTabsOfClientRepo(clientid);
  return result;
};

export const createTabService = async (tabname: string, clientid: number) => {
  const result = await createTabRepo(tabname, clientid);
  return result;
};

export const findFoodPicture = async (
  dir: string,
  foodid: number
): Promise<string[]> => {
  let result: string[] = [];

  async function searchDir(currentDir: string) {
    const files = await fs.readdir(currentDir, { withFileTypes: true });

    const profileUserIdPattern = new RegExp(`food${foodid}`);

    for (const file of files) {
      const filePath = path.join(currentDir, file.name);
      if (file.isDirectory()) {
        await searchDir(filePath);
      } else if (profileUserIdPattern.test(file.name)) {
        result.push(filePath);
      }
    }
  }

  await searchDir(dir);
  return result;
};
