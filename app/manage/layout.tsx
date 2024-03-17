import { Metadata } from 'next';
import ManageSidebar from '../../containers/manage/sidebar';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL('https://imkdw.dev'),
  title: 'IMKDW Dev | 블로그 관리',
  description: '블로그를 관리하는 페이지입니다',
  openGraph: {
    title: 'IMKDW Dev | 블로그 관리',
    description: '블로그를 관리하는 페이지입니다',
    url: 'https://imkdw.dev/manage',
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

export default function AuthLayout({ children }: Props) {
  return (
    <main className="flex h-auto w-full flex-row gap-5 pb-10 pt-10">
      <ManageSidebar />
      {children}
    </main>
  );
}
