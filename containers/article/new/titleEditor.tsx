import { ChangeEvent } from 'react';

interface Props {
  title: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function ArticleTitleEditor({ title, changeHandler }: Props) {
  return (
    <div className="h-[40px] w-full border-b border-gray-300">
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        className="w-full pl-2"
        onChange={changeHandler}
        name="title"
        value={title}
      />
    </div>
  );
}
