import { CommonResponse } from '../../../@types/common/response';

export interface ResponseGetCategories extends CommonResponse<{ categories: ICategory[] }> {}

export interface ICategory {
  /**
   * 카테고리 고유 아이디
   * @example 1
   */
  id: number;

  /**
   * 카테고리 이름
   * @example 백엔드
   */
  name: string;

  /**
   * 카테고리 순서
   * @example 1
   */
  sort: number;

  /**
   * 카테고리 URL 이동을 위한 파라미터
   * @example backend
   */
  param: string;
}
