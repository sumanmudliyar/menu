import multer from "multer";
import { promises as fs } from "fs";
import { logger } from "./logger";

// Set up storage for uploaded files
const storageProfileImages = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "../../../uploads/profileImages/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + "temp" + "-" + file.originalname);
  },
});

const storagePostMedia = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "../../../uploads/postMedia/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + "temp" + "-" + file.originalname);
  },
});

export const uploadProfileImage = multer({
  storage: storageProfileImages,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      const err = new Error("Only .png, .jpg and .jpeg format allowed!");
      err.name = "ExtensionError";
      return cb(err);
    }
  },
});
export const uploadPostMedia = multer({
  storage: storagePostMedia,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      const err = new Error("Only .png, .jpg and .jpeg format allowed!");
      err.name = "ExtensionError";
      return cb(err);
    }
  },
});

export const checkAndCreateFolder = async (
  folderPath: string
): Promise<void> => {
  try {
    // Check if the folder exists
    await fs.access(folderPath);
    logger.info(`Folder already exists: ${folderPath}`);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      // Folder does not exist, create it
      await fs.mkdir(folderPath, { recursive: true });
      logger.info(`Folder created: ${folderPath}`);
    } else {
      // An error occurred other than folder not existing
      logger.error(
        `Error checking folder: ${(error as NodeJS.ErrnoException).message}`
      );
      throw error;
    }
  }
};
export const renameFile = async (
  oldFilePath: string,
  newFilePath: string
): Promise<void> => {
  try {
    await fs.rename(oldFilePath, newFilePath);
    // console.log(`File renamed: ${oldFilePath} -> ${newFilePath}`);
  } catch (error) {
    logger.error(`Error renaming file: ${(error as Error).message}`);
    throw error;
  }
};
