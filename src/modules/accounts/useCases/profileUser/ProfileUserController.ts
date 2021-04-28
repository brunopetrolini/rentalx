import { Request, Response } from "express";
import { container } from "tsyringe";

import { ProfileUserUseCase } from "./ProfileUserUseCase";

class ProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const profileUserUseCase = container.resolve(ProfileUserUseCase);

    const userProfile = await profileUserUseCase.execute(id);

    return response.status(200).json(userProfile);
  }
}

export { ProfileUserController };
