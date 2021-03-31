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
  async findByLicensePlace(license_place: string): Promise<Car> {
    const car = await this.repository.findOne(license_place);

    return car;
  }
}

export { CarsRepository };
