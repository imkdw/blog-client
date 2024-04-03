import Image from 'next/image';
import Link from 'next/link';
import { EditCalendar, Visibility } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { IArticleListItem } from '../../../types/article';
import { convertDate } from '../../../utils/date';
import { MOBILE_WIDTH } from '../../../constants/mobile.constant';

interface Props {
  article: IArticleListItem;
}

export default function ArticleItem({ article }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const match = window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches;
    setIsMobile(match);
  }, []);

  return (
    <li className={clsx('article-item mt-5 flex w-[32%] rounded-xl hover:bg-gray-100', isMobile && 'w-[90%]')}>
      <Link href={`/articles/${article.articleId}`} className="flex w-full flex-col">
        <div className="relative h-[200px] w-full">
          {article.thumbnail && (
            <Image
              src={article.thumbnail}
              alt={`Article of ${article.title}'s thumbnail`}
              title={`Article of ${article.title}'s thumbnail`}
              fill
            />
          )}
        </div>
        <div className="flex h-auto flex-col border-t border-gray-300 p-3">
          <p className="truncate font-bold">{article.title}</p>
          <p className="line-clamp-3 h-[80px] w-full overflow-hidden break-words text-[18px] text-gray-500">
            {article.summary}
          </p>
        </div>
        <div className="border-b border-gray-300 p-3 text-[15px] text-gray-400">
          댓글 {article.commentCount}개 · 좋아요 {article.likeCount}개
        </div>
        <div className="flex justify-between p-3">
          <p className="flex items-center gap-1 text-sm text-gray-400">
            <EditCalendar fontSize="small" />
            {convertDate(article.createdAt)}
          </p>

          <p className="flex gap-1 text-sm text-gray-400">
            <Visibility fontSize="small" />
            {article.viewCount}
          </p>
        </div>
      </Link>
    </li>
  );
}
