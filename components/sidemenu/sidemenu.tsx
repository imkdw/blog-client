'use client';

import { MouseEvent } from 'react';
import { Close } from '@mui/icons-material';

import Profile from './profile';
import MenuSearch from './search';
import SideMenuLinks from './links';
import useSidemenu from '../../store/use-sidemenu';

export default function SideMenu() {
  const { setIsOpen } = useSidemenu((state) => state);

  const closeHandler = (event: MouseEvent) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center gap-5 bg-white">
      <Close className="absolute right-3 top-3" onClick={closeHandler} fontSize="large" />
      <Profile />
      <MenuSearch />
      <SideMenuLinks />
    </div>
  );
}
