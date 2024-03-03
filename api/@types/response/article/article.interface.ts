import { CommonResponse } from '../../../../@types/common/response';

// 게시글 작성 인터페이스
export interface CraeteArticleResponseData {
  id: string;
}
export interface CreateArticleResponse extends CommonResponse<{ id: string }> {}

// 게시글 목록조회 인터페이스
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

// 게시글 상세조회 인터페이스
export interface GetArticleDetailResponseData {
  id: string;
  title: string;
  summary: string;
  content: string;
  thumbnail: string;
  createAt: string;
  commentCount: number;
}
export interface GetArticleDetailResponse extends CommonResponse<GetArticleDetailResponseData> {}

// 게시글 태그목록 조회 인터페이스
export interface GetArticleTagsResponseData {
  id: string;
  name: string;
}
export interface GetArticleTagsResponse extends CommonResponse<{ tags: GetArticleTagsResponseData[] }> {}

// 게시글 댓글목록 조회 인터페이스
export interface GetArticleCommentsResponseData {
  id: number;
  content: string;
  user: {
    profile: string;
    nickname: string;
    isWriter: boolean;
  };
  createAt: string;
}
export interface GetArticleCommentsResponse extends CommonResponse<{ comments: GetArticleCommentsResponseData[] }> {}
