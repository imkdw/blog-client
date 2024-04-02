import Link from 'next/link';
import clsx from 'clsx';
import { MouseEvent, useEffect, useState } from 'react';

import { MOBILE_WIDTH } from '../../../constants/mobile.constant';

export default function SignInLinks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const match = window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches;
    setIsMobile(match);
  }, []);

  const clickHanlder = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    window.alert('준비중인 기능입니다.');
  };

  const LINK_DATA = [
    {
      id: 1,
      href: '/auth/find-id',
      text: '아이디 찾기',
    },
    {
      id: 2,
      href: '/auth/find-password',
      text: '비밀번호 찾기',
    },
    {
      id: 3,
      href: '/auth/sign-up',
      text: '회원가입',
    },
  ];

  return (
    <ul className={clsx('flex h-[50px] flex-row items-center justify-center', isMobile ? 'w-full' : 'w-[50%]')}>
      {LINK_DATA.map((item) => (
        <li key={item.id} className="border-grey-300 flex w-[30%] items-center justify-center border-r text-[#505454]">
          <Link href={item.href} className="text-sm" onClick={clickHanlder}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
