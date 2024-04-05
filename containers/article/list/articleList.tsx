'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import ArticleItem from './articleItem';
import { IArticleListItem } from '../../../types/article';
import { MOBILE_WIDTH } from '../../../constants/mobile.constant';

interface Props {
  type: 'popular' | 'recent' | 'all' | 'recommend';
  articles: IArticleListItem[];
}

const createArticleListHeader = (type: Props['type']) => {
  switch (type) {
    case 'popular':
      return '인기 게시글';
    case 'recent':
      return '최근 게시글';
    case 'recommend':
      return '추천 게시글';
    default:
      return '';
  }
};

export default function ArticleList({ type, articles }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const match = window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches;
    setIsMobile(match);
  }, []);

  return (
    <div className={clsx('flex h-auto w-full flex-col', !articles.length && 'items-center justify-center')}>
      {type !== 'all' && (
        <h2 className="flex h-[60px] w-full items-center text-[24px] font-bold">{createArticleListHeader(type)}</h2>
      )}
      <ul className={clsx('flex flex-row flex-wrap', isMobile && 'flex-col items-center gap-5')}>
        {articles.length ? articles.map((article) => <ArticleItem key={article.articleId} article={article} />) : null}
      </ul>
      {!articles.length ? <div className="w-full text-center text-gray-400">게시글이 없습니다..</div> : null}
    </div>
  );
}
