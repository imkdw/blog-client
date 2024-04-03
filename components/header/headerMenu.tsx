'use client';

import { Menu } from '@mui/icons-material';
import SideMenu from '../sidemenu/sidemenu';
import useSidemenu from '../../store/use-sidemenu';

export default function HeaderMenu() {
  const { setIsOpen, isOpen } = useSidemenu((state) => state);

  const sidemenuHandler = () => {
    console.log('header menu clicked');
    setIsOpen(true);
  };

  return (
    <button
      type="button"
      aria-label="header hamberger menu"
      onClick={sidemenuHandler}
      className="absolute right-5 h-full"
    >
      <Menu className="text-gray-500" fontSize="large" />
      {isOpen ? <SideMenu /> : null}
    </button>
  );
}
