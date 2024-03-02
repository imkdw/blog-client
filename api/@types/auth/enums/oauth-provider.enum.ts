export const OAuthProvider = {
  KAKAO: 'kakao',
  GITHUB: 'github',
  GOOGLE: 'google',
} as const;
export type IOAuthProvider = (typeof OAuthProvider)[keyof typeof OAuthProvider];

export const UserRole = {
  COMMON: '일반',
  ADMIN: '관리자',
} as const;
export type IUserRole = (typeof UserRole)[keyof typeof UserRole];
