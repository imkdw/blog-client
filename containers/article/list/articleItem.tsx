import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

import { IArticleListItem } from '../../../types/article';
import { convertDate } from '../../../utils/date';

interface Props {
  article: IArticleListItem;
}

export default function ArticleItem({ article }: Props) {
  return (
    <li className="flex h-full w-1/3 p-2">
      <Link href={`/articles/${article.articleId}`} className="flex w-full flex-col gap-[10px]">
        <Image
          src={article.thumbnail}
          alt={`${article.title}의 썸네일`}
          width={0}
          height={0}
          sizes="100vh"
          layout="responsive"
          className={clsx('rounded-[10px]', 'object-cover')}
        />
        <h3 className="line-clamp-2 text-[24px] font-bold">{article.title}</h3>
        <p className="line-clamp-3 max-h-[100px] text-[18px]">{article.summary}</p>
        <div className="flex flex-row justify-between">
          <div className="justify-between text-[16px] text-gray-400">
            댓글 {article.commentCount}개 · 좋아요 {article.likeCount}개
          </div>
          <div className="text-[16px] text-gray-400">{convertDate(article.createdAt)}</div>
        </div>
      </Link>
    </li>
  );
}
