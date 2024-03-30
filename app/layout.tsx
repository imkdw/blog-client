import type { Metadata } from 'next';
import { Noto_Sans, Noto_Sans_KR } from 'next/font/google';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SideUtils from '../components/Common/sideUtils';

import './global.css';

const notoSans = Noto_Sans({ subsets: ['latin'] });
const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://imkdw.dev'),
  title: 'IMKDW Dev - Tech Blog',
  description: '오픈소스로 운영되는 IMKDW의 기술블로그입니다',
  openGraph: {
    title: 'IMKDW Dev - Tech Blog',
    description: '오픈소스로 운영되는 IMKDW의 기술블로그입니다',
    url: 'https://imkdw.dev',
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

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko" className={(notoSans.className, notoSansKr.className)}>
      <body className="flex min-h-screen flex-col items-center">
        <SideUtils />
        <Header />
        <main className="mb-10 mt-5 flex w-full max-w-[1100px] flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
