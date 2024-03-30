import { GetPresignedUrlResponse } from '../@types/s3.interface';

// eslint-disable-next-line import/prefer-default-export
export const getPresignedUrl = async (fileName: string, extension: string): Promise<GetPresignedUrlResponse> => {
  const response = await fetch(
    `http://localhost:4000/v1/aws/s3/presigned-url?extension=${extension}&fileName=${fileName}`,
  );
  const json = await response.json();
  return json;
};
