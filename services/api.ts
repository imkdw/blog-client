import axios, { AxiosResponse } from 'axios';
import { HttpMethod, IHttpMethod } from '../types/api/common';
import { LocalStorage } from '../utils/localStorage';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

export const callApi = async <T>(url: string, method: IHttpMethod, body?: any): Promise<T> => {
  try {
    let response: AxiosResponse<any, any>;

    if (method === HttpMethod.GET || method === HttpMethod.DELETE) {
      response = await api[method](url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
    } else {
      response = await api[method](url, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
    }
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error?.errorCode || 'UnknownError');
  }
};

interface CallApiParam {
  url: string;
  method: IHttpMethod;
  headers?: any;
  body?: any;
}
export const callApiV2 = async <T>(param: CallApiParam): Promise<T> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${param.url}`, {
    method: param.method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LocalStorage.getItem('accessToken')}`,
      ...param.headers,
    },
    body: JSON.stringify(param.body),
  });

  const json = await response.json();

  return json.data;
};

export default api;
