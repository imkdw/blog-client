import { IOAuthProviders } from '../enum/auth';
import { IUserRoles } from '../enum/user';

export interface PostSignInBody {
  email: string;
  password: string;
}

export interface PostSignInResponse {
  email: string;
  nickname: string;
  profile: string;
  role: IUserRoles;
  accessToken: string;
}

export interface PostSignUpBody {
  email: string;
  password: string;
  nickname: string;
}
export interface PostSignUpResponse {
  email: string;
  nickname: string;
  profile: string;
  role: IUserRoles;
  accessToken: string;
}

export interface PostSendEmailVerifyCodeBody {
  email: string;
}
export interface PostSendEmailVerifyCodeResponse {
  verificationId: number;
}

export interface PostVerifyEmailVerificationCodeBody {
  verificationId: number;
  code: string;
}
export interface PostVerifyEmailVerificationCodeResponse {
  isVerified: boolean;
}

export interface PostOAuthSignInBody {
  email: string;
  provider: IOAuthProviders;
  token: string;
}
export interface PostOAuthSignInResponse {
  email: string;
  nickname: string;
  profile: string;
  role: IUserRoles;
  accessToken: string;
}

export interface PostOAuthSignUpBody {
  email: string;
  provider: IOAuthProviders;
  token: string;
}
export interface PostOAuthSignUpResponse {
  email: string;
  nickname: string;
  profile: string;
  role: IUserRoles;
  accessToken: string;
}

export interface PostKakaoOAuthBody {
  code: string;
  redirectUri: string;
}
export interface PostKakaoOAuthResponse {
  isExist: boolean;
  email: string;
  provider: IOAuthProviders;
  token: string;
}

export interface PostGithubOAuthBody {
  code: string;
  redirectUri: string;
}

export interface PostGithubOAuthResponse {
  isExist: boolean;
  email: string;
  provider: IOAuthProviders;
  token: string;
}

export interface GetGoogleOAuthResponse {
  isExist: boolean;
  email: string;
  provider: IOAuthProviders;
  token: string;
}

export interface OAuthResponse {
  isExist: boolean;
  email: string;
  provider: IOAuthProviders;
  token: string;
}

export interface PostRefreshTokenResponse {
  isSuccess: boolean;
}
