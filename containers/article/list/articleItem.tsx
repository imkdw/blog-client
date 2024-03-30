import Image from 'next/image';
import Link from 'next/link';
import { EditCalendar, Visibility } from '@mui/icons-material';

import { IArticleListItem } from '../../../types/article';
import { convertDate } from '../../../utils/date';

interface Props {
  article: IArticleListItem;
}

export default function ArticleItem({ article }: Props) {
  return (
    <li className="article-item flex hover:bg-gray-100">
      <Link href={`/articles/${article.articleId}`} className="flex w-full flex-col">
        <div className="relative h-[200px] w-full">
          {article.thumbnail && <Image src={article.thumbnail} alt={`${article.title}'s thumbnail`} fill />}
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
          <p className="flex items-center gap-1 text-[16px] text-gray-400">
            <EditCalendar fontSize="small" />
            {convertDate(article.createdAt)}
          </p>

          <p className="flex gap-1 text-[16px] text-gray-400">
            <Visibility fontSize="small" />
            {article.viewCount}
          </p>
        </div>
      </Link>
    </li>
  );
}
