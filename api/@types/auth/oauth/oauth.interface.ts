import { IOAuthProvider } from '../enums/oauth-provider.enum';

export interface OAuthResponse {
  isExist: boolean;

  email: string;

  provider: IOAuthProvider;

  token: string;
}
