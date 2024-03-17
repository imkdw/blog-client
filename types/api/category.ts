import { ICategory } from '../category';

interface BaseCategory {
  id: number;
  name: string;
  param: string;
}

export interface GetCategoriesResponse {
  categories: ICategory[];
}

export interface PostCreateCategoryBody extends Pick<BaseCategory, 'name' | 'param'> {
  parentId?: number;
}

export interface PostCreateCategoryResponse extends BaseCategory {}

export interface PatchUpdateCategoryBody extends Partial<Pick<BaseCategory, 'name' | 'param'>> {}
