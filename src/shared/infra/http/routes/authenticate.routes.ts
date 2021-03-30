import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUseController = new AuthenticateUserController();
authenticateRoutes.post("/sessions", authenticateUseController.handle);

export { authenticateRoutes };
