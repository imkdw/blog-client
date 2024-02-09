import { Article } from '../../@types/article/Article';
import ArticleItem from './articleItem';

interface Props {
  type: 'popular' | 'recent' | 'all';
  articles: Article[];
}

export default function ArticleList({ type, articles }: Props) {
  return (
    <section className="flex flex-col">
      {type !== 'all' && (
        <h2 className="flex h-[60px] items-center text-[24px] font-bold">
          {type === 'popular' ? '인기 게시글' : '최근 게시글'}
        </h2>
      )}
      <ul className="flex flex-row flex-wrap">
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </ul>
    </section>
  );
}
