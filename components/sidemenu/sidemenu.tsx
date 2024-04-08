'use client';

import { MouseEvent } from 'react';
import { Close, Logout } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

import Profile from './profile';
import MenuSearch from './search';
import SideMenuLinks from './links';
import useSidemenu from '../../store/use-sidemenu';
import useUser from '../../store/use-user';
import { UserRoles } from '../../types/enum/user';

export default function SideMenu() {
  const { setIsOpen } = useSidemenu((state) => state);
  const { setIsLoggedIn, setLoggedInUser, isLoggedIn } = useUser((state) => state);
  const router = useRouter();

  const closeHandler = (event: MouseEvent) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  const logoutHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsLoggedIn(false);
    setLoggedInUser({
      email: '',
      nickname: '',
      profile: '',
      role: UserRoles.NORMAL,
    });
    useUser.persist.clearStorage();
    setIsOpen(false);
    router.push('/');
  };

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center gap-5 bg-white">
      <Close className="absolute right-3 top-3" onClick={closeHandler} fontSize="large" />
      <Profile />
      <MenuSearch />
      <SideMenuLinks />
      {isLoggedIn && (
        <button
          type="button"
          className="absolute bottom-5 right-5 flex items-center gap-2 text-xl text-gray-500"
          onClick={logoutHandler}
        >
          <Logout fontSize="medium" className="text-gray-400" />
          <p>로그아웃</p>
        </button>
      )}
    </div>
  );
}
