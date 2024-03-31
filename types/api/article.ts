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
  images: string[];
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
  like: {
    isLiked: boolean;
    likeCount: number;
  };
  commentCount: number;
}

export interface GetArticleTagsResponse {
  tags: ITag[];
}

export interface GetArticlesResponse {
  articles: IArticleListItem[];
}

export interface PatchToggleArticleLikeResponse {
  isLiked: boolean;
  likeCount: number;
}

export interface PatchIncreaseViewCountResponse {
  viewCount: number;
}

export interface PatchUpdateArticleBody {
  title: string;
  summary: string;
  content: string;
  thunmbnail: string;
  newImages: string[];
}
