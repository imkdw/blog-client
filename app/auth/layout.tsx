import { Metadata } from 'next';
import { Suspense } from 'react';
import { headers } from 'next/headers';

import AuthLogo from './_components/logo';
import generateCustomMetadata from '../../utils/metadata';
import { isMobile } from '../../utils/is-mobile';

interface Props {
  readonly children: React.ReactNode;
  // eslint-disable-next-line react/no-unused-prop-types
  types: React.ReactNode;
}

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: '인증',
    description: 'IMKDW Dev 블로그의 인증 페이지입니다.',
    link: 'https://imkdw.dev/auth/sign-in',
  }),
};

export default function AuthLayout({ children }: Props) {
  const isMobileView = isMobile(headers());
  return (
    <div className="flex h-full w-full flex-1 flex-col justify-center">
      {!isMobileView && <AuthLogo />}
      <div className="w-full pt-10">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </div>
    </div>
  );
}
