import Link from 'next/link';
import ArticleList from '../components/Articles/articleList';
import LastArticles from '../components/Articles/lastArticles';

export default function Home() {
  const popularArticles = Array(3)
    .fill(0)
    .map((_, i) => ({
      id: i,
      thumbnail: 'http://via.placeholder.com/640x480',
      title: `인기게시글 - 제목 ${i}`,
      content: `인기게시글 -  내용 ${i}`,
      commentCount: 1,
      likeCount: 2,
    }));

  const recentArticles = Array(3)
    .fill(0)
    .map((_, i) => ({
      id: i,
      thumbnail: 'http://via.placeholder.com/640x480',
      title: `최근게시글 - 제목 ${i}`,
      content: `최근게시글 - 제목내용 ${i}`,
      commentCount: 1,
      likeCount: 2,
    }));

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
