import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationRepositoryinMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let carsRepository: CarsRepositoryInMemory;
let specificationRepository: SpecificationRepositoryInMemory;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;

describe("Create Car Specificication", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    specificationRepository = new SpecificationRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepository,
      specificationRepository
    );
  });

  it("Should not be able to add a new specification to non-existent car", () => {
    expect(async () => {
      const car_id = "car_id";
      const specifications_id = ["specification_id"];

      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should be able to add a new specification to the car", async () => {
    const car = await carsRepository.create({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 50,
      brand: "Brand",
      category_id: "category",
    });

    const specification = await specificationRepository.create({
      description: "Speficication Description",
      name: "Specification Name",
    });

    const specifications_id = [specification.id];

    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });

    expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.specifications.length).toBe(1);
  });
});
