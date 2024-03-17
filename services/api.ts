import axios, { AxiosResponse } from 'axios';
import { HttpMethod, IHttpMethod } from '../types/api/common';

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

export default api;
