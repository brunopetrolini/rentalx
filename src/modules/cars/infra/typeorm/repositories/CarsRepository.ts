import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    name,
    description,
    brand,
    license_plate,
    fine_amount,
    daily_rate,
    category_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      brand,
      license_plate,
      fine_amount,
      daily_rate,
      category_id,
    });

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({ license_plate });

    return car;
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const carsQuery = this.repository
      .createQueryBuilder("cars")
      .where("available = :available", { available: true });

    if (brand) {
      carsQuery.andWhere("cars.brand = :brand", { brand });
    }

    if (name) {
      carsQuery.andWhere("cars.name = :name", { name });
    }

    if (category_id) {
      carsQuery.andWhere("cars.category_id = :category_id", { category_id });
    }

    const filteredCars = await carsQuery.getMany();
    return filteredCars;
  }
}

export { CarsRepository };
