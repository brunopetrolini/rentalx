import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const allCategories = this.listCategoriesUseCase.execute();

    return response.status(200).json(allCategories);
  }
}

export { ListCategoriesController };
