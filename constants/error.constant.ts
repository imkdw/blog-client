type IErrorMessage = { [key: string]: string };

const BAD_REQUEST = {
  '401001': '이메일 또는 비밀번호가 일치하지 않습니다',
  '401002': '일반 로그인으로 진행해주세요',
  '401003': '소셜로그인에 실패했습니다',
  '401005': '인증이 만료되었습니다. 다시 로그인해주세요',
} as const;

const NOT_FOUND = {
  '404004': '사용자를 찾을 수 없습니다',
  '404005': '카테고리를 찾을 수 없습니다',
  '404006': '게시글을 찾을 수 없습니다',
  '404007': '댓글을 찾을 수 없습니다',
} as const;

const CONFLICT = {
  '409001': '중복된 이메일 입니다',
  '409002': '중복된 닉네임 입니다',
  '409003': '중복된 카테고리 이름 입니다',
  '409004': '중복된 카테고리 파라미터 입니다',
  '409005': '중복된 게시글 ID 입니다',
} as const;

// eslint-disable-next-line import/prefer-default-export
const ERROR_MESSAGE: IErrorMessage = {
  ...BAD_REQUEST,
  ...NOT_FOUND,
  ...CONFLICT,
};

export default ERROR_MESSAGE;
