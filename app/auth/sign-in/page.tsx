'use client';

import { useRouter } from 'next/navigation';
import useUser from '../../../store/use-user';
import SignInForm from './signInForm';
import SignInLinks from './signInLinks';
import SnsSignIn from './snsSignIn';

export default function SignInPage() {
  const { isLoggedIn } = useUser((state) => state);
  const router = useRouter();

  if (isLoggedIn) {
    router.push('/');
  }

  return (
    <div className="flex h-full w-full flex-col items-center gap-[30px]">
      <SignInForm />
      <SignInLinks />
      <SnsSignIn />
    </div>
  );
}
