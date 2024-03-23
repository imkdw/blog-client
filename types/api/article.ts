import { IArticleListItem } from '../article';
import { ITag } from '../tag';

export interface PostCreateArticleBody {
  parentCategoryId: number;
  childCategoryId: number;
  articleId: string;
  summary: string;
  title: string;
  content: string;
  thumbnail: string;
  tags: string[];
}

export interface PostCreateArticleResponse {
  articleId: string;
}

export interface GetArticleDetailResponse {
  articleId: string;
  title: string;
  content: string;
  summary: string;
  thumbnail: string;
  createdAt: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
}

export interface GetArticleTagsResponse {
  tags: ITag[];
}

export interface GetArticlesRespoonse {
  articles: IArticleListItem[];
}
