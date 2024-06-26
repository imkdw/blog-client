'use client';

import { Inbox } from '@mui/icons-material';
import Link from 'next/link';

export default function ManageSidebar() {
  const SIDEBAR_DATA = [
    {
      id: 'content',
      text: '콘텐츠 관리',
      icon: <Inbox />,
      children: [
        {
          id: 'category',
          text: '카테고리 관리',
          href: '/manage/content/category',
          isReady: true,
        },
      ],
    },
  ];

  const clickHandler = () => {
    // eslint-disable-next-line no-alert
    window.alert('준비중인 기능입니다');
  };

  return (
    <div className="h-auto w-1/5 border border-gray-300">
      <nav className="flex flex-col gap-2">
        {SIDEBAR_DATA.map((item) => (
          <div key={item.id} className="flex flex-col gap-1 border-b border-t-gray-200">
            <h3 className="flex w-full items-center justify-center gap-2 p-2">
              {item.icon}
              <span className="text-[22px]">{item.text}</span>
            </h3>
            <ul className="list-none">
              {item.children.map((child) => (
                <li key={child.id} className="p-2 hover:bg-gray-200">
                  <Link
                    href={child.href}
                    className="flex w-full justify-center"
                    onClick={(event) => {
                      if (!child.isReady) {
                        event.preventDefault();
                        clickHandler();
                      }
                    }}
                  >
                    {child.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
