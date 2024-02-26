import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import publicConfig from '../config/public/public.config';

const serverUrl = publicConfig.url.server;

export const API_URL = {
  category: {
    getList: {
      parent: `${serverUrl}/v1/category/parent`,
      children: (param: string) => `${serverUrl}/v1/category/child?parentParam=${param}`,
    },
  },
};

const api = axios.create({
  baseURL: serverUrl,
});

export async function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const res = await api.get<T>(url, config);
    return res.data;
  } catch (err) {
    throw new Error((err as AxiosError).message);
  }
}

export async function post<T, V>(url: string, body: T, config?: AxiosRequestConfig): Promise<V> {
  try {
    const res = await api.post<V>(url, body, config);
    return res.data;
  } catch (err) {
    throw new Error((err as AxiosError).message);
  }
}
