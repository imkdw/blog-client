import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Noto_Sans, Noto_Sans_KR } from 'next/font/google';
import Header from '../components/header/header';
import Footer from '../components/Footer/Footer';

import './global.css';
import SideUtils from '../components/commons/sideUtils';
import generateCustomMetadata from '../utils/metadata';

const notoSans = Noto_Sans({ subsets: ['latin'] });
const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: 'Tech Blog',
    description:
      '오픈소스로 운영되는 기 술블로그 IMKDW DEV 입니다. 삽질하고 깨달은 내용에 대해서 기록합니다. 다양한 기술에 대한 내용을 다룹니다.',
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
        <main className="mb-10 mt-5 flex w-full max-w-[1000px] flex-1 flex-col">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-DXRR1KZDDN" />
    </html>
  );
}
