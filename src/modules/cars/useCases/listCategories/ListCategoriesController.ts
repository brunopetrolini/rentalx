import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoryUseCase);
    const allCategories = await listCategoriesUseCase.execute();

    return response.status(200).json(allCategories);
  }
}

export { ListCategoriesController };
