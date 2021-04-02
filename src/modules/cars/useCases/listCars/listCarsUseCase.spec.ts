import { CarRespositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./listCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepository: CarRespositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepository = new CarRespositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepository);
  });

  it("Should be able to list all available cars", async () => {
    const car = await carsRepository.create({
      name: "car_name",
      description: "car_description",
      daily_rate: 110,
      license_plate: "any_plate",
      fine_amount: 60,
      brand: "car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepository.create({
      name: "other_car_name",
      description: "other_car_description",
      daily_rate: 110,
      license_plate: "other_car_plate",
      fine_amount: 60,
      brand: "other_car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({ name: "other_car_name" });

    expect(cars).toEqual([car]);
  });
});
