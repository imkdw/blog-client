import { GetCommentsResponse, PostCreateCommentBody, PostCreateCommentResponse } from '../types/api/comment';
import { HttpMethod } from '../types/api/common';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const postCreateComment = (
  articleId: string,
  body: PostCreateCommentBody,
): Promise<PostCreateCommentResponse> => {
  const url = `/v1/articles/${articleId}/comments`;
  return callApi<PostCreateCommentResponse>(url, HttpMethod.POST, body);
};

export const getComments = (articleId: string): Promise<GetCommentsResponse> => {
  const url = `/v1/articles/${articleId}/comments`;
  return callApi<GetCommentsResponse>(url, HttpMethod.GET);
};
