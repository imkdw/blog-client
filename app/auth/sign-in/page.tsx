'use client';

import SocialLogin from '../../../containers/auth/socialLogin';

export default function SignInPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <SocialLogin />
    </div>
  );
}
