import { HttpMethod } from '../types/api/common';
import { GetCheckDuplicateResponse } from '../types/api/user';
import { ICheckDuplicateType } from '../types/enum/user';
import { callApi } from './api';

// 사용자 데이터 중복체크
// eslint-disable-next-line import/prefer-default-export
export const getCheckDuplicate = async (
  type: ICheckDuplicateType,
  value: string,
): Promise<GetCheckDuplicateResponse> => {
  const url = `/v1/users/duplicate?type=${type}&value=${value}`;
  return callApi<GetCheckDuplicateResponse>({ url, method: HttpMethod.GET });
};
