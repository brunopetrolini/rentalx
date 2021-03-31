import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
  findByLicensePlace(license_place: string): Promise<Car>;
}

export { ICarsRepository };
