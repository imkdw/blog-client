import { PostCreateArticleBody, PostCreateArticleResponse } from '../types/api/article';
import { HttpMethod } from '../types/api/common';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const postCreateArticle = (body: PostCreateArticleBody): Promise<PostCreateArticleResponse> => {
  const url = '/v1/articles';
  return callApi<PostCreateArticleResponse>(url, HttpMethod.POST, body);
};
