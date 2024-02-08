import ArticleSearch from '../../components/Articles/Search';
import ArticleList from '../../components/Articles/articleList';
import ArticleCategory from '../../components/Articles/category';

export default function ArticlesPage() {
  const articleData = Array(20)
    .fill(0)
    .map((_, i) => ({
      id: i,
      thumbnail: 'http://via.placeholder.com/640x480',
      title: `제목 ${i}`,
      content: `내용 ${i}`,
      commentCount: 1,
      likeCount: 2,
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
