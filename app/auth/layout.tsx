import { Suspense } from 'react';
import AuthLogo from './_components/logo';

interface Props {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex h-auto w-full flex-col gap-[50px] pb-10 pt-10">
      <AuthLogo />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
}
