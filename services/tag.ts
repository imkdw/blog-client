import { HttpMethod } from '../types/api/common';
import { GetSearchTagResponse } from '../types/api/tag';
import { callApi } from './api';

// eslint-disable-next-line import/prefer-default-export
export const getSearchTag = (tagName: string): Promise<GetSearchTagResponse> => {
  const url = `/v1/tags/search/${tagName}`;
  return callApi<GetSearchTagResponse>({ url, method: HttpMethod.GET });
};
