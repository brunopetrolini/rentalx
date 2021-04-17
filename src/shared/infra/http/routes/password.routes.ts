import { Router } from "express";

import { ResetPasswordUserController } from "@modules/accounts/useCases/resetPasswordUser/ResetPasswordUserController";
import { SendForgetPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgetPasswordMailController();
passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle);

const resetPasswordUserController = new ResetPasswordUserController();
passwordRoutes.post("/reset", resetPasswordUserController.handle);

export { passwordRoutes };
