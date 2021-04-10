import { Router } from "express";

import { CreateRentalsController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalControler = new CreateRentalsController();
rentalRoutes.post("/", ensureAuthenticated, createRentalControler.handle);

const devolutionRentalController = new DevolutionRentalController();
rentalRoutes.post(
  "/devolution/:id",
  ensureAuthenticated,
  devolutionRentalController.handle
);

export { rentalRoutes };
