import { ChangeEvent } from 'react';

interface Props {
  articleId: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function ArticleIdEditor({ articleId, changeHandler }: Props) {
  return (
    <div className="h-[40px] w-full border-b border-gray-300">
      <input
        type="text"
        placeholder="게시글 아이디를 입력해주세요"
        className="w-full pl-2"
        onChange={changeHandler}
        name="id"
        value={articleId}
      />
    </div>
  );
}
