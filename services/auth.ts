/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  GetGoogleOAuthResponse,
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

// // oauth 로그인
// export const postOAuthSignIn = async (body: PostOAuthSignInBody): Promise<PostOAuthSignInResponse> => {};

// // oauth 회원가입
// export const postOAuthSignUp = async (body: PostOAuthSignUpBody): Promise<PostOAuthSignUpResponse> => {};

// // 구글
// export const getGoogleOAuth = async (accessToken: string): Promise<GetGoogleOAuthResponse> => {};

// // 카카오
// export const postKakaoOAuth = async (body: PostKakaoOAuthBody): Promise<PostKakaoOAuthResponse> => {};

// // 깃허브
// export const postGithubOAuth = async (body: PostGithubOAuthBody): Promise<PostGithubOAuthResponse> => {};
