'use client';

import { useState } from 'react';
import { Favorite, FavoriteBorder, ModeComment, Share } from '@mui/icons-material';
import { patchToggleArticleLike } from '../../../services/article';

interface Props {
  articleId: string;
  _likeCount: number;
  commentCount: number;
  _isLike: boolean;
}

export default function ArticleButtons({ articleId, _likeCount, commentCount, _isLike }: Props) {
  const [isLike, setIsLike] = useState(_isLike);
  const [likeCount, setLikeCount] = useState(_likeCount);

  const likeHanlder = async () => {
    const response = await patchToggleArticleLike(articleId);
    setIsLike(response.isLiked);
    setLikeCount(response.likeCount);
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
