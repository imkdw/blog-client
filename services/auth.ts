/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  GetGoogleOAuthResponse,
  OAuthResponse,
  PostGithubOAuthBody,
  PostGithubOAuthResponse,
  PostKakaoOAuthBody,
  PostKakaoOAuthResponse,
  PostOAuthSignInBody,
  PostOAuthSignInResponse,
  PostOAuthSignUpBody,
  PostOAuthSignUpResponse,
  PostSendEmailVerifyCodeBody,
  PostSendEmailVerifyCodeResponse,
  PostSignInBody,
  PostSignInResponse,
  PostSignUpBody,
  PostSignUpResponse,
  PostVerifyEmailVerificationCodeBody,
  PostVerifyEmailVerificationCodeResponse,
} from '../types/api/auth';
import { HttpMethod } from '../types/api/common';
import { callApi } from './api';

// 로그인
export const postSignIn = async (body: PostSignInBody): Promise<PostSignInResponse> => {
  const url = '/v1/auth/common/signin';
  return callApi<PostSignInResponse>(url, HttpMethod.POST, body);
};

// 회원가입
export const postSignUp = async (body: PostSignUpBody): Promise<PostSignUpResponse> => {
  const url = '/v1/auth/common/signup';
  return callApi<PostSignUpResponse>(url, HttpMethod.POST, body);
};

// 이메일 인증코드 발송
export const postSendEmailVerificationCode = async (
  body: PostSendEmailVerifyCodeBody,
): Promise<PostSendEmailVerifyCodeResponse> => {
  const url = '/v1/auth/email';
  return callApi<PostSendEmailVerifyCodeResponse>(url, HttpMethod.POST, body);
};

// 이메일 인증코드 검증
export const postVerifyCodeValidate = async (
  body: PostVerifyEmailVerificationCodeBody,
): Promise<PostVerifyEmailVerificationCodeResponse> => {
  const url = '/v1/auth/email/verify';
  return callApi<PostVerifyEmailVerificationCodeResponse>(url, HttpMethod.POST, body);
};

// oauth 로그인
export const postOAuthSignIn = async (body: PostOAuthSignInBody): Promise<PostOAuthSignInResponse> => {
  const url = '/v1/auth/oauth/signin';
  return callApi<PostOAuthSignInResponse>(url, HttpMethod.POST, body);
};

// oauth 회원가입
export const postOAuthSignUp = async (body: PostOAuthSignUpBody): Promise<PostOAuthSignUpResponse> => {
  const url = '/v1/auth/oauth/signup';
  return callApi<PostOAuthSignUpResponse>(url, HttpMethod.POST, body);
};

export const getGoogleOAuth = async (accessToken: string): Promise<OAuthResponse> => {
  const url = '/v1/auth/oauth/google';
  return callApi<GetGoogleOAuthResponse>(url, HttpMethod.GET, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// 카카오 OAuth
export const postKakaoOAuth = async (body: PostKakaoOAuthBody): Promise<PostKakaoOAuthResponse> => {
  const url = '/v1/auth/oauth/kakao';
  return callApi<PostKakaoOAuthResponse>(url, HttpMethod.POST, body);
};

// 깃허브 OAuth
export const postGithubOAuth = async (body: PostGithubOAuthBody): Promise<PostGithubOAuthResponse> => {
  const url = '/v1/auth/oauth/github';
  return callApi<PostGithubOAuthResponse>(url, HttpMethod.POST, body);
};
