import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayJSDateProvider } from "@shared/container/providers/DateProvider/implementations/DayJSDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let usersRepository: UsersRepositoryInMemory;
let usersTokensRepository: UsersTokensRepositoryInMemory;
let dateProvider: DayJSDateProvider;
let mailProvider: MailProviderInMemory;
let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;

describe("Send Forgot Email", () => {
  beforeEach(() => {
    usersRepository = new UsersRepositoryInMemory();
    usersTokensRepository = new UsersTokensRepositoryInMemory();
    dateProvider = new DayJSDateProvider();
    mailProvider = new MailProviderInMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepository,
      usersTokensRepository,
      dateProvider,
      mailProvider
    );
  });

  it("Should be able to send a forgot password email to user", async () => {
    const sendMail = spyOn(mailProvider, "sendMail");

    await usersRepository.create({
      name: "Julian Francis",
      email: "zesihjuc@foj.ge",
      password: "U2RkFd11",
      driver_license: "792463290",
    });

    await sendForgotPasswordMailUseCase.execute("zesihjuc@foj.ge");

    expect(sendMail).toHaveBeenCalledTimes(1);
  });

  it("Should not be able to send an email id user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("edodin@ade.at")
    ).rejects.toEqual(new AppError("User does not exists"));
  });

  it("Should be able to create an users token", async () => {
    const generateTokenMail = spyOn(usersTokensRepository, "create");

    await usersRepository.create({
      name: "Julian Francis",
      email: "zesihjuc@foj.ge",
      password: "U2RkFd11",
      driver_license: "792463290",
    });

    await sendForgotPasswordMailUseCase.execute("zesihjuc@foj.ge");

    expect(generateTokenMail).toBeCalledTimes(1);
  });
});
