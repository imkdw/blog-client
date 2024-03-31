import { GetPresignedUrlResponse } from '../components/markdown/s3.interface';
import { HttpMethod } from '../types/api/common';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const getPresignedUrl = async (fileName: string, extension: string): Promise<GetPresignedUrlResponse> => {
  const url = `/v1/aws/s3/presigned-url?extension=${extension}&fileName=${fileName}`;
  return callApi<GetPresignedUrlResponse>(url, HttpMethod.GET);
};
