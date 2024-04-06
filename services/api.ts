import { PostRefreshTokenResponse } from '../types/api/auth';
import { HttpMethod, IHttpMethod } from '../types/api/common';

interface CallApiParams {
  url: string;
  method: IHttpMethod;
  body?: any;
  accessToken?: string;
  contentType?: string;
}

// eslint-disable-next-line import/prefer-default-export
export const callApi = async <T>(params: CallApiParams): Promise<T> => {
  try {
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
        return await callApi<T>(params);
      }
    }

    const json = await response.json();
    return json.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error?.errorCode || 'UnknownError');
  }
};
