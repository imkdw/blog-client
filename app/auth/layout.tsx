import { Metadata } from 'next';
import { Suspense } from 'react';
import AuthLogo from './_components/logo';

interface Props {
  readonly children: React.ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  types: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL('https://imkdw.dev'),
  title: 'IMKDW Dev | 인증',
  description: '로그인, 회원가입 등 인증 페이지입니다',
  openGraph: {
    title: 'IMKDW Dev | 인증',
    description: '로그인, 회원가입 등 인증 페이지입니다',
    url: 'https://imkdw.dev/auth',
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
    <div className="flex h-auto w-full flex-col gap-[50px] pb-10 pt-10">
      <AuthLogo />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
}
