'use client';

import { AccountCircle } from '@mui/icons-material';
import Link from 'next/link';
import { MouseEvent } from 'react';

import useUser from '../../store/use-user';
import useSidemenu from '../../store/use-sidemenu';

export default function Profile() {
  const { isLoggedIn, loggedInUser } = useUser((state) => state);
  const { setIsOpen } = useSidemenu((state) => state);

  const clickHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="flex h-[150px] w-full flex-row items-end justify-center border-b border-r-gray-300 pb-5">
      <div className="flex w-[90%] flex-row items-center gap-3">
        <AccountCircle className="h-[50px] w-[50px] text-gray-500" />
        {isLoggedIn ? (
          <div className="flex flex-1 flex-col">
            <p className="text-left text-xl">{loggedInUser.nickname}</p>
            <p className="text-left text-gray-400">{loggedInUser.email}</p>
          </div>
        ) : (
          <Link className="text-gray-400" href="/auth/sign-in" onClick={clickHandler}>
            로그인이 필요한 서비스입니다
          </Link>
        )}
      </div>
    </div>
  );
}
