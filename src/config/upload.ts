import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

const tempFolder = resolve(__dirname, "..", "..", "temp");

export default {
  storage: multer.diskStorage({
    destination: tempFolder,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(16).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
