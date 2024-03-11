export interface OAuthSignUpRequestBody {
  email: string;
  provider: any;
  token: string;
}

export interface OAuthSignUpResponseBody {
  email: string;
  nickname: string;
  profile: string;
  role: any;
  accessToken: string;
}
