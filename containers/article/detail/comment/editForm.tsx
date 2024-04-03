'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import useUser from '../../../../store/use-user';
import { patchUpdateComment } from '../../../../services/comment';

interface Props {
  articleId: string;
  commentId: number;
  existContent: string;
  cancelUpdate: (commnetId: number) => void;
}

export default function CommentEditForm({ articleId, commentId, existContent, cancelUpdate }: Props) {
  const [comment, setComment] = useState(existContent);
  const { isLoggedIn } = useUser((state) => state);

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isLoggedIn) {
      // eslint-disable-next-line no-alert
      window.alert('로그인이 필요한 서비스입니다');
    }

    await patchUpdateComment(articleId, commentId, { content: comment });
    window.location.reload();
  };

  return (
    <form className="flex w-full flex-col gap-4" onSubmit={submitHandler}>
      <div className="h-[120px] w-full rounded bg-gray-200">
        <textarea
          name="comment"
          value={comment}
          onChange={changeHandler}
          className="h-full w-full resize-none rounded bg-inherit p-3 text-[18px] outline-none"
          placeholder="수정할 댓글을 입력해주세요"
        />
      </div>
      <div className="flex flex-row gap-2">
        <button type="submit" className="rounded bg-[#111926] p-1  pl-2 pr-2 text-sm text-white">
          저장
        </button>
        <button
          type="button"
          className="rounded bg-[#111926] p-1  pl-2  pr-2 text-sm text-white"
          onClick={() => cancelUpdate(commentId)}
        >
          취소
        </button>
      </div>
    </form>
  );
}
