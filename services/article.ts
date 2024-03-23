import {
  GetArticleDetailResponse,
  GetArticlesRespoonse,
  GetArticleTagsResponse,
  PostCreateArticleBody,
  PostCreateArticleResponse,
} from '../types/api/article';
import { HttpMethod } from '../types/api/common';
import { callApi } from './api';

export const postCreateArticle = (body: PostCreateArticleBody): Promise<PostCreateArticleResponse> => {
  const url = '/v1/articles';
  return callApi<PostCreateArticleResponse>(url, HttpMethod.POST, body);
};

export const getArticleDetail = (articleId: string): Promise<GetArticleDetailResponse> => {
  const url = `/v1/articles/${articleId}`;
  return callApi<GetArticleDetailResponse>(url, HttpMethod.GET);
};

export const getArticleTags = (articleId: string): Promise<GetArticleTagsResponse> => {
  const url = `/v1/articles/${articleId}/tags`;
  return callApi<GetArticleTagsResponse>(url, HttpMethod.GET);
};

export const getArticlesByCategory = (parent: string, child: string): Promise<GetArticlesRespoonse> => {
  const url = `/v1/articles?parent=${parent ?? ''}&child=${child ?? ''}`;
  return callApi<GetArticlesRespoonse>(url, HttpMethod.GET);
};
