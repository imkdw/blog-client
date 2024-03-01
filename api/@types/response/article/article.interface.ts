import { CommonResponse } from '../../../../@types/common/response';

export interface CraeteArticleResponseData {
  id: string;
}

export interface CreateArticleResponse extends CommonResponse<{ id: string }> {}
