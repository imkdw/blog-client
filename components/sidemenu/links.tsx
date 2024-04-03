import { Description, Mood, Settings } from '@mui/icons-material';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';

import useSidemenu from '../../store/use-sidemenu';

const josefinSans = Josefin_Sans({ subsets: ['latin'] });

export default function SideMenuLinks() {
  const { setIsOpen } = useSidemenu((state) => state);

  const clickHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  const LINK_DATA = [
    {
      id: 1,
      icon: <Description className="h-[30px] w-[30px]" />,
      href: '/articles',
      label: 'ARTICLES',
    },
    {
      id: 2,
      icon: <Mood className="h-[30px] w-[30px]" />,
      href: '/about',
      label: 'ABOUT ME',
    },
    {
      id: 3,
      icon: <Settings className="h-[30px] w-[30px]" />,
      href: '/manage',
      label: 'MANAGE',
    },
  ];
  return (
    <ul className="flex w-[90%] list-none flex-col gap-3">
      {LINK_DATA.map((link) => (
        <li key={link.id} className="w-full">
          <Link href={link.href} className="flex gap-2 p-2" onClick={clickHandler}>
            <p className="h-[30px] w-[30px]">{link.icon}</p>
            <p className={clsx('text-2xl', josefinSans.className)}>{link.label}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
