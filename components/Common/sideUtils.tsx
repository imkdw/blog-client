'use client';

import { Edit, ExpandLess, KeyboardArrowDown, PostAdd, Settings } from '@mui/icons-material';
import Link from 'next/link';
import { useArticle } from '../../store/use-article';
import useUser from '../../store/use-user';
import { UserRoles } from '../../types/enum/user';

export default function SideUtils() {
  const { loggedInUser } = useUser((state) => state);

  // 전역 상태로 관리하는 게시글 ID를 받아올 수 있도록 수정
  const { currentArticleId, isWriting } = useArticle((state) => state);

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottomHandler = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-20 right-10 flex flex-col gap-5">
      {loggedInUser.role === UserRoles.ADMIN && (
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-300">
          <Link href="/manage" className="flex h-full w-full items-center justify-center">
            <Settings />
          </Link>
        </div>
      )}
      {loggedInUser.role === UserRoles.ADMIN && currentArticleId && (
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-300">
          <Link href={`/articles/${currentArticleId}/edit`} className="flex h-full w-full items-center justify-center">
            <Edit />
          </Link>
        </div>
      )}
      {loggedInUser.role === UserRoles.ADMIN && !isWriting && (
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-300">
          <Link href="/articles/new" className="flex h-full w-full items-center justify-center">
            <PostAdd />
          </Link>
        </div>
      )}
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-300">
        <button type="button" aria-label="scroll top" onClick={scrollToTopHandler}>
          <ExpandLess />
        </button>
      </div>
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-300">
        <button type="button" aria-label="scroll top" onClick={scrollToBottomHandler}>
          <KeyboardArrowDown />
        </button>
      </div>
    </div>
  );
}
