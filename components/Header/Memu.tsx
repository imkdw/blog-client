'use client';

import { Josefin_Sans } from 'next/font/google';
import clsx from 'clsx';

import Link from 'next/link';
import MenuItem from './menuItem';

const josefinSans = Josefin_Sans({ subsets: ['latin'] });

export default function HeaderMenu() {
  const LinkData = [
    {
      id: 1,
      text: 'ARTICLES',
      link: '/articles',
      target: '_self',
    },
    {
      id: 3,
      text: 'ABOUT ME',
      link: '/about',
      target: '_self',
    },
    {
      id: 4,
      text: 'MANAGE',
      link: '/manage',
      target: '_self',
    },
  ];

  return (
    <nav className="w-full">
      <ul className="flex justify-center">
        {LinkData.map((item) => (
          <MenuItem key={item.id}>
            <Link
              href={item.link}
              target={item.target}
              className={clsx(josefinSans.className, 'flex h-full items-center text-[24px]  hover:font-bold')}
            >
              {item.text}
            </Link>
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
}
