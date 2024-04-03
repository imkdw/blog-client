'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { deleteArticle } from '../../../services/article';
import useUser from '../../../store/use-user';
import { UserRoles } from '../../../types/enum/user';

interface Props {
  articleId: string;
}

export default function ArticleManageButtons({ articleId }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const match = window.matchMedia('(max-width: 768px)').matches;
    setIsMobile(match);
  }, []);

  const { loggedInUser } = useUser((state) => state);

  const router = useRouter();

  const deleteHandler = async () => {
    // eslint-disable-next-line no-alert
    const isConfirm = window.confirm('정말 삭제하실껀가요?');
    if (!isConfirm) return;

    await deleteArticle(articleId);
    router.push('/articles');
  };

  return loggedInUser.role === UserRoles.ADMIN ? (
    <div className={clsx('flex flex-row justify-end gap-2', isMobile && 'w-[90%]')}>
      <button type="button" onClick={deleteHandler} className="text-lg text-red-500">
        삭제
      </button>
      <Link href={`/articles/${articleId}/edit`} className="text-lg text-blue-600">
        수정
      </Link>
    </div>
  ) : null;
}
