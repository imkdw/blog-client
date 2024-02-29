export interface CraeteArticleBody {
  id: string;
  title: string;
  summary: string;
  content: string;
  parentCategoryId: number;
  childCategoryId: number;
  tags: {
    tagName: string;
    sort: number;
  }[];
}
