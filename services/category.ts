import { GetCategoriesResponse } from '../types/api/category';
import { HttpMethod } from '../types/api/common';
import { callApi } from './api';

// 카테고리 목록 조회
// eslint-disable-next-line import/prefer-default-export
export const getCategories = async (): Promise<GetCategoriesResponse> => {
  const url = '/v1/categories';
  return callApi<GetCategoriesResponse>(url, HttpMethod.GET);
};
