import { CommonResponse } from '../../../../@types/common/response';
import { IUserRole } from '../../auth/enums/oauth-provider.enum';

interface SignInResponseData {
  email: string;
  nickname: string;
  profile: string;
  role: IUserRole;
  accessToken: string;
}

export interface SignInResponse extends CommonResponse<SignInResponseData> {}
