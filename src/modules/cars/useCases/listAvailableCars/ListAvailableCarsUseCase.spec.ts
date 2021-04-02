import { CarRespositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListAvailableCarsUseCase";

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
      name: "1_car_name",
      description: "1_car_description",
      daily_rate: 110,
      license_plate: "1_car_plate",
      fine_amount: 60,
      brand: "1_car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({ name: "1_car_name" });

    expect(cars).toEqual([car]);
  });

  it("Shold be able to list all available cars by brand", async () => {
    const car = await carsRepository.create({
      name: "2_car_name",
      description: "1_car_description",
      daily_rate: 110,
      license_plate: "2_car_plate",
      fine_amount: 60,
      brand: "2_car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({ brand: "2_car_brand" });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by category id", async () => {
    const car = await carsRepository.create({
      name: "3_car_name",
      description: "3_car_description",
      daily_rate: 110,
      license_plate: "3_car_plate",
      fine_amount: 60,
      brand: "3_car_brand",
      category_id: "3_category_id",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "3_category_id",
    });

    expect(cars).toEqual([car]);
  });
});
