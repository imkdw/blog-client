import { Article } from '../../../@types/article/Article';
import ArticleItem from './articleItem';

interface Props {
  type: 'popular' | 'recent';
}

export default function ArticleList({ type }: Props) {
  const articleData: Article[] = [
    {
      id: 1,
      thumbnail: 'http://via.placeholder.com/640x480',
      title: '제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다 1',
      content:
        '내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다 1',
      commentCount: 1,
      likeCount: 2,
    },
    {
      id: 1,
      thumbnail: 'http://via.placeholder.com/640x480',
      title: '제목입니다 2',
      content:
        '내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다 2',
      commentCount: 1,
      likeCount: 2,
    },
    {
      id: 1,
      thumbnail: 'http://via.placeholder.com/640x480',
      title: '제목입니다 3',
      content:
        '내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다 3',
      commentCount: 1,
      likeCount: 2,
    },
  ];
  return (
    <div className="flex flex-col">
      <h2 className="flex h-[60px] items-center text-[24px] font-bold">
        {type === 'popular' ? '인기 게시글' : '최근 게시글'}
      </h2>
      <ul className="flex flex-row justify-between">
        {articleData.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
}
