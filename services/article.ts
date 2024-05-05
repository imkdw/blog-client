import {
  GetArticleDetailResponse,
  GetArticlesResponse,
  GetArticleTagsResponse,
  GetArticleViewTrendsResponse,
  PatchIncreaseViewCountResponse,
  PatchToggleArticleLikeResponse,
  PatchUpdateArticleBody,
  PostCreateArticleBody,
  PostCreateArticleResponse,
} from '../types/api/article';
import { HttpMethod } from '../types/api/common';
import { callApi } from './api';

export const postCreateArticle = (body: PostCreateArticleBody): Promise<PostCreateArticleResponse> => {
  const url = '/v1/articles';
  return callApi<PostCreateArticleResponse>({ url, method: HttpMethod.POST, body });
};

export const getArticleDetail = (articleId: string, accessToken?: string): Promise<GetArticleDetailResponse> => {
  const url = `/v1/articles/${articleId}`;
  return callApi<GetArticleDetailResponse>({ url, method: HttpMethod.GET, accessToken });
};

export const getArticleTags = (articleId: string): Promise<GetArticleTagsResponse> => {
  const url = `/v1/articles/${articleId}/tags`;
  return callApi<GetArticleTagsResponse>({ url, method: HttpMethod.GET });
};

export const getArticlesByCategory = (parent: string, child: string): Promise<GetArticlesResponse> => {
  const url = `/v1/articles?type=category&parent=${parent ?? ''}&child=${child ?? ''}`;
  return callApi<GetArticlesResponse>({ url, method: HttpMethod.GET });
};

export const patchToggleArticleLike = (articleId: string): Promise<PatchToggleArticleLikeResponse> => {
  const url = `/v1/articles/${articleId}/like`;
  return callApi<PatchToggleArticleLikeResponse>({ url, method: HttpMethod.PATCH });
};

export const getPopularArticles = (count: number): Promise<GetArticlesResponse> => {
  const url = `/v1/articles?type=popular&limit=${count}`;
  return callApi<GetArticlesResponse>({ url, method: HttpMethod.GET });
};

export const getRecentArticles = (count: number): Promise<GetArticlesResponse> => {
  const url = `/v1/articles?type=recent&limit=${count}`;
  return callApi<GetArticlesResponse>({ url, method: HttpMethod.GET });
};

export const patchIncreaseViewCount = (articleId: string): Promise<PatchIncreaseViewCountResponse> => {
  const url = `/v1/articles/${articleId}/view`;
  return callApi<PatchIncreaseViewCountResponse>({ url, method: HttpMethod.PATCH });
};

export const deleteArticle = (articleId: string): Promise<void> => {
  const url = `/v1/articles/${articleId}`;
  return callApi<void>({ url, method: HttpMethod.DELETE });
};

export const patchUpdateArticle = (articleId: string, body: Partial<PatchUpdateArticleBody>): Promise<void> => {
  const url = `/v1/articles/${articleId}`;
  return callApi<void>({ url, method: HttpMethod.PATCH, body });
};

export const getArticleViewTrends = async (duration: number): Promise<GetArticleViewTrendsResponse> => {
  const url = `/v1/articles/trends/view?duration=${duration}`;
  return callApi<GetArticleViewTrendsResponse>({ url, method: HttpMethod.GET });
};
