export interface OAuthSignInRequestBody {
  email: string;
  provider: any;
  token: string;
}

export interface OAuthSignInResponseBody {
  email: string;
  nickname: string;
  profile: string;
  role: any;
  accessToken: string;
}
