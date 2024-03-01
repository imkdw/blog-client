import { CommonResponse } from '../../../../@types/common/response';

interface SignInResponseData {
  email: string;
  nickname: string;
  profile: string;
  accessToken: string;
}

export interface SignInResponse extends CommonResponse<SignInResponseData> {}
