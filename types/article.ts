export interface INewArticle {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  thumbnail: string;
}

export interface IEditArticle extends Omit<INewArticle, 'id' | 'tags'> {}

export interface IArticleListItem {
  articleId: string;
  thumbnail: string;
  title: string;
  summary: string;
  viewCount: number;
  commentCount: number;
  likeCount: number;
  createdAt: string;
}
