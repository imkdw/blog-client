// eslint-disable-next-line import/prefer-default-export
export const convertDate = (dateString: string) => {
  // UTC 시간을 Date 객체로 변환
  const date = new Date(dateString); // 'Z'는 UTC 시간임을 나타냄

  // 브라우저의 로케일과 시간대를 사용하여 날짜를 'YYYY-MM-DD' 형식으로 변환
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(date)
    .replace(/\./g, '-')
    .replace(/\s+/g, '')
    .slice(0, -1); // 'YYYY. MM. DD.' 형식을 'YYYY-MM-DD'로 변환
};
