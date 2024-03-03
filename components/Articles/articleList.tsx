import { GetArticlesResponseData } from '../../api/@types/response/article/article.interface';
import ArticleItem from './articleItem';

interface Props {
  type: 'popular' | 'recent' | 'all' | 'recommend';
  articles: GetArticlesResponseData[];
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
    <section className="flex flex-col">
      {type !== 'all' && (
        <h2 className="flex h-[60px] items-center text-[24px] font-bold">{createArticleListHeader(type)}</h2>
      )}
      <ul className="flex flex-row flex-wrap">
        {articles && articles.length ? (
          articles.map((article) => <ArticleItem key={article.id} article={article} />)
        ) : (
          <div>게시글이 없습니다.</div>
        )}
      </ul>
    </section>
  );
}
