import { getArticleDetail } from '../../actions/article';
import ArticleSearch from '../../components/Articles/Search';
import ArticleList from '../../components/Articles/articleList';
import ArticleCategory from '../../features/category/components/category';

export default function ArticlesPage() {
  const articleData = Array(20)
    .fill(0)
    .map((_, i) => ({
      ...getArticleDetail(i.toString()),
    }));

  return (
    <main className="flex w-full flex-col items-start pt-[30px]">
      <div className="flex w-full flex-col justify-between gap-[30px]">
        <div className="flex flex-row justify-between">
          <ArticleCategory />
          <ArticleSearch />
        </div>
        <ArticleList type="all" articles={articleData} />
      </div>
    </main>
  );
}
