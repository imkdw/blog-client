import clsx from 'clsx';

import ArticleItem from './articleItem';
import { IArticleListItem } from '../../../types/article';

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
  return (
    <div className={clsx('flex h-full w-full flex-1 flex-col', !articles.length && 'items-center justify-center')}>
      {type !== 'all' && (
        <h2 className="flex h-[60px] w-full items-center text-[24px] font-bold">{createArticleListHeader(type)}</h2>
      )}
      <ul className="grid grid-cols-3 gap-5">
        {articles.length ? articles.map((article) => <ArticleItem key={article.articleId} article={article} />) : null}
      </ul>
      {!articles.length ? <div className="w-full text-center text-gray-400">게시글이 없습니다..</div> : null}
    </div>
  );
}
