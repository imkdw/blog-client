import Link from 'next/link';
import ArticleList from '../components/Articles/articleList';
import LastArticles from '../components/Articles/lastArticles';
import { Article } from '../@types/article/Article';
import { getArticleDetail } from '../actions/article';

export default function Home() {
  const popularArticles = Array(3)
    .fill(0)
    .map((_, i) => ({
      ...getArticleDetail(i.toString()),
    }));

  const recentArticles = Array(3)
    .fill(0)
    .map(
      (_, i): Article => ({
        ...getArticleDetail(i.toString()),
      }),
    );

  return (
    <main className="flex w-full flex-col items-center gap-[30px]">
      <LastArticles />
      <div className="flex flex-col gap-[50px]">
        <ArticleList type="popular" articles={popularArticles} />
        <ArticleList type="recent" articles={recentArticles} />
      </div>
      <Link href="/articles" className="mt-[20px] h-[60px] w-[200px] rounded-[10px] bg-[#111926]">
        <button type="button" className="h-full w-full text-white">
          Show More...
        </button>
      </Link>
    </main>
  );
}
