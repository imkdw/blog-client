import ArticleSearch from '../../components/Articles/Search';
import ArticleCategory from '../../components/Articles/category';

export default function ArticlesPage() {
  return (
    <main className="flex w-full flex-col items-start pt-[30px]">
      <div className="flex w-full flex-row justify-between">
        <ArticleCategory />
        <ArticleSearch />
      </div>
    </main>
  );
}
