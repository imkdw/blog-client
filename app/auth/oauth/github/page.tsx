'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { postGithubOAuth, postOAuthSignIn, postOAuthSignUp } from '../../../../services/auth';
import { OAuthProviders } from '../../../../types/enum/auth';
import useUser from '../../../../store/use-user';
import { PostOAuthSignInResponse } from '../../../../types/api/auth';
import PUBLIC_CONFIG from '../../../../config/public/public.config';

export default function GithubOAuthPage() {
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
      const githubVerifyResponse = await postGithubOAuth({
        code: token,
        redirectUri: PUBLIC_CONFIG.oauth.github.redirectUri,
      });

      if (githubVerifyResponse.isExist) {
        const oAuthSigninResponse = await postOAuthSignIn({
          email: githubVerifyResponse.email,
          provider: OAuthProviders.GITHUB,
          token: githubVerifyResponse.token,
        });
        updateUserAndLogin(oAuthSigninResponse);
      } else {
        const oAuthSignupResponse = await postOAuthSignUp({
          email: githubVerifyResponse.email,
          provider: OAuthProviders.GITHUB,
          token: githubVerifyResponse.token,
        });
        updateUserAndLogin(oAuthSignupResponse);
      }
    };

    if (code) {
      verifyToken(code);
    }
  }, [setIsLoggedIn, updateUserAndLogin, code]);

  return <div>Github</div>;
}
