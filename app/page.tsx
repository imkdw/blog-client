'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import LastArticles from '../components/Articles/lastArticles';
import { getPopularArticles, getRecentArticles } from '../services/article';
import { IArticleListItem } from '../types/article';
import ArticleList from '../containers/article/list/articleList';

export default function Home() {
  const POPULAR_ARTICLE_COUNT = 3;
  const RECENT_ARTICLE_COUNT = 3;

  const [popularArticles, setPopularArticles] = useState<IArticleListItem[]>([]);
  const [recentArticles, setRecentArticles] = useState<IArticleListItem[]>([]);

  useEffect(() => {
    const fetchPopularArticles = async () => {
      const response = await getPopularArticles(POPULAR_ARTICLE_COUNT);
      setPopularArticles(response.articles);
    };

    const fetchRecentArticles = async () => {
      const response = await getRecentArticles(RECENT_ARTICLE_COUNT);
      setRecentArticles(response.articles);
    };

    fetchPopularArticles();
    fetchRecentArticles();
  }, []);

  return (
    <div className="flex h-auto w-full flex-col items-center gap-[30px]">
      <LastArticles />
      <div className="flex w-full flex-col gap-2">
        <ArticleList type="popular" articles={popularArticles} />
        <ArticleList type="recent" articles={recentArticles} />
      </div>
      <Link href="/articles" className="mt-[20px] h-[60px] w-[200px] rounded-[10px] bg-[#111926]">
        <button type="button" className="h-full w-full text-white">
          Show More...
        </button>
      </Link>
    </div>
  );
}
