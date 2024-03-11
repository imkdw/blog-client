// eslint-disable-next-line import/prefer-default-export
export function formatDate(date: string) {
  const formattedDate = new Intl.DateTimeFormat('ko-KR').format(new Date(date));

  return formattedDate;
}
