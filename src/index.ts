import express from "express";
import dotenv from "dotenv";

import tabsRoute from "./routes/tabs";
import clientRoute from "./routes/client";
import { local_sequelize } from "./connection";
import syncModels from "./model/modelIndex";

import * as path from "path";
import { checkAndCreateFolder } from "./Utilities/storage";

import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;
app.get("/", (req, res) => {
  res.send("I am death the destroyer of worlds!");
});

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/tabs", tabsRoute);
app.use("/client", clientRoute);
let folderPath = path.join(__dirname, "../uploads/postMedia");

checkAndCreateFolder(folderPath)
  .then(() =>
    console.log("Check and create folder process completed for postMedia")
  )
  .catch((error) =>
    console.error(
      "Error in check and create folder process for postMedia",
      error
    )
  );

folderPath = path.join(__dirname, "../uploads/profileImages");
checkAndCreateFolder(folderPath)
  .then(() =>
    console.log("Check and create folder process completed for profileImages")
  )
  .catch((error) =>
    console.error(
      "Error in check and create folder process for profileImages",
      error
    )
  );

// sequelize.sync();
local_sequelize.sync();
syncModels();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
