import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

export default (): ListCategoriesController => {
  const categoriesRepository = new CategoriesRepository();

  const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
  );

  return listCategoriesController;
};
