export const OAuthProviders = {
  GITHUB: 'github',
  GOOGLE: 'google',
  KAKAO: 'kakao',
} as const;
export type IOAuthProviders = (typeof OAuthProviders)[keyof typeof OAuthProviders];
