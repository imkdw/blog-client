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
