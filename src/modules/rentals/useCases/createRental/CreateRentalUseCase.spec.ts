import dayjs from "dayjs";

import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { DayJSDateProvider } from "@shared/container/providers/DateProvider/implementations/DayJSDateProvider";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let rentalsRepository: RentalsRepositoryInMemory;
let dateProvider: DayJSDateProvider;
let createRentalUseCase: CreateRentalUseCase;

describe("Create Rental", () => {
  const dayAdd24Hours = dayjs().add(1, "day").toDate();

  beforeEach(() => {
    rentalsRepository = new RentalsRepositoryInMemory();
    dateProvider = new DayJSDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepository,
      dateProvider
    );
  });

  it("Should be able to create a rental", async () => {
    const rental = await createRentalUseCase.execute({
      user_id: "any_user_id",
      car_id: "any_car_id",
      expected_return_date: dayAdd24Hours,
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("Should not be able to create a rental if there's another open to the same user", () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "any_user_id",
        car_id: "any_car_id",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "any_user_id",
        car_id: "other_car_id",
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to create a rental if there's another open to the same car", () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "any_user_id",
        car_id: "any_car_id",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "other_user_id",
        car_id: "any_car_id",
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to create a rental with less then 24 hours", () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "any_user_id",
        car_id: "any_car_id",
        expected_return_date: dayjs().toDate(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
