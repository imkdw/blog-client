import {
  GetCategoriesResponse,
  PatchUpdateCategoryBody,
  PostCreateCategoryBody,
  PostCreateCategoryResponse,
} from '../types/api/category';
import { HttpMethod } from '../types/api/common';
import { callApi } from './api';

// 카테고리 목록 조회
export const getCategories = async (): Promise<GetCategoriesResponse> => {
  const url = '/v1/categories';
  return callApi<GetCategoriesResponse>({ url, method: HttpMethod.GET });
};

// 카테고리 생성
export const postCreateCategory = async (body: PostCreateCategoryBody): Promise<PostCreateCategoryResponse> => {
  const url = '/v1/categories';
  return callApi<PostCreateCategoryResponse>({ url, method: HttpMethod.POST, body });
};

// 카테고리 삭제
export const deleteCategory = async (categoryId: number): Promise<void> => {
  const url = `/v1/categories/${categoryId}`;
  return callApi<void>({ url, method: HttpMethod.DELETE });
};

// 카테고리 수정
export const patchUpdateCategory = async (categoryId: number, body: PatchUpdateCategoryBody): Promise<void> => {
  const url = `/v1/categories/${categoryId}`;
  return callApi<void>({ url, method: HttpMethod.PATCH, body });
};
