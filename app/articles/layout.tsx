import { Suspense } from 'react';

interface Props {
  children: React.ReactNode;
}
export default function ArticlesLayout({ children }: Props) {
  return <Suspense fallback={<div>로딩중...</div>}>{children}</Suspense>;
}
