'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import useUser from '../../../../store/use-user';
import { postCreateComment } from '../../../../services/comment';

interface Props {
  articleId: string;
}

export default function CommentWriteForm({ articleId }: Props) {
  const [comment, setComment] = useState('');
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

    await postCreateComment(articleId, { content: comment });
    window.location.reload();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={submitHandler}>
      <h2 className="text-[24px] font-bold">댓글 작성</h2>
      <div className="h-[120px] w-full rounded bg-gray-200">
        <textarea
          name="comment"
          value={comment}
          onChange={changeHandler}
          className="h-full w-full resize-none rounded bg-inherit p-3 text-[18px] outline-none"
          placeholder="댓글을 작성해주세요"
        />
      </div>
      <button type="submit" className="h-[50px] w-[130px] rounded bg-[#111926] text-[17px] font-bold text-white">
        작성하기
      </button>
    </form>
  );
}
