import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenController } from "@modules/accounts/useCases/refreshToken/RefreshTokenController";

const authenticateRoutes = Router();

const authenticateUseController = new AuthenticateUserController();
authenticateRoutes.post("/sessions", authenticateUseController.handle);

const refreshTokenControler = new RefreshTokenController();
authenticateRoutes.post("/refresh-token", refreshTokenControler.handle);

export { authenticateRoutes };
