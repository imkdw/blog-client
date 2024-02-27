import { getArticleDetail } from '../../actions/article';
import ArticleSearch from '../../components/Articles/Search';
import ArticleList from '../../components/Articles/articleList';
import ChildCategory from '../../features/category/components/ChildCategory';
import ParentCategory from '../../features/category/components/ParentCategory';

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
          <ParentCategory />
          <ArticleSearch />
        </div>
        <ChildCategory />
        <ArticleList type="all" articles={articleData} />
      </div>
    </main>
  );
}
