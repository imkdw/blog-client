import type { Metadata } from 'next';
import { Noto_Sans, Noto_Sans_KR } from 'next/font/google';
import './global.css';
import clsx from 'clsx';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SideUtils from '../components/Common/sideUtils';

const notoSans = Noto_Sans({ subsets: ['latin'] });
const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IMKDW Dev - Tech Blog',
  description: '오픈소스로 운영되는 IMKDW의 기술블로그입니다',
  openGraph: {
    title: 'IMKDW Dev - Tech Blog',
    description: '오픈소스로 운영되는 IMKDW의 기술블로그입니다',
    url: 'https://imkdw.dev',
    siteName: 'IMKDW_DEV',
    images: [
      {
        url: 'http://localhost:3000/api/og?title=Next.js', // Dynamic og route
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
      <body className={clsx('flex w-full flex-col items-center lg:w-full')}>
        <Header />
        <main className="relative flex h-auto w-full max-w-[1200px] flex-col">
          {children}
          <SideUtils />
          <Footer />
        </main>
      </body>
    </html>
  );
}
