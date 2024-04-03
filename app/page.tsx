import Link from 'next/link';
import { headers } from 'next/headers';
import clsx from 'clsx';

import LastArticles from '../components/Articles/lastArticles';
import ArticleList from '../containers/article/list/articleList';
import { getPopularArticles, getRecentArticles } from '../services/article';
import { isMobile } from '../utils/is-mobile';

async function getData() {
  const POPULAR_ARTICLE_COUNT = 3;
  const RECENT_ARTICLE_COUNT = 3;

  const popularArticles = await getPopularArticles(POPULAR_ARTICLE_COUNT);
  const recentArticles = await getRecentArticles(RECENT_ARTICLE_COUNT);

  return {
    popularArticles,
    recentArticles,
  };
}

export default async function Home() {
  const isMobileView = isMobile(headers());
  const { popularArticles, recentArticles } = await getData();

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <h1 className="seo-only">
        오픈소스 기술블로그 IMKDW Dev 입니다. 해당 페이지에서는 인기, 최근 등 다양한 게시글 목록을 확인할 수 있습니다
      </h1>
      <LastArticles articles={recentArticles.articles} />
      <div className={clsx('flex h-auto flex-col gap-10', isMobileView ? 'w-[90%]' : 'w-full')}>
        <ArticleList type="popular" articles={popularArticles.articles} />
        <ArticleList type="recent" articles={recentArticles.articles} />
      </div>
      <Link
        href="/articles"
        className={clsx(
          'w-[200px] rounded-[10px] bg-[#111926]',
          isMobileView ? 'h-[50px] w-[40%]' : 'h-[60px] w-[200px]',
        )}
      >
        <button type="button" className={clsx('h-full w-full text-white')}>
          Show More...
        </button>
      </Link>
    </div>
  );
}
