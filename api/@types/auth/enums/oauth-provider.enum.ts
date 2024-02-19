export const OAuthProvider = {
  KAKAO: 'kakao',
  GITHUB: 'github',
  GOOGLE: 'google',
} as const;
export type IOAuthProvider = (typeof OAuthProvider)[keyof typeof OAuthProvider];
