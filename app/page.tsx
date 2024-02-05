import ArticleList from './_components/Articles/articleList';
import LastArticles from './_components/lastArticles';

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center gap-[30px]">
      <LastArticles />
      <div className="flex flex-col gap-[50px]">
        <ArticleList type="popular" />
        <ArticleList type="recent" />
      </div>
      <button type="button" className="mt-[20px] h-[60px] w-[200px] rounded-[10px] bg-[#111926]">
        <a href="/articles" className="text-white">
          Show More...
        </a>
      </button>
    </main>
  );
}
