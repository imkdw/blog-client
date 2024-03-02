import { CommonResponse } from '../../../../@types/common/response';

export interface CraeteArticleResponseData {
  id: string;
}
export interface CreateArticleResponse extends CommonResponse<{ id: string }> {}

export interface GetArticlesResponseData {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  createdAt: string;
  likeCount: number;
  commentCount: number;
}
export interface GetArticlesResponse extends CommonResponse<{ articles: GetArticlesResponseData[] }> {}
