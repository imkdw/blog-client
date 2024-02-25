import { IOAuthProvider } from '../../../api/@types/auth/enums/oauth-provider.enum';

export interface OAuthSignUpRequestBody {
  email: string;
  provider: IOAuthProvider;
  token: string;
}

export interface OAuthSignUpResponseBody {
  email: string;
  accessToken: string;
}
