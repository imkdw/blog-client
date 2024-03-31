import type { Metadata } from 'next';
import { Noto_Sans, Noto_Sans_KR } from 'next/font/google';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import './global.css';
import generateMetadata from '../utils/metadata';
import SideUtils from '../components/commons/sideUtils';

const notoSans = Noto_Sans({ subsets: ['latin'] });
const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  ...generateMetadata({
    title: 'IMKDW DEV',
    description:
      '오픈소스로 운영되는 기술블로그 IMKDW DEV 입니다. 삽질하고 깨달은 내용에 대해서 기록합니다. 다양한 기술에 대한 내용을 다룹니다.',
    link: 'https://imkdw.dev',
  }),
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
