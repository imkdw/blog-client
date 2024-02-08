export interface Article {
  id: number;
  thumbnail: string;
  title: string;
  content: string;
  commentCount: number;
  likeCount: number;
}

export interface ArticleCategories {
  id: string;
  title: string;
  subCategory: ArticleSubCategories[];
}
export interface ArticleSubCategories {
  id: string;
  title: string;
}
