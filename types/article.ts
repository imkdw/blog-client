export interface INewArticle {
  id: string;
  title: string;
  summary: string;
  tags: string[];
}

export interface IArticleListItem {
  articleId: string;
  thumbnail: string;
  title: string;
  summary: string;
  commentCount: number;
  likeCount: number;
  createdAt: string;
}
