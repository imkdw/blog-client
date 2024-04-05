'use client';

import { useCallback, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { postKakaoOAuth, postOAuthSignIn, postOAuthSignUp } from '../../../../services/auth';
import { OAuthProviders } from '../../../../types/enum/auth';
import { PostOAuthSignInResponse, PostOAuthSignUpResponse } from '../../../../types/api/auth';
import useUser from '../../../../store/use-user';

export default function KakaoOAuthPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const { setLoggedInUser, setIsLoggedIn } = useUser((state) => state);
  const router = useRouter();

  const updateUserAndLogin = useCallback(
    (response: PostOAuthSignInResponse | PostOAuthSignUpResponse) => {
      setLoggedInUser({
        email: response.email,
        nickname: response.nickname,
        profile: response.profile,
        role: response.role,
      });
      setIsLoggedIn(true);
      router.push('/');
    },
    [router, setIsLoggedIn, setLoggedInUser],
  );

  useEffect(() => {
    const verifyToken = async (token: string) => {
      const githubVerifyResponse = await postKakaoOAuth({
        code: token,
        redirectUri: process.env.NEXT_PUBLIC_KAKAO_OAUTH_REDIRECT_URI ?? '',
      });

      if (githubVerifyResponse.isExist) {
        const oAuthSigninResponse = await postOAuthSignIn({
          email: githubVerifyResponse.email,
          provider: OAuthProviders.KAKAO,
          token: githubVerifyResponse.token,
        });
        updateUserAndLogin(oAuthSigninResponse);
      } else {
        const oAuthSignupResponse = await postOAuthSignUp({
          email: githubVerifyResponse.email,
          provider: OAuthProviders.KAKAO,
          token: githubVerifyResponse.token,
        });
        updateUserAndLogin(oAuthSignupResponse);
      }
    };

    if (code) {
      verifyToken(code);
    }
  }, [setIsLoggedIn, updateUserAndLogin, code]);

  return <div className="flex items-center justify-center text-[32px] text-gray-400">카카오 로그인 진행중...</div>;
}
