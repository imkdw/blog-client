// 사용자 데이터 중복체크시 쿼리 타입
export const CheckDuplicateType = {
  EMAIL: 'email',
  NICKNAME: 'nickname',
} as const;
export type ICheckDuplicateType = (typeof CheckDuplicateType)[keyof typeof CheckDuplicateType];

// 유저 권한 목록
export const UserRoles = {
  NORMAL: 'NORMAL',
  ADMIN: 'ADMIN',
} as const;
export type IUserRoles = (typeof UserRoles)[keyof typeof UserRoles];
