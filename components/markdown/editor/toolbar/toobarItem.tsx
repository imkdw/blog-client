import React from 'react';

interface Props {
  children: React.ReactNode;
}
export default function ToolbarItem({ children }: Props) {
  return (
    <li className="ml-0 flex h-2/3 w-[60px] items-center justify-center border-r border-gray-300 last:border-none hover:bg-gray-200">
      {children}
    </li>
  );
}
