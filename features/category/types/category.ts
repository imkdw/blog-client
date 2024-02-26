import { CommonResponse } from '../../../@types/common/response';

export interface ResponseGetCategories extends CommonResponse<{ categories: ICategory[] }> {}

export interface ICategory {
  id: number;
  name: string;
  sort: number;
  param: string;
}
