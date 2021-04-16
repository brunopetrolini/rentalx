import { injectable } from "tsyringe";

@injectable()
class SendForgotPasswordMailUseCase {
  async execute(email: string): Promise<void> {
    return null;
  }
}

export { SendForgotPasswordMailUseCase };
