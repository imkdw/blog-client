import { IOAuthProvider } from '../../../api/@types/auth/enums/oauth-provider.enum';

export interface OAuthSignInRequestBody {
  email: string;
  provider: IOAuthProvider;
  token: string;
}

export interface OAuthSignInResponseBody {
  email: string;
  accessToken: string;
}
