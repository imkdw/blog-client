import {
  GetCommentsResponse,
  PatchUpdateCommentBody,
  PostCreateCommentBody,
  PostCreateCommentResponse,
} from '../types/api/comment';
import { HttpMethod } from '../types/api/common';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const postCreateComment = (
  articleId: string,
  body: PostCreateCommentBody,
): Promise<PostCreateCommentResponse> => {
  const url = `/v1/articles/${articleId}/comments`;
  return callApi<PostCreateCommentResponse>({ url, method: HttpMethod.POST, body });
};

export const getComments = (articleId: string): Promise<GetCommentsResponse> => {
  const url = `/v1/articles/${articleId}/comments`;
  return callApi<GetCommentsResponse>({ url, method: HttpMethod.GET });
};

export const deleteComment = (articleId: string, commentId: number): Promise<void> => {
  const url = `/v1/articles/${articleId}/comments/${commentId}`;
  return callApi<void>({ url, method: HttpMethod.DELETE });
};

export const patchUpdateComment = (
  articleId: string,
  commentId: number,
  body: PatchUpdateCommentBody,
): Promise<void> => {
  const url = `/v1/articles/${articleId}/comments/${commentId}`;
  return callApi<void>({ url, method: HttpMethod.PATCH, body });
};
