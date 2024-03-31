'use client';

import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { getGoogleOAuth, postOAuthSignIn, postOAuthSignUp } from '../../../../services/auth';
import { OAuthProviders } from '../../../../types/enum/auth';
import useUser from '../../../../store/use-user';
import { PostOAuthSignInResponse } from '../../../../types/api/auth';

export default function GoogleOAuthPage() {
  const { setLoggedInUser, setIsLoggedIn } = useUser((state) => state);
  const router = useRouter();

  const updateUserAndLogin = useCallback(
    (response: PostOAuthSignInResponse | PostOAuthSignInResponse) => {
      setLoggedInUser({
        email: response.email,
        nickname: response.nickname,
        profile: response.profile,
        role: response.role,
      });
      setIsLoggedIn(true);
      localStorage.setItem('accessToken', response.accessToken);
      router.push('/');
    },
    [router, setIsLoggedIn, setLoggedInUser],
  );

  useEffect(() => {
    const verifyToken = async (token: string) => {
      const googleVerifyResponse = await getGoogleOAuth(token);
      if (googleVerifyResponse.isExist) {
        const oAuthSigninResponse = await postOAuthSignIn({
          email: googleVerifyResponse.email,
          provider: OAuthProviders.GOOGLE,
          token: googleVerifyResponse.token,
        });
        updateUserAndLogin(oAuthSigninResponse);
      } else {
        const oAuthSignupResponse = await postOAuthSignUp({
          email: googleVerifyResponse.email,
          provider: OAuthProviders.GOOGLE,
          token: googleVerifyResponse.token,
        });
        updateUserAndLogin(oAuthSignupResponse);
      }
    };

    const params = new URLSearchParams(window.location.hash.slice(1));
    const token = params.get('access_token');
    if (token) {
      verifyToken(token);
    }
  }, [setIsLoggedIn, updateUserAndLogin]);

  return <div className="flex items-center justify-center text-[32px] text-gray-400">구글 로그인 진행중...</div>;
}
