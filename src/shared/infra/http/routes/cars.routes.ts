import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { UploadCarImagesController } from "@modules/cars/useCases/uploadCarImage/UploadCarImagesController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const uploadImages = multer(uploadConfig.upload("./temp/cars"));

const createCarController = new CreateCarController();
carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

const listAvailableCarsController = new ListAvailableCarsController();
carsRoutes.get("/available", listAvailableCarsController.handle);

const createCarSpecificationController = new CreateCarSpecificationController();
carsRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle
);

const uploadCarImagesController = new UploadCarImagesController();
carsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  uploadImages.array("images"),
  uploadCarImagesController.handle
);

export { carsRoutes };
