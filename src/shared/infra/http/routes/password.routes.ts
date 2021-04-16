import { Router } from "express";

import { SendForgetPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgetPasswordMailController();
passwordRoutes.post("/", sendForgotPasswordMailController.handle);

export { passwordRoutes };
