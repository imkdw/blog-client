import Image from 'next/image';
import Link from 'next/link';

import { Article } from '../../../@types/article/Article';

interface Props {
  article: Article;
}

export default function ArticleItem({ article }: Props) {
  return (
    <li className="w-[30%]">
      <Link href={`/article/${article.id}`} className="flex flex-col gap-[10px]">
        <Image src={article.thumbnail} alt={`${article.title}의 썸네일`} width={500} height={200} />
        <h3 className="line-clamp-2 text-[24px] font-bold">{article.title}</h3>
        <p className="line-clamp-3 max-h-[100px] text-[18px]">{article.content}</p>
        <div className="flex flex-row justify-between">
          <div className="justify-between text-[16px] text-gray-400">
            댓글 {article.commentCount}개 · 좋아요 {article.likeCount}개
          </div>
          <div className="text-[16px] text-gray-400">2024.01.03 10:34</div>
        </div>
      </Link>
    </li>
  );
}
