import { ChangeEvent } from 'react';

interface Props {
  summary: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function ArticleSummaryEditor({ summary, changeHandler }: Props) {
  return (
    <div className="h-[40px] w-full border-b border-gray-300">
      <input
        type="text"
        placeholder="게시글에 대한 소개를 작성해주세요. (줄바꿈은 . 으로 구분)"
        className="w-full pl-2"
        onChange={changeHandler}
        name="summary"
        value={summary}
      />
    </div>
  );
}
