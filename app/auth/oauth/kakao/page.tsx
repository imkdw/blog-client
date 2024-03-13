'use client';

import { useCallback, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { postKakaoOAuth, postOAuthSignIn, postOAuthSignUp } from '../../../../services/auth';
import PUBLIC_CONFIG from '../../../../config/public/public.config';
import { OAuthProviders } from '../../../../types/enum/auth';
import { PostOAuthSignInResponse } from '../../../../types/api/auth';
import useUser from '../../../../store/use-user';

export default function KakaoOAuthPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

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
      router.push('/');
    },
    [router, setIsLoggedIn, setLoggedInUser],
  );

  useEffect(() => {
    const verifyToken = async (token: string) => {
      const githubVerifyResponse = await postKakaoOAuth({
        code: token,
        redirectUri: PUBLIC_CONFIG.oauth.kakao.redirectUri,
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

  return null;
}
