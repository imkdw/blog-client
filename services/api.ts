import { toast } from 'react-toastify';
import { PostRefreshTokenResponse } from '../types/api/auth';
import { HttpMethod, IHttpMethod } from '../types/api/common';
import ERROR_MESSAGE from '../constants/error.constant';

const toastErrorMessage = (errorCode: string) => {
  if (typeof window !== 'undefined') {
    toast.error(ERROR_MESSAGE[errorCode] || '일시적인 오류가 발생했습니다. 잠시후 다시 시도해주세요');
  }
};

interface CallApiParams {
  url: string;
  method: IHttpMethod;
  body?: any;
  accessToken?: string;
  contentType?: string;
}

// eslint-disable-next-line import/prefer-default-export
export const callApi = async <T>(params: CallApiParams): Promise<T> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${params.url}`, {
    method: params.method,
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
      'Content-Type': params.contentType || 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(params.body),
  });

  if (response.status === 401) {
    const url = '/v1/auth/refresh';
    const refreshResponse = await callApi<PostRefreshTokenResponse>({ url, method: HttpMethod.POST });

    if (refreshResponse.isSuccess) {
      return callApi<T>(params);
    }
  }

  const json = await response.json();
  if (json?.error?.errorCode) {
    toastErrorMessage(json.error.errorCode);

    const error = new Error();
    error.message = json.error.errorCode;
    throw error;
  }

  return json.data;
};
