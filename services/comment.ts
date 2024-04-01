import {
  GetCommentsResponse,
  PatchUpdateCommentBody,
  PostCreateCommentBody,
  PostCreateCommentResponse,
} from '../types/api/comment';
import { HttpMethod } from '../types/api/common';
import { callApi, callApiV2 } from './api';

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
  return callApiV2<GetCommentsResponse>({ url, method: HttpMethod.GET });
};

export const deleteComment = (articleId: string, commentId: number): Promise<void> => {
  const url = `/v1/articles/${articleId}/comments/${commentId}`;
  return callApi<void>(url, HttpMethod.DELETE);
};

export const patchUpdateComment = (
  articleId: string,
  commentId: number,
  body: PatchUpdateCommentBody,
): Promise<void> => {
  const url = `/v1/articles/${articleId}/comments/${commentId}`;
  return callApi<void>(url, HttpMethod.PATCH, body);
};
