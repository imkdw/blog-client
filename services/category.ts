import { GetCategoriesResponse, PostCreateCategoryBody, PostCreateCategoryResponse } from '../types/api/category';
import { HttpMethod } from '../types/api/common';
import { callApi } from './api';

// 카테고리 목록 조회
export const getCategories = async (): Promise<GetCategoriesResponse> => {
  const url = '/v1/categories';
  return callApi<GetCategoriesResponse>(url, HttpMethod.GET);
};

// 카테고리 생성
export const postCreateCategory = async (body: PostCreateCategoryBody): Promise<PostCreateCategoryResponse> => {
  const url = '/v1/categories';
  return callApi<PostCreateCategoryResponse>(url, HttpMethod.POST, body);
};

// 카테고리 삭제
export const deleteCategory = async (categoryId: number): Promise<void> => {
  const url = `/v1/categories/${categoryId}`;
  return callApi<void>(url, HttpMethod.DELETE);
};
