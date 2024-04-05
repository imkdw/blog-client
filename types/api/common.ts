export const HttpMethod = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;
export type IHttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];
