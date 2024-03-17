import { ICategory } from '../category';

export interface GetCategoriesResponse {
  categories: ICategory[];
}

export interface PostCreateCategoryBody {
  name: string;
  param: string;
  parentId?: number;
}
export interface PostCreateCategoryResponse {
  id: number;
  name: string;
  param: string;
}
