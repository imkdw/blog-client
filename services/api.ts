import axios from 'axios';
import PUBLIC_CONFIG from '../config/public/public.config';
import { IHttpMethod } from '../types/api/common';

const api = axios.create({
  baseURL: PUBLIC_CONFIG.url.server,
});

export const callApi = async <T>(url: string, method: IHttpMethod, body?: any): Promise<T> => {
  try {
    const response = await api[method](url, body);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error?.errorCode || 'UnknownError');
  }
};

export default api;
