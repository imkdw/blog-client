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
    <section className="flex w-full flex-col">
      {type !== 'all' && (
        <h2 className="flex h-[60px] w-full items-center text-[24px] font-bold">{createArticleListHeader(type)}</h2>
      )}
      <ul className="flex w-full flex-row">
        {articles && articles.length ? (
          articles.map((article) => <ArticleItem key={article.articleId} article={article} />)
        ) : (
          <div>게시글이 없습니다.</div>
        )}
      </ul>
    </section>
  );
}
