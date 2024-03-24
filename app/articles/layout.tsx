import { Metadata } from 'next';
import { Suspense } from 'react';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL('https://imkdw.dev'),
  title: 'IMKDW Dev | 게시글 목록',
  description: '게시글 목록 페이지입니다',
  openGraph: {
    title: 'IMKDW Dev | 게시글 목록',
    description: '게시글 목록 페이지입니다',
    url: 'https://imkdw.dev/articles',
    siteName: 'IMKDW_DEV',
    images: [
      {
        url: 'https://static.imkdw.dev/images/open-graph.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function ArticlesLayout({ children }: Props) {
  return (
    <main>
      <Suspense fallback={<div>로딩중...</div>}>{children}</Suspense>
    </main>
  );
}
