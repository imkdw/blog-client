import { IOAuthProvider } from '../../auth/enums/oauth-provider.enum';

export interface OAuthResponse {
  isExist: boolean;

  email: string;

  provider: IOAuthProvider;

  token: string;
}
