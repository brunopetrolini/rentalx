import { inject, injectable } from "tsyringe";

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

@injectable()
class ListRentalsByUserUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository
  ) {}

  async execute(id: string): Promise<Rental[]> {
    const rentalsByUser = await this.rentalsRepository.findByUser(id);
    return rentalsByUser;
  }
}

export { ListRentalsByUserUseCase };
