'use client';

import { useCallback, useEffect } from 'react';
import { get, post } from '../../../../api/api';
import { OAuthResponse } from '../../../../api/@types/auth/oauth/oauth.interface';
import { OAuthSignUpRequestBody, OAuthSignUpResponseBody } from '../../@types/sign-up.interface';
import { OAuthProvider } from '../../../../api/@types/auth/enums/oauth-provider.enum';
import { OAuthSignInRequestBody, OAuthSignInResponseBody } from '../../@types/sign-in.interface';

export default function GoogleOAuthPage() {
  const fetchOAuth = useCallback(async (token: string) => {
    const response = await get<OAuthResponse>('/v1/auth/oauth/google', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response) {
      return;
    }

    // 이미 가입된 유저는 로그인처리
    if (response.isExist) {
      const signInResponse = await post<OAuthSignInRequestBody, OAuthSignInResponseBody>('/v1/auth/oauth/sign-in', {
        email: response.email,
        provider: OAuthProvider.GOOGLE,
        token: response.token,
      });
      console.log(signInResponse);
    } else {
      const signUpResponse = await post<OAuthSignUpRequestBody, OAuthSignUpResponseBody>('/v1/auth/oauth/sign-up', {
        email: response.email,
        provider: OAuthProvider.GOOGLE,
        token: response.token,
      });
      console.log(signUpResponse);
    }
  }, []);

  useEffect(() => {
    /**
     * 구글 로그인 이후 access_token 데이터가 hash로 전달받아서 넘어온다.
     * url : http://localhost:3000/auth/oauth/google#access_token=ya29.a0AfB_byCKFzZh4NotXyRZ5-uKoz_Dzyg5N3Rae22A2fP8YmFSM4EdClY8SCIf78yn8aWNNErjPArfYt7Txp1Tz9RJGENQladBS2JB4cCJAaAmDRrhGuDCz5gA7E9BPfp_J6Q7P55JaUKu6-W5SOnXu-h4Z1D11I2ifQaCgYKAaQSAQ8SFQHGX2MippTru-8dX3kfFBnj0yod7g0169&token_type=Bearer&expires_in=3599&scope=email%20profile%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email%20openid&authuser=0&prompt=consent
     */
    const params = new URLSearchParams(window.location.hash.slice(1));
    const token = params.get('access_token');
    if (token) {
      fetchOAuth(token);
    }
  }, [fetchOAuth]);

  return <div>GoogleOAuthPage</div>;
}
