import { Router } from "express";

import { CreateRentalsController } from "@modules/rentals/useCases/createRental/CreateRentalController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalControler = new CreateRentalsController();
rentalRoutes.post("/", ensureAuthenticated, createRentalControler.handle);

export { rentalRoutes };
