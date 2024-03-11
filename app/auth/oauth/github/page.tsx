/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useSearchParams } from 'next/navigation';

export default function GithubOAuthPage() {
  // const searchParams = useSearchParams();
  // const code = searchParams.get('code');

  // const fetchOAuth = useCallback(async (token: string) => {
  //   const response = await post<GithubOAuthRequestBody, OAuthResponse>('/v1/auth/oauth/github', {
  //     code: token,
  //     redirectUri: 'http://localhost:3000/auth/oauth/github',
  //   });

  //   if (!response) {
  //     return;
  //   }

  //   // 이미 가입된 유저는 로그인처리
  //   if (response.isExist) {
  //     const signInResponse = await post<OAuthSignInRequestBody, OAuthSignInResponseBody>('/v1/auth/oauth/sign-in', {
  //       email: response.email,
  //       provider: OAuthProvider.GITHUB,
  //       token: response.token,
  //     });
  //     // eslint-disable-next-line no-console
  //     console.log(signInResponse);
  //   } else {
  //     const signUpResponse = await post<OAuthSignUpRequestBody, OAuthSignUpResponseBody>('/v1/auth/oauth/sign-up', {
  //       email: response.email,
  //       provider: OAuthProvider.GITHUB,
  //       token: response.token,
  //     });
  //     // eslint-disable-next-line no-console
  //     console.log(signUpResponse);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (code) {
  //     fetchOAuth(code);
  //   }
  // }, [code, fetchOAuth]);

  return <div>Github</div>;
}
