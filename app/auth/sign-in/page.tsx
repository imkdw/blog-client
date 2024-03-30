'use client';

import SignInForm from '../../../containers/auth/signin/signInForm';
import SignInLinks from '../../../containers/auth/signin/signInLinks';
import SnsSignIn from '../../../containers/auth/signin/snsSignIn';

export default function SignInPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      <SignInForm />
      <SignInLinks />
      <SnsSignIn />
    </div>
  );
}
