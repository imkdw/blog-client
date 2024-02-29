'use client';

import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { post } from '../../../../api/api';
import { OAuthResponse } from '../../../../api/@types/response/auth/oauth.interface';
import { OAuthSignUpRequestBody, OAuthSignUpResponseBody } from '../../@types/sign-up.interface';
import { OAuthProvider } from '../../../../api/@types/auth/enums/oauth-provider.enum';
import { OAuthSignInRequestBody, OAuthSignInResponseBody } from '../../@types/sign-in.interface';
import { KakaoOAuthRequestBody } from '../../@types/kakao.interface';
import publicConfig from '../../../../config/public/public.config';

export default function KakaoOAuthPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const fetchOAuth = useCallback(async (token: string) => {
    const response = await post<KakaoOAuthRequestBody, OAuthResponse>('/v1/auth/oauth/kakao', {
      code: token,
      redirectUri: `${publicConfig.url.client}/auth/oauth/kakao`,
    });

    if (!response) {
      return;
    }

    // 이미 가입된 유저는 로그인처리
    if (response.isExist) {
      const signInResponse = await post<OAuthSignInRequestBody, OAuthSignInResponseBody>('/v1/auth/oauth/sign-in', {
        email: response.email,
        provider: OAuthProvider.KAKAO,
        token: response.token,
      });
      // eslint-disable-next-line no-console
      console.log(signInResponse);
    } else {
      const signUpResponse = await post<OAuthSignUpRequestBody, OAuthSignUpResponseBody>('/v1/auth/oauth/sign-up', {
        email: response.email,
        provider: OAuthProvider.KAKAO,
        token: response.token,
      });
      // eslint-disable-next-line no-console
      console.log(signUpResponse);
    }
  }, []);

  useEffect(() => {
    /**
     * 카카오 로그인 이후 code 쿼리스트링이 포함되서 리다이렉트 된다
     * url : http://localhost:3000/auth/oauth/kakao?code=a0a3TLa8B4zHqE8NGVgzBClx4ODO7Kvl82sSG9R8yBzu0nD7GYgzJ07Ztr4KPXKXAAABjcnRbqVPBWDH3LuH7A
     */
    if (code) {
      fetchOAuth(code);
    }
  }, [fetchOAuth, code]);

  return <div>Kakao</div>;
}
