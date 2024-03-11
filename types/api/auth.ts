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

export interface PostOAuthSignInBody {}
export interface PostOAuthSignInResponse {}

export interface PostOAuthSignUpBody {}
export interface PostOAuthSignUpResponse {}

export interface GetGoogleOAuthResponse {}

export interface PostKakaoOAuthBody {}
export interface PostKakaoOAuthResponse {}

export interface PostGithubOAuthBody {}
export interface PostGithubOAuthResponse {}
