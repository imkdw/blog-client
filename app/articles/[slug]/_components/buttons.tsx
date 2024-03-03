'use client';

import { Favorite, FavoriteBorder, ModeComment, Share } from '@mui/icons-material';

interface Props {
  likeCount: number;
  commentCount: number;
  isLike: boolean;
}

export default function ArticleButtons({ likeCount, commentCount, isLike }: Props) {
  const likeHanlder = () => {
    // eslint-disable-next-line no-alert
    window.alert('준비중인 기능입니다.');
  };

  return (
    <div className="flex h-[60px] w-full flex-row justify-between border-y border-gray-300">
      <button
        type="button"
        className="flex w-1/3 flex-row items-center justify-center gap-[20px]"
        onClick={likeHanlder}
      >
        <div>{isLike ? <Favorite /> : <FavoriteBorder />}</div>
        <p className="text-[18px] text-gray-500">좋아요 · {likeCount}개</p>
      </button>
      <button type="button" className="flex w-1/3 flex-row items-center justify-center gap-[20px]">
        <div>
          <ModeComment />
        </div>
        <p className="text-[18px] text-gray-500">댓글 · {commentCount}개</p>
      </button>
      <button type="button" className="flex w-1/3 flex-row items-center justify-center gap-[20px]">
        <div>
          <Share />
        </div>
        <p className="text-[18px] text-gray-500">공유하기</p>
      </button>
    </div>
  );
}
