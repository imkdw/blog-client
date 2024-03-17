export const HttpMethod = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
} as const;
export type IHttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];
