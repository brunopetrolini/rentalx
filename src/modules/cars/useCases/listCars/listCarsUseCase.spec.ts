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
      name: "Any Car",
      description: "Any Car Description",
      daily_rate: 110,
      license_plate: "DFD-2392",
      fine_amount: 60,
      brand: "Any Brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute();

    expect(cars).toEqual([car]);
  });
});
